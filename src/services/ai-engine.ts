import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs/promises';
import path from 'path';
import { logGeneration, getPromptByName } from '../lib/db';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export class AIEngine {
  /**
   * Generates a single blog post using a two-step pipeline: Writer -> Humanizer
   */
  static async generateArticle(keyword: string, sourceContent: string = '') {
    try {
      console.log(`[AI Engine] Starting advanced pipeline for: ${keyword}`);

      // 1. Load Prompts from DB
      const writerPromptRow = getPromptByName('writer_agent');
      const humanizerPromptRow = getPromptByName('humanize_agent');

      const writerPrompt = writerPromptRow?.content || "Du är en expert på Home Assistant.";
      const humanizerPrompt = humanizerPromptRow?.content || "Gör texten mer mänsklig.";

      // 2. Step 1: Write initial content
      let userPrompt = `Skriv en djupgående artikel eller guide om: ${keyword}. Inkludera YAML-exempel om det är relevant. Använd svensk expertton.`;
      
      if (sourceContent) {
        userPrompt = `Baserat på följande nyhet/källa, skriv en egen, unik och insiktsfull artikel på svenska om ämnet (${keyword}). Kopiera inte rakt av utan tillför värde och ett "smart hem"-perspektiv.\n\nKÄLLA:\n${sourceContent}`;
      }

      const writerResponse = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 4000,
        system: writerPrompt,
        messages: [{ role: "user", content: userPrompt }],
      });

      const rawContent = (writerResponse.content[0] as any).text;

      // 3. Step 2: Humanize the content
      const humanizeResponse = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 4000,
        system: humanizerPrompt,
        messages: [{ role: "user", content: `Här är en artikel att humanisera:\n\n${rawContent}` }],
      });

      let finalContent = (humanizeResponse.content[0] as any).text;

      // Clean up markdown block if Claude adds it
      finalContent = finalContent.replace(/^```markdown\n/g, '').replace(/\n```$/g, '');

      // Determine category
      const isNews = !!sourceContent;
      const category = isNews ? 'nyheter' : 'guider';

      // Ensure we have frontmatter
      if (!finalContent.startsWith('---')) {
        finalContent = `---
title: "${keyword}"
description: "${isNews ? 'Senaste nytt om ' + keyword : 'En komplett guide till ' + keyword}."
pubDate: "${new Date().toISOString()}"
category: "${category}"
tags: ["Home Assistant", "Smart Hem"]
---

${finalContent}`;
      }
      
      // Parse Title
      const titleMatch = finalContent.match(/title:\s*"(.*?)"/);
      const title = titleMatch ? titleMatch[1] : keyword;
      
      // Generate slug
      const slug = title.toLowerCase().replace(/å/g, 'a').replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`);

      await fs.writeFile(filePath, finalContent, 'utf-8');
      
      logGeneration({
        title,
        keyword,
        status: 'success',
        tokens: writerResponse.usage.input_tokens + writerResponse.usage.output_tokens + humanizeResponse.usage.input_tokens + humanizeResponse.usage.output_tokens
      });

      return { success: true, slug, title };
    } catch (error: any) {
      console.error(`[AI Engine] Error: ${error.message}`);
      logGeneration({ title: 'Error', keyword, status: 'failed', tokens: 0, error: error.message });
      return { success: false, error: error.message };
    }
  }
}

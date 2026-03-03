import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs/promises';
import path from 'path';
import { logGeneration } from '../lib/db';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export class AIEngine {
  private static async getPrompt(name: string): Promise<string> {
    const promptPath = path.join(process.cwd(), 'src/prompts', `${name}.md`);
    try {
      return await fs.readFile(promptPath, 'utf-8');
    } catch (e) {
      console.error(`Prompt ${name} not found, using fallback.`);
      return '';
    }
  }

  /**
   * Generates a single blog post using a two-step pipeline: Writer -> Humanizer
   */
  static async generateArticle(keyword: string) {
    try {
      console.log(`[AI Engine] Starting advanced pipeline for: ${keyword}`);

      // 1. Load Prompts
      const writerPrompt = await this.getPrompt('writer_agent');
      const humanizerPrompt = await this.getPrompt('humanize_agent');

      // 2. Step 1: Write initial content
      const writerResponse = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 4000,
        system: writerPrompt || "Du är en expert på Home Assistant.",
        messages: [{ role: "user", content: `Skriv en djupgående artikel om: ${keyword}. Inkludera YAML-exempel. Använd svensk expertton.` }],
      });

      const rawContent = (writerResponse.content[0] as any).text;

      // 3. Step 2: Humanize the content
      const humanizeResponse = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20240620",
        max_tokens: 4000,
        system: humanizerPrompt || "Gör texten mer mänsklig.",
        messages: [{ role: "user", content: `Här är en artikel att humanisera:\n\n${rawContent}` }],
      });

      let finalContent = (humanizeResponse.content[0] as any).text;

      // Ensure we have frontmatter (simple fallback if AI missed it in humanize step)
      if (!finalContent.startsWith('---')) {
        finalContent = `---
title: "${keyword}"
description: "Djupgående guide om ${keyword} för Home Assistant."
pubDate: "${new Date().toISOString()}"
category: "home-assistant"
tags: ["Home Assistant", "Smart Hem"]
---

${finalContent}`;
      }
      
      // Parse Title
      const titleMatch = finalContent.match(/title:\s*"(.*?)"/);
      const title = titleMatch ? titleMatch[1] : keyword;
      
      // Generate slug
      const slug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
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

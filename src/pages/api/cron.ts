import type { APIRoute } from 'astro';
import Parser from 'rss-parser';
import { getRssFeeds, updateRssLastChecked } from '../../lib/db';
import { AIEngine } from '../../services/ai-engine';

const parser = new Parser();

export const GET: APIRoute = async ({ request }) => {
  // Simple auth to prevent abuse
  const url = new URL(request.url);
  if (url.searchParams.get('token') !== (process.env.CRON_TOKEN || 'smarthubb-cron-secret')) {
    return new Response('Unauthorized', { status: 401 });
  }

  const feeds = getRssFeeds() as any[];
  let processedCount = 0;

  for (const feed of feeds) {
    if (!feed.active) continue;

    try {
      console.log(`[Cron] Fetching RSS: ${feed.name} (${feed.url})`);
      const parsedFeed = await parser.parseURL(feed.url);
      
      // Look at the latest item
      if (parsedFeed.items && parsedFeed.items.length > 0) {
        const latestItem = parsedFeed.items[0];
        
        // Simple check: Is this newer than our last check?
        const itemDate = new Date(latestItem.isoDate || latestItem.pubDate || new Date());
        const lastChecked = feed.last_checked ? new Date(feed.last_checked) : new Date(0);

        if (itemDate > lastChecked) {
          console.log(`[Cron] New item found: ${latestItem.title}`);
          
          // Trigger generation in background
          const content = `${latestItem.title}

${latestItem.contentSnippet || latestItem.content}

Länk: ${latestItem.link}`;
          AIEngine.generateArticle(latestItem.title || 'Nyhet', content).catch(console.error);
          processedCount++;
        }
      }

      updateRssLastChecked(feed.id);
    } catch (e) {
      console.error(`[Cron] Failed to parse RSS feed ${feed.url}:`, e);
    }
  }

  return new Response(JSON.stringify({ success: true, processed: processedCount }), {
    headers: { 'Content-Type': 'application/json' }
  });
};

import type { APIRoute } from 'astro';
import { AIEngine } from '../../services/ai-engine';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const keyword = data.keyword || 'Home Assistant Nyheter';

  // Run in background so the UI doesn't hang
  // We'll return a 202 Accepted
  AIEngine.generateArticle(keyword).catch(e => console.error(e));

  return new Response(JSON.stringify({
    message: 'Generation started in background for: ' + keyword
  }), {
    status: 202,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

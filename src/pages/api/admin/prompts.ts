import type { APIRoute } from 'astro';
import { updatePrompt } from '../../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    if (data.name && data.content) {
      updatePrompt(data.name, data.content);
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

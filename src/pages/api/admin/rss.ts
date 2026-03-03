import type { APIRoute } from 'astro';
import { addRssFeed, deleteRssFeed } from '../../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    addRssFeed(data.name, data.url, data.category);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    if (id) {
      deleteRssFeed(parseInt(id, 10));
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

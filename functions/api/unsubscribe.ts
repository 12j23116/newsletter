/**
 * Cloudflare Pages Function — Newsletter Unsubscribe Endpoint
 * ────────────────────────────────────────────────────────────
 * Handles GET /api/unsubscribe?email=foo@bar.com
 * Marks subscriber as inactive in KV.
 */

interface Env {
  NEWSLETTER_KV?: { get(key: string): Promise<string | null>; put(key: string, value: string): Promise<void> };
}

export const onRequestGet: (context: { request: Request; env: Env }) => Promise<Response> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const email = url.searchParams.get('email')?.trim().toLowerCase();

  if (!email) {
    return jsonResponse({ error: 'Email parameter required' }, 400);
  }

  if (env.NEWSLETTER_KV) {
    const existing = await env.NEWSLETTER_KV.get(`sub:${email}`);
    if (existing) {
      const data = JSON.parse(existing);
      data.active = false;
      data.unsubscribedAt = new Date().toISOString();
      await env.NEWSLETTER_KV.put(`sub:${email}`, JSON.stringify(data));
      return jsonResponse({ message: 'You have been unsubscribed. Sorry to see you go!' });
    }
    return jsonResponse({ message: 'Email not found in our list.' });
  }

  return jsonResponse({ message: 'Unsubscribe request received.' });
};

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

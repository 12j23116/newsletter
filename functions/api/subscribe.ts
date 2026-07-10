/**
 * Cloudflare Pages Function — Newsletter Subscription Endpoint
 * ────────────────────────────────────────────────────────────
 * Handles POST /api/subscribe from the newsletter form.
 * Stores subscriber in Cloudflare KV (if bound) or returns success
 * for client-side handling.
 *
 * Env vars (set in Cloudflare Pages dashboard):
 *   NEWSLETTER_KV  — KV namespace binding for subscriber storage
 *   RESEND_API_KEY — for sending welcome email (optional)
 */

interface SubscribeRequest {
  email?: string;
}

interface Env {
  NEWSLETTER_KV?: { get(key: string): Promise<string | null>; put(key: string, value: string): Promise<void> };
  RESEND_API_KEY?: string;
}

export const onRequestPost: (context: { request: Request; env: Env }) => Promise<Response> = async (context) => {
  const { request, env } = context;

  // Parse request body
  let body: SubscribeRequest;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400);
  }

  const email = body.email?.trim().toLowerCase();

  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ error: 'Please provide a valid email address' }, 400);
  }

  // Check if KV is available
  if (env.NEWSLETTER_KV) {
    // Check if already subscribed
    const existing = await env.NEWSLETTER_KV.get(`sub:${email}`);
    if (existing) {
      const data = JSON.parse(existing);
      if (data.active === false) {
        // Reactivate
        data.active = true;
        data.reactivatedAt = new Date().toISOString();
        await env.NEWSLETTER_KV.put(`sub:${email}`, JSON.stringify(data));
        return jsonResponse({ message: 'Welcome back! Your subscription has been reactivated.' });
      }
      return jsonResponse({ message: 'You are already subscribed!' });
    }

    // Store new subscriber
    const subscriber = {
      email,
      active: true,
      subscribedAt: new Date().toISOString(),
      source: 'website',
    };
    await env.NEWSLETTER_KV.put(`sub:${email}`, JSON.stringify(subscriber));

    // Also update the subscriber count
    const countStr = await env.NEWSLETTER_KV.get('meta:count');
    const count = countStr ? parseInt(countStr, 10) + 1 : 1;
    await env.NEWSLETTER_KV.put('meta:count', String(count));

    // Send welcome email if Resend is configured
    if (env.RESEND_API_KEY) {
      try {
        await sendWelcomeEmail(env.RESEND_API_KEY, email);
      } catch (e) {
        // Welcome email failed, but subscription succeeded
        console.error('Welcome email failed:', e);
      }
    }

    return jsonResponse({
      message: 'Successfully subscribed! Check your inbox for a welcome email.',
      count,
    });
  }

  // No KV — return success (client-side handles the rest)
  return jsonResponse({
    message: 'Thank you for subscribing! We will add you to our list.',
  });
};

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

async function sendWelcomeEmail(apiKey: string, email: string) {
  const welcomeHTML = `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#0a0a0f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;">
<tr><td align="center" style="padding:20px;">
<table width="600" cellpadding="0" cellspacing="0" style="background:#0d1220;border-radius:16px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
<tr><td style="padding:32px 40px;text-align:center;background:linear-gradient(135deg,rgba(51,128,255,0.08),rgba(124,58,237,0.08));">
<div style="font-size:22px;font-weight:800;color:#f1f5f9;">TechNanoAI <span style="color:#3380ff;">Weekly</span></div>
</td></tr>
<tr><td style="padding:28px 40px;">
<h1 style="font-size:20px;font-weight:700;color:#f1f5f9;margin:0 0 12px;">Welcome to the frontier 🚀</h1>
<p style="font-size:14px;color:#94a3b8;line-height:1.6;margin:0 0 16px;">
You are now subscribed to TechNanoAI Weekly — your Monday morning briefing on AI, space, biotech, nuclear, quantum, and 7 more emerging technology frontiers.
</p>
<p style="font-size:14px;color:#94a3b8;line-height:1.6;margin:0 0 16px;">
Here is what to expect:
</p>
<ul style="font-size:14px;color:#94a3b8;line-height:1.8;padding-left:20px;margin:0 0 16px;">
<li>📰 Weekly digest every Monday at 8 AM</li>
<li>⚡ Breaking alerts for major breakthroughs</li>
<li>📊 Monthly trend reports across all 12 frontiers</li>
<li>🔬 Deep dives before they hit the website</li>
</ul>
<p style="font-size:14px;color:#94a3b8;line-height:1.6;margin:0 0 16px;">
Your first issue arrives this Monday. See you then!
</p>
</td></tr>
<tr><td style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.08);text-align:center;">
<p style="font-size:12px;color:#475569;margin:0;">
<a href="https://technanoai.com/newsletter" style="color:#475569;">Manage preferences</a> ·
<a href="https://technanoai.com/unsubscribe?email=${encodeURIComponent(email)}" style="color:#475569;">Unsubscribe</a>
</p>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'TechNanoAI Weekly <newsletter@technanoai.com>',
      to: [email],
      subject: 'Welcome to TechNanoAI Weekly 🚀',
      html: welcomeHTML,
      tags: [{ name: 'type', value: 'welcome' }],
    }),
  });
}

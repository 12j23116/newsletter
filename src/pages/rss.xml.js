import { allPosts } from '../data/blog/blog-content.ts';

export async function GET({ site }) {
  const siteUrl = site?.toString().replace(/\/$/, '') || 'https://technanoai.com';

  const items = allPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 50)
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.topic}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[TechNanoAI — Emerging Technology Intelligence]]></title>
    <link>${siteUrl}</link>
    <description><![CDATA[Deep-dive analysis across 12 emerging technology frontiers: AI, Robotics, Fusion, Biotech, BCI, Autonomous Vehicles, Space, Materials, Quantum, Nuclear, Energy Storage, and Cybersecurity.]]></description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

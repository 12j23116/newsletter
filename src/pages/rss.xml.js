import { allPosts } from '../data/blog/blog-content.ts';
import { allGuides } from '../data/guides/guides-listing.ts';
import { allNewsItems } from '../data/news/news-content.ts';
import { allEpisodes } from '../data/podcast/podcast-content.ts';

export async function GET({ site }) {
  const siteUrl = site?.toString().replace(/\/$/, '') || 'https://technanoai.com';

  const blogItems = allPosts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>Blog — ${post.topic}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const guideItems = allGuides
    .map((guide) => {
      const url = `${siteUrl}/guides/${guide.slug}`;
      const date = guide.date ? new Date(guide.date).toUTCString() : new Date('2026-01-01').toUTCString();
      return `    <item>
      <title><![CDATA[${guide.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${guide.description}]]></description>
      <category>Guide — ${guide.topic}</category>
      <pubDate>${date}</pubDate>
    </item>`;
    })
    .join('\n');

  const newsItems = allNewsItems
    .slice(0, 50)
    .map((item) => {
      const url = `${siteUrl}/news/${item.slug}`;
      return `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${item.excerpt}]]></description>
      <category>News — ${item.topicLabel}</category>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const podcastItems = allEpisodes
    .map((ep) => {
      const url = `${siteUrl}/podcast/${ep.slug}`;
      return `    <item>
      <title><![CDATA[${ep.title} — The Frontier Tech Show]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${ep.description}]]></description>
      <category>Podcast — ${ep.topic}</category>
      <pubDate>${new Date(ep.date).toUTCString()}</pubDate>
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
${blogItems}
${guideItems}
${newsItems}
${podcastItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

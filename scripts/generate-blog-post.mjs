#!/usr/bin/env node

/**
 * SEO Blog Post Generator
 * ────────────────────────
 * Generates SEO-optimized 1500-2000 word blog posts using OpenAI or GLM (Z.AI) API.
 * Outputs TypeScript code ready to paste into blog-content.ts and blog-posts.ts.
 *
 * Usage:
 *   node scripts/generate-blog-post.mjs --topic="Your Topic" --topic="AI" [--keywords="kw1, kw2"] [--provider=glm]
 *
 * Providers:
 *   --provider=openai  (default) → uses OPENAI_API_KEY, model gpt-4o
 *   --provider=glm               → uses GLM_API_KEY, model glm-5.2 via Z.AI API
 *
 * Requires:
 *   OPENAI_API_KEY and/or GLM_API_KEY environment variable (depending on --provider)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ─── topic Configuration ──────────────────────────────────────────────────

const topics = {
  'AI': {
    color: '#3b82f6',
    images: [
      '/images/ai-01-neural-brain.webp',
      '/images/ai-02-ml-training.webp',
      '/images/ai-03-llm-chat.webp',
      '/images/ai-04-computer-vision.webp',
      '/images/ai-05-chip-fabrication.webp',
      '/images/ai-06-drone-swarm.webp',
      '/images/ai-07-healthcare-diagnostic.webp',
      '/images/ai-08-generative-art.webp',
      '/images/ai-09-edge-iot.webp',
      '/images/ai-10-ethics-governance.webp',
      '/images/001-ai-neural-agent-cluster.webp',
    ],
    authors: [
      { name: 'Dr. Sarah Chen', role: 'AI Research Lead' },
      { name: 'Dr. Michael Torres', role: 'AI Systems Architect' },
      { name: 'Yuki Tanaka', role: 'Machine Learning Engineer' },
    ],
  },
  'Cybersecurity': {
    color: '#ef4444',
    images: [
      '/images/012-cybersecurity-digital-shield.webp',
    ],
    authors: [
      { name: 'Marcus Webb', role: 'Security Analyst' },
      { name: 'Nadia Hassan', role: 'Cybersecurity Researcher' },
    ],
  },
  'Space': {
    color: '#06b6d4',
    images: [
      '/images/007-space-orbital-station.webp',
    ],
    authors: [
      { name: 'Dr. James Park', role: 'Space Technology Editor' },
      { name: 'Commander Lisa Farrell', role: 'Aerospace Correspondent' },
    ],
  },
  'Biotech': {
    color: '#10b981',
    images: [
      '/images/004-biotech-gene-editing.webp',
    ],
    authors: [
      { name: 'Dr. Aisha Patel', role: 'Biotech Correspondent' },
      { name: 'Dr. Robert Kim', role: 'Genomics Editor' },
    ],
  },
  'Nuclear': {
    color: '#f59e0b',
    images: [
      '/images/010-nuclear-smr-reactor.webp',
    ],
    authors: [
      { name: 'Marcus Webb', role: 'Security Analyst' },
      { name: 'Dr. Helen Vu', role: 'Nuclear Energy Editor' },
    ],
  },
  'Energy Storage': {
    color: '#f97316',
    images: [
      '/images/011-energy-storage-smart-grid.webp',
    ],
    authors: [
      { name: 'Elena Rodriguez', role: 'Energy Correspondent' },
      { name: 'James Okafor', role: 'Clean Energy Analyst' },
    ],
  },
  'Robotics': {
    color: '#ec4899',
    images: [
      '/images/002-robotics-precision-lab.webp',
    ],
    authors: [
      { name: 'David Kim', role: 'Robotics Editor' },
      { name: 'Sophia Martinez', role: 'Automation Correspondent' },
    ],
  },
  'AV': {
    color: '#8b5cf6',
    images: [
      '/images/006-av-autonomous-vehicle.webp',
      '/images/av-01-self-driving-sedan.webp',
      '/images/av-02-robotaxi-urban.webp',
      '/images/av-03-lidar-pointcloud.webp',
    ],
    authors: [
      { name: 'David Kim', role: 'Robotics Editor' },
      { name: 'Alex Brennan', role: 'Autonomous Systems Analyst' },
    ],
  },
  'Quantum': {
    color: '#a78bfa',
    images: [
      '/images/009-quantum-computing.webp',
    ],
    authors: [
      { name: 'Dr. Sarah Chen', role: 'AI Research Lead' },
      { name: 'Dr. Priya Nair', role: 'Quantum Computing Editor' },
    ],
  },
  'Materials': {
    color: '#f43f5e',
    images: [
      '/images/008-materials-graphene-lattice.webp',
    ],
    authors: [
      { name: 'Elena Rodriguez', role: 'Energy Correspondent' },
      { name: 'Dr. Carlos Mendez', role: 'Materials Science Editor' },
    ],
  },
  'BCI': {
    color: '#0ea5e9',
    images: [
      '/images/005-bci-neural-link.webp',
    ],
    authors: [
      { name: 'Dr. Aisha Patel', role: 'Biotech Correspondent' },
      { name: 'Dr. Nathan Lee', role: 'Neurotech Editor' },
    ],
  },
  'Fusion': {
    color: '#fb923c',
    images: [
      '/images/003-fusion-tokamak-reactor.webp',
    ],
    authors: [
      { name: 'Dr. James Park', role: 'Space Technology Editor' },
      { name: 'Dr. Rachel Goldstein', role: 'Fusion Energy Editor' },
    ],
  },
};

// ─── CLI Argument Parsing ────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};

  for (const arg of args) {
    const match = arg.match(/^--(\w+)=(.+)$/);
    if (match) {
      parsed[match[1]] = match[2];
    }
  }

  return parsed;
}

function loadEnv() {
  const envPath = resolve(projectRoot, '.env');
  if (existsSync(envPath)) {
    const content = readFileSync(envPath, 'utf-8');
    for (const line of content.split('\n')) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    }
  }
}

// ─── Slug Generation ─────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60);
}

// ─── Word Count Estimation ───────────────────────────────────────────────────

function estimateWordCount(sections) {
  let words = 0;
  for (const section of sections) {
    if (section.text) words += section.text.split(/\s+/).length;
    if (section.items) {
      for (const item of section.items) words += item.split(/\s+/).length;
    }
    if (section.stats) {
      for (const stat of section.stats) {
        words += (stat.value + ' ' + stat.label).split(/\s+/).length;
      }
    }
  }
  return words;
}

function estimateReadTime(wordCount) {
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min`;
}

// ─── Provider Configuration ─────────────────────────────────────────────────

const PROVIDERS = {
  openai: {
    name: 'OpenAI',
    baseURL: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-4o',
    envKey: 'OPENAI_API_KEY',
    maxTokens: 4000,
  },
  glm: {
    name: 'GLM (Z.AI)',
    baseURL: 'https://api.z.ai/api/paas/v4/chat/completions',
    model: 'glm-5.2',
    envKey: 'GLM_API_KEY',
    maxTokens: 4000,
  },
};

// ─── API Call ────────────────────────────────────────────────────────────────

async function generateArticle(topic, topic, keywords, apiKey, providerKey) {
  const catConfig = topics[topic];
  if (!catConfig) {
    throw new Error(`Invalid topic: ${topic}\nValid topics: ${Object.keys(topics).join(', ')}`);
  }

  const author = catConfig.authors[Math.floor(Math.random() * catConfig.authors.length)];
  const heroImage = catConfig.images[Math.floor(Math.random() * catConfig.images.length)];
  const keywordStr = keywords ? `\nTarget keywords (use naturally throughout): ${keywords}` : '';

  const systemPrompt = `You are an expert SEO content writer specializing in emerging technology journalism. You write for TechScope, a leading emerging tech publication covering AI, Robotics, Fusion, Biotech, BCI, Autonomous Vehicles, Space, Materials, Quantum Computing, Nuclear, Energy Storage, and Cybersecurity.

Your writing style:
- Authoritative but accessible — expert analysis that non-experts can follow
- Data-driven with specific numbers, percentages, and comparisons
- No fluff or filler — every sentence adds value
- Active voice, short paragraphs (2-4 sentences max)
- Include expert quotes (attributed to the author)
- Use specific examples, company names, and real-world data
- Avoid generic phrases like "in today's world" or "it's worth noting"

SEO requirements:
- Target keyword in the title, first paragraph, at least 2 H2 headings, and naturally throughout
- Write a compelling meta description (subtitle) under 160 characters
- Use proper H2 > H3 heading hierarchy
- Include 4 key takeaways that summarize the article
- Structure content for featured snippets (use lists, stats, and direct answers)
- Internal linking opportunities via related topic mentions
- 1500-2000 words of actual content

You must respond with ONLY valid JSON in this exact structure:
{
  "title": "SEO-optimized title (60-70 chars)",
  "subtitle": "Meta description / article subtitle (under 160 chars)",
  "slug": "url-friendly-slug",
  "excerpt": "1-2 sentence excerpt for blog listing cards",
  "tags": ["tag1", "tag2", "tag3"],
  "keyTakeaways": ["takeaway 1", "takeaway 2", "takeaway 3", "takeaway 4"],
  "sections": [
    { "type": "p", "text": "Opening paragraph with hook and target keyword" },
    { "type": "h2", "text": "Section heading with keyword" },
    { "type": "p", "text": "Paragraph content" },
    { "type": "stats", "stats": [{"label": "Label", "value": "Value", "change": "optional context"}] },
    { "type": "h3", "text": "Subsection heading" },
    { "type": "ul", "items": ["item 1", "item 2", "item 3"] },
    { "type": "ol", "items": ["step 1", "step 2", "step 3"] },
    { "type": "quote", "text": "Expert quote text", "author": "Author Name, Role" },
    { "type": "callout", "variant": "info|warning|success|danger", "title": "Callout Title", "text": "Callout content" },
    { "type": "image", "src": "/images/example.webp", "caption": "Image caption with keyword" }
  ],
  "seo": {
    "targetKeywords": ["primary keyword", "secondary keyword"],
    "metaDescription": "Full meta description for search engines",
    "searchIntent": "informational|commercial|transactional",
    "internalLinkSuggestions": ["related topic 1", "related topic 2"],
    "schemaType": "TechArticle|NewsArticle|AnalysisNewsArticle"
  }
}

Rules for sections:
- Start with a "p" paragraph (the hook/intro)
- Use 4-6 "h2" sections with keyword-rich headings
- Include at least 1 "stats" block with 4 data points
- Include at least 1 "quote" from the author
- Include at least 1 "callout" (info, warning, success, or danger)
- Include at least 1 "ul" or "ol" list
- Include 1-2 "image" references using paths from the topic image list
- End with a strong conclusion paragraph
- Total word count must be 1500-2000 words`;

  const userPrompt = `Write a comprehensive, SEO-optimized blog post about:

Topic: ${topic}
topic: ${topic}
Author: ${author.name}, ${author.role}
Available hero images for this topic: ${catConfig.images.join(', ')}
Date: ${new Date().toISOString().split('T')[0]}${keywordStr}

Generate the full article as JSON following the system prompt structure exactly. Ensure 1500-2000 words of substantive content.`;

  const provider = PROVIDERS[providerKey];
  console.log(`\n🚀 Calling ${provider.name} API (model: ${provider.model})...\n`);

  const response = await fetch(provider.baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: provider.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: provider.maxTokens,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`${provider.name} API error (${response.status}): ${error}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

  // Extract JSON from response (handle markdown code fences)
  const jsonMatch = content.match(/```json\s*([\s\S]*?)```/) || content.match(/```\s*([\s\S]*?)```/);
  const jsonStr = jsonMatch ? jsonMatch[1] : content;

  let article;
  try {
    article = JSON.parse(jsonStr.trim());
  } catch (e) {
    // Try to find JSON object in the text
    const objMatch = content.match(/\{[\s\S]*\}/);
    if (objMatch) {
      article = JSON.parse(objMatch[0]);
    } else {
      throw new Error('Failed to parse JSON from API response:\n' + content.substring(0, 500));
    }
  }

  return { article, author, heroImage, topic, catConfig };
}

// ─── TypeScript Code Generation ──────────────────────────────────────────────

function generateBlogContentEntry(article, author, topic, catConfig) {
  const date = new Date().toISOString().split('T')[0];
  const wordCount = estimateWordCount(article.sections);
  const readTime = estimateReadTime(wordCount);

  return `  {
    title: '${article.title.replace(/'/g, "\\'")}',
    slug: '${article.slug}',
    topic: '${topic}',
    topicColor: '${catConfig.color}',
    date: '${date}',
    excerpt: '${article.excerpt.replace(/'/g, "\\'")}',
    readTime: '${readTime}',
    author: '${author.name}',
    authorRole: '${author.role}',
    tags: [${article.tags.map(t => `'${t.replace(/'/g, "\\'")}'`).join(', ')}],
  },`;
}

function generateArticleContentEntry(article, heroImage) {
  const sectionsStr = article.sections.map(section => {
    const parts = [`      { type: '${section.type}'`];

    if (section.text !== undefined) {
      parts.push(`      , text: '${section.text.replace(/'/g, "\\'").replace(/\n/g, ' ')}'`);
    }

    if (section.author) {
      parts.push(`      , author: '${section.author.replace(/'/g, "\\'")}'`);
    }

    if (section.items) {
      parts.push(`      , items: [
        ${section.items.map(item => `'${item.replace(/'/g, "\\'").replace(/\n/g, ' ')}'`).join(',\n        ')}
      ]`);
    }

    if (section.variant) {
      parts.push(`      , variant: '${section.variant}'`);
    }

    if (section.title) {
      parts.push(`      , title: '${section.title.replace(/'/g, "\\'")}'`);
    }

    if (section.stats) {
      parts.push(`      , stats: [
        ${section.stats.map(s =>
        `{ label: '${s.label.replace(/'/g, "\\'")}', value: '${s.value.replace(/'/g, "\\'")}'${s.change ? `, change: '${s.change.replace(/'/g, "\\'")}'` : ''} }`
      ).join(',\n        ')}
      ]`);
    }

    if (section.src) {
      parts.push(`      , src: '${section.src}'`);
    }

    if (section.caption) {
      parts.push(`      , caption: '${section.caption.replace(/'/g, "\\'")}'`);
    }

    parts.push(`      }`);
    return parts.join('');
  }).join(',\n');

  return `  '${article.slug}': {
    heroImage: '${heroImage}',
    subtitle: '${article.subtitle.replace(/'/g, "\\'")}',
    keyTakeaways: [
      ${article.keyTakeaways.map(kt => `'${kt.replace(/'/g, "\\'")}'`).join(',\n      ')}
    ],
    sections: [
${sectionsStr}
    ],
  },`;
}

function generateSEOReport(article) {
  const wordCount = estimateWordCount(article.sections);
  const seo = article.seo || {};

  return `
╔══════════════════════════════════════════════════════════════════╗
║                    SEO REPORT                                     ║
╠══════════════════════════════════════════════════════════════════╣
  Word Count:        ${wordCount} words ${wordCount >= 1500 && wordCount <= 2000 ? '✅' : '⚠️ (target: 1500-2000)'}
  Read Time:         ${estimateReadTime(wordCount)}
  Slug:              ${article.slug}
  Title Length:      ${article.title.length} chars ${article.title.length <= 70 ? '✅' : '⚠️ (max 70)'}
  Meta Description:  ${article.subtitle.length} chars ${article.subtitle.length <= 160 ? '✅' : '⚠️ (max 160)'}
  Tags:              ${article.tags?.join(', ') || 'N/A'}
  ${seo.targetKeywords ? `Target Keywords:   ${seo.targetKeywords.join(', ')}` : ''}
  ${seo.searchIntent ? `Search Intent:     ${seo.searchIntent}` : ''}
  ${seo.schemaType ? `Schema Type:       ${seo.schemaType}` : ''}
  ${seo.internalLinkSuggestions ? `Internal Links:    ${seo.internalLinkSuggestions.join(', ')}` : ''}
  Sections:          ${article.sections.filter(s => s.type === 'h2').length} H2 headings
                     ${article.sections.filter(s => s.type === 'h3').length} H3 headings
                     ${article.sections.filter(s => s.type === 'p').length} paragraphs
                     ${article.sections.filter(s => s.type === 'stats').length} stats blocks
                     ${article.sections.filter(s => s.type === 'quote').length} quotes
                     ${article.sections.filter(s => s.type === 'callout').length} callouts
                     ${article.sections.filter(s => s.type === 'ul' || s.type === 'ol').length} lists
                     ${article.sections.filter(s => s.type === 'image').length} images
╚══════════════════════════════════════════════════════════════════╝`;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  loadEnv();

  const args = parseArgs();

  const providerKey = args.provider || 'openai';

  if (!PROVIDERS[providerKey]) {
    console.error(`
❌ Invalid provider: ${providerKey}

Available providers:
  ${Object.keys(PROVIDERS).join(', ')}
`);
    process.exit(1);
  }

  if (!args.topic) {
    console.error(`
❌ Missing required argument: --topic

Usage:
  node scripts/generate-blog-post.mjs --topic="Your Topic" --topic="AI" [--keywords="kw1, kw2"] [--provider=glm]

Available topics:
  ${Object.keys(topics).join(', ')}

Available providers:
  ${Object.keys(PROVIDERS).join(', ')}

Example (OpenAI):
  node scripts/generate-blog-post.mjs --topic="How GPT-5 Agents Are Transforming Enterprise Workflows" --topic="AI" --keywords="GPT-5, AI agents, enterprise automation"

Example (GLM 5.2):
  node scripts/generate-blog-post.mjs --topic="How GPT-5 Agents Are Transforming Enterprise Workflows" --topic="AI" --provider=glm
`);
    process.exit(1);
  }

  if (!args.topic) {
    console.error(`
❌ Missing required argument: --topic

Available topics:
  ${Object.keys(topics).join(', ')}

Example:
  node scripts/generate-blog-post.mjs --topic="Your Topic" --topic="AI"
`);
    process.exit(1);
  }

  const provider = PROVIDERS[providerKey];
  const apiKey = process.env[provider.envKey];
  if (!apiKey) {
    console.error(`
❌ ${provider.envKey} not found!

Create a .env file in the project root:
  ${provider.envKey}=your-key-here

Or set it as an environment variable:
  set ${provider.envKey}=your-key-here

Get your API key:
  OpenAI:  https://platform.openai.com/api-keys
  GLM:     https://z.ai/manage-apikey/apikey-list
`);
    process.exit(1);
  }

  const topic = args.topic;
  const topic = args.topic;
  const keywords = args.keywords || '';

  console.log(`\n📝 Topic:     ${topic}`);
  console.log(`📂 topic:  ${topic}`);
  console.log(`🔌 Provider:  ${provider.name} (${provider.model})`);
  if (keywords) console.log(`🔑 Keywords:  ${keywords}`);

  try {
    const { article, author, heroImage, catConfig } = await generateArticle(topic, topic, keywords, apiKey, providerKey);

    const wordCount = estimateWordCount(article.sections);
    const date = new Date().toISOString().split('T')[0];

    // Override slug if empty
    if (!article.slug) {
      article.slug = slugify(article.title);
    }

    // Override hero image if not set or invalid
    if (!article.heroImage || !article.heroImage.startsWith('/images/')) {
      article.heroImage = heroImage;
    }

    // Fix image paths in sections
    article.sections = article.sections.map(s => {
      if (s.type === 'image' && (!s.src || !s.src.startsWith('/images/'))) {
        s.src = catConfig.images[Math.floor(Math.random() * catConfig.images.length)];
      }
      return s;
    });

    // Generate output
    const blogContentEntry = generateBlogContentEntry(article, author, topic, catConfig);
    const articleContentEntry = generateArticleContentEntry(article, heroImage);
    const seoReport = generateSEOReport(article);

    // Print everything
    console.log('\n' + '='.repeat(80));
    console.log('✅ Article generated successfully!\n');
    console.log(seoReport);
    console.log('\n' + '='.repeat(80));

    console.log('\n📋 STEP 1: Add this to `allPosts` array in src/pages/blog/blog-content.ts:\n');
    console.log(blogContentEntry);

    console.log('\n\n📋 STEP 2: Add this to `blogPostContent` object in src/pages/blog/blog-posts.ts:\n');
    console.log(articleContentEntry);

    // Save to file
    const outputDir = resolve(projectRoot, 'scripts', 'output');
    const outputFile = resolve(outputDir, `${article.slug}.ts`);
    const fullOutput = `/**
 * Generated Blog Post: ${article.title}
 * Date: ${date}
 * topic: ${topic}
 * Word Count: ${wordCount}
 *
 * STEP 1: Add the metadata below to allPosts in src/pages/blog/blog-content.ts
 * STEP 2: Add the post content below to blogPostContent in src/pages/blog/blog-posts.ts
 */

// ─── blog-content.ts entry (add to allPosts array) ──────────────────────────

${blogContentEntry}

// ─── blog-posts.ts entry (add to blogPostContent object) ──────────────────

${articleContentEntry}

// ─── SEO Metadata ────────────────────────────────────────────────────────────
${JSON.stringify(article.seo || {}, null, 2)}
`;

    // Create output directory and save
    const { mkdirSync } = await import('fs');
    try { mkdirSync(outputDir, { recursive: true }); } catch (e) { /* dir exists */ }
    writeFileSync(outputFile, fullOutput, 'utf-8');

    console.log(`\n\n💾 Full output saved to: scripts/output/${article.slug}.ts`);
    console.log('\n' + '='.repeat(80));
    console.log('✅ Done! Copy the two code blocks into your blog files and you\'re ready to go.');
    console.log('='.repeat(80) + '\n');

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}\n`);
    process.exit(1);
  }
}

main();

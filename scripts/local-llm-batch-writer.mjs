#!/usr/bin/env node

/**
 * Local LLM Batch Blog Writer
 * ─────────────────────────────
 * Generates SEO-optimized 1,500-2,000 word blog posts using a local LLM via Ollama.
 * NO paid or free external APIs required. Everything runs on your machine.
 *
 * Two-phase workflow:
 *   1. PLAN: Generate all article titles, slugs, H2s, key takeaways at once
 *   2. WRITE: Expand each header plan into a full article
 *
 * Usage:
 *   node scripts/local-llm-batch-writer.mjs --phase=plan --topic=AI --count=10
 *   node scripts/local-llm-batch-writer.mjs --phase=write --topic=AI
 *   node scripts/local-llm-batch-writer.mjs --phase=write --topic=AI --slug=one-specific-slug
 *   node scripts/local-llm-batch-writer.mjs --phase=inject
 *
 * Setup:
 *   1. Install Ollama: https://ollama.com/download (Windows, macOS, Linux)
 *   2. Pull a model: ollama pull qwen2.5:7b
 *   3. Run this script.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ─── Configuration ───────────────────────────────────────────────────────────

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
    topics: [
      'Frontier model benchmark comparison',
      'Enterprise AI agent implementation',
      'AI agent tools and frameworks',
      'RAG best practices for production',
      'AI model fine-tuning guide',
      'AI reasoning models vs instruction models',
      'AI safety and alignment in 2026',
      'AI compute infrastructure trends',
      'AI-powered software engineering',
      'Multimodal AI applications',
    ],
  },
  'Cybersecurity': {
    color: '#ef4444',
    images: ['/images/012-cybersecurity-digital-shield.webp'],
    authors: [
      { name: 'Marcus Webb', role: 'Security Analyst' },
      { name: 'Nadia Hassan', role: 'Cybersecurity Researcher' },
    ],
    topics: [
      'Post-quantum cryptography migration',
      'Zero Trust architecture implementation',
      'AI-powered threat detection',
      'Cloud security posture management',
      'Identity and access management trends',
      'Ransomware defense strategies',
      'Supply chain security frameworks',
      'Bug bounty program effectiveness',
    ],
  },
  'Space': {
    color: '#06b6d4',
    images: ['/images/007-space-orbital-station.webp'],
    authors: [
      { name: 'Dr. James Park', role: 'Space Technology Editor' },
      { name: 'Commander Lisa Farrell', role: 'Aerospace Correspondent' },
    ],
    topics: [
      'Reusable rocket economics',
      'Lunar gateway construction progress',
      'In-space manufacturing',
      'Mars mission architecture',
      'Satellite mega-constellation impact',
      'Space debris management',
      'Asteroid mining economics',
      'Private space stations',
    ],
  },
  'Biotech': {
    color: '#10b981',
    images: ['/images/004-biotech-gene-editing.webp'],
    authors: [
      { name: 'Dr. Aisha Patel', role: 'Biotech Correspondent' },
      { name: 'Dr. Robert Kim', role: 'Genomics Editor' },
    ],
    topics: [
      'CRISPR clinical trial results',
      'Cell therapy manufacturing scale-up',
      'Lab-grown meat price parity',
      'Synthetic biology platforms',
      'Bioprinting organ transplants',
      'Longevity therapeutics pipeline',
      'mRNA vaccine next generation',
      'Microbiome therapeutics market',
    ],
  },
  'Nuclear': {
    color: '#f59e0b',
    images: ['/images/010-nuclear-smr-reactor.webp'],
    authors: [
      { name: 'Marcus Webb', role: 'Security Analyst' },
      { name: 'Dr. Helen Vu', role: 'Nuclear Energy Editor' },
    ],
    topics: [
      'Small modular reactor deployment',
      'Nuclear fusion vs fission economics',
      'Advanced reactor designs',
      'Nuclear waste recycling',
      'Nuclear regulatory timeline',
      'Microreactor data center power',
      'Nuclear workforce shortage',
      'TerraPower Natrium reactor progress',
    ],
  },
  'Energy Storage': {
    color: '#f97316',
    images: ['/images/011-energy-storage-smart-grid.webp'],
    authors: [
      { name: 'Elena Rodriguez', role: 'Energy Correspondent' },
      { name: 'James Okafor', role: 'Clean Energy Analyst' },
    ],
    topics: [
      'Solid-state battery timeline',
      'Grid-scale battery deployment',
      'Iron-air long-duration storage',
      'Battery recycling supply chain',
      'EV charging infrastructure growth',
      'Home energy storage economics',
      'Sodium-ion battery commercialization',
      'Energy storage market forecast',
    ],
  },
  'Robotics': {
    color: '#ec4899',
    images: ['/images/002-robotics-precision-lab.webp'],
    authors: [
      { name: 'David Kim', role: 'Robotics Editor' },
      { name: 'Sophia Martinez', role: 'Automation Correspondent' },
    ],
    topics: [
      'Humanoid robots in factories',
      'Warehouse automation trends',
      'Surgical robotics market',
      'Soft robotics applications',
      'Robot safety standards',
      'Sim-to-real robotics training',
      'Agricultural robotics scaling',
      'Construction robotics adoption',
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
    topics: [
      'Robotaxi expansion economics',
      'Autonomous trucking corridors',
      'LiDAR vs camera autonomy debate',
      'AV safety validation frameworks',
      'Urban autonomous delivery bots',
      'Regulatory AV deployment map',
      'Sensor fusion architectures',
      'AV disengagement rate trends',
    ],
  },
  'Quantum': {
    color: '#a78bfa',
    images: ['/images/009-quantum-computing.webp'],
    authors: [
      { name: 'Dr. Sarah Chen', role: 'AI Research Lead' },
      { name: 'Dr. Priya Nair', role: 'Quantum Computing Editor' },
    ],
    topics: [
      'Quantum error correction milestones',
      'NIST post-quantum cryptography standards',
      'Quantum computing cloud access',
      'Quantum networking progress',
      'Quantum machine learning hype vs reality',
      'Trapped ion vs superconducting qubits',
      'Quantum algorithm speedups',
      'Quantum workforce education',
    ],
  },
  'Materials': {
    color: '#f43f5e',
    images: ['/images/008-materials-graphene-lattice.webp'],
    authors: [
      { name: 'Elena Rodriguez', role: 'Energy Correspondent' },
      { name: 'Dr. Carlos Mendez', role: 'Materials Science Editor' },
    ],
    topics: [
      'Graphene semiconductor progress',
      'Room-temperature superconductor claims',
      'Advanced battery materials',
      'Aerogels in industrial applications',
      'Self-healing materials development',
      'Metamaterials for 6G networks',
      'Sustainable construction materials',
      'Materials discovery with AI',
    ],
  },
  'BCI': {
    color: '#0ea5e9',
    images: ['/images/005-bci-neural-link.webp'],
    authors: [
      { name: 'Dr. Aisha Patel', role: 'Biotech Correspondent' },
      { name: 'Dr. Nathan Lee', role: 'Neurotech Editor' },
    ],
    topics: [
      'Neuralink clinical trial results',
      'Vascular BCI vs cranial implants',
      'BCI speech decoding breakthroughs',
      'Neuroprosthetics market growth',
      'Brain-to-text typing speed records',
      'BCI ethics and regulation',
      'Consumer neurotechnology devices',
      'BCI for stroke rehabilitation',
    ],
  },
  'Fusion': {
    color: '#fb923c',
    images: ['/images/003-fusion-tokamak-reactor.webp'],
    authors: [
      { name: 'Dr. James Park', role: 'Space Technology Editor' },
      { name: 'Dr. Rachel Goldstein', role: 'Fusion Energy Editor' },
    ],
    topics: [
      'Private fusion energy net gain',
      'Tokamak vs stellarator designs',
      'ITER construction delays analysis',
      'Commercial fusion reactor timeline',
      'Inertial confinement fusion progress',
      'Fusion tritium fuel supply',
      'High-temperature superconductor magnets',
      'Fusion power plant economics',
    ],
  },
};

const OLLAMA_BASE_URL = 'http://localhost:11434';

// Recommended models by hardware tier
const MODEL_TIERS = [
  {
    name: 'qwen2.5:7b',
    label: 'Qwen 2.5 7B',
    vram: 6,
    quality: 'Good for short articles (1,000-1,500 words)',
    speed: 'Fast on CPU/GPU',
  },
  {
    name: 'qwen2.5:14b',
    label: 'Qwen 2.5 14B',
    vram: 10,
    quality: 'Best quality for 1,500-2,000 word articles',
    speed: 'Moderate',
  },
  {
    name: 'llama3.1:8b',
    label: 'Llama 3.1 8B',
    vram: 7,
    quality: 'Good factual accuracy, follows instructions well',
    speed: 'Fast',
  },
  {
    name: 'llama3.2:3b',
    label: 'Llama 3.2 3B',
    vram: 3,
    quality: 'Acceptable for shorter content, may need more editing',
    speed: 'Very fast',
  },
  {
    name: 'gemma2:9b',
    label: 'Gemma 2 9B',
    vram: 8,
    quality: 'Strong writing quality',
    speed: 'Moderate',
  },
  {
    name: 'phi4:14b',
    label: 'Phi-4 14B',
    vram: 10,
    quality: 'Good reasoning and long-form writing',
    speed: 'Moderate',
  },
];

const MODEL = process.env.OLLAMA_MODEL || 'qwen2.5:14b';

// ─── CLI Args ────────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};
  for (const arg of args) {
    const match = arg.match(/^--(\w+)=(.+)$/);
    if (match) parsed[match[1]] = match[2];
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
        if (!process.env[key]) process.env[key] = value;
      }
    }
  }
}

// ─── Ollama Helpers ────────────────────────────────────────────────────────────

async function ollamaIsRunning() {
  try {
    const res = await fetch(`${OLLAMA_BASE_URL}/api/tags`);
    return res.ok;
  } catch {
    return false;
  }
}

async function listLocalModels() {
  try {
    const res = await fetch(`${OLLAMA_BASE_URL}/api/tags`);
    const data = await res.json();
    return data.models?.map(m => m.name) || [];
  } catch {
    return [];
  }
}

function recommendModel() {
  console.log('\n💻 Recommended Ollama models for this script:');
  for (const tier of MODEL_TIERS) {
    console.log(`   ${tier.name} — ${tier.label} — ~${tier.vram}GB VRAM/RAM — ${tier.quality}`);
  }
  console.log(`\n⚡ Currently configured model: ${MODEL}`);
  console.log('   Set with: OLLAMA_MODEL=qwen2.5:14b node scripts/local-llm-batch-writer.mjs --phase=...\n');
}

async function checkOllamaSetup() {
  const running = await ollamaIsRunning();
  if (!running) {
    console.error(`
❌ Ollama is not running on ${OLLAMA_BASE_URL}.

To use this script (zero APIs):

1. Install Ollama: https://ollama.com/download
2. Start Ollama (usually runs automatically after install)
3. Pull a model: ollama pull qwen2.5:14b
4. Run this script again.

Need a smaller model? Try: ollama pull qwen2.5:7b
`);
    recommendModel();
    process.exit(1);
  }

  const models = await listLocalModels();
  if (!models.includes(MODEL)) {
    console.error(`\n❌ Model "${MODEL}" not found locally.`);
    console.log('Available models:', models.length ? models.join(', ') : 'none');
    console.log(`\nPull it with: ollama pull ${MODEL}\n`);
    recommendModel();
    process.exit(1);
  }

  console.log(`✅ Ollama running. Using model: ${MODEL}\n`);
}

async function callOllama(prompt, system = null) {
  const body = {
    model: MODEL,
    messages: system
      ? [
          { role: 'system', content: system },
          { role: 'user', content: prompt },
        ]
      : [{ role: 'user', content: prompt }],
    stream: false,
    options: {
      temperature: 0.7,
      num_ctx: 8192,
      num_predict: 4096,
    },
  };

  const res = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Ollama error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.message?.content || '';
}

// ─── Utility ───────────────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60);
}

function estimateWordCount(sections) {
  let words = 0;
  for (const section of sections) {
    if (section.text) words += section.text.split(/\s+/).filter(Boolean).length;
    if (section.items) {
      for (const item of section.items) words += item.split(/\s+/).filter(Boolean).length;
    }
    if (section.stats) {
      for (const stat of section.stats) {
        words += (stat.value + ' ' + stat.label + ' ' + (stat.change || '')).split(/\s+/).filter(Boolean).length;
      }
    }
  }
  return words;
}

function estimateReadTime(wordCount) {
  return `${Math.max(1, Math.ceil(wordCount / 200))} min`;
}

function sanitizeForTs(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, ' ')
    .replace(/\r/g, ' ')
    .trim();
}

// ─── Paths ────────────────────────────────────────────────────────────────────

const planDir = resolve(projectRoot, 'scripts', 'generated');
const planFile = (topic) => resolve(planDir, `${topic}-plan.json`);
const articlesFile = (topic) => resolve(planDir, `${topic}-articles.json`);

function ensureDirs() {
  mkdirSync(planDir, { recursive: true });
}

// ─── PHASE 1: Generate Article Plan ─────────────────────────────────────────

const PLAN_SYSTEM_PROMPT = `You are a senior editorial planner for TechScope, an emerging technology publication covering AI, Robotics, Fusion, Biotech, BCI, AV, Space, Materials, Quantum, Nuclear, Energy Storage, and Cybersecurity.

You produce detailed content plans for SEO-optimized blog posts. Each plan must be unique, data-driven, and tightly focused on the assigned topic.

Rules:
- Titles should be SEO-optimized (50-70 chars), keyword-rich, and compelling.
- Slugs must be URL-safe, lowercase, hyphenated, under 60 chars.
- Subtitles (meta descriptions) under 160 characters.
- Excerpts should be 1-2 sentences for blog listing cards.
- Each article needs 4-6 H2 section headings that flow logically.
- Each H2 can have 1-3 H3 subheadings.
- Provide 4 concise key takeaways.
- Suggest 3-5 relevant tags.
- Include a stats block with 4 realistic data points for each article.
- Include target keywords and schema type (TechArticle or NewsArticle).

Output strictly as valid JSON array. No markdown fences, no explanations, no commentary. Just raw JSON. Ensure every article plan is unique and not generic.`;

async function generatePlan(topic, count) {
  const catConfig = topics[topic];
  if (!catConfig) throw new Error(`Invalid topic: ${topic}`);

  const topics = catConfig.topics.slice(0, count);
  const prompt = `Generate a content plan for ${count} unique SEO-optimized blog posts in the topic: ${topic}.

topic color: ${catConfig.color}
Available hero images (choose one per article): ${catConfig.images.join(', ')}

Each article should cover ONE of these specific topics (do not duplicate): ${topics.join('; ')}

For each article, generate the following JSON fields:
- title: SEO title (50-70 chars)
- slug: URL slug
- subtitle: meta description (under 160 chars)
- excerpt: 1-2 sentence card excerpt
- tags: 3-5 tags
- keyTakeaways: 4 bullet points
- sections: array of section objects with type and text:
  - type "h2" for each major section heading
  - type "h3" for subheadings where useful
  - one type "stats" with 4 data points: stats array of objects with label, value, and optional change
  - one type "ul" or "ol" list where useful
  - one type "quote" attributed to the article author
- author: author name and role (use only these authors: ${catConfig.authors.map(a => `${a.name}, ${a.role}`).join('; ')})
- heroImage: pick from the available list
- targetKeywords: 2-3 keywords
- schemaType: TechArticle or NewsArticle

Output ONLY a JSON array. Do not include markdown code blocks. Ensure titles and content angles are unique and avoid repetition across articles.`;

  const content = await callOllama(prompt, PLAN_SYSTEM_PROMPT);

  // Try to parse JSON
  const jsonMatch = content.match(/\[[\s\S]*\]/) || content.match(/\{[\s\S]*\}/);
  const jsonStr = jsonMatch ? jsonMatch[0] : content;

  let plan;
  try {
    plan = JSON.parse(jsonStr.trim());
    if (!Array.isArray(plan)) plan = [plan];
  } catch (e) {
    // Fallback: ask model to fix
    console.log('⚠️ Failed to parse plan, asking model to reformat...');
    const fixPrompt = `This content was not valid JSON:\n---\n${content}\n---\nPlease return ONLY a valid JSON array of article plans with the same fields. No markdown, no commentary.`;
    const fixed = await callOllama(fixPrompt, PLAN_SYSTEM_PROMPT);
    const fixedMatch = fixed.match(/\[[\s\S]*\]/);
    plan = JSON.parse((fixedMatch || fixed).trim());
    if (!Array.isArray(plan)) plan = [plan];
  }

  return plan.map((item, i) => {
    const selectedAuthor = catConfig.authors[i % catConfig.authors.length];
    let authorName = selectedAuthor.name;
    let authorRole = selectedAuthor.role;

    if (typeof item.author === 'string' && item.author) {
      const matched = catConfig.authors.find(a => item.author.includes(a.name));
      if (matched) { authorName = matched.name; authorRole = matched.role; }
    } else if (item.author && typeof item.author === 'object') {
      if (item.author.name) {
        const matched = catConfig.authors.find(a => item.author.name.includes(a.name));
        if (matched) { authorName = matched.name; authorRole = matched.role; }
        else { authorName = item.author.name; authorRole = item.author.role || selectedAuthor.role; }
      }
    }

    const heroImage = item.heroImage
      || (item.sections?.find(s => s.type === 'image')?.src)
      || catConfig.images[i % catConfig.images.length];

    return {
      ...item,
      topic,
      topicColor: catConfig.color,
      author: authorName,
      authorRole,
      heroImage,
      slug: slugify(item.title || item.slug || `${topic}-${i}`),
      date: new Date().toISOString().split('T')[0],
    };
  });
}

// ─── PHASE 2: Expand Article from Plan ────────────────────────────────────────

const WRITE_SYSTEM_PROMPT = `You are an expert technology journalist for TechScope. You write authoritative, data-driven, SEO-optimized long-form articles of 1,500-2,000 words for an audience of technology professionals, researchers, investors, and enthusiasts.

Your articles must:
- Include specific data, percentages, company names, and recent developments (use plausible 2024-2026 data where exact figures are needed; do not make up false specifics)
- Use active voice, short paragraphs (2-4 sentences each)
- Avoid generic filler like "in today's world" or "as we all know"
- Include one expert quote attributed to the assigned author
- Include one callout box (info, warning, success, or danger) with a title and short text
- Include one stats block with 4 relevant data points
- Include one bulleted or numbered list
- Include 1-2 inline image captions where relevant
- Follow the assigned section structure exactly
- Ensure total word count is 1,500-2,000 words

Output strictly as valid JSON with this structure:
{
  "sections": [
    { "type": "p", "text": "..." },
    { "type": "h2", "text": "..." },
    { "type": "p", "text": "..." },
    { "type": "h3", "text": "..." },
    { "type": "ul", "items": ["...", "..."] },
    { "type": "stats", "stats": [{"label":"...","value":"...","change?":"..."}] },
    { "type": "quote", "text": "...", "author": "Author Name, Role" },
    { "type": "callout", "variant": "info|warning|success|danger", "title": "...", "text": "..." },
    { "type": "image", "src": "/images/example.webp", "caption": "..." }
  ]
}

Only output valid JSON. No markdown code blocks. Ensure all sections in the plan are present and fully expanded. Preserve the exact H2 and H3 headings from the plan; add body paragraphs between them. Keep all section types requested in the original plan.`;

async function expandArticle(planItem, catConfig) {
  const planJson = JSON.stringify(planItem, null, 2);
  const prompt = `Expand this article plan into a full, unique 1,500-2,000 word SEO-optimized article.

ARTICLE PLAN:
${planJson}

INSTRUCTIONS:
1. Write in the voice of ${planItem.author}, ${planItem.authorRole}.
2. Follow the section outline exactly. Convert every heading in the plan into a full section with 2-5 body paragraphs or list items between headings.
3. Add a strong conclusion paragraph at the end.
4. Total word count must be 1,500-2,000 words.
5. Return ONLY JSON in the format specified in your system instructions. No extra commentary.`;

  const content = await callOllama(prompt, WRITE_SYSTEM_PROMPT);

  // Extract JSON
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  const jsonStr = jsonMatch ? jsonMatch[0] : content;

  let articleBody;
  try {
    articleBody = JSON.parse(jsonStr.trim());
  } catch (e) {
    console.log(`  ⚠️ Failed to parse article for "${planItem.title}", retrying reformat...`);
    const fixPrompt = `This output was not valid JSON:\n---\n${content}\n---\n\nPlease return ONLY valid JSON for the article body using the exact structure requested. Original plan:\n${planJson}`;
    const fixed = await callOllama(fixPrompt, WRITE_SYSTEM_PROMPT);
    const fixedMatch = fixed.match(/\{[\s\S]*\}/);
    articleBody = JSON.parse((fixedMatch || fixed).trim());
  }

  // Merge plan data with generated body
  const heroImage = planItem.heroImage || catConfig.images[0];
  const sections = articleBody.sections || [];

  // Ensure hero image is present if missing
  if (!sections.some(s => s.type === 'image')) {
    sections.push({
      type: 'image',
      src: heroImage,
      caption: `Visualizing the future of ${planItem.targetKeywords?.[0] || topic} development and real-world applications.`,
    });
  }

  return {
    heroImage,
    subtitle: planItem.subtitle,
    keyTakeaways: planItem.keyTakeaways,
    sections,
  };
}

// ─── PHASE 3: Inject into Blog Files ───────────────────────────────────────────

function tsObjBlock({ slug, title, topic, color, date, excerpt, readTime, author, authorRole, tags }) {
  return `  '${slug}': {
    title: '${sanitizeForTs(title)}',
    slug: '${slug}',
    topic: '${topic}',
    topicColor: '${color}',
    date: '${date}',
    excerpt: '${sanitizeForTs(excerpt)}',
    readTime: '${readTime}',
    author: '${author}',
    authorRole: '${authorRole}',
    tags: [${tags.map(t => `'${sanitizeForTs(t)}'`).join(', ')}],
  },`;
}

function tsArticleBlock({ slug, heroImage, subtitle, keyTakeaways, sections }) {
  const secLines = sections.map((section, idx) => {
    const parts = [`    { type: '${section.type}'`];
    if (section.text !== undefined) parts.push(`, text: '${sanitizeForTs(section.text)}'`);
    if (section.author) parts.push(`, author: '${sanitizeForTs(section.author)}'`);
    if (section.items) parts.push(`, items: [\n      ${section.items.map(it => `'${sanitizeForTs(it)}'`).join(',\n      ')}\n    ]`);
    if (section.variant) parts.push(`, variant: '${section.variant}'`);
    if (section.title) parts.push(`, title: '${sanitizeForTs(section.title)}'`);
    if (section.stats) parts.push(`, stats: [\n      ${section.stats.map(s => `{ label: '${sanitizeForTs(s.label)}', value: '${sanitizeForTs(s.value)}'${s.change ? `, change: '${sanitizeForTs(s.change)}'` : ''} }`).join(',\n      ')}\n    ]`);
    if (section.src) parts.push(`, src: '${section.src}'`);
    if (section.caption) parts.push(`, caption: '${sanitizeForTs(section.caption)}'`);
    parts.push(' }');
    return parts.join('');
  });

  return `  '${slug}': {
    heroImage: '${heroImage}',
    subtitle: '${sanitizeForTs(subtitle)}',
    keyTakeaways: [
      ${keyTakeaways.map(kt => `'${sanitizeForTs(kt)}'`).join(',\n    ')}
    ],
    sections: [
${secLines.join(',\n')}
    ],
  },`;
}

function injectIntoBlogFiles(articles) {
  const blogContentPath = resolve(projectRoot, 'src', 'pages', 'blog', 'blog-content.ts');
  const blogArticlesPath = resolve(projectRoot, 'src', 'pages', 'blog', 'blog-posts.ts');

  if (!existsSync(blogContentPath) || !existsSync(blogArticlesPath)) {
    console.error(`\n❌ Could not find target files at ${blogContentPath} or ${blogArticlesPath}`);
    return;
  }

  let blogContent = readFileSync(blogContentPath, 'utf-8');
  let blogPosts = readFileSync(blogArticlesPath, 'utf-8');

  for (const art of articles) {
    const wordCount = estimateWordCount(art.content.sections);
    const readTime = estimateReadTime(wordCount);

    // Inject into allPosts array
    const postBlock = tsObjBlock({
      slug: art.slug,
      title: art.title,
      topic: art.topic,
      color: art.topicColor,
      date: art.date,
      excerpt: art.excerpt,
      readTime,
      author: art.author,
      authorRole: art.authorRole,
      tags: art.tags,
    });

    if (blogContent.includes(`'${art.slug}'`)) {
      console.log(`   Skipping duplicate in blog-content.ts: ${art.slug}`);
    } else {
      // Insert before the last `];` in allPosts
      blogContent = blogContent.replace(
        /(\n\];\s*\n)(?=\s*export const blogStats)/,
        `,\n${postBlock}\n$1`
      );
    }

    // Inject into articleContent object
    const articleBlock = tsArticleBlock({
      slug: art.slug,
      heroImage: art.content.heroImage,
      subtitle: art.content.subtitle,
      keyTakeaways: art.content.keyTakeaways,
      sections: art.content.sections,
    });

    if (blogPosts.includes(`'${art.slug}':`)) {
      console.log(`   Skipping duplicate in blog-posts.ts: ${art.slug}`);
    } else {
      // Insert before final `};`
      blogPosts = blogPosts.replace(
        /\n\};\s*$/,
        `,\n${articleBlock}\n};\n`
      );
    }

    console.log(`   Injected: ${art.slug} (${wordCount} words, ${readTime})`);
  }

  writeFileSync(blogContentPath, blogContent, 'utf-8');
  writeFileSync(blogArticlesPath, blogPosts, 'utf-8');
  console.log(`\n✅ Injected ${articles.length} posts into blog-content.ts and blog-posts.ts\n`);
}

// ─── Save / Load Plan & Articles ──────────────────────────────────────────────

function savePlan(topic, plan) {
  ensureDirs();
  writeFileSync(planFile(topic), JSON.stringify(plan, null, 2), 'utf-8');
}

function loadPlan(topic) {
  if (!existsSync(planFile(topic))) return null;
  return JSON.parse(readFileSync(planFile(topic), 'utf-8'));
}

function saveArticles(topic, articles) {
  ensureDirs();
  writeFileSync(articlesFile(topic), JSON.stringify(articles, null, 2), 'utf-8');
}

function loadArticles(topic) {
  if (!existsSync(articlesFile(topic))) return [];
  return JSON.parse(readFileSync(articlesFile(topic), 'utf-8'));
}

// ─── Main ───────────────────────────────────────────────────────────────────────

async function planPhase(topic, count) {
  await checkOllamaSetup();
  console.log(`\n📋 Planning ${count} articles for topic: ${topic}\n`);

  let plan = await generatePlan(topic, count);

  // Ensure plan is an array and has the requested count
  if (!Array.isArray(plan)) plan = [plan];

  // Validate and fix each plan item
  for (const [i, item] of plan.entries()) {
    item.slug = slugify(item.title || item.slug || `${topic}-${i}`);
    item.topic = topic;
    item.topicColor = topics[topic].color;
    item.date = new Date().toISOString().split('T')[0];
    item.author = item.author || topics[topic].authors[i % topics[topic].authors.length].name;
    item.authorRole = item.authorRole || topics[topic].authors[i % topics[topic].authors.length].role;
    item.heroImage = item.heroImage || topics[topic].images[i % topics[topic].images.length];
    if (!item.excerpt) item.excerpt = item.subtitle || `An in-depth analysis of ${item.title || topic}.`;
    if (!item.tags || !Array.isArray(item.tags) || item.tags.length === 0) {
      item.tags = [topic, '2026', 'technology'];
    }
    if (!item.keyTakeaways || !Array.isArray(item.keyTakeaways) || item.keyTakeaways.length < 4) {
      item.keyTakeaways = [
        `${topic} technology is advancing faster than most industry forecasts assume`,
        'Data center and industrial deployments are now the primary commercial drivers',
        'Regulatory and scaling challenges remain the biggest barriers',
        'Companies that move first will capture the largest market share',
      ];
    }
    if (!item.sections || !Array.isArray(item.sections) || item.sections.length < 3) {
      item.sections = [
        { type: 'h2', text: 'Introduction' },
        { type: 'h2', text: 'Current State of the Market' },
        { type: 'h2', text: 'Key Technologies and Players' },
        { type: 'h2', text: 'Challenges and Opportunities' },
        { type: 'h2', text: 'Future Outlook' },
      ];
    }
  }

  savePlan(topic, plan);
  console.log(`\n✅ Saved plan with ${plan.length} articles to ${planFile(topic)}`);
  console.log(`\nReview/edit the plan, then run:`);
  console.log(`   node scripts/local-llm-batch-writer.mjs --phase=write --topic=${topic}\n`);
}

async function writePhase(topic, slug) {
  await checkOllamaSetup();

  const plan = loadPlan(topic);
  if (!plan) {
    console.error(`\n❌ No plan found for topic: ${topic}`);
    console.log(`   Run first: node scripts/local-llm-batch-writer.mjs --phase=plan --topic=${topic} --count=8`);
    process.exit(1);
  }

  const catConfig = topics[topic];
  let existing = loadArticles(topic);
  const toGenerate = slug
    ? plan.filter(p => p.slug === slug)
    : plan.filter(p => !existing.some(e => e.slug === p.slug));

  console.log(`\n✍️ Writing ${toGenerate.length} articles for topic: ${topic}`);

  for (let i = 0; i < toGenerate.length; i++) {
    const item = toGenerate[i];
    console.log(`\n[${i + 1}/${toGenerate.length}] ${item.title}`);

    const content = await expandArticle(item, catConfig);
    existing.push({ ...item, content });
    saveArticles(topic, existing);

    const wordCount = estimateWordCount(content.sections);
    console.log(`   Wrote ${wordCount} words. Saved to ${articlesFile(topic)}`);
  }

  console.log(`\n✅ ${toGenerate.length} articles written for ${topic}`);
  console.log(`   To inject into blog files, run:`);
  console.log(`   node scripts/local-llm-batch-writer.mjs --phase=inject --topic=${topic}\n`);
}

async function injectPhase(topic) {
  const articles = loadArticles(topic);
  if (!articles.length) {
    console.error(`\n❌ No generated articles found for topic: ${topic}`);
    process.exit(1);
  }
  await injectIntoBlogFiles(articles);
}

async function main() {
  loadEnv();
  const args = parseArgs();

  if (!args.phase) {
    console.log(`
Local LLM Batch Blog Writer — ZERO external APIs

Usage:
  node scripts/local-llm-batch-writer.mjs --phase=plan --topic=AI --count=10
  node scripts/local-llm-batch-writer.mjs --phase=write --topic=AI
  node scripts/local-llm-batch-writer.mjs --phase=write --topic=AI --slug=one-slug
  node scripts/local-llm-batch-writer.mjs --phase=inject --topic=AI

Available topics:
  ${Object.keys(topics).join(', ')}

Phases:
  plan   — generate all titles, headers, key takeaways for a topic
  write  — expand each planned article into 1,500-2,000 words
  inject — copy generated posts into blog-content.ts and blog-posts.ts

Setup:
  1. Install Ollama: https://ollama.com/download
  2. Pull a model: ollama pull qwen2.5:14b
  3. Run the script.

Set model: OLLAMA_MODEL=qwen2.5:7b node scripts/local-llm-batch-writer.mjs ...
`);
    return;
  }

  if (!args.topic) {
    console.error('❌ Missing required: --topic=<topic>');
    console.log(`Available: ${Object.keys(topics).join(', ')}`);
    process.exit(1);
  }

  if (args.phase === 'plan') {
    const count = parseInt(args.count || '8', 10);
    await planPhase(args.topic, count);
  } else if (args.phase === 'write') {
    await writePhase(args.topic, args.slug);
  } else if (args.phase === 'inject') {
    await injectPhase(args.topic);
  } else {
    console.error(`❌ Unknown phase: ${args.phase}. Use plan, write, or inject.`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(`\n❌ Error: ${err.message}\n`);
  process.exit(1);
});

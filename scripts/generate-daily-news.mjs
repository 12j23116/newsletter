#!/usr/bin/env node

/**
 * Daily News Generator — 100% FREE (no API key needed)
 * ────────────────────────────────────────────────────────
 * Fetches real news from RSS feeds for 12 emerging tech topics,
 * creates article JSON files directly from RSS content,
 * and auto-deletes articles older than 30 days.
 *
 * DEFAULT MODE: No API key required. Articles are built from RSS feed data.
 * OPTIONAL LLM MODE: Add --use-llm to enhance articles with an LLM (requires API key).
 *
 * Usage:
 *   node scripts/generate-daily-news.mjs                    # full run, all topics (FREE)
 *   node scripts/generate-daily-news.mjs --topic=ai         # single topic
 *   node scripts/generate-daily-news.mjs --max-per-topic=5  # limit articles per topic
 *   node scripts/generate-daily-news.mjs --use-llm          # enhance with LLM (needs API key)
 *   node scripts/generate-daily-news.mjs --provider=glm     # use GLM instead of OpenAI (with --use-llm)
 *   node scripts/generate-daily-news.mjs --cleanup-only     # just delete old articles
 *   node scripts/generate-daily-news.mjs --dry-run          # fetch RSS but don't save anything
 *
 * Requires: NOTHING. RSS feeds are free. No API key needed in default mode.
 * Optional: OPENAI_API_KEY or GLM_API_KEY in .env (only if using --use-llm)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, unlinkSync, mkdirSync, statSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ─── Configuration ───────────────────────────────────────────────────────────

const MAX_AGE_DAYS = 14;
const DEFAULT_MAX_PER_TOPIC = 6;
const MIN_PER_TOPIC = 4;

const ARTICLES_DIR = resolve(projectRoot, 'src', 'data', 'news', 'articles');

// ─── Topic → RSS Feed Mapping ────────────────────────────────────────────────

const TOPIC_FEEDS = {
  ai: {
    label: 'AI',
    color: '#3b82f6',
    img: '/images/001-ai-neural-agent-cluster.webp',
    feeds: [
      { url: 'https://feeds.feedburner.com/TheHackersNews', category: 'ai' },
      { url: 'https://techcrunch.com/category/artificial-intelligence/feed/', category: 'ai' },
      { url: 'https://www.artificialintelligence-news.com/feed/', category: 'ai' },
      { url: 'https://venturebeat.com/category/ai/feed/', category: 'ai' },
    ],
  },
  cybersecurity: {
    label: 'Cybersecurity',
    color: '#ef4444',
    img: '/images/012-cybersecurity-digital-shield.webp',
    feeds: [
      { url: 'https://feeds.feedburner.com/TheHackersNews', category: 'cybersecurity' },
      { url: 'https://www.bleepingcomputer.com/feed/', category: 'cybersecurity' },
      { url: 'https://krebsonsecurity.com/feed/', category: 'cybersecurity' },
      { url: 'https://www.securityweek.com/feed/', category: 'cybersecurity' },
    ],
  },
  space: {
    label: 'Space Exploration',
    color: '#06b6d4',
    img: '/images/007-space-orbital-station.webp',
    feeds: [
      { url: 'https://spacenews.com/feed/', category: 'space' },
      { url: 'https://www.nasaspaceflight.com/feed/', category: 'space' },
      { url: 'https://spaceflightnow.com/feed/', category: 'space' },
      { url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss', category: 'space' },
    ],
  },
  biotech: {
    label: 'Biotechnology',
    color: '#10b981',
    img: '/images/004-biotech-gene-editing.webp',
    feeds: [
      { url: 'https://www.fiercebiotech.com/rss/xml', category: 'biotech' },
      { url: 'https://endpts.com/feed/', category: 'biotech' },
      { url: 'https://www.genengnews.com/feed/', category: 'biotech' },
      { url: 'https://www.sciencedaily.com/rss/health_medicine/biotechnology.xml', category: 'biotech' },
    ],
  },
  nuclear: {
    label: 'Nuclear Energy',
    color: '#f59e0b',
    img: '/images/010-nuclear-smr-reactor.webp',
    feeds: [
      { url: 'https://www.world-nuclear.org/rss/default.aspx', category: 'nuclear' },
      { url: 'https://www.ans.org/news/rss/', category: 'nuclear' },
      { url: 'https://www.neimagazine.com/rss/', category: 'nuclear' },
    ],
  },
  energy: {
    label: 'Energy Storage',
    color: '#f97316',
    img: '/images/011-energy-storage-smart-grid.webp',
    feeds: [
      { url: 'https://www.energy-storage.news/feed/', category: 'energy' },
      { url: 'https://www.pv-magazine.com/feed/', category: 'energy' },
      { url: 'https://www.sciencedaily.com/rss/matter_energy/energy_technology.xml', category: 'energy' },
    ],
  },
  robotics: {
    label: 'Robotics',
    color: '#ec4899',
    img: '/images/002-robotics-precision-lab.webp',
    feeds: [
      { url: 'https://spectrum.ieee.org/feeds/topic/robotics.rss', category: 'robotics' },
      { url: 'https://www.therobotreport.com/feed/', category: 'robotics' },
      { url: 'https://www.sciencedaily.com/rss/matter_energy/engineering.xml', category: 'robotics' },
    ],
  },
  av: {
    label: 'Autonomous Vehicles',
    color: '#8b5cf6',
    img: '/images/006-av-autonomous-vehicle.webp',
    feeds: [
      { url: 'https://techcrunch.com/category/transportation/feed/', category: 'av' },
      { url: 'https://www.sae.org/news/rss', category: 'av' },
      { url: 'https://electrek.co/guides/autonomous-vehicles/feed/', category: 'av' },
    ],
  },
  quantum: {
    label: 'Quantum Computing',
    color: '#a78bfa',
    img: '/images/009-quantum-computing.webp',
    feeds: [
      { url: 'https://quantumcomputingreport.com/feed/', category: 'quantum' },
      { url: 'https://www.insidequantumtechnology.com/feed/', category: 'quantum' },
      { url: 'https://www.sciencedaily.com/rss/matter_energy/physics.xml', category: 'quantum' },
    ],
  },
  materials: {
    label: 'Advanced Materials',
    color: '#f43f5e',
    img: '/images/008-materials-graphene-lattice.webp',
    feeds: [
      { url: 'https://www.sciencedaily.com/rss/matter_energy/materials_science.xml', category: 'materials' },
      { url: 'https://phys.org/rss-feed/materials/', category: 'materials' },
      { url: 'https://news.mit.edu/rss/topic/materials', category: 'materials' },
    ],
  },
  bci: {
    label: 'Brain-Computer Interfaces',
    color: '#0ea5e9',
    img: '/images/005-bci-neural-link.webp',
    feeds: [
      { url: 'https://www.sciencedaily.com/rss/health_medicine/neuroscience.xml', category: 'bci' },
      { url: 'https://medicalxpress.com/rss-feed/tag/neuroprosthetics/', category: 'bci' },
      { url: 'https://news.mit.edu/rss/topic/neuroscience', category: 'bci' },
    ],
  },
  fusion: {
    label: 'Nuclear Fusion',
    color: '#fb923c',
    img: '/images/003-fusion-tokamak-reactor.webp',
    feeds: [
      { url: 'https://www.fusionindustryassociation.com/feed/', category: 'fusion' },
      { url: 'https://www.sciencedaily.com/rss/matter_energy/nuclear_energy.xml', category: 'fusion' },
      { url: 'https://phys.org/rss-feed/fusion/', category: 'fusion' },
    ],
  },
};

// ─── LLM Providers ───────────────────────────────────────────────────────────

const PROVIDERS = {
  openai: {
    name: 'OpenAI',
    baseURL: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-4o',
    envKey: 'OPENAI_API_KEY',
    maxTokens: 2000,
  },
  glm: {
    name: 'GLM (Z.AI)',
    baseURL: 'https://api.z.ai/api/paas/v4/chat/completions',
    model: 'glm-4-plus',
    envKey: 'GLM_API_KEY',
    maxTokens: 2000,
  },
};

// ─── CLI Argument Parsing ────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};
  for (const arg of args) {
    const match = arg.match(/^--(\w[\w-]*)=(.+)$/);
    if (match) {
      parsed[match[1]] = match[2];
    } else if (arg.startsWith('--')) {
      parsed[arg.slice(2)] = true;
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

// ─── Utilities ───────────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 70);
}

function todayISO() {
  return new Date().toISOString().split('T')[0];
}

function daysBetween(dateStr) {
  const articleDate = new Date(dateStr);
  const now = new Date();
  return Math.floor((now - articleDate) / (1000 * 60 * 60 * 24));
}

function estimateReadTime(wordCount) {
  const minutes = Math.max(2, Math.ceil(wordCount / 200));
  return `${minutes} min`;
}

function stripHtml(html) {
  return html
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function decodeXmlEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .trim();
}

// ─── RSS Fetching & Parsing ──────────────────────────────────────────────────

async function fetchRSS(url, timeoutMs = 15000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'TechNanoAI-NewsBot/1.0 (https://technanoai.com)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} for ${url}`);
    }
    const text = await response.text();
    return text;
  } catch (err) {
    console.warn(`  ⚠️  RSS fetch failed: ${url} — ${err.message}`);
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

function parseRSSItems(xml, feedUrl) {
  const items = [];

  // Match <item> blocks (RSS 2.0)
  const itemRegex = /<item[\s\S]*?<\/item>/gi;
  const itemMatches = xml.match(itemRegex) || [];

  for (const itemXml of itemMatches) {
    const titleMatch = itemXml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const linkMatch = itemXml.match(/<link[^>]*>([\s\S]*?)<\/link>/i);
    const descMatch = itemXml.match(/<description[^>]*>([\s\S]*?)<\/description>/i);
    const dateMatch = itemXml.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i);
    const creatorMatch = itemXml.match(/<dc:creator[^>]*>([\s\S]*?)<\/dc:creator>/i) ||
                         itemXml.match(/<author[^>]*>([\s\S]*?)<\/author>/i);

    const title = titleMatch ? decodeXmlEntities(titleMatch[1]) : '';
    const link = linkMatch ? linkMatch[1].trim() : '';
    const description = descMatch ? stripHtml(descMatch[1]) : '';
    const pubDate = dateMatch ? dateMatch[1].trim() : '';
    const creator = creatorMatch ? decodeXmlEntities(creatorMatch[1]) : '';

    if (title && link) {
      items.push({
        title,
        link,
        description: description.substring(0, 500),
        pubDate,
        source: creator || new URL(feedUrl).hostname.replace('www.', ''),
        feedUrl,
      });
    }
  }

  // Also try Atom <entry> blocks
  const entryRegex = /<entry[\s\S]*?<\/entry>/gi;
  const entryMatches = xml.match(entryRegex) || [];

  for (const entryXml of entryMatches) {
    const titleMatch = entryXml.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const linkMatch = entryXml.match(/<link[^>]*href="([^"]+)"/i);
    const summaryMatch = entryXml.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i) ||
                         entryXml.match(/<content[^>]*>([\s\S]*?)<\/content>/i);
    const dateMatch = entryXml.match(/<published[^>]*>([\s\S]*?)<\/published>/i) ||
                      entryXml.match(/<updated[^>]*>([\s\S]*?)<\/updated>/i);

    const title = titleMatch ? decodeXmlEntities(titleMatch[1]) : '';
    const link = linkMatch ? linkMatch[1] : '';
    const description = summaryMatch ? stripHtml(summaryMatch[1]) : '';
    const pubDate = dateMatch ? dateMatch[1].trim() : '';

    if (title && link) {
      items.push({
        title,
        link,
        description: description.substring(0, 500),
        pubDate,
        source: new URL(feedUrl).hostname.replace('www.', ''),
        feedUrl,
      });
    }
  }

  return items;
}

async function fetchTopicFeeds(topicId, topicConfig) {
  const allItems = [];

  for (const feed of topicConfig.feeds) {
    console.log(`  📡 Fetching: ${feed.url}`);
    const xml = await fetchRSS(feed.url);
    if (xml) {
      const items = parseRSSItems(xml, feed.url);
      console.log(`     → ${items.length} items found`);
      allItems.push(...items);
    }
  }

  // Deduplicate by title
  const seen = new Set();
  const unique = allItems.filter(item => {
    const key = item.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Sort by date (newest first), items without dates go last
  unique.sort((a, b) => {
    const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
    const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
    return dateB - dateA;
  });

  return unique;
}

// ─── Topic metadata for rich content generation ──────────────────────────────

const TOPIC_META = {
  ai: {
    desc: 'LLMs, agents & the race to AGI',
    keywords: ['AI', 'artificial intelligence', 'machine learning', 'LLM', 'deep learning'],
    context: 'The AI sector is experiencing unprecedented acceleration, with frontier models doubling in capability roughly every 8 months. Investment surpassed $200 billion globally in 2026, driven by enterprise adoption, agent frameworks, and the push toward artificial general intelligence.',
    challenges: 'Key challenges include alignment, hallucination control, compute costs, and regulatory frameworks like the EU AI Act and US executive orders on AI safety.',
    future: 'The trajectory points toward autonomous AI agents that can plan, execute, and self-correct across multi-step workflows — fundamentally reshaping software development, research, and knowledge work.',
  },
  cybersecurity: {
    desc: 'Post-quantum crypto & AI defense',
    keywords: ['cybersecurity', 'data breach', 'ransomware', 'zero-day', 'threat intelligence'],
    context: 'Cybersecurity threats have escalated with AI-powered attacks, supply chain compromises, and nation-state operations. Global cybercrime costs are projected to exceed $12 trillion annually, making security a board-level priority for every organization.',
    challenges: 'The transition to post-quantum cryptography, securing AI pipelines, and defending against deepfake-enabled social engineering represent the most pressing challenges.',
    future: 'Zero-trust architectures, AI-driven threat detection, and quantum-resistant encryption will define the next era of cybersecurity — with automation playing an increasingly central role in incident response.',
  },
  space: {
    desc: 'Launch vehicles & lunar economy',
    keywords: ['space exploration', 'rocket launch', 'satellite', 'NASA', 'SpaceX'],
    context: 'The space economy has surpassed $500 billion annually, driven by reusable rockets, mega-constellations, and the emerging lunar economy. Launch costs have dropped 95% since 2010, opening access to orbit for startups and nations alike.',
    challenges: 'Orbital debris management, radiation shielding for deep space, and sustainable lunar ISRU (in-situ resource utilization) remain key technical barriers.',
    future: 'Permanent lunar bases, Mars mission architectures, and space-based solar power are moving from concept to development, with the 2030s positioned as a transformative decade for human spaceflight.',
  },
  biotech: {
    desc: 'CRISPR, mRNA & lab-grown organs',
    keywords: ['biotechnology', 'CRISPR', 'gene editing', 'mRNA', 'biotech'],
    context: 'Biotechnology is undergoing a revolution driven by CRISPR gene editing, mRNA platforms, and AI-accelerated drug discovery. The FDA approved a record number of gene therapies in 2026, with the global biotech market exceeding $1.5 trillion.',
    challenges: 'Regulatory pathways for personalized medicine, manufacturing scale-up for cell therapies, and equitable access to breakthrough treatments remain significant hurdles.',
    future: 'Lab-grown organs, personalized cancer vaccines, and in-body gene editing are approaching clinical reality, promising to transform treatment paradigms for previously incurable conditions.',
  },
  nuclear: {
    desc: 'SMRs & next-gen fission reactors',
    keywords: ['nuclear energy', 'SMR', 'small modular reactor', 'fission', 'clean energy'],
    context: 'Nuclear energy is experiencing a renaissance, with small modular reactors (SMRs) entering commercial deployment and over 30 countries committing to triple nuclear capacity by 2050. The global nuclear market is projected to reach $90 billion by 2030.',
    challenges: 'Regulatory approval timelines, supply chain development for SMR manufacturing, and public perception management remain key obstacles to rapid deployment.',
    future: 'Factory-built SMRs, advanced fuel cycles, and Gen IV designs promise safer, cheaper, and more flexible nuclear power — positioning fission as a cornerstone of the clean energy transition.',
  },
  energy: {
    desc: 'Solid-state batteries & grid storage',
    keywords: ['energy storage', 'battery', 'solid-state', 'grid storage', 'renewable energy'],
    context: 'Energy storage deployment reached 108 GW globally in 2026, driven by falling battery costs ($85/kWh), solid-state breakthroughs, and grid-scale storage mandates. The market is projected to exceed $150 billion by 2030.',
    challenges: 'Supply chain constraints for critical minerals, recycling infrastructure, and the gap between lab-scale breakthroughs and commercial manufacturing remain key barriers.',
    future: 'Solid-state batteries, iron-air systems, and sodium-ion alternatives are converging to deliver safer, cheaper, and longer-duration storage — enabling 100% renewable grids.',
  },
  robotics: {
    desc: 'Humanoids, drones & automation',
    keywords: ['robotics', 'humanoid robot', 'automation', 'drones', 'industrial robots'],
    context: 'Robotics is entering a new era with humanoid robots entering commercial pilots, warehouse automation exceeding 4 million units globally, and drone delivery scaling across 50+ countries. The market is projected to reach $260 billion by 2030.',
    challenges: 'Battery life for mobile robots, manipulation dexterity in unstructured environments, and the cost gap between human and robot labor in many tasks remain key challenges.',
    future: 'General-purpose humanoid robots, AI-driven adaptive control, and swarm robotics promise to extend automation into construction, healthcare, and domestic settings within the decade.',
  },
  av: {
    desc: 'Robotaxis & Level 4 autonomy',
    keywords: ['autonomous vehicles', 'self-driving', 'robotaxi', 'AV', 'Level 4'],
    context: 'Autonomous vehicles are scaling commercially, with robotaxi services operating in 40+ cities and Level 4 trucking deployments expanding. The AV market is projected to reach $400 billion by 2035, with safety improving 10x over human drivers in deployed domains.',
    challenges: 'Edge case handling in dense urban environments, regulatory frameworks for driverless operation, and public trust remain the primary barriers to widespread adoption.',
    future: 'Geofenced robotaxi networks, autonomous freight corridors, and the integration of V2X communication will progressively expand the operational design domain for self-driving systems.',
  },
  quantum: {
    desc: 'Qubits & quantum advantage',
    keywords: ['quantum computing', 'qubit', 'quantum advantage', 'quantum error correction', 'quantum sensing'],
    context: 'Quantum computing is transitioning from research to early commercial applications, with 1,000+ qubit processors, quantum error correction milestones, and the first demonstrations of quantum advantage in practical problems. Investment surpassed $30 billion globally.',
    challenges: 'Error rates, cryogenic cooling requirements, and the gap between NISQ-era devices and fault-tolerant quantum computers remain significant technical barriers.',
    future: 'Error-corrected logical qubits, quantum networking, and hybrid quantum-classical algorithms are expected to unlock breakthroughs in drug discovery, optimization, and materials science by 2030.',
  },
  materials: {
    desc: 'Graphene & superconductors',
    keywords: ['advanced materials', 'graphene', 'superconductor', 'nanomaterials', 'metamaterials'],
    context: 'Advanced materials research is accelerating with AI-driven discovery, room-temperature superconductor claims, and breakthroughs in graphene production. The market for advanced materials exceeds $100 billion, with applications spanning electronics, energy, and healthcare.',
    challenges: 'Reproducibility of breakthrough results, scale-up from lab to manufacturing, and cost-competitive production methods remain key obstacles to commercialization.',
    future: 'AI-accelerated materials discovery, programmable matter, and bio-inspired materials promise to revolutionize energy storage, computing, and construction over the next decade.',
  },
  bci: {
    desc: 'Neural implants & EEG control',
    keywords: ['brain-computer interface', 'BCI', 'neural implant', 'Neuralink', 'neurotechnology'],
    context: 'Brain-computer interfaces are entering clinical trials at scale, with Neuralink, Synchron, and Precision Neuroscience conducting human implants. The BCI market is projected to reach $5 billion by 2030, driven by medical applications and emerging consumer use cases.',
    challenges: 'Biocompatibility, long-term implant stability, decoding bandwidth, and ethical frameworks for cognitive enhancement represent the primary challenges.',
    future: 'High-bandwidth neural interfaces, non-invasive EEG-to-text systems, and therapeutic applications for paralysis and neurological conditions are approaching mainstream viability.',
  },
  fusion: {
    desc: 'Tokamaks & path to net power',
    keywords: ['nuclear fusion', 'tokamak', 'fusion energy', 'plasma confinement', 'fusion reactor'],
    context: 'Nuclear fusion has entered a critical phase, with ITER reaching 85% construction completion, private fusion startups raising over $7 billion, and the first Q>1 breakeven demonstrations achieved. The race to commercial fusion by the 2030s is intensifying.',
    challenges: 'Plasma confinement at reactor-relevant durations, materials that can withstand 14 MeV neutron flux, and the enormous capital costs of first-of-a-kind plants remain formidable barriers.',
    future: 'Compact tokamaks, stellarator optimization, and alternative confinement approaches (field-reversed configurations, magneto-inertial fusion) are all converging toward the goal of net power production within a decade.',
  },
};

// ─── SEO helpers ──────────────────────────────────────────────────────────────

function generateSEOTitle(title, topicLabel) {
  const cleanTitle = title.replace(/&#\d+;/g, '').replace(/&[a-z]+;/g, '').trim();
  if (cleanTitle.length <= 60) return `${cleanTitle} | ${topicLabel} News`;
  return cleanTitle.substring(0, 57) + '... | ' + topicLabel + ' News';
}

function generateMetaDescription(description, topicLabel, topicDesc) {
  const cleanDesc = (description || '').replace(/&#\d+;/g, '').replace(/&[a-z]+;/g, '').trim();
  if (cleanDesc.length >= 120 && cleanDesc.length <= 160) return cleanDesc;
  if (cleanDesc.length > 160) return cleanDesc.substring(0, 157) + '...';
  return `${cleanDesc} ${topicDesc}. Latest ${topicLabel} developments and analysis from TechNanoAI.`.substring(0, 160);
}

function generateKeywords(topicId, title) {
  const meta = TOPIC_META[topicId];
  if (!meta) return topicId;
  const titleWords = title.toLowerCase().match(/[a-z]{4,}/g) || [];
  const uniqueTitleWords = [...new Set(titleWords)].slice(0, 3);
  return [...meta.keywords.slice(0, 4), ...uniqueTitleWords, 'TechNanoAI', 'emerging tech news'].join(', ');
}

function generateTags(topicId, title) {
  const meta = TOPIC_META[topicId];
  if (!meta) return [topicId, 'news', 'tech'];
  const titleWords = title.toLowerCase().match(/[a-z]{5,}/g) || [];
  const uniqueTitleWords = [...new Set(titleWords)].slice(0, 2);
  return [...meta.keywords.slice(0, 2), ...uniqueTitleWords, 'emerging tech'];
}

// ─── Free Article Builder (from RSS content, no LLM) ─────────────────────────

function buildArticleFromRSS(item, topicConfig, topicId, index) {
  const slug = slugify(item.title);
  const description = (item.description || '').replace(/&#\d+;/g, "'").replace(/&[a-z]+;/g, '').trim();
  const meta = TOPIC_META[topicId] || { desc: '', context: '', challenges: '', future: '', keywords: [] };
  const cleanTitle = item.title.replace(/&#\d+;/g, "'").replace(/&[a-z]+;/g, '').trim();

  // Split description into sentences and paragraphs
  const descSentences = description.match(/[^.!?]+[.!?]+/g) || [description];
  const paragraphs = [];
  for (let i = 0; i < descSentences.length; i += 2) {
    paragraphs.push(descSentences.slice(i, i + 2).join(' ').trim());
  }

  // ── Build rich body sections ──
  const body = [];

  // Opening paragraph — hook with the news
  body.push({
    type: 'p',
    text: paragraphs[0] || `A significant development in ${topicConfig.label} has emerged. ${description || cleanTitle}`,
  });

  // Background context paragraph
  body.push({
    type: 'p',
    text: meta.context,
  });

  // Key Details section — from RSS description
  if (paragraphs.length > 1) {
    body.push({ type: 'h2', text: 'Key Details of the Development' });
    for (let i = 1; i < Math.min(paragraphs.length, 4); i++) {
      body.push({ type: 'p', text: paragraphs[i] });
    }
  } else {
    body.push({ type: 'h2', text: 'Key Details of the Development' });
    body.push({
      type: 'p',
      text: `According to reporting from ${item.source}, ${description || cleanTitle}. The development represents a notable step forward in the ${topicConfig.label} landscape, with implications for both the research community and industry stakeholders.`,
    });
  }

  // Industry Context section
  body.push({ type: 'h2', text: `Industry Context: ${topicConfig.label} in 2026` });
  body.push({
    type: 'p',
    text: meta.context,
  });
  body.push({
    type: 'p',
    text: `This news arrives at a time when ${topicConfig.label.toLowerCase()} is experiencing rapid transformation. ${meta.desc}. The sector has attracted significant investment and attention from both established players and emerging startups, creating a competitive landscape that drives innovation at an unprecedented pace.`,
  });

  // Technical Analysis section
  body.push({ type: 'h2', text: 'Technical Analysis & Implications' });
  body.push({
    type: 'p',
    text: `From a technical standpoint, this development demonstrates the maturation of ${topicConfig.label.toLowerCase()} capabilities. The achievement reflects years of research and development, incremental improvements, and the convergence of multiple technological threads — from hardware advances to software innovations and new methodologies.`,
  });
  body.push({
    type: 'p',
    text: `For engineers, researchers, and decision-makers working in this space, the practical implications are significant. The development likely influences roadmap planning, resource allocation, and strategic partnerships across the industry. Organizations that can quickly adapt to and build upon this advancement will be well-positioned for the next phase of growth.`,
  });

  // Challenges section
  body.push({ type: 'h2', text: 'Challenges & Considerations' });
  body.push({
    type: 'p',
    text: meta.challenges,
  });
  body.push({
    type: 'p',
    text: `As with any emerging technology development, the path from breakthrough to widespread adoption is rarely linear. Technical hurdles must be overcome, regulatory frameworks adapted, and market dynamics navigated. The stakeholders involved — from researchers and companies to regulators and end-users — will need to collaborate to realize the full potential of this advancement while managing associated risks.`,
  });

  // Callout
  body.push({
    type: 'callout',
    variant: 'info',
    title: 'Why This Matters Now',
    text: `This development is part of a broader wave of innovation across 12 emerging technology frontiers. TechNanoAI tracks these developments daily, providing context and analysis that goes beyond the headlines to help you understand what matters and why.`,
  });

  // Why It Matters section
  body.push({ type: 'h2', text: 'Why It Matters' });
  body.push({
    type: 'p',
    text: `The significance of this development extends beyond the immediate news. In the broader context of ${topicConfig.label.toLowerCase()}, it represents a step change that could influence research directions, investment flows, and strategic planning across the sector. For professionals tracking emerging technologies, understanding the implications of such developments is critical for staying ahead of the curve.`,
  });
  body.push({
    type: 'p',
    text: `The ripple effects are likely to be felt across adjacent fields as well. Cross-domain innovation — where breakthroughs in one area enable progress in seemingly unrelated fields — is increasingly common in emerging technology. A development in ${topicConfig.label.toLowerCase()} today could unlock new possibilities in other frontier domains tomorrow.`,
  });

  // What Comes Next section
  body.push({ type: 'h2', text: 'What Comes Next' });
  body.push({
    type: 'p',
    text: meta.future,
  });
  body.push({
    type: 'p',
    text: `Expect follow-up coverage as more details emerge and the implications become clearer. TechNanoAI will continue monitoring this story and providing updates across all 12 emerging technology frontiers. For the latest developments in ${topicConfig.label} and adjacent fields, stay tuned to our daily news coverage and in-depth analysis.`,
  });

  // ── Key Takeaways ──
  const takeaways = [
    `${cleanTitle.substring(0, 80)} — a notable development in ${topicConfig.label}`,
    `The ${topicConfig.label.toLowerCase()} sector continues to accelerate, with ${meta.desc.toLowerCase()} driving rapid progress`,
    `Industry context: ${meta.context.substring(0, 100)}...`,
    `Challenges remain: ${meta.challenges.substring(0, 80)}...`,
    `Future outlook: ${meta.future.substring(0, 80)}...`,
  ];

  // ── Stats ──
  const stats = [
    { value: '12', label: 'Tech Frontiers Covered', change: 'Daily updates' },
    { value: '14', label: 'Day News Cycle', change: 'Fresh content' },
    { value: topicConfig.label, label: 'Category', change: meta.desc },
    { value: item.source.split('(')[0].trim(), label: 'Source', change: 'RSS verified' },
  ];

  // ── Pull Quote ──
  const pullQuote = {
    text: `This development underscores the extraordinary pace of innovation in ${topicConfig.label.toLowerCase()}. What seemed like science fiction a decade ago is rapidly becoming engineering reality.`,
    author: 'TechNanoAI Editorial',
    role: `Emerging Technology Analysis`,
  };

  // ── Impact Cards ──
  const impactCards = [
    { icon: '📈', title: 'Market Impact', text: `This development is expected to influence market valuations, investment flows, and strategic planning across the ${topicConfig.label} sector and adjacent industries.` },
    { icon: '🔬', title: 'Technical Significance', text: `The development pushes the frontier of what is technically achievable in ${topicConfig.label.toLowerCase()}, opening new research directions and potential applications.` },
    { icon: '🌍', title: 'Broader Implications', text: `Beyond the immediate field, this advancement may have cascading effects on policy, regulation, and public perception of emerging technologies.` },
  ];

  // ── Timeline ──
  const timeline = [
    { date: 'Early 2020s', event: `Foundational research and early prototypes in ${topicConfig.label}` },
    { date: '2024-2025', event: 'Scaling efforts and first commercial deployments' },
    { date: todayISO(), event: cleanTitle.substring(0, 80), current: true },
    { date: 'Next 12 months', event: 'Expected follow-up developments and market response' },
  ];

  // ── FAQs ──
  const faqs = [
    { q: `What is the significance of this ${topicConfig.label} development?`, a: `This development represents a meaningful step forward in ${topicConfig.label.toLowerCase()}. ${meta.context.substring(0, 200)}` },
    { q: `How does this impact the broader emerging technology landscape?`, a: `${topicConfig.label} is one of 12 key emerging technology frontiers. Developments in this field often have cross-domain implications, influencing adjacent sectors and enabling new applications.` },
    { q: `What are the main challenges facing ${topicConfig.label}?`, a: meta.challenges },
    { q: `What is the future outlook for ${topicConfig.label}?`, a: meta.future },
    { q: 'How often does TechNanoAI cover emerging tech news?', a: `TechNanoAI provides daily news coverage across all 12 emerging technology frontiers, with articles auto-refreshing every day and expiring after 14 days to ensure you always see the most relevant and current developments.` },
  ];

  // ── Poll ──
  const poll = {
    question: `How will this ${topicConfig.label} development impact the industry?`,
    options: [
      { text: 'Major disruption — accelerates the timeline significantly', votes: 42 },
      { text: 'Moderate impact — incremental but meaningful progress', votes: 35 },
      { text: 'Minimal impact — interesting but not game-changing', votes: 12 },
      { text: 'Too early to tell — need more data', votes: 18 },
    ],
  };

  // ── Tags ──
  const tags = generateTags(topicId, cleanTitle);

  // ── SEO fields ──
  const seoTitle = generateSEOTitle(cleanTitle, topicConfig.label);
  const metaDescription = generateMetaDescription(description, topicConfig.label, meta.desc);
  const keywords = generateKeywords(topicId, cleanTitle);

  // Count words for read time
  const wordCount = body
    .filter(s => s.type === 'p')
    .reduce((acc, s) => acc + (s.text || '').split(/\s+/).length, 0);

  return {
    id: `${topicId}-${Date.now()}-${index}`,
    topic: topicId,
    topicLabel: topicConfig.label,
    topicColor: topicConfig.color,
    title: seoTitle,
    excerpt: description.substring(0, 200) || cleanTitle,
    date: todayISO(),
    readTime: estimateReadTime(wordCount),
    source: 'TechNanoAI',
    img: topicConfig.img,
    slug: slug,
    sourceLink: item.link,
    sourceName: item.source,
    body: body,
    takeaways: takeaways,
    stats: stats,
    pullQuote: pullQuote,
    impactCards: impactCards,
    timeline: timeline,
    faqs: faqs,
    tags: tags,
    poll: poll,
    metaTitle: seoTitle,
    metaDescription: metaDescription,
    keywords: keywords,
    featured: index === 0,
  };
}

// ─── LLM Article Generation (optional, requires API key) ─────────────────────

async function generateArticleFromHeadline(headlineItem, topicConfig, topicId, apiKey, provider) {
  const systemPrompt = `You are an expert technology journalist writing for TechNanoAI, a leading emerging tech publication. You write concise, factual news articles (300-500 words) based on real news headlines.

Your writing style:
- Authoritative, factual, and concise
- Active voice, short paragraphs (2-3 sentences)
- Include specific details, numbers, and context where possible
- No fluff or filler
- Professional tone for a tech-savvy audience

You must respond with ONLY valid JSON in this exact structure:
{
  "title": "Compelling news title (60-80 chars, different from the source headline)",
  "excerpt": "1-2 sentence summary for news cards (max 200 chars)",
  "body": [
    {"type": "p", "text": "Opening paragraph with the key news and why it matters"},
    {"type": "h2", "text": "Section heading"},
    {"type": "p", "text": "Paragraph content"},
    {"type": "h2", "text": "Why It Matters"},
    {"type": "p", "text": "Analysis paragraph"},
    {"type": "h2", "text": "What Comes Next"},
    {"type": "p", "text": "Forward-looking paragraph"}
  ]
}

Rules:
- 4-6 body sections total
- 300-500 words of actual content
- Start with a "p" paragraph
- Include at least 3 "h2" sections
- End with a forward-looking section
- Do NOT include the source URL or source name in the article text`;

  const userPrompt = `Write a news article based on this real news headline:

Headline: ${headlineItem.title}
Source description: ${headlineItem.description}
Source: ${headlineItem.source}
Topic: ${topicConfig.label}
Date: ${todayISO()}

Generate the article as JSON following the system prompt structure exactly. Make the title unique and SEO-friendly. Write 300-500 words of substantive content.`;

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
      temperature: 0.6,
      max_tokens: provider.maxTokens,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`LLM API error (${response.status}): ${error}`);
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

  // Extract JSON from response
  const jsonMatch = content.match(/```json\s*([\s\S]*?)```/) || content.match(/```\s*([\s\S]*?)```/);
  const jsonStr = jsonMatch ? jsonMatch[1] : content;

  let article;
  try {
    article = JSON.parse(jsonStr.trim());
  } catch (e) {
    const objMatch = content.match(/\{[\s\S]*\}/);
    if (objMatch) {
      article = JSON.parse(objMatch[0]);
    } else {
      throw new Error('Failed to parse JSON from LLM response');
    }
  }

  return article;
}

// ─── Article JSON File Operations ────────────────────────────────────────────

function saveArticleJson(article) {
  const filePath = join(ARTICLES_DIR, `${article.slug}.json`);
  writeFileSync(filePath, JSON.stringify(article, null, 2), 'utf-8');
  console.log(`  💾 Saved: ${article.slug}.json`);
}

function loadExistingSlugs() {
  if (!existsSync(ARTICLES_DIR)) return [];
  return readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''));
}

function cleanupOldArticles() {
  if (!existsSync(ARTICLES_DIR)) {
    console.log('📁 Articles directory does not exist yet — nothing to clean up.');
    return 0;
  }

  const files = readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.json'));
  let deleted = 0;

  for (const file of files) {
    const filePath = join(ARTICLES_DIR, file);
    try {
      const content = readFileSync(filePath, 'utf-8');
      const article = JSON.parse(content);
      const age = daysBetween(article.date);

      if (age > MAX_AGE_DAYS) {
        unlinkSync(filePath);
        console.log(`  🗑️  Deleted (age: ${age}d): ${file}`);
        deleted++;
      }
    } catch (err) {
      // If we can't parse it, check file modification date as fallback
      try {
        const stats = statSync(filePath);
        const fileAge = daysBetween(stats.mtime.toISOString().split('T')[0]);
        if (fileAge > MAX_AGE_DAYS) {
          unlinkSync(filePath);
          console.log(`  🗑️  Deleted (file age: ${fileAge}d): ${file}`);
          deleted++;
        }
      } catch (e) {
        console.warn(`  ⚠️  Could not process: ${file}`);
      }
    }
  }

  return deleted;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  loadEnv();

  const args = parseArgs();
  const useLLM = args['use-llm'] || false;
  const providerKey = args.provider || 'openai';
  const maxPerTopic = parseInt(args['max-per-topic'] || String(DEFAULT_MAX_PER_TOPIC), 10);
  const dryRun = args['dry-run'] || false;
  const cleanupOnly = args['cleanup-only'] || false;
  const singleTopic = args.topic || null;

  // Ensure articles directory exists
  if (!existsSync(ARTICLES_DIR)) {
    mkdirSync(ARTICLES_DIR, { recursive: true });
    console.log(`📁 Created articles directory: ${ARTICLES_DIR}`);
  }

  // ── Cleanup Phase ──────────────────────────────────────────────────────────
  console.log('\n' + '═'.repeat(70));
  console.log(`🧹 CLEANUP: Removing articles older than ${MAX_AGE_DAYS} days`);
  console.log('═'.repeat(70));
  const deletedCount = cleanupOldArticles();
  console.log(`   Deleted ${deletedCount} old article(s)\n`);

  if (cleanupOnly) {
    console.log('✅ Cleanup-only mode complete.');
    return;
  }

  // ── Validate API key (only if --use-llm) ──────────────────────────────────
  let provider = null;
  let apiKey = null;
  if (useLLM) {
    provider = PROVIDERS[providerKey];
    if (!provider) {
      console.error(`❌ Invalid provider: ${providerKey}\nAvailable: ${Object.keys(PROVIDERS).join(', ')}`);
      process.exit(1);
    }
    apiKey = process.env[provider.envKey];
    if (!apiKey && !dryRun) {
      console.error(`❌ ${provider.envKey} not found!\nCreate a .env file with:\n  ${provider.envKey}=your-key-here\nOr run without --use-llm for the free mode (no API key needed).`);
      process.exit(1);
    }
  }

  // ── Determine topics to process ────────────────────────────────────────────
  const topicsToProcess = singleTopic
    ? { [singleTopic]: TOPIC_FEEDS[singleTopic] }
    : TOPIC_FEEDS;

  if (singleTopic && !TOPIC_FEEDS[singleTopic]) {
    console.error(`❌ Invalid topic: ${singleTopic}\nAvailable: ${Object.keys(TOPIC_FEEDS).join(', ')}`);
    process.exit(1);
  }

  const existingSlugs = new Set(loadExistingSlugs());
  let totalGenerated = 0;
  let totalSkipped = 0;
  let totalFailed = 0;

  console.log('═'.repeat(70));
  console.log(`📰 DAILY NEWS GENERATION`);
  console.log(`   Mode: ${useLLM ? `LLM-enhanced (${provider.name} ${provider.model})` : 'FREE (RSS only, no API key)'}`);
  console.log(`   Max per topic: ${maxPerTopic}`);
  console.log(`   Topics: ${Object.keys(topicsToProcess).join(', ')}`);
  console.log(`   Date: ${todayISO()}`);
  console.log(`   Dry run: ${dryRun ? 'YES (no files saved)' : 'NO'}`);
  console.log('═'.repeat(70) + '\n');

  // ── Process each topic ─────────────────────────────────────────────────────
  for (const [topicId, topicConfig] of Object.entries(topicsToProcess)) {
    console.log(`\n${'─'.repeat(50)}`);
    console.log(`📋 Topic: ${topicConfig.label} (${topicId})`);
    console.log('─'.repeat(50));

    // Fetch RSS feeds
    const feedItems = await fetchTopicFeeds(topicId, topicConfig);
    console.log(`   Total unique items from feeds: ${feedItems.length}`);

    if (feedItems.length === 0) {
      console.log(`   ⚠️  No items found — skipping topic.`);
      continue;
    }

    // Filter to today's items or recent (last 2 days)
    const now = Date.now();
    const recentItems = feedItems.filter(item => {
      if (!item.pubDate) return true; // Keep items without dates
      const itemDate = new Date(item.pubDate).getTime();
      const ageHours = (now - itemDate) / (1000 * 60 * 60);
      return ageHours <= 48; // Within last 48 hours
    });

    // If not enough recent items, use all available
    const candidateItems = recentItems.length >= MIN_PER_TOPIC ? recentItems : feedItems;

    // Take top N items
    const selectedItems = candidateItems.slice(0, maxPerTopic);
    console.log(`   Selected for generation: ${selectedItems.length} items\n`);

    for (let i = 0; i < selectedItems.length; i++) {
      const item = selectedItems[i];

      // Generate a preliminary slug to check for duplicates
      const tempSlug = slugify(item.title);
      if (existingSlugs.has(tempSlug)) {
        console.log(`   ⏭️  Skipping (duplicate slug): ${tempSlug}`);
        totalSkipped++;
        continue;
      }

      if (dryRun) {
        console.log(`   [DRY RUN] Would generate: ${item.title}`);
        totalGenerated++;
        continue;
      }

      try {
        console.log(`   ✍️  Generating [${i + 1}/${selectedItems.length}]: ${item.title.substring(0, 60)}...`);

        let articleObj;

        if (useLLM && apiKey && provider) {
          // LLM-enhanced mode
          const generated = await generateArticleFromHeadline(item, topicConfig, topicId, apiKey, provider);
          const slug = slugify(generated.title || item.title);
          if (existingSlugs.has(slug)) {
            console.log(`   ⏭️  Skipping (duplicate slug after generation): ${slug}`);
            totalSkipped++;
            continue;
          }
          const wordCount = (generated.body || [])
            .filter(s => s.type === 'p')
            .reduce((acc, s) => acc + (s.text || '').split(/\s+/).length, 0);
          articleObj = {
            id: `${topicId}-${Date.now()}-${i}`,
            topic: topicId,
            topicLabel: topicConfig.label,
            topicColor: topicConfig.color,
            title: generated.title || item.title,
            excerpt: generated.excerpt || item.description.substring(0, 200),
            date: todayISO(),
            readTime: estimateReadTime(wordCount),
            source: 'TechNanoAI',
            img: topicConfig.img,
            slug: slug,
            sourceLink: item.link,
            sourceName: item.source,
            body: generated.body || [],
            featured: i === 0,
          };
          // Small delay to avoid rate limiting
          await new Promise(r => setTimeout(r, 500));
        } else {
          // FREE mode — build directly from RSS data, no API key needed
          articleObj = buildArticleFromRSS(item, topicConfig, topicId, i);
        }

        saveArticleJson(articleObj);
        existingSlugs.add(articleObj.slug);
        totalGenerated++;

      } catch (err) {
        console.error(`   ❌ Failed: ${err.message}`);
        totalFailed++;
      }
    }
  }

  // ── Summary ────────────────────────────────────────────────────────────────
  console.log('\n' + '═'.repeat(70));
  console.log('📊 SUMMARY');
  console.log('═'.repeat(70));
  console.log(`   Generated: ${totalGenerated}`);
  console.log(`   Skipped:   ${totalSkipped}`);
  console.log(`   Failed:    ${totalFailed}`);
  console.log(`   Deleted:   ${deletedCount} (old articles)`);
  console.log(`   Total articles in directory: ${loadExistingSlugs().length}`);
  console.log('═'.repeat(70));

  if (totalFailed > 0) {
    console.log(`\n⚠️  ${totalFailed} article(s) failed to generate. Check errors above.`);
  }

  console.log('\n✅ Daily news generation complete!\n');
}

main().catch(err => {
  console.error(`\n❌ Fatal error: ${err.message}\n`);
  process.exit(1);
});

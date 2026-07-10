export interface NewsSection {
  type: 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'quote' | 'callout' | 'stats' | 'image';
  text?: string;
  items?: string[];
  author?: string;
  variant?: string;
  title?: string;
  stats?: { label: string; value: string; change?: string }[];
  src?: string;
  caption?: string;
}

export interface NewsStat {
  value: string;
  label: string;
  change?: string;
}

export interface NewsTakeaway {
  text: string;
}

export interface NewsFAQ {
  q: string;
  a: string;
}

export interface NewsTimelineItem {
  date: string;
  event: string;
  current?: boolean;
}

export interface NewsImpactCard {
  icon: string;
  title: string;
  text: string;
}

export interface NewsPollOption {
  text: string;
  votes: number;
}

export interface NewsPullQuote {
  text: string;
  author: string;
  role: string;
}

export interface NewsItem {
  id: string;
  topic: string;
  topicLabel: string;
  topicColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  source: string;
  img: string;
  slug: string;
  featured?: boolean;
  sourceLink?: string;
  sourceName?: string;
  body?: NewsSection[];
  takeaways?: string[];
  stats?: NewsStat[];
  pullQuote?: NewsPullQuote;
  impactCards?: NewsImpactCard[];
  timeline?: NewsTimelineItem[];
  faqs?: NewsFAQ[];
  tags?: string[];
  poll?: { question: string; options: NewsPollOption[] };
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
}

export interface NewsTopic {
  id: string;
  label: string;
  shortLabel: string;
  icon: string;
  color: string;
  img: string;
  desc: string;
}

export const newsTopics: NewsTopic[] = [
  { id: 'all', label: 'All News', shortLabel: 'All', icon: '🌐', color: '#3380ff', img: '', desc: 'Latest across all frontiers' },
  { id: 'ai', label: 'Artificial Intelligence', shortLabel: 'AI', icon: '🧠', color: '#3b82f6', img: '/images/001-ai-neural-agent-cluster.webp', desc: 'LLMs, agents & the race to AGI' },
  { id: 'cybersecurity', label: 'Cybersecurity', shortLabel: 'Security', icon: '🛡️', color: '#ef4444', img: '/images/012-cybersecurity-digital-shield.webp', desc: 'Post-quantum crypto & AI defense' },
  { id: 'space', label: 'Space Exploration', shortLabel: 'Space', icon: '🚀', color: '#06b6d4', img: '/images/007-space-orbital-station.webp', desc: 'Launch vehicles & lunar economy' },
  { id: 'biotech', label: 'Biotechnology', shortLabel: 'Biotech', icon: '🧬', color: '#10b981', img: '/images/004-biotech-gene-editing.webp', desc: 'CRISPR, mRNA & lab-grown organs' },
  { id: 'nuclear', label: 'Nuclear Energy', shortLabel: 'Nuclear', icon: '☢️', color: '#f59e0b', img: '/images/010-nuclear-smr-reactor.webp', desc: 'SMRs & next-gen fission reactors' },
  { id: 'energy', label: 'Energy Storage', shortLabel: 'Energy', icon: '🔋', color: '#f97316', img: '/images/011-energy-storage-smart-grid.webp', desc: 'Solid-state batteries & grid storage' },
  { id: 'robotics', label: 'Robotics', shortLabel: 'Robotics', icon: '🤖', color: '#ec4899', img: '/images/002-robotics-precision-lab.webp', desc: 'Humanoids, drones & automation' },
  { id: 'av', label: 'Autonomous Vehicles', shortLabel: 'AV', icon: '🚗', color: '#8b5cf6', img: '/images/006-av-autonomous-vehicle.webp', desc: 'Robotaxis & Level 4 autonomy' },
  { id: 'quantum', label: 'Quantum Computing', shortLabel: 'Quantum', icon: '🔮', color: '#a78bfa', img: '/images/009-quantum-computing.webp', desc: 'Qubits & quantum advantage' },
  { id: 'materials', label: 'Advanced Materials', shortLabel: 'Materials', icon: '🔬', color: '#f43f5e', img: '/images/008-materials-graphene-lattice.webp', desc: 'Graphene & superconductors' },
  { id: 'bci', label: 'Brain-Computer Interfaces', shortLabel: 'BCI', icon: '🔌', color: '#0ea5e9', img: '/images/005-bci-neural-link.webp', desc: 'Neural implants & EEG control' },
  { id: 'fusion', label: 'Nuclear Fusion', shortLabel: 'Fusion', icon: '⚛️', color: '#fb923c', img: '/images/003-fusion-tokamak-reactor.webp', desc: 'Tokamaks & path to net power' },
];

export const newsItems: NewsItem[] = [
  {
    id: 'ai-1', topic: 'ai', topicLabel: 'AI', topicColor: '#3b82f6',
    title: 'OpenAI Announces GPT-5 with Native Multimodal Reasoning',
    excerpt: 'The next-generation model introduces real-time video understanding, improved tool use, and a 1M token context window — setting a new benchmark for frontier models.',
    date: '2026-07-09', readTime: '5 min', source: 'TechNanoAI',
    img: '/images/ai-01-neural-brain.webp', slug: 'gpt-5-native-multimodal-reasoning', featured: true,
    takeaways: [
      'GPT-5 introduces native real-time video understanding with zero-shot temporal reasoning across frames',
      'The model ships with a 1 million token context window, enabling full-codebase analysis in a single prompt',
      'Improved tool-use orchestration allows chained API calls with automatic error recovery and retry logic',
      'Benchmark scores show a 23% improvement over GPT-4 Turbo on MMLU and a 31% jump on GSM8K math reasoning',
      'Pricing is set at $5 per 1M input tokens and $15 per 1M output tokens — 50% cheaper than GPT-4 Turbo',
    ],
    stats: [
      { value: '1M', label: 'Token Context Window', change: '4x larger' },
      { value: '23%', label: 'MMLU Improvement', change: 'vs GPT-4 Turbo' },
      { value: '$5', label: 'Per 1M Input Tokens', change: '50% cheaper' },
      { value: '120ms', label: 'Video Frame Latency', change: 'Real-time' },
    ],
    pullQuote: {
      text: 'GPT-5 doesn\'t just process video — it understands causality across time. This is the first model that can watch a cooking tutorial and tell you exactly when your sauce is about to break, in real-time.',
      author: 'Dr. Sarah Chen',
      role: 'AI Research Director, Stanford HAI',
    },
    impactCards: [
      { icon: '🎬', title: 'Real-Time Video AI', text: 'Live video streams can be analyzed frame-by-frame with temporal reasoning, opening applications in surveillance, autonomous driving, and live sports analytics.' },
      { icon: '🔧', title: 'Autonomous Tool Chaining', text: 'Multi-step API workflows execute without human intervention — the model plans, calls, verifies, and retries tool sequences automatically.' },
      { icon: '💰', title: 'Cost Democratization', text: 'At half the price of GPT-4 Turbo, small teams and indie developers can now build production AI apps that were previously enterprise-only.' },
    ],
    timeline: [
      { date: 'Mar 2023', event: 'GPT-4 released with 128K context and image input' },
      { date: 'Nov 2023', event: 'GPT-4 Turbo launches with improved reasoning and lower pricing' },
      { date: 'May 2024', event: 'GPT-4o introduces native multimodal processing (text + audio + image)' },
      { date: 'Dec 2024', event: 'OpenAI o1 reasoning model debuts with chain-of-thought at inference time' },
      { date: 'Jul 2026', event: 'GPT-5 launches with 1M context, real-time video, and autonomous tool use', current: true },
    ],
    faqs: [
      { q: 'How does GPT-5\'s real-time video understanding work?', a: 'GPT-5 processes video frames at up to 8 FPS with a specialized temporal encoder that maintains causal relationships across frames. Unlike previous models that treated video as a sequence of independent images, GPT-5 builds a continuous temporal representation that enables it to answer questions about events, transitions, and causality within the video stream.' },
      { q: 'Is the 1 million token context window available on all plans?', a: 'The full 1M context is available on API plans with tier 2+ usage. ChatGPT Plus users get 256K context by default, with 1M available for select use cases. Enterprise customers can configure custom context limits up to the full 1M tokens.' },
      { q: 'How does GPT-5 compare to Claude 3.5 Sonnet and Gemini 1.5 Pro?', a: 'On the MMLU benchmark, GPT-5 scores 92.3% vs Claude 3.5 Sonnet at 88.7% and Gemini 1.5 Pro at 85.9%. On math reasoning (GSM8K), GPT-5 achieves 96.4% accuracy. However, Claude edges ahead on coding tasks (HumanEval: 94.1% vs 93.2%), and Gemini leads on long-document retrieval at 2M+ tokens.' },
      { q: 'What safety measures are built into GPT-5?', a: 'GPT-5 includes a reinforced RLHF pipeline with adversarial red-teaming, automated prompt injection detection, and a new "constitutional AI" layer that evaluates outputs against safety guidelines before delivery. OpenAI reports a 67% reduction in hallucination rates compared to GPT-4 Turbo.' },
    ],
    tags: ['GPT-5', 'OpenAI', 'Multimodal AI', 'Large Language Models', 'Video Understanding', 'AI Agents', 'Frontier Models', '1M Context'],
    poll: {
      question: 'Will GPT-5\'s real-time video understanding be a game-changer for your industry?',
      options: [
        { text: 'Yes — immediate applications', votes: 3420 },
        { text: 'Yes — but not yet practical', votes: 2180 },
        { text: 'Waiting to see real-world results', votes: 1560 },
        { text: 'Not relevant to my field', votes: 480 },
      ],
    },
    body: [
      { type: 'h2', text: 'The Development' },
      { type: 'p', text: 'OpenAI has unveiled GPT-5, the most capable model in its lineup, marking a generational leap in multimodal reasoning. The model introduces native real-time video understanding, a 1 million token context window, and significantly improved tool-use orchestration — capabilities that collectively redefine what frontier AI systems can do.' },
      { type: 'p', text: 'Unlike previous iterations that bolted on multimodal capabilities through separate encoders, GPT-5 was trained from the ground up with a unified architecture that processes text, images, audio, and video through a single transformer pipeline. This native integration eliminates the latency and information loss that plagued earlier multimodal models.' },
      { type: 'h3', text: 'Real-Time Video Understanding' },
      { type: 'p', text: 'The standout feature is GPT-5\'s ability to process live video streams at up to 8 frames per second while maintaining full temporal reasoning. The model can identify objects, track motion, understand causality between events, and answer natural language questions about what\'s happening — all in real-time with approximately 120ms of latency per frame.' },
      { type: 'p', text: 'This opens the door to applications that were previously science fiction: AI assistants that can watch your screen and offer contextual help, security systems that understand behavioral patterns rather than just detecting motion, and educational tools that provide real-time feedback on physical activities like sports or surgery.' },
      { type: 'callout', variant: 'info', title: 'Key Architecture Change', text: 'GPT-5 replaces the separate vision and language encoders used in GPT-4o with a unified 1.8 trillion parameter mixture-of-experts model. Only 220B parameters are active per token, making inference 3x more efficient than GPT-4 Turbo despite the larger model size.' },
      { type: 'h2', text: 'Benchmark Performance' },
      { type: 'p', text: 'GPT-5 demonstrates substantial improvements across all major AI benchmarks. On MMLU (massive multitask language understanding), the model scores 92.3%, a 23% relative improvement over GPT-4 Turbo\'s 75.1%. Math reasoning on GSM8K jumps to 96.4% accuracy, narrowing the gap with specialized reasoning models like OpenAI\'s o1.' },
      { type: 'ul', items: [
        'MMLU: 92.3% (vs GPT-4 Turbo 75.1% — +23% relative)',
        'GSM8K (Math): 96.4% (vs 73.8% — +31% relative)',
        'HumanEval (Coding): 93.2% (vs 85.4% — +9% relative)',
        'MMMU (Multimodal): 74.1% (vs 56.8% — +30% relative)',
        'Hallucination Rate: 2.1% (vs 6.4% — 67% reduction)',
      ]},
      { type: 'h2', text: 'Autonomous Tool Use & Agent Capabilities' },
      { type: 'p', text: 'Perhaps the most practically impactful improvement is GPT-5\'s tool-use orchestration. The model can now plan multi-step workflows, chain API calls, verify intermediate results, and automatically retry failed operations — all without human intervention. This transforms the model from a text generator into a genuine AI agent.' },
      { type: 'p', text: 'For developers, this means GPT-5 can autonomously: search the web, read documentation, write and execute code, query databases, call external APIs, validate responses, and compile results into a coherent answer. The model maintains a working memory of its tool-use chain, enabling it to backtrack and try alternative approaches when it hits dead ends.' },
      { type: 'h3', text: 'Pricing & Availability' },
      { type: 'p', text: 'GPT-5 is available immediately via the OpenAI API at $5 per 1M input tokens and $15 per 1M output tokens — a 50% reduction from GPT-4 Turbo\'s pricing. ChatGPT Plus subscribers ($20/month) get access with rate limits, while Enterprise and Team customers get priority throughput and higher rate limits.' },
      { type: 'h2', text: 'Why It Matters' },
      { type: 'p', text: 'GPT-5 represents the convergence of three critical AI capabilities — multimodal understanding, long-context reasoning, and autonomous tool use — into a single production-ready model. For the AI industry, this signals the transition from AI as a conversational tool to AI as an autonomous agent that can perceive, reason, and act in the real world.' },
      { type: 'p', text: 'The implications extend across every sector: healthcare (real-time surgical assistance), education (personalized tutoring that watches how students work), software development (autonomous debugging and deployment), and security (behavioral threat detection). The 50% price cut also democratizes access, enabling startups and indie developers to build applications that were previously enterprise-only.' },
    ],
  },
];

// ─── Auto-generated news loader ─────────────────────────────────────────────
// Reads all JSON files from src/data/news/articles/ at build time.
// These are created by scripts/generate-daily-news.mjs and auto-expire after 30 days.

const newsModules = import.meta.glob('./articles/*.json', { eager: true }) as Record<string, { default: NewsItem }>;

export const autoNewsItems: NewsItem[] = Object.entries(newsModules)
  .map(([path, mod]) => mod.default)
  .filter((item): item is NewsItem => !!item && !!item.slug)
  .sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0));

// Merge auto-generated news with the static seed news.
// Auto-generated ones take priority (they're newer), dedup by slug.
const staticSlugs = new Set(newsItems.map(item => item.slug));
const uniqueAuto = autoNewsItems.filter(item => !staticSlugs.has(item.slug));

export const allNewsItems: NewsItem[] = [...uniqueAuto, ...newsItems].sort((a, b) => {
  return b.date > a.date ? 1 : b.date < a.date ? -1 : 0;
});

/**
 * AI topic CONTENT — Fully Independent
 * ───────────────────────────────────────
 * All content data for the AI topic page.
 * Edit this file without affecting any other topic page.
 * Research sources: Lilach Bullock AI Search Demand Report 2026,
 * Rankability AI Search Statistics, CB Insights, Anthropic State of AI Agents,
 * AIToolsBreakdown, AI Quantum Intelligence trends analysis.
 */

export const aiContent = {
  name: 'Artificial Intelligence',
  slug: 'ai',
  tagline: 'From LLMs to agentic AI — the technology reshaping every industry',
  description:
    'Explore the full AI landscape: large language models, autonomous agents, RAG systems, multimodal intelligence, edge AI, and the accelerating path toward AGI. Backed by real search demand data and industry trends through 2030.',
  icon: '🧠',
  gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
  accentColor: '#3b82f6',
  accentColor2: '#8b5cf6',

  heroStats: [
    { value: '149M+', label: 'Monthly US searches' },
    { value: '+770%', label: 'Autonomous AI agent growth' },
    { value: '$40B', label: 'Agentic AI market 2026' },
    { value: '90%', label: 'Orgs using AI coding tools' },
  ],

  marketStats: [
    { value: '149.2M', label: 'Monthly AI tool searches (US)', source: 'AIToolsBreakdown, May 2026' },
    { value: '$40B', label: 'Agentic AI market size', source: 'Information Matters, Q1 2026' },
    { value: '85%', label: 'Developers using AI tools', source: 'JetBrains Survey 2026' },
    { value: '57%', label: 'Orgs deploying multi-stage AI agents', source: 'Anthropic 2026 Report' },
    { value: '80%', label: 'Report measurable AI ROI', source: 'Anthropic 2026 Report' },
    { value: '3.6×', label: 'AI search demand growth since 2022', source: 'Rankability 2026' },
  ],

  topics: [
    { title: 'AI Agents & Agentic AI', description: 'Autonomous systems that plan, reason, and execute multi-step tasks. Searches up 770% YoY — the fastest-growing AI topic.', icon: '🤖', trend: '+770%', searches: '110K/mo' },
    { title: 'Large Language Models', description: 'GPT-4, Claude Opus, Gemini, and open-source models like DeepSeek pushing the frontier of reasoning and coding.', icon: '🧠', trend: '+61%', searches: '60.5K/mo' },
    { title: 'RAG & GraphRAG', description: 'Retrieval-augmented generation has become the enterprise standard for domain-specific AI with real data.', icon: '🔗', trend: 'Rising', searches: 'Emerging' },
    { title: 'Multimodal AI', description: 'Models that process text, images, video, and audio simultaneously — the next paradigm beyond text-only LLMs.', icon: '🎨', trend: '+285%', searches: 'Growing' },
    { title: 'Edge AI & On-Device', description: 'Small language models running locally on phones and laptops for privacy, zero latency, and offline use.', icon: '📱', trend: '3× by 2027', searches: 'Rising' },
    { title: 'AI Coding Agents', description: 'From Copilot to autonomous coding agents — 62% of developers now rely on AI coding tools daily.', icon: '💻', trend: '+62%', searches: '12.1K/mo' },
    { title: 'AI Ethics & Safety', description: 'Alignment, bias, regulation, and the challenge of building safe AI as capabilities accelerate.', icon: '⚖️', trend: 'Critical', searches: 'Growing' },
    { title: 'AI in Healthcare', description: 'Drug discovery, medical imaging, AI-powered diagnostics, and personalized medicine transforming healthcare.', icon: '🏥', trend: '+347%', searches: 'Growing' },
    { title: 'Path to AGI', description: 'The race toward artificial general intelligence — models now match PhD-level performance on science benchmarks.', icon: '🚀', trend: 'Accelerating', searches: '110K/mo' },
  ],

  agenticAi: {
    title: 'Agentic AI: The Fastest-Growing topic in AI Search',
    subtitle: 'From "what is AI?" to "give me AI that runs the task"',
    description: 'The shift from curiosity to action is the single clearest pattern in AI search behavior. Agentic AI searches grew 22× from 2022 to 2026, with autonomous AI agents up 770% year-over-year. Businesses no longer want AI that answers questions — they want AI that does the work.',
    stats: [
      { value: '+770%', label: 'Autonomous AI agents YoY' },
      { value: '+210%', label: 'AI agents for business YoY' },
      { value: '+48%', label: 'AI automation YoY' },
      { value: '$40B', label: 'Agentic AI market 2026' },
    ],
    features: [
      { title: 'Multi-Step Reasoning', description: 'Agents plan, decompose tasks, and execute multi-step workflows autonomously — from coding to research to business processes.' },
      { title: 'Tool Calling & Integration', description: 'Modern agents call APIs, browse the web, execute code, and interact with enterprise systems to complete real work.' },
      { title: 'Multi-Agent Orchestration', description: 'Teams of specialized agents collaborating on complex tasks — coding agents, research agents, and review agents working together.' },
      { title: 'Production Deployment', description: '57% of organizations now deploy agents for multi-stage workflows. 81% plan more complex use cases in 2026.' },
    ],
  },

  llmModels: [
    { name: 'GPT-4.5 / o3', vendor: 'OpenAI', strength: 'General reasoning, multimodal', pricing: '$5/$25 per M tokens', tag: 'Frontier', color: '#10b981' },
    { name: 'Claude Opus 4.8', vendor: 'Anthropic', strength: 'Agentic coding, long tasks', pricing: '$5/$25 per M tokens', tag: 'Coding leader', color: '#f59e0b' },
    { name: 'Gemini 2.5 Pro', vendor: 'Google', strength: 'Multimodal, long context', pricing: 'Competitive', tag: 'Multimodal', color: '#3b82f6' },
    { name: 'DeepSeek V4', vendor: 'DeepSeek', strength: 'Open-weight, cost-efficient', pricing: '$0.14/$0.28 per M tokens', tag: 'Open-source', color: '#8b5cf6' },
    { name: 'Llama 4', vendor: 'Meta', strength: 'Open-weight, on-device', pricing: 'Free (open-weight)', tag: 'Edge AI', color: '#06b6d4' },
    { name: 'Qwen 3.6', vendor: 'Alibaba', strength: 'Multilingual, MoE architecture', pricing: 'Low cost', tag: 'Open-source', color: '#ec4899' },
  ],

  ragFeatures: [
    { title: 'Agentic RAG', description: 'The LLM acts as a reasoning engine — decides its own search strategy, reformulates queries, and iterates until it finds the right answer.' },
    { title: 'GraphRAG', description: 'Maps entities and relationships into knowledge graphs. Early 2026 benchmarks show up to 99% search precision for complex multi-layered queries.' },
    { title: 'Hybrid Search', description: 'Combines dense vector search with keyword/BM25 retrieval for both semantic understanding and exact-match precision.' },
    { title: 'Enterprise Knowledge', description: 'Connects to internal docs, databases, and APIs — enabling domain-specific intelligence without retraining the base model.' },
  ],

  multimodalFeatures: [
    { title: 'Text + Image', description: 'Models understand and generate both text and images — enabling visual reasoning, document analysis, and creative generation.' },
    { title: 'Video Understanding', description: 'AI can analyze video content in real-time — from surveillance to sports analytics to autonomous driving.' },
    { title: 'Voice & Audio', description: 'Voice AI is the fastest-growing CPC topic with 60-90% YoY growth. Real-time voice agents handle millions of calls.' },
    { title: 'Cross-Modal Reasoning', description: 'Models that can reason across modalities — reading a chart, explaining it verbally, and generating a summary document.' },
  ],

  edgeAiFeatures: [
    { title: 'Privacy-First', description: 'Data never leaves the device — critical for healthcare, finance, and regulated industries where cloud processing is non-compliant.' },
    { title: 'Zero Latency', description: 'On-device models eliminate network round-trips. Llama 3.2 1B runs at 20-30 tokens/sec on iPhone 15+.' },
    { title: 'Cost Savings', description: 'No per-token API costs. Break-even for self-hosting open-weight models sits at ~15-40M tokens/month.' },
    { title: 'Offline Capability', description: 'AI works without internet — enabling AI in remote areas, air-gapped systems, and edge devices.' },
  ],

  industryApps: [
    { industry: 'Healthcare', applications: ['Drug discovery & molecule design', 'AI-powered medical imaging', 'Personalized treatment plans', 'Clinical trial optimization'], icon: '🏥', color: '#10b981' },
    { industry: 'Finance', applications: ['Fraud detection at scale', 'Algorithmic trading', 'Credit risk assessment', 'Automated compliance'], icon: '💰', color: '#f59e0b' },
    { industry: 'Software Development', applications: ['AI coding agents (62% adoption)', 'Automated code review', 'Bug detection & fixing', 'Documentation generation'], icon: '💻', color: '#3b82f6' },
    { industry: 'Creative & Media', applications: ['AI image & video generation', 'Content creation at scale', 'Music & audio production', 'Design automation'], icon: '🎨', color: '#ec4899' },
  ],

  ethicsTopics: [
    { title: 'AI Alignment', description: 'Ensuring AI systems pursue intended goals without harmful side effects. Leading labs invest heavily in alignment research.' },
    { title: 'Bias & Fairness', description: 'Addressing demographic biases in training data that can lead to discriminatory outcomes in hiring, lending, and justice.' },
    { title: 'Regulation', description: '45 US states introduced AI bills in 2024, 31 enacted new laws. EU AI Act takes effect. Compliance is now a competitive factor.' },
    { title: 'Transparency', description: 'Model cards, system cards, and explainability tools helping users understand AI limitations and decision-making processes.' },
  ],

  futurePredictions: [
    { year: '2026', prediction: 'Agentic AI goes production', detail: '57% of organizations deploy multi-stage AI agents. Coding agents lead with $5-7B ARR. Model routing becomes standard — cheap models for routine steps, frontier models for hard reasoning.' },
    { year: '2027', prediction: 'Small language models dominate', detail: 'Gartner predicts organizations will use task-specific SLMs 3× more than general-purpose LLMs. Edge AI becomes mainstream for privacy-sensitive industries.' },
    { year: '2028', prediction: 'Diffusion LLMs enter production', detail: 'Non-autoregressive models generate entire sequences simultaneously, breaking the latency bottleneck for long-form content generation.' },
    { year: '2029', prediction: 'World models power physical AI', detail: 'AI systems that understand physics, spatial relationships, and causality — enabling next-generation robotics and autonomous systems.' },
    { year: '2030', prediction: 'AGI timeline accelerates', detail: 'Models already match PhD-level science performance. Leading labs predict AGI-level systems could arrive by 2028-2032, reshaping every industry.' },
  ],

  toolsComparison: [
    { tool: 'ChatGPT', topic: 'General Assistant', users: '200M+', rating: '4.8', strength: 'Best all-around AI assistant', color: '#10b981' },
    { tool: 'Claude', topic: 'Coding & Analysis', users: '50M+', rating: '4.7', strength: 'Best for agentic coding tasks', color: '#f59e0b' },
    { tool: 'Gemini', topic: 'Multimodal', users: '100M+', rating: '4.5', strength: 'Best Google ecosystem integration', color: '#3b82f6' },
    { tool: 'Copilot', topic: 'Coding', users: '15M+', rating: '4.6', strength: 'Best IDE-integrated coding AI', color: '#06b6d4' },
    { tool: 'Perplexity', topic: 'AI Search', users: '15M+', rating: '4.5', strength: 'Best AI-powered search engine', color: '#8b5cf6' },
    { tool: 'Midjourney', topic: 'Image Generation', users: '20M+', rating: '4.7', strength: 'Best AI art generation', color: '#ec4899' },
  ],

  faqs: [
    { q: 'What are AI agents and how do they differ from chatbots?', a: 'AI agents are autonomous systems that plan, reason, and execute multi-step tasks without constant human input. Unlike chatbots that respond to single queries, agents can call APIs, browse the web, run code, and orchestrate complex workflows. 57% of organizations now deploy agents for multi-stage workflows.' },
    { q: 'What is the difference between generative AI and agentic AI?', a: 'Generative AI creates content (text, images, code) in response to prompts. Agentic AI goes further — it perceives state, plans actions, calls tools, and executes multi-step work autonomously. Agentic AI searches grew 770% YoY, while curiosity-driven generative AI searches are declining as businesses shift to action-oriented AI.' },
    { q: 'What is RAG and why is it important for enterprise AI?', a: 'RAG (Retrieval-Augmented Generation) connects AI models to external data sources, enabling domain-specific intelligence without retraining. In 2026, Agentic RAG evolved from simple "search and stuff" pipelines into sophisticated loops where the AI decides its own search strategy. GraphRAG achieves up to 99% precision for complex queries.' },
    { q: 'What are the best AI tools for coding in 2026?', a: 'Most developers now rely on AI coding agents. Top tools include GitHub Copilot for IDE integration, Claude for agentic coding tasks, and ChatGPT for general development help. The AI coding market is worth $5-7B ARR, with "best AI for coding" generating 12,100 monthly searches at $20+ CPC.' },
    { q: 'Will AI replace jobs or create new ones?', a: 'AI is transforming rather than simply replacing work. While 85% of developers use AI tools daily, new roles like AI engineer, prompt engineer, and AI safety researcher have emerged. The shift is from "AI jobs" to "workforce transformation" — AI productivity tools and workflow automation are reshaping existing roles across industries.' },
    { q: 'What is edge AI and why does it matter?', a: 'Edge AI runs small language models locally on devices (phones, laptops, IoT) instead of in the cloud. It enables privacy-first AI (data never leaves device), zero latency, and offline capability. Gartner predicts organizations will use task-specific SLMs 3× more than general-purpose LLMs by 2027.' },
    { q: 'How far are we from AGI?', a: 'AI models now match or exceed PhD-level performance on science benchmarks and achieve gold-medal results on International Mathematical Olympiad problems. Leading labs predict AGI-level systems could arrive between 2028-2032. The International AI Safety Report 2026 notes coding, math, and autonomous operation are advancing fastest.' },
    { q: 'What is the AI market size in 2026?', a: 'The agentic AI market is estimated at $40B in 2026. Anthropic reached $30B annualized run-rate revenue. Average enterprise LLM spend rose from ~$4.5M to ~$7M, with organizations expecting 75% growth to ~$11.6M. AI search demand has grown 3.6× since 2022 and continues accelerating.' },
    { q: 'What is the difference between GPT, Claude, and Gemini?', a: 'GPT (OpenAI) leads in general reasoning and multimodal capabilities. Claude (Anthropic) excels at agentic coding and long-context tasks. Gemini (Google) offers the best Google ecosystem integration and multimodal processing. All three are competitively priced at ~$5/$25 per million tokens for input/output. Open-source alternatives like DeepSeek and Llama 4 are closing the gap rapidly.' },
    { q: 'How much does AI cost for enterprise use?', a: 'Average enterprise LLM spend rose from ~$4.5M to ~$7M annually, with organizations expecting 75% growth to ~$11.6M. Model routing — using cheap models for routine steps and frontier models for hard reasoning — can reduce costs by 60-80%. Open-weight models like Llama 4 and DeepSeek V4 offer break-even at ~15-40M tokens/month for self-hosting.' },
  ],

  trendingSearches: [
    { term: 'ai chatbot', volume: '1,830,000/mo', growth: '+16%', type: 'Mainstream' },
    { term: 'artificial intelligence', volume: '246,000/mo', growth: '+347%', type: 'Mainstream' },
    { term: 'agentic ai', volume: '110,000/mo', growth: '+39%', type: 'Agentic' },
    { term: 'autonomous ai agents', volume: '4,400/mo', growth: '+770%', type: 'Agentic' },
    { term: 'generative ai', volume: '60,500/mo', growth: '+61%', type: 'Mainstream' },
    { term: 'ai agents', volume: '60,500/mo', growth: '+15%', type: 'Agentic' },
    { term: 'ai automation', volume: '9,900/mo', growth: '+48%', type: 'Agentic' },
    { term: 'ai agents for business', volume: '720/mo', growth: '+210%', type: 'Agentic' },
    { term: 'best ai for coding', volume: '12,100/mo', growth: '+62%', type: 'Coding' },
    { term: 'multimodal ai', volume: '8,100/mo', growth: '+285%', type: 'Emerging' },
    { term: 'edge ai', volume: '5,400/mo', growth: '+150%', type: 'Emerging' },
    { term: 'rag retrieval augmented', volume: '3,600/mo', growth: '+95%', type: 'Enterprise' },
  ],
};

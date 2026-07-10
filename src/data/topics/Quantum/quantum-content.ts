/**
 * QUANTUM topic CONTENT
 * ────────────────────────────────
 * Fully independent — edit without affecting other topic pages.
 * Based on deep research: $3.5B→$20.2B market, error correction,
 * post-quantum crypto, quantum AI, drug discovery, and more.
 */

export const quantumContent = {
  name: 'Quantum Computing',
  slug: 'quantum',
  tagline: 'Qubits, error correction, and the path to quantum advantage',
  description:
    'The quantum computing market is projected to grow from $3.5B to $20.2B by 2030 at 41.8% CAGR. Explore qubit technologies, error correction breakthroughs, post-quantum cryptography, quantum AI, and the race toward practical quantum advantage.',
  icon: '🔮',
  gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%)',
  accentColor: '#8b5cf6',
  accentColor2: '#a855f7',
  heroImage: '/images/quantum-01-cryogenic-fridge.webp',

  stats: [
    { value: '$20.2B', label: 'Market by 2030' },
    { value: '41.8%', label: 'CAGR (2025-2030)' },
    { value: '296K+', label: 'Patents filed' },
    { value: '360+', label: 'Startups tracked' },
  ],

  sections: [
    {
      id: 'quantum-market',
      eyebrow: 'Market Overview',
      title: 'The $20 Billion Quantum Computing Market',
      image: '/images/quantum-02-ion-trap-processor.webp',
      subtitle: 'The quantum computing market is projected to grow from $3.52B in 2025 to $20.2B by 2030 at a 41.8% CAGR. Over 360 startups and 750+ early-stage ventures are tracked globally, with 296,000+ patents filed. The US leads with 100,000+ patents, followed by China with 56,000+.',
      points: [
        { label: 'Market (2025)', value: '$3.52B', desc: 'Growing at 41.8% CAGR' },
        { label: 'Market (2030)', value: '$20.2B', desc: 'Projected global size' },
        { label: 'VC funding', value: '$2B+', desc: 'Invested in 2024 (50% YoY)' },
        { label: 'Patents', value: '296K+', desc: 'From 65,000+ applicants' },
      ],
    },
    {
      id: 'error-correction',
      eyebrow: 'Breakthrough Technology',
      title: 'Quantum Error Correction Revolution',
      image: '/images/quantum-03-entanglement-photons.webp',
      subtitle: 'Google\'s Willow chip achieved exponential error reduction as qubit counts increased — going "below threshold." IBM\'s Quantum Starling targets 200 logical qubits by 2029. Microsoft\'s Majorana 1 architecture achieved a 1,000-fold error rate reduction. Error rates have hit record lows of 0.000015% per operation.',
      points: [
        { label: 'Google Willow', value: '105 qubits', desc: 'Exponential error reduction' },
        { label: 'IBM Starling', value: '200 logical', desc: 'Qubits by 2029' },
        { label: 'Microsoft', value: '1,000x', desc: 'Error rate reduction (Majorana)' },
        { label: 'Error rate', value: '0.000015%', desc: 'Per operation record low' },
      ],
    },
    {
      id: 'qubit-technologies',
      eyebrow: 'Hardware Approaches',
      title: 'Qubit Technologies & Architectures',
      image: '/images/quantum-04-annealing-machine.webp',
      subtitle: 'Multiple qubit modalities are competing: superconducting (IBM, Google), trapped-ion (IonQ, Quantinuum), photonic (Xanadu, PsiQuantum), neutral atom (Atom Computing), and topological (Microsoft). Each has distinct advantages in coherence, scalability, and operating conditions.',
      points: [
        { label: 'Superconducting', value: 'IBM, Google', desc: 'Fast gates, cryogenic' },
        { label: 'Trapped-ion', value: 'IonQ', desc: 'High fidelity, room-temp potential' },
        { label: 'Photonic', value: 'Xanadu', desc: 'Room-temperature, networkable' },
        { label: 'Neutral atom', value: 'Atom Comp.', desc: 'DARPA utility-scale demos' },
      ],
    },
    {
      id: 'quantum-advantage',
      eyebrow: 'Practical Milestones',
      title: 'The Path to Quantum Advantage',
      image: '/images/quantum-05-cryptography-qkd.webp',
      subtitle: 'IonQ and Ansys ran a medical device simulation that outperformed classical HPC by 12%. Google\'s Quantum Echoes algorithm runs 13,000x faster on Willow than classical supercomputers. Materials science problems involving strongly interacting electrons appear closest to achieving quantum advantage.',
      points: [
        { label: 'IonQ/Ansys', value: '12% faster', desc: 'Medical device simulation' },
        { label: 'Google Echoes', value: '13,000x', desc: 'Faster than classical' },
        { label: 'Materials science', value: 'Closest', desc: 'To quantum advantage' },
        { label: 'DOE workloads', value: '5-10 yrs', desc: 'Quantum could address' },
      ],
    },
    {
      id: 'post-quantum-crypto',
      eyebrow: 'Security Priority',
      title: 'Post-Quantum Cryptography',
      image: '/images/quantum-06-molecule-simulation.webp',
      subtitle: 'NIST finalized three post-quantum encryption standards in August 2024: ML-KEM, ML-DSA, and SLH-DSA. The White House has initiated quantum policy acceleration for federal adoption. Industry experts estimate transitioning government and enterprise networks could require a decade or more.',
      points: [
        { label: 'NIST standards', value: '3 finalized', desc: 'ML-KEM, ML-DSA, SLH-DSA' },
        { label: 'White House', value: 'Executive', desc: 'Actions for federal adoption' },
        { label: 'Transition time', value: '10+ yrs', desc: 'For full network migration' },
        { label: 'Lattice-based', value: 'Leading', desc: 'Cryptographic approach' },
      ],
    },
    {
      id: 'quantum-ai',
      eyebrow: 'Convergence',
      title: 'Quantum AI & Machine Learning',
      image: '/images/quantum-07-topological-qubit.webp',
      subtitle: 'Quantum computing can speed up ML algorithms and reduce time for vast dataset processing. LLMs could be trained in hours rather than weeks. AI-driven quantum algorithm discovery is accelerating development timelines, while quantum ML transitions from theory to practical implementation.',
      points: [
        { label: 'Training speed', value: 'Hours', desc: 'vs weeks for classical ML' },
        { label: 'Energy efficient', value: 'Lower', desc: 'Power consumption for AI' },
        { label: 'Algorithm discovery', value: 'AI-driven', desc: 'Accelerating timelines' },
        { label: 'Quantum ML', value: 'Practical', desc: 'Moving beyond theory' },
      ],
    },
    {
      id: 'hybrid-quantum',
      eyebrow: 'Near-Term Architecture',
      title: 'Hybrid Quantum-Classical Workflows',
      image: '/images/quantum-08-internet-repeater.webp',
      subtitle: 'Quantum processors handle difficult optimization and simulations while HPC systems manage everything else. Fujitsu/RIKEN announced a 256-qubit system with plans for 1,000 qubits by 2026. IBM\'s Kookaburra processor targets 4,158 qubits in multi-chip configuration. These hybrid architectures represent the realistic path to near-term practical quantum systems.',
      points: [
        { label: 'Fujitsu/RIKEN', value: '256 qubits', desc: '1,000 planned for 2026' },
        { label: 'IBM Kookaburra', value: '4,158 qubits', desc: 'Multi-chip configuration' },
        { label: 'Hybrid model', value: 'Realistic', desc: 'Path to practical systems' },
        { label: 'Co-processing', value: 'Standard', desc: 'Quantum + classical tandem' },
      ],
    },
    {
      id: 'quantum-applications',
      eyebrow: 'Industry Impact',
      title: 'Quantum Applications Across Industries',
      image: '/images/quantum-09-error-correction.webp',
      subtitle: 'Drug discovery leads with Roche/Quantinuum reducing target identification timelines by 40%. JPMorgan partnered with IBM for option pricing and risk analysis. Pfizer, AstraZeneca, and Merck signed multi-year quantum service agreements. Supply chain optimization, battery development, and materials science represent additional high-priority applications.',
      points: [
        { label: 'Drug discovery', value: '40% faster', desc: 'Roche/Quantinuum study' },
        { label: 'Finance', value: 'JPMorgan', desc: 'Option pricing & risk analysis' },
        { label: 'Pharma contracts', value: '$200M+', desc: 'IBM/Google agreements' },
        { label: 'Quantum-assisted', value: 'Optimization', desc: 'Largest market segment' },
      ],
    },
    {
      id: 'quantum-as-a-service',
      eyebrow: 'Cloud Access',
      title: 'Quantum-as-a-Service (QaaS)',
      image: '/images/quantum-10-quantum-radar.webp',
      subtitle: 'IBM, Microsoft, AWS, and Google are rolling out pay-as-you-go quantum access. Cloud platforms remove barriers to entry, allowing organizations to conduct pilot projects without massive capital investments. Quantum could be the next cloud battleground, with providers racing to develop user-friendly interfaces and toolkits.',
      points: [
        { label: 'Cloud access', value: 'Democratized', desc: 'No hardware investment needed' },
        { label: 'IBM Quantum', value: '250+', desc: 'Client organizations' },
        { label: 'Azure Quantum', value: 'Elements', desc: 'Microsoft\'s pharma platform' },
        { label: 'Next battleground', value: 'Cloud', desc: 'Providers racing for UX' },
      ],
    },
    {
      id: 'quantum-workforce',
      eyebrow: 'Talent & Education',
      title: 'The Quantum Workforce Crisis',
      image: '/images/quantum-01-cryogenic-fridge.webp',
      subtitle: 'Only one qualified candidate exists for every three specialized quantum positions globally. McKinsey estimates 250,000+ new quantum professionals will be needed by 2030. The UN designated 2025 as the International Year of Quantum Science and Technology. Universities are expanding from doctoral programs to undergraduate and certificate offerings.',
      points: [
        { label: 'Talent gap', value: '1:3', desc: 'Candidates per position' },
        { label: 'Needed by 2030', value: '250K+', desc: 'New quantum professionals' },
        { label: 'US job postings', value: '3x', desc: 'Growth from 2011 to 2024' },
        { label: 'UN IYQST', value: '2025', desc: 'International Year of Quantum' },
      ],
    },
    {
      id: 'global-competition',
      eyebrow: 'Geopolitics',
      title: 'Global Quantum Race & Government Investment',
      image: '/images/quantum-02-ion-trap-processor.webp',
      subtitle: 'The US National Quantum Initiative invested $2.5B from 2019-2024. China\'s national venture fund committed RMB 1 trillion (~$140B) for quantum technology. Europe advances through the Quantum Flagship Program. DARPA\'s US2QC program investigates whether any quantum approach can achieve utility-scale operation by 2033.',
      points: [
        { label: 'US NQI', value: '$2.5B', desc: 'Invested 2019-2024' },
        { label: 'China fund', value: '$140B', desc: 'RMB 1 trillion commitment' },
        { label: 'Europe', value: 'Flagship', desc: 'Coordinating across member states' },
        { label: 'DARPA US2QC', value: 'By 2033', desc: 'Utility-scale quantum target' },
      ],
    },
  ],

  trends: [
    { title: 'Useful Quantum Computing', description: 'The shift from lab breakthroughs to practical applications in finance, logistics, and pharmaceuticals.', tag: 'Hot', color: '#8b5cf6' },
    { title: 'Fault-Tolerant Systems', description: 'Error correction breakthroughs enabling reliable large-scale quantum computations.', tag: 'Breakthrough', color: '#a855f7' },
    { title: 'Room-Temperature Quantum', description: 'IonQ\'s trapped-ion and Xanadu\'s photonic qubits could eliminate cryogenic infrastructure.', tag: 'Emerging', color: '#06b6d4' },
    { title: 'Quantum AI Convergence', description: 'Quantum-accelerated ML training in hours instead of weeks, with lower energy consumption.', tag: 'Growth', color: '#3b82f6' },
    { title: 'Post-Quantum Migration', description: 'NIST standards finalized, but full network transition could take a decade or more.', tag: 'Critical', color: '#ef4444' },
    { title: 'Quantum Internet', description: 'Quantum networking, entanglement distribution, and unhackable communication channels.', tag: 'Future', color: '#ec4899' },
  ],

  companies: [
    { name: 'IBM', desc: 'Quantum Starling roadmap targeting 200 logical qubits by 2029, 100,000 qubits by 2033. 250+ client organizations in Quantum Network.', metric: 'Roadmap to 100K', color: '#3b82f6' },
    { name: 'Google', desc: 'Willow chip with 105 qubits achieved exponential error reduction. Quantum Echoes algorithm runs 13,000x faster than classical.', metric: 'Below threshold', color: '#8b5cf6' },
    { name: 'Microsoft', desc: 'Majorana 1 topological qubit architecture with 1,000-fold error reduction. 28 entangled logical qubits with Atom Computing.', metric: 'Topological qubits', color: '#06b6d4' },
    { name: 'IonQ', desc: 'Trapped-ion quantum computers. Achieved practical quantum advantage in medical device simulation with Ansys (12% faster).', metric: 'First advantage', color: '#ec4899' },
    { name: 'Quantinuum', desc: 'Roche collaboration reduced drug target identification timelines by 40%. Leading quantum chemistry simulations.', metric: 'Pharma leader', color: '#10b981' },
    { name: 'Atom Computing', desc: 'Neutral atom platform attracted DARPA attention. Demonstrated utility-scale quantum operations, planning substantial scale by 2026.', metric: 'DARPA-backed', color: '#f59e0b' },
  ],

  marketStats: [
    { value: '$3.52B', label: 'Quantum market (2025)', source: 'Market research' },
    { value: '$20.2B', label: 'Projected market by 2030', source: 'McKinsey / BCG' },
    { value: '41.8%', label: 'CAGR 2025-2030', source: 'Industry forecasts' },
    { value: '296K+', label: 'Patents filed globally', source: 'WIPO / patent offices' },
    { value: '360+', label: 'Startups tracked', source: 'Quantum startup databases' },
    { value: '$2B+', label: 'VC funding in 2024', source: 'Crunchbase / PitchBook' },
  ],

  futurePredictions: [
    { year: '2026', prediction: 'Fujitsu/RIKEN deliver 1,000-qubit system', detail: 'IBM expands Quantum Network to 300+ organizations. First fault-tolerant logical qubit demonstrations. NIST PQC migration begins in federal agencies.' },
    { year: '2027', prediction: 'Practical quantum advantage in materials science', detail: 'Quantum simulations outperform classical for catalyst and battery materials. Google demonstrates scalable error correction above 1,000 physical qubits.' },
    { year: '2028', prediction: 'IBM Quantum Starling achieves 200 logical qubits', detail: 'First commercial quantum-enhanced drug enters preclinical testing. Quantum ML training accelerates specific AI workloads by 100x.' },
    { year: '2029', prediction: 'Quantum-as-a-Service reaches enterprise mainstream', detail: 'Azure Quantum and IBM Q platform process production workloads for pharma and finance. 50+ Fortune 500 companies with active quantum programs.' },
    { year: '2030', prediction: 'Quantum market crosses $20B', detail: 'Post-quantum cryptography migration 50% complete for government. Quantum internet prototypes connect 3+ cities. First quantum-accelerated AI model deployed commercially.' },
  ],

  trendingSearches: [
    { term: 'Quantum computing', volume: '1.5M/mo', growth: '+75%', type: 'Hot' },
    { term: 'Quantum error correction', volume: '49K/mo', growth: '+320%', type: 'Breakout' },
    { term: 'Post-quantum cryptography', volume: '110K/mo', growth: '+145%', type: 'Rising' },
    { term: 'IBM quantum', volume: '201K/mo', growth: '+60%', type: 'Hot' },
    { term: 'Google Willow chip', volume: '85K/mo', growth: '+450%', type: 'Breakout' },
    { term: 'Quantum supremacy', volume: '90K/mo', growth: '+25%', type: 'Stable' },
    { term: 'Quantum AI', volume: '60K/mo', growth: '+210%', type: 'Breakout' },
    { term: 'Quantum internet', volume: '27K/mo', growth: '+180%', type: 'Rising' },
    { term: 'Quantum cryptography', volume: '74K/mo', growth: '+40%', type: 'Steady' },
    { term: 'Quantum sensors', volume: '22K/mo', growth: '+95%', type: 'Rising' },
  ],

  faqs: [
    { q: 'How big is the quantum computing market?', a: 'The quantum computing market is projected to grow from $3.52 billion in 2025 to $20.2 billion by 2030, at a CAGR of 41.8%. Over 360 startups are tracked globally, with 296,000+ patents filed. The US leads in patents with 100,000+, followed by China with 56,000+.' },
    { q: 'What is quantum error correction?', a: 'Quantum error correction (QEC) addresses the fragility of qubits, which can "decohere" into unusable states when interfered with by external forces. Google\'s Willow chip achieved exponential error reduction as qubit counts increased, and IBM\'s Quantum Starling targets 200 logical qubits by 2029. Error rates have hit record lows of 0.000015% per operation.' },
    { q: 'What is post-quantum cryptography?', a: 'Post-quantum cryptography (PQC) refers to encryption algorithms designed to withstand attacks from quantum computers. NIST finalized three standards in August 2024: ML-KEM, ML-DSA, and SLH-DSA. The White House has initiated executive actions for federal adoption, though full network migration could take a decade or more.' },
    { q: 'When will quantum computers be useful?', a: 'Practical quantum advantage is emerging. IonQ and Ansys demonstrated a 12% speedup in medical device simulation. Google\'s Quantum Echoes algorithm runs 13,000x faster than classical. Materials science problems are closest to quantum advantage, with DOE workloads potentially addressable within 5-10 years.' },
    { q: 'What is Quantum-as-a-Service?', a: 'QaaS provides cloud-based access to quantum computers, allowing organizations to run pilot projects without massive capital investment. IBM, Microsoft (Azure Quantum), AWS, and Google all offer pay-as-you-go quantum access. IBM\'s Quantum Network includes 250+ client organizations.' },
    { q: 'How is quantum computing used in drug discovery?', a: 'Quantum algorithms like VQE and QAOA can model molecular interactions at atomic precision far beyond classical computers. Roche and Quantinuum reduced target identification timelines by 40%. Pfizer, AstraZeneca, and Merck have signed multi-year quantum service agreements worth $200M+ collectively.' },
    { q: 'What is Google\'s Willow quantum chip?', a: 'Google\'s Willow chip, announced in December 2024, achieved a historic milestone in quantum error correction: as more qubits were added, the error rate decreased exponentially — the first time this has been demonstrated. Willow uses 105 superconducting qubits and completed a benchmark task in under 5 minutes that would take the fastest supercomputer 10^25 years. This proves that scalable quantum error correction is physically possible, a prerequisite for building useful large-scale quantum computers.' },
    { q: 'What is IBM\'s Quantum Starling roadmap?', a: 'IBM\'s Quantum Starling is a roadmap to build a 200-logical-qubit quantum computer by 2029, scaling to 16,000+ physical qubits. The plan uses modular architecture with classical communication between quantum processors. IBM has already demonstrated 1,386-qubit Kookaburra processors and plans to combine multiple chips via quantum interconnects. The Starling would be capable of running useful quantum algorithms for chemistry, optimization, and machine learning that are intractable on classical computers.' },
  ],

  articles: [
    { title: 'IBM 1000-Qubit Processor: What It Means', href: '/blog/ibm-1000-qubits', date: '2026-01-14', excerpt: 'IBM has crossed the 1000-qubit threshold — but what does it actually mean?' },
    { title: 'Google Willow: The Error Correction Breakthrough', href: '/blog/google-willow-qec', date: '2026-01-11', excerpt: 'How Google achieved exponential error reduction in quantum computing.' },
    { title: 'Post-Quantum Cryptography: The New NIST Standards', href: '/blog/post-quantum-crypto', date: '2026-01-07', excerpt: 'The encryption standards that will protect us from quantum attacks.' },
    { title: 'Quantum Advantage: Hype vs Reality', href: '/blog/quantum-advantage-reality', date: '2026-01-03', excerpt: 'When will quantum computers actually be useful? An honest assessment.' },
    { title: 'Quantum AI: Training LLMs in Hours Not Weeks', href: '/blog/quantum-ai-ml', date: '2025-12-30', excerpt: 'The convergence of quantum computing and machine learning.' },
  ],
};

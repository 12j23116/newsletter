/**
 * SPACE topic CONTENT
 * ────────────────────────────────
 * Fully independent — edit without affecting other topic pages.
 * Based on deep research: $626B space economy, 260+ launches, D2D,
 * in-space manufacturing, lunar economy, space defense, and more.
 */

export const spaceContent = {
  name: 'Space Exploration',
  slug: 'space',
  tagline: 'Rockets, satellites, lunar economy, and the new space race',
  description:
    'The global space economy has reached $626 billion and is accelerating toward $1 trillion. Explore launch vehicles, satellite constellations, in-space manufacturing, lunar mining, Mars exploration, and the technologies defining humanity\'s multi-planetary future.',
  icon: '🚀',
  gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
  accentColor: '#06b6d4',
  accentColor2: '#3b82f6',
  heroImage: '/images/space-01-orbital-station.webp',
  characterImage: '/images/019-space-character-indigo.webp',

  stats: [
    { value: '$626B', label: 'Global space economy (2025)' },
    { value: '260+', label: 'Orbital launches in 2025' },
    { value: '$12.4B', label: 'Venture capital invested' },
    { value: '$1T', label: 'Projected by 2034' },
  ],

  sections: [
    {
      id: 'space-economy',
      eyebrow: 'Market Overview',
      title: 'The $626 Billion Space Economy',
      image: '/images/space-05-satellite-constellation.webp',
      subtitle: 'The global space economy reached unprecedented scale in 2025, growing approximately 8% to $626 billion. Commercial revenue accounts for roughly 80% of the total, with government space budgets contributing approximately $115 billion. The industry is projected to reach $1 trillion by 2034.',
      points: [
        { label: 'Commercial revenue', value: '$500B+', desc: '~80% of total space economy' },
        { label: 'Government spending', value: '$138B', desc: 'Driven by security & exploration' },
        { label: 'US market share', value: '~40%', desc: 'Dominant space economy globally' },
        { label: 'VC investment', value: '$12.4B', desc: 'Sharp rebound from 2024 trough' },
      ],
    },
    {
      id: 'launch-vehicles',
      eyebrow: 'Trending Technology',
      title: 'Launch Vehicles & Reusability',
      image: '/images/space-04-rocket-launch.webp',
      subtitle: 'SpaceX conducted 132 Falcon 9/Heavy missions in 2025 — over 50% of global launches. Blue Origin\'s New Glenn reached orbit in Q1 2026. The era of reusable rockets is transforming launch economics.',
      points: [
        { label: 'SpaceX flights', value: '132', desc: 'Falcon 9/Heavy missions in 2025' },
        { label: 'Launch success rate', value: '92%+', desc: 'Across all global launches' },
        { label: 'New Glenn', value: 'Q1 2026', desc: 'Blue Origin\'s first orbital mission' },
        { label: 'Rocket Lab cadence', value: '16 flights', desc: '97% mission success rate' },
      ],
    },
    {
      id: 'satellite-constellations',
      eyebrow: 'Connectivity Revolution',
      title: 'Satellite Constellations & Direct-to-Device',
      image: '/images/space-08-space-telescope.webp',
      subtitle: 'AST SpaceMobile deployed BlueBird satellites with 64 sq-meter antennas, demonstrating broadband to unmodified smartphones. SpaceX/T-Mobile began direct-to-cell testing via Starlink. This unlocks a TAM of 5B+ unconnected mobile devices globally.',
      points: [
        { label: 'Starlink subscribers', value: '5M+', desc: 'Generating $8B+ annual revenue' },
        { label: 'D2D interest', value: '76%', desc: 'Of consumers want satellite messaging' },
        { label: 'Amazon Kuiper', value: 'Enterprise-first', desc: 'Challenging Starlink in enterprise' },
        { label: 'Global devices', value: '5B+', desc: 'TAM for direct-to-device connectivity' },
      ],
    },
    {
      id: 'commercial-stations',
      eyebrow: 'Next-Gen Infrastructure',
      title: 'Commercial Space Stations',
      image: '/images/space-03-spacewalk-repair.webp',
      subtitle: 'With ISS retirement planned for ~2030, commercial stations are racing to operational status. Axiom Space attached a second module to ISS. Vast (Haven-1) and Starlab (Voyager/Airbus) are progressing toward standalone station launches.',
      points: [
        { label: 'Commercial LEO market', value: '$4B+', desc: 'Projected by 2030' },
        { label: 'ISS retirement', value: '~2030', desc: 'Driving commercial station race' },
        { label: 'Axiom Space', value: '2 modules', desc: 'Attached to ISS, expanding' },
        { label: 'Vast Haven-1', value: 'Standalone', desc: 'Progressing toward launch' },
      ],
    },
    {
      id: 'in-space-manufacturing',
      eyebrow: 'Emerging Industry',
      title: 'In-Space Manufacturing',
      image: '/images/space-07-asteroid-mining.webp',
      subtitle: 'Varda Space Industries returned its W-2 capsule with pharmaceuticals crystallized in microgravity, validating the commercial model. The in-space manufacturing market is projected to grow from $1.33B to $10.67B by 2032 at 29.78% CAGR.',
      points: [
        { label: 'Market size (2024)', value: '$1.33B', desc: 'Growing at 29.78% CAGR' },
        { label: 'Projected (2032)', value: '$10.67B', desc: 'Driven by microgravity products' },
        { label: 'Varda W-2', value: 'Validated', desc: 'Pharma crystallization in orbit' },
        { label: 'Key products', value: 'ZBLAN, pharma', desc: 'Superior quality in microgravity' },
      ],
    },
    {
      id: 'lunar-economy',
      eyebrow: 'Beyond Earth Orbit',
      title: 'Lunar Economy & Artemis Program',
      image: '/images/space-06-lunar-construction.webp',
      subtitle: 'NASA aims to return humans to the Moon by 2028 and build a lunar base. China\'s Chang\'e-7 launches in 2026 for south pole water ice survey. The cislunar propellant depot is the highest-NPV unbuilt asset in the solar system.',
      points: [
        { label: 'Artemis landing', value: '2028', desc: 'NASA crewed lunar return target' },
        { label: 'China crewed landing', value: '2030', desc: 'All hardware prototyped' },
        { label: 'South pole water ice', value: '$500M', desc: 'Mars mission propellant cost cut' },
        { label: 'Space Force budget', value: '$71B', desc: 'Proposed 77% increase FY2027' },
      ],
    },
    {
      id: 'mars-exploration',
      eyebrow: 'Multi-Planetary Future',
      title: 'Mars Exploration & Beyond',
      image: '/images/space-02-mars-habitat.webp',
      subtitle: 'SpaceX\'s Starship achieved historic booster catch in October 2025, demonstrating full-stack reusability. Orbital refueling demonstrations are next — critical for the NASA Artemis HLS contract and eventual Mars missions.',
      points: [
        { label: 'Starship booster catch', value: 'Oct 2025', desc: 'Historic full-stack reusability' },
        { label: 'Orbital refueling', value: 'Next', desc: 'Critical for Mars missions' },
        { label: 'Perseverance', value: 'Active', desc: 'Sample collection on Mars' },
        { label: 'Mars sample return', value: '2030s', desc: 'First samples from another planet' },
      ],
    },
    {
      id: 'space-defense',
      eyebrow: 'Security & Sovereignty',
      title: 'Space Defense & Security',
      image: '/images/space-09-booster-landing.webp',
      subtitle: 'Defense spending on space reached $30B+ globally. The Space Development Agency continues deploying proliferated LEO satellites for missile warning and data transport. The aerospace cybersecurity market is set to reach $58.9 billion by 2032.',
      points: [
        { label: 'Global defense spending', value: '$30B+', desc: 'Space defense programs' },
        { label: 'Aerospace cybersecurity', value: '$58.9B', desc: 'Market size by 2032' },
        { label: 'SDA Tranche 1', value: 'Deploying', desc: 'Missile warning & data transport' },
        { label: 'Government budgets', value: '$73B', desc: 'Defense-related space (2024)' },
      ],
    },
    {
      id: 'space-debris',
      eyebrow: 'Sustainability',
      title: 'Space Debris & Orbital Sustainability',
      image: '/images/space-10-ice-moon-probe.webp',
      subtitle: 'Approximately 44,870 tracked objects are in orbit. Astroscale is developing debris removal technologies. OrbitFab is building satellite refueling infrastructure. The 3D-printed satellite market will grow from $112M to $487M by 2030.',
      points: [
        { label: 'Tracked objects', value: '44,870', desc: 'In Earth orbit' },
        { label: '3D-printed satellites', value: '$487M', desc: 'Market by 2030 (27.7% CAGR)' },
        { label: 'Debris removal', value: 'Emerging', desc: 'Astroscale, ClearSpace leading' },
        { label: 'Satellite refueling', value: 'OrbitFab', desc: 'First refueling infrastructure' },
      ],
    },
    {
      id: 'space-solar-power',
      eyebrow: 'Energy from Orbit',
      title: 'Space-Based Solar Power',
      image: '/images/space-07-asteroid-mining.webp',
      subtitle: 'SBSP systems produce 40x more energy than Earth-based solar panels. ESA launched SOLARIS, China aims for 1MW by 2030, and Caltech demonstrated wireless power transmission from space in 2024. Global investment reached $370M in 2024.',
      points: [
        { label: 'SBSP market (2030)', value: '$4.7B', desc: 'Growing to $6.8B by 2040' },
        { label: 'Energy advantage', value: '40x', desc: 'vs Earth-based solar panels' },
        { label: 'Caltech demo', value: '2024', desc: 'Wireless power from space' },
        { label: 'Investment', value: '$370M', desc: 'Global SBSP investment (2024)' },
      ],
    },
    {
      id: 'satellite-analytics',
      eyebrow: 'Data & AI',
      title: 'Satellite Data Analytics & GeoAI',
      image: '/images/space-08-space-telescope.webp',
      subtitle: 'Over 900 active EO satellites in orbit in 2024, expected to exceed 2,300 by 2032. AI integration enables predictive analytics, anomaly detection, and edge processing. Planet Labs partners with NVIDIA for AI edge processing on satellites.',
      points: [
        { label: 'EO satellites', value: '900+', desc: 'Expected 2,300+ by 2032' },
        { label: 'EO investments', value: '$1.7B', desc: 'Reached in 2024' },
        { label: 'Data services CAGR', value: '16%', desc: '2024-2030 growth rate' },
        { label: '44 countries', value: 'Sovereign', desc: 'Have EO constellation plans' },
      ],
    },
  ],

  trends: [
    { title: 'AI in LEO Networks', description: 'Satellites are becoming compute nodes with onboard AI processing, reducing downlink bottlenecks.', tag: 'Trending', color: '#06b6d4' },
    { title: 'Data Centers in Space', description: 'Amazon, Google, and SpaceX say orbital data centers will complement ground DCs within 5-10 years.', tag: 'Emerging', color: '#3b82f6' },
    { title: 'Direct-to-Device Connectivity', description: 'Broadband to unmodified smartphones from space — a 5B+ device TAM.', tag: 'Growth', color: '#8b5cf6' },
    { title: 'In-Space Manufacturing', description: 'Microgravity-produced pharmaceuticals and fiber optics with superior properties.', tag: 'Hot', color: '#ec4899' },
    { title: 'Lunar Resource Mining', description: 'South pole water ice could cut Mars mission propellant costs from $5B to $500M.', tag: 'Future', color: '#f59e0b' },
    { title: 'Space Debris Remediation', description: '44,870 tracked objects are driving a new orbital sustainability industry.', tag: 'Critical', color: '#ef4444' },
  ],

  companies: [
    { name: 'SpaceX', desc: '132 flights in 2025, Starlink 5M+ subscribers, Starship development progressing.', metric: '$1.4T valuation', color: '#3b82f6' },
    { name: 'Rocket Lab', desc: 'Best-performing space stock. Electron hit 16 flights, Neutron approaching first flight.', metric: '40%+ revenue growth', color: '#06b6d4' },
    { name: 'Blue Origin', desc: 'New Glenn completed first orbital mission in Q1 2026. BE-4 powered heavy-lift vehicle.', metric: 'First orbital flight', color: '#8b5cf6' },
    { name: 'AST SpaceMobile', desc: 'BlueBird satellites with 64 sq-m antennas demonstrating broadband to unmodified phones.', metric: '5B+ device TAM', color: '#ec4899' },
    { name: 'Varda Space', desc: 'Returned W-2 capsule with microgravity-crystallized pharmaceuticals, validating commercial model.', metric: '$500M segment', color: '#10b981' },
    { name: 'Axiom Space', desc: 'Attached second module to ISS, leading commercial station development race.', metric: '$4B+ LEO market', color: '#f59e0b' },
  ],

  marketStats: [
    { value: '$626B', label: 'Global space economy (2025)', source: 'Space Economy Report' },
    { value: '260+', label: 'Orbital launches in 2025', source: 'FAA / Global launch tracking' },
    { value: '5M+', label: 'Starlink subscribers', source: 'SpaceX updates' },
    { value: '$12.4B', label: 'Venture capital invested', source: 'Space Capital Q4 2025' },
    { value: '44,870', label: 'Tracked objects in orbit', source: 'ESA Space Debris Office' },
    { value: '$1T', label: 'Projected economy by 2034', source: 'Morgan Stanley' },
  ],

  futurePredictions: [
    { year: '2026', prediction: 'Blue Origin New Glenn reaches orbit', detail: 'First orbital-class reusable second stage. Starship V3 debut with increased payload capacity. Direct-to-device messaging goes commercial.' },
    { year: '2027', prediction: 'Commercial space station race accelerates', detail: 'Axiom Station detaches from ISS as standalone platform. Vast Haven-1 launches. Starlab progresses toward 2028 target.' },
    { year: '2028', prediction: 'NASA Artemis crewed lunar landing', detail: 'First humans on the Moon since 1972. Lunar Gateway operational. SpaceX Starship HLS delivers crew to south pole.' },
    { year: '2029', prediction: 'In-space manufacturing crosses $5B', detail: 'Varda scales pharmaceutical production. ZBLAN fiber optics commercial. First orbital data center prototype deployed.' },
    { year: '2030', prediction: 'ISS deorbit and commercial transition', detail: 'ISS safely deorbited. Commercial LEO destinations operational. China Tiangong expanded. Mars sample return mission launches.' },
  ],

  trendingSearches: [
    { term: 'SpaceX Starship', volume: '2.7M/mo', growth: '+180%', type: 'Hot' },
    { term: 'Space economy', volume: '450K/mo', growth: '+85%', type: 'Rising' },
    { term: 'Direct to device satellite', volume: '247K/mo', growth: '+320%', type: 'Breakout' },
    { term: 'Artemis program', volume: '201K/mo', growth: '+45%', type: 'Steady' },
    { term: 'Starlink', volume: '4.1M/mo', growth: '+60%', type: 'Hot' },
    { term: 'Space tourism', volume: '165K/mo', growth: '+25%', type: 'Stable' },
    { term: 'In-space manufacturing', volume: '49K/mo', growth: '+210%', type: 'Breakout' },
    { term: 'Lunar economy', volume: '39K/mo', growth: '+150%', type: 'Rising' },
    { term: 'Space debris removal', volume: '27K/mo', growth: '+95%', type: 'Rising' },
    { term: 'Space solar power', volume: '22K/mo', growth: '+175%', type: 'Breakout' },
  ],

  faqs: [
    { q: 'How big is the space economy in 2025?', a: 'The global space economy reached $626 billion in 2025, with commercial revenue accounting for roughly 80% ($500B+). It is projected to reach $1 trillion by 2034 at an 8-10% CAGR.' },
    { q: 'How many orbital launches happened in 2025?', a: 'There were 260+ orbital launch attempts globally in 2025, with a 92%+ success rate. SpaceX alone conducted 132 Falcon 9/Heavy missions, accounting for over 50% of global launches.' },
    { q: 'What is direct-to-device satellite connectivity?', a: 'Direct-to-Device (D2D) technology enables satellites to provide broadband connectivity directly to unmodified smartphones. AST SpaceMobile and SpaceX/T-Mobile are leading this effort, unlocking a market of 5B+ unconnected mobile devices globally.' },
    { q: 'When will commercial space stations replace the ISS?', a: 'The ISS is planned for retirement around 2030. Commercial stations from Axiom Space, Vast (Haven-1), and Starlab (Voyager/Airbus) are racing to operational status, with the commercial LEO destination market projected at $4B+ by 2030.' },
    { q: 'What is in-space manufacturing?', a: 'In-space manufacturing uses microgravity conditions to produce materials with superior properties — such as pharmaceuticals with perfect crystal structures and ZBLAN fiber optics with lower signal loss. The market is projected to grow from $1.33B to $10.67B by 2032.' },
    { q: 'When will NASA return to the Moon?', a: 'NASA\'s Artemis program aims to return humans to the Moon by 2028 and build a lunar base for continued operations. China is targeting a crewed lunar landing by 2030 with all hardware already prototyped.' },
    { q: 'What is Starlink and how many satellites are in orbit?', a: 'Starlink is SpaceX\'s satellite internet constellation providing broadband coverage globally. As of 2026, over 7,000 Starlink satellites are in low Earth orbit, serving 5M+ subscribers in 100+ countries. The constellation is approved for up to 42,000 satellites. Starlink generates $6.6B+ annual revenue for SpaceX and is the largest satellite constellation ever deployed.' },
    { q: 'How does space solar power work?', a: 'Space-based solar power (SBSP) captures solar energy in orbit using large photovoltaic arrays and transmits it to Earth via microwave or laser beams. The advantage is continuous energy generation — no night, no weather, no atmosphere. China plans a 1 MW demonstration by 2030, the US Naval Research Lab has demonstrated power beaming, and Caltech\'s SSPD prototype successfully transmitted power to Earth in 2023. Searches for space solar power grew 175% YoY.' },
  ],

  articles: [
    { title: 'Starship V3: SpaceX Mars Rocket Explained', href: '/blog/starship-v3-explained', date: '2026-01-14', excerpt: 'The most powerful rocket ever built — and its path to Mars.' },
    { title: 'The $626B Space Economy: 2026 Industry Report', href: '/blog/space-economy-2026', date: '2026-01-12', excerpt: 'A comprehensive analysis of the global space economy.' },
    { title: 'Direct-to-Device: Satellite Connectivity Revolution', href: '/blog/d2d-satellite-connectivity', date: '2026-01-08', excerpt: 'How satellites are connecting unmodified smartphones globally.' },
    { title: 'Artemis: NASA Return to the Moon', href: '/blog/artemis-program-guide', date: '2026-01-05', excerpt: 'Everything you need to know about NASA lunar program.' },
    { title: 'In-Space Manufacturing: The $10B Opportunity', href: '/blog/in-space-manufacturing', date: '2026-01-02', excerpt: 'Microgravity is creating a new manufacturing frontier.' },
  ],
};

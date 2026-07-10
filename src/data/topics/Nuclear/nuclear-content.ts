/**
 * NUCLEAR topic CONTENT
 * ────────────────────────
 * All content for the Nuclear Energy topic page.
 * Edit this file to update text, topics, stats, FAQs.
 * Does NOT affect other topic pages.
 */

export const nuclearContent = {
  name: 'Nuclear Energy',
  slug: 'nuclear',
  tagline: 'SMRs, advanced fission, and the atomic comeback',
  description:
    'From small modular reactors and Generation IV designs to fusion milestones and the AI-nuclear nexus — explore the technologies reshaping the global energy landscape with clean, dispatchable baseload power.',
  icon: '⚛️',
  gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  heroStats: [
    { value: '440+', label: 'Reactors operating globally' },
    { value: '60+', label: 'SMR designs in development' },
    { value: '$53.8B', label: 'SMR market by 2036' },
    { value: '1,446', label: 'GWe projected by 2050' },
  ],

  smrSection: {
    title: 'Small Modular Reactors (SMRs): The Nuclear Renaissance',
    eyebrow: 'Trending #1 in Nuclear',
    description:
      'Small Modular Reactors are compact, factory-built nuclear reactors typically under 300 MWe. They promise lower construction costs, enhanced passive safety, and scalable deployment — making them the most searched nuclear topic globally.',
    keyPoints: [
      { title: 'Factory-Built & Scalable', desc: 'Modular manufacturing enables series production, reducing costs up to 40% after 6-10 units.' },
      { title: 'Enhanced Passive Safety', desc: 'Gen III+ designs use gravity, convection, and natural circulation — no active cooling needed.' },
      { title: 'Flexible Siting', desc: 'Smaller footprint allows deployment near data centers, industrial sites, and remote communities.' },
      { title: 'Cost-Competitive Baseload', desc: 'Continuous clean power at competitive LCOE, unlike intermittent renewables.' },
    ],
    companies: [
      { name: 'NuScale', design: 'VOYGR (77 MWe)', status: 'NRC Certified', country: 'USA' },
      { name: 'TerraPower', design: 'Natrium (345 MWe)', status: 'Under Construction', country: 'USA' },
      { name: 'Oklo', design: 'Aurora (15-75 MWe)', status: 'NRC Licensing', country: 'USA' },
      { name: 'X-energy', design: 'Xe-100 (80 MWe)', status: 'DOE Funded', country: 'USA' },
      { name: 'Kairos Power', design: 'Hermes (140 MWe)', status: 'Under Construction', country: 'USA' },
      { name: 'Rolls-Royce', design: 'UK SMR (470 MWe)', status: 'Design Phase', country: 'UK' },
      { name: 'CNNC', design: 'Linglong One (125 MWe)', status: 'Operational 2026', country: 'China' },
      { name: 'Rosatom', design: 'RITM-200S (57 MWe)', status: 'Under Construction', country: 'Russia' },
    ],
  },

  aiNexusSection: {
    title: 'The AI-Nuclear Nexus: Powering the Data Center Boom',
    eyebrow: 'Industry Trend',
    description:
      'Tech giants Microsoft, Amazon, Google, and Meta are securing nuclear power to meet the explosive energy demands of AI infrastructure. Nearly 40% of top nuclear searches in 2025 were tied to Big Tech energy deals.',
    deals: [
      { company: 'Microsoft', partner: 'Constellation / Three Mile Island', type: 'Plant Restart', detail: '20-year PPA to restart TMI Unit 1 for AI data centers' },
      { company: 'Amazon', partner: 'X-energy', type: 'SMR Investment', detail: '$500M+ investment; 4 HTGRs to power data centers by 2030s' },
      { company: 'Google', partner: 'Kairos Power / CFS', type: 'SMR + Fusion PPA', detail: 'Multi-reactor PPA; also partnered with Commonwealth Fusion Systems' },
      { company: 'Meta', partner: 'Oklo & TerraPower', type: 'LMFR Deployment', detail: 'Seeking 1-4 GW of nuclear capacity for AI operations' },
    ],
    statHighlight: '70 TWh → 115 TWh projected European data center electricity by 2030',
  },

  advancedReactorsSection: {
    title: 'Generation IV Advanced Reactor Technologies',
    eyebrow: 'Emerging Technology',
    description:
      'Beyond traditional light water reactors, Gen IV designs use molten salt, liquid metal, and high-temperature gas coolants to achieve higher efficiency, new capabilities, and enhanced safety.',
    types: [
      {
        name: 'Molten Salt Reactors (MSR)',
        coolant: 'Molten Fluoride/Chloride Salt',
        temp: '600-900°C',
        advantage: 'High thermal efficiency, fuel flexibility, online refueling',
        companies: 'Kairos Power, TerraPower, MoltexEnergy',
      },
      {
        name: 'High-Temperature Gas Reactors (HTGR)',
        coolant: 'Helium Gas',
        temp: '700-950°C',
        advantage: 'High efficiency, process heat for industry & hydrogen',
        companies: 'X-energy, BWX Technologies',
      },
      {
        name: 'Liquid Metal Fast Reactors (LMFR)',
        coolant: 'Sodium or Lead-Bismuth',
        temp: '500-550°C',
        advantage: 'Breeding capability, actinide recycling, long fuel cycle',
        companies: 'Oklo, TerraPower (Natrium), GE Hitachi',
      },
      {
        name: 'Microreactors',
        coolant: 'Various (Heat Pipe)',
        temp: 'Varies',
        advantage: 'Transportable, 1-20 MWe, fully passive, remote deployment',
        companies: 'Westinghouse eVinci, Radiant, Oklo Aurora',
      },
    ],
  },

  fusionSection: {
    title: 'Nuclear Fusion: The Path to Unlimited Clean Energy',
    eyebrow: 'Future Technology',
    description:
      'Fusion energy has entered a transformative phase. With $12B+ in private investment and 45+ startups, the race to commercial fusion is accelerating — driven by breakthroughs in magnetic confinement and laser ignition.',
    milestones: [
      { year: '2022', event: 'NIF achieves first net-energy-gain fusion ignition' },
      { year: '2025', event: 'Multiple private companies demonstrate significant plasma progress' },
      { year: '2026', event: 'Commonwealth Fusion Systems SPARC first plasma expected' },
      { year: '2027-2030', event: 'Helion Energy targets first electricity from fusion' },
      { year: 'Early 2030s', event: 'CFS ARC commercial fusion plant (~400 MW) planned' },
      { year: '2030-2040', event: 'Fusion market projected to grow at ~6% CAGR' },
    ],
    companies: [
      { name: 'Commonwealth Fusion Systems', approach: 'Tokamak / HTS Magnets', backing: 'Google, Bill Gates' },
      { name: 'Helion Energy', approach: 'Magneto-Inertial Fusion', backing: 'Microsoft PPA, Sam Altman' },
      { name: 'TAE Technologies', approach: 'Field-Reversed Configuration', backing: 'Google, NEA' },
      { name: 'Zap Energy', approach: 'Sheared-Flow Z-Pinch', backing: 'DOE, Energy Impact Partners' },
    ],
  },

  fuelCycleSection: {
    title: 'Nuclear Fuel Cycle: From Uranium to HALEU',
    eyebrow: 'Supply Chain',
    description:
      'The nuclear fuel cycle is undergoing a major shift. As advanced reactors demand High-Assay Low-Enriched Uranium (HALEU), the supply chain has become a critical bottleneck — and a top investment theme.',
    stages: [
      { stage: 'Mining', desc: 'Uranium extraction from Kazakhstan (43%), Canada, Namibia, and Australia' },
      { stage: 'Conversion', desc: 'Yellowcake (U₃O₈) converted to UF₆ gas for enrichment' },
      { stage: 'Enrichment', desc: 'Centrifuge enrichment to 3-5% (LEU) or 5-20% (HALEU)' },
      { stage: 'Fuel Fabrication', desc: 'Enriched uranium formed into fuel pellets and assemblies' },
      { stage: 'Reactor Operation', desc: 'Fuel generates electricity for 18-36 months per cycle' },
      { stage: 'Spent Fuel Management', desc: 'Interim storage, reprocessing, or deep geological disposal' },
    ],
    haleuAlert: 'HALEU supply is the #1 bottleneck for advanced reactor deployment. Only Centrus Energy currently produces HALEU domestically in the US.',
  },

  restartsSection: {
    title: 'Reactor Restarts & New Builds: The Fastest Path to Clean Power',
    eyebrow: 'Industry Trend',
    description:
      'In 2025, restarting retired nuclear plants emerged as a faster, more cost-effective path to clean baseload than building new reactors — driven by Big Tech PPAs and federal support.',
    projects: [
      { plant: 'Three Mile Island Unit 1', operator: 'Constellation', buyer: 'Microsoft', status: 'Restart 2028', power: '837 MWe' },
      { plant: 'Palisades', operator: 'Holtec International', buyer: 'Wolverine Energy', status: 'Restart 2026', power: '800 MWe' },
      { plant: 'Duane Arnold', operator: 'NextEra Energy', buyer: 'TBD', status: 'Restart planned', power: '601 MWe' },
      { plant: 'Crane Clean Energy Center', operator: 'Constellation', buyer: 'Microsoft', status: 'In progress', power: '837 MWe' },
      { plant: 'Diablo Canyon', operator: 'PG&E', buyer: 'State of California', status: 'Extended to 2030', power: '2,240 MWe' },
    ],
  },

  safetySection: {
    title: 'Nuclear Safety & Waste Management: Facts vs. Fear',
    eyebrow: 'Public Perception',
    description:
      'Nuclear energy is one of the safest forms of power generation by deaths per TWh. Modern reactor designs incorporate multiple layers of passive safety, and waste management solutions exist — but public perception lags behind reality.',
    facts: [
      { stat: '0.03', unit: 'deaths/TWh', label: 'Nuclear energy fatality rate — safer than solar, wind, and hydro' },
      { stat: '90%', unit: 'capacity factor', label: 'Nuclear operates at maximum output 90% of the time — highest of any energy source' },
      { stat: '50+', unit: 'years', label: 'Design life of modern reactors, with extensions to 60-80 years' },
      { stat: '<1%', unit: 'of radiation', label: 'Nuclear power contributes less than 1% of average human radiation exposure' },
    ],
    wasteTypes: [
      { type: 'Low-Level Waste', volume: '~90% of total volume', hazard: 'Low — tools, clothing, filters', disposal: 'Shallow land burial' },
      { type: 'Intermediate-Level', volume: '~7% of total volume', hazard: 'Moderate — resins, reactor components', disposal: 'Deep geological storage' },
      { type: 'High-Level Waste', volume: '~3% of total volume', hazard: 'High — spent fuel, reprocessing products', disposal: 'Deep geological repository (Onkalo, Finland)' },
    ],
  },

  investmentSection: {
    title: 'Nuclear Energy Stocks & Investment Landscape',
    eyebrow: 'Investment Opportunity',
    description:
      'The nuclear energy sector has emerged as a major investment theme, driven by SMR startups going public, uranium price surges, and Big Tech nuclear deals creating new exposure opportunities.',
    topics: [
      { sector: 'SMR Developers', examples: 'Oklo (OKLO), NuScale (SMR), Centrus Energy (LEU)', trend: 'High growth, high risk — pre-revenue valuations driven by future expectations' },
      { sector: 'Uranium Producers', examples: 'Cameco (CCJ), Energy Fuels (UUUU), Denison (DNN)', trend: 'Uranium spot price surge driven by AI demand and supply tightness' },
      { sector: 'Nuclear Utilities', examples: 'Constellation (CEG), Vistra (VST), NextEra (NEE)', trend: 'Stable returns enhanced by Big Tech PPAs and plant restarts' },
      { sector: 'Uranium ETFs', examples: 'URA, URNM, URNJ', trend: 'Diversified exposure to uranium mining and nuclear fuel cycle' },
    ],
  },

  policySection: {
    title: 'Nuclear Policy & Regulation: The Global Framework',
    eyebrow: 'Policy & Regulation',
    description:
      'Government support for nuclear energy has reached unprecedented levels, with the US, EU, China, and 20+ nations pledging to triple nuclear capacity by 2050.',
    policies: [
      { region: 'United States', policy: 'IRA Tax Credits + $900M SMR Program', impact: 'Production tax credits for existing & new nuclear; DOE funding for SMR development' },
      { region: 'European Union', policy: 'EU SMR Industrial Alliance + Net-Zero Industrial Act', impact: 'SMR deployment target by early 2030s; SMRs classified as net-zero technology' },
      { region: 'China', policy: '14th Five-Year Plan Nuclear Expansion', impact: 'World\'s fastest nuclear build program; Linglong One SMR operational 2026' },
      { region: 'United Kingdom', policy: 'Great British Nuclear', impact: 'SMR competition funding; Rolls-Royce UK SMR development support' },
      { region: 'India', policy: '100 GWe by 2047 Target', impact: 'Private sector participation enabled; Bharat Small Reactor program launched' },
      { region: 'Global', policy: 'COP28 Pledge: Triple Nuclear by 2050', impact: '20+ nations committed; endorsed by Amazon, Google, Meta in 2025' },
    ],
  },

  futureOutlookSection: {
    title: 'Nuclear Energy Outlook 2026-2030: What to Watch',
    eyebrow: 'Future Forecast',
    description:
      'The nuclear energy sector is entering a transformative period. Here are the key milestones and trends that will shape the industry through 2030 and beyond.',
    timeline: [
      { year: '2026', events: ['China\'s Linglong One becomes first commercial onshore SMR', 'CFS SPARC first plasma demonstration', 'Palisades restart targets completion'] },
      { year: '2027-2028', events: ['First SMR licensing decisions in the US', 'Helion Energy targets first fusion electricity', 'Multiple SMR final investment decisions'] },
      { year: '2029-2030', events: ['First US SMR deployments expected', 'EU SMR Alliance first-of-a-kind installations', 'Nuclear market reaches $70.68B'] },
      { year: '2030s', events: ['Commercial fusion plant (CFS ARC) targets operation', 'Gen IV reactors enter commercial deployment', 'Nuclear-powered shipping pilots launch'] },
    ],
    growthDrivers: [
      'AI data center electricity demand surging to 115+ TWh in Europe alone',
      'COP28 pledge to triple nuclear capacity by 2050',
      'SMR series production unlocking 40% cost reductions',
      'HALEU supply chain scaling to support advanced reactors',
      'Nuclear hydrogen production becoming commercially viable',
      'Microreactors enabling remote and industrial decarbonization',
    ],
  },

  faqSection: {
    title: 'Nuclear Energy Frequently Asked Questions',
    eyebrow: 'FAQ',
    items: [
      {
        q: 'What is a small modular reactor (SMR)?',
        a: 'A small modular reactor is a nuclear reactor typically producing under 300 MWe, designed with modular components that can be factory-built and transported to site. SMRs offer enhanced passive safety, lower upfront capital costs, and flexible deployment compared to traditional large nuclear plants.',
      },
      {
        q: 'How does nuclear energy power AI data centers?',
        a: 'Tech giants like Microsoft, Amazon, Google, and Meta are signing power purchase agreements (PPAs) with nuclear operators and investing in SMR startups. Nuclear provides 24/7 carbon-free baseload power — critical for data centers that require constant, reliable electricity. SMRs can be co-located directly with data centers, reducing grid dependency.',
      },
      {
        q: 'Is nuclear energy safe?',
        a: 'Nuclear energy has the lowest fatality rate of any major energy source at 0.03 deaths per TWh — lower than solar, wind, and hydro. Modern Gen III+ and Gen IV reactors use passive safety systems that require no active cooling. The risk of meltdown in newer designs is effectively eliminated through physics-based safety mechanisms.',
      },
      {
        q: 'What is HALEU and why does it matter?',
        a: 'HALEU (High-Assay Low-Enriched Uranium) is uranium enriched to 5-20% U-235, compared to the 3-5% used in conventional reactors. Most advanced reactors and SMRs require HALEU fuel. Currently, domestic HALEU production is extremely limited, making it the #1 supply chain bottleneck for advanced reactor deployment in the US.',
      },
      {
        q: 'When will nuclear fusion be commercially viable?',
        a: 'Multiple private fusion companies aim to demonstrate net energy production by 2026-2027. Commonwealth Fusion Systems plans its first commercial fusion power plant (ARC, ~400 MW) in the early 2030s. However, commercial viability at scale is most realistically expected in the 2035-2045 timeframe.',
      },
      {
        q: 'How much does a small modular reactor cost?',
        a: 'First-of-a-kind (FOAK) SMR costs are expected to be high, but series production of 6-10+ units is projected to reduce costs by up to 40%. The global SMR market is forecast to reach $53.8 billion by 2036 and nearly $300 billion by 2046, according to IDTechEx.',
      },
      {
        q: 'What is the difference between nuclear fission and fusion?',
        a: 'Fission splits heavy atoms (uranium, plutonium) to release energy — this is how all current nuclear power plants work. Fusion combines light atoms (hydrogen isotopes) to release energy — the same process that powers the sun. Fusion produces no long-lived radioactive waste and has no meltdown risk, but remains in the development phase.',
      },
      {
        q: 'Can nuclear energy help fight climate change?',
        a: 'Yes. Nuclear energy produces zero greenhouse gas emissions during operation and has the highest capacity factor (90%+) of any clean energy source. The COP28 pledge to triple nuclear capacity by 2050 recognizes nuclear as essential for achieving net-zero targets alongside renewables.',
      },
      {
        q: 'Which companies are building SMRs?',
        a: 'Key SMR developers include NuScale (VOYGR, first NRC-certified SMR design), TerraPower (Natrium sodium-cooled reactor in Wyoming), X-energy (Xe-100 high-temperature gas reactor), Rolls-Royce SMR (UK), Holtec (SMR-300), and GE Hitachi (BWRX-300 in Canada). China\'s CNNC has already completed the Linglong One (ACP100) — the world\'s first commercial onshore SMR. Russia\'s Akademik Lomonosov floating SMR has been operational since 2020.',
      },
      {
        q: 'What is the Palisades nuclear plant restart?',
        a: 'The Palisades Nuclear Plant in Michigan is set to become the first US nuclear plant to restart after previously shutting down. Holtec International purchased the plant in 2022 and is pursuing restart with $1.5B in federal funding from the Inflation Reduction Act. The restart targets 800 MW of carbon-free power and could be a template for reviving other retired nuclear plants. It\'s expected to resume operations in 2026.',
      },
    ],
  },

  relatedArticles: [
    { title: 'SMRs: The Complete Guide to Small Modular Reactors', href: '/blog/small-modular-reactors-guide', date: '2026-07-01', excerpt: 'Everything you need to know about SMR technology, economics, and deployment timelines.' },
    { title: 'The AI-Nuclear Nexus: How Big Tech Is Going Atomic', href: '/blog/ai-nuclear-nexus', date: '2026-06-28', excerpt: 'Microsoft, Amazon, Google, and Meta are betting billions on nuclear to power AI.' },
    { title: 'Nuclear Fusion 2026: Race to the First Commercial Plant', href: '/blog/nuclear-fusion-2026', date: '2026-06-20', excerpt: 'CFS, Helion, TAE, and Zap Energy are sprinting toward net fusion energy.' },
    { title: 'HALEU Crisis: The Fuel Bottleneck Threatening the Nuclear Renaissance', href: '/blog/haleu-supply-chain', date: '2026-06-15', excerpt: 'Why the uranium supply chain is the biggest challenge for advanced reactors.' },
    { title: 'Nuclear Energy Stocks: How to Invest in the Atomic Comeback', href: '/blog/nuclear-energy-stocks', date: '2026-06-10', excerpt: 'A guide to SMR stocks, uranium ETFs, and nuclear utilities.' },
    { title: 'Nuclear Waste Explained: The Real Story', href: '/blog/nuclear-waste-explained', date: '2026-06-05', excerpt: 'How nuclear waste is actually managed — and why the fear is overblown.' },
  ],
};

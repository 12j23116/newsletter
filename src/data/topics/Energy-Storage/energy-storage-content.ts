/**
 * ENERGY STORAGE topic CONTENT
 * ─────────────────────────────────
 * All content for the Energy Storage topic page.
 * Edit this file to update text, topics, stats, FAQs.
 * Does NOT affect other topic pages.
 */

export const energyStorageContent = {
  name: 'Energy Storage',
  slug: 'energy-storage',
  tagline: 'Batteries, BESS, and the grid of the future',
  description:
    'From lithium-ion dominance to sodium-ion, iron-air, and solid-state breakthroughs — explore the technologies powering the global energy transition with grid-scale storage, long-duration solutions, and the AI-data center storage boom.',
  icon: '🔋',
  gradient: 'linear-gradient(135deg, #10b981 0%, #84cc16 100%)',
  heroStats: [
    { value: '158 GW', label: 'Global deployments 2026' },
    { value: '2.9 TW', label: 'Cumulative capacity by 2036' },
    { value: '$30.86B', label: 'US market by 2034' },
    { value: '26.9%', label: 'US market CAGR' },
  ],

  marketOverviewSection: {
    title: 'Global Energy Storage Market: Explosive Growth Trajectory',
    eyebrow: 'Market Overview',
    description:
      'Energy storage has become the fastest-deploying energy technology in history. It took just four years to grow from 10 GW to 100+ GW in annual additions — faster than solar (8 years) or wind (15 years). The market is now entering a phase of large-scale infrastructure investment.',
    keyStats: [
      { stat: '112 GW', label: 'Installed in 2025 (record year)', sublabel: '307 GWh of energy capacity' },
      { stat: '158 GW', label: 'Forecast for 2026', sublabel: '459 GWh — 41% YoY increase' },
      { stat: '308 GW', label: 'Projected annual additions by 2036', sublabel: 'Nearly doubling current levels' },
      { stat: '2.9 TW', label: 'Cumulative capacity by 2036', sublabel: '10.5 TWh of stored energy' },
    ],
    regions: [
      { region: 'China', share: '61.1 GW', note: '54% increase YoY; 1.3 TW cumulative by 2036' },
      { region: 'United States', share: '18 GW', note: '46% increase; 334 GW cumulative by 2036' },
      { region: 'Europe', share: '3.8 GW', note: '160% surge in 2025; Germany leads' },
      { region: 'Middle East', share: '2.1 GW', note: 'Saudi Arabia leads; UAE & Egypt scaling' },
      { region: 'Sub-Saharan Africa', share: '4.3 GW', note: 'Quadrupled YoY; 155 GW by 2036' },
      { region: 'India', share: '0.5 GW', note: 'Emerging — 107 GW cumulative by 2036' },
    ],
  },

  lithiumIonSection: {
    title: 'Lithium-Ion Dominance: LFP and the Current Standard',
    eyebrow: 'Current Technology',
    description:
      'Lithium-ion batteries account for over 95% of new energy storage deployments. Lithium Iron Phosphate (LFP) has emerged as the preferred chemistry for stationary storage due to safety, cycle life, and cost advantages.',
    chemistries: [
      { name: 'LFP (LiFePO₄)', energy: '150-180 Wh/kg', cycles: '4,000-6,000', advantage: 'Safest Li-ion, no cobalt/nickel, lowest cost', use: 'Grid storage, standard-range EVs' },
      { name: 'NMC (Ni-Mn-Co)', energy: '200-280 Wh/kg', cycles: '2,000-3,000', advantage: 'High energy density, proven', use: 'Long-range EVs, power tools' },
      { name: 'NCA (Ni-Co-Al)', energy: '250-300 Wh/kg', cycles: '1,500-2,500', advantage: 'Highest energy density', use: 'Tesla vehicles, aerospace' },
    ],
    trends: [
      'LFP now dominates grid-scale BESS at >80% market share',
      'Cathode active material costs declining through scale manufacturing',
      'Cell prices expected to continue dropping through 2026',
      'Domestic manufacturing ramping up to reduce China supply dependency',
    ],
  },

  sodiumIonSection: {
    title: 'Sodium-Ion Batteries: The Low-Cost Challenger',
    eyebrow: 'Emerging Technology',
    description:
      'Sodium-ion batteries (SIBs) are the closest-to-commercialization next-generation battery technology. With 70 GWh produced in 2025 and 250 GWh projected by 2030, SIBs offer a drop-in alternative to lithium-ion at potentially lower cost.',
    keyFacts: [
      { stat: '70 GWh', label: 'Produced in 2025' },
      { stat: '250 GWh', label: 'Projected production by 2030' },
      { stat: '95-175', label: 'Wh/kg energy density range' },
      { stat: '5-10%', label: 'Of rechargeable battery market by 2030' },
    ],
    advantages: [
      { title: 'Abundant Raw Materials', desc: 'Sodium is 1,000x more abundant than lithium — no supply constraints' },
      { title: 'Drop-in Manufacturing', desc: 'Compatible with existing Li-ion production lines — rapid scaling' },
      { title: 'Lower Cost', desc: 'Target: 30% cheaper than LFP once scale is achieved' },
      { title: 'Cold Weather Performance', desc: 'Superior low-temperature operation vs. lithium-ion' },
    ],
    players: [
      { company: 'CATL', country: 'China', note: 'Largest SIB producer; ~25% of global capacity' },
      { company: 'BYD', country: 'China', note: 'Major SIB manufacturer; ~25% of global capacity' },
      { company: 'Faradion', country: 'UK', note: 'Acquired by Reliance; layered oxide chemistry' },
      { company: 'Natron Energy', country: 'USA', note: 'Prussian blue analog cathode; industrial UPS' },
    ],
  },

  longDurationSection: {
    title: 'Long-Duration Energy Storage (LDES): Beyond 4 Hours',
    eyebrow: 'Emerging Technology',
    description:
      'While 79% of 2025 storage additions were short-duration (≤4 hours), long-duration energy storage is forecast to grow from 3% to 13% of energy capacity by 2026. LDES technologies target 10-100+ hour discharge durations at a fraction of lithium-ion costs.',
    technologies: [
      {
        name: 'Iron-Air Batteries',
        company: 'Form Energy',
        duration: '100 hours',
        cost: '~$20/kWh (target)',
        desc: 'Reversible rusting of iron; 1/10th the cost of Li-ion; multi-day discharge',
      },
      {
        name: 'Flow Batteries (Vanadium/Zinc)',
        company: 'Multiple',
        duration: '10-12 hours',
        cost: '$200-400/kWh',
        desc: 'Liquid electrolyte in tanks; independent power/energy scaling; 20+ year life',
      },
      {
        name: 'Compressed Air Energy Storage (CAES)',
        company: 'Hydrostor, Lightsail',
        duration: '24+ hours',
        cost: '$150-300/kWh',
        desc: 'Compressed air in caverns or tanks; proven at scale; geographic flexibility',
      },
      {
        name: 'Thermal Energy Storage',
        company: 'Multiple',
        duration: '8-24 hours',
        cost: '$30-100/kWh (thermal)',
        desc: 'Sensible heat, phase-change materials; power-to-heat applications',
      },
      {
        name: 'Liquid Air Energy Storage',
        company: 'Highview Power',
        duration: '12+ hours',
        cost: '$200-350/kWh',
        desc: 'Cryogenic liquid air; no special geography; co-located with industrial waste cold',
      },
      {
        name: 'Gravity Storage',
        company: 'Energy Vault',
        duration: '8-16 hours',
        cost: '$150-250/kWh',
        desc: 'Lifting composite blocks; mechanical simplicity; no degradation',
      },
    ],
    marketForecast: 'LDES market projected at 80-140 TWh globally by 2040 (LDES Council)',
  },

  solidStateSection: {
    title: 'Solid-State Batteries: The Next Frontier',
    eyebrow: 'Future Technology',
    description:
      'Solid-state batteries replace liquid electrolyte with solid material, promising 2-3x energy density, improved safety, and faster charging. While commercialization has been delayed, major automakers and startups are targeting 2027-2030 for first vehicles.',
    benefits: [
      { title: 'Higher Energy Density', desc: '400-500+ Wh/kg target — enabling 500+ mile EV range' },
      { title: 'Enhanced Safety', desc: 'No flammable liquid electrolyte — eliminates thermal runaway risk' },
      { title: 'Faster Charging', desc: 'Solid electrolyte enables higher current densities' },
      { title: 'Longer Cycle Life', desc: 'Reduced dendrite growth — potentially 5,000+ cycles' },
    ],
    companies: [
      { name: 'Toyota', target: '2027-2028', detail: 'Partnership with Idemitsu; targeting 1,000 km range EVs' },
      { name: 'QuantumScape', target: '2026-2027', detail: 'QSE-5 cells in pre-production; Volkswagen partnership' },
      { name: 'Solid Power', target: '2026', detail: 'Sulfide electrolyte; BMW and Ford partnerships' },
      { name: 'Samsung SDI', target: '2027', detail: 'Oxide-based; pilot production line operational' },
      { name: 'Factorial', target: '2026-2027', detail: 'FEST technology; Mercedes-Benz partnership' },
      { name: 'SES AI', target: '2025-2026', detail: 'Hybrid Li-metal; Honda and GM partnerships' },
    ],
  },

  gridScaleSection: {
    title: 'Grid-Scale BESS: The Backbone of Renewable Integration',
    eyebrow: 'Industry Trend',
    description:
      'Battery Energy Storage Systems (BESS) are becoming mission-critical infrastructure for grid reliability. As variable renewable energy (VRE) reaches 36% of installed capacity (projected 56% by 2035), storage is essential for shifting solar generation to evening peaks and providing grid stability.',
    applications: [
      { app: 'Energy Shifting', desc: '79% of 2025 additions — moving solar/wind to peak demand periods', share: '79%' },
      { app: 'Frequency Regulation', desc: 'Fast-responding grid services for system stability', share: '8%' },
      { app: 'Transmission Support', desc: 'Deferring infrastructure upgrades; congestion management', share: '5%' },
      { app: 'Data Center Backup', desc: 'Replacing diesel generators with clean storage', share: '4%' },
      { app: 'Capacity Firming', desc: 'Making renewable output reliable and dispatchable', share: '4%' },
    ],
    innovations: [
      { title: 'Grid-Forming Inverters', desc: 'Storage that independently maintains voltage & frequency — ENTSO-E regulation expected 2026' },
      { title: 'Co-Located Solar+Storage', desc: '50%+ of new APAC storage projects paired with solar/wind in 2025' },
      { title: 'DC-Coupled Hybrids', desc: 'Direct coupling of solar panels to batteries — trending in Australia' },
      { title: 'Virtual Power Plants (VPP)', desc: 'Aggregating distributed batteries to provide grid services — energy-as-a-service' },
    ],
  },

  dataCenterSection: {
    title: 'Energy Storage for AI Data Centers',
    eyebrow: 'Industry Trend',
    description:
      'AI-driven data center expansion is creating massive new demand for energy storage. Over 230 GW of data center projects announced in the US alone, with Europe and China contributing 35 GW and 78 GW respectively. Storage is being deployed for interconnection support, load management, resilience, and clean power integration.',
    stats: [
      { stat: '230+ GW', label: 'US data center projects announced' },
      { stat: '78 GW', label: 'China data center pipeline' },
      { stat: '35 GW', label: 'Europe data center pipeline' },
      { stat: '24/7', label: 'Reliability requirement for AI workloads' },
    ],
    useCases: [
      'Interconnection support — bridging grid connection delays',
      'Load ramp management — handling sudden AI workload spikes',
      'Resilience backup — replacing diesel generators',
      'Clean power integration — pairing with renewables for 24/7 carbon-free energy',
    ],
  },

  recyclingSection: {
    title: 'Battery Recycling & Circular Economy',
    eyebrow: 'Sustainability',
    description:
      'As the first wave of EV and grid batteries reaches end-of-life, recycling is becoming a critical industry. Recovering lithium, cobalt, nickel, and copper reduces environmental impact, secures supply chains, and creates a circular economy worth billions.',
    methods: [
      { method: 'Hydrometallurgy', desc: 'Chemical leaching to recover metals — 95%+ recovery rates', companies: 'Redwood Materials, Li-Cycle, Aqua Metals' },
      { method: 'Pyrometallurgy', desc: 'High-temperature smelting — proven but energy-intensive', companies: 'Umicore, JX Metals' },
      { method: 'Direct Recycling', desc: 'Recovering cathode material without breaking molecular structure — emerging', companies: 'DOE ReCell, OnTo Technology' },
    ],
    marketSize: 'Battery recycling market projected to reach $50+ billion by 2030',
  },

  investmentSection: {
    title: 'Energy Storage Investment Landscape',
    eyebrow: 'Investment Opportunity',
    description:
      'The US BESS market alone is projected to grow from $2.85 billion (2024) to $30.86 billion (2034) at 26.9% CAGR. Global investment spans manufacturing, project development, and technology innovation.',
    segments: [
      { sector: 'Grid-Scale Storage', share: '45% of revenue', trend: 'Utility-deployed BESS for capacity, ancillary services, renewable firming' },
      { sector: 'Commercial & Industrial', share: '28% of revenue', trend: 'Behind-the-meter systems for demand charge management' },
      { sector: 'Residential Storage', share: '18% of revenue', trend: 'Home batteries + solar; VPP participation growing' },
      { sector: 'Off-Grid & Microgrid', share: '9% of revenue', trend: 'Remote power, island grids, military applications' },
    ],
  },

  futureOutlookSection: {
    title: 'Energy Storage Outlook 2026-2030: What to Watch',
    eyebrow: 'Future Forecast',
    description:
      'The energy storage sector is entering a phase of massive scale-up and technology diversification. Here are the key milestones and trends shaping the industry through 2030 and beyond.',
    timeline: [
      { year: '2026', events: ['158 GW global deployments forecast', 'Grid-forming inverter regulation in EU', 'Sodium-ion production scaling to 100+ GWh', 'LDES share grows to 13% of energy capacity'] },
      { year: '2027-2028', events: ['First solid-state EV batteries in production', 'Form Energy iron-air commercial deployments', 'VPP aggregations reaching GW scale'] },
      { year: '2029-2030', events: ['US cumulative storage reaches 93+ GW', 'Sodium-ion reaches cost parity with LFP', 'Battery recycling at industrial scale', 'Alternative chemistries gain 20%+ market share'] },
      { year: '2030s', events: ['Cumulative global capacity reaches 2.9 TW by 2036', 'LDES technologies mainstream for 10+ hour storage', 'Solid-state batteries in mass production', 'Storage enables 56%+ VRE penetration'] },
    ],
    growthDrivers: [
      'AI data center electricity demand creating massive new storage market',
      'Solar+storage becoming default configuration for new solar projects',
      'Grid-forming storage replacing synchronous generators for stability',
      'Sodium-ion and alternative chemistries reducing supply chain dependence',
      'VPPs and energy-as-a-service models unlocking distributed storage value',
      'Battery recycling creating circular economy and supply security',
    ],
  },

  faqSection: {
    title: 'Energy Storage Frequently Asked Questions',
    eyebrow: 'FAQ',
    items: [
      {
        q: 'What is grid-scale battery energy storage (BESS)?',
        a: 'A Battery Energy Storage System (BESS) is a large-scale installation of batteries connected to the electrical grid. BESS can store excess renewable energy when production is high and discharge it during peak demand, providing grid stability, capacity firming, and energy shifting. Grid-scale BESS typically range from a few MW to hundreds of MW in capacity.',
      },
      {
        q: 'How much energy storage is being deployed globally?',
        a: 'In 2025, a record 112 GW (307 GWh) of energy storage was installed globally. BloombergNEF forecasts 158 GW (459 GWh) for 2026 — a 41% increase. Annual additions are projected to reach 308 GW by 2036, with cumulative capacity hitting 2.9 TW (10.5 TWh).',
      },
      {
        q: 'What is the difference between lithium-ion and sodium-ion batteries?',
        a: 'Lithium-ion batteries use lithium ions as the charge carrier, while sodium-ion batteries use sodium ions. Sodium is 1,000x more abundant than lithium, making SIBs potentially much cheaper. SIBs are compatible with existing Li-ion manufacturing lines (drop-in), but currently have lower energy density (95-175 Wh/kg vs. 150-280 Wh/kg for Li-ion). SIBs are best suited for stationary storage and budget EVs.',
      },
      {
        q: 'What is long-duration energy storage (LDES)?',
        a: 'LDES refers to energy storage systems that can discharge for 10 hours or more — compared to the 2-4 hour duration of typical lithium-ion BESS. LDES technologies include iron-air batteries, flow batteries, compressed air, thermal storage, and gravity systems. LDES is critical for bridging multi-day gaps in renewable generation.',
      },
      {
        q: 'When will solid-state batteries be commercially available?',
        a: 'Major automakers including Toyota, BMW, and Mercedes-Benz are targeting 2026-2028 for solid-state batteries in vehicles. QuantumScape, Solid Power, and Samsung SDI have pilot production lines operational. Mass production and cost competitiveness is most realistically expected in the 2028-2032 timeframe.',
      },
      {
        q: 'How does energy storage support AI data centers?',
        a: 'AI data centers require 24/7 reliable power with massive and variable loads. Energy storage supports data centers by: (1) bridging grid interconnection delays, (2) managing sudden AI workload spikes, (3) providing clean backup power replacing diesel generators, and (4) integrating with renewables for 24/7 carbon-free energy. Over 230 GW of data center projects have been announced in the US alone.',
      },
      {
        q: 'What is a virtual power plant (VPP)?',
        a: 'A Virtual Power Plant aggregates distributed energy resources — home batteries, EVs, solar systems, and commercial storage — into a single grid-connected asset. VPPs allow these distributed resources to participate in wholesale energy markets, provide grid services, and earn revenue for owners. VPPs are a growing trend in the energy-as-a-service model.',
      },
      {
        q: 'Are iron-air batteries viable for grid storage?',
        a: 'Yes. Form Energy is commercializing iron-air batteries targeting $20/kWh — 1/10th the cost of lithium-ion. The technology uses reversible rusting of iron and can discharge for 100+ hours. Form Energy has orders from Georgia Power and is building a manufacturing facility in West Virginia. Iron-air batteries are heavier and larger than Li-ion, but this is irrelevant for stationary grid storage.',
      },
      {
        q: 'What is CATL\'s 1TWh battery production capacity?',
        a: 'CATL (Contemporary Amperex Technology) is the world\'s largest battery manufacturer, targeting 1TWh (terawatt-hour) annual production capacity by 2028. This is enough to power ~20 million EVs per year. CATL holds 37% of the global EV battery market and is expanding with LFP and sodium-ion production lines. The company is also developing condensed matter batteries with 500 Wh/kg energy density for electric aviation.' },
      {
        q: 'How do virtual power plants make money?',
        a: 'Virtual power plants earn revenue through multiple streams: (1) wholesale energy market participation — selling stored electricity during peak prices, (2) ancillary services — frequency regulation and grid stability payments, (3) capacity markets — payments for being available to discharge, (4) demand response — payments for reducing load during grid stress. Home battery owners in VPP programs like Tesla Virtual Power Plant in California earn $1-2/KWh annually.' },
    ],
  },

  relatedArticles: [
    { title: 'Solid-State Batteries: The Next Breakthrough?', href: '/blog/solid-state-batteries', date: '2026-07-01', excerpt: 'Are solid-state batteries finally ready for commercial production?' },
    { title: 'Grid-Scale Storage Hits 158 GW in 2026', href: '/blog/grid-scale-storage-2026', date: '2026-06-28', excerpt: 'Battery storage is growing faster than any energy technology in history.' },
    { title: 'Sodium-Ion Batteries: The Low-Cost Challenger', href: '/blog/sodium-ion-batteries', date: '2026-06-20', excerpt: 'Could sodium-ion replace lithium in budget EVs and grid storage?' },
    { title: 'Iron-Air Batteries: 100-Hour Storage at 1/10th the Cost', href: '/blog/iron-air-batteries', date: '2026-06-15', excerpt: 'Form Energy is targeting $20/kWh for multi-day grid storage.' },
    { title: 'Energy Storage for AI Data Centers', href: '/blog/storage-data-centers', date: '2026-06-10', excerpt: 'How batteries are solving the AI data center power crisis.' },
    { title: 'Battery Recycling: The Circular Economy', href: '/blog/battery-recycling', date: '2026-06-05', excerpt: 'Recovering lithium, cobalt, and nickel from end-of-life batteries.' },
  ],
};

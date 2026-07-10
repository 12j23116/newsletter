/**
 * FUSION topic CONTENT
 * ────────────────────────
 * All content for the Nuclear Fusion topic page.
 * Edit this file to update text, topics, stats, FAQs.
 * Does NOT affect other topic pages.
 */

export const fusionContent = {
  name: 'Nuclear Fusion',
  slug: 'fusion',
  tagline: 'ITER, NIF, and the quest for unlimited clean energy',
  description:
    'Follow the race to commercial fusion — from ITER and NIF breakthroughs to 45+ private startups pursuing the holy grail of energy. Magnetic confinement, inertial ignition, and the $9.2B investment reshaping the timeline.',
  icon: '🔥',
  gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
  heroImage: '/images/003-fusion-tokamak-reactor.webp',
  heroStats: [
    { value: '45+', label: 'Private fusion companies' },
    { value: '$9.2B', label: 'Private investment' },
    { value: '150M°C', label: 'Plasma temperature' },
    { value: '2030s', label: 'Expected commercial' },
  ],

  marketStats: [
    { value: '$9.2B', label: 'Total private investment', source: 'Fusion Industry Association, 2025' },
    { value: '$2.64B', label: 'Raised in last 12 months', source: 'FIA Annual Report, July 2025' },
    { value: '52', label: 'Private fusion companies', source: 'FIA, 2025' },
    { value: '$7B+', label: 'US government investment', source: 'DOE Bold Decadal Vision' },
    { value: '$20B+', label: 'ITER project cost', source: 'ITER Organization' },
    { value: '500 MW', label: 'ITER target output', source: 'ITER Design Basis' },
  ],

  topics: [
    { title: 'Magnetic Confinement', description: 'ITER, tokamaks, stellarators, and the 35-nation quest for sustained fusion.', icon: '🧲', trend: '+15%', searches: '22,000/mo' },
    { title: 'Inertial Confinement', description: 'NIF ignition breakthrough — using lasers to achieve fusion net energy gain.', icon: '🔦', trend: '+40%', searches: '5,400/mo' },
    { title: 'Private Fusion Startups', description: 'Helion, Commonwealth Fusion, TAE Technologies — 45+ companies racing.', icon: '🚀', trend: '+25%', searches: '8,100/mo' },
    { title: 'Fusion Fuel Cycles', description: 'D-T, D-D, and p-B11 — the fuel reactions that power the stars.', icon: '⛽', trend: 'Stable', searches: '3,600/mo' },
    { title: 'Materials for Fusion', description: 'Tungsten, beryllium, and the extreme materials challenge of containing a plasma.', icon: '🛡️', trend: '+10%', searches: '2,900/mo' },
    { title: 'Fusion Economics', description: 'When will fusion be commercially viable? Cost projections and timelines.', icon: '💰', trend: '+20%', searches: '4,400/mo' },
    { title: 'Plasma Physics', description: 'The science of confining 150 million°C plasma — stability, turbulence, and control.', icon: '⚡', trend: 'Stable', searches: '12,000/mo' },
    { title: 'Tritium Breeding', description: 'Self-sustaining fuel cycles and the lithium blanket challenge.', icon: '🔄', trend: '+15%', searches: '1,900/mo' },
    { title: 'Net Energy Gain', description: 'Q > 1 milestones and the path from scientific to engineering breakeven.', icon: '🎯', trend: '+35%', searches: '6,600/mo' },
  ],

  approaches: [
    { name: 'Tokamak', icon: '⭕', color: '#3b82f6', description: 'The leading approach — doughnut-shaped chambers use magnetic fields to confine plasma. ITER is the largest ever built.', companies: 'ITER, SPARC (CFS), KT-3', status: 'Most advanced' },
    { name: 'Stellarator', icon: '🌀', color: '#8b5cf6', description: 'Twisted magnetic geometry that avoids plasma currents. Harder to build but more stable than tokamaks.', companies: 'Wendelstein 7-X, Helical Fusion', status: 'Stable operation' },
    { name: 'Field-Reversed Config.', icon: '🔁', color: '#10b981', description: 'Compact plasma rings without central coils. Helion uses pulsed FRCs for direct energy conversion.', companies: 'Helion Energy, TAE Technologies', status: 'Fastest timeline' },
    { name: 'Inertial Confinement', icon: '🔦', color: '#f59e0b', description: 'High-power lasers compress fuel pellets to extreme densities. NIF achieved first ignition in 2022.', companies: 'NIF, Laser Fusion Energy', status: 'Ignition achieved' },
    { name: 'Magnetized Target', icon: '🎯', color: '#ef4444', description: 'Hybrid approach combining magnetic and inertial confinement. Lower cost, moderate gain potential.', companies: 'General Fusion, Zap Energy', status: 'Scaling up' },
    { name: 'Direct Drive', icon: '💥', color: '#06b6d4', description: 'Lasers hit fuel directly without hohlraum. Higher efficiency but requires uniform illumination.', companies: 'LaserNetUS, OMEGA', status: 'Research phase' },
  ],

  keyProjects: [
    { name: 'ITER', type: 'International Tokamak', location: 'Cadarache, France', milestone: 'First plasma 2034', investment: '$20B+', detail: '35-nation collaboration building the world\'s largest tokamak. Designed to produce 500 MW for 400 seconds — 10x energy input. The most expensive science experiment in history.' },
    { name: 'SPARC', type: 'Compact Tokamak', location: 'Devens, MA, USA', milestone: 'Net energy by 2027', investment: '$2B+', detail: 'Commonwealth Fusion Systems uses HTS magnets to build a compact tokamak. Backed by $2B+ in funding. Aims to demonstrate net energy gain before ITER.' },
    { name: 'Helion', type: 'Pulsed FRC', location: 'Everett, WA, USA', milestone: '50 MW to Microsoft by 2028', investment: '$1B+', detail: 'Field-reversed configuration with direct energy conversion — no steam turbine needed. First fusion power purchase agreement with Microsoft.' },
    { name: 'NIF', type: 'Laser Inertial', location: 'Livermore, CA, USA', milestone: 'Ignition achieved 2022', investment: '$3.5B', detail: 'National Ignition Facility achieved the first fusion ignition in December 2022 — producing more energy than the lasers delivered. Repeated 2x in 2023-2024.' },
  ],

  fuelCycles: [
    { icon: '🔥', reaction: 'D + T → He + n', temperature: '150M°C', gain: 'Q = 10', advantage: 'Lowest temperature, highest cross-section — easiest to achieve', challenge: 'Tritium is rare and radioactive; requires breeding from lithium' },
    { icon: '⚡', reaction: 'D + D → T + p / He + n', temperature: '400M°C', gain: 'Q = 2', advantage: 'Abundant fuel — deuterium from seawater, no tritium needed', challenge: 'Higher temperature required, lower cross-section, produces tritium' },
    { icon: '💎', reaction: 'p + B11 → 3×He', temperature: '1B°C', gain: 'Q = 5', advantage: 'Aneutronic — no radioactive waste, direct energy conversion possible', challenge: 'Extreme temperatures needed, very low cross-section at achievable densities' },
  ],

  investmentLandscape: {
    title: 'The $9.2 Billion Fusion Boom',
    description: 'Private investment in fusion has exploded from less than $1B in 2018 to over $9.2B in 2025. The US leads with 25+ companies, followed by the UK, Germany, and China. Government funding adds another $7B+ through DOE programs alone.',
    stats: [
      { value: '$9.2B', label: 'Total private investment' },
      { value: '52', label: 'Private companies' },
      { value: '25+', label: 'US-based companies' },
      { value: '$2.64B', label: 'Raised in 12 months' },
    ],
    regions: [
      { region: 'United States', share: '60%', detail: '25+ companies including CFS, Helion, TAE. DOE Bold Decadal Vision provides $7B+ in public funding.' },
      { region: 'United Kingdom', share: '15%', detail: 'Tokamak Energy, First Light Fusion. UKAEA STEP program targets a fusion plant by 2040.' },
      { region: 'Germany', share: '8%', detail: 'Wendelstein 7-X stellarator, Marvel Fusion. Strong academic base in plasma physics.' },
      { region: 'China & Asia', share: '12%', detail: 'EAST, HL-2M tokamaks. China aims to build a fusion engineering test reactor by 2035.' },
    ],
  },

  challenges: [
    { title: 'Sustained Net Electricity', description: 'No fusion device has yet produced net electricity — more energy out than the total facility consumes. Scientific breakeven ≠ engineering breakeven.' },
    { title: 'Materials Survival', description: 'Reactor walls face extreme neutron bombardment (14 MeV). Tungsten and beryllium degrade over time, requiring remote maintenance and replacement.' },
    { title: 'Tritium Breeding', description: 'Tritium does not occur naturally. Reactors must breed it from lithium-6 in blankets surrounding the plasma — an unproven technology at scale.' },
    { title: 'Plasma Stability', description: 'Containing 150 million°C plasma is like holding jelly with rubber bands. Turbulence, instabilities, and disruptions can damage the reactor.' },
    { title: 'Cost Competitiveness', description: 'Fusion must compete with solar ($0.03/kWh) and wind. Current cost projections suggest $50-100/MWh — viable but not transformative without scale.' },
    { title: 'Regulatory Framework', description: 'No country has a fusion-specific regulatory regime. The US and UK are developing frameworks, but licensing the first plant will be unprecedented.' },
  ],

  futurePredictions: [
    { year: '2027', prediction: 'Commonwealth Fusion achieves net energy gain', detail: 'SPARC uses high-temperature superconducting magnets to demonstrate Q > 1 in a compact tokamak.' },
    { year: '2028', prediction: 'Helion delivers 50 MW to Microsoft', detail: 'The first commercial fusion power purchase agreement. If successful, it rewrites the fusion timeline.' },
    { year: '2034', prediction: 'ITER achieves first plasma', detail: 'The world\'s largest tokamak begins operations. Full D-T campaigns planned for 2039.' },
    { year: '2035-2040', prediction: 'First commercial fusion plant', detail: 'Most experts believe the first grid-connected fusion plant will begin operation in this window.' },
    { year: '2040+', prediction: 'Fusion power scales globally', detail: 'If the first plants succeed, fusion could provide 10-20% of global electricity by 2060 — clean, dispatchable, and fuel-abundant.' },
  ],

  trendingSearches: [
    { term: 'nuclear fusion', volume: '74,000/mo', growth: '+18%', type: 'General' },
    { term: 'fusion energy', volume: '22,000/mo', growth: '+25%', type: 'General' },
    { term: 'iter', volume: '8,100/mo', growth: 'Stable', type: 'Project' },
    { term: 'fusion breakthrough', volume: '5,400/mo', growth: '+40%', type: 'News' },
    { term: 'fusion power', volume: '4,400/mo', growth: 'Rising', type: 'Technical' },
    { term: 'stellarator', volume: '4,400/mo', growth: 'Stable', type: 'Technical' },
    { term: 'fusion fuel cycle', volume: '3,600/mo', growth: 'Rising', type: 'Technical' },
    { term: 'commonwealth fusion systems', volume: '2,900/mo', growth: '+85%', type: 'Company' },
    { term: 'helion energy', volume: '2,400/mo', growth: '+120%', type: 'Company' },
    { term: 'fusion startups', volume: '1,900/mo', growth: '+65%', type: 'Industry' },
    { term: 'net energy gain fusion', volume: '1,300/mo', growth: '+210%', type: 'Breakout' },
    { term: 'fusion power plant', volume: '1,000/mo', growth: '+45%', type: 'Future' },
  ],

  faqs: [
    { q: 'What is nuclear fusion and how does it differ from fission?', a: 'Fusion combines light atoms (hydrogen isotopes) to release energy — the same process that powers the Sun. Fission splits heavy atoms (uranium). Fusion produces no long-lived radioactive waste, no chain reaction, and no meltdown risk. However, fusion requires temperatures of 150 million°C and is far harder to achieve than fission.' },
    { q: 'Has fusion achieved net energy gain?', a: 'In December 2022, the National Ignition Facility (NIF) at Lawrence Livermore National Laboratory achieved the first fusion ignition — producing more energy from fusion than the lasers delivered to the fuel. This was repeated 2x in 2023-2024. However, this is scientific breakeven, not engineering breakeven — the total facility energy input was far greater than the fusion output.' },
    { q: 'When will fusion energy be commercially available?', a: 'Most private fusion companies target commercial fusion in the 2030s. Helion aims to deliver 50 MW to Microsoft by 2028. Commonwealth Fusion targets net energy gain by 2027. ITER achieves first plasma in 2034. Most experts believe the first commercial plant will begin operation between 2035-2040, though some companies promise earlier.' },
    { q: 'How much investment has gone into fusion?', a: 'Over $9.2 billion in private investment has flowed into fusion companies as of 2025, with $2.64 billion raised in the 12 months to July 2025 alone. The US government has invested $7B+ through the DOE Bold Decadal Vision. There are 52 private fusion companies worldwide, up from fewer than 20 in 2018.' },
    { q: 'What are the main approaches to fusion?', a: 'The two main approaches are magnetic confinement (tokamaks, stellarators) which uses magnetic fields to contain hot plasma, and inertial confinement (lasers) which compresses fuel pellets to extreme densities. Within magnetic confinement, variants include tokamaks (ITER, SPARC), stellarators (Wendelstein 7-X), and field-reversed configurations (Helion, TAE).' },
    { q: 'What is the biggest challenge facing fusion energy?', a: 'The biggest challenge is achieving sustained net electricity — producing more electricity than the total facility consumes. Other major challenges include developing materials that survive extreme neutron bombardment, breeding tritium fuel inside the reactor, and reducing costs to compete with solar and wind. No fusion device has yet produced net electricity.' },
    { q: 'Is fusion energy safe?', a: 'Fusion is inherently safer than fission — there is no chain reaction, no risk of meltdown, and no long-lived radioactive waste. The fuel (deuterium from water) is abundant. Tritium is radioactive but short-lived (12.3 year half-life). The main safety consideration is neutron activation of reactor components, which requires remote maintenance and decommissioning.' },
    { q: 'What is ITER and when will it be ready?', a: 'ITER is a 35-nation collaboration building the world\'s largest tokamak in France. It is designed to produce 500 MW of fusion power for 400 seconds — 10x the energy input. ITER is targeting first plasma in 2034 and full deuterium-tritium operation in 2039. The project has cost over $20 billion and is the most expensive science experiment in history.' },
    { q: 'What is the Helion-Microsoft fusion deal?', a: 'Helion Energy signed the world\'s first fusion power purchase agreement with Microsoft, committing to deliver 50 MW of electricity by 2028. This is the first commercial contract for fusion energy in history. If Helion delivers, it would represent a paradigm shift in energy — proving that private fusion companies can meet commercial deadlines, not just scientific milestones.' },
    { q: 'How does the NIF laser fusion breakthrough work?', a: 'The National Ignition Facility uses 192 laser beams to deliver 2.05 megajoules of energy to a tiny hydrogen fuel pellet, compressing it to 100 billion atmospheres and 150 million°C. In December 2022, the fusion reaction produced 3.15 megajoules — a 1.5× energy gain. This was the first time in history that fusion produced more energy than the lasers delivered to the fuel.' },
  ],
};

/**
 * AV topic CONTENT
 * ────────────────────
 * All content for the Autonomous Vehicles topic page.
 * Edit this file to update text, topics, stats, sections.
 * Does NOT affect other topic pages.
 */

export const avContent = {
  name: 'Autonomous Vehicles',
  slug: 'av',
  tagline: 'Robotaxis, Tesla FSD, end-to-end AI & the future of transportation',
  description:
    'From Waymo robotaxi expansion and Tesla FSD to autonomous trucking and end-to-end neural networks — explore the technology reshaping how we move.',
  icon: '🚗',
  gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)',
  accentColor: '#8b5cf6',
  accentColor2: '#a78bfa',

  // ── Hero Stats ──────────────────────────────
  stats: [
    { value: '5M+', label: 'Waymo rider-only trips Q4 2025' },
    { value: '$400B', label: 'AV market by 2035' },
    { value: '25M+', label: 'Tesla FSD miles (est.)' },
    { value: 'L4', label: 'Level 4 autonomy deployed' },
  ],

  // ── Section 1: Market Overview ──────────────
  marketOverview: {
    title: 'Autonomous Vehicle Market Overview & Growth Forecast',
    subtitle: 'The robotaxi market is projected to grow from $1.2B to $45B by 2035. Waymo leads commercial deployment with 200K+ paid rides per week. Tesla pursues a fundamentally different camera-only approach.',
    marketSize: [
      { segment: 'Robotaxi Services', year2025: '$1.2B', year2030: '$18B', year2035: '$45B', cagr: '44%' },
      { segment: 'Autonomous Trucking', year2025: '$0.5B', year2030: '$8B', year2035: '$22B', cagr: '46%' },
      { segment: 'ADAS / L2 Systems', year2025: '$25B', year2030: '$55B', year2035: '$90B', cagr: '12%' },
      { segment: 'Total AV Market', year2025: '$30B', year2030: '$95B', year2035: '$400B', cagr: '22%' },
    ],
    keyDrivers: [
      { title: 'Waymo Commercial Expansion', desc: '200K+ paid robotaxi rides per week across 5+ US cities. Expanding to Austin, Atlanta, Miami, and Tokyo. Fully driverless operations scaling rapidly.' },
      { title: 'Tesla FSD & Robotaxi', desc: 'End-to-end neural network approach. 25M+ FSD miles accumulated. Tesla Cybercab unveiled — dedicated robotaxi vehicle targeting $30K price point.' },
      { title: 'Autonomous Trucking Maturity', desc: 'Aurora, Kodiak, and Kodiak launching driverless freight corridors. Hub-to-hub autonomous trucking reducing cost per mile by 40%.' },
      { title: 'China AV Acceleration', desc: 'Wuhan became world\'s largest robotaxi test bed with 4.78M L4 trips in 2024. Baidu Apollo Go, Pony.ai, and WeRide expanding across 20+ Chinese cities.' },
    ],
  },

  // ── Section 2: Key Players ──────────────────
  keyPlayers: {
    title: 'AV Key Players: Who\'s Winning the Race',
    subtitle: 'Two competing philosophies: Waymo\'s sensor fusion with LiDAR vs Tesla\'s camera-only end-to-end AI. Plus autonomous trucking, Chinese robotaxis, and legacy automakers.',
    players: [
      { name: 'Waymo (Alphabet)', approach: 'Sensor Fusion (LiDAR + Camera + Radar)', vehicles: 'Jaguar I-PACE, Zeekr', cities: 'Phoenix, SF, LA, Austin, Atlanta, Miami', rides: '200K+/week', desc: 'Commercial leader in robotaxi services. Fully driverless operations. Expanding to Tokyo in partnership with Uber. Profitable on a per-ride basis in Phoenix.' },
      { name: 'Tesla', approach: 'Camera-Only End-to-End Neural Net', vehicles: 'Model 3/Y/S/X, Cybercab', cities: 'Worldwide (FSD beta)', rides: 'N/A (consumer)', desc: '25M+ FSD miles accumulated. End-to-end neural network replacing heuristic code. Cybercab robotaxi unveiled. Targeting unsupervised FSD in 2026.' },
      { name: 'Baidu Apollo Go', approach: 'Sensor Fusion (LiDAR + Camera)', vehicles: 'RT6 (custom)', cities: 'Wuhan, Beijing, Shanghai, 10+ cities', rides: '1M+ (Q4 2025)', desc: 'China\'s robotaxi leader. Wuhan operation world\'s largest L4 test bed. RT6 vehicle costs ~$29K — making unit economics viable for large-scale deployment.' },
      { name: 'Aurora Innovation', approach: 'Sensor Fusion (LiDAR First)', vehicles: 'Class 8 Trucks', cities: 'Dallas–Houston corridor', rides: 'Driverless freight', desc: 'Launched commercial driverless trucking on I-45. Partnered with FedEx, Uber Freight. Targeting Texas-wide expansion. Horizon Aurora sensor suite.' },
      { name: 'Pony.ai', approach: 'Sensor Fusion (LiDAR + Camera)', vehicles: 'Hyundai IONIQ 5, custom', cities: 'Beijing, Guangzhou, SF (testing)', rides: '500K+ total', desc: 'Dual US-China presence. Robotaxi service operating in China. Received California permit for driverless testing. IPO on NASDAQ.' },
      { name: 'Mobileye (Intel)', approach: 'Camera-First + LiDAR Upgrade Path', vehicles: 'Multiple OEM partners', cities: 'Worldwide (ADAS)', rides: 'N/A (ADAS)', desc: 'Leading ADAS supplier — EyeQ chips in 170M+ vehicles. SuperVision system enabling hands-off highway driving. Chauffeur L4 system in development with OEM partners.' },
    ],
  },

  // ── Section 3: LiDAR vs Camera Debate ───────
  perceptionDebate: {
    title: 'LiDAR vs Cameras: The AV Perception Debate',
    subtitle: 'Tesla says cameras are enough. Waymo, Baidu, and most AV companies use LiDAR. The debate shapes billions in investment and determines who reaches full autonomy first.',
    approaches: [
      { name: 'Sensor Fusion (LiDAR + Camera + Radar)', companies: 'Waymo, Baidu, Aurora, Pony.ai, Cruise', cost: '$50K–$200K per vehicle', pros: 'Direct 3D measurement. Works in low light. Redundancy across sensors. Higher safety margin.', cons: 'Expensive. Bulkier. LiDAR performance degrades in rain/fog. More complex fusion algorithms.', verdict: 'Proven in commercial deployment. Waymo\'s safety record supports this approach.' },
      { name: 'Camera-Only (Pure Vision)', companies: 'Tesla', cost: '$300–$500 per vehicle', pros: 'Massively cheaper. Scales to consumer vehicles. Rich semantic information from cameras. AI improving rapidly.', cons: 'No direct depth measurement. Struggles in poor visibility. Relies entirely on AI inference quality. Longer tail of edge cases.', verdict: 'Unproven at L4. Tesla\'s 25M+ miles of data provide training advantage, but unsupervised autonomy not yet demonstrated.' },
      { name: 'Camera-First + LiDAR Upgrade', companies: 'Mobileye, Mercedes (Drive Pilot)', cost: '$5K–$20K per vehicle', pros: 'Pragmatic middle ground. ADAS revenue funds L4 development. Upgrade path as LiDAR costs decline.', cons: 'Slower path to full autonomy. Complex product portfolio management.', verdict: 'Mercedes Drive Pilot is first L3 system approved in US and Germany. Mobileye scaling SuperVision globally.' },
    ],
  },

  // ── Section 4: Robotaxi Networks ────────────
  robotaxi: {
    title: 'Robotaxi Networks: The Commercial Race',
    subtitle: 'Waymo leads with 200K+ paid rides per week. China\'s Baidu and Pony.ai are scaling rapidly. Tesla plans to enter with Cybercab. The economics are improving fast.',
    networks: [
      { name: 'Waymo One', cities: 'Phoenix, SF, LA, Austin, Atlanta, Miami', rides: '200K+/week', status: 'Commercial', desc: 'Fully driverless. Expanding to 10+ cities. Partnership with Uber for first/last mile. Profitable per-ride in Phoenix.' },
      { name: 'Apollo Go', cities: 'Wuhan, Beijing, Shanghai, 10+ Chinese cities', rides: '1M+/quarter', status: 'Commercial', desc: 'World\'s largest robotaxi operation by volume. RT6 vehicle at $29K enables profitable unit economics. Expanding to 100 cities.' },
      { name: 'PonyPilot', cities: 'Beijing, Guangzhou, Shenzhen', rides: '500K+ total', status: 'Commercial', desc: 'Operating in China with driverless permits. Dual US-China strategy. Hyundai partnership for next-gen vehicles.' },
      { name: 'Tesla Network', cities: 'Austin (pilot)', rides: 'Not yet launched', status: 'Pilot', desc: 'Cybercab unveiled. Planning initial Austin rollout. Consumer-owned robotaxi network model — owners rent out their Teslas.' },
      { name: 'WeRide', cities: 'Guangzhou, Abu Dhabi, Singapore', rides: 'Testing phase', status: 'Pilot', desc: 'International expansion strategy. Robobus and robosweeper in addition to robotaxi. NASDAQ IPO completed.' },
      { name: 'Zoox (Amazon)', cities: 'SF, Las Vegas (testing)', rides: 'Testing phase', status: 'Testing', desc: 'Purpose-built bidirectional robotaxi. No steering wheel. Amazon subsidiary. Targeting commercial launch 2026–2027.' },
    ],
  },

  // ── Section 5: Autonomous Trucking ──────────
  trucking: {
    title: 'Autonomous Trucking: The Freight Revolution',
    subtitle: 'Hub-to-hub autonomous trucking is the first commercially viable AV application — reducing cost per mile by 40% and addressing the 80K+ driver shortage.',
    companies: [
      { name: 'Aurora Innovation', route: 'Dallas–Houston (I-45)', status: 'Commercial Driverless', desc: 'First commercial driverless trucking corridor. Horizon Aurora sensor suite. Partners: FedEx, Uber Freight, Schneider. Expanding to I-35 and I-10.' },
      { name: 'Kodiak Robotics', route: 'Texas corridors', status: 'Driverless Testing', desc: 'Fifth-wheel-mounted sensor pod for quick swap. Partnering with trucking companies. Focused on hub-to-hub model.' },
      { name: 'Embark Technology', route: 'Sun Belt corridors', status: 'Acquired by Applied Intuition', desc: 'Pioneered L4 trucking. Acquired 2023. Technology continues development under Applied Intuition platform.' },
      { name: 'Torc Robotics (Daimler)', route: 'New Mexico, Texas, Virginia', status: 'Driverless Testing', desc: 'Daimler Truck subsidiary. Cascadia truck platform. Testing hub-to-hub on freight corridors. Safety driver being removed in 2026.' },
    ],
    economics: [
      'Cost per mile reduction: 40% (from ~$3.50 to ~$2.10 including fuel, maintenance, driver)',
      'Driver shortage: 80,000+ unfilled positions in US trucking industry',
      'Hub-to-hub model: Autonomous on highways, human drivers handle last-mile urban delivery',
      'Safety: 24/7 operation, no fatigue, faster reaction times, consistent performance',
      'Fuel efficiency: 10–15% improvement from predictive speed and eco-driving algorithms',
    ],
  },

  // ── Section 6: Tesla FSD Deep Dive ──────────
  teslaFsd: {
    title: 'Tesla FSD: End-to-End AI & the Path to Unsupervised Driving',
    subtitle: 'Tesla replaced 300K+ lines of C++ heuristic code with end-to-end neural networks. 25M+ FSD miles provide the largest real-world training dataset. But unsupervised autonomy remains unproven.',
    architecture: [
      { title: 'End-to-End Neural Network', desc: 'Replaced heuristic C++ code with a single neural network consuming camera inputs and outputting steering/acceleration commands. Trained on millions of miles of human driving data.' },
      { title: 'FSD v12+ Architecture', desc: 'Photon-in, steering-out pipeline. No explicit rules for stop signs, traffic lights, or lane keeping — all learned from data. Massive improvement in naturalness of driving behavior.' },
      { title: 'Data Engine Flywheel', desc: '25M+ FSD miles generate edge cases for training. Shadow mode collects interventions. Fleet of 7M+ Tesla vehicles provides unmatched data collection scale.' },
      { title: 'Cybercab & Robotaxi Vision', desc: 'Dedicated robotaxi vehicle unveiled — no steering wheel, no pedals. $30K target price. Owners can add their Tesla to robotaxi network. Revenue sharing model.' },
    ],
    challenges: [
      'Unsupervised FSD not yet achieved — current system requires constant driver supervision (L2)',
      'Camera-only approach struggles in poor weather (rain, snow, fog) and direct sunlight glare',
      'Regulatory approval for L4/L5 camera-only system uncertain — NHTSA investigations ongoing',
      'Long tail of edge cases — unusual situations not well represented in training data',
      'Competing with Waymo\'s proven L4 safety record using sensor fusion',
    ],
  },

  // ── Section 7: Regulation & Safety ──────────
  regulation: {
    title: 'AV Regulation, Safety & Standards',
    subtitle: 'NHTSA, EU, and China are developing frameworks for autonomous vehicle deployment. Mercedes achieved first L3 approval. Waymo\'s safety data sets the benchmark.',
    frameworks: [
      { region: 'United States', framework: 'NHTSA + State-by-State', status: 'L3 approved (Mercedes Drive Pilot in NV, CA)', desc: 'Federal AV framework pending. NHTSA Standing General Order requires crash reporting for AVs. States individually permit robotaxi operations. FMVSS standards being updated for vehicles without controls.' },
      { region: 'European Union', framework: 'EU Automated Driving Regulation', status: 'L3 approved (Mercedes, BMW)', desc: 'ALKS (Automated Lane Keeping Systems) regulation first L3 framework. Type approval process for AV systems. UNECE updates ongoing. Liability shifts to manufacturer during automated mode.' },
      { region: 'China', framework: 'MIIT + Municipal Permits', status: 'L4 commercial (Baidu, Pony.ai)', desc: 'Central government sets technical standards. Municipal governments issue operational permits. Wuhan leads with most permissive regulations. National AV safety standard in development.' },
      { region: 'Japan', framework: 'Road Traffic Act Amendment', status: 'L4 permitted (conditional)', desc: 'Amended to allow Level 4 autonomous driving in specified areas. Waymo partnering with Uber for Tokyo launch. First country to permit L4 mobility services at national level.' },
    ],
    safetyData: [
      { metric: 'Waymo crash rate', value: '85% lower', context: 'vs. human-driven benchmark (6.4M miles)' },
      { metric: 'Waymo injury-causing crash rate', value: '100% lower', context: 'zero injury-causing crashes in driverless mode' },
      { metric: 'NHTSA AV crash reports', value: '2,500+', context: 'total reported incidents (most minor, L2 systems)' },
      { metric: 'Tesla FSD interventions', value: 'Declining', context: 'intervention rate improving with each version' },
    ],
  },

  // ── Section 8: AV Technology Stack ──────────
  techStack: {
    title: 'AV Technology Stack: Perception, Planning & Control',
    subtitle: 'The autonomous vehicle stack: sensor fusion, object detection, prediction, planning, and control — increasingly powered by end-to-end AI.',
    layers: [
      { layer: 'Perception', technologies: 'LiDAR, cameras, radar, ultrasonic', desc: 'Sensor fusion combines data from multiple sensors. Object detection, lane tracking, traffic light recognition. AI models: BEV (Bird\'s Eye View) encoders, occupancy networks.' },
      { layer: 'Prediction', technologies: 'Trajectory forecasting, intent inference', desc: 'Predicting behavior of other vehicles, pedestrians, cyclists. Multi-agent prediction models. Probabilistic trajectory forecasting with uncertainty quantification.' },
      { layer: 'Planning', technologies: 'Route planning, behavior planning, motion planning', desc: 'High-level route, mid-level behavior (lane change, overtake), low-level trajectory. Rule-based + learning-based hybrid approaches. Increasingly end-to-end.' },
      { layer: 'Control', technologies: 'Steering, acceleration, braking', desc: 'Vehicle dynamics control. Smooth actuation. Safety-critical real-time execution at 100+ Hz. ISO 26262 functional safety compliance.' },
      { layer: 'HD Mapping', technologies: 'Pre-mapped environments, real-time localization', desc: 'Centimeter-accurate maps. Waymo and Baidu rely heavily on pre-mapped areas. Tesla FSD operates without HD maps — pure real-time perception.' },
      { layer: 'V2X Communication', technologies: 'V2V, V2I, V2N', desc: 'Vehicle-to-everything communication. 5G and C-V2X enabling cooperative driving. Traffic signal phase timing, hazard alerts, cooperative merging.' },
    ],
  },

  // ── Section 9: China AV Ecosystem ───────────
  china: {
    title: 'China\'s AV Ecosystem: The World\'s Largest Test Bed',
    subtitle: 'Wuhan hosted 4.78M L4 trips in 2024. Baidu, Pony.ai, WeRide, and AutoX are scaling across 20+ cities with government backing and permissive regulations.',
    players: [
      { name: 'Baidu Apollo Go', cities: 'Wuhan, Beijing, Shanghai, 10+', vehicles: 'RT6 ($29K)', desc: 'China\'s robotaxi leader. 4.78M L4 trips in Wuhan alone (2024). RT6 designed for mass production at consumer vehicle cost. Expanding to 100 cities.' },
      { name: 'Pony.ai', cities: 'Beijing, Guangzhou, Shenzhen', vehicles: 'Hyundai IONIQ 5, custom', desc: 'Dual US-China presence. NASDAQ IPO. Robotaxi service with driverless permits in four Chinese cities.' },
      { name: 'WeRide', cities: 'Guangzhou, Abu Dhabi, Singapore', vehicles: 'Multiple platforms', desc: 'International expansion. Robobus and robosweeper diversification. NASDAQ IPO. Operating in Middle East.' },
      { name: 'AutoX', cities: 'Shenzhen, Shanghai', vehicles: 'Chrysler Pacifica, custom', desc: 'Fully driverless operations in Shenzhen. Focus on dense urban environment autonomy. No safety driver in designated areas.' },
    ],
    advantages: [
      'Government support: BCI listed alongside AV in five-year plan. Subsidies and permissive regulations',
      'Scale: Wuhan world\'s largest robotaxi test bed — 4.78M L4 trips in 2024',
      'Cost advantage: Baidu RT6 at $29K enables profitable unit economics',
      'Infrastructure: Smart road infrastructure, 5G coverage, V2X deployment at scale',
      'Data: Massive real-world driving data from dense urban environments',
    ],
  },

  // ── Section 10: Investment & M&A ────────────
  investment: {
    title: 'AV Investment & M&A Landscape',
    subtitle: 'AV sector raised $4.2B in 2025. Aurora went public via SPAC. Pony.ai and WeRide completed IPOs. Cruise wound down operations — a cautionary tale.',
    funding: [
      { company: 'Aurora Innovation', amount: 'Public (NASDAQ)', stage: 'IPO', focus: 'Autonomous trucking' },
      { company: 'Pony.ai', amount: 'Public (NASDAQ)', stage: 'IPO', focus: 'Robotaxi US + China' },
      { company: 'WeRide', amount: 'Public (NASDAQ)', stage: 'IPO', focus: 'Robotaxi, robobus' },
      { company: 'Waymo (Alphabet)', amount: 'Subsidiary', stage: 'Commercial', focus: 'Robotaxi leader' },
      { company: 'Nuro', amount: '$600M+', stage: 'Series C', focus: 'Autonomous delivery' },
      { company: 'Kodiak Robotics', amount: '$170M+', stage: 'Series B', focus: 'Autonomous trucking' },
    ],
    trends: [
      'Cruise wind-down: GM shut down Cruise robotaxi division in 2024 — $10B+ loss. Cautionary tale for AV industry',
      'Trucking first: Hub-to-hub autonomous trucking reaching commercial viability before urban robotaxi',
      'SPAC aftermath: Multiple AV companies went public via SPAC — stock performance mixed',
      'China IPOs: Pony.ai, WeRide completed US IPOs despite geopolitical tensions',
      'OEM partnerships: AV companies partnering with automakers rather than building own vehicles (except Tesla, Zoox)',
      'Consolidation: Smaller AV startups being acquired or shutting down — market consolidating around leaders',
    ],
  },

  // ── Section 11: Future Outlook ──────────────
  futureOutlook: {
    title: 'AV 2026–2030: What to Expect',
    subtitle: 'The next four years will determine whether robotaxis achieve profitability at scale, whether Tesla achieves unsupervised FSD, and whether autonomous trucking transforms freight.',
    predictions: [
      { year: '2026', prediction: 'Waymo expands to 10+ US cities and Tokyo', detail: 'Tesla launches Austin robotaxi pilot. Aurora expands driverless trucking beyond Texas. Zoox commercial launch in San Francisco.' },
      { year: '2027', prediction: 'Tesla targets unsupervised FSD approval', detail: 'Baidu reaches 50+ Chinese cities. First profitable robotaxi operations at city level. NHTSA federal AV framework finalized.' },
      { year: '2028', prediction: 'Robotaxi market crosses $5B', detail: 'Autonomous trucking on 5+ interstate corridors. L3 systems standard on luxury vehicles. V2X infrastructure deployed in major cities.' },
      { year: '2029', prediction: 'Tesla Cybercab volume production', detail: 'Waymo profitability across multiple cities. 10M+ autonomous miles per day globally. Insurance models for AVs established.' },
      { year: '2030', prediction: 'Robotaxi market reaches $18B', detail: '500K+ autonomous vehicles deployed. AV market crosses $95B. Consumer-owned robotaxi networks active. L4 highway driving standard on new vehicles.' },
    ],
  },

  // ── Section 12: FAQ ─────────────────────────
  faq: {
    title: 'Autonomous Vehicle Frequently Asked Questions',
    subtitle: 'Structured answers to the most searched AV questions — optimized for AI search engines and rich snippets.',
    items: [
      { q: 'What is the difference between autonomous driving levels?', a: 'The SAE defines 6 levels of driving automation: L0 (no automation), L1 (driver assistance — cruise control), L2 (partial automation — Tesla FSD, GM Super Cruise — driver must monitor), L3 (conditional automation — Mercedes Drive Pilot — driver can disengage in specific conditions), L4 (high automation — Waymo robotaxi — no driver needed in defined areas), and L5 (full automation — anywhere, any conditions — not yet achieved). Most consumer systems are L2. Waymo operates L4 in mapped cities.' },
      { q: 'How does Tesla FSD work?', a: 'Tesla Full Self-Driving uses a camera-only approach with 8 cameras providing 360-degree vision. Since FSD v12, the system uses an end-to-end neural network that takes camera inputs and directly outputs steering and acceleration commands — replacing 300K+ lines of heuristic C++ code. The model is trained on 25M+ miles of real-world FSD driving data. Currently L2: the driver must supervise at all times. Tesla targets unsupervised FSD (L4) in 2026–2027.' },
      { q: 'How safe are autonomous vehicles?', a: 'Waymo published safety data showing 85% lower crash rate and zero injury-causing crashes in 6.4 million driverless miles compared to human-driven benchmarks. However, NHTSA has received 2,500+ AV crash reports (mostly minor, from L2 systems like Tesla). The safety benchmark is improving as systems accumulate more miles. Waymo\'s driverless safety record is the strongest evidence for AV safety, while Tesla\'s L2 system has been involved in higher-profile incidents.' },
      { q: 'When will robotaxis be available everywhere?', a: 'Waymo currently operates robotaxi services in Phoenix, San Francisco, Los Angeles, Austin, and is expanding to Atlanta, Miami, and Tokyo in 2026. Baidu operates in 10+ Chinese cities with plans for 100. Full nationwide robotaxi availability in the US is likely 5–10 years away, depending on regulatory approval, mapping expansion, and unit economics. Rural areas may take longer due to lower demand density.' },
      { q: 'How much does an autonomous vehicle cost?', a: 'Waymo\'s Jaguar I-PACE robotaxis cost approximately $200K–$300K including sensor suite (LiDAR, cameras, radar, compute). Baidu\'s RT6 costs approximately $29K — making it the first robotaxi with consumer-vehicle-level unit economics. Tesla\'s Cybercab targets $30K. The sensor suite is the primary cost differentiator: LiDAR-based systems cost $50K–$200K, while camera-only systems cost $300–$500. LiDAR costs are declining rapidly.' },
      { q: 'Will autonomous trucks replace drivers?', a: 'Autonomous trucking is initially targeting hub-to-hub highway routes, where drivers handle first/last-mile urban delivery. This model reduces cost per mile by 40% (from ~$3.50 to ~$2.10) and addresses the 80,000+ driver shortage. Full replacement of drivers is unlikely in the near term — the model augments rather than replaces human drivers. Aurora and Kodiak are leading commercial driverless trucking on Texas corridors.' },
      { q: 'What is Waymo and how many cities does it operate in?', a: 'Waymo is Alphabet\'s autonomous driving subsidiary and the leading L4 robotaxi operator. As of 2026, Waymo operates driverless ride-hailing in Phoenix, San Francisco, Los Angeles, and Austin, with expansions to Atlanta, Miami, and Tokyo underway. Waymo has completed 6.4M+ driverless miles with zero injury-causing crashes — the strongest safety record in the AV industry. The service uses Jaguar I-PACE vehicles equipped with LiDAR, cameras, and radar sensor suites.' },
      { q: 'What is the Tesla Cybercab?', a: 'The Tesla Cybercab is Tesla\'s purpose-built robotaxi vehicle, unveiled in October 2024. It has no steering wheel or pedals, designed for fully autonomous operation. Tesla targets volume production by 2029 at a cost of ~$30K per vehicle. The Cybercab uses Tesla\'s camera-only FSD architecture. Unlike Waymo\'s approach, Tesla plans to enable consumer-owned vehicles to operate as robotaxis through a ride-hailing app, creating a decentralized fleet.' },
    ],
  },

  // ── SEO Keywords ────────────────────────────
  seoKeywords: {
    primary: ['autonomous vehicles', 'self-driving cars', 'robotaxi', 'Tesla FSD', 'Waymo', 'autonomous driving'],
    secondary: ['LiDAR vs cameras', 'autonomous trucking', 'Level 4 autonomy', 'ADAS', 'robotaxi companies', 'AV perception'],
    longTail: [
      'how does Tesla full self driving work',
      'Waymo robotaxi cities expansion 2026',
      'autonomous vehicle levels explained',
      'LiDAR vs camera autonomous driving debate',
      'autonomous trucking companies commercial deployment',
      'robotaxi market size and forecast 2030',
      'autonomous vehicle safety statistics comparison',
    ],
  },
};

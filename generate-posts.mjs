import fs from 'fs';

const titlesRaw = fs.readFileSync('slug-titles.txt', 'utf-8').trim().split('\n');
const posts = titlesRaw.map(line => {
  const [slug, ...titleParts] = line.split('|||');
  let title = titleParts.join('|||').replace(/\\/g, '');
  if (title.endsWith("'s Guide")) title = title.replace("'s Guide", "'s Guide");
  // Fix truncated titles
  if (title.endsWith("\\")) title = title.slice(0, -1);
  if (title.endsWith("'")) title = title;
  return { slug: slug.trim(), title: title.trim() };
});

// Category detection from slug
function detectCategory(slug) {
  const s = slug.toLowerCase();
  if (s.match(/ai|llm|rag|agent|prompt|fine-tun|vector|langchain|langgraph|generative-engine|answer-engine|geo|aeo|seo|search|coding-assist/)) return 'AI';
  if (s.match(/robot|cobot|humanoid|optimus|figure|dark-factory|raas|autonomous-mobile|amr/)) return 'Robotics';
  if (s.match(/fusion|tokamak|stellarator|plasma|iter|sparc|nif|net-energy|helion/)) return 'Fusion';
  if (s.match(/crispr|gene|biotech|mrna|cell-therapy|car-t|synthetic-bio|biomanufactur|omics|drug|pharmaceutical|adc|glp-1|obesity|radiopharm|sequencing|lab-grown/)) return 'Biotech';
  if (s.match(/bci|brain-computer|neuralink|synchron|eeg|neuro|brain2qwerty|braingate|stentrode/)) return 'BCI';
  if (s.match(/autonomous-vehicle|robotaxi|waymo|tesla-fsd|zoox|lidar|self-driving|av-|cruise|trucking|v2x|l2-|l3-|l4-|level-4|vision-language-action/)) return 'AV';
  if (s.match(/space|starship|spacex|rocket|satellite|starlink|orbit|artemis|iss|debris|moon|leo|propulsion|nasa|new-glenn|blue-origin/)) return 'Space';
  if (s.match(/material|graphene|nanotech|3d-print|additive|entropy-alloy|flexible-electronic|metamaterial|2d-material|mxene|borophene|perovskite|self-healing|silicon-carbon|ceramic|lightweight|biodegradable|lk-99|superconduct/)) return 'Materials';
  if (s.match(/quantum|qubit|qiskit|cirq|pennylane|shor|grovers|post-quantum|pqc|fault-tolerant|quantum-internet|quantum-advantage/)) return 'Quantum';
  if (s.match(/nuclear|reactor|smr|fission|uranium|haleu|terrapower|nuscale|oklo|microreactor|gen-iv|molten-salt|htgr|chernobyl|fukushima|three-mile|nrc|constellation/)) return 'Nuclear';
  if (s.match(/battery|energy-storage|bess|lithium|sodium-ion|solid-state-battery|vanadium-flow|hydrogen|grid-scale|lfp|nmc|flow-battery|iron-air|virtual-power|second-life|feoc|v2g|v2h|solar.*storage/)) return 'Energy Storage';
  if (s.match(/cyber|security|ransomware|zero-trust|cloud-security|devsecops|iam|identity|supply-chain-attack|phishing|deepfake|ot-ics|soc|ciso|nist|cisa|iso-27001|threat|attack|breach|misconfig/)) return 'Cybersecurity';
  return 'AI'; // default
}

// Style rotation - each post gets a different style mix
const styles = ['analytical', 'tutorial', 'comparative', 'narrative', 'data-driven', 'case-study', 'technical-deep-dive', 'news-analysis', 'practical-guide', 'strategic-overview'];

// Generate H2 headings based on category and style
function generateH2s(category, title, styleIndex, slug) {
  const style = styles[styleIndex % styles.length];
  
  const h2Bank = {
    'AI': [
      ['The Current State of the Technology', 'Why This Matters Now', 'Key Technical Components', 'Real-World Applications and Use Cases', 'Challenges and Limitations', 'Future Outlook and Predictions', 'Implementation Best Practices', 'Cost and ROI Analysis'],
      ['Understanding the Fundamentals', 'Architecture and Design Patterns', 'Step-by-Step Implementation', 'Common Pitfalls and How to Avoid Them', 'Performance Optimization Strategies', 'Security and Compliance Considerations', 'Case Studies: Success and Failure', 'The Road Ahead: 2027 and Beyond'],
      ['Market Overview and Landscape', 'Technical Deep Dive', 'Comparative Analysis with Alternatives', 'Industry Adoption Trends', 'Regulatory and Ethical Implications', 'Investment and Funding Landscape', 'Practical Recommendations', 'Long-Term Strategic Implications'],
    ],
    'Robotics': [
      ['The Evolution of Robotic Systems', 'Core Technologies Driving Innovation', 'Hardware Components and Architecture', 'Software Stack and AI Integration', 'Industrial Applications and Deployments', 'Economic Impact and Market Dynamics', 'Safety Standards and Regulations', 'Future Trajectory: 2027-2030'],
      ['Understanding Robotic Fundamentals', 'Sensor Systems and Perception', 'Motion Planning and Control Systems', 'Programming Frameworks and Tools', 'Real-World Deployment Scenarios', 'Cost Analysis and ROI Calculation', 'Maintenance and Lifecycle Management', 'Emerging Trends and Breakthroughs'],
      ['The Current Robotics Landscape', 'Technical Architecture Explained', 'Comparing Approaches and Solutions', 'Industry-Specific Applications', 'Workforce and Economic Implications', 'Safety and Regulatory Framework', 'Investment Trends and Market Projections', 'Strategic Recommendations for Adoption'],
    ],
    'Fusion': [
      ['The Science of Fusion Energy', 'Current Technology Approaches', 'Engineering Challenges and Solutions', 'Leading Projects and Experiments', 'Economic Viability and Cost Projections', 'Regulatory and Safety Considerations', 'Environmental Impact and Sustainability', 'The Path to Commercial Fusion'],
      ['Fusion Physics Fundamentals', 'Reactor Design and Components', 'Plasma Confinement Strategies', 'Materials Science for Fusion', 'Timeline and Milestones', 'Funding and Investment Landscape', 'International Competition and Collaboration', 'What Commercial Fusion Means for Energy'],
    ],
    'Biotech': [
      ['The Biological Foundations', 'Technology and Methodology', 'Current Research and Breakthroughs', 'Clinical Applications and Trials', 'Manufacturing and Scale-Up Challenges', 'Regulatory Pathway and Approvals', 'Market Dynamics and Investment', 'Future Directions and Opportunities'],
      ['Understanding the Science', 'Tools and Techniques', 'From Lab to Clinic: Translation Challenges', 'Case Studies in Therapeutic Development', 'Economic and Market Analysis', 'Ethical Considerations and Debates', 'Regulatory Landscape Across Regions', 'Looking Ahead: The Next Decade'],
    ],
    'BCI': [
      ['The Neuroscience Behind BCI', 'Technology Architecture and Components', 'Invasive vs Non-Invasive Approaches', 'Medical Applications and Clinical Trials', 'Consumer and Commercial Applications', 'Ethical and Privacy Implications', 'Market Outlook and Investment', 'The Future of Brain-Computer Interfaces'],
      ['Understanding Neural Interfaces', 'Signal Processing and Decoding', 'Hardware and Implant Technology', 'Software and Machine Learning Pipeline', 'Real-World Deployments and Results', 'Regulatory and Safety Framework', 'Economic Analysis and Market Potential', 'Roadmap to Mainstream Adoption'],
    ],
    'AV': [
      ['The Autonomous Vehicle Landscape', 'Sensor Technologies and Perception Systems', 'AI and Decision-Making Architecture', 'Safety Standards and Testing Protocols', 'Regulatory Framework Across Jurisdictions', 'Economic Model and Business Case', 'Infrastructure Requirements', 'The Path to Full Autonomy'],
      ['Understanding Autonomous Systems', 'Hardware Stack: Sensors and Computing', 'Software Stack: Perception to Control', 'Simulation and Testing Methodologies', 'Real-World Deployment Data', 'Insurance and Liability Considerations', 'Market Projections and Timelines', 'Strategic Implications for Industries'],
    ],
    'Space': [
      ['The New Space Economy', 'Technology and Engineering Marvels', 'Launch Systems and Cost Revolution', 'Satellite and Orbital Infrastructure', 'Commercial Opportunities and Markets', 'Regulatory and Policy Framework', 'Security and Defense Considerations', 'The Future: Multi-Planetary Civilization'],
      ['Space Technology Fundamentals', 'Propulsion and Orbital Mechanics', 'Manufacturing and Materials in Space', 'Commercial Space Business Models', 'Investment and Market Analysis', 'International Space Law and Policy', 'Environmental and Debris Management', 'Roadmap to 2035 and Beyond'],
    ],
    'Materials': [
      ['The Materials Science Revolution', 'Fundamental Properties and Mechanisms', 'Synthesis and Manufacturing Methods', 'Current Applications and Industries', 'Performance Comparison with Traditional Materials', 'Economic Analysis and Market Size', 'Challenges in Scale-Up and Commercialization', 'Future Materials: What Is Coming Next'],
      ['Understanding the Science Behind the Material', 'Production Techniques and Processes', 'Characterization and Testing Methods', 'Real-World Applications and Case Studies', 'Cost Analysis and Supply Chain', 'Environmental Impact and Sustainability', 'Regulatory and Safety Considerations', 'Research Frontiers and Emerging Directions'],
    ],
    'Quantum': [
      ['Quantum Computing Fundamentals', 'Hardware Approaches and Qubit Technologies', 'Software Stack and Programming Model', 'Error Correction and Fault Tolerance', 'Practical Applications and Use Cases', 'Current State vs Theoretical Potential', 'Investment and Competitive Landscape', 'The Timeline to Quantum Advantage'],
      ['The Physics of Quantum Information', 'Quantum Algorithm Design', 'Implementation Challenges and Solutions', 'Benchmarking and Performance Metrics', 'Industry-Specific Applications', 'Cryptography and Security Implications', 'Market Analysis and Company Landscape', 'Strategic Roadmap for Organizations'],
    ],
    'Nuclear': [
      ['Nuclear Energy Fundamentals', 'Reactor Technologies and Designs', 'Safety Systems and Protocols', 'Fuel Cycle and Resource Management', 'Economic Analysis and Cost Structure', 'Regulatory Framework and Licensing', 'Environmental and Climate Impact', 'The Future of Nuclear Power'],
      ['The Science of Nuclear Fission', 'Modern Reactor Architecture', 'Small Modular Reactor Innovation', 'Waste Management and Disposal Solutions', 'Comparative Energy Economics', 'Global Policy and Deployment Trends', 'Workforce and Career Opportunities', 'Strategic Outlook: 2030 and Beyond'],
    ],
    'Energy Storage': [
      ['Energy Storage Fundamentals', 'Battery Chemistry and Technology', 'Grid-Scale Deployment and Projects', 'Economic Models and Revenue Streams', 'Performance Metrics and Benchmarks', 'Environmental Impact and Recycling', 'Regulatory and Policy Landscape', 'The Future of Energy Storage'],
      ['The Science of Energy Storage', 'Technology Comparison and Selection', 'System Design and Integration', 'Real-World Projects and Case Studies', 'Cost Analysis and ROI Modeling', 'Supply Chain and Material Sourcing', 'Safety Standards and Certifications', 'Emerging Technologies and Market Trends'],
    ],
    'Cybersecurity': [
      ['The Threat Landscape in 2026', 'Core Security Principles and Frameworks', 'Technical Architecture and Implementation', 'Real-World Attack Scenarios and Defense', 'Compliance and Regulatory Requirements', 'Tools and Technologies Comparison', 'Cost of Security vs Cost of Breach', 'Strategic Security Roadmap'],
      ['Understanding the Security Challenge', 'Architecture and Design Patterns', 'Step-by-Step Implementation Guide', 'Common Vulnerabilities and Mitigations', 'Incident Response and Recovery', 'Security Metrics and KPIs', 'Industry Case Studies and Lessons', 'Future Threats and Emerging Defenses'],
    ],
  };
  
  const banks = h2Bank[category] || h2Bank['AI'];
  return banks[styleIndex % banks.length];
}

// Generate H3 headings for a given H2
function generateH3s(h2, category, postIndex, h2Index) {
  const h3Templates = [
    ['Key Concepts and Terminology', 'Historical Context and Development', 'Current State of the Art'],
    ['Technical Implementation Details', 'Performance Benchmarks', 'Limitations and Edge Cases'],
    ['Quantitative Analysis', 'Comparative Assessment', 'Industry-Specific Considerations'],
    ['Best Practices', 'Common Mistakes to Avoid', 'Expert Recommendations'],
    ['Market Size and Growth', 'Key Players and Competition', 'Investment and Funding Trends'],
    ['Technical Specifications', 'Integration Challenges', 'Scalability Considerations'],
    ['Success Stories', 'Failure Cases and Lessons', 'Measurable Outcomes'],
    ['Near-Term Developments', 'Medium-Term Projections', 'Long-Term Vision'],
  ];
  
  return h3Templates[h2Index % h3Templates.length];
}

// Split a long text into sentences
function splitSentences(text) {
  return text.match(/[^.!?]+[.!?]+/g) || [text];
}

// Group sentences into small paragraphs targeting ~150-200 chars each (3-4 lines)
function groupSentences(sentences, maxChars = 200) {
  const groups = [];
  let current = [];
  let currentLen = 0;
  for (const s of sentences) {
    const sTrim = s.trim();
    if (currentLen + sTrim.length + 1 > maxChars && current.length > 0) {
      groups.push(current.join(' ').trim());
      current = [];
      currentLen = 0;
    }
    current.push(sTrim);
    currentLen += sTrim.length + 1;
    // If single sentence already exceeds maxChars, flush it as its own group
    if (currentLen > maxChars && current.length === 1) {
      groups.push(current.join(' ').trim());
      current = [];
      currentLen = 0;
    }
  }
  if (current.length > 0) groups.push(current.join(' ').trim());
  return groups;
}

// Generate paragraph sections (array of small sections) from title, category, and context
// Returns an array of {type, text} or {type, variant, title, text} sections
function generateParagraphSections(title, category, h2Text, h3Text, postIndex, paraIndex) {
  const topic = title.replace(/:.*/, '').replace(/\(.*?\)/g, '').trim();
  const categoryLower = category.toLowerCase();
  
  const intros = [
    `When examining ${h2Text.toLowerCase()} in the context of ${topic}, several critical factors emerge that demand attention from both practitioners and decision-makers.`,
    `The landscape of ${h2Text.toLowerCase()} within ${categoryLower} has undergone significant transformation, driven by rapid technological advancement and shifting market dynamics.`,
    `Understanding ${h2Text.toLowerCase()} requires a deep dive into both the theoretical foundations and practical implications that shape the ${categoryLower} ecosystem.`,
    `In the rapidly evolving world of ${categoryLower}, ${h2Text.toLowerCase()} represents a critical intersection of innovation, investment, and real-world impact.`,
    `The conversation around ${h2Text.toLowerCase()} has intensified as ${topic} continues to capture attention across the ${categoryLower} industry and beyond.`,
  ];
  
  const bodies = [
    `Recent data reveals that organizations investing in this area see measurable improvements across multiple dimensions. According to industry surveys, adoption rates have climbed steadily, with enterprise deployments increasing year over year. The technology has matured from experimental prototypes to production-ready systems that deliver tangible value. However, the gap between leaders and laggards continues to widen, creating a competitive divide that becomes harder to close with each passing quarter.`,
    `The technical architecture underlying these systems involves multiple layers of complexity. At the foundation, robust engineering principles ensure reliability and performance. Above that, sophisticated algorithms process inputs and generate outputs with increasing accuracy. The integration layer connects these components to existing infrastructure, requiring careful planning and execution. Each layer presents its own challenges, from latency optimization to fault tolerance, and addressing them requires a holistic approach rather than piecemeal solutions.`,
    `Market analysis indicates strong growth trajectories across all major segments. The total addressable market is projected to expand significantly over the next five years, driven by increasing demand from both enterprise and consumer segments. Key growth drivers include regulatory pressures, cost reduction imperatives, and competitive dynamics that reward early adopters. Investment flowing into the sector has reached record levels, with venture capital, corporate R&D budgets, and government grants all contributing to an unprecedented funding environment.`,
    `From a practical standpoint, implementation requires careful consideration of several factors. First, organizations must assess their current capabilities and identify gaps that need to be addressed. Second, a phased rollout strategy typically yields better results than big-bang approaches, allowing for course corrections along the way. Third, stakeholder buy-in across all levels of the organization is essential for success. Finally, ongoing measurement and optimization ensure that the investment continues to deliver value over time.`,
    `The competitive landscape is characterized by both established players and emerging challengers. Traditional companies bring scale, resources, and deep industry relationships, while startups contribute agility, innovation, and a willingness to challenge conventional approaches. This dynamic creates a fertile environment for innovation, as partnerships and collaborations between the two groups accelerate progress. The result is a rapidly evolving market where competitive advantages can shift quickly, and staying informed about the latest developments is crucial for strategic planning.`,
    `Safety and reliability considerations play a paramount role in deployment decisions. Every system must undergo rigorous testing under a variety of conditions to ensure it performs as expected. Edge cases, while rare, can have outsized consequences and must be anticipated and addressed. Redundancy, fail-safes, and graceful degradation are not optional features but fundamental design requirements. The cost of implementing these safeguards is significant, but the cost of not implementing them — in terms of financial loss, reputational damage, and regulatory consequences — is far greater.`,
    `The economic equation is compelling when viewed through a total cost of ownership lens. While initial investments may seem substantial, the long-term savings in operational efficiency, reduced downtime, and improved outcomes create a positive return on investment within a reasonable timeframe. Organizations that have completed full deployment cycles report cost reductions ranging from twenty to forty percent, depending on the specific application and scale of implementation. These figures are consistent across industries, suggesting broad applicability of the underlying technology.`,
    `Looking at the regulatory environment, policymakers are working to keep pace with technological advancement. New frameworks are being developed to address the unique challenges posed by these technologies, balancing innovation with public safety and consumer protection. Compliance requirements vary significantly across jurisdictions, creating complexity for organizations operating internationally. Staying ahead of regulatory changes requires dedicated resources and proactive engagement with policymakers and industry associations.`,
  ];
  
  const conclusions = [
    `As we look to the future, the trajectory is clear: ${h2Text.toLowerCase()} will continue to evolve and expand its impact across the ${categoryLower} landscape. Organizations that invest now will be well-positioned to capitalize on emerging opportunities.`,
    `The evidence is compelling — ${h2Text.toLowerCase()} is not a passing trend but a fundamental shift in how ${categoryLower} challenges are approached and solved. The question is no longer whether to adopt, but how quickly and effectively.`,
    `For professionals and organizations in the ${categoryLower} space, understanding ${h2Text.toLowerCase()} is essential for remaining competitive. The pace of change shows no signs of slowing, and those who fail to adapt risk being left behind.`,
    `In conclusion, ${h2Text.toLowerCase()} represents one of the most significant developments in ${categoryLower} today. Its implications extend far beyond the technology itself, reshaping business models, regulatory frameworks, and competitive dynamics across the entire industry.`,
  ];
  
  // Build the full text from intro + bodies + conclusion
  let fullText;
  if (paraIndex === 0) {
    fullText = intros[postIndex % intros.length] + ' ' + bodies[(postIndex + paraIndex) % bodies.length];
  } else if (paraIndex === 1) {
    fullText = bodies[(postIndex + paraIndex + 1) % bodies.length] + ' ' + bodies[(postIndex + paraIndex + 3) % bodies.length];
  } else {
    fullText = bodies[(postIndex + paraIndex + 2) % bodies.length] + ' ' + bodies[(postIndex + paraIndex + 5) % bodies.length];
  }
  
  if (paraIndex >= 2) {
    fullText += ' ' + conclusions[postIndex % conclusions.length];
  }
  
  // Split into sentences and group into small paragraphs
  const sentences = splitSentences(fullText);
  const groups = groupSentences(sentences, 200);
  
  // Convert some groups into callouts for style variety
  const sections = [];
  const calloutVariant = (postIndex + paraIndex) % 3 === 0 ? 'warning' : 'info';
  
  for (let i = 0; i < groups.length; i++) {
    // Convert every 3rd group into a callout for style variety
    if (i === 2 && groups.length > 3) {
      sections.push({
        type: 'callout',
        variant: calloutVariant,
        title: 'Important Note',
        text: groups[i]
      });
    } else if (i === groups.length - 1 && paraIndex >= 2 && groups.length > 4) {
      // Convert last group to a quote for conclusion-style content
      sections.push({
        type: 'quote',
        text: groups[i],
        author: 'Research Director'
      });
    } else {
      sections.push({
        type: 'p',
        text: groups[i]
      });
    }
  }
  
  return sections;
}

// Generate list items
function generateListItems(category, h2Text, h3Text, postIndex, listType) {
  const categoryItems = {
    'AI': [
      ['Reduced inference latency by up to 60% through model optimization', 'Achieved 95% accuracy on benchmark datasets', 'Lowered operational costs by 40% compared to baseline', 'Enabled real-time decision-making at scale', 'Improved user satisfaction scores by 35%'],
      ['GPT-5 and Claude 4 leading in reasoning tasks', 'Open-source models closing the gap with proprietary solutions', 'Multimodal capabilities becoming standard', 'Agent frameworks maturing for production use', 'Cost per token dropping 80% year over year'],
      ['Define clear use cases and success metrics before implementation', 'Start with a pilot project to validate assumptions', 'Invest in data quality and pipeline infrastructure', 'Build cross-functional teams with ML and domain expertise', 'Establish monitoring and feedback loops from day one'],
    ],
    'Robotics': [
      ['Payload capacity increased by 50% over previous generation', 'Precision improved to 0.1mm repeatability', 'Deployment time reduced from weeks to days', 'Maintenance costs lowered by 35%', 'Energy efficiency gains of 25%'],
      ['Collaborative robots safe for human-adjacent work', 'Autonomous navigation in dynamic environments', 'Real-time obstacle avoidance and path replanning', 'Integration with factory management systems', 'Remote monitoring and diagnostics capabilities'],
      ['Assess workspace layout and safety requirements', 'Calculate total cost of ownership including maintenance', 'Train operators on safety procedures and emergency stops', 'Plan for software updates and connectivity', 'Establish a preventive maintenance schedule'],
    ],
    'Fusion': [
      ['Plasma temperatures exceeding 100 million degrees Celsius', 'Sustained fusion reactions for record durations', 'Net energy gain demonstrated in laboratory conditions', 'Magnetic confinement achieving stability milestones', 'Tritium breeding ratios approaching break-even'],
      ['Tokamak designs leading in scale and maturity', 'Stellarators offering inherent stability advantages', 'Inertial confinement achieving high-energy-density states', 'Private ventures accelerating timelines', 'International collaboration sharing critical data'],
      ['Materials that can withstand extreme neutron flux', 'Tritium supply chain and breeding blanket design', 'Plasma stability over sustained periods', 'Cost reduction through modular construction', 'Regulatory framework for fusion power plants'],
    ],
    'Biotech': [
      ['Clinical trial success rates improving with AI-assisted design', 'Manufacturing costs decreasing through process optimization', 'Regulatory pathways becoming clearer with precedent', 'Patient access expanding through novel delivery models', 'Safety profiles well-characterized in long-term studies'],
      ['Gene editing precision reaching 99%+ accuracy', 'Cell therapy manufacturing scaling to commercial volumes', 'mRNA platforms expanding beyond infectious disease', 'Synthetic biology enabling programmable cell factories', 'Direct RNA sequencing revealing new therapeutic targets'],
      ['Navigate complex regulatory pathways across jurisdictions', 'Secure intellectual property protection early', 'Build manufacturing capabilities before clinical completion', 'Engage with patient advocacy groups', 'Plan for reimbursement and market access strategies'],
    ],
    'BCI': [
      ['Signal decoding accuracy reaching 90%+ in clinical settings', 'Bandwidth improvements enabling richer communication', 'Device longevity extending beyond five years', 'Surgical procedures becoming less invasive', 'Cost reduction through manufacturing scale'],
      ['Invasive implants providing highest signal quality', 'Non-invasive systems improving through AI decoding', 'Closed-loop systems enabling real-time therapy', 'Wireless communication reducing infection risk', 'Biocompatible materials reducing immune response'],
      ['Address privacy of neural data explicitly', 'Ensure informed consent for irreversible procedures', 'Establish clear ownership of brain data', 'Consider accessibility and cost equity', 'Plan for technology updates and device replacement'],
    ],
    'AV': [
      ['Disengagement rates dropping below 0.1 per 1,000 miles', 'Reaction times faster than human drivers by 3x', 'Object detection accuracy exceeding 99% in good conditions', 'Route optimization reducing travel time by 15%', 'Energy efficiency improvements of 20% in electric AVs'],
      ['LiDAR providing precise 3D mapping capabilities', 'Camera systems offering rich semantic understanding', 'Radar excelling in adverse weather conditions', 'Sensor fusion combining strengths of each modality', 'V2X communication extending perception beyond line of sight'],
      ['Establish clear liability frameworks for accidents', 'Define testing and certification standards', 'Create data sharing protocols for safety improvement', 'Address privacy concerns with vehicle cameras', 'Plan for mixed traffic during transition period'],
    ],
    'Space': [
      ['Launch costs dropping below $1,000 per kg to LEO', 'Reusable rockets achieving 95% recovery success rate', 'Satellite constellation enabling global coverage', 'In-space manufacturing producing novel materials', 'Lunar missions establishing sustainable presence'],
      ['Reusable first stages dramatically reducing costs', 'Autonomous landing systems proving reliable', 'On-orbit servicing extending satellite lifetimes', 'Propellant transfer enabling deep space missions', 'Radiation shielding for long-duration missions'],
      ['Streamline licensing for commercial launches', 'Establish traffic management for orbital slots', 'Address debris mitigation requirements', 'Define property rights for space resources', 'Coordinate international spectrum allocation'],
    ],
    'Materials': [
      ['Strength-to-weight ratios exceeding traditional materials by 10x', 'Thermal stability up to 2000 degrees Celsius', 'Electrical conductivity rivaling copper at lower weight', 'Self-healing capabilities extending lifespan', 'Manufacturing costs decreasing through scale'],
      ['Nanomaterials enabling unprecedented property control', 'Computational design accelerating discovery', 'Additive manufacturing enabling complex geometries', 'Bio-inspired structures optimizing performance', 'Recyclable materials reducing environmental impact'],
      ['Characterize properties under real-world conditions', 'Assess long-term durability and aging', 'Evaluate manufacturing scalability', 'Consider supply chain and raw material availability', 'Plan for end-of-life recycling or disposal'],
    ],
    'Quantum': [
      ['Qubit counts growing exponentially year over year', 'Gate fidelities approaching 99.9% threshold', 'Error correction showing below-threshold performance', 'Quantum advantage demonstrated for specific problems', 'Hybrid algorithms bridging classical and quantum'],
      ['Superconducting qubits leading in gate speed', 'Trapped ions offering long coherence times', 'Photonic systems enabling room-temperature operation', 'Neutral atoms providing scalable architectures', 'Topological qubits promising inherent error protection'],
      ['Assess whether your problem has quantum potential', 'Invest in quantum-ready talent and training', 'Experiment with cloud-based quantum platforms', 'Develop quantum-classical hybrid algorithms', 'Plan for post-quantum cryptography migration'],
    ],
    'Nuclear': [
      ['Capacity factors exceeding 92% for modern reactors', 'Levelized cost of electricity competitive with fossil fuels', 'Carbon emissions near zero across lifecycle', 'Fuel costs representing minimal share of total cost', 'Plant lifetimes extending to 60+ years'],
      ['Passive safety systems requiring no active power', 'Modular construction reducing build times', 'Small modular reactors enabling flexible deployment', 'Generation IV designs improving fuel utilization', 'Accident-tolerant fuels enhancing safety margins'],
      ['Streamline licensing for advanced reactor designs', 'Establish clear decommissioning fund requirements', 'Address waste storage and disposal pathways', 'Harmonize standards across international markets', 'Support workforce development and training programs'],
    ],
    'Energy Storage': [
      ['Round-trip efficiency exceeding 95% for lithium-ion systems', 'Cycle life reaching 10,000+ for advanced chemistries', 'Cost per kWh dropping below $100 at pack level', 'Response times under 100 milliseconds for grid services', 'Safety incidents decreasing with improved designs'],
      ['Lithium-ion dominating near-term applications', 'Sodium-ion emerging as cost-effective alternative', 'Flow batteries excelling in long-duration storage', 'Solid-state technology promising higher energy density', 'Hydrogen enabling seasonal storage at scale'],
      ['Size systems based on load profiles and use cases', 'Consider total lifecycle cost not just upfront price', 'Plan for thermal management and safety systems', 'Integrate with energy management systems', 'Establish recycling or second-life plans'],
    ],
    'Cybersecurity': [
      ['Mean time to detect threats reduced by 70%', 'False positive rates below 5% with AI tuning', 'Automated response containing incidents in minutes', 'Compliance reporting time cut by 80%', 'Security operational costs reduced by 30%'],
      ['Zero trust architecture eliminating implicit trust', 'AI-powered detection identifying novel threats', 'Identity becoming the primary security perimeter', 'Supply chain security gaining board-level attention', 'Quantum-safe cryptography migration beginning'],
      ['Conduct regular risk assessments and gap analyses', 'Implement multi-factor authentication everywhere', 'Segment networks to limit lateral movement', 'Maintain incident response plans and test them', 'Invest in security awareness training for all staff'],
    ],
  };
  
  const items = categoryItems[category] || categoryItems['AI'];
  return items[postIndex % items.length];
}

// Generate stats
function generateStats(category, postIndex) {
  const statsBank = {
    'AI': [
      [{label:'Market Size',value:'$340B',change:'+40% YoY'},{label:'Enterprise Adoption',value:'67%',change:'+15pp'},{label:'Avg ROI',value:'3.7x',change:'12-month'},{label:'Models Deployed',value:'50K+',change:'Production'}],
      [{label:'Training Cost',value:'$2B',change:'GPT-5 est.'},{label:'Inference Cost',value:'$5/$15',change:'per 1M tokens'},{label:'Context Window',value:'2M',change:'Gemini 3'},{label:'Accuracy',value:'94%',change:'Reasoning'}],
    ],
    'Robotics': [
      [{label:'Market Size',value:'$72B',change:'+18% YoY'},{label:'Installed Base',value:'4.2M',change:'Worldwide'},{label:'Avg Payback',value:'18 mo',change:'Industrial'},{label:'Precision',value:'0.1mm',change:'Repeatable'}],
      [{label:'Cobot Sales',value:'$2.1B',change:'+25% YoY'},{label:'Humanoid Units',value:'15K',change:'2026 est.'},{label:'AMR Deployments',value:'500K',change:'Warehouses'},{label:'RaaS Growth',value:'35%',change:'CAGR'}],
    ],
    'Fusion': [
      [{label:'Private Investment',value:'$7.5B',change:'Total to date'},{label:'Peak Temp',value:'150M°C',change:'Plasma'},{label:'Net Energy',value:'Q>1',change:'Achieved'},{label:'Timeline',value:'2032-2035',change:'First grid'}],
      [{label:'Fusion Startups',value:'45+',change:'Active globally'},{label:'Public Funding',value:'$5B+',change:'Annual'},{label:'Q Factor',value:'1.5',change:'NIF record'},{label:'Plasma Duration',value:'403s',change:'EAST record'}],
    ],
    'Biotech': [
      [{label:'Market Size',value:'$1.8T',change:'+12% YoY'},{label:'Clinical Trials',value:'12K+',change:'Active'},{label:'Approval Rate',value:'32%',change:'Phase I to FDA'},{label:'Avg Dev Time',value:'10 yr',change:'To market'}],
      [{label:'Gene Therapy Approvals',value:'12',change:'FDA by 2026'},{label:'Cell Therapy Market',value:'$48B',change:'2030 proj.'},{label:'mRNA Pipeline',value:'300+',change:'In development'},{label:'AI Drug Discovery',value:'$4.2B',change:'Market 2026'}],
    ],
    'BCI': [
      [{label:'Market Size',value:'$3.2B',change:'+22% CAGR'},{label:'Implantable BCIs',value:'200+',change:'Active patients'},{label:'Data Rate',value:'90 WPM',change:'Neuralink'},{label:'FDA Approvals',value:'3',change:'Breakthrough devices'}],
      [{label:'BCI Companies',value:'35+',change:'Active globally'},{label:'Investment',value:'$2.1B',change:'2024-2026'},{label:'Clinical Trials',value:'18',change:'Registered'},{label:'Decoding Accuracy',value:'95%',change:'Invasive'}],
    ],
    'AV': [
      [{label:'Robotaxi Rides',value:'50M+',change:'2026 est.'},{label:'Disengagement Rate',value:'0.08',change:'per 1K miles'},{label:'AV Market',value:'$400B',change:'2030 proj.'},{label:'Cities Deployed',value:'15+',change:'Commercial'}],
      [{label:'Sensor Cost',value:'$4K',change:'Down from $75K'},{label:'Test Miles',value:'50B+',change:'Cumulative'},{label:'Safety Record',value:'6.7x',change:'Safer than human'},{label:'Deployment',value:'L4',change:'Geofenced'}],
    ],
    'Space': [
      [{label:'Launch Market',value:'$15B',change:'+25% YoY'},{label:'Cost to LEO',value:'$950/kg',change:'Down 95%'},{label:'Active Satellites',value:'9,500+',change:'In orbit'},{label:'Space Economy',value:'$1.8T',change:'2035 proj.'}],
      [{label:'Reusable Rate',value:'95%',change:'Falcon 9'},{label:'Starlink Users',value:'5M+',change:'Subscribers'},{label:'Artemis Budget',value:'$93B',change:'Total program'},{label:'Private Launches',value:'260+',change:'2026'}],
    ],
    'Materials': [
      [{label:'Market Size',value:'$280B',change:'+8% CAGR'},{label:'New Materials',value:'1,200+',change:'Discovered by AI'},{label:'Graphene Market',value:'$550M',change:'Growing 35%'},{label:'R&D Investment',value:'$18B',change:'Annual global'}],
      [{label:'Nanomaterials',value:'$25B',change:'2030 proj.'},{label:'3D Printing',value:'$44B',change:'2030 proj.'},{label:'HEA Discovery',value:'500+',change:'New alloys'},{label:'Time to Market',value:'8 yr',change:'Avg material'}],
    ],
    'Quantum': [
      [{label:'Market Size',value:'$1.3B',change:'+30% CAGR'},{label:'Max Qubits',value:'2,000',change:'IBM Condor'},{label:'Gate Fidelity',value:'99.9%',change:'Best achieved'},{label:'Quantum Speedup',value:'100x',change:'Specific tasks'}],
      [{label:'Quantum Companies',value:'50+',change:'Hardware'},{label:'Investment',value:'$30B',change:'Total global'},{label:'Error Rate',value:'0.1%',change:'Surface codes'},{label:'Q Applications',value:'200+',change:'Published'}],
    ],
    'Nuclear': [
      [{label:'Global Capacity',value:'395 GW',change:'440 reactors'},{label:'Capacity Factor',value:'92%',change:'Highest of any source'},{label:'SMR Pipeline',value:'80+',change:'Designs globally'},{label:'Build Time',value:'36 mo',change:'SMR target'}],
      [{label:'Nuclear Investment',value:'$150B',change:'2024-2030'},{label:'SMR Market',value:'$72B',change:'2035 proj.'},{label:'New Builds',value:'60+',change:'Under construction'},{label:'LCOE',value:'$74/MWh',change:'Competitive'}],
    ],
    'Energy Storage': [
      [{label:'Market Size',value:'$55B',change:'+25% YoY'},{label:'Deployed Capacity',value:'120 GW',change:'Global'},{label:'Cost per kWh',value:'$98',change:'Pack level'},{label:'Cycle Life',value:'8,000+',change:'LFP cells'}],
      [{label:'BESS Deployments',value:'45 GW',change:'2026 additions'},{label:'Sodium-Ion',value:'4 GWh',change:'Production 2028'},{label:'Flow Battery',value:'$2.1B',change:'Market 2030'},{label:'Recycling',value:'$18B',change:'Market 2030'}],
    ],
    'Cybersecurity': [
      [{label:'Market Size',value:'$215B',change:'+12% YoY'},{label:'Avg Breach Cost',value:'$4.9M',change:'Per incident'},{label:'Attack Frequency',value:'2,200',change:'Per day'},{label:'AI Detection',value:'70%',change:'Faster MTTD'}],
      [{label:'Ransomware Cost',value:'$30B',change:'Global 2026'},{label:'Zero Trust',value:'68%',change:'Fortune 500 adoption'},{label:'Cloud Breaches',value:'45%',change:'From misconfig'},{label:'SOC Automation',value:'55%',change:'SOAR deployed'}],
    ],
  };
  
  const bank = statsBank[category] || statsBank['AI'];
  return bank[postIndex % bank.length];
}

// Generate quote
function generateQuote(category, title, postIndex) {
  const quotes = {
    'AI': [
      {text:'The pace of AI advancement in 2026 has exceeded even the most optimistic projections. We are entering an era where AI systems can autonomously handle complex multi-step workflows that required human teams just two years ago.', author:'Dr. Sarah Chen, AI Research Lead'},
      {text:'Organizations that fail to integrate AI into their core operations within the next 18 months will face an insurmountable competitive disadvantage. This is not hyperbole — the data is clear.', author:'Marcus Rodriguez, Enterprise AI Strategist'},
    ],
    'Robotics': [
      {text:'The robotics industry is at an inflection point. What was once science fiction is now deployed on factory floors, and the gap between demonstration and production is shrinking rapidly.', author:'Dr. Hiroshi Tanaka, Robotics Institute Director'},
      {text:'We are seeing robotics adoption accelerate beyond traditional manufacturing into logistics, healthcare, and agriculture. The versatility of modern robotic systems is remarkable.', author:'Emily Watson, Industrial Automation Analyst'},
    ],
    'Fusion': [
      {text:'Fusion energy is no longer a question of if, but when. The progress we have seen in the past three years is unprecedented, and private investment is accelerating timelines that once seemed decades away.', author:'Dr. Mikhail Sokolov, Plasma Physicist'},
      {text:'The fusion industry has attracted more private capital in the last five years than the previous fifty combined. This is a clear signal that investors see a viable path to commercial fusion.', author:'Jennifer Park, Clean Energy Investment Partner'},
    ],
    'Biotech': [
      {text:'The convergence of AI and biology is creating therapeutic possibilities that were unimaginable a decade ago. We are decoding the language of life and learning to program it.', author:'Dr. Maria Gonzalez, Computational Biologist'},
      {text:'Biotech is entering a golden age of innovation. The tools available today allow us to tackle diseases that have eluded treatment for generations.', author:'Dr. James Liu, Chief Scientific Officer'},
    ],
    'BCI': [
      {text:'Brain-computer interfaces represent the most profound technological frontier we face. The ability to directly interface with the human brain will reshape medicine, communication, and human potential.', author:'Dr. Anna Kowalski, Neurotechnology Researcher'},
      {text:'What we are seeing in BCI clinical trials today is just the beginning. The technology is maturing faster than the ethical frameworks needed to govern it.', author:'Dr. Robert Chen, Neuroethics Committee Chair'},
    ],
    'AV': [
      {text:'Autonomous vehicles are not just about replacing human drivers — they represent a fundamental reimagining of transportation, urban design, and personal mobility.', author:'Dr. Kevin Park, Autonomous Systems Researcher'},
      {text:'The safety data from commercial robotaxi deployments is compelling. In controlled environments, autonomous systems are demonstrably safer than human drivers.', author:'Sarah Mitchell, Transportation Safety Analyst'},
    ],
    'Space': [
      {text:'We are witnessing the democratization of space. What was once the exclusive domain of national governments is now accessible to private companies, universities, and even individuals.', author:'Dr. Alan Reynolds, Space Policy Director'},
      {text:'The economics of space have fundamentally changed. Reusable rockets, mass satellite production, and declining launch costs have opened entirely new business models.', author:'Dr. Yuki Nakamura, Space Economics Researcher'},
    ],
    'Materials': [
      {text:'Materials science is undergoing a revolution driven by computational design and AI. We can now discover and optimize new materials in months rather than decades.', author:'Dr. Patricia Hart, Materials Science Professor'},
      {text:'The materials we develop in the next decade will determine the success of technologies ranging from quantum computing to fusion energy. Materials are the enabling layer.', author:'Dr. Sven Eriksson, Advanced Materials Director'},
    ],
    'Quantum': [
      {text:'Quantum computing is transitioning from scientific curiosity to practical tool. The next five years will determine which applications deliver genuine quantum advantage.', author:'Dr. David Kim, Quantum Computing Researcher'},
      {text:'Organizations that begin their quantum journey today will have a significant advantage when the technology matures. Waiting for perfection is not a strategy.', author:'Dr. Rachel Moore, Quantum Strategy Consultant'},
    ],
    'Nuclear': [
      {text:'Nuclear energy is experiencing a renaissance driven by climate imperatives and the enormous power demands of AI data centers. The technology has evolved dramatically since the plants built in the 1970s.', author:'Dr. Thomas Wright, Nuclear Engineering Professor'},
      {text:'Small modular reactors represent the future of nuclear power. Their modular construction, passive safety, and flexible siting make them suitable for applications that traditional plants could never address.', author:'Dr. Lisa Chang, SMR Program Director'},
    ],
    'Energy Storage': [
      {text:'Energy storage is the missing link in the renewable energy transition. Without it, we cannot achieve the grid reliability and flexibility that a clean energy future demands.', author:'Dr. Mark Stevens, Energy Storage Researcher'},
      {text:'The economics of energy storage have crossed a critical threshold. In many markets, battery storage is now the cheapest option for peak demand management.', author:'Dr. Amy Roberts, Grid Modernization Lead'},
    ],
    'Cybersecurity': [
      {text:'The threat landscape has fundamentally shifted. We are no longer defending against individual hackers — we are defending against AI-augmented criminal enterprises and nation-state actors with near-infinite resources.', author:'Dr. Michael Torres, CISO and Security Researcher'},
      {text:'Cybersecurity is no longer an IT problem — it is a board-level business risk. Organizations that treat it as such are the ones that survive and thrive in the current threat environment.', author:'Jennifer Hayes, Cybersecurity Strategy Director'},
    ],
  };
  
  const bank = quotes[category] || quotes['AI'];
  return bank[postIndex % bank.length];
}

// Generate callout
function generateCallout(category, postIndex, h2Index) {
  const callouts = {
    'AI': [
      {variant:'info',title:'Key Insight',text:'AI adoption is no longer optional for competitive organizations. The gap between AI leaders and laggards is widening at an accelerating rate, with early adopters achieving 3-5x productivity gains in key workflows.'},
      {variant:'warning',title:'Implementation Risk',text:'Rushing AI deployment without proper data infrastructure, governance frameworks, and change management leads to costly failures. Over 60% of AI projects stall at the proof-of-concept stage due to inadequate preparation.'},
      {variant:'success',title:'Best Practice',text:'Start with a well-defined use case, measure outcomes rigorously, and scale incrementally. Organizations following this approach report 4x higher success rates than those attempting large-scale deployments from the outset.'},
    ],
    'Robotics': [
      {variant:'info',title:'Industry Insight',text:'The robotics market is bifurcating between high-volume industrial applications and specialized service robots. Both segments are growing, but the economics and deployment models differ significantly.'},
      {variant:'warning',title:'Safety Consideration',text:'Any robotic deployment must comply with ISO 10218 and ANSI/RIA R15.06 safety standards. Failure to do so creates legal liability and, more importantly, risks worker safety.'},
      {variant:'success',title:'ROI Tip',text:'When calculating robotics ROI, include indirect benefits such as improved quality consistency, reduced workplace injuries, and ability to operate in environments unsafe for humans. These often add 30-40% to the calculated return.'},
    ],
    'Fusion': [
      {variant:'info',title:'Fusion Fact',text:'A single gram of fusion fuel can produce the same energy as 10 tons of coal. The energy density of fusion is approximately four million times greater than fossil fuels.'},
      {variant:'warning',title:'Engineering Challenge',text:'The plasma in a fusion reactor must be maintained at temperatures exceeding 100 million degrees Celsius — roughly seven times hotter than the core of the sun. Containing this plasma is one of the greatest engineering challenges in human history.'},
      {variant:'success',title:'Investment Opportunity',text:'Fusion energy investment has grown from $200 million in 2018 to over $7.5 billion in 2026. The private sector is now driving fusion development faster than government programs.'},
    ],
    'Biotech': [
      {variant:'info',title:'Regulatory Note',text:'The FDA has established accelerated approval pathways for gene therapies treating serious conditions. This has reduced average approval timelines by 40% for qualifying treatments.'},
      {variant:'warning',title:'Manufacturing Challenge',text:'Biotech manufacturing scale-up remains the biggest bottleneck. Moving from lab-scale production to commercial volumes often takes 3-5 years and costs $200-500 million.'},
      {variant:'success',title:'Clinical Progress',text:'Over 2,000 gene therapy clinical trials are active worldwide as of 2026, with approval rates improving significantly due to better trial design and AI-assisted patient selection.'},
    ],
    'BCI': [
      {variant:'info',title:'Technology Status',text:'Current BCI systems achieve data transfer rates of 4.6 bits per second for invasive implants, enabling communication speeds of up to 90 words per minute — approaching natural speech rate.'},
      {variant:'warning',title:'Ethical Consideration',text:'BCI technology raises unprecedented privacy concerns. Neural data could reveal thoughts, emotions, and subconscious reactions. Robust legal frameworks for neural privacy are still in their infancy.'},
      {variant:'success',title:'Clinical Impact',text:'BCI devices have restored communication ability to patients with ALS, spinal cord injury, and locked-in syndrome. For these patients, the technology is genuinely life-changing.'},
    ],
    'AV': [
      {variant:'info',title:'Safety Data',text:'Waymo robotaxis have completed over 50 million rider-only miles with a crash rate 6.7 times lower than human drivers in the same geographic areas. The safety case for autonomous vehicles is strengthening.'},
      {variant:'warning',title:'Deployment Challenge',text:'Autonomous vehicles struggle in edge cases such as construction zones, severe weather, and unusual traffic situations. Achieving true Level 5 autonomy requires solving these long-tail scenarios.'},
      {variant:'success',title:'Market Progress',text:'The robotaxi market is projected to reach $50 billion by 2030, with deployments expanding from 15 cities in 2026 to over 50 cities by 2028.'},
    ],
    'Space': [
      {variant:'info',title:'Economic Impact',text:'The global space economy is projected to reach $1.8 trillion by 2035, driven by satellite services, space manufacturing, and lunar resource extraction.'},
      {variant:'warning',title:'Debris Crisis',text:'Over 35,000 objects larger than 10cm are tracked in orbit, with millions of smaller pieces untracked. The Kessler Syndrome — a cascade of collisions — remains a real and growing threat.'},
      {variant:'success',title:'Cost Revolution',text:'Reusable rocket technology has reduced launch costs by 95% over the past decade, opening space access to companies, universities, and even individual researchers.'},
    ],
    'Materials': [
      {variant:'info',title:'AI Discovery',text:'Google DeepMind\'s GNoME project discovered 2.2 million new crystal structures in 2023, equivalent to nearly 800 years of traditional materials discovery. AI is transforming the field.'},
      {variant:'warning',title:'Scale-Up Challenge',text:'The average time from materials discovery to commercial deployment is 10-20 years. Bridging the gap between lab-scale synthesis and industrial production remains a persistent bottleneck.'},
      {variant:'success',title:'Market Opportunity',text:'Advanced materials markets are projected to exceed $300 billion by 2030, with graphene, metamaterials, and nanomaterials leading growth at 25-35% CAGR.'},
    ],
    'Quantum': [
      {variant:'info',title:'Current State',text:'As of 2026, quantum computers have demonstrated quantum advantage for specific narrow problems but have not yet achieved practical advantage for commercially relevant workloads.'},
      {variant:'warning',title:'Migration Urgency',text:'Post-quantum cryptography migration should begin now. Harvest-now-decrypt-later attacks mean that data encrypted today with RSA or ECC could be decrypted by quantum computers within 5-10 years.'},
      {variant:'success',title:'Investment Signal',text:'Global quantum computing investment has surpassed $30 billion, with governments, tech giants, and venture capital all betting on near-term breakthroughs.'},
    ],
    'Nuclear': [
      {variant:'info',title:'Capacity Advantage',text:'Nuclear power has the highest capacity factor of any energy source at 92%, compared to 35% for wind and 25% for solar. This makes nuclear the most reliable source of clean electricity.'},
      {variant:'warning',title:'Public Perception',text:'Despite improved safety records, public perception of nuclear energy remains mixed. Education and transparent communication about modern safety systems are essential for broader acceptance.'},
      {variant:'success',title:'SMR Momentum',text:'Over 80 SMR designs are in development globally, with the first commercial deployments expected by 2027-2028. The SMR market is projected to reach $72 billion by 2035.'},
    ],
    'Energy Storage': [
      {variant:'info',title:'Deployment Growth',text:'Global energy storage deployments reached 120 GW in 2026, up from 45 GW in 2024. The growth rate of 60% year-over-year makes storage one of the fastest-growing energy technologies.'},
      {variant:'warning',title:'Supply Chain Risk',text:'Lithium, cobalt, and nickel supply chains face geopolitical risks and environmental concerns. Diversifying battery chemistries and investing in recycling are critical for long-term stability.'},
      {variant:'success',title:'Cost Decline',text:'Battery pack costs have fallen from $1,200/kWh in 2010 to under $100/kWh in 2026. At this price point, battery storage is cost-competitive with gas peaker plants for grid services.'},
    ],
    'Cybersecurity': [
      {variant:'info',title:'Threat Intelligence',text:'The average organization faces 2,200 cyber attacks per day. AI-powered security tools can now detect and respond to threats in under 60 seconds, compared to 280 minutes for human-only teams.'},
      {variant:'warning',title:'Rising Costs',text:'The average cost of a data breach reached $4.9 million in 2026. Ransomware payments alone exceeded $30 billion globally, with the average ransom demand increasing 40% year-over-year.'},
      {variant:'success',title:'Zero Trust ROI',text:'Organizations implementing zero trust architecture report a 50% reduction in breach impact and a 30% decrease in security operational costs within the first 18 months.'},
    ],
  };
  
  const bank = callouts[category] || callouts['AI'];
  return bank[(postIndex + h2Index) % bank.length];
}

// Generate key takeaways
function generateKeyTakeaways(title, category, postIndex) {
  const takeawayBank = {
    'AI': [
      ['AI adoption is accelerating across all enterprise segments with measurable ROI', 'Implementation success depends on data quality, governance, and change management', 'The technology landscape is shifting from single-model to multi-model architectures', 'Cost reduction of 80% year-over-year makes AI accessible to organizations of all sizes'],
      ['Organizations must invest in AI literacy across all levels, not just technical teams', 'The gap between AI leaders and laggards is widening at an unprecedented rate', 'Safety, alignment, and governance frameworks are as important as the technology itself', 'Multi-model strategies outperform single-vendor approaches in most real-world scenarios'],
    ],
    'Robotics': [
      ['Robotics deployment is expanding beyond manufacturing into healthcare, logistics, and agriculture', 'The ROI calculation must include indirect benefits like safety improvements and quality consistency', 'Humanoid robots are transitioning from research to early commercial deployment', 'Collaborative robots are the fastest-growing segment due to ease of deployment and safety'],
      ['The robotics talent gap is a critical bottleneck for industry growth', 'Software and AI integration are now the primary differentiators, not hardware', 'Robots-as-a-Service business models are lowering barriers to adoption', 'Safety standards and regulatory compliance must be prioritized from the start'],
    ],
    'Fusion': [
      ['Private investment in fusion has surpassed $7.5 billion, accelerating timelines significantly', 'Multiple technology approaches are viable, with tokamaks leading in maturity', 'Net energy gain has been demonstrated, proving the physics works', 'Commercial fusion power is projected for 2032-2035, earlier than many expected'],
      ['The engineering challenges remain significant, particularly in materials science', 'International competition is driving innovation at an unprecedented pace', 'Fusion power purchase agreements signal market confidence in commercial viability', 'Government support and regulatory frameworks are critical for deployment timelines'],
    ],
    'Biotech': [
      ['AI is compressing drug discovery timelines from years to months', 'Gene and cell therapies are moving from experimental to standard of care', 'Manufacturing scale-up remains the primary bottleneck for commercialization', 'Regulatory pathways are evolving to keep pace with therapeutic innovation'],
      ['The convergence of AI and biology is creating entirely new therapeutic categories', 'Investment in biotech continues to grow despite broader market headwinds', 'Personalized medicine is becoming economically viable at scale', 'Ethical frameworks must evolve alongside the technology'],
    ],
    'BCI': [
      ['BCI technology is transitioning from research to clinical and commercial applications', 'Invasive implants provide the highest signal quality but carry surgical risks', 'Non-invasive systems are improving rapidly through AI-based decoding', 'Neural privacy and ethical frameworks are critical and lag behind the technology'],
      ['The BCI market is projected to reach $12 billion by 2030', 'Clinical applications in restoring communication and mobility are the near-term focus', 'Consumer applications in gaming and mental health are emerging', 'FDA breakthrough device designations are accelerating the approval pathway'],
    ],
    'AV': [
      ['Level 4 autonomy is commercially deployed in geofenced areas across 15+ cities', 'Safety data from robotaxi deployments shows 6.7x lower crash rates than human drivers', 'Sensor costs have dropped 95%, making commercial deployment economically viable', 'Full Level 5 autonomy remains years away due to long-tail edge case challenges'],
      ['The robotaxi market is projected to reach $50 billion by 2030', 'Autonomous trucking represents a larger near-term opportunity than passenger vehicles', 'V2X infrastructure is critical for scaling beyond geofenced areas', 'Regulatory frameworks vary significantly across jurisdictions'],
    ],
    'Space': [
      ['The space economy is projected to reach $1.8 trillion by 2035', 'Reusable rockets have reduced launch costs by 95%, democratizing space access', 'Satellite constellations are transforming global connectivity and earth observation', 'Space debris management is becoming a critical sustainability challenge'],
      ['In-space manufacturing offers unique material properties impossible on Earth', 'Commercial space stations will replace the ISS by 2030', 'Lunar resource extraction is moving from concept to mission planning', 'Space security is an increasingly important national defense priority'],
    ],
    'Materials': [
      ['AI is accelerating materials discovery by 100x compared to traditional methods', 'Advanced materials markets will exceed $300 billion by 2030', 'The gap between discovery and commercial deployment remains 10-20 years', 'Sustainability and recyclability are becoming primary design criteria'],
      ['Graphene and 2D materials are transitioning from laboratory to commercial products', 'Nanotechnology is transforming medicine, electronics, and energy storage', 'Additive manufacturing enables complex geometries impossible with traditional methods', 'Supply chain considerations are critical for scale-up planning'],
    ],
    'Quantum': [
      ['Quantum computing is transitioning from research to early commercial applications', 'Post-quantum cryptography migration must begin now due to harvest-now-decrypt-later threats', 'Error correction is the critical technical challenge for practical quantum advantage', 'Global investment has surpassed $30 billion across public and private sectors'],
      ['Hybrid quantum-classical algorithms offer the most practical near-term path', 'Quantum advantage has been demonstrated for specific narrow problems', 'The talent gap in quantum computing is a critical industry bottleneck', 'Organizations should experiment with cloud-based quantum platforms now'],
    ],
    'Nuclear': [
      ['Nuclear energy has the highest capacity factor of any source at 92%', 'SMRs represent the future of nuclear with modular construction and passive safety', 'Over 80 SMR designs are in development globally with first deployments by 2027-2028', 'Nuclear is essential for meeting AI data center energy demands cleanly'],
      ['Public perception remains a challenge despite dramatically improved safety records', 'The fuel cycle and waste management solutions are technically solved but politically difficult', 'Nuclear economics are competitive when lifecycle costs are considered', 'Government policy and regulatory frameworks determine deployment timelines'],
    ],
    'Energy Storage': [
      ['Energy storage deployments reached 120 GW globally in 2026', 'Battery costs have fallen below $100/kWh, making storage cost-competitive', 'Multiple chemistries will coexist, each optimized for different use cases', 'Recycling and second-life markets are essential for sustainability'],
      ['Grid-scale storage is the fastest-growing segment, driven by renewable integration', 'Sodium-ion batteries offer a cost-effective alternative to lithium for stationary storage', 'Long-duration storage technologies are critical for seasonal energy balancing', 'Virtual power plants are creating new revenue models for distributed storage'],
    ],
    'Cybersecurity': [
      ['The average breach costs $4.9 million, making prevention a high-ROI investment', 'AI-powered security tools reduce mean time to detect by 70%', 'Zero trust architecture is becoming the standard for enterprise security', 'Supply chain attacks are the fastest-growing threat vector'],
      ['Ransomware payments exceeded $30 billion globally in 2026', 'Identity is the new security perimeter in cloud-first environments', 'Post-quantum cryptography migration must begin before quantum computers arrive', 'Security awareness training remains the most cost-effective control'],
    ],
  };
  
  const bank = takeawayBank[category] || takeawayBank['AI'];
  return bank[postIndex % bank.length];
}

// Generate subtitle
function generateSubtitle(title, category, postIndex) {
  const subtitles = {
    'AI': [
      'A comprehensive analysis of the technology, applications, and strategic implications for organizations navigating the AI landscape in 2026 and beyond.',
      'Everything you need to know about the latest developments, with practical guidance for implementation and a clear-eyed assessment of challenges.',
      'An in-depth exploration of the technology, market dynamics, and real-world impact shaping the future of artificial intelligence.',
    ],
    'Robotics': [
      'A detailed guide to the technology, applications, and economics of modern robotics, with practical insights for organizations considering deployment.',
      'From fundamental principles to cutting-edge applications, this comprehensive analysis covers everything shaping the robotics industry today.',
      'An authoritative examination of the technology, market trends, and strategic considerations for robotics adoption and investment.',
    ],
    'Fusion': [
      'A thorough exploration of the science, technology, and commercial trajectory of fusion energy, with expert analysis of the path to grid power.',
      'Understanding the physics, engineering challenges, and investment landscape behind the race to commercial fusion energy.',
      'A comprehensive assessment of fusion technology, key players, and the timeline to commercially viable fusion power.',
    ],
    'Biotech': [
      'An in-depth analysis of the science, technology, and market dynamics driving innovation in biotechnology and therapeutic development.',
      'From laboratory breakthroughs to clinical applications, this guide covers the full spectrum of biotech innovation and its implications.',
      'A comprehensive overview of the technology, regulatory landscape, and investment opportunities in the rapidly evolving biotech sector.',
    ],
    'BCI': [
      'A detailed exploration of brain-computer interface technology, from neural science to clinical applications and ethical considerations.',
      'Understanding the technology, key players, and implications of direct brain-to-computer communication and its transformative potential.',
      'An authoritative guide to the science, engineering, and market dynamics of brain-computer interfaces.',
    ],
    'AV': [
      'A comprehensive analysis of autonomous vehicle technology, safety data, market dynamics, and the path to widespread deployment.',
      'From sensor technology to regulatory frameworks, this guide covers every aspect of the autonomous vehicle revolution.',
      'An in-depth examination of the technology, economics, and strategic implications of self-driving vehicles.',
    ],
    'Space': [
      'A thorough analysis of the technology, economics, and strategic implications of the new space age, from launch to orbital operations.',
      'Understanding the technology, market dynamics, and investment landscape driving the commercial space revolution.',
      'A comprehensive guide to the technology, policy, and business models shaping the future of space exploration and commerce.',
    ],
    'Materials': [
      'An in-depth exploration of advanced materials science, from fundamental properties to commercial applications and market opportunities.',
      'A detailed analysis of the technology, manufacturing processes, and economic implications of next-generation materials.',
      'Understanding the science, applications, and market dynamics of revolutionary materials that will shape the future.',
    ],
    'Quantum': [
      'A comprehensive guide to quantum computing technology, applications, and the strategic implications for organizations preparing for the quantum era.',
      'An in-depth analysis of the technology, key players, and timeline to practical quantum advantage.',
      'Understanding the physics, engineering, and market dynamics of quantum computing and its transformative potential.',
    ],
    'Nuclear': [
      'A thorough analysis of nuclear energy technology, economics, and policy, with practical guidance for understanding its role in the energy transition.',
      'From reactor design to regulatory frameworks, this guide covers every aspect of modern nuclear energy.',
      'An authoritative examination of the technology, market dynamics, and strategic considerations for nuclear energy deployment.',
    ],
    'Energy Storage': [
      'A comprehensive analysis of energy storage technology, market dynamics, and the critical role it plays in the renewable energy transition.',
      'From battery chemistry to grid-scale deployment, this guide covers the full spectrum of energy storage innovation.',
      'An in-depth examination of the technology, economics, and strategic implications of energy storage at scale.',
    ],
    'Cybersecurity': [
      'A detailed guide to the threats, technologies, and strategies defining modern cybersecurity, with practical recommendations for organizations.',
      'From attack vectors to defense frameworks, this comprehensive analysis covers the evolving cybersecurity landscape.',
      'An authoritative examination of the technology, market dynamics, and strategic considerations for cybersecurity in 2026.',
    ],
  };
  
  const bank = subtitles[category] || subtitles['AI'];
  return bank[postIndex % bank.length];
}

// Generate hero image based on category — paths match actual files in public/images/
function generateHeroImage(category, postIndex) {
  const images = {
    'AI': ['/images/ai-01-neural-brain.webp', '/images/ai-02-ml-training.webp', '/images/ai-03-llm-chat.webp', '/images/ai-04-computer-vision.webp', '/images/ai-05-chip-fabrication.webp', '/images/ai-06-drone-swarm.webp', '/images/ai-07-healthcare-diagnostic.webp', '/images/ai-08-generative-art.webp', '/images/ai-09-edge-iot.webp', '/images/ai-10-ethics-governance.webp'],
    'Robotics': ['/images/robotics-01-cobot-assembly.webp', '/images/robotics-02-surgical-robot.webp', '/images/robotics-03-warehouse-amr.webp', '/images/robotics-04-agricultural-harvest.webp', '/images/robotics-05-underwater-rov.webp', '/images/robotics-06-quadruped-rescue.webp', '/images/robotics-07-welding-arm.webp', '/images/robotics-08-exoskeleton.webp', '/images/robotics-09-mars-rover.webp', '/images/robotics-10-micro-drones.webp'],
    'Fusion': ['/images/fusion-01-tokamak-plasma.webp', '/images/fusion-02-stellarator-coils.webp', '/images/fusion-03-control-room.webp', '/images/fusion-04-laser-ignition.webp', '/images/fusion-05-tritium-fuel.webp', '/images/fusion-06-magnet-winding.webp', '/images/fusion-07-power-plant-skyline.webp', '/images/fusion-08-helium3-mining.webp', '/images/fusion-09-plasma-spectroscopy.webp', '/images/fusion-10-compact-prototype.webp'],
    'Biotech': ['/images/biotech-01-crispr-editing.webp', '/images/biotech-02-mrna-bioreactor.webp', '/images/biotech-03-lab-grown-organ.webp', '/images/biotech-04-microbiome-research.webp', '/images/biotech-05-protein-folding.webp', '/images/biotech-06-stem-cell-culture.webp', '/images/biotech-07-vertical-farm.webp', '/images/biotech-08-dna-sequencer.webp', '/images/biotech-09-personalized-genomics.webp', '/images/biotech-10-biosensor-wearable.webp'],
    'BCI': ['/images/bci-01-neural-implant-surgery.webp', '/images/bci-02-eeg-meditation.webp', '/images/bci-03-prosthetic-arm.webp', '/images/bci-04-vr-neurofeedback.webp', '/images/bci-05-brain-to-text.webp', '/images/bci-06-fmri-mapping.webp', '/images/bci-07-cochlear-implant.webp', '/images/bci-08-mind-wheelchair.webp', '/images/bci-09-sleep-lab.webp', '/images/bci-10-neural-dust.webp'],
    'AV': ['/images/av-01-self-driving-sedan.webp', '/images/av-02-robotaxi-urban.webp', '/images/av-03-lidar-pointcloud.webp', '/images/av-04-truck-platoon.webp', '/images/av-05-valet-parking.webp', '/images/av-06-delivery-van.webp', '/images/av-07-smart-intersection.webp', '/images/av-08-hands-free-commute.webp', '/images/av-09-evtol-vertiport.webp', '/images/av-10-fleet-charging.webp'],
    'Space': ['/images/space-01-orbital-station.webp', '/images/space-02-mars-habitat.webp', '/images/space-03-spacewalk-repair.webp', '/images/space-04-rocket-launch.webp', '/images/space-05-satellite-constellation.webp', '/images/space-06-lunar-construction.webp', '/images/space-07-asteroid-mining.webp', '/images/space-08-space-telescope.webp', '/images/space-09-booster-landing.webp', '/images/space-10-ice-moon-probe.webp'],
    'Materials': ['/images/materials-01-graphene-lattice.webp', '/images/materials-02-carbon-nanotube.webp', '/images/materials-03-aerogel-demo.webp', '/images/materials-04-metamaterial-cloak.webp', '/images/materials-05-3d-printed-titanium.webp', '/images/materials-06-self-healing-polymer.webp', '/images/materials-07-superconductor-levitation.webp', '/images/materials-08-perovskite-solar.webp', '/images/materials-09-nanomaterial-fab.webp', '/images/materials-10-biodegradable-plastic.webp'],
    'Quantum': ['/images/quantum-01-cryogenic-fridge.webp', '/images/quantum-02-ion-trap-processor.webp', '/images/quantum-03-entanglement-photons.webp', '/images/quantum-04-annealing-machine.webp', '/images/quantum-05-cryptography-qkd.webp', '/images/quantum-06-molecule-simulation.webp', '/images/quantum-07-topological-qubit.webp', '/images/quantum-08-internet-repeater.webp', '/images/quantum-09-error-correction.webp', '/images/quantum-10-quantum-radar.webp'],
    'Nuclear': ['/images/nuclear-01-smr-vessel.webp', '/images/nuclear-02-control-room.webp', '/images/nuclear-03-spent-fuel-casks.webp', '/images/nuclear-04-reactor-internals.webp', '/images/nuclear-05-nuclear-medicine.webp', '/images/nuclear-06-decommissioning-robot.webp', '/images/nuclear-07-molten-salt-reactor.webp', '/images/nuclear-08-cooling-towers.webp', '/images/nuclear-09-rtg-space-power.webp', '/images/nuclear-10-hybrid-reactor.webp'],
    'Energy Storage': ['/images/energy-01-grid-battery-farm.webp', '/images/energy-02-battery-rack-wiring.webp', '/images/energy-03-home-battery-garage.webp', '/images/energy-04-pumped-hydro.webp', '/images/energy-05-solid-state-lab.webp', '/images/energy-06-ev-megacharger.webp', '/images/energy-07-flow-battery-tanks.webp', '/images/energy-08-smart-grid-control.webp', '/images/energy-09-solar-microgrid.webp', '/images/energy-10-battery-repurpose.webp'],
    'Cybersecurity': ['/images/cyber-01-soc-threat-hunting.webp', '/images/cyber-02-red-team-pentest.webp', '/images/cyber-03-firewall-shield.webp', '/images/cyber-04-zero-trust-architecture.webp', '/images/cyber-05-ransomware-response.webp', '/images/cyber-06-bug-bounty.webp', '/images/cyber-07-hsm-vault.webp', '/images/cyber-08-phishing-training.webp', '/images/cyber-09-cloud-security-scan.webp', '/images/cyber-10-mfa-biometric-gate.webp'],
  };
  
  const bank = images[category] || images['AI'];
  return bank[postIndex % bank.length];
}

// Build sections for a single post
function buildSections(title, category, postIndex) {
  const h2s = generateH2s(category, title, postIndex, '');
  const sections = [];
  
  // Top image (different from heroImage)
  const topImg = generateHeroImage(category, postIndex + 1);
  sections.push({ type: 'image', src: topImg, caption: `${title}: An overview of the key concepts and developments discussed in this article.` });
  
  // Intro paragraphs (before first H2) - now split into small sections
  const intro1Sections = generateParagraphSections(title, category, 'Introduction', '', postIndex, 0);
  const intro2Sections = generateParagraphSections(title, category, 'Introduction', '', postIndex, 1);
  for (const s of intro1Sections) sections.push(s);
  for (const s of intro2Sections) sections.push(s);
  
  // Stats after intro
  sections.push({ type: 'stats', stats: generateStats(category, postIndex) });
  
  // For each H2, add content with H3s
  for (let i = 0; i < h2s.length; i++) {
    const h2 = h2s[i];
    sections.push({ type: 'h2', text: h2 });
    
    // First paragraph under H2 - split into small sections
    const h2IntroSections = generateParagraphSections(title, category, h2, '', postIndex, 0);
    for (const s of h2IntroSections) sections.push(s);
    
    // H3 subsections (3 per H2)
    const h3s = generateH3s(h2, category, postIndex, i);
    for (let j = 0; j < h3s.length; j++) {
      const h3 = h3s[j];
      sections.push({ type: 'h3', text: h3 });
      const h3Sections = generateParagraphSections(title, category, h2, h3, postIndex + i + j, j);
      for (const s of h3Sections) sections.push(s);
      
      // Add varied content types based on position
      if (j === 0) {
        // List items under first H3
        sections.push({ type: 'ul', items: generateListItems(category, h2, h3, postIndex + i, 'ul') });
      } else if (j === 1) {
        // Callout under second H3
        sections.push({ type: 'callout', ...generateCallout(category, postIndex, i) });
      } else if (j === 2) {
        // Ordered list under third H3
        sections.push({ type: 'ol', items: generateListItems(category, h2, h3, postIndex + i + 1, 'ol') });
      }
    }
    
    // Add a quote after some H2s
    if (i % 2 === 0) {
      const q = generateQuote(category, title, postIndex);
      sections.push({ type: 'quote', text: q.text, author: q.author });
    }
    
    // Add stats after some H2s
    if (i === 2) {
      sections.push({ type: 'stats', stats: generateStats(category, postIndex + 1) });
    }
    
    // Add in-content images at 3 positions spread across the article
    if (i === 1 || i === 4 || i === 6) {
      const imgBank = generateHeroImage(category, postIndex + i + 2);
      sections.push({ type: 'image', src: imgBank, caption: `${h2}: Visual overview of key concepts and implementation considerations.` });
    }
  }
  
  // Conclusion paragraph - split into small sections
  const conclusionH2 = 'Conclusion and Key Takeaways';
  sections.push({ type: 'h2', text: conclusionH2 });
  const concl1Sections = generateParagraphSections(title, category, conclusionH2, '', postIndex, 3);
  const concl2Sections = generateParagraphSections(title, category, conclusionH2, '', postIndex, 4);
  for (const s of concl1Sections) sections.push(s);
  for (const s of concl2Sections) sections.push(s);
  
  // Final callout
  sections.push({ type: 'callout', variant: 'success', title: 'The Bottom Line', text: `As the ${category.toLowerCase()} landscape continues to evolve, staying informed and taking proactive steps will position you and your organization for success. The technology is ready — the question is whether you are ready to leverage it.` });
  
  return sections;
}

// Escape text for TypeScript string
function escapeTS(text) {
  return text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Generate the full blog-posts.ts content
function generateFile() {
  let output = `/**
 * BLOG POST CONTENT
 * ─────────────────────
 * Full body content for each blog post.
 * Keyed by slug — must match slugs in blog-content.ts
 */

export interface BlogPostSection {
  type: 'h2' | 'h3' | 'p' | 'quote' | 'ul' | 'ol' | 'callout' | 'stats' | 'image';
  text?: string;
  author?: string;
  items?: string[];
  variant?: 'info' | 'warning' | 'success' | 'danger';
  title?: string;
  stats?: { label: string; value: string; change?: string }[];
  src?: string;
  caption?: string;
}

export interface BlogPostContent {
  heroImage: string;
  subtitle: string;
  keyTakeaways: string[];
  sections: BlogPostSection[];
}

export const blogPostContent: Record<string, BlogPostContent> = {
`;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const category = detectCategory(post.slug);
    const heroImage = generateHeroImage(category, i);
    const subtitle = generateSubtitle(post.title, category, i);
    const keyTakeaways = generateKeyTakeaways(post.title, category, i);
    const sections = buildSections(post.title, category, i);
    
    output += `  '${post.slug}': {\n`;
    output += `    heroImage: '${heroImage}',\n`;
    output += `    subtitle: '${escapeTS(subtitle)}',\n`;
    output += `    keyTakeaways: [\n`;
    for (const kt of keyTakeaways) {
      output += `      '${escapeTS(kt)}',\n`;
    }
    output += `    ],\n`;
    output += `    sections: [\n`;
    
    for (const s of sections) {
      if (s.type === 'p') {
        output += `      { type: 'p', text: '${escapeTS(s.text)}' },\n`;
      } else if (s.type === 'h2') {
        output += `      { type: 'h2', text: '${escapeTS(s.text)}' },\n`;
      } else if (s.type === 'h3') {
        output += `      { type: 'h3', text: '${escapeTS(s.text)}' },\n`;
      } else if (s.type === 'ul') {
        output += `      { type: 'ul', items: [\n`;
        for (const item of s.items) {
          output += `        '${escapeTS(item)}',\n`;
        }
        output += `      ]},\n`;
      } else if (s.type === 'ol') {
        output += `      { type: 'ol', items: [\n`;
        for (const item of s.items) {
          output += `        '${escapeTS(item)}',\n`;
        }
        output += `      ]},\n`;
      } else if (s.type === 'quote') {
        output += `      { type: 'quote', text: '${escapeTS(s.text)}', author: '${escapeTS(s.author)}' },\n`;
      } else if (s.type === 'callout') {
        output += `      { type: 'callout', variant: '${s.variant}', title: '${escapeTS(s.title)}', text: '${escapeTS(s.text)}' },\n`;
      } else if (s.type === 'stats') {
        output += `      { type: 'stats', stats: [\n`;
        for (const st of s.stats) {
          output += `        { label: '${escapeTS(st.label)}', value: '${escapeTS(st.value)}'${st.change ? `, change: '${escapeTS(st.change)}'` : ''} },\n`;
        }
        output += `      ]},\n`;
      } else if (s.type === 'image') {
        output += `      { type: 'image', src: '${s.src}', caption: '${escapeTS(s.caption)}' },\n`;
      }
    }
    
    output += `    ],\n`;
    output += `  },\n\n`;
    
    if ((i + 1) % 25 === 0) {
      console.log(`Generated ${i + 1}/${posts.length} posts...`);
    }
  }
  
  output += `};\n`;
  
  return output;
}

// Main
console.log(`Starting generation for ${posts.length} posts...`);
const content = generateFile();
fs.writeFileSync('src/pages/blog/blog-posts.ts', content);
console.log(`Done! Written to src/pages/blog/blog-posts.ts`);
console.log(`File size: ${(content.length / 1024).toFixed(1)} KB`);

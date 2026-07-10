/**
 * CYBERSECURITY topic CONTENT
 * ─────────────────────────────────
 * All content for the Cybersecurity topic page.
 * Edit this file to update text, topics, stats, FAQs.
 * Does NOT affect other topic pages.
 */

export const cybersecurityContent = {
  name: 'Cybersecurity',
  slug: 'cybersecurity',
  tagline: 'Protecting systems, data, and people in a digital world',
  description:
    'From zero trust architecture and AI-powered threat detection to post-quantum cryptography and cloud security — explore the frameworks, technologies, and strategies defending organizations against an evolving threat landscape where AI-driven attacks and nation-state actors are reshaping the rules of engagement.',
  icon: '🛡️',
  gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
  heroStats: [
    { value: '$215B', label: 'Global market size 2025' },
    { value: '$4.45M', label: 'Avg. cost per breach' },
    { value: '60%', label: 'Of attacks involve AI' },
    { value: '2,220', label: 'Attacks per day (avg)' },
  ],

  threatLandscapeSection: {
    title: 'The 2026 Cybersecurity Threat Landscape',
    eyebrow: 'Threat Intelligence',
    description:
      'The cybersecurity threat landscape has fundamentally shifted. AI-powered attacks, nation-state operations, and supply chain compromises are now the norm. Organizations face an average of 2,220 attacks per day — a 44% increase year-over-year — with ransomware remaining the top threat.',
    keyStats: [
      { stat: '$10.5T', label: 'Annual cybercrime cost by 2025', sublabel: 'Up from $3T in 2015' },
      { stat: '1 in 3', label: 'Businesses breached in 2025', sublabel: 'Global average' },
      { stat: '277 days', label: 'Average breach identification time', sublabel: 'Down from 287 in 2024' },
      { stat: '83%', label: 'Of breaches involve external actors', sublabel: 'Verizon DBIR 2025' },
    ],
    topThreats: [
      { threat: 'Ransomware', severity: 'Critical', trend: '+71% YoY', detail: 'Average ransom $850K; double extortion now standard; RaaS kits widely available' },
      { threat: 'AI-Powered Phishing', severity: 'High', trend: '+1,265% YoY', detail: 'LLM-generated phishing with deepfake voice/video; 60% of attacks now AI-assisted' },
      { threat: 'Supply Chain Attacks', severity: 'High', trend: '+42% YoY', detail: 'Compromising trusted vendors; SolarWinds-style attacks now routine' },
      { threat: 'Nation-State APTs', severity: 'Critical', trend: 'Steady', detail: 'China, Russia, Iran, North Korea active; critical infrastructure targeting' },
      { threat: 'Insider Threats', severity: 'Medium', trend: '+18% YoY', detail: 'Negligent insiders cause 64% of incidents; malicious insiders 23%' },
      { threat: 'Zero-Day Exploits', severity: 'High', trend: '+32% YoY', detail: 'Record 1,944 CVEs in Q1 2025; average patch time 38 days' },
    ],
  },

  zeroTrustSection: {
    title: 'Zero Trust Architecture: Never Trust, Always Verify',
    eyebrow: 'Security Framework',
    description:
      'Zero Trust has become the dominant security paradigm, replacing perimeter-based defenses with continuous verification. The US federal government mandated Zero Trust by 2024 (Executive Order 14028), and 80% of Fortune 500 companies are now implementing Zero Trust initiatives.',
    principles: [
      { title: 'Verify Explicitly', desc: 'Authenticate and authorize every access request based on identity, device, location, and risk' },
      { title: 'Least Privilege Access', desc: 'Grant minimum necessary permissions; just-in-time and just-enough access' },
      { title: 'Assume Breach', desc: 'Design systems as if attackers are already inside; segment and contain' },
      { title: 'Continuous Monitoring', desc: 'Real-time risk assessment; behavioral analytics; automated response' },
    ],
    pillars: [
      { pillar: 'Identity', desc: 'MFA, SSO, passwordless; risk-based authentication', tools: 'Okta, Microsoft Entra, Ping' },
      { pillar: 'Devices', desc: 'Endpoint posture, compliance, MDM integration', tools: 'CrowdStrike, SentinelOne, Jamf' },
      { pillar: 'Networks', desc: 'Microsegmentation; SD-WAN; encrypted traffic', tools: 'Zscaler, Illumio, Cisco' },
      { pillar: 'Applications', desc: 'API security; runtime protection; SAST/DAST', tools: 'Snyk, Wiz, Prisma Cloud' },
      { pillar: 'Data', desc: 'Classification, encryption, DLP, rights management', tools: 'Varonis, Forcepoint, Microsoft Purview' },
      { pillar: 'Infrastructure', desc: 'Cloud posture, container security, workload protection', tools: 'Wiz, Orca, Lacework' },
    ],
  },

  aiCyberSection: {
    title: 'AI in Cybersecurity: The Arms Race',
    eyebrow: 'Emerging Technology',
    description:
      'AI is transforming both attack and defense. 60% of cyberattacks in 2025 involved AI-generated content or automation. Meanwhile, AI-powered security tools are reducing breach costs by an average of $2.2 million and cutting detection time by 27%.',
    attackUses: [
      { title: 'AI-Generated Phishing', desc: 'LLMs produce convincing, personalized phishing at scale — 1,265% increase in AI phishing in 2025' },
      { title: 'Deepfake Social Engineering', desc: 'Voice and video deepfakes used for CEO fraud, impersonation, and bypassing biometric verification' },
      { title: 'Automated Vulnerability Discovery', desc: 'AI scanning for zero-days faster than patch cycles; automated exploit generation' },
      { title: 'Polymorphic Malware', desc: 'AI-generated code mutations that evade signature-based detection' },
    ],
    defenseUses: [
      { title: 'Threat Detection & Response', desc: 'ML models detecting anomalies in network traffic, user behavior, and system logs — 27% faster detection' },
      { title: 'Automated Triage', desc: 'AI sorting alerts by severity; reducing analyst workload by 70%; SOAR integration' },
      { title: 'Predictive Intelligence', desc: 'AI forecasting attack patterns; preemptive defense deployment; threat hunting at scale' },
      { title: 'Code Security', desc: 'AI-powered SAST/DAST scanning; auto-remediation suggestions; shift-left security' },
    ],
    statHighlight: 'AI-powered security tools reduce average breach cost by $2.2M (IBM Security 2025)',
  },

  cloudSecuritySection: {
    title: 'Cloud Security: CSPM, CWPP, and CNAPP',
    eyebrow: 'Industry Trend',
    description:
      'As 94% of enterprises use multi-cloud strategies, cloud security has become the fastest-growing segment at 22% CAGR. The industry has converged on CNAPP (Cloud-Native Application Protection Platforms) as the unified approach.',
    tools: [
      { topic: 'CSPM', desc: 'Cloud Security Posture Management — continuous configuration assessment, compliance monitoring', examples: 'Wiz, Prisma Cloud, Orca Security' },
      { topic: 'CWPP', desc: 'Cloud Workload Protection — runtime protection for VMs, containers, serverless', examples: 'CrowdStrike, Aqua Security, Sysdig' },
      { topic: 'CNAPP', desc: 'Unified platform combining CSPM + CWPP + DSPM + IaC scanning', examples: 'Wiz, Prisma Cloud, Microsoft Defender for Cloud' },
      { topic: 'DSPM', desc: 'Data Security Posture Management — discovering and classifying cloud data, access mapping', examples: 'Cyera, BigID, Varonis' },
    ],
    challenges: [
      'Misconfigurations cause 80% of cloud breaches — not vulnerabilities',
      'Shadow IT and unsanctioned SaaS usage expanding attack surface',
      'Identity and access management complexity across multi-cloud',
      'Container and Kubernetes security gaps — 60% of organizations lack container runtime protection',
    ],
  },

  ransomwareSection: {
    title: 'Ransomware: The $20 Billion Criminal Industry',
    eyebrow: 'Threat Deep Dive',
    description:
      'Ransomware remains the #1 cyber threat to organizations. Average ransom payments hit $850K in 2025, with total costs (including downtime, recovery, and reputational damage) averaging $4.45M per incident. Double and triple extortion are now standard.',
    stats: [
      { stat: '$850K', label: 'Average ransom payment' },
      { stat: '$4.45M', label: 'Total breach cost (avg)' },
      { stat: '71%', label: 'YoY increase in attacks' },
      { stat: '32 days', label: 'Average recovery time' },
    ],
    evolution: [
      { phase: 'Phase 1: Encryption', desc: 'Classic ransomware — encrypt files, demand ransom for decryption key' },
      { phase: 'Phase 2: Double Extortion', desc: 'Encrypt + exfiltrate — threaten to leak data if ransom unpaid' },
      { phase: 'Phase 3: Triple Extortion', desc: 'Add DDoS attacks or contact customers/partners directly' },
      { phase: 'Phase 4: RaaS Ecosystem', desc: 'Ransomware-as-a-Service — affiliate model, leak sites, negotiation platforms' },
    ],
    topGroups: [
      { group: 'LockBit', origin: 'Russia', note: 'Most prolific RaaS; 1,700+ victims; disrupted by Operation Cronos 2024 but resurged' },
      { group: 'BlackCat/ALPHV', origin: 'Russia', note: 'Rust-based; targets healthcare; FBI $10M bounty for leaders' },
      { group: 'Akira', origin: 'Unknown', note: 'Retro-themed; targets VPNs and Cisco flaws; rapid growth in 2025' },
      { group: 'RansomHub', origin: 'Unknown', note: 'Emerging 2025 leader; ex-LockBit affiliates; aggressive leak strategy' },
    ],
  },

  postQuantumSection: {
    title: 'Post-Quantum Cryptography: Preparing for Q-Day',
    eyebrow: 'Future Technology',
    description:
      'Quantum computers will break current public-key cryptography (RSA, ECC) within 10-15 years. "Harvest now, decrypt later" attacks are already occurring. NIST has finalized post-quantum cryptography standards, and organizations must begin migration now.',
    standards: [
      { name: 'ML-KEM (FIPS 203)', desc: 'Module-Lattice-Based Key Encapsulation — replaces RSA/ECDH key exchange', status: 'Finalized Aug 2024' },
      { name: 'ML-DSA (FIPS 204)', desc: 'Module-Lattice-Based Digital Signature — replaces RSA/ECDSA signatures', status: 'Finalized Aug 2024' },
      { name: 'SLH-DSA (FIPS 205)', desc: 'Stateless Hash-Based Signatures — backup option, hash-based', status: 'Finalized Aug 2024' },
      { name: 'FN-DSA (FIPS 206)', desc: 'FFT-over-NTRU-Lattice-Based Signatures — fast verification', status: 'Draft 2025' },
    ],
    timeline: [
      { year: '2024', event: 'NIST publishes first PQC standards (FIPS 203, 204, 205)' },
      { year: '2025-2027', event: 'NSA requires national security systems to begin PQC migration' },
      { year: '2028-2030', event: 'Commercial PQC adoption accelerates; "harvest now" risk peaks' },
      { year: '2030-2035', event: 'Quantum computers reach sufficient qubits — RSA-2048 breakable (Q-Day)' },
      { year: '2035+', event: 'Full PQC migration required; legacy crypto deprecated' },
    ],
    actions: [
      'Conduct cryptographic inventory — identify all RSA/ECC usage across systems',
      'Implement crypto-agility — ability to swap algorithms without code changes',
      'Prioritize long-lived data (health records, state secrets) — most at risk from "harvest now"',
      'Begin hybrid deployment — classical + post-quantum during transition period',
    ],
  },

  frameworksSection: {
    title: 'Security Frameworks & Compliance',
    eyebrow: 'Industry Standard',
    description:
      'Security frameworks provide structured approaches to managing cyber risk. Compliance requirements are expanding globally, with new regulations for critical infrastructure, AI systems, and data protection.',
    frameworks: [
      { name: 'NIST CSF 2.0', desc: 'Govern, Identify, Protect, Detect, Respond, Recover — updated 2024 with Govern function', scope: 'Universal — most adopted framework' },
      { name: 'ISO 27001:2022', desc: 'Information security management system; 93 controls in Annex A', scope: 'Global — certification standard' },
      { name: 'CIS Controls v8', desc: '18 prioritized controls; implementation groups for different org sizes', scope: 'Practical — SMB to enterprise' },
      { name: 'SOC 2 Type II', desc: 'Trust Services Criteria; Security, Availability, Confidentiality, Privacy', scope: 'US — service providers' },
      { name: 'PCI DSS 4.0', desc: 'Payment card data protection; new requirements for e-commerce', scope: 'Payment processors' },
      { name: 'EU NIS2 Directive', desc: 'Mandatory cybersecurity risk management for critical entities', scope: 'EU — critical infrastructure' },
    ],
  },

  careersSection: {
    title: 'Cybersecurity Careers & Workforce',
    eyebrow: 'Industry Insight',
    description:
      'The cybersecurity workforce gap reached 4 million professionals globally in 2025. Despite competitive salaries (avg $120K-$200K), the industry struggles to fill roles. AI and cloud security skills are in highest demand.',
    roles: [
      { role: 'Security Analyst', salary: '$70K-$110K', demand: 'High', desc: 'SOC monitoring, incident triage, threat hunting' },
      { role: 'Penetration Tester', salary: '$90K-$140K', demand: 'High', desc: 'Ethical hacking, vulnerability assessment, red teaming' },
      { role: 'Cloud Security Engineer', salary: '$120K-$180K', demand: 'Critical', desc: 'AWS/Azure/GCP security, CNAPP, IaC scanning' },
      { role: 'AI Security Specialist', salary: '$130K-$200K', demand: 'Critical', desc: 'ML model security, adversarial AI defense, AI governance' },
      { role: 'CISO', salary: '$250K-$500K+', demand: 'High', desc: 'Executive security leadership, board reporting, strategy' },
      { role: 'Incident Response Lead', salary: '$110K-$170K', demand: 'High', desc: 'Breach response, forensics, crisis management' },
    ],
    certifications: [
      { cert: 'CISSP', desc: 'Gold standard for security leadership; 5 domains', holders: '160K+' },
      { cert: 'OSCP', desc: 'Hands-on penetration testing; 24-hour exam', holders: '50K+' },
      { cert: 'CCSP', desc: 'Cloud security expertise; CCSK prerequisite', holders: '30K+' },
      { cert: 'CISM', desc: 'Security management and governance', holders: '50K+' },
    ],
  },

  investmentSection: {
    title: 'Cybersecurity Investment Landscape',
    eyebrow: 'Investment Opportunity',
    description:
      'The cybersecurity market is projected to grow from $215B (2025) to $345B by 2030 at 9.7% CAGR. Venture capital invested $12B in cybersecurity startups in 2025, with AI security and cloud security attracting the largest rounds.',
    segments: [
      { sector: 'Cloud Security', share: '$45B (21%)', trend: 'CNAPP platforms consolidating; Wiz valued at $32B' },
      { sector: 'Identity & Access', share: '$38B (18%)', trend: 'Passwordless authentication; IGA modernization' },
      { sector: 'Network Security', share: '$35B (16%)', trend: 'SASE/SSE adoption; ZTNA replacing VPN' },
      { sector: 'Endpoint Security', share: '$28B (13%)', trend: 'EDR/XDR convergence; AI-powered detection' },
      { sector: 'Application Security', share: '$22B (10%)', trend: 'DevSecOps; API security; SBOM management' },
      { sector: 'AI Security', share: '$15B (7%)', trend: 'Fastest-growing segment; 40% CAGR through 2030' },
    ],
  },

  futureOutlookSection: {
    title: 'Cybersecurity Outlook 2026-2030: What to Watch',
    eyebrow: 'Future Forecast',
    description:
      'The cybersecurity landscape will be reshaped by AI, quantum computing, and regulatory expansion. Here are the key milestones and trends defining the next five years.',
    timeline: [
      { year: '2026', events: ['EU AI Act cybersecurity requirements enforced', 'NIS2 Directive full implementation across EU', 'AI-powered attacks surpass human-crafted attacks in volume', 'Passwordless authentication reaches 50% enterprise adoption'] },
      { year: '2027-2028', events: ['PQC migration begins for critical infrastructure', 'Quantum-resistant VPNs and TLS deployed at scale', 'Autonomous SOC (AI-only tier 1 response) mainstream', 'Cyber insurance becomes mandatory for critical sectors'] },
      { year: '2029-2030', events: ['Cybersecurity market reaches $345B', 'AI security segment hits $30B', 'First major "harvest now, decrypt later" breach disclosed', 'Zero Trust reaches 80% enterprise adoption globally'] },
      { year: '2030s', events: ['Q-Day: quantum computers break RSA-2048', 'Full PQC migration required by regulation', 'AI vs AI cyber warfare normalized', 'Cybersecurity workforce gap closes through AI augmentation'] },
    ],
    growthDrivers: [
      'AI-powered attacks forcing AI-powered defense — arms race spending',
      'Regulatory expansion (EU AI Act, NIS2, SEC cyber disclosure rules)',
      'Cloud migration and multi-cloud complexity driving platform consolidation',
      'Quantum computing threat driving PQC migration investment',
      'Cyber insurance market maturing — requiring higher security baselines',
      'Critical infrastructure protection mandates from governments',
    ],
  },

  trendingSearches: [
    { term: 'Cybersecurity', volume: '1.83M/mo', growth: '+25%', type: 'Hot' },
    { term: 'Zero trust architecture', volume: '247K/mo', growth: '+180%', type: 'Breakout' },
    { term: 'AI phishing', volume: '110K/mo', growth: '+1,265%', type: 'Breakout' },
    { term: 'Ransomware', volume: '450K/mo', growth: '+71%', type: 'Hot' },
    { term: 'Post-quantum cryptography', volume: '90K/mo', growth: '+320%', type: 'Breakout' },
    { term: 'Cloud security', volume: '201K/mo', growth: '+55%', type: 'Rising' },
    { term: 'SOC 2 compliance', volume: '74K/mo', growth: '+40%', type: 'Steady' },
    { term: 'CNAPP', volume: '27K/mo', growth: '+280%', type: 'Breakout' },
    { term: 'Cyber insurance', volume: '49K/mo', growth: '+95%', type: 'Rising' },
    { term: 'Deepfake detection', volume: '39K/mo', growth: '+450%', type: 'Breakout' },
  ],

  faqSection: {
    title: 'Cybersecurity Frequently Asked Questions',
    eyebrow: 'FAQ',
    items: [
      {
        q: 'What is zero trust architecture?',
        a: 'Zero Trust is a security framework that eliminates implicit trust and continuously verifies every access request. Instead of defending a perimeter, Zero Trust authenticates and authorizes every user, device, and connection based on identity, context, and risk — regardless of network location. The core principles are: verify explicitly, use least privilege access, and assume breach.',
      },
      {
        q: 'How much does a cyberattack cost an organization?',
        a: 'The average cost of a data breach in 2025 is $4.45 million (IBM Cost of a Data Breach Report). This includes detection and escalation ($1.5M), lost business ($1.3M), notification and response ($0.6M), and post-breach remediation ($1.0M). Ransomware attacks cost even more — average total cost including ransom payment, downtime, and recovery is $4.91M per incident.',
      },
      {
        q: 'How is AI being used in cyberattacks?',
        a: 'AI is used by attackers to: (1) generate convincing phishing emails at scale (1,265% increase in AI phishing in 2025), (2) create deepfake voice and video for social engineering, (3) automate vulnerability discovery and exploit generation, (4) produce polymorphic malware that evades signature detection, and (5) scan and map target networks faster than human operators. 60% of cyberattacks in 2025 involved AI-generated content or automation.',
      },
      {
        q: 'What is the difference between CSPM, CWPP, and CNAPP?',
        a: 'CSPM (Cloud Security Posture Management) continuously assesses cloud configurations for compliance and misconfigurations. CWPP (Cloud Workload Protection Platform) provides runtime protection for VMs, containers, and serverless workloads. CNAPP (Cloud-Native Application Protection Platform) is a unified platform that combines CSPM, CWPP, DSPM (data security), and IaC scanning into a single solution — this is the industry direction.',
      },
      {
        q: 'What is post-quantum cryptography and why does it matter now?',
        a: 'Post-quantum cryptography (PQC) refers to cryptographic algorithms that are resistant to attacks by quantum computers. Current public-key crypto (RSA, ECC) will be broken by sufficiently powerful quantum computers within 10-15 years. "Harvest now, decrypt later" attacks — where adversaries steal encrypted data today to decrypt it when quantum computers arrive — are already occurring. NIST finalized PQC standards in 2024 (FIPS 203, 204, 205), and organizations should begin migration immediately.',
      },
      {
        q: 'What are the most important cybersecurity frameworks?',
        a: 'The most widely adopted frameworks are: NIST CSF 2.0 (universal, updated 2024), ISO 27001 (global certification standard), CIS Controls v8 (practical implementation), SOC 2 (US service providers), PCI DSS 4.0 (payment processing), and EU NIS2 Directive (critical infrastructure in EU). Most organizations adopt multiple frameworks — NIST CSF for strategy, ISO 27001 for certification, and CIS for implementation.',
      },
      {
        q: 'How can I start a career in cybersecurity?',
        a: 'Key paths: (1) Security Analyst — start with CompTIA Security+ and Network+ certifications; (2) Penetration Tester — pursue OSCP certification and practice on HackTheBox/TryHackMe; (3) Cloud Security — get CCSP or cloud provider certifications (AWS Security, Azure Security); (4) AI Security — emerging field requiring ML knowledge plus security fundamentals. The workforce gap is 4 million professionals, so demand is high. Average salaries range from $70K (entry-level analyst) to $500K+ (CISO).',
      },
      {
        q: 'What is ransomware-as-a-service (RaaS)?',
        a: 'RaaS is a business model where ransomware developers create the malware and lease it to affiliates who carry out attacks. Developers take 20-30% of ransom payments; affiliates keep the rest. This has professionalized ransomware — affiliates get polished malware, negotiation platforms, leak sites, and customer support. Major RaaS operations include LockBit, BlackCat/ALPHV, and RansomHub. The model has made ransomware accessible to non-technical criminals.',
      },
      {
        q: 'What is deepfake detection and why is it important?',
        a: 'Deepfake detection uses AI to identify AI-generated synthetic media — fake videos, voice clones, and manipulated images. Searches for deepfake detection grew 450% YoY as deepfakes became weaponized for fraud, political disinformation, and celebrity scams. Detection methods include analyzing facial micro-expressions, blood flow patterns, audio artifacts, and metadata inconsistencies. Major platforms like Microsoft, Google, and Meta are deploying deepfake detection tools, but the arms race between generation and detection AI is accelerating.' },
      {
        q: 'What is the cybersecurity workforce gap?', a: 'The global cybersecurity workforce gap is approximately 4 million professionals, according to ISC2. Despite adding 440K workers in 2025, demand continues to outpace supply. The most critical shortages are in cloud security, AI security, and threat intelligence. Organizations are addressing the gap through apprenticeships, reskilling programs, AI-augmented security tools that amplify analyst productivity, and competitive compensation. Average salaries range from $70K (entry-level) to $500K+ (CISO at large enterprises).' },
    ],
  },

  relatedArticles: [
    { title: 'Zero Trust Architecture: A Complete Guide', href: '/blog/zero-trust-guide', date: '2026-07-01', excerpt: 'The security model every organization should understand.' },
    { title: 'Ransomware 2026: Trends, Attacks, and Defenses', href: '/blog/ransomware-2026', date: '2026-06-28', excerpt: 'The ransomware landscape is evolving — here is what to watch.' },
    { title: 'AI vs AI: The Cybersecurity Arms Race', href: '/blog/ai-cybersecurity-arms-race', date: '2026-06-20', excerpt: 'Both attackers and defenders are using AI. Who is winning?' },
    { title: 'Post-Quantum Cryptography: Preparing for Q-Day', href: '/blog/post-quantum-crypto', date: '2026-06-15', excerpt: 'Quantum computers will break current encryption. Is your organization ready?' },
    { title: 'Cloud Security: The CNAPP Revolution', href: '/blog/cnapp-revolution', date: '2026-06-10', excerpt: 'How unified cloud security platforms are changing the game.' },
    { title: 'Cybersecurity Careers 2026: Skills in Demand', href: '/blog/cybersecurity-careers-2026', date: '2026-06-05', excerpt: 'The workforce gap is 4 million. Which roles are most needed?' },
  ],
};

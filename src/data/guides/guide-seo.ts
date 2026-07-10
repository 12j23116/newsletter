/**
 * GUIDE SEO METADATA
 * ───────────────────
 * Per-guide SEO-optimized meta titles, descriptions, and keywords.
 * metaTitle: ≤60 chars (brand suffix added by BaseLayout)
 * metaDescription: 150–160 chars
 * keywords: comma-separated, SEO-targeted
 */

export interface GuideSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const guideSEO: Record<string, GuideSEO> = {
  // ─── AI & ML ───────────────────
  'how-to-build-ai-agents': {
    metaTitle: 'Build Production AI Agents 2026: LangChain & CrewAI',
    metaDescription: 'Step-by-step guide to building production AI agents with LangChain, CrewAI, and AutoGen. Learn tool use, memory, multi-step workflows, and autonomous agent deployment.',
    keywords: 'AI agents, LangChain, CrewAI, AutoGen, autonomous agents, LLM agents, agent workflows, AI agent production, multi-agent systems',
  },
  'how-to-implement-rag-production': {
    metaTitle: 'RAG in Production: 7 Architecture Patterns with Code',
    metaDescription: 'Compare 7 RAG architecture patterns — naive, advanced, multi-modal, graph-based, hybrid, self-correcting, and agentic — with production code examples and benchmarks.',
    keywords: 'RAG, retrieval augmented generation, RAG architecture, RAG production, graph RAG, multimodal RAG, agentic RAG, LLM retrieval',
  },
  'how-to-fine-tune-llms': {
    metaTitle: 'Fine-Tune LLMs: LoRA, QLoRA & Full Fine-Tuning Guide',
    metaDescription: 'Complete guide to fine-tuning large language models for domain-specific tasks. Compare LoRA, QLoRA, and full fine-tuning with code examples, costs, and performance.',
    keywords: 'fine-tune LLM, LoRA, QLoRA, LLM fine-tuning, domain adaptation, PEFT, low-rank adaptation, language model training',
  },
  'how-to-deploy-edge-ai': {
    metaTitle: 'Deploy Edge AI: Quantization, Pruning & ONNX for IoT',
    metaDescription: 'Practical guide to deploying AI models on mobile, IoT, and embedded devices. Covers quantization, pruning, ONNX conversion, with latency and memory benchmarks.',
    keywords: 'edge AI, AI deployment, model quantization, ONNX, edge inference, IoT AI, mobile AI, model pruning, embedded AI',
  },
  'how-to-master-prompt-engineering': {
    metaTitle: 'Prompt Engineering Guide: Zero-Shot to ReAct & CoT',
    metaDescription: 'Master prompt engineering from zero-shot basics to advanced chain-of-thought, ReAct patterns, and reasoning chains. Practical techniques with examples for LLMs.',
    keywords: 'prompt engineering, chain of thought, ReAct prompting, zero-shot, few-shot, LLM prompting, prompt patterns, AI prompts',
  },
  'how-to-evaluate-llms': {
    metaTitle: 'Evaluate LLMs: Metrics, Benchmarks & Hallucination',
    metaDescription: 'How to evaluate large language models — automated metrics, human evaluation frameworks, hallucination detection methods, and production monitoring best practices.',
    keywords: 'LLM evaluation, LLM metrics, hallucination detection, LLM benchmarks, model evaluation, AI evaluation, LLM monitoring',
  },
  'how-to-implement-ai-safety': {
    metaTitle: 'AI Safety: Alignment, RLHF & EU AI Act Compliance',
    metaDescription: 'Implement AI safety with alignment techniques, RLHF, constitutional AI, and EU AI Act compliance. Covers red teaming, governance, and safety for production systems.',
    keywords: 'AI safety, AI alignment, RLHF, EU AI Act, AI governance, red teaming, constitutional AI, AI compliance, AI regulation',
  },
  'how-to-build-multimodal-ai': {
    metaTitle: 'Build Multimodal AI: Vision-Language & Cross-Modal',
    metaDescription: 'Step-by-step guide to building multimodal AI systems — vision-language models, audio fusion, cross-modal reasoning, and multi-sensor data processing with code.',
    keywords: 'multimodal AI, vision language models, cross-modal reasoning, multimodal fusion, VLM, multimodal deep learning, audio visual AI',
  },

  // ─── Cybersecurity ───────────────────
  'how-to-implement-zero-trust': {
    metaTitle: 'Zero Trust Architecture: 5-Phase Roadmap for 2026',
    metaDescription: 'Complete Zero Trust implementation plan for 2026. Transition from VPN-based security with 5 phases covering identity, network, data, and continuous verification.',
    keywords: 'zero trust, zero trust architecture, NIST zero trust, zero trust implementation, network security, identity verification, zero trust roadmap',
  },
  'how-to-migrate-to-pqc': {
    metaTitle: 'Post-Quantum Cryptography Migration: CISO Guide',
    metaDescription: 'Step-by-step guide for migrating from RSA/ECC to NIST-approved post-quantum cryptography before Q-Day 2030. Covers crypto-agility and harvest-now-decrypt-later threats.',
    keywords: 'post-quantum cryptography, PQC, Q-Day, NIST PQC, crypto-agility, quantum threat, RSA migration, lattice cryptography, CISO',
  },
  'how-to-build-ransomware-response': {
    metaTitle: 'Ransomware Response Playbook: Detection to Recovery',
    metaDescription: 'Build a ransomware incident response playbook — detection, containment, eradication, and recovery. Step-by-step procedures for ransomware attacks in 2026.',
    keywords: 'ransomware response, incident response, ransomware playbook, ransomware recovery, cyber incident response, ransomware detection',
  },
  'how-to-secure-supply-chain': {
    metaTitle: 'Secure Software Supply Chain: SBOMs & SLSA Guide',
    metaDescription: 'Secure your software supply chain with SBOMs, SLSA levels, dependency scanning, and third-party risk management. Practical implementation guide for DevSecOps.',
    keywords: 'software supply chain security, SBOM, SLSA, dependency scanning, DevSecOps, third-party risk, supply chain attack prevention',
  },
  'how-to-implement-homomorphic-encryption': {
    metaTitle: 'Homomorphic Encryption: FHE, CKKS & BGV Explained',
    metaDescription: 'Benchmark report comparing fully homomorphic encryption schemes — CKKS, BGV, and FHE — across compute, memory, and latency metrics for privacy-preserving computation.',
    keywords: 'homomorphic encryption, FHE, CKKS, BGV, privacy-preserving computation, encrypted computation, FHE benchmarks, secure computation',
  },
  'how-to-harden-cloud-security': {
    metaTitle: 'Cloud Security Hardening: AWS, Azure & GCP Best Practices',
    metaDescription: 'Harden cloud infrastructure across AWS, Azure, and GCP with security best practices, compliance frameworks, and configuration guides for production environments.',
    keywords: 'cloud security, AWS security, Azure security, GCP security, cloud hardening, cloud compliance, CIS benchmarks, cloud security best practices',
  },

  // ─── Space ───────────────────
  'how-satellite-constellations-work': {
    metaTitle: 'Satellite Constellations: Starlink, Kuiper & LEO Race',
    metaDescription: 'How Starlink, Kuiper, and OneWeb design orbital planes for global broadband coverage — shells, phasing, capacity, and the LEO satellite constellation race.',
    keywords: 'satellite constellations, Starlink, Kuiper, LEO satellites, satellite broadband, orbital planes, OneWeb, satellite internet',
  },
  'how-to-understand-reusable-rockets': {
    metaTitle: 'Reusable Rocket Economics: $10,000/kg to $200/kg',
    metaDescription: 'Analysis of reusable rocket launch cost trends from $10,000/kg to $200/kg. Compare Falcon 9, Starship, Neutron, and the economics of reusable launch vehicles.',
    keywords: 'reusable rockets, launch costs, Falcon 9, Starship, rocket reusability, launch economics, Neutron rocket, space launch costs',
  },
  'how-lunar-economy-works': {
    metaTitle: 'Lunar Economy: Artemis, ISRU & Cislunar Space Race',
    metaDescription: 'Comprehensive overview of 15+ lunar missions, in-situ resource utilization, cislunar space domain awareness, and the emerging lunar economy driven by Artemis.',
    keywords: 'lunar economy, Artemis, ISRU, cislunar, lunar missions, moon mining, space resources, lunar surface, cislunar economy',
  },
  'how-to-calculate-orbital-mechanics': {
    metaTitle: 'Orbital Mechanics: Delta-v, Hohmann & Gravity Assists',
    metaDescription: 'The physics of spaceflight — from orbital maneuvers to interplanetary trajectories. Learn delta-v budgets, Hohmann transfers, and gravity assists with worked examples.',
    keywords: 'orbital mechanics, delta-v, Hohmann transfer, gravity assist, orbital maneuvers, astrodynamics, spaceflight mechanics, trajectory design',
  },
  'how-to-mitigate-space-debris': {
    metaTitle: 'Space Debris Mitigation: Tracking & Removal Tech',
    metaDescription: 'The growing threat of orbital debris and technologies being developed to track, avoid, and actively remove space debris for long-term orbital sustainability.',
    keywords: 'space debris, orbital debris, space sustainability, debris tracking, active debris removal, Kessler syndrome, space junk',
  },

  // ─── Biotech ───────────────────
  'how-to-use-crispr-gene-editing': {
    metaTitle: 'CRISPR Gene Editing: Casgevy to Base & Prime Editing',
    metaDescription: 'Understand how CRISPR works — from FDA-approved Casgevy for sickle cell to next-gen base and prime editing, delivery methods, and the ethical landscape.',
    keywords: 'CRISPR, gene editing, Casgevy, base editing, prime editing, CRISPR-Cas9, gene therapy, genetic engineering, CRISPR delivery',
  },
  'how-mrna-platforms-work': {
    metaTitle: 'mRNA Platforms: Cancer Vaccines & Rare Disease Therapies',
    metaDescription: 'Guide to mRNA platforms in development — cancer vaccines, rare diseases, autoimmune treatments, and next-generation RNA modalities beyond COVID-19.',
    keywords: 'mRNA, mRNA platforms, cancer vaccines, RNA therapeutics, mRNA technology, rare disease, mRNA delivery, lipid nanoparticles',
  },
  'how-to-choose-gene-therapy-delivery': {
    metaTitle: 'Gene Therapy Delivery: AAV vs Lipid Nanoparticles',
    metaDescription: 'How gene therapies reach target cells — compare AAV vectors, lipid nanoparticles, and emerging delivery platforms with efficacy, safety, and cost analysis.',
    keywords: 'gene therapy delivery, AAV vectors, lipid nanoparticles, gene delivery, viral vectors, AAV serotypes, gene therapy platforms',
  },
  'how-to-scale-bioreactors': {
    metaTitle: 'Scale Bioreactors: From 1L Bench to 10,000L Commercial',
    metaDescription: 'Practical guide to scaling cell culture from bench to commercial — parameters, challenges, continuous manufacturing, and cost optimization for bioproduction.',
    keywords: 'bioreactor scale-up, bioprocessing, cell culture, continuous manufacturing, bioreactor design, scale-up bioproduction, GMP manufacturing',
  },
  'how-to-navigate-biotech-regulatory': {
    metaTitle: 'Biotech Regulatory Pathways: FDA, EMA & PMDA Guide',
    metaDescription: 'Navigate the regulatory landscape for biotech products across major global markets — FDA, EMA, PMDA, and emerging frameworks for cell and gene therapies.',
    keywords: 'biotech regulatory, FDA, EMA, PMDA, regulatory pathways, gene therapy regulation, biotech compliance, drug approval process',
  },

  // ─── Nuclear ───────────────────
  'how-to-evaluate-smr-designs': {
    metaTitle: 'SMR Designs Compared: 8 Leading Small Modular Reactors',
    metaDescription: 'Compare 8 leading SMR designs — BWRX-300, Natrium, Linglong One, and more. Coolant type, fuel, power output, cost, and regulatory approval status.',
    keywords: 'small modular reactors, SMR, BWRX-300, Natrium, nuclear reactors, SMR designs, modular nuclear, advanced nuclear, SMR comparison',
  },
  'how-to-understand-gen-iv-reactors': {
    metaTitle: 'Generation IV Reactors: 6 Advanced Nuclear Technologies',
    metaDescription: 'Guide to 6 Gen IV reactor types — molten salt, gas-cooled, sodium-cooled, lead-cooled, supercritical water, and their data center power applications.',
    keywords: 'Generation IV reactors, Gen IV nuclear, molten salt reactor, sodium-cooled reactor, advanced nuclear, nuclear technology, reactor types',
  },
  'how-nuclear-fuel-cycle-works': {
    metaTitle: 'Nuclear Fuel Cycle: From Mining to Disposal',
    metaDescription: 'The complete nuclear fuel cycle explained — uranium mining, enrichment, fuel fabrication, spent fuel management, and disposal pathways for nuclear power.',
    keywords: 'nuclear fuel cycle, uranium mining, uranium enrichment, nuclear fuel, spent fuel, nuclear waste, fuel fabrication, nuclear fuel supply',
  },
  'how-to-secure-haleu-fuel': {
    metaTitle: 'HALEU Fuel Supply: Advanced Reactor Bottleneck',
    metaDescription: 'Global map of HALEU production facilities, enrichment capacity, and the supply chain bottleneck threatening 10+ GW of advanced reactor deployments.',
    keywords: 'HALEU, high-assay low-enriched uranium, nuclear fuel supply, uranium enrichment, advanced reactors, nuclear fuel cycle, HALEU production',
  },

  // ─── Energy Storage ───────────────────
  'how-to-evaluate-solid-state-batteries': {
    metaTitle: 'Solid-State Batteries: Chemistry, Manufacturing & Timeline',
    metaDescription: 'Tracker for 20+ solid-state battery companies — chemistry, energy density, manufacturing readiness, and production timeline for next-gen EV batteries.',
    keywords: 'solid-state batteries, battery technology, EV batteries, energy density, battery manufacturing, solid electrolyte, battery companies',
  },
  'how-to-understand-grid-storage': {
    metaTitle: 'Grid Energy Storage: Lithium-ion, Flow & Pumped Hydro',
    metaDescription: 'Understanding grid-scale energy storage technologies — lithium-ion, flow batteries, pumped hydro — their economics, and the COP29 sixfold capacity target.',
    keywords: 'grid storage, energy storage, lithium-ion batteries, flow batteries, pumped hydro, grid-scale storage, battery storage, BESS',
  },
  'how-to-build-virtual-power-plants': {
    metaTitle: 'Virtual Power Plants: DER Aggregation & Grid Services',
    metaDescription: 'Step-by-step guide to VPP architecture — DER aggregation, grid services, AI-driven optimization, battery passport compliance, and regulatory frameworks.',
    keywords: 'virtual power plants, VPP, DER aggregation, grid services, distributed energy resources, VPP architecture, demand response',
  },
  'how-to-compare-hydrogen-storage': {
    metaTitle: 'Hydrogen Storage: Compressed, Liquid & Solid-State Methods',
    metaDescription: 'Compare hydrogen storage approaches — compression, liquefaction, metal hydrides, chemical carriers, and LOHCs for stationary and mobile hydrogen applications.',
    keywords: 'hydrogen storage, compressed hydrogen, liquid hydrogen, metal hydrides, LOHC, hydrogen carriers, hydrogen energy, H2 storage',
  },

  // ─── Robotics ───────────────────
  'how-to-get-started-ros2': {
    metaTitle: 'ROS2 Beginner Guide: Nodes, Topics & Services',
    metaDescription: 'Get started with ROS2 — the middleware powering modern robots. Learn nodes, topics, services, actions, and launch files with practical code examples.',
    keywords: 'ROS2, robot operating system, ROS2 tutorial, robotics programming, ROS2 nodes, ROS2 topics, robot middleware, ROS2 services',
  },
  'how-to-control-robot-arms': {
    metaTitle: 'Robot Arm Control: Kinematics, Dynamics & Force Feedback',
    metaDescription: 'Master robot arm control — forward and inverse kinematics, Jacobians, PID controllers, and force feedback for robotic manipulation and industrial automation.',
    keywords: 'robot arm control, inverse kinematics, robot dynamics, Jacobian, PID controller, force feedback, robotic manipulation, robot arm',
  },
  'how-to-implement-slam': {
    metaTitle: 'SLAM Implementation: Real-Time Mapping for Robots',
    metaDescription: 'Simultaneous Localization and Mapping explained — LiDAR SLAM, visual SLAM, and path planning algorithms for mobile robots and autonomous navigation.',
    keywords: 'SLAM, simultaneous localization and mapping, LiDAR SLAM, visual SLAM, robot mapping, autonomous navigation, SLAM algorithms',
  },
  'how-to-build-humanoid-robots': {
    metaTitle: 'Humanoid Robots: Tesla Optimus to Whole-Body Control',
    metaDescription: 'The engineering behind humanoid robots — ZMP, MPC, whole-body control, and Tesla Optimus, Figure, Atlas, and Unitree architectures with BOM cost analysis.',
    keywords: 'humanoid robots, Tesla Optimus, Figure robot, Atlas robot, whole-body control, bipedal robotics, ZMP, humanoid robot design',
  },
  'how-to-ensure-robot-safety': {
    metaTitle: 'Robot Safety Standards: ISO 10218 & ISO/TS 15066',
    metaDescription: 'Collaborative robot safety — risk assessment, safety-rated stops, speed monitoring, and force limiting for human-robot collaboration per ISO standards.',
    keywords: 'robot safety, ISO 10218, ISO/TS 15066, cobot safety, collaborative robots, robot risk assessment, safety-rated stops, robot safety standards',
  },

  // ─── Fusion ───────────────────
  'how-to-understand-tokamak-physics': {
    metaTitle: 'Tokamak Physics: Plasma Confinement & Magnetic Fields',
    metaDescription: 'Understand the tokamak — the leading fusion device design. Learn plasma physics, magnetic confinement, key parameters, and the path to fusion energy.',
    keywords: 'tokamak, fusion energy, plasma confinement, magnetic confinement, fusion physics, ITER, tokamak design, fusion reactor',
  },
  'how-to-compare-fusion-approaches': {
    metaTitle: 'Fusion Approaches Compared: Tokamak vs Stellarator vs HTS',
    metaDescription: 'Compare tokamak, stellarator, and HTS compact fusion approaches — magnetic topology, plasma stability, engineering trade-offs, and commercial viability.',
    keywords: 'fusion approaches, tokamak, stellarator, HTS magnets, compact fusion, fusion energy, fusion reactor design, magnetic confinement',
  },
  'how-inertial-confinement-fusion-works': {
    metaTitle: 'Inertial Confinement Fusion: Lasers, Targets & Ignition',
    metaDescription: 'Laser-driven fusion explained — hohlraum design, implosion physics, NIF ignition, and the path to achieving fusion energy gain greater than one.',
    keywords: 'inertial confinement fusion, ICF, laser fusion, NIF, hohlraum, fusion ignition, fusion target, fusion energy gain',
  },
  'how-to-engineer-fusion-materials': {
    metaTitle: 'Fusion Materials Engineering: Surviving 14 MeV Neutrons',
    metaDescription: 'Materials for the extreme fusion environment — neutron damage, tritium breeding blankets, first-wall solutions, and the materials science of fusion power.',
    keywords: 'fusion materials, neutron damage, tritium breeding, blanket design, first wall materials, fusion reactor materials, radiation damage',
  },
  'how-fusion-will-reach-the-grid': {
    metaTitle: 'Fusion to Grid: From Q>1 to Commercial Power Plants',
    metaDescription: 'The roadmap from scientific breakeven to commercial fusion power — private fusion companies, regulatory frameworks, economics, and grid integration timeline.',
    keywords: 'fusion power, commercial fusion, fusion grid, fusion economics, private fusion companies, fusion roadmap, fusion power plant',
  },

  // ─── BCI ───────────────────
  'how-to-process-neural-signals': {
    metaTitle: 'Neural Signal Processing: Raw EEG to Decoded Intentions',
    metaDescription: 'Process EEG and neural signals — filtering, artifact removal, ICA, feature extraction, and deep learning classification pipelines for brain-computer interfaces.',
    keywords: 'neural signal processing, EEG, brain-computer interface, BCI, signal filtering, ICA, neural decoding, EEG classification',
  },
  'how-to-choose-bci-electrodes': {
    metaTitle: 'BCI Electrodes: Wet EEG to Utah Arrays Compared',
    metaDescription: 'Compare BCI electrode types — wet and dry EEG, ECoG, Utah arrays, and neural dust. Trade-offs in resolution, invasiveness, and longevity for BCI design.',
    keywords: 'BCI electrodes, EEG electrodes, ECoG, Utah array, neural electrodes, brain-computer interface, neural dust, electrode design',
  },
  'how-to-build-motor-imagery-bci': {
    metaTitle: 'Motor Imagery BCI: Decoding Movement Intentions',
    metaDescription: 'Build a motor imagery brain-computer interface — CSP filters, common spatial patterns, and real-time classification of movement intentions from EEG signals.',
    keywords: 'motor imagery BCI, brain-computer interface, CSP filter, EEG classification, movement intention decoding, BCI paradigm, motor imagery',
  },
  'how-to-evaluate-invasive-bci': {
    metaTitle: 'Invasive BCI Implants: Neuralink, Synchron & Clinical Trials',
    metaDescription: 'Deep dive into invasive brain-computer interfaces — electrode design, signal decoding, surgical implantation, and the latest human clinical trials.',
    keywords: 'invasive BCI, Neuralink, Synchron, BCI implants, brain-computer interface clinical trials, neural implant, BCI electrode design',
  },
  'how-to-navigate-bci-regulatory': {
    metaTitle: 'BCI Regulatory & Ethics: FDA Pathway & Neural Privacy',
    metaDescription: 'Navigate the ethical and regulatory landscape for brain-computer interfaces — FDA breakthrough device pathway, neural data privacy, and neuroethics frameworks.',
    keywords: 'BCI regulation, FDA breakthrough device, neural data privacy, neuroethics, BCI ethics, brain-computer interface regulation, neural privacy',
  },

  // ─── Autonomous Vehicles ───────────────────
  'how-to-build-av-perception-stack': {
    metaTitle: 'AV Perception Stack: Cameras, Radar & LiDAR Fusion',
    metaDescription: 'Build a production autonomous vehicle perception system — multi-sensor fusion, object detection, and sensor calibration for self-driving applications.',
    keywords: 'AV perception, autonomous vehicle perception, sensor fusion, LiDAR, camera radar fusion, self-driving perception, 3D object detection',
  },
  'how-to-master-lidar-sensor-fusion': {
    metaTitle: 'LiDAR & Sensor Fusion: Point Clouds to Driving Decisions',
    metaDescription: 'Master LiDAR technology — point cloud processing, sensor fusion with cameras and radar, and 3D object detection for autonomous vehicle systems.',
    keywords: 'LiDAR, sensor fusion, point cloud processing, 3D object detection, autonomous vehicles, LiDAR perception, multi-sensor fusion',
  },
  'how-to-plan-av-routes': {
    metaTitle: 'AV Route Planning: A*, RRT* & Behavior Prediction',
    metaDescription: 'Route planning and trajectory optimization for autonomous vehicles — A*, RRT*, model predictive control, and behavior prediction for other traffic agents.',
    keywords: 'AV route planning, A* algorithm, RRT*, trajectory optimization, model predictive control, behavior prediction, autonomous driving',
  },
  'how-to-validate-av-safety': {
    metaTitle: 'AV Safety Validation: Simulation, Shadow Mode & SOTIF',
    metaDescription: 'How to validate autonomous vehicles — scenario testing, simulation fleets, SOTIF (ISO 21448), and statistical safety claims for self-driving deployment.',
    keywords: 'AV safety validation, SOTIF, ISO 21448, autonomous vehicle safety, simulation testing, shadow mode, self-driving safety, AV validation',
  },
  'how-to-deploy-av-fleet': {
    metaTitle: 'AV Fleet Deployment: Operations, Teleop & Ride-Hailing',
    metaDescription: 'Operate an autonomous vehicle fleet at scale — teleoperation, remote assistance, OTA updates, and ride-hailing integration for robotaxi deployment.',
    keywords: 'AV fleet deployment, robotaxi, teleoperation, autonomous vehicle operations, OTA updates, fleet management, ride-hailing, self-driving fleet',
  },

  // ─── Materials ───────────────────
  'how-to-design-metamaterials': {
    metaTitle: 'Metamaterials Design: Engineering Beyond Natural Properties',
    metaDescription: 'Design metamaterials with properties not found in nature — negative refraction, cloaking, programmable matter, and active metamaterials for advanced applications.',
    keywords: 'metamaterials, negative refraction, cloaking, programmable matter, metamaterial design, electromagnetic metamaterials, active metamaterials',
  },
  'how-to-work-with-2d-materials': {
    metaTitle: '2D Materials Beyond Graphene: TMDs, hBN & MXenes',
    metaDescription: 'Explore the 2D materials universe — transition metal dichalcogenides, hexagonal boron nitride, and MXenes for electronics, energy, and sensing applications.',
    keywords: '2D materials, TMDs, hBN, MXenes, graphene alternatives, transition metal dichalcogenides, 2D semiconductors, nanomaterials',
  },
  'how-to-use-computational-materials-discovery': {
    metaTitle: 'Computational Materials Discovery: DFT, ML & Screening',
    metaDescription: 'Accelerate materials discovery — density functional theory, machine learning potentials, and automated high-throughput screening pipelines for new materials.',
    keywords: 'computational materials discovery, DFT, density functional theory, materials informatics, ML potentials, high-throughput screening, materials design',
  },
  'how-to-select-additive-manufacturing-materials': {
    metaTitle: 'Additive Manufacturing Materials: Polymers, Metals & Ceramics',
    metaDescription: 'Materials for 3D printing — photopolymers, thermoplastic filaments, metal powders, and ceramic pastes with property data for additive manufacturing selection.',
    keywords: 'additive manufacturing materials, 3D printing materials, metal powders, photopolymers, thermoplastic filaments, ceramic 3D printing, AM materials',
  },
  'how-to-apply-smart-materials': {
    metaTitle: 'Smart Materials: Shape Memory, Piezoelectrics & Self-Healing',
    metaDescription: 'Materials that respond to stimuli — shape memory alloys, piezoelectric ceramics, self-healing polymers, and electroactive polymers for smart applications.',
    keywords: 'smart materials, shape memory alloys, piezoelectric ceramics, self-healing polymers, electroactive polymers, responsive materials, functional materials',
  },

  // ─── Quantum ───────────────────
  'how-to-understand-quantum-computing': {
    metaTitle: 'Quantum Computing Guide: Qubits, Gates & Circuits',
    metaDescription: 'Start your quantum computing journey — superposition, entanglement, quantum gates, and building your first quantum circuit with practical examples.',
    keywords: 'quantum computing, qubits, quantum gates, quantum circuits, superposition, entanglement, quantum programming, quantum basics',
  },
  'how-to-implement-quantum-algorithms': {
    metaTitle: 'Quantum Algorithms: Shor, Grover & VQE in Practice',
    metaDescription: 'Implement key quantum algorithms — Shor factoring, Grover search, VQE chemistry, and QAOA optimization with code examples and quantum circuit diagrams.',
    keywords: 'quantum algorithms, Shor algorithm, Grover search, VQE, QAOA, quantum programming, quantum circuit, quantum optimization',
  },
  'how-to-build-quantum-error-correction': {
    metaTitle: 'Quantum Error Correction: Surface Codes & Logical Qubits',
    metaDescription: 'The path to fault-tolerant quantum computing — surface codes, stabilizer formalism, and logical qubit architectures for reliable quantum computation.',
    keywords: 'quantum error correction, surface codes, logical qubits, fault-tolerant quantum computing, stabilizer codes, QEC, quantum fault tolerance',
  },
  'how-to-compare-quantum-hardware': {
    metaTitle: 'Quantum Hardware Compared: Superconducting, Ion & Photonic',
    metaDescription: 'Compare quantum hardware platforms — superconducting qubits (IBM, Google), trapped ions (IonQ, Quantinuum), neutral atoms, and photonic quantum computers.',
    keywords: 'quantum hardware, superconducting qubits, trapped ions, photonic quantum, IBM quantum, IonQ, Quantinuum, quantum computer comparison',
  },
  'how-to-prepare-for-post-quantum-cryptography': {
    metaTitle: 'Post-Quantum Cryptography: Surviving the Quantum Threat',
    metaDescription: 'How quantum computers break RSA/ECC and what to do about it — NIST PQC standards, lattice cryptography, and migration strategies before Q-Day arrives.',
    keywords: 'post-quantum cryptography, PQC, quantum threat, NIST PQC standards, lattice cryptography, RSA vulnerability, Q-Day, quantum-safe encryption',
  },
};

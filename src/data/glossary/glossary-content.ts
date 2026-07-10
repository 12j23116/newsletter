export interface Glossarytopic {
  id: string;
  name: string;
  icon: string;
  svg: string;
  color: string;
  img: string;
}

export interface GlossaryTerm {
  t: string;
  a?: string;
  c: string;
  d: string;
  r: string[];
}

export const glossarytopics: Glossarytopic[] = [
  { id: 'AI', name: 'Artificial Intelligence', icon: '🧠', svg: 'M12 2a3 3 0 0 0-3 3v1H7a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h2v-1a3 3 0 0 1 6 0v1h2a3 3 0 0 0 3-3v-1a3 3 0 0 0 0-6V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3zM9 11h.01M15 11h.01M9 15c1 1 2 1 3 1s2 0 3-1', color: '#3b82f6', img: '/images/001-ai-neural-agent-cluster.webp' },
  { id: 'Robotics', name: 'Robotics', icon: '🤖', svg: 'M12 2v2M8 6h8M7 6v6a5 5 0 0 0 10 0V6M9 16v4M15 16v4M5 10H3M21 10h-2M12 18a5 5 0 0 0 5-5M12 18a5 5 0 0 1-5-5', color: '#ec4899', img: '/images/002-robotics-precision-lab.webp' },
  { id: 'Fusion', name: 'Fusion Energy', icon: '⚛️', svg: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', color: '#f59e0b', img: '/images/003-fusion-tokamak-reactor.webp' },
  { id: 'Biotech', name: 'Biotechnology', icon: '🧬', svg: 'M6 3v18M18 3v18M6 7c4 0 8 2 12 2M6 11c4 0 8 2 12 2M6 15c4 0 8 2 12 2M10 3a4 4 0 0 0 0 8M14 21a4 4 0 0 1 0-8', color: '#10b981', img: '/images/004-biotech-gene-editing.webp' },
  { id: 'BCI', name: 'Brain-Computer Interfaces', icon: '🔌', svg: 'M9 2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M7 12v4a5 5 0 0 0 10 0v-4M12 16v6M9 22h6', color: '#06b6d4', img: '/images/005-bci-neural-link.webp' },
  { id: 'AV', name: 'Autonomous Vehicles', icon: '🚗', svg: 'M5 17h14M5 17l-2-5 3-5h12l3 5-2 5M5 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2M19 17v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2M3 12h18M8 14h.01M16 14h.01', color: '#8b5cf6', img: '/images/006-av-autonomous-vehicle.webp' },
  { id: 'Space', name: 'Space Technology', icon: '🚀', svg: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5', color: '#0ea5e9', img: '/images/007-space-orbital-station.webp' },
  { id: 'Materials', name: 'Advanced Materials', icon: '🔬', svg: 'M6 18h8M6 18l-3 4M14 18l3 4M9 18v-3M11 18v-3M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 9v.01', color: '#f43f5e', img: '/images/008-materials-graphene-lattice.webp' },
  { id: 'Quantum', name: 'Quantum Computing', icon: '🔮', svg: 'M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6zM12 8v.01M8 14l.01.01M16 14l.01.01', color: '#a78bfa', img: '/images/009-quantum-computing.webp' },
  { id: 'Nuclear', name: 'Nuclear Technology', icon: '☢️', svg: 'M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 8a10 10 0 0 0-8.66 5L12 18l8.66-5A10 10 0 0 0 12 8zM5.34 13a10 10 0 0 0 0 10L12 18M18.66 13a10 10 0 0 1 0 10L12 18', color: '#fb923c', img: '/images/010-nuclear-smr-reactor.webp' },
  { id: 'EnergyStorage', name: 'Energy Storage', icon: '🔋', svg: 'M3 7h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM21 10v4M7 10v4M10 10v4M13 10v4', color: '#f97316', img: '/images/011-energy-storage-smart-grid.webp' },
  { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🛡️', svg: 'M12 2L4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4zM12 8v4M12 14h.01', color: '#ef4444', img: '/images/012-cybersecurity-digital-shield.webp' },
];

export const glossaryTerms: GlossaryTerm[] = [
  // AI (12 terms)
  { t: 'Artificial General Intelligence', a: 'AGI', c: 'AI', d: 'AI that matches or exceeds human intelligence across all cognitive tasks, capable of generalizing across domains.', r: ['LLM', 'RLHF', 'Agentic AI'] },
  { t: 'Large Language Model', a: 'LLM', c: 'AI', d: 'Neural network trained on vast text data to generate human-like language through next-token prediction.', r: ['Transformer', 'RAG', 'MoE'] },
  { t: 'Retrieval-Augmented Generation', a: 'RAG', c: 'AI', d: 'Combines external knowledge retrieval with LLM generation for accurate, sourced answers with citations.', r: ['LLM', 'Embedding', 'Hallucination'] },
  { t: 'Agentic AI', c: 'AI', d: 'AI systems that autonomously plan, decide, and execute multi-step tasks toward a goal without human intervention.', r: ['LLM', 'Chain-of-Thought', 'RLHF'] },
  { t: 'Multimodal AI', c: 'AI', d: 'Models that process and generate multiple data types — text, image, audio, and video — in a unified architecture.', r: ['LLM', 'Transformer', 'Embedding'] },
  { t: 'Transformer', c: 'AI', d: 'Neural network architecture using self-attention mechanisms, the foundation of modern language models and beyond.', r: ['LLM', 'MoE', 'Embedding'] },
  { t: 'Embedding', c: 'AI', d: 'Numerical vector representation of data in high-dimensional space, enabling semantic similarity search and retrieval.', r: ['RAG', 'Transformer', 'LLM'] },
  { t: 'Hallucination', c: 'AI', d: 'When AI generates confident but factually incorrect or fabricated outputs, a key challenge in LLM deployment.', r: ['RAG', 'RLHF', 'LLM'] },
  { t: 'Reinforcement Learning from Human Feedback', a: 'RLHF', c: 'AI', d: 'Training method using human preferences to guide model behavior and alignment with human values.', r: ['Agentic AI', 'Chain-of-Thought', 'Hallucination'] },
  { t: 'Chain-of-Thought', a: 'CoT', c: 'AI', d: 'Prompting technique where AI shows step-by-step reasoning before producing an answer, improving complex problem-solving.', r: ['Agentic AI', 'LLM', 'RLHF'] },
  { t: 'Mixture of Experts', a: 'MoE', c: 'AI', d: 'Architecture using multiple specialized subnetworks, activating only the relevant ones per query for efficiency.', r: ['Transformer', 'LLM', 'Edge AI'] },
  { t: 'Edge AI', c: 'AI', d: 'Running AI models locally on devices rather than cloud servers, reducing latency and privacy risk.', r: ['MoE', 'Embedding', 'Sensor Fusion'] },

  // Robotics (12 terms)
  { t: 'Humanoid Robot', c: 'Robotics', d: 'Robot designed to resemble and perform tasks like a human, with bipedal locomotion and dexterous manipulation.', r: ['Cobot', 'Actuator', 'Proprioception'] },
  { t: 'Collaborative Robot', a: 'Cobot', c: 'Robotics', d: 'Robot designed to work safely alongside humans in shared workspaces, with force-limited joints and safety sensors.', r: ['Humanoid Robot', 'AMR', 'Haptic Feedback'] },
  { t: 'Autonomous Mobile Robot', a: 'AMR', c: 'Robotics', d: 'Robot that navigates environments without fixed paths or external guidance, using onboard sensors and mapping.', r: ['Cobot', 'SLAM', 'Swarm Robotics'] },
  { t: 'Sim-to-Real Transfer', c: 'Robotics', d: 'Training robots in simulation environments then deploying to real-world applications, bridging the reality gap.', r: ['AMR', 'Quadruped Robot', 'Teleoperation'] },
  { t: 'Simultaneous Localization and Mapping', a: 'SLAM', c: 'Robotics', d: 'Robot building a map of its environment while simultaneously tracking its position within it in real-time.', r: ['AMR', 'Proprioception', 'Quadruped Robot'] },
  { t: 'Soft Robotics', c: 'Robotics', d: 'Robots made from flexible materials that mimic biological organisms, enabling safe human interaction and adaptive grasping.', r: ['Cobot', 'Actuator', 'Haptic Feedback'] },
  { t: 'Actuator', c: 'Robotics', d: 'Component that converts energy into physical motion in a robot, including motors, servos, and hydraulic systems.', r: ['Humanoid Robot', 'Soft Robotics', 'End Effector'] },
  { t: 'Swarm Robotics', c: 'Robotics', d: 'Coordinated groups of simple robots achieving complex tasks collectively through decentralized algorithms.', r: ['AMR', 'SLAM', 'Teleoperation'] },
  { t: 'Haptic Feedback', c: 'Robotics', d: 'Touch-based sensory information sent to/from robotic systems, enabling force sensing and texture perception.', r: ['Cobot', 'Soft Robotics', 'Teleoperation'] },
  { t: 'Quadruped Robot', c: 'Robotics', d: 'Four-legged robot designed for traversing rough terrain, with dynamic balance and agile locomotion.', r: ['AMR', 'SLAM', 'Sim-to-Real Transfer'] },
  { t: 'Teleoperation', c: 'Robotics', d: 'Human remotely controlling a robot, often with haptic feedback for immersive operation from a distance.', r: ['Swarm Robotics', 'Haptic Feedback', 'Sim-to-Real Transfer'] },
  { t: 'Proprioception', c: 'Robotics', d: "Robot's ability to sense its own body position, orientation, and movement through internal sensors.", r: ['SLAM', 'Actuator', 'Humanoid Robot'] },

  // Fusion (12 terms)
  { t: 'Net Energy Gain', c: 'Fusion', d: 'Fusion reaction producing more energy than it consumes, the holy grail for commercial fusion power.', r: ['Q-Value', 'Burning Plasma', 'Tokamak'] },
  { t: 'Tokamak', c: 'Fusion', d: 'Donut-shaped magnetic confinement fusion device using toroidal and poloidal magnetic fields to contain plasma.', r: ['Stellarator', 'Magnetic Confinement', 'Plasma'] },
  { t: 'Stellarator', c: 'Fusion', d: 'Twisted magnetic confinement design with complex 3D coils, more stable than tokamak but harder to build.', r: ['Tokamak', 'Magnetic Confinement', 'Cryostat'] },
  { t: 'Inertial Confinement Fusion', a: 'ICF', c: 'Fusion', d: 'Using high-powered lasers or particle beams to compress and ignite fusion fuel pellets.', r: ['Tokamak', 'Burning Plasma', 'Plasma'] },
  { t: 'Plasma', c: 'Fusion', d: 'Fourth state of matter, superheated gas of ions and electrons where fusion reactions occur at millions of degrees.', r: ['Tokamak', 'Stellarator', 'Divertor'] },
  { t: 'Tritium', c: 'Fusion', d: 'Radioactive hydrogen isotope used as fusion fuel, bred from lithium in reactor blankets.', r: ['Deuterium', 'Blanket', 'Tritium Breeding'] },
  { t: 'Deuterium', c: 'Fusion', d: 'Stable hydrogen isotope abundant in seawater, used as primary fusion fuel with tritium.', r: ['Tritium', 'Blanket', 'Nuclear Fuel Cycle'] },
  { t: 'Magnetic Confinement', c: 'Fusion', d: 'Using strong magnetic fields to contain superheated plasma away from reactor walls.', r: ['Tokamak', 'Stellarator', 'Cryostat'] },
  { t: 'Q-Value', c: 'Fusion', d: 'Ratio of fusion energy produced to energy input, with Q>1 indicating net energy gain.', r: ['Net Energy Gain', 'Burning Plasma', 'Tokamak'] },
  { t: 'Burning Plasma', c: 'Fusion', d: 'Self-sustaining fusion reaction where alpha particles heat the plasma, maintaining the reaction without external heating.', r: ['Net Energy Gain', 'Q-Value', 'Divertor'] },
  { t: 'Divertor', c: 'Fusion', d: 'Component that removes waste heat and impurities from fusion plasma, critical for reactor longevity.', r: ['Plasma', 'Burning Plasma', 'Blanket'] },
  { t: 'Blanket', c: 'Fusion', d: 'Fusion reactor component that captures neutrons, breeds tritium, and converts fusion energy to heat.', r: ['Tritium', 'Tritium Breeding', 'Divertor'] },

  // Biotech (12 terms)
  { t: 'CRISPR-Cas9', c: 'Biotech', d: 'Gene editing tool that precisely cuts and modifies DNA at specific sequences, revolutionizing genetic engineering.', r: ['Gene Therapy', 'Genomic Sequencing', 'Synthetic Biology'] },
  { t: 'Messenger RNA', a: 'mRNA', c: 'Biotech', d: 'Molecule carrying genetic instructions from DNA to ribosomes for protein production, used in vaccines and therapies.', r: ['Gene Therapy', 'Bioreactor', 'Protein Folding'] },
  { t: 'Gene Therapy', c: 'Biotech', d: "Treating disease by modifying a patient's genes, either by replacing defective genes or introducing new ones.", r: ['CRISPR-Cas9', 'mRNA', 'Personalized Medicine'] },
  { t: 'CAR-T Cell Therapy', c: 'Biotech', d: "Engineering a patient's T cells to target cancer cells, achieving remarkable remission rates in certain cancers.", r: ['Gene Therapy', 'Stem Cell', 'Personalized Medicine'] },
  { t: 'Bioreactor', c: 'Biotech', d: 'Vessel for growing cells or organisms under controlled conditions for biomanufacturing and research.', r: ['mRNA', 'Organoid', 'Synthetic Biology'] },
  { t: 'Organoid', c: 'Biotech', d: "Lab-grown 3D tissue structure that mimics an organ's architecture and function, used for disease modeling.", r: ['Stem Cell', 'Bioreactor', 'Personalized Medicine'] },
  { t: 'Protein Folding', c: 'Biotech', d: 'How proteins achieve their 3D shape, critical for function, now predicted by AI like AlphaFold.', r: ['mRNA', 'Genomic Sequencing', 'Synthetic Biology'] },
  { t: 'Personalized Medicine', c: 'Biotech', d: 'Tailoring medical treatment to individual genetic profiles, enabling more effective and safer therapies.', r: ['Gene Therapy', 'CAR-T Cell Therapy', 'Genomic Sequencing'] },
  { t: 'Stem Cell', c: 'Biotech', d: 'Undifferentiated cell that can become any cell type, enabling regenerative medicine and tissue engineering.', r: ['Organoid', 'CAR-T Cell Therapy', 'Bioprinting'] },
  { t: 'Synthetic Biology', c: 'Biotech', d: 'Engineering biological systems with designed functions, creating new organisms or pathways.', r: ['CRISPR-Cas9', 'Bioreactor', 'Protein Folding'] },
  { t: 'Bioprinting', c: 'Biotech', d: '3D printing using living cells as ink to create tissue structures for transplantation and research.', r: ['Organoid', 'Stem Cell', 'Synthetic Biology'] },
  { t: 'Genomic Sequencing', c: 'Biotech', d: 'Determining the complete DNA sequence of an organism, enabling precision medicine and genetic research.', r: ['CRISPR-Cas9', 'Personalized Medicine', 'Protein Folding'] },

  // BCI (12 terms)
  { t: 'Neural Implant', c: 'BCI', d: 'Device placed in or on the brain to record or stimulate neural activity for therapeutic or enhancement purposes.', r: ['Cortical Implant', 'Neural Dust', 'Closed-Loop BCI'] },
  { t: 'Electroencephalography', a: 'EEG', c: 'BCI', d: 'Non-invasive recording of brain electrical activity via scalp electrodes, widely used in BCI research.', r: ['Neural Implant', 'Neurofeedback', 'Motor Imagery'] },
  { t: 'Motor Imagery', c: 'BCI', d: 'Mental rehearsal of movement used to control BCI devices without physical motion.', r: ['EEG', 'Prosthetic Control', 'Neural Decoding'] },
  { t: 'Brain-Computer Interface', a: 'BCI', c: 'BCI', d: 'Direct communication pathway between brain and external device, bypassing muscles for control.', r: ['Neural Implant', 'EEG', 'Neural Decoding'] },
  { t: 'Cortical Implant', c: 'BCI', d: "Electrode array placed on or in the brain's cortex for high-resolution neural recording and stimulation.", r: ['Neural Implant', 'Neural Dust', 'Optogenetics'] },
  { t: 'Neurofeedback', c: 'BCI', d: 'Real-time display of brain activity for self-regulation training, used for ADHD, anxiety, and performance enhancement.', r: ['EEG', 'Motor Imagery', 'Closed-Loop BCI'] },
  { t: 'Optogenetics', c: 'BCI', d: 'Controlling neurons with light and genetically modified light-sensitive proteins, enabling precise neural control.', r: ['Cortical Implant', 'Neural Dust', 'Vagus Nerve Stimulation'] },
  { t: 'Neural Decoding', c: 'BCI', d: 'Interpreting brain signals to determine intended actions, thoughts, or perceptions for BCI control.', r: ['BCI', 'Motor Imagery', 'Brain-to-Text'] },
  { t: 'Brain-to-Text', c: 'BCI', d: 'Converting thought directly to written or spoken words, enabling communication for paralyzed patients.', r: ['Neural Decoding', 'EEG', 'Cortical Implant'] },
  { t: 'Closed-Loop BCI', c: 'BCI', d: 'System that both records and stimulates brain activity in real-time for adaptive neuromodulation.', r: ['Neural Implant', 'Neurofeedback', 'Optogenetics'] },
  { t: 'Neural Dust', c: 'BCI', d: 'Microscopic wireless sensors for recording neural activity throughout the brain with minimal invasion.', r: ['Cortical Implant', 'Optogenetics', 'Closed-Loop BCI'] },
  { t: 'Vagus Nerve Stimulation', c: 'BCI', d: 'Electrical stimulation of the vagus nerve for therapeutic effects on epilepsy, depression, and inflammation.', r: ['Optogenetics', 'Neurofeedback', 'Closed-Loop BCI'] },

  // AV (12 terms)
  { t: 'Level 4 Autonomy', c: 'AV', d: 'Vehicle drives itself in defined conditions without human intervention, with geofencing and operational design domain.', r: ['Level 5 Autonomy', 'ODD', 'Robotaxi'] },
  { t: 'Level 5 Autonomy', c: 'AV', d: 'Full self-driving in all conditions without any steering wheel or human controls, the ultimate AV goal.', r: ['Level 4 Autonomy', 'Robotaxi', 'eVTOL'] },
  { t: 'Light Detection and Ranging', a: 'LiDAR', c: 'AV', d: 'Laser-based sensor for 3D environment mapping with centimeter accuracy, critical for AV perception.', r: ['Perception Stack', 'Sensor Fusion', 'HD Map'] },
  { t: 'Robotaxi', c: 'AV', d: 'Autonomous taxi service operating without human drivers, currently in limited deployment in several cities.', r: ['Level 5 Autonomy', 'Level 4 Autonomy', 'ODD'] },
  { t: 'High-Definition Map', a: 'HD Map', c: 'AV', d: 'Centimeter-accurate map with lane-level detail, essential for precise autonomous navigation.', r: ['LiDAR', 'Perception Stack', 'Sensor Fusion'] },
  { t: 'Vehicle-to-Everything', a: 'V2X', c: 'AV', d: 'Communication between vehicles and infrastructure, including traffic lights, other vehicles, and pedestrians.', r: ['Perception Stack', 'Sensor Fusion', 'Smart Intersection'] },
  { t: 'Perception Stack', c: 'AV', d: 'Software pipeline processing sensor data to understand surroundings, detect objects, and predict behavior.', r: ['LiDAR', 'Sensor Fusion', 'HD Map'] },
  { t: 'Sensor Fusion', c: 'AV', d: 'Combining data from multiple sensors (LiDAR, cameras, radar) for accurate and robust perception.', r: ['LiDAR', 'Perception Stack', 'Edge Case'] },
  { t: 'Platooning', c: 'AV', d: 'Multiple vehicles traveling in close formation, coordinated electronically for efficiency and safety.', r: ['Level 4 Autonomy', 'V2X', 'Truck Platoon'] },
  { t: 'Operational Design Domain', a: 'ODD', c: 'AV', d: 'Conditions where an AV is designed to operate, including geography, weather, and speed limits.', r: ['Level 4 Autonomy', 'Edge Case', 'Robotaxi'] },
  { t: 'Edge Case', c: 'AV', d: 'Rare or unusual driving scenario that challenges AV systems, requiring robust handling and testing.', r: ['Sensor Fusion', 'Perception Stack', 'ODD'] },
  { t: 'Electric Vertical Takeoff and Landing', a: 'eVTOL', c: 'AV', d: 'Electric aircraft for urban air mobility, taking off and landing vertically without runways.', r: ['Level 5 Autonomy', 'Solid-State Battery', 'Robotaxi'] },

  // Space (12 terms)
  { t: 'Reusable Rocket', c: 'Space', d: 'Rocket designed to be recovered and flown multiple times, dramatically reducing launch costs.', r: ['Starship', 'Cryogenic Propellant', 'Space Manufacturing'] },
  { t: 'Starship', c: 'Space', d: "SpaceX's fully reusable super heavy-lift launch vehicle for Mars colonization and beyond.", r: ['Reusable Rocket', 'Cryogenic Propellant', 'Mars Colonization'] },
  { t: 'Satellite Constellation', c: 'Space', d: 'Network of satellites working together for global coverage, like Starlink for broadband internet.', r: ['Megaconstellation', 'Orbital Debris', 'Space Tourism'] },
  { t: 'Lunar Gateway', c: 'Space', d: 'Planned space station orbiting the Moon as a staging point for lunar exploration and Mars missions.', r: ['Artemis Program', 'Mars Colonization', 'ISRU'] },
  { t: 'In-Situ Resource Utilization', a: 'ISRU', c: 'Space', d: 'Using local resources on other planets (water, regolith) for fuel and materials, enabling long-term presence.', r: ['Mars Colonization', 'Lunar Gateway', 'Space Manufacturing'] },
  { t: 'Space Tourism', c: 'Space', d: 'Commercial travel to space for non-professional astronauts, now available through suborbital flights.', r: ['Reusable Rocket', 'Satellite Constellation', 'Space Manufacturing'] },
  { t: 'Megaconstellation', c: 'Space', d: 'Large satellite network of hundreds or thousands in low Earth orbit for global services.', r: ['Satellite Constellation', 'Orbital Debris', 'Space Tourism'] },
  { t: 'Orbital Debris', c: 'Space', d: 'Human-made objects in orbit that pose collision risks to satellites and spacecraft.', r: ['Megaconstellation', 'Satellite Constellation', 'Space Tug'] },
  { t: 'Space Tug', c: 'Space', d: 'Vehicle for moving payloads between orbits, extending satellite life and enabling debris removal.', r: ['Orbital Debris', 'Reusable Rocket', 'Space Manufacturing'] },
  { t: 'Artemis Program', c: 'Space', d: "NASA's mission to return humans to the Moon by 2025, establishing sustainable lunar exploration.", r: ['Lunar Gateway', 'Mars Colonization', 'Reusable Rocket'] },
  { t: 'Mars Colonization', c: 'Space', d: 'Establishing permanent human settlements on Mars, requiring ISRU, life support, and radiation protection.', r: ['Starship', 'ISRU', 'Lunar Gateway'] },
  { t: 'Cryogenic Propellant', c: 'Space', d: 'Extremely cold liquid fuel (hydrogen, oxygen) for rockets, requiring special insulation and handling.', r: ['Reusable Rocket', 'Starship', 'RTG'] },

  // Materials (12 terms)
  { t: 'Graphene', c: 'Materials', d: 'Single layer of carbon atoms arranged in a hexagonal lattice, the strongest known material with exceptional conductivity.', r: ['Carbon Nanotube', 'Aerogel', 'Nanomaterial'] },
  { t: 'Metamaterial', c: 'Materials', d: 'Engineered material with properties not found in nature, like negative refraction or cloaking.', r: ['Photonic Crystal', 'Nanomaterial', 'Smart Material'] },
  { t: 'Superconductor', c: 'Materials', d: 'Material with zero electrical resistance below critical temperature, enabling lossless power transmission.', r: ['Topological Insulator', 'Aerogel', 'Quantum Computing'] },
  { t: 'Carbon Nanotube', c: 'Materials', d: 'Cylindrical carbon molecules with exceptional strength, thermal conductivity, and electrical properties.', r: ['Graphene', 'Nanomaterial', '3D-Printed Titanium'] },
  { t: 'Aerogel', c: 'Materials', d: 'Ultra-light solid material with nanoporous structure, excellent thermal insulator with 99.8% air.', r: ['Graphene', 'Superconductor', 'Nanomaterial'] },
  { t: 'Perovskite', c: 'Materials', d: 'Crystal structure used in next-generation solar cells with high efficiency and low-cost manufacturing.', r: ['Photonic Crystal', 'Smart Material', 'Nanomaterial'] },
  { t: 'Self-Healing Material', c: 'Materials', d: 'Material that automatically repairs damage through embedded microcapsules or reversible bonds.', r: ['Shape Memory Alloy', 'Smart Material', 'Biodegradable Polymer'] },
  { t: '3D-Printed Titanium', c: 'Materials', d: 'Additively manufactured titanium parts for aerospace and medical applications with complex geometries.', r: ['Carbon Nanotube', 'Shape Memory Alloy', 'Space Manufacturing'] },
  { t: 'Shape Memory Alloy', c: 'Materials', d: 'Metal that returns to original shape when heated, used in actuators and medical stents.', r: ['Self-Healing Material', 'Smart Material', '3D-Printed Titanium'] },
  { t: 'Topological Insulator', c: 'Materials', d: 'Material that insulates inside but conducts on surface with protected edge states, useful for quantum computing.', r: ['Superconductor', 'Quantum Computing', 'Nanomaterial'] },
  { t: 'Photonic Crystal', c: 'Materials', d: 'Nanostructure that controls light propagation, enabling optical computing and invisibility cloaks.', r: ['Metamaterial', 'Perovskite', 'Smart Material'] },
  { t: 'Nanomaterial', c: 'Materials', d: 'Material with features at nanometer scale (1-100nm), exhibiting unique properties from quantum effects.', r: ['Graphene', 'Carbon Nanotube', 'Aerogel'] },

  // Quantum (12 terms)
  { t: 'Qubit', c: 'Quantum', d: 'Basic unit of quantum information, can be 0 and 1 simultaneously through superposition.', r: ['Superposition', 'Quantum Entanglement', 'Topological Qubit'] },
  { t: 'Quantum Entanglement', c: 'Quantum', d: 'Phenomenon where particles are correlated regardless of distance, enabling quantum communication.', r: ['Qubit', 'Superposition', 'QKD'] },
  { t: 'Quantum Supremacy', c: 'Quantum', d: 'Quantum computer outperforming the best classical computer on a specific task, a major milestone.', r: ['Qubit', 'NISQ', 'Quantum Annealing'] },
  { t: 'Quantum Error Correction', c: 'Quantum', d: 'Techniques to protect quantum information from decoherence and noise, essential for practical quantum computing.', r: ['Qubit', 'Decoherence', 'Topological Qubit'] },
  { t: 'Superposition', c: 'Quantum', d: 'Quantum state where a qubit exists in multiple states at once, enabling quantum parallelism.', r: ['Qubit', 'Quantum Entanglement', 'Quantum Annealing'] },
  { t: 'Quantum Annealing', c: 'Quantum', d: 'Optimization approach using quantum tunneling to find global minima in complex problems.', r: ['Superposition', 'NISQ', 'Quantum Sensing'] },
  { t: 'Topological Qubit', c: 'Quantum', d: 'Qubit encoding information in particle braiding patterns, protected from local noise.', r: ['Qubit', 'Quantum Error Correction', 'Topological Insulator'] },
  { t: 'Quantum Key Distribution', a: 'QKD', c: 'Quantum', d: 'Secure communication using quantum mechanics to detect eavesdropping, enabling unhackable encryption.', r: ['Quantum Entanglement', 'Post-Quantum Cryptography', 'Quantum Internet'] },
  { t: 'Decoherence', c: 'Quantum', d: 'Loss of quantum state due to environmental interaction, the main challenge in quantum computing.', r: ['Qubit', 'Quantum Error Correction', 'NISQ'] },
  { t: 'Noisy Intermediate-Scale Quantum', a: 'NISQ', c: 'Quantum', d: 'Current era of quantum computing with 50-1000 noisy qubits, before error correction.', r: ['Quantum Supremacy', 'Decoherence', 'Quantum Annealing'] },
  { t: 'Quantum Sensing', c: 'Quantum', d: 'Using quantum systems for ultra-precise measurements of time, gravity, and magnetic fields.', r: ['Quantum Annealing', 'NISQ', 'Quantum Internet'] },
  { t: 'Quantum Internet', c: 'Quantum', d: 'Network for transmitting quantum information using entanglement and quantum repeaters.', r: ['QKD', 'Quantum Entanglement', 'Quantum Sensing'] },

  // Nuclear (12 terms)
  { t: 'Small Modular Reactor', a: 'SMR', c: 'Nuclear', d: 'Compact nuclear reactor, factory-built and scalable, enabling faster deployment and lower costs.', r: ['Generation IV Reactor', 'Nuclear Microreactor', 'HALEU'] },
  { t: 'Molten Salt Reactor', c: 'Nuclear', d: 'Reactor using liquid fuel (molten salt) for fission, with inherent safety and reduced waste.', r: ['Generation IV Reactor', 'Fast Neutron Reactor', 'SMR'] },
  { t: 'Generation IV Reactor', c: 'Nuclear', d: 'Next-gen nuclear designs with improved safety, efficiency, and proliferation resistance.', r: ['SMR', 'Molten Salt Reactor', 'Fast Neutron Reactor'] },
  { t: 'Fast Neutron Reactor', c: 'Nuclear', d: 'Reactor using fast neutrons to breed fuel or burn waste, improving resource utilization.', r: ['Generation IV Reactor', 'Nuclear Fuel Cycle', 'Spent Nuclear Fuel'] },
  { t: 'Nuclear Fuel Cycle', c: 'Nuclear', d: 'Steps from uranium mining to spent fuel disposal, including enrichment, fabrication, and reprocessing.', r: ['Fast Neutron Reactor', 'Spent Nuclear Fuel', 'Decay Heat'] },
  { t: 'Radioisotope Thermoelectric Generator', a: 'RTG', c: 'Nuclear', d: 'Power source using radioactive decay heat, used in space missions like Voyager and Curiosity.', r: ['Space Manufacturing', 'Cryogenic Propellant', 'Decay Heat'] },
  { t: 'Decay Heat', c: 'Nuclear', d: 'Heat produced by radioactive decay after reactor shutdown, requiring continuous cooling.', r: ['Nuclear Fuel Cycle', 'Spent Nuclear Fuel', 'SMR'] },
  { t: 'High-Assay Low-Enriched Uranium', a: 'HALEU', c: 'Nuclear', d: 'Fuel for advanced reactors with higher enrichment than conventional reactors.', r: ['SMR', 'Nuclear Fuel Cycle', 'Generation IV Reactor'] },
  { t: 'Pebble Bed Reactor', c: 'Nuclear', d: 'Gas-cooled reactor using spherical fuel elements with graphite moderator, inherently safe.', r: ['Generation IV Reactor', 'Molten Salt Reactor', 'SMR'] },
  { t: 'Nuclear Microreactor', c: 'Nuclear', d: 'Ultra-small transportable reactor (1-20 MW) for remote communities and industrial sites.', r: ['SMR', 'HALEU', 'Generation IV Reactor'] },
  { t: 'Spent Nuclear Fuel', c: 'Nuclear', d: 'Used fuel that no longer efficiently sustains chain reaction, requiring long-term storage or reprocessing.', r: ['Nuclear Fuel Cycle', 'Fast Neutron Reactor', 'Decay Heat'] },
  { t: 'Tritium Breeding', c: 'Nuclear', d: 'Producing tritium for fusion using lithium blankets in fusion reactors.', r: ['Blanket', 'Tritium', 'Molten Salt Reactor'] },

  // Energy Storage (12 terms)
  { t: 'Solid-State Battery', c: 'EnergyStorage', d: 'Battery using solid electrolyte instead of liquid, enabling higher energy density and safety.', r: ['Lithium-Ion Battery', 'BMS', 'eVTOL'] },
  { t: 'Lithium-Ion Battery', c: 'EnergyStorage', d: 'Rechargeable battery using lithium ion movement between anode and cathode, the dominant EV battery.', r: ['Solid-State Battery', 'Sodium-Ion Battery', 'BMS'] },
  { t: 'Grid Energy Storage', c: 'EnergyStorage', d: 'Large-scale storage for electricity grid balancing, enabling renewable energy integration.', r: ['Flow Battery', 'Pumped Hydro Storage', 'Virtual Power Plant'] },
  { t: 'Flow Battery', c: 'EnergyStorage', d: 'Rechargeable battery with liquid electrolytes in external tanks, enabling scalable capacity.', r: ['Grid Energy Storage', 'Redox Flow Cell', 'Thermal Energy Storage'] },
  { t: 'Supercapacitor', c: 'EnergyStorage', d: 'Energy storage device with very fast charge/discharge but lower energy density than batteries.', r: ['Solid-State Battery', 'BMS', 'Second-Life Battery'] },
  { t: 'Pumped Hydro Storage', c: 'EnergyStorage', d: 'Storing energy by pumping water uphill, releasing through turbines to generate electricity.', r: ['Grid Energy Storage', 'Thermal Energy Storage', 'Virtual Power Plant'] },
  { t: 'Battery Management System', a: 'BMS', c: 'EnergyStorage', d: 'Electronics monitoring and controlling battery performance, safety, and longevity.', r: ['Solid-State Battery', 'Lithium-Ion Battery', 'Second-Life Battery'] },
  { t: 'Sodium-Ion Battery', c: 'EnergyStorage', d: 'Battery using sodium instead of lithium, cheaper and more abundant but lower energy density.', r: ['Lithium-Ion Battery', 'Solid-State Battery', 'Grid Energy Storage'] },
  { t: 'Thermal Energy Storage', c: 'EnergyStorage', d: 'Storing energy as heat for later use in power generation or heating applications.', r: ['Flow Battery', 'Pumped Hydro Storage', 'Grid Energy Storage'] },
  { t: 'Second-Life Battery', c: 'EnergyStorage', d: 'Repurposing used EV batteries for stationary storage after they degrade below vehicle requirements.', r: ['BMS', 'Lithium-Ion Battery', 'Grid Energy Storage'] },
  { t: 'Virtual Power Plant', a: 'VPP', c: 'EnergyStorage', d: 'Network of distributed energy resources managed as one, aggregating storage and generation.', r: ['Grid Energy Storage', 'Pumped Hydro Storage', 'Microgrid'] },
  { t: 'Hydrogen Storage', c: 'EnergyStorage', d: 'Storing hydrogen as fuel for fuel cells or combustion, enabling long-duration energy storage.', r: ['Grid Energy Storage', 'Flow Battery', 'Thermal Energy Storage'] },

  // Cybersecurity (12 terms)
  { t: 'Zero Trust', c: 'Cybersecurity', d: 'Security model assuming no implicit trust, verifying every access request regardless of location.', r: ['MFA', 'EDR', 'SIEM'] },
  { t: 'Post-Quantum Cryptography', c: 'Cybersecurity', d: 'Encryption algorithms resistant to quantum attacks, protecting data against future quantum computers.', r: ['QKD', 'HSM', 'Supply Chain Attack'] },
  { t: 'Ransomware', c: 'Cybersecurity', d: 'Malware that encrypts data and demands payment for decryption, a major threat to organizations.', r: ['SOC', 'EDR', 'Phishing'] },
  { t: 'Security Information and Event Management', a: 'SIEM', c: 'Cybersecurity', d: 'Platform for real-time threat detection, log analysis, and security incident response.', r: ['SOC', 'EDR', 'Zero Trust'] },
  { t: 'Security Operations Center', a: 'SOC', c: 'Cybersecurity', d: 'Team and facility for monitoring and responding to security threats 24/7.', r: ['SIEM', 'Red Team', 'EDR'] },
  { t: 'Phishing', c: 'Cybersecurity', d: 'Fraudulent communication tricking victims into revealing sensitive information or installing malware.', r: ['Ransomware', 'MFA', 'SOC'] },
  { t: 'Multi-Factor Authentication', a: 'MFA', c: 'Cybersecurity', d: 'Requiring multiple verification methods (password, token, biometric) for secure access.', r: ['Zero Trust', 'Phishing', 'HSM'] },
  { t: 'Red Team', c: 'Cybersecurity', d: 'Group simulating attacks to test security defenses and identify vulnerabilities.', r: ['SOC', 'Bug Bounty', 'Penetration Testing'] },
  { t: 'Endpoint Detection and Response', a: 'EDR', c: 'Cybersecurity', d: 'Monitoring and responding to threats on devices (laptops, servers) in real-time.', r: ['SIEM', 'SOC', 'Ransomware'] },
  { t: 'Homomorphic Encryption', c: 'Cybersecurity', d: 'Computation on encrypted data without decrypting it, enabling private cloud computing.', r: ['Post-Quantum Cryptography', 'HSM', 'Zero Trust'] },
  { t: 'Supply Chain Attack', c: 'Cybersecurity', d: 'Breaching a target through its suppliers or dependencies, bypassing direct defenses.', r: ['Post-Quantum Cryptography', 'Zero Trust', 'SIEM'] },
  { t: 'Hardware Security Module', a: 'HSM', c: 'Cybersecurity', d: 'Physical device for cryptographic key management and secure operations.', r: ['MFA', 'Post-Quantum Cryptography', 'QKD'] },

  // AI — Additional terms (6)
  { t: 'Fine-Tuning', c: 'AI', d: 'Adapting a pre-trained model to a specific task or domain by further training on labeled data.', r: ['LLM', 'RAG', 'Embedding'] },
  { t: 'Diffusion Model', c: 'AI', d: 'Generative model that creates data by learning to reverse a gradual noising process, used in image generation.', r: ['Multimodal AI', 'Transformer', 'Hallucination'] },
  { t: 'Tokenization', c: 'AI', d: 'Breaking text into sub-word units (tokens) that a language model can process and understand.', r: ['LLM', 'Transformer', 'Embedding'] },
  { t: 'Attention Mechanism', c: 'AI', d: 'Core component of transformers that weighs the importance of different input elements when producing output.', r: ['Transformer', 'LLM', 'MoE'] },
  { t: 'Prompt Engineering', c: 'AI', d: 'Crafting input text to guide LLMs toward desired outputs, including few-shot and chain-of-thought techniques.', r: ['LLM', 'Chain-of-Thought', 'RAG'] },
  { t: 'Neuro-Symbolic AI', c: 'AI', d: 'Hybrid approach combining neural network pattern recognition with symbolic reasoning for robust intelligence.', r: ['AGI', 'Chain-of-Thought', 'Transformer'] },

  // Robotics — Additional terms (6)
  { t: 'End Effector', c: 'Robotics', d: 'Tool or gripper at the end of a robotic arm, designed for specific manipulation tasks.', r: ['Actuator', 'Cobot', 'Haptic Feedback'] },
  { t: 'Computer Vision', c: 'Robotics', d: 'Enabling robots to interpret visual data from cameras for object detection, tracking, and scene understanding.', r: ['SLAM', 'Sensor Fusion', 'AMR'] },
  { t: 'Reinforcement Learning', a: 'RL', c: 'Robotics', d: 'Training robots through trial and error with reward signals, enabling adaptive behavior in dynamic environments.', r: ['Sim-to-Real Transfer', 'Agentic AI', 'Swarm Robotics'] },
  { t: 'Bipedal Locomotion', c: 'Robotics', d: 'Two-legged walking mechanism for humanoid robots, requiring dynamic balance and real-time gait adjustment.', r: ['Humanoid Robot', 'Proprioception', 'Actuator'] },
  { t: 'Swarm Intelligence', c: 'Robotics', d: 'Decentralized collective behavior inspired by social insects, enabling scalable multi-robot coordination.', r: ['Swarm Robotics', 'AMR', 'SLAM'] },
  { t: 'Robotic Process Automation', a: 'RPA', c: 'Robotics', d: 'Software robots automating repetitive digital tasks like data entry and form processing.', r: ['Agentic AI', 'Cobot', 'Edge AI'] },

  // Fusion — Additional terms (6)
  { t: 'Tritium Breeding', c: 'Fusion', d: 'Producing tritium fuel from lithium inside the reactor blanket to sustain the fusion reaction.', r: ['Tritium', 'Blanket', 'Deuterium'] },
  { t: 'Cryostat', c: 'Fusion', d: 'Vacuum vessel maintaining ultra-cold temperatures for superconducting magnets in fusion reactors.', r: ['Magnetic Confinement', 'Tokamak', 'Stellarator'] },
  { t: 'First Wall', c: 'Fusion', d: 'Innermost layer of the reactor facing the plasma, made of tungsten or beryllium to withstand extreme heat.', r: ['Divertor', 'Blanket', 'Plasma'] },
  { t: 'Neutral Beam Injection', a: 'NBI', c: 'Fusion', d: 'Heating method that injects high-energy neutral atoms into plasma to reach fusion temperatures.', r: ['Burning Plasma', 'Q-Value', 'Tokamak'] },
  { t: 'Magnetic Reconnection', c: 'Fusion', d: 'Process where magnetic field lines break and reconnect, releasing energy that can disrupt plasma confinement.', r: ['Plasma', 'Magnetic Confinement', 'Divertor'] },
  { t: ' Lawson Criterion', c: 'Fusion', d: 'Condition for fusion: the product of plasma density, temperature, and confinement time must exceed a threshold.', r: ['Net Energy Gain', 'Q-Value', 'Burning Plasma'] },

  // Biotech — Additional terms (6)
  { t: 'AlphaFold', c: 'Biotech', d: 'AI system by DeepMind that predicts 3D protein structures from amino acid sequences with high accuracy.', r: ['Protein Folding', 'Synthetic Biology', 'Genomic Sequencing'] },
  { t: 'Biologics', c: 'Biotech', d: 'Medical products derived from living organisms, including vaccines, antibodies, and cell therapies.', r: ['mRNA', 'CAR-T Cell Therapy', 'Bioreactor'] },
  { t: 'Gene Drive', c: 'Biotech', d: 'Genetic engineering technique that biases inheritance to spread a trait through a population rapidly.', r: ['CRISPR-Cas9', 'Synthetic Biology', 'Gene Therapy'] },
  { t: 'Tissue Engineering', c: 'Biotech', d: 'Combining cells, scaffolds, and growth factors to create functional tissues for repair or replacement.', r: ['Bioprinting', 'Stem Cell', 'Organoid'] },
  { t: 'Phage Therapy', c: 'Biotech', d: 'Using bacteriophages to treat bacterial infections, an alternative to antibiotics gaining renewed interest.', r: ['Synthetic Biology', 'Bioreactor', 'Personalized Medicine'] },
  { t: 'Liquid Biopsy', c: 'Biotech', d: 'Non-invasive blood test detecting circulating tumor DNA for early cancer detection and monitoring.', r: ['Genomic Sequencing', 'Personalized Medicine', 'CAR-T Cell Therapy'] },

  // BCI — Additional terms (6)
  { t: 'Prosthetic Control', c: 'BCI', d: 'Using brain signals to control robotic prosthetics, restoring motor function for amputees.', r: ['Motor Imagery', 'Neural Decoding', 'Haptic Feedback'] },
  { t: 'Neural Lace', c: 'BCI', d: 'Mesh-like brain implant that integrates with neural tissue for long-term biocompatible recording.', r: ['Neural Implant', 'Neural Dust', 'Cortical Implant'] },
  { t: 'Brain Mapping', c: 'BCI', d: 'Creating detailed maps of brain structure and function to understand neural circuits and connectivity.', r: ['Neural Decoding', 'EEG', 'Cortical Implant'] },
  { t: 'Neuroprosthetics', c: 'BCI', d: 'Devices that replace or enhance nervous system functions, including cochlear implants and retinal prosthetics.', r: ['Neural Implant', 'Prosthetic Control', 'Closed-Loop BCI'] },
  { t: 'Transcranial Magnetic Stimulation', a: 'TMS', c: 'BCI', d: 'Non-invasive brain stimulation using magnetic fields to modulate neural activity for therapy.', r: ['Neurofeedback', 'Vagus Nerve Stimulation', 'Optogenetics'] },
  { t: 'Synaptic Interface', c: 'BCI', d: 'Direct connection to individual synapses, enabling ultra-precise readout and stimulation of neural signals.', r: ['Cortical Implant', 'Neural Dust', 'Neural Decoding'] },

  // AV — Additional terms (6)
  { t: 'Truck Platoon', c: 'AV', d: 'Group of trucks traveling in close formation with electronic coupling for fuel efficiency and safety.', r: ['Platooning', 'V2X', 'Level 4 Autonomy'] },
  { t: 'Smart Intersection', c: 'AV', d: 'Traffic infrastructure with sensors and V2X communication to optimize flow and prevent collisions.', r: ['V2X', 'HD Map', 'Sensor Fusion'] },
  { t: 'Automated Lane Keeping', a: 'ALK', c: 'AV', d: 'System that maintains vehicle position within a lane, a stepping stone to higher autonomy levels.', r: ['Level 4 Autonomy', 'Perception Stack', 'ODD'] },
  { t: 'V2V Communication', c: 'AV', d: 'Direct vehicle-to-vehicle data exchange for collision avoidance and cooperative driving.', r: ['V2X', 'Platooning', 'Smart Intersection'] },
  { t: 'HD Map', c: 'AV', d: 'High-precision digital map with centimeter-level accuracy for autonomous navigation.', r: ['LiDAR', 'Perception Stack', 'Sensor Fusion'] },
  { t: 'Microgrid', c: 'AV', d: 'Localized energy grid for charging autonomous vehicle fleets with renewable integration.', r: ['Virtual Power Plant', 'V2X', 'Solid-State Battery'] },

  // Space — Additional terms (6)
  { t: 'Space Manufacturing', c: 'Space', d: 'Producing materials and products in microgravity, leveraging unique conditions for superior properties.', r: ['ISRU', 'Lunar Gateway', 'Cryogenic Propellant'] },
  { t: 'RTG', c: 'Space', d: 'Radioisotope Thermoelectric Generator providing power for deep space missions using radioactive decay.', r: ['Cryogenic Propellant', 'Mars Colonization', 'Nuclear Fuel Cycle'] },
  { t: 'Space Elevator', c: 'Space', d: 'Theoretical structure from Earth to geostationary orbit, enabling low-cost access to space.', r: ['Reusable Rocket', 'Carbon Nanotube', 'Space Manufacturing'] },
  { t: 'Aerocapture', c: 'Space', d: 'Using atmospheric drag to slow a spacecraft into orbit, saving fuel for interplanetary missions.', r: ['Mars Colonization', 'Cryogenic Propellant', 'ISRU'] },
  { t: 'Space Debris Mitigation', c: 'Space', d: 'Strategies to reduce orbital debris, including deorbiting satellites and active debris removal.', r: ['Orbital Debris', 'Megaconstellation', 'Space Tug'] },
  { t: 'Lunar ISRU', c: 'Space', d: 'Extracting water ice and minerals from the lunar surface for fuel, life support, and construction.', r: ['ISRU', 'Lunar Gateway', 'Mars Colonization'] },

  // Materials — Additional terms (6)
  { t: 'Smart Material', c: 'Materials', d: 'Material that responds to external stimuli (temperature, stress, electric field) with a change in properties.', r: ['Shape Memory Alloy', 'Self-Healing Material', 'Metamaterial'] },
  { t: 'Biodegradable Polymer', c: 'Materials', d: 'Plastic that decomposes naturally, reducing environmental impact and enabling medical implants.', r: ['Self-Healing Material', 'Synthetic Biology', 'Smart Material'] },
  { t: 'Composite Material', c: 'Materials', d: 'Combination of two or more materials with different properties, achieving superior performance.', r: ['3D-Printed Titanium', 'Carbon Nanotube', 'Aerogel'] },
  { t: 'Biomaterial', c: 'Materials', d: 'Material designed to interact with biological systems for medical implants and tissue engineering.', r: ['Bioprinting', 'Self-Healing Material', 'Biodegradable Polymer'] },
  { t: 'Piezoelectric Material', c: 'Materials', d: 'Material that generates electric charge under mechanical stress, enabling sensors and energy harvesting.', r: ['Smart Material', 'Shape Memory Alloy', 'Metamaterial'] },
  { t: 'MXene', c: 'Materials', d: 'Two-dimensional transition metal carbide with excellent conductivity, promising for energy storage and sensing.', r: ['Graphene', 'Nanomaterial', 'Supercapacitor'] },

  // Quantum — Additional terms (6)
  { t: 'Post-Quantum Cryptography', a: 'PQC', c: 'Quantum', d: 'Classical encryption algorithms designed to resist attacks by quantum computers.', r: ['QKD', 'Quantum Supremacy', 'Decoherence'] },
  { t: 'Quantum Tunneling', c: 'Quantum', d: 'Quantum phenomenon where a particle passes through a classically impenetrable barrier.', r: ['Superposition', 'Quantum Annealing', 'Decoherence'] },
  { t: 'Bloch Sphere', c: 'Quantum', d: 'Geometric representation of a qubit state as a point on a unit sphere in 3D space.', r: ['Qubit', 'Superposition', 'Quantum Entanglement'] },
  { t: 'Quantum Circuit', c: 'Quantum', d: 'Sequence of quantum gates applied to qubits, analogous to classical logic circuits.', r: ['Qubit', 'Quantum Error Correction', 'Topological Qubit'] },
  { t: 'Quantum Volume', c: 'Quantum', d: 'Metric measuring the computational capability of a quantum computer, accounting for qubits and error rates.', r: ['Qubit', 'NISQ', 'Quantum Supremacy'] },
  { t: 'Variational Quantum Eigensolver', a: 'VQE', c: 'Quantum', d: 'Hybrid quantum-classical algorithm for finding ground states of molecules, useful in chemistry.', r: ['Quantum Circuit', 'NISQ', 'Quantum Annealing'] },

  // Nuclear — Additional terms (6)
  { t: 'Nuclear Microreactor', c: 'Nuclear', d: 'Ultra-small transportable reactor (1-20 MW) for remote communities and industrial sites.', r: ['SMR', 'HALEU', 'Generation IV Reactor'] },
  { t: 'Thorium Reactor', c: 'Nuclear', d: 'Reactor using thorium as fuel, offering improved safety and reduced long-lived waste.', r: ['Molten Salt Reactor', 'Generation IV Reactor', 'Nuclear Fuel Cycle'] },
  { t: 'Nuclear Fusion-Fission Hybrid', c: 'Nuclear', d: 'Reactor combining fusion and fission, using fusion neutrons to drive fission reactions.', r: ['Tokamak', 'Fast Neutron Reactor', 'Generation IV Reactor'] },
  { t: 'Reactor Pressure Vessel', a: 'RPV', c: 'Nuclear', d: 'Steel vessel containing the reactor core and coolant, designed to withstand high pressure and radiation.', r: ['SMR', 'Decay Heat', 'Nuclear Fuel Cycle'] },
  { t: 'Control Rod', c: 'Nuclear', d: 'Neutron-absorbing rods that regulate fission rate by being inserted or withdrawn from the reactor core.', r: ['Nuclear Fuel Cycle', 'Decay Heat', 'Generation IV Reactor'] },
  { t: 'Nuclear Propulsion', c: 'Nuclear', d: 'Using nuclear reactions for propulsion in submarines, spacecraft, and potentially maritime vessels.', r: ['RTG', 'Cryogenic Propellant', 'Nuclear Microreactor'] },

  // Energy Storage — Additional terms (6)
  { t: 'Redox Flow Cell', c: 'EnergyStorage', d: 'Electrochemical cell using liquid electrolytes for scalable, long-duration energy storage.', r: ['Flow Battery', 'Grid Energy Storage', 'Supercapacitor'] },
  { t: 'Microgrid', c: 'EnergyStorage', d: 'Localized energy grid that can operate independently, integrating renewables and storage.', r: ['Virtual Power Plant', 'Grid Energy Storage', 'Hydrogen Storage'] },
  { t: 'Compressed Air Energy Storage', a: 'CAES', c: 'EnergyStorage', d: 'Storing energy by compressing air in underground caverns, releasing it to drive turbines.', r: ['Grid Energy Storage', 'Pumped Hydro Storage', 'Thermal Energy Storage'] },
  { t: 'Gravity Battery', c: 'EnergyStorage', d: 'Storing energy by lifting heavy masses, releasing them to drive generators when power is needed.', r: ['Grid Energy Storage', 'Pumped Hydro Storage', 'Compressed Air Energy Storage'] },
  { t: 'Battery Recycling', c: 'EnergyStorage', d: 'Recovering valuable materials from spent batteries, reducing waste and supply chain dependency.', r: ['Second-Life Battery', 'Lithium-Ion Battery', 'BMS'] },
  { t: 'Solid Electrolyte Interphase', a: 'SEI', c: 'EnergyStorage', d: 'Passivation layer on battery electrodes that affects performance, safety, and cycle life.', r: ['Solid-State Battery', 'Lithium-Ion Battery', 'BMS'] },

  // Cybersecurity — Additional terms (6)
  { t: 'Penetration Testing', c: 'Cybersecurity', d: 'Authorized simulated attack on a system to identify security weaknesses before adversaries exploit them.', r: ['Red Team', 'SOC', 'Zero Trust'] },
  { t: 'Bug Bounty', c: 'Cybersecurity', d: 'Program rewarding independent researchers for finding and reporting security vulnerabilities.', r: ['Red Team', 'Penetration Testing', 'SOC'] },
  { t: 'Zero-Day Vulnerability', c: 'Cybersecurity', d: 'Security flaw unknown to the vendor, exploitable before a patch is available.', r: ['Ransomware', 'Supply Chain Attack', 'EDR'] },
  { t: 'Sandboxing', c: 'Cybersecurity', d: 'Isolating untrusted code or applications in a controlled environment to prevent system damage.', r: ['EDR', 'Zero Trust', 'Ransomware'] },
  { t: 'Threat Intelligence', c: 'Cybersecurity', d: 'Data about cyber threats used to inform defensive strategies and proactive security measures.', r: ['SIEM', 'SOC', 'EDR'] },
  { t: 'Access Control', c: 'Cybersecurity', d: 'Policies and mechanisms regulating who can view or use resources in a computing environment.', r: ['Zero Trust', 'MFA', 'HSM'] },
];

export const glossaryStats = [
  { label: 'Terms', value: '216', suffix: '+' },
  { label: 'Topics', value: '12', suffix: '' },
  { label: 'Updated', value: '2026', suffix: '' },
];

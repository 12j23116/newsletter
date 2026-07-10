/**
 * BIOTECH topic CONTENT
 * ────────────────────────
 * All content for the Biotech topic page.
 * Edit this file to update text, topics, stats, sections.
 * Does NOT affect other topic pages.
 */

export const biotechContent = {
  name: 'Biotechnology',
  slug: 'biotech',
  tagline: 'CRISPR, gene therapy, AI drug discovery & the biotech revolution',
  description:
    'From CRISPR gene editing and AI-powered drug discovery to lab-grown organs and synthetic biology — explore the technologies reshaping medicine, agriculture, and materials science.',
  icon: '🧬',
  gradient: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
  accentColor: '#10b981',
  accentColor2: '#34d399',

  // ── Hero Stats ──────────────────────────────
  stats: [
    { value: '$1.77T', label: 'Global biotech market 2025' },
    { value: '13.6%', label: 'CAGR through 2035' },
    { value: '2,154', label: 'Gene therapies in development' },
    { value: '200+', label: 'AI drug candidates clinical stage' },
  ],

  // ── Section 1: Market Overview ──────────────
  marketOverview: {
    title: 'Biotechnology Market Overview & Growth Forecast',
    subtitle: 'A $1.77 trillion industry growing at 13.6% CAGR — driven by gene therapy breakthroughs, AI-powered drug discovery, and biosimilar adoption.',
    marketSize: [
      { region: 'Global', year2025: '$1.77T', year2030: '$3.95T', cagr: '13.6%' },
      { region: 'North America', year2025: '$706B', year2030: '$1.2T', cagr: '11.8%' },
      { region: 'Asia Pacific', year2025: '$294B', year2030: '$680B', cagr: '14.8%' },
      { region: 'Europe', year2025: '$387B', year2030: '$720B', cagr: '14.0%' },
    ],
    keyDrivers: [
      { title: 'AI-Powered Drug Discovery', desc: '200+ clinical-stage AI drug candidates; first FDA approval expected 2027–2028. Market growing from $5.5B to $28B by 2032.' },
      { title: 'Cell & Gene Therapy Pipeline', desc: '2,154 gene therapies in development; market valued at $26.35B in 2025, projected $146.31B by 2035 at 18.7% CAGR.' },
      { title: 'Patent Cliff Pressure', desc: 'Looming loss of exclusivity driving $370B in domestic manufacturing pledges and aggressive M&A activity.' },
      { title: 'Biosimilar Expansion', desc: 'Global biosimilar market reached $34–41B in 2025, growing at 17–18% CAGR through 2030.' },
    ],
  },

  // ── Section 2: CRISPR & Gene Editing ────────
  crispr: {
    title: 'CRISPR & Gene Editing: From Discovery to FDA Approval',
    subtitle: 'Casgevy became the first FDA-approved CRISPR therapy in 2024. Now base editing, prime editing, and epigenome editing are expanding the frontier.',
    technologies: [
      { name: 'CRISPR-Cas9', stage: 'FDA Approved', desc: 'Casgevy treats sickle cell disease by editing BCL11A to restore fetal hemoglobin. First commercial CRISPR therapy.', patients: '1,000+' },
      { name: 'Base Editing', stage: 'Clinical Trials', desc: 'Chemically converts one DNA base into another without double-strand breaks. Used in the first base-edited baby case (KJ Muldoon, 2025).', patients: '50+' },
      { name: 'Prime Editing', stage: 'Preclinical', desc: 'Search-and-replace genome editing with minimal off-target effects. Enables all 12 base-to-base conversions.', patients: '0' },
      { name: 'Epigenome Editing', stage: 'Research', desc: 'Modifies gene expression without altering DNA sequence. Reversible and tunable — potential for chronic disease treatment.', patients: '0' },
    ],
    milestones: [
      { year: '2024', event: 'FDA approves Casgevy — first CRISPR therapy for sickle cell disease' },
      { year: '2025', event: 'First base-edited baby treated for carbamoyl phosphate synthetase 1 deficiency' },
      { year: '2025', event: '51% of new gene therapy trials now target non-oncology indications' },
      { year: '2026', event: 'CRISPR diagnostics entering point-of-care testing market' },
      { year: '2027', event: 'First in-vivo CRISPR therapy for liver disease expected to file for approval' },
    ],
  },

  // ── Section 3: AI Drug Discovery ────────────
  aiDrugDiscovery: {
    title: 'AI-Powered Drug Discovery: The $28 Billion Revolution',
    subtitle: 'AI has crossed from interesting science to commercial inflection — 200+ clinical-stage candidates, Insilico Phase IIa proof-of-concept, and Isomorphic Labs entering oncology trials.',
    pipeline: [
      { phase: 'Phase I', count: 94, label: 'Safety & dosing' },
      { phase: 'Phase II', count: 56, label: 'Efficacy testing' },
      { phase: 'Phase III', count: 15, label: 'Large-scale trials' },
    ],
    breakthroughs: [
      { title: 'Insilico Medicine — Rentosertib (ISM001-055)', desc: 'First AI-designed drug to publish Phase IIa proof-of-concept in Nature Medicine (June 2025). TNIK inhibitor for idiopathic pulmonary fibrosis showed +98.4 mL FVC improvement vs. -20.3 mL decline in placebo. Advancing to Phase IIb in 2025–2026.' },
      { title: 'Isomorphic Labs — AlphaFold 3 Platform', desc: 'Google DeepMind spin-out raised $600M in April 2025. Partnerships with Novartis and Eli Lilly worth ~$3B. First human trials of AI-designed oncology drugs launched in 2025–2026.' },
      { title: 'Chai-2 — Generative Antibody Design', desc: 'AI model achieving 16% success rate designing antibodies from scratch — 100× better than traditional computational approaches. Reduces drug discovery from months to weeks.' },
      { title: 'Eli Lilly–NVIDIA Supercomputing', desc: 'Most powerful supercomputer owned by a pharmaceutical company, using NVIDIA BioNeMo platform. Roche, AstraZeneca, Sanofi, Pfizer, GSK all launching AI factory partnerships.' },
    ],
    marketProjection: { current: '$5.5B', projected: '$28B', year: '2032', cagr: '26%' },
  },

  // ── Section 4: Cell & Gene Therapy ──────────
  cellGeneTherapy: {
    title: 'Cell & Gene Therapy: 2,154 Therapies in Development',
    subtitle: 'CAR-T, gene replacement, and regenerative cell therapies are diversifying beyond oncology — 51% of new trials now target non-cancer indications.',
    topics: [
      { name: 'CAR-T Cell Therapy', count: '500+', desc: 'Engineered T-cells targeting cancer. Expanding to autoimmune diseases and solid tumors.' },
      { name: 'Gene Replacement', count: '1,070', desc: 'AAV-delivered genes for rare diseases. 1,070 therapies targeting rare diseases in pipeline.' },
      { name: 'Genetically Modified Cell Therapy', count: '2,154', desc: 'Total gene therapies including CAR-T in development as of Q1 2025.' },
      { name: 'Non-Genetically Modified Cell Therapy', count: '966', desc: 'Stem cell, NK cell, and TIL therapies — 22% of the total pipeline.' },
    ],
    marketData: { current: '$26.35B', projected: '$146.31B', year: '2035', cagr: '18.7%' },
  },

  // ── Section 5: mRNA & RNA Therapeutics ──────
  mrna: {
    title: 'mRNA & RNA Therapeutics: Beyond COVID Vaccines',
    subtitle: 'mRNA platforms are entering cancer vaccines, personalized therapeutics, and rare disease treatments — with self-amplifying RNA and circular RNA expanding the toolkit.',
    applications: [
      { name: 'Personalized Cancer Vaccines', desc: 'Moderna and BioNTech running Phase II trials for individualized mRNA cancer vaccines. Melanoma vaccine showing 44% reduction in recurrence risk.' },
      { name: 'Self-Amplifying mRNA (saRNA)', desc: 'Replicates inside cells, requiring 10–100× lower doses. Arcturus ARCT-154 approved in Japan — first saRNA vaccine.' },
      { name: 'Circular RNA (circRNA)', desc: 'More stable than linear mRNA. Longer protein expression, potential for continuous therapeutic protein production.' },
      { name: 'RNA Interference (RNAi)', desc: 'Silences specific genes. Alnylam Onpattro and Givlaari approved; expanding to cardiovascular and neurological targets.' },
    ],
  },

  // ── Section 6: Synthetic Biology ────────────
  syntheticBio: {
    title: 'Synthetic Biology & Generative Biology',
    subtitle: 'Evo 2 generates viable viral genomes. Chai-2 designs antibodies from scratch. Engineering life is becoming a software problem.',
    innovations: [
      { title: 'Evo 2 — Genome Foundation Model', desc: 'Genomic AI model trained on natural DNA sequences. Generates novel DNA, including viable synthetic viruses for gene therapy and vaccine development. Capable of prediction and design across DNA, RNA, and proteins.' },
      { title: 'Generative Biology', desc: 'AI models that design entirely new biological sequences — proteins, enzymes, and genetic circuits — with specified functions. Moving from screening to generation.' },
      { title: 'Programmable Cells', desc: 'Engineered cells that respond to specific signals — insulin release in response to glucose, therapeutic protein production on demand.' },
      { title: 'Bio-Based Materials', desc: 'Microbes engineered to produce biodegradable plastics, spider silk, and self-healing concrete. Sustainable manufacturing at molecular scale.' },
    ],
  },

  // ── Section 7: Regenerative Medicine ────────
  regenerative: {
    title: 'Regenerative Medicine & 3D Bioprinting',
    subtitle: 'The tissue engineering market is projected to grow from $51.21B to $144.28B by 2030 — driven by bioprinted organs, stem cell therapy, and lab-grown tissue.',
    technologies: [
      { name: '3D Bioprinting', desc: 'Layer-by-layer printing of living cells into tissue structures. Bioprinted tissues now used for drug toxicity screening with superior predictive power vs. 2D models.' },
      { name: 'Lab-Grown Organs', desc: 'Decellularized organ scaffolds recellularized with patient cells. Mini-organs (organoids) used for disease modeling and personalized drug testing.' },
      { name: 'Stem Cell Therapy', desc: '30+ stem cell therapies in clinical trials for neurological disorders, heart disease, and spinal cord injury. First stem cell therapy for heart disease in Phase III.' },
      { name: 'Cultivated Meat', desc: 'Lab-grown protein from animal cells. Approved in US and Singapore. Precision fermentation producing egg and dairy proteins without animals.' },
    ],
    marketSize: { current: '$51.21B', projected: '$144.28B', year: '2030', cagr: '18.82%' },
  },

  // ── Section 8: Biotech in Agriculture ───────
  agriculture: {
    title: 'Biotechnology in Agriculture & Food Security',
    subtitle: 'Drought-resistant crops, nitrogen-fixing microbes, and gene-edited plants are addressing climate-driven food security challenges.',
    innovations: [
      { title: 'CRISPR-Edited Crops', desc: 'Gene-edited plants with enhanced yield, drought tolerance, and disease resistance. Non-transgenic — regulatory pathway simpler than GMOs in many countries.' },
      { title: 'Nitrogen-Fixing Microbes', desc: 'Engineered soil microbes that fix atmospheric nitrogen, reducing synthetic fertilizer dependence by 20–40%. Pivot Bio PROVEN commercially deployed.' },
      { title: 'Vertical Farming Biotech', desc: 'Optimized crop varieties for controlled-environment agriculture. 90% less water, 350× yield per square foot vs. conventional farming.' },
      { title: 'Climate-Resilient Crops', desc: 'Heat-tolerant wheat, flood-resistant rice, and salt-tolerant varieties developed through marker-assisted breeding and gene editing.' },
    ],
  },

  // ── Section 9: Investment Landscape ─────────
  investment: {
    title: 'Biotech Investment & M&A Landscape',
    subtitle: '$68.5B raised in 2025 (up 11%). 39% of US biobucks flow to China. 88% of AI investment concentrated in R&D. Oncology leads M&A at $16.8B.',
    funding: [
      { topic: 'Total Biotech Financing 2025', amount: '$68.5B', change: '+11% YoY' },
      { topic: 'Life Sciences Venture Funding', amount: '~$18B', change: 'Recovering' },
      { topic: 'M&A Deal Value 2025', amount: '$99.7B', change: 'Disciplined' },
      { topic: 'Q1 2026 M&A Deal Value', amount: '$36B', change: '36% of 2025 total' },
    ],
    trends: [
      'Oncology led M&A by deal value (~$16.8B in >$1B deals)',
      'Neurology second driver (~$14.4B in M&A)',
      '39% of US biobucks flowing to China — expanding R&D investments',
      '88% of AI investment concentrated in R&D: drug target ID, design, trial recruitment',
      'Synthetic royalty agreements and innovative contracting structures emerging',
      '$370B pledged toward domestic manufacturing for tariff resilience',
    ],
  },

  // ── Section 10: Key Companies ───────────────
  companies: {
    title: 'Key Companies Shaping Biotech',
    subtitle: 'From CRISPR pioneers to AI drug discovery platforms — the companies defining the next decade of biotechnology.',
    list: [
      { name: 'Vertex Pharmaceuticals', focus: 'CRISPR (Casgevy), CF, sickle cell', stage: 'Commercial', notable: 'First CRISPR therapy on market' },
      { name: 'Insilico Medicine', focus: 'AI drug discovery, TNIK inhibitor', stage: 'Phase IIb', notable: 'First AI drug Phase IIa proof-of-concept' },
      { name: 'Isomorphic Labs', focus: 'AlphaFold 3, AI oncology drugs', stage: 'Phase I', notable: '$600M raised, $3B pharma partnerships' },
      { name: 'Moderna', focus: 'mRNA vaccines, cancer therapeutics', stage: 'Commercial', notable: 'Personalized cancer vaccine Phase II' },
      { name: 'CRISPR Therapeutics', focus: 'Gene editing, CAR-T, regenerative', stage: 'Commercial', notable: 'Casgevy approval, diabetes program' },
      { name: 'Recursion Pharma', focus: 'AI phenomic screening', stage: 'Phase II', notable: 'REC-994 setback, pipeline restructuring' },
    ],
  },

  // ── Section 11: Future Outlook ──────────────
  futureOutlook: {
    title: 'Biotech 2026–2030: What to Expect',
    subtitle: 'The next four years will determine whether AI drug discovery delivers on its promise, whether gene therapy becomes routine, and whether lab-grown organs reach patients.',
    predictions: [
      { year: '2026', prediction: 'CRISPR diagnostics enter point-of-care testing', detail: 'First in-vivo CRISPR therapy files for FDA review. Expanded access programs for sickle cell therapies.' },
      { year: '2027', prediction: 'First AI-discovered drug receives FDA approval (60% probability)', detail: 'Personalized mRNA cancer vaccine Phase III results. Multiple AI-drug candidates advance from Phase I to Phase II.' },
      { year: '2028', prediction: 'Cell & gene therapy market crosses $50B', detail: 'Base editing therapies enter pivotal trials for metabolic disorders. First off-the-shelf CAR-T therapy approved.' },
      { year: '2029', prediction: 'Bioprinted tissue patches for cardiac repair enter clinical trials', detail: 'Biosimilars capture 30% of biologics market. Lab-grown meat reaches price parity in select categories.' },
      { year: '2030', prediction: 'Biotech market reaches $3.95T', detail: '70–80 novel active substances launching annually. AI drug discovery market hits $28B. 3D bioprinted organs enter preclinical testing.' },
    ],
  },

  // ── Section 12: FAQ ─────────────────────────
  faq: {
    title: 'Biotechnology Frequently Asked Questions',
    subtitle: 'Structured answers to the most searched biotech questions — optimized for AI search engines and rich snippets.',
    items: [
      { q: 'What is CRISPR gene editing?', a: 'CRISPR-Cas9 is a precision gene-editing tool that uses a guide RNA to direct the Cas9 enzyme to a specific DNA sequence, where it creates a double-strand break. The cell\'s natural repair mechanisms then enable targeted modifications — corrections, insertions, or deletions. The first FDA-approved CRISPR therapy, Casgevy, treats sickle cell disease by editing BCL11A to restore fetal hemoglobin production.' },
      { q: 'How is AI used in drug discovery?', a: 'AI accelerates drug discovery by predicting protein structures (AlphaFold 3), designing novel molecules from scratch (Chai-2 antibodies), identifying drug targets from genomic data, and optimizing clinical trial design. Over 200 AI-discovered drug candidates are in clinical trials as of 2026, with the first FDA approval expected by 2027–2028. The AI drug discovery market is projected to reach $28 billion by 2032.' },
      { q: 'What is the difference between gene therapy and cell therapy?', a: 'Gene therapy introduces, removes, or modifies genetic material to treat disease — often using viral vectors (AAV) to deliver therapeutic genes. Cell therapy transfers living cells into a patient to treat disease — such as CAR-T cells engineered to target cancer. Genetically modified cell therapies (like CAR-T) combine both approaches. As of Q1 2025, 2,154 gene therapies and 966 non-genetically modified cell therapies are in development.' },
      { q: 'How big is the biotechnology market?', a: 'The global biotechnology market was valued at approximately $1.77 trillion in 2025 and is projected to grow at a CAGR of 13.6% through 2035, reaching $3.95 trillion by 2030. The US market is $316.41B, Europe $386.6B, and Asia Pacific $293.9B. The cell and gene therapy segment alone is projected to grow from $26.35B in 2025 to $146.31B by 2035.' },
      { q: 'What is synthetic biology?', a: 'Synthetic biology applies engineering principles to biology — designing and constructing new biological parts, devices, and systems. It includes programmable cells, bio-based materials, and AI-generated biological sequences. Tools like Evo 2 can generate viable synthetic viral genomes, while Chai-2 designs antibodies from scratch with 16% success rate — 100× better than traditional computational methods.' },
      { q: 'When will lab-grown organs be available?', a: '3D bioprinted tissues are already used for drug toxicity screening and disease modeling. Bioprinted tissue patches for cardiac repair are expected to enter clinical trials by 2029. Full lab-grown organs for transplantation remain further out, but decellularized organ scaffolds recellularized with patient cells are in early clinical testing. The tissue engineering market is projected to grow from $51.21B to $144.28B by 2030.' },
      { q: 'What is AlphaFold 3 and why is it important?', a: 'AlphaFold 3, developed by Google DeepMind and Isomorphic Labs, predicts the 3D structures of proteins, DNA, RNA, and small molecules — and crucially, how they interact. This goes beyond AlphaFold 2\'s protein-only predictions. AlphaFold 3 enables researchers to model drug-target interactions computationally, potentially saving years of lab work. Isomorphic Labs raised $600M and has $3B in pharma partnerships to develop AI-discovered drugs using AlphaFold 3.' },
      { q: 'What is Casgevy and how does it work?', a: 'Casgevy is the world\'s first FDA-approved CRISPR-Cas9 therapy, developed by Vertex Pharmaceuticals and CRISPR Therapeutics. It treats sickle cell disease and beta-thalassemia by editing the BCL11A gene in patient stem cells to reactivate fetal hemoglobin production. The treatment involves collecting stem cells, editing them ex vivo, and reinfusing after myeloablative conditioning. It costs ~$2.2M per patient. As of 2026, over 100 patients have been treated with encouraging outcomes.' },
    ],
  },

  // ── SEO Keywords ────────────────────────────
  seoKeywords: {
    primary: ['biotechnology', 'biotech', 'CRISPR', 'gene therapy', 'synthetic biology', 'AI drug discovery'],
    secondary: ['cell therapy', 'mRNA vaccines', 'regenerative medicine', '3D bioprinting', 'biosimilars', 'precision medicine'],
    longTail: [
      'how does CRISPR gene editing work',
      'AI powered drug discovery companies',
      'cell and gene therapy market size',
      'mRNA cancer vaccine clinical trials',
      'synthetic biology applications in healthcare',
      '3D bioprinting organ transplantation timeline',
      'biotechnology investment trends 2026',
    ],
  },
};

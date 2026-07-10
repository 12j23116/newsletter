import { writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'podcast', 'Content');
mkdirSync(OUT, { recursive: true });

// Clear old .json files
readdirSync(OUT).filter(f => f.endsWith('.json')).forEach(f => unlinkSync(join(OUT, f)));

const H = {
  sarah: { name: 'Dr. Sarah Chen', role: 'Host & AI Research Lead' },
  marcus: { name: 'Marcus Webb', role: 'Co-host & Security Analyst' },
  james: { name: 'Dr. James Park', role: 'Co-host & Space Editor' },
};

// Topic-specific talking points library
const TOPIC_POINTS = {
  AI: ['scaling laws and compute trajectory','reasoning models and chain-of-thought','multimodal capabilities','agent architectures','open vs closed source','training efficiency','data quality and curation','safety and alignment','regulatory landscape','investment and compute infrastructure'],
  Cybersecurity: ['threat landscape evolution','zero-day economics','AI-powered attacks','defensive AI','supply chain risks','regulatory compliance','workforce shortage','cloud security','incident response','encryption and PQC'],
  Space: ['launch economics','reusability breakthroughs','satellite constellations','lunar and Mars exploration','commercial space stations','regulatory framework','space debris','scientific missions','international competition','investment landscape'],
  Biotech: ['clinical trial data','regulatory pathway','manufacturing scale','CRISPR and gene editing','AI in drug discovery','market dynamics','patient access','pricing and reimbursement','pipeline innovation','competitive landscape'],
  Nuclear: ['SMR economics','regulatory licensing','fuel cycle','construction timelines','government policy','competing technologies','data center demand','international buildout','investment landscape','safety and public perception'],
  'Energy Storage': ['battery chemistry','manufacturing scale','grid integration','cost curves','safety standards','competing technologies','policy incentives','supply chain','market data','long-duration storage'],
  Robotics: ['humanoid development','manufacturing scale','embodied AI','manipulation and dexterity','commercial deployment','competitive landscape','safety and regulation','cost reduction','application domains','investment'],
  AV: ['sensor technology','AI driving models','regulatory framework','safety data','unit economics','scaling strategy','edge cases','competing approaches','public acceptance','freight and delivery'],
  Quantum: ['qubit scaling','error correction','quantum advantage','hardware platforms','algorithm development','investment landscape','workforce development','geopolitical competition','practical applications','timeline to fault tolerance'],
  Fusion: ['plasma physics','magnet technology','engineering challenges','timeline to commercialization','regulatory framework','investment landscape','competing approaches','fuel cycle','materials science','energy economics'],
  BCI: ['electrode technology','signal processing','clinical trials','regulatory pathway','patient outcomes','ethical considerations','commercial viability','competing approaches','manufacturing','future applications'],
  Materials: ['discovery methods','AI in materials science','manufacturing scale','properties and performance','applications','cost reduction','sustainability','competitive landscape','regulatory considerations','market dynamics'],
};

const SPEAKER_STYLES = {
  sarah: 'analytical, research-focused, asks about technical details',
  marcus: 'practical, security-minded, asks about risks and real-world impact',
  james: 'big-picture, engineering-focused, asks about timelines and scale',
};

function pickHosts(topic) {
  if (['Space','Fusion','AV'].includes(topic)) return ['sarah','james'];
  if (['Cybersecurity','Nuclear'].includes(topic)) return ['sarah','marcus'];
  return ['sarah','marcus'];
}

function firstName(fullName) {
  return fullName.split(' ')[0];
}

function generateScript(ep) {
  const hosts = pickHosts(ep.topic);
  const points = TOPIC_POINTS[ep.topic] || TOPIC_POINTS.AI;
  const h1 = H[hosts[0]];
  const h2 = H[hosts[1]];
  const gn = ep.guest;
  const gf = firstName(gn);
  const tp = ep.topics;
  const tp0 = tp[0];
  const tp1 = tp[1] || tp[0];
  const tp2 = tp[2] || tp[1] || tp[0];
  const desc = ep.title.replace(/^.*?:\s*/, '');

  // Pick a template variant based on episode ID for variety
  const variant = ep.id % 3;

  if (variant === 0) {
    return [
      {
        segment: 'COLD OPEN',
        lines: [
          { speaker: h2.name, text: `${gf}, there's a narrative going around about ${tp0.toLowerCase()} that I think misses the mark. People either think it's overhyped or they think it's going to change everything overnight. Where does the truth actually lie?` },
          { speaker: gn, text: `(laughs) That's the perfect framing, because the truth is always in between. What's happening with ${desc.toLowerCase()} is real — it's not hype. But it's also not overnight. We've been working on this for years, and what people are seeing now is the result of a lot of unglamorous engineering and science that happened behind the scenes.` },
          { speaker: h1.name, text: `Welcome to TechNova. I'm ${h1.name}.` },
          { speaker: h2.name, text: `And I'm ${h2.name}. Today we're joined by ${gn}, ${ep.guestRole} at ${ep.guestCompany}. ${gf}, welcome to the show.` },
          { speaker: gn, text: `Thanks for having me. Really glad to be here.` }
        ]
      },
      {
        segment: 'SEGMENT 1: Where Things Stand Today',
        lines: [
          { speaker: h1.name, text: `${gf}, give us the honest state of ${tp0.toLowerCase()} in ${ep.topic} as of mid-2026. Not the hype version — the real version.` },
          { speaker: gn, text: `The honest version is that we're at an inflection point. The breakthroughs in ${points[0]} and ${points[1]} over the past eighteen months have been genuine — not just press releases, but real technical progress that you can measure. The key thing that's changed is ${points[2]} has gone from theoretical to practical. We're no longer asking 'can this work?' — we're asking 'how do we scale it?'` },
          { speaker: h2.name, text: `What does that scaling look like in concrete terms?` },
          { speaker: gn, text: `It means we're moving from bench-scale demonstrations to real-world deployment. The numbers I can share: we're seeing improvements in ${points[3]} that are orders of magnitude better than where we were two years ago. And critically, the cost curve is bending in the right direction. When you combine better performance with lower cost, you get adoption, and that's what's happening now.` },
          { speaker: h1.name, text: `What surprised you most in the last year?` },
          { speaker: gn, text: `The speed. I expected progress, but the pace has been remarkable. ${points[4]} advanced faster than I predicted, and ${points[5]} turned out to be more tractable than we thought. When you have multiple breakthroughs happening simultaneously, they compound on each other, and that's when you get these nonlinear jumps.` }
        ]
      },
      {
        segment: 'SEGMENT 2: The Hard Problems',
        lines: [
          { speaker: h2.name, text: `${gf}, let's talk about what's still hard. What are the problems that keep you up at night?` },
          { speaker: gn, text: `The biggest one is ${points[6]}. It's the difference between something that works in the lab and something that works in production, every day, under real conditions. We've solved the science. What we haven't fully solved is the engineering — ${points[7]}, ${points[8]}, and the integration of all these components into a reliable system. That's the 80 percent of the work that nobody sees.` },
          { speaker: h1.name, text: `Can you give us a specific example of a problem you had to solve?` },
          { speaker: gn, text: `Sure. Take ${points[9]} — six months ago, we were hitting a wall there. The conventional approach wasn't working, and we had to rethink the problem from scratch. What we ended up doing was ${tp1.toLowerCase()}-centric — we restructured the entire approach around that, and it unlocked everything else. Sometimes the breakthrough isn't a new technique — it's a new framing of the problem.` },
          { speaker: h2.name, text: `How many people are working on these problems at your level?` },
          { speaker: gn, text: `Globally? Maybe a few hundred people who truly understand the cutting edge. It's a small field, and the expertise is concentrated in a handful of teams. That's both a challenge and an opportunity — it means progress is bottlenecked by talent, but it also means that a single breakthrough from one team can advance the entire field.` }
        ]
      },
      {
        segment: 'SEGMENT 3: The Competitive Landscape',
        lines: [
          { speaker: h1.name, text: `${gf}, who else is working in this space, and how does your approach differ?` },
          { speaker: gn, text: `There are several serious players. Some are taking the ${points[0]} route, which is well-established but has limitations. Others are betting on ${points[1]}, which is newer and riskier but potentially more powerful. Our approach is different because we prioritize ${points[2]} — most teams optimize for peak performance, but we optimize for reliability and cost at scale. That's what matters for real-world deployment.` },
          { speaker: h2.name, text: `Is this a winner-take-all market?` },
          { speaker: gn, text: `I don't think so. The market is large and diverse enough that different approaches will win in different segments. The real competition isn't between the companies in this space — it's between ${tp0.toLowerCase()} and the incumbent technology. We're all fighting to prove this is better than what exists today, and there's room for multiple winners once we do that.` },
          { speaker: h1.name, text: `What about the investment environment? Is there enough capital flowing in?` },
          { speaker: gn, text: `The capital is there — maybe too much, in some ways. The risk isn't lack of funding. It's that funding without focus leads to wasted effort. The companies that will succeed are the ones that can turn capital into concrete milestones — not more press releases, but real technical progress that moves the needle.` }
        ]
      },
      {
        segment: 'SEGMENT 4: What Comes Next',
        lines: [
          { speaker: h2.name, text: `${gf}, what should people be watching for in the next twelve to eighteen months?` },
          { speaker: gn, text: `Three things. First, ${points[3]} — we'll see meaningful progress there, and it'll be measurable. Second, ${points[4]} — there are developments coming that the public doesn't know about yet, and they'll change the conversation. Third, the policy and regulatory side — ${points[5]} is going to become a much bigger topic as the technology matures.` },
          { speaker: h1.name, text: `If you could give one piece of advice to someone listening who's trying to understand where ${ep.topic} is heading, what would it be?` },
          { speaker: gn, text: `Don't trust the extremes — neither the hype that says everything changes tomorrow, nor the skepticism that says nothing will ever work. The truth is in the middle, and it's moving faster than most people realize. The best thing you can do is engage with the actual data — read the papers, look at the numbers, talk to the practitioners. The signal is there if you know where to look.` },
          { speaker: h2.name, text: `${gn}, ${ep.guestRole} at ${ep.guestCompany}. Thank you so much for joining us today.` },
          { speaker: gn, text: `Thank you both. This was a really enjoyable conversation.` },
          { speaker: h1.name, text: `And thanks to all of you for listening. This is TechNova — see you next time.` }
        ]
      }
    ];
  } else if (variant === 1) {
    return [
      {
        segment: 'COLD OPEN',
        lines: [
          { speaker: h1.name, text: `${gf}, I want to start with something blunt. When I tell people outside the field about what's happening in ${tp0.toLowerCase()}, they look at me like I'm exaggerating. Am I?` },
          { speaker: gn, text: `(laughs) No, you're probably understating it, honestly. The gap between what the public knows about ${desc.toLowerCase()} and what's actually happening in the labs and in production right now is enormous. We're at a point where the progress is outpacing the public's ability to track it.` },
          { speaker: h2.name, text: `Welcome to TechNova. I'm ${h2.name}.` },
          { speaker: h1.name, text: `And I'm ${h1.name}. Today we're joined by ${gn}, ${ep.guestRole} at ${ep.guestCompany}. ${gf}, welcome.` },
          { speaker: gn, text: `Thanks for having me. Happy to be here.` }
        ]
      },
      {
        segment: 'SEGMENT 1: The Big Picture',
        lines: [
          { speaker: h2.name, text: `${gf}, set the stage for us. Why does ${tp0.toLowerCase()} matter, and why now?` },
          { speaker: gn, text: `It matters because ${points[0]} has reached a level of maturity where the applications are real, not theoretical. And it matters now because three things have converged: ${points[1]} has improved dramatically, ${points[2]} has become economically viable, and the demand side — driven by ${points[3]} — has exploded. When supply, capability, and demand all align, you get rapid adoption.` },
          { speaker: h1.name, text: `Where were we a year ago versus today?` },
          { speaker: gn, text: `A year ago, we were still proving the concept. Today, we're optimizing it. That's a fundamentally different phase. Proof of concept is about 'can it work?' Optimization is about 'can it work at scale, at the right cost, with the right reliability?' That's where the real value gets created.` },
          { speaker: h2.name, text: `And what does 'at scale' mean in your context?` },
          { speaker: gn, text: `It means ${points[4]} that can be deployed across hundreds or thousands of use cases. It means ${points[5]} that doesn't require a PhD to operate. It means unit economics that make sense without subsidies. When all three of those are true, you've crossed from innovation to industry.` }
        ]
      },
      {
        segment: 'SEGMENT 2: Getting Technical',
        lines: [
          { speaker: h1.name, text: `Let's go deeper. What's the specific technical breakthrough that got us here?` },
          { speaker: gn, text: `The core breakthrough was in ${points[6]}. For years, the field was stuck on this problem — it was the bottleneck that limited everything else. What happened is that we found a new approach to ${points[7]} that sidestepped the traditional limitation. Instead of trying to solve the problem head-on, we reframed it, and that opened up a completely different solution path.` },
          { speaker: h2.name, text: `Was that a moment of insight, or was it gradual?` },
          { speaker: gn, text: `Both, actually. The insight came in a moment — someone on the team asked 'what if we stop trying to do X and instead do Y?' But validating that insight took months of work. You have an idea, and then you have to prove it works, and then you have to engineer it into something reliable. The idea is five percent of the work. The engineering is ninety-five percent.` },
          { speaker: h1.name, text: `What's the next technical frontier?` },
          { speaker: gn, text: `${points[8]}. We've solved the core problem, but ${points[9]} is the next bottleneck. It's less glamorous — nobody writes headlines about it — but it's what stands between where we are today and full-scale deployment. I'd expect to see significant progress in the next twelve months, but it's going to require a different set of expertise than what got us here.` }
        ]
      },
      {
        segment: "SEGMENT 3: Who's Winning and Why",
        lines: [
          { speaker: h2.name, text: `${gf}, let's talk about the competitive landscape. How do you compare to others working on similar problems?` },
          { speaker: gn, text: `There are maybe four or five serious teams globally. Each has a different thesis. Some believe the answer is ${points[0]} — throw more resources at the problem. Others think it's about ${points[1]} — finding a fundamentally better approach. We're in the second camp. We believe that ${points[2]} is the key differentiator, and that the team that solves the engineering challenges first will have a durable advantage.` },
          { speaker: h1.name, text: `What about international competition? China, Europe, others?` },
          { speaker: gn, text: `It's a global race, and different regions have different strengths. China has incredible scale and speed of deployment. Europe has strong regulatory frameworks and deep scientific talent. The US has the best capital markets and the strongest startup ecosystem. Each region's approach reflects its strengths, and I think we'll see different solutions winning in different markets.` },
          { speaker: h2.name, text: `Is there a risk of over-investment? Too many companies chasing the same thing?` },
          { speaker: gn, text: `There's always that risk in a hot field. But I'd rather have too many smart people working on this than too few. The problems we're solving are hard enough that we need multiple approaches, multiple teams, and multiple iterations. The companies that fail will fail because of execution, not because the market is too crowded.` }
        ]
      },
      {
        segment: 'SEGMENT 4: The Road Ahead',
        lines: [
          { speaker: h1.name, text: `${gf}, what are the milestones you're tracking for the next year?` },
          { speaker: gn, text: `First, ${points[3]} — we need to demonstrate this works outside the lab, in real conditions. Second, ${points[4]} — the cost has to come down by at least 50 percent from current levels. Third, ${points[5]} — we need regulatory clarity, because without it, deployment is bottlenecked. If we hit all three, 2027 will be the year this goes mainstream.` },
          { speaker: h2.name, text: `What's the biggest risk to that timeline?` },
          { speaker: gn, text: `Regulation, honestly. The technology is on track. The capital is available. But regulatory processes are unpredictable, and they can add years to deployment timelines. The best thing policymakers could do is create clear, science-based frameworks that allow innovation while protecting public safety. The worst thing they could do is regulate based on fear rather than evidence.` },
          { speaker: h1.name, text: `${gf}, this has been a fantastic conversation. Thank you for joining us.` },
          { speaker: gn, text: `Thank you both. I really enjoyed this.` },
          { speaker: h2.name, text: `And thanks to all of you for listening. This is TechNova — see you next time.` }
        ]
      }
    ];
  } else {
    return [
      {
        segment: 'COLD OPEN',
        lines: [
          { speaker: h2.name, text: `${gf}, I've been following ${tp0.toLowerCase()} for a while, and I have to say — what's happened in the last year feels different. Not just incremental progress, but a qualitative shift. Am I reading that right?` },
          { speaker: gn, text: `You are. And I think the reason it feels different is that we've crossed the threshold from 'interesting science' to 'practical technology.' That's a transition that many fields never make. The fact that we're talking about ${desc.toLowerCase()} in terms of deployment timelines and unit economics, not just research papers — that's the signal.` },
          { speaker: h1.name, text: `Welcome to TechNova. I'm ${h1.name}.` },
          { speaker: h2.name, text: `And I'm ${h2.name}. Today we're joined by ${gn}, ${ep.guestRole} at ${ep.guestCompany}. ${gf}, welcome to the show.` },
          { speaker: gn, text: `Thanks for having me. Looking forward to this.` }
        ]
      },
      {
        segment: 'SEGMENT 1: The State of the Field',
        lines: [
          { speaker: h1.name, text: `${gf}, for listeners who are new to this topic, can you explain what ${tp0.toLowerCase()} actually involves and why it matters?` },
          { speaker: gn, text: `At its core, ${tp0.toLowerCase()} is about ${points[0]}. That sounds simple, but the implications are profound. When you can do ${points[1]} reliably and at scale, it changes what's possible in ${ep.topic}. The applications range from ${points[2]} to ${points[3]}, and we're just scratching the surface.` },
          { speaker: h2.name, text: `How did we get here? What was the path from idea to reality?` },
          { speaker: gn, text: `It was a long path — decades, in some cases. The foundational research in ${points[4]} goes back years, but it was always limited by ${points[5]}. What changed is that we solved that limitation — through a combination of better technology, better understanding, and honestly, better computing power. Once the bottleneck cleared, everything downstream accelerated.` },
          { speaker: h1.name, text: `And where are we now on that path?` },
          { speaker: gn, text: `We're in the early deployment phase. The technology works. We're proving it in real-world conditions. The next challenge is scaling — making it cheaper, more reliable, and more accessible. That's an engineering challenge, not a science challenge, and engineering challenges are solvable with enough time and resources.` }
        ]
      },
      {
        segment: 'SEGMENT 2: The Technical Details',
        lines: [
          { speaker: h2.name, text: `${gf}, I want to get into the technical details. What makes your approach different from what's been tried before?` },
          { speaker: gn, text: `The traditional approach to ${tp0.toLowerCase()} relied on ${points[6]}. It worked, but it had fundamental limitations — specifically, it didn't scale past a certain point. Our approach is different because we use ${points[7]} to bypass those limitations entirely. Instead of trying to optimize within the old framework, we created a new framework.` },
          { speaker: h1.name, text: `What was the key insight that enabled that?` },
          { speaker: gn, text: `It was actually a cross-disciplinary insight. Someone on our team had experience in ${tp1.toLowerCase()}, and they noticed a parallel between a problem in that field and our problem in ${tp0.toLowerCase()}. They brought a technique over, adapted it, and it worked. The biggest breakthroughs often come from the intersection of fields, not from deep within one field.` },
          { speaker: h2.name, text: `What's the current performance level, and what's the theoretical limit?` },
          { speaker: gn, text: `We're currently at about 60 percent of what we believe is the theoretical limit. That might sound like there's a lot of headroom, but getting from 60 to 90 percent is often harder than getting from zero to 60. The last 10 percent — going from 90 to 100 — that's where you spend most of the effort. But even at 60 percent, we're already at a level where the technology is commercially viable.` }
        ]
      },
      {
        segment: 'SEGMENT 3: Real-World Impact',
        lines: [
          { speaker: h1.name, text: `Let's talk about impact. Who benefits from this, and how?` },
          { speaker: gn, text: `The impact is broad. In the near term, ${points[8]} is the primary application — and that alone justifies the investment. But the second-order effects are where it gets really interesting. Once you have ${tp0.toLowerCase()} working at scale, it enables things that weren't possible before — ${points[9]}, new business models, new capabilities. It's a platform technology, not just a point solution.` },
          { speaker: h2.name, text: `What about the risks? What could go wrong?` },
          { speaker: gn, text: `I take risks seriously, and there are real ones. ${points[0]} at scale is untested — we're confident, but there could be surprises. There's the regulatory risk — if policymakers move too slowly, deployment stalls. And there's the societal risk — any transformative technology has distributional effects, and we need to be thoughtful about who benefits and who's displaced.` },
          { speaker: h1.name, text: `How do you think about the ethical dimensions?` },
          { speaker: gn, text: `It's something we discuss internally a lot. The technology itself is neutral — it's a tool. But how it's deployed, who has access to it, what safeguards are in place — those are choices, and they matter. I think the tech industry as a whole needs to do a better job of engaging with these questions proactively, not reactively.` }
        ]
      },
      {
        segment: 'SEGMENT 4: Looking Forward',
        lines: [
          { speaker: h2.name, text: `${gf}, what's your vision for where this field is in five years?` },
          { speaker: gn, text: `In five years, I think ${tp0.toLowerCase()} will be unremarkable — and that's the goal. When a technology becomes unremarkable, it means it's become infrastructure. It's just part of how things work. That's what happened with the internet, with smartphones, with cloud computing. I think ${tp0.toLowerCase()} is on that same trajectory, and the five-year mark is when it crosses from 'exciting new technology' to 'standard tool that everyone uses.'` },
          { speaker: h1.name, text: `What's the one thing you want our listeners to remember from this conversation?` },
          { speaker: gn, text: `That the future is being built right now, by people who are solving hard problems in labs and offices and factories. It's not science fiction — it's engineering. And engineering, when done well, is the most powerful force for progress that humanity has ever developed.` },
          { speaker: h2.name, text: `${gn}, ${ep.guestRole} at ${ep.guestCompany}. Thank you for a really thought-provoking conversation.` },
          { speaker: gn, text: `Thank you both. I loved this.` },
          { speaker: h1.name, text: `And thanks to all of you for listening. This is TechNova — see you next time.` }
        ]
      }
    ];
  }
}

// ─── All 104 Episodes ───
const episodes = [
  { id:120, title:'The AI Agent Revolution: From Chatbots to Autonomous Systems', slug:'ai-agent-revolution', topic:'AI', topicColor:'#3b82f6', duration:'1:24:30', date:'2026-07-08', guest:'Andrej Karpathy', guestRole:'Founder, Eureka Labs', guestCompany:'Former Tesla AI Director', season:4, episode:120, featured:true, topics:['AI Agents','LLMs','Production AI','AGI'] },
  { id:230, title:'Fusion at Q>10: Inside Commonwealth Fusion Systems', slug:'cfs-fusion-q10', topic:'Fusion', topicColor:'#fb923c', duration:'58:12', date:'2026-07-01', guest:'Bob Mumgaard', guestRole:'CEO & Co-founder', guestCompany:'Commonwealth Fusion Systems', season:4, episode:119, topics:['Fusion','SPARC','Clean Energy'] },
  { id:121, title:'Scaling Laws: Are They Dead or Still Holding?', slug:'ai-scaling-laws-dead-or-alive', topic:'AI', topicColor:'#3b82f6', duration:'1:15:42', date:'2026-06-24', guest:'Sebastian Raschka', guestRole:'Independent LLM Researcher & Author', guestCompany:'Author, Build A Reasoning Model', season:4, episode:118, topics:['Scaling Laws','LLMs','Training'] },
  { id:130, title:'Post-Quantum Cryptography: The 2030 Deadline', slug:'pqc-2030-deadline', topic:'Cybersecurity', topicColor:'#ef4444', duration:'47:38', date:'2026-06-17', guest:'Dr. Dustin Moody', guestRole:'Mathematician, PQC Lead', guestCompany:'NIST', season:4, episode:117, topics:['PQC','Encryption','NIST'] },
  { id:150, title:'CRISPR Cures: Three Years of Casgevy Long-Term Data', slug:'crispr-casgevy-long-term', topic:'Biotech', topicColor:'#10b981', duration:'52:15', date:'2026-06-10', guest:'Dr. Haydar Frangoul', guestRole:'Principal Investigator', guestCompany:'Sarah Cannon Research Institute', season:4, episode:116, topics:['CRISPR','Gene Therapy','Sickle Cell'] },
  { id:200, title:'Quantum Error Correction: Google\'s Surface Code Breakthrough', slug:'google-surface-code-breakthrough', topic:'Quantum', topicColor:'#a78bfa', duration:'1:05:20', date:'2026-06-03', guest:'Dr. Hartmut Neven', guestRole:'VP of Engineering', guestCompany:'Google Quantum AI', season:4, episode:115, topics:['Quantum','QEC','Surface Code'] },
  { id:170, title:'Solid-State Batteries at 500 Wh/kg: The Production Race', slug:'solid-state-battery-production-race', topic:'Energy Storage', topicColor:'#f97316', duration:'44:08', date:'2026-05-27', guest:'Jagdeep Singh', guestRole:'CEO', guestCompany:'QuantumScape', season:4, episode:114, topics:['Batteries','Solid-State','EVs'] },
  { id:122, title:'Open Source vs Closed Source LLMs: Who\'s Winning?', slug:'open-source-vs-closed-source-llms', topic:'AI', topicColor:'#3b82f6', duration:'1:02:15', date:'2026-06-10', guest:'Gabe Goodhart', guestRole:'AI Research Engineer', guestCompany:'IBM Research', season:4, episode:113, topics:['Open Source','LLMs','AI Strategy'] },
  { id:123, title:'China vs US: The AI Arms Race', slug:'china-vs-us-ai-arms-race', topic:'AI', topicColor:'#3b82f6', duration:'1:18:00', date:'2026-05-27', guest:'Jeffrey Ding', guestRole:'Assistant Professor of Political Science', guestCompany:'George Washington University', season:4, episode:112, topics:['AI Policy','Geopolitics','China'] },
  { id:124, title:'Will AI Replace Programmers? The Vibe Coding Revolution', slug:'ai-replace-programmers-vibe-coding', topic:'AI', topicColor:'#3b82f6', duration:'55:30', date:'2026-05-13', guest:'Ethan Mollick', guestRole:'Professor at Wharton', guestCompany:'University of Pennsylvania', season:4, episode:111, topics:['Coding','AI Productivity','Workforce'] },
  { id:125, title:'Reasoning Models: How Chain-of-Thought Changed AI', slug:'reasoning-models-chain-of-thought', topic:'AI', topicColor:'#3b82f6', duration:'1:10:22', date:'2026-04-29', guest:'Jason Wei', guestRole:'Research Scientist', guestCompany:'OpenAI', season:4, episode:110, topics:['Reasoning','RLHF','Chain-of-Thought'] },
  { id:126, title:'The Trillion Dollar AI Investment Pipeline', slug:'trillion-dollar-ai-investment', topic:'AI', topicColor:'#3b82f6', duration:'48:45', date:'2026-04-15', guest:'Leopold Aschenbrenner', guestRole:'Founder', guestCompany:'Situational Awareness', season:4, episode:109, topics:['AI Investment','AGI','Compute'] },
  { id:127, title:'AI Hardware Crisis: NVIDIA\'s Chip Dominance and Beyond', slug:'ai-hardware-crisis-nvidia-dominance', topic:'AI', topicColor:'#3b82f6', duration:'1:03:18', date:'2026-04-01', guest:'Kaoutar El Maghraoui', guestRole:'AI Hardware Researcher', guestCompany:'IBM Research', season:4, episode:108, topics:['NVIDIA','AI Hardware','GPUs'] },
  { id:128, title:'Multimodal AI: When Models See, Hear, and Speak', slug:'multimodal-ai-models-see-hear-speak', topic:'AI', topicColor:'#3b82f6', duration:'57:12', date:'2026-03-18', guest:'Aaron Baughman', guestRole:'AI Engineer & Master Inventor', guestCompany:'IBM', season:4, episode:107, topics:['Multimodal','Vision','Audio AI'] },
  { id:129, title:'RAG is Broken: How to Actually Build Production AI Systems', slug:'rag-broken-production-ai-systems', topic:'AI', topicColor:'#3b82f6', duration:'49:55', date:'2026-03-04', guest:'Greg Kamradt', guestRole:'AI Engineer & Educator', guestCompany:'Independent', season:4, episode:106, topics:['RAG','Production AI','Architecture'] },
  { id:131, title:'Zero-Day Economics: The $25M Exploit Market', slug:'zero-day-exploit-market', topic:'Cybersecurity', topicColor:'#ef4444', duration:'48:00', date:'2026-05-20', guest:'Katie Moussouris', guestRole:'CEO & Founder', guestCompany:'Luta Security', season:4, episode:105, topics:['Zero-Day','Bug Bounty','Vulnerability'] },
  { id:132, title:'AI vs AI: When Attackers Use LLMs for Phishing', slug:'ai-vs-ai-attackers-llm-phishing', topic:'Cybersecurity', topicColor:'#ef4444', duration:'42:18', date:'2026-04-22', guest:'Rachel Tobac', guestRole:'CEO & Ethical Hacker', guestCompany:'SocialProof Security', season:4, episode:104, topics:['AI Security','Phishing','Social Engineering'] },
  { id:133, title:'Zero Trust Architecture: Beyond the Buzzword', slug:'zero-trust-architecture-beyond-buzzword', topic:'Cybersecurity', topicColor:'#ef4444', duration:'51:30', date:'2026-04-08', guest:'George Finney', guestRole:'CISO', guestCompany:'Southern Methodist University', season:4, episode:103, topics:['Zero Trust','Network Security','Architecture'] },
  { id:134, title:'Ransomware as a Service: The Supply Chain Attack Epidemic', slug:'ransomware-as-a-service-epidemic', topic:'Cybersecurity', topicColor:'#ef4444', duration:'46:22', date:'2026-03-25', guest:'Allan Liska', guestRole:'Senior Security Architect', guestCompany:'Recorded Future', season:4, episode:102, topics:['Ransomware','Supply Chain','Threat Intel'] },
  { id:135, title:'Deepfake Detection: The Arms Race Against Synthetic Media', slug:'deepfake-detection-arms-race', topic:'Cybersecurity', topicColor:'#ef4444', duration:'44:08', date:'2026-03-11', guest:'Hany Farid', guestRole:'Professor of EECS', guestCompany:'UC Berkeley', season:4, episode:101, topics:['Deepfakes','Synthetic Media','Detection'] },
  { id:136, title:'Nation-State APTs: Tracking Advanced Persistent Threats', slug:'nation-state-apts-tracking-threats', topic:'Cybersecurity', topicColor:'#ef4444', duration:'53:45', date:'2026-02-25', guest:'Suzanne Spaulding', guestRole:'Director, Defending Democratic Institutions', guestCompany:'CSIS', season:4, episode:100, topics:['APT','Nation-State','Threat Intelligence'] },
  { id:137, title:'Cloud Security in the Multi-Cloud Era', slug:'cloud-security-multi-cloud-era', topic:'Cybersecurity', topicColor:'#ef4444', duration:'41:15', date:'2026-02-11', guest:'Tim Mackey', guestRole:'Principal Security Strategist', guestCompany:'Synopsys', season:4, episode:99, topics:['Cloud Security','AWS','Azure'] },
  { id:138, title:'The Cybersecurity Talent Gap: 4 Million Open Jobs', slug:'cybersecurity-talent-gap-4-million-jobs', topic:'Cybersecurity', topicColor:'#ef4444', duration:'38:50', date:'2026-01-28', guest:'Lynn Dohm', guestRole:'Executive Director', guestCompany:'CyberWire', season:4, episode:98, topics:['Workforce','Training','AI Security'] },
  { id:139, title:'Supply Chain Attacks: SolarWinds to npm Packages', slug:'supply-chain-attacks-solarwinds-npm', topic:'Cybersecurity', topicColor:'#ef4444', duration:'45:30', date:'2026-01-14', guest:'Chris Hughes', guestRole:'Cybersecurity Resident Fellow', guestCompany:'National Security Institute', season:4, episode:97, topics:['Supply Chain','SBOM','DevSecOps'] },
  { id:140, title:'Starship V3 and the Path to Mars', slug:'starship-v3-mars-path', topic:'Space', topicColor:'#06b6d4', duration:'1:12:45', date:'2026-06-10', guest:'Tim Dodd', guestRole:'Spaceflight Communicator', guestCompany:'Everyday Astronaut', season:4, episode:96, topics:['SpaceX','Starship','Mars'] },
  { id:141, title:'Artemis II: Returning Humans to the Moon', slug:'artemis-ii-returning-to-moon', topic:'Space', topicColor:'#06b6d4', duration:'1:05:20', date:'2026-05-06', guest:'Pamela Melroy', guestRole:'Deputy Administrator', guestCompany:'NASA', season:4, episode:95, topics:['Artemis','NASA','Lunar'] },
  { id:142, title:'The Lunar Economy: Mining Water Ice at the South Pole', slug:'lunar-economy-mining-water-ice', topic:'Space', topicColor:'#06b6d4', duration:'52:15', date:'2026-04-22', guest:'Dr. Clive Neal', guestRole:'Planetary Geologist', guestCompany:'University of Notre Dame', season:4, episode:94, topics:['Lunar','Mining','Space Resources'] },
  { id:143, title:'Europa Clipper: Searching for Life on Jupiter\'s Ocean Moon', slug:'europa-clipper-searching-for-life', topic:'Space', topicColor:'#06b6d4', duration:'48:30', date:'2026-04-08', guest:'Dr. Bonnie Buratti', guestRole:'Senior Research Scientist', guestCompany:'NASA JPL', season:4, episode:93, topics:['Europa','Jupiter','Astrobiology'] },
  { id:144, title:'The Nancy Grace Roman Telescope: 100x Hubble\'s Field of View', slug:'roman-telescope-100x-hubble', topic:'Space', topicColor:'#06b6d4', duration:'44:18', date:'2026-03-25', guest:'Dr. Julie McEnery', guestRole:'Project Scientist', guestCompany:'NASA Goddard', season:4, episode:92, topics:['Roman Telescope','Dark Energy','Astronomy'] },
  { id:145, title:'Commercial Space Stations: The Post-ISS Era', slug:'commercial-space-stations-post-iss', topic:'Space', topicColor:'#06b6d4', duration:'50:22', date:'2026-03-11', guest:'Mike Suffredini', guestRole:'CEO & President', guestCompany:'Axiom Space', season:4, episode:91, topics:['Space Stations','Commercial Space','ISS'] },
  { id:146, title:'Satellite Constellations: Starlink, Kuiper, and the Orbital Gold Rush', slug:'satellite-constellations-orbital-gold-rush', topic:'Space', topicColor:'#06b6d4', duration:'47:45', date:'2026-02-25', guest:'Tim Farrar', guestRole:'Managing Director', guestCompany:'TMF Associates', season:4, episode:90, topics:['Starlink','Kuiper','Satellites'] },
  { id:147, title:'Direct-to-Device: When Satellites Connect Your Phone', slug:'direct-to-device-satellite-phone', topic:'Space', topicColor:'#06b6d4', duration:'41:12', date:'2026-02-11', guest:'Mark Matossian', guestRole:'Director of Space Systems', guestCompany:'Google', season:4, episode:89, topics:['D2D','Satellite','Connectivity'] },
  { id:148, title:'Space Debris: The Kessler Syndrome and Orbital Cleanup', slug:'space-debris-kessler-syndrome', topic:'Space', topicColor:'#06b6d4', duration:'44:30', date:'2026-01-28', guest:'Lucas Pleney', guestRole:'Co-founder & CTO', guestCompany:'ClearSpace', season:4, episode:88, topics:['Space Debris','Kessler','Orbital Cleanup'] },
  { id:149, title:'Voyager 1 at 50: Interstellar Mission Update', slug:'voyager-1-50-interstellar-update', topic:'Space', topicColor:'#06b6d4', duration:'38:15', date:'2026-01-14', guest:'Dr. Linda Spilker', guestRole:'Voyager Project Scientist', guestCompany:'NASA JPL', season:4, episode:87, topics:['Voyager','Interstellar','NASA'] },
  { id:151, title:'AlphaFold 4 and the Protein Design Revolution', slug:'alphafold-4-protein-design', topic:'Biotech', topicColor:'#10b981', duration:'52:00', date:'2026-05-20', guest:'John Jumper', guestRole:'Director, AI for Science', guestCompany:'Google DeepMind', season:4, episode:86, topics:['AlphaFold','Protein Design','Drug Discovery'] },
  { id:152, title:'GLP-1 Revolution: Beyond Weight Loss to Addiction and Alzheimer\'s', slug:'glp-1-revolution-beyond-weight-loss', topic:'Biotech', topicColor:'#10b981', duration:'49:15', date:'2026-05-06', guest:'Dr. Daniel Drucker', guestRole:'Senior Investigator', guestCompany:'Lunenfeld-Tanenbaum Research Institute', season:4, episode:85, topics:['GLP-1','Obesity','Neuroscience'] },
  { id:153, title:'AI-Driven Drug Discovery: From Years to Weeks', slug:'ai-driven-drug-discovery-years-to-weeks', topic:'Biotech', topicColor:'#10b981', duration:'46:30', date:'2026-04-22', guest:'Daphne Koller', guestRole:'CEO & Founder', guestCompany:'Insitro', season:4, episode:84, topics:['AI Drug Discovery','Clinical Trials','Pharma'] },
  { id:154, title:'mRNA Beyond COVID: Cancer Vaccines and Rare Diseases', slug:'mrna-beyond-covid-cancer-vaccines', topic:'Biotech', topicColor:'#10b981', duration:'51:08', date:'2026-04-08', guest:'Dr. Katalin Karikó', guestRole:'Nobel Laureate & Professor', guestCompany:'University of Pennsylvania', season:4, episode:83, topics:['mRNA','Cancer Vaccines','RNA Therapeutics'] },
  { id:155, title:'The Biotech Bull Market: IPOs, M&A, and Investor Sentiment', slug:'biotech-bull-market-ipos-ma', topic:'Biotech', topicColor:'#10b981', duration:'44:22', date:'2026-03-25', guest:'Stephen Hansen', guestRole:'Director of Biopharma Intelligence', guestCompany:'BioCentury', season:4, episode:82, topics:['Biotech Market','IPO','M&A'] },
  { id:156, title:'Organoids and NAMs: Replacing Animal Testing in Drug Discovery', slug:'organoids-nams-replacing-animal-testing', topic:'Biotech', topicColor:'#10b981', duration:'42:15', date:'2026-03-11', guest:'Dr. Thomas Hartung', guestRole:'Director, CAAT', guestCompany:'Johns Hopkins University', season:4, episode:81, topics:['Organoids','NAMs','Drug Discovery'] },
  { id:157, title:'Cell Therapy Manufacturing: Scaling CAR-T to the Masses', slug:'cell-therapy-manufacturing-scaling-car-t', topic:'Biotech', topicColor:'#10b981', duration:'48:40', date:'2026-02-25', guest:'Dr. Carl June', guestRole:'Director, Center for Cellular Immunotherapies', guestCompany:'Penn Medicine', season:4, episode:80, topics:['CAR-T','Cell Therapy','Manufacturing'] },
  { id:158, title:'Radiopharmaceuticals: The Targeted Radiation Gold Rush', slug:'radiopharmaceuticals-targeted-radiation', topic:'Biotech', topicColor:'#10b981', duration:'45:18', date:'2026-02-11', guest:'Dr. Ken Song', guestRole:'CEO & President', guestCompany:'RayzeBio (BMS)', season:4, episode:79, topics:['Radiopharma','Oncology','Nuclear Medicine'] },
  { id:159, title:'The Obesity Drug Wars: Novo Nordisk vs Eli Lilly', slug:'obesity-drug-wars-novo-lilly', topic:'Biotech', topicColor:'#10b981', duration:'50:30', date:'2026-01-14', guest:'Dr. John Wilding', guestRole:'Professor of Diabetes & Endocrinology', guestCompany:'University of Liverpool', season:4, episode:78, topics:['Obesity','GLP-1','Pharma Competition'] },
  { id:160, title:'SMR Economics: NuScale\'s Path to Certification', slug:'nuscale-smr-economics', topic:'Nuclear', topicColor:'#f59e0b', duration:'55:18', date:'2026-05-06', guest:'John Hopkins', guestRole:'CEO', guestCompany:'NuScale Power', season:4, episode:77, topics:['SMR','Nuclear','NRC'] },
  { id:161, title:'Nuclear Renaissance: Why Big Tech is Betting on Fission', slug:'nuclear-renaissance-big-tech-fission', topic:'Nuclear', topicColor:'#f59e0b', duration:'52:30', date:'2026-04-22', guest:'Bridget van Dorsten', guestRole:'Energy Analyst', guestCompany:'Interchange Energy Group', season:4, episode:76, topics:['Nuclear','Big Tech','Data Centers'] },
  { id:162, title:'The World Bank Lifts Its Nuclear Ban: What It Means', slug:'world-bank-lifts-nuclear-ban', topic:'Nuclear', topicColor:'#f59e0b', duration:'44:15', date:'2026-04-08', guest:'Sama Bilbao y León', guestRole:'Director General', guestCompany:'World Nuclear Association', season:4, episode:75, topics:['World Bank','Nuclear Finance','Policy'] },
  { id:163, title:'TerraPower\'s NRC Construction Permit: A Milestone', slug:'terrapower-nrc-construction-permit', topic:'Nuclear', topicColor:'#f59e0b', duration:'48:22', date:'2026-03-25', guest:'Chris Levesque', guestRole:'CEO', guestCompany:'TerraPower', season:4, episode:74, topics:['TerraPower','NRC','Advanced Reactor'] },
  { id:164, title:'Uranium Markets: Pricing, Supply, and the Fuel Cycle', slug:'uranium-markets-pricing-supply-fuel-cycle', topic:'Nuclear', topicColor:'#f59e0b', duration:'46:10', date:'2026-03-11', guest:'Nick Touran', guestRole:'Nuclear Engineer', guestCompany:'FastNeutron', season:4, episode:73, topics:['Uranium','Fuel Cycle','Commodities'] },
  { id:165, title:'Nuclear vs Data Centers: Powering the AI Boom', slug:'nuclear-vs-data-centers-ai-boom', topic:'Nuclear', topicColor:'#f59e0b', duration:'50:45', date:'2026-02-25', guest:'Jake Jurewicz', guestRole:'CEO & Co-founder', guestCompany:'Blue Energy', season:4, episode:72, topics:['Nuclear','Data Centers','AI Power'] },
  { id:166, title:'Prefab Nuclear: Blue Energy\'s Factory-Built Reactors', slug:'prefab-nuclear-blue-energy', topic:'Nuclear', topicColor:'#f59e0b', duration:'47:30', date:'2026-02-11', guest:'Jake Jurewicz', guestRole:'CEO & Co-founder', guestCompany:'Blue Energy', season:4, episode:71, topics:['Modular Nuclear','Construction','Financing'] },
  { id:167, title:'China\'s Nuclear Buildout: 10 Reactors Per Year', slug:'china-nuclear-buildout-10-reactors-year', topic:'Nuclear', topicColor:'#f59e0b', duration:'43:18', date:'2026-01-28', guest:'Andrew Meehan', guestRole:'Nuclear Policy Analyst', guestCompany:'Nuclear Investing Podcast', season:4, episode:70, topics:['China','Nuclear','Energy Competition'] },
  { id:168, title:'Nuclear Restart: Bringing Decommissioned Plants Back Online', slug:'nuclear-restart-decommissioned-plants', topic:'Nuclear', topicColor:'#f59e0b', duration:'41:22', date:'2026-01-14', guest:'Regis Matzie', guestRole:'Nuclear Consultant', guestCompany:'Advanced Reactors Consulting', season:4, episode:69, topics:['Nuclear Restart','Palisades','TMI'] },
  { id:169, title:'The UK\'s SMR Bet: Rolls-Royce Wins Big', slug:'uk-smr-bet-rolls-royce', topic:'Nuclear', topicColor:'#f59e0b', duration:'39:45', date:'2026-01-07', guest:'Tom Samson', guestRole:'CEO', guestCompany:'Rolls-Royce SMR', season:4, episode:68, topics:['Rolls-Royce','SMR','UK Nuclear'] },
  { id:171, title:'Iron-Air Batteries at Scale: Form Energy\'s 100-Hour Storage', slug:'form-energy-iron-air-storage', topic:'Energy Storage', topicColor:'#f97316', duration:'50:00', date:'2026-05-13', guest:'Mateo Jaramillo', guestRole:'CEO & Co-founder', guestCompany:'Form Energy', season:4, episode:67, topics:['Iron-Air','Long Duration','Grid Storage'] },
  { id:172, title:'The 50 GW Milestone: US Storage Market Update 2026', slug:'us-storage-market-50gw-2026', topic:'Energy Storage', topicColor:'#f97316', duration:'44:15', date:'2026-04-29', guest:'Anna Darmani', guestRole:'Principal Analyst', guestCompany:'Wood Mackenzie', season:4, episode:66, topics:['BESS','Market Data','Grid Storage'] },
  { id:173, title:'Sodium-Ion Batteries: The Cheap Alternative to Lithium', slug:'sodium-ion-batteries-cheap-alternative', topic:'Energy Storage', topicColor:'#f97316', duration:'42:30', date:'2026-04-15', guest:'Marek Kubik', guestRole:'Energy Storage Expert', guestCompany:'Former Fluence', season:4, episode:65, topics:['Sodium-Ion','Battery Tech','Cost'] },
  { id:174, title:'Grid Storage as Transmission: A New Paradigm', slug:'grid-storage-as-transmission-paradigm', topic:'Energy Storage', topicColor:'#f97316', duration:'46:08', date:'2026-04-01', guest:'Peter Kelly-Detwiler', guestRole:'Energy Analyst & Host', guestCompany:'Energy Future Podcast', season:4, episode:64, topics:['Grid Storage','Transmission','Utilities'] },
  { id:175, title:'Data Center Batteries: On-Site Storage for AI Loads', slug:'data-center-batteries-on-site-storage', topic:'Energy Storage', topicColor:'#f97316', duration:'41:15', date:'2026-03-18', guest:'Noah Roberts', guestRole:'Executive Director', guestCompany:'Energy Storage Coalition', season:4, episode:63, topics:['Data Centers','BESS','AI Power'] },
  { id:176, title:'China\'s 65 GWh Month: The Global Storage Arms Race', slug:'china-65-gwh-month-storage-arms-race', topic:'Energy Storage', topicColor:'#f97316', duration:'38:22', date:'2026-03-04', guest:'Tim Montague', guestRole:'Solar & Storage Analyst', guestCompany:'Clean Power Associates', season:4, episode:62, topics:['China','Storage Scale','Energy Security'] },
  { id:177, title:'Solar-Plus-Storage: Why Half of All Solar Now Ships With Batteries', slug:'solar-plus-storage-half-solar-with-batteries', topic:'Energy Storage', topicColor:'#f97316', duration:'43:40', date:'2026-02-18', guest:'Shawn Shaw', guestRole:'CEO & Author', guestCompany:'Camelot Energy Group', season:4, episode:61, topics:['Solar+Storage','Hybridization','Project Finance'] },
  { id:178, title:'Long-Duration Storage: Beyond 4 Hours to 100 Hours', slug:'long-duration-storage-beyond-4-hours', topic:'Energy Storage', topicColor:'#f97316', duration:'47:55', date:'2026-02-04', guest:'Dan Shobert', guestRole:'Energy Storage Analyst', guestCompany:'LDES Council', season:4, episode:60, topics:['Long Duration','Compressed Air','Renewables'] },
  { id:179, title:'Battery Safety: NFPA 855 and the 0.3% Fire Rate', slug:'battery-safety-nfpa-855-fire-rate', topic:'Energy Storage', topicColor:'#f97316', duration:'39:18', date:'2026-01-21', guest:'Paul Rogers', guestRole:'Fire Protection Engineer', guestCompany:'NFPA', season:4, episode:59, topics:['Battery Safety','NFPA','Fire Protection'] },
  { id:180, title:'Humanoid Robots: Figure 03 and the $30K Production Mile', slug:'figure-03-humanoid-production', topic:'Robotics', topicColor:'#ec4899', duration:'49:30', date:'2026-05-20', guest:'Brett Adcock', guestRole:'Founder & CEO', guestCompany:'Figure', season:4, episode:58, topics:['Humanoids','Manufacturing'] },
  { id:181, title:'Tesla Optimus Gen 3: From Demo to Factory Floor', slug:'tesla-optimus-gen-3', topic:'Robotics', topicColor:'#ec4899', duration:'45:00', date:'2026-05-06', guest:'Lars Moravy', guestRole:'Director of Robotics Engineering', guestCompany:'Tesla', season:4, episode:57, topics:['Humanoids','Tesla','Manufacturing'] },
  { id:182, title:'The Humanoid Boom: China\'s State-Backed Push to Dominate', slug:'humanoid-boom-china-push-dominate', topic:'Robotics', topicColor:'#ec4899', duration:'48:15', date:'2026-04-22', guest:'Boris Sofman', guestRole:'Robotics Engineer & Analyst', guestCompany:'Former Waymo', season:4, episode:56, topics:['Humanoids','China','Robotics Industry'] },
  { id:183, title:'Warehouse Automation: Tote-to-Person and Multi-Agent Orchestration', slug:'warehouse-automation-tote-to-person', topic:'Robotics', topicColor:'#ec4899', duration:'42:30', date:'2026-04-08', guest:'John Santagate', guestRole:'Founder & Principal Consultant', guestCompany:'EMP Advisors', season:4, episode:55, topics:['Warehouse','Automation','Logistics'] },
  { id:184, title:'Embodied AI: When Robots Learn Like Children', slug:'embodied-ai-robots-learn-like-children', topic:'Robotics', topicColor:'#ec4899', duration:'51:22', date:'2026-03-25', guest:'Dr. Pieter Abbeel', guestRole:'Professor & Co-founder', guestCompany:'UC Berkeley / Covariant', season:4, episode:54, topics:['Embodied AI','Learning','Robotics'] },
  { id:185, title:'iRobot\'s Bankruptcy: What Went Wrong in Consumer Robotics', slug:'irobot-bankruptcy-consumer-robotics', topic:'Robotics', topicColor:'#ec4899', duration:'40:15', date:'2026-03-11', guest:'Colin Angle', guestRole:'Former CEO & Co-founder', guestCompany:'iRobot', season:4, episode:53, topics:['iRobot','Consumer Robotics','Business'] },
  { id:186, title:'Boston Dynamics and the Atlas Transition: Electric Hydraulics', slug:'boston-dynamics-atlas-electric', topic:'Robotics', topicColor:'#ec4899', duration:'46:40', date:'2026-02-25', guest:'Robert Playter', guestRole:'CEO', guestCompany:'Boston Dynamics', season:4, episode:52, topics:['Boston Dynamics','Atlas','Humanoids'] },
  { id:187, title:'Dexterous Manipulation: The Last Frontier of Robotics', slug:'dexterous-manipulation-last-frontier', topic:'Robotics', topicColor:'#ec4899', duration:'44:18', date:'2026-02-11', guest:'Dr. Ken Goldberg', guestRole:'Professor of Industrial Engineering', guestCompany:'UC Berkeley', season:4, episode:51, topics:['Manipulation','Grasping','Tactile'] },
  { id:188, title:'Agricultural Robots: Autonomous Farming at Scale', slug:'agricultural-robots-autonomous-farming', topic:'Robotics', topicColor:'#ec4899', duration:'41:30', date:'2026-01-28', guest:'Jorge Heraud', guestRole:'CEO & Co-founder', guestCompany:'See & Spray (Blue River Tech)', season:4, episode:50, topics:['AgTech','Autonomous Farming','Robotics'] },
  { id:189, title:'Surgical Robotics: Beyond da Vinci to Autonomous Procedures', slug:'surgical-robotics-beyond-da-vinci', topic:'Robotics', topicColor:'#ec4899', duration:'47:12', date:'2026-01-14', guest:'Dr. Fred Moll', guestRole:'Founder & Chief Development Officer', guestCompany:'Auris Health (J&J)', season:4, episode:49, topics:['Surgical Robotics','MedTech','Autonomy'] },
  { id:190, title:'Waymo\'s 15-City Expansion: Robotaxi Unit Economics', slug:'waymo-15-cities-economics', topic:'AV', topicColor:'#8b5cf6', duration:'41:25', date:'2026-04-29', guest:'Tekedra Mawakana', guestRole:'Co-CEO', guestCompany:'Waymo', season:4, episode:48, topics:['Robotaxi','Autonomy','Waymo'] },
  { id:191, title:'2026: The Year of the Robotaxi', slug:'2026-year-of-the-robotaxi', topic:'AV', topicColor:'#8b5cf6', duration:'44:15', date:'2026-04-15', guest:'Alex Gunz', guestRole:'Future Trends Analyst', guestCompany:'Heptagon Capital', season:4, episode:47, topics:['Robotaxi','AV Market','Scale'] },
  { id:192, title:'End-to-End AI Driving: Wayve and Waabi\'s $2B Bet', slug:'end-to-end-ai-driving-wayve-waabi', topic:'AV', topicColor:'#8b5cf6', duration:'52:30', date:'2026-04-01', guest:'Alex Kendall', guestRole:'CEO & Co-founder', guestCompany:'Wayve', season:4, episode:46, topics:['End-to-End AI','World Models','Wayve'] },
  { id:193, title:'Mercedes Drive Pilot L3: The Autonomous Highway Reality', slug:'mercedes-drive-pilot-l3', topic:'AV', topicColor:'#8b5cf6', duration:'40:00', date:'2026-03-18', guest:'Markus Schäfer', guestRole:'CTO & Board Member', guestCompany:'Mercedes-Benz', season:4, episode:45, topics:['L3 Autonomy','Mercedes','Highway Driving'] },
  { id:194, title:'NVIDIA Powers Uber: The Trillion-Dollar Self-Driving Stack', slug:'nvidia-powers-uber-self-driving', topic:'AV', topicColor:'#8b5cf6', duration:'43:22', date:'2026-03-04', guest:'Gary Lapidus', guestRole:'AV Industry Analyst', guestCompany:'Gartner', season:4, episode:44, topics:['NVIDIA','Uber','AV Compute'] },
  { id:195, title:'Autonomous Trucking: Dallas to Houston Without a Driver', slug:'autonomous-trucking-dallas-houston', topic:'AV', topicColor:'#8b5cf6', duration:'46:08', date:'2026-02-18', guest:'Raquel Urtasun', guestRole:'CEO & Founder', guestCompany:'Waabi', season:4, episode:43, topics:['Autonomous Trucking','Freight','Waabi'] },
  { id:196, title:'Zoox: The Purpose-Built Robotaxi Hits the Streets', slug:'zoox-purpose-built-robotaxi', topic:'AV', topicColor:'#8b5cf6', duration:'41:30', date:'2026-02-04', guest:'Aicha Evans', guestRole:'CEO', guestCompany:'Zoox (Amazon)', season:4, episode:42, topics:['Zoox','Robotaxi','Amazon'] },
  { id:197, title:'AV Regulation: The Federal vs State Patchwork', slug:'av-regulation-federal-vs-state', topic:'AV', topicColor:'#8b5cf6', duration:'38:45', date:'2026-01-21', guest:'Pat Tsen', guestRole:'Deputy Executive Director', guestCompany:'California Public Utilities Commission', season:4, episode:41, topics:['AV Regulation','Policy','CPUC'] },
  { id:198, title:'Autonomous Delivery: DoorDash, Drones, and Sidewalk Robots', slug:'autonomous-delivery-doordash-drones', topic:'AV', topicColor:'#8b5cf6', duration:'40:12', date:'2026-01-14', guest:'Ashu Rege', guestRole:'VP of Autonomous Technology', guestCompany:'DoorDash', season:4, episode:40, topics:['Autonomous Delivery','Drones','Last Mile'] },
  { id:199, title:'When Robotaxis Fail: Waymo\'s Flood Pause and Edge Cases', slug:'robotaxis-fail-waymo-flood-pause', topic:'AV', topicColor:'#8b5cf6', duration:'37:18', date:'2026-01-07', guest:'Alain Kornhauser', guestRole:'Professor & Host, Smart Driving Cars', guestCompany:'Princeton University', season:4, episode:39, topics:['Edge Cases','AV Safety','Weather'] },
  { id:201, title:'The 1,000-Qubit Era: IBM\'s Condor and Beyond', slug:'ibm-condor-1000-qubits', topic:'Quantum', topicColor:'#a78bfa', duration:'1:05:00', date:'2026-05-13', guest:'Jay Gambetta', guestRole:'VP, Quantum Computing', guestCompany:'IBM Research', season:4, episode:38, topics:['Quantum','IBM','Qubits'] },
  { id:202, title:'Has Quantum Advantage Been Achieved? The Great Debate', slug:'has-quantum-advantage-been-achieved', topic:'Quantum', topicColor:'#a78bfa', duration:'52:15', date:'2026-04-29', guest:'Dominik Hangleiter', guestRole:'Ambizione Fellow', guestCompany:'ETH Zürich / UC Berkeley', season:4, episode:37, topics:['Quantum Advantage','RCS','Benchmarking'] },
  { id:203, title:'Quantum Meets AI: Allies Not Competitors', slug:'quantum-meets-ai-allies-not-competitors', topic:'Quantum', topicColor:'#a78bfa', duration:'48:30', date:'2026-04-15', guest:'Celia Merzbacher', guestRole:'Executive Director', guestCompany:'QED-C', season:4, episode:36, topics:['Quantum+AI','Hybrid Computing','QED-C'] },
  { id:204, title:'The Road to 40,000 Logical Qubits by 2030', slug:'road-to-40000-logical-qubits-2030', topic:'Quantum', topicColor:'#a78bfa', duration:'55:22', date:'2026-04-01', guest:'Paul Terry', guestRole:'CEO', guestCompany:'Photonic', season:4, episode:35, topics:['Logical Qubits','Fault Tolerance','DARPA'] },
  { id:205, title:'Q-Day: When Quantum Breaks the Internet\'s Encryption', slug:'q-day-quantum-breaks-encryption', topic:'Quantum', topicColor:'#a78bfa', duration:'46:18', date:'2026-03-18', guest:'Marc Yoder', guestRole:'Field CISO', guestCompany:'SHI International', season:4, episode:34, topics:['Q-Day','PQC','Encryption'] },
  { id:206, title:'Quantum Sensing: The Most Underrated Quantum Technology', slug:'quantum-sensing-underrated-technology', topic:'Quantum', topicColor:'#a78bfa', duration:'43:40', date:'2026-03-04', guest:'Dr. Jun Ye', guestRole:'Physicist & Fellow', guestCompany:'JILA / NIST', season:4, episode:33, topics:['Quantum Sensing','Imaging','Clocks'] },
  { id:207, title:'Quantum Chemistry: Simulating Molecules That Classical Computers Can\'t', slug:'quantum-chemistry-simulating-molecules', topic:'Quantum', topicColor:'#a78bfa', duration:'49:15', date:'2026-02-18', guest:'Bert de Jong', guestRole:'Senior Scientist', guestCompany:'Lawrence Berkeley National Lab', season:4, episode:32, topics:['Quantum Chemistry','Materials','Drug Discovery'] },
  { id:208, title:'Quantum Funding: The Series A/B Gap', slug:'quantum-funding-series-a-b-gap', topic:'Quantum', topicColor:'#a78bfa', duration:'41:22', date:'2026-02-04', guest:'Kris Naudts', guestRole:'Co-founder', guestCompany:'Firgun Ventures', season:4, episode:31, topics:['Quantum Investment','Startups','VC'] },
  { id:209, title:'The Quantum Marathon: Why We\'re Still at the Start', slug:'quantum-marathon-still-at-start', topic:'Quantum', topicColor:'#a78bfa', duration:'44:30', date:'2026-01-21', guest:'Andre Koenig', guestRole:'Quantum Researcher & Commentator', guestCompany:'Impact Quantum', season:4, episode:30, topics:['Quantum Hype','Research','Geopolitics'] },
  { id:210, title:'Programming Quantum Computers: Will AI Be the Interface?', slug:'programming-quantum-computers-ai-interface', topic:'Quantum', topicColor:'#a78bfa', duration:'42:08', date:'2026-01-14', guest:'Robert Wille', guestRole:'Professor & CEO', guestCompany:'TU Munich / Quantum Software Company', season:4, episode:29, topics:['Quantum Software','AI Programming','Algorithms'] },
  // ─── Scheduled / Upcoming Episodes ───
  { id:241, title:'The 100K GPU Cluster: Inside xAI\'s Memphis Supercomputer', slug:'xAI-memphis-supercomputer', topic:'AI', topicColor:'#3b82f6', duration:'~1:15:00', date:'2026-07-15', guest:'Greg Yang', guestRole:'Co-founder & SVP Engineering', guestCompany:'xAI', season:4, episode:121, topics:['GPU Clusters','Training','Infrastructure'] },
  { id:242, title:'Autonomous Weapons: The Ethics of AI in Warfare', slug:'autonomous-weapons-ethics', topic:'AI', topicColor:'#3b82f6', duration:'~1:00:00', date:'2026-07-22', guest:'Paul Scharre', guestRole:'Executive VP & Director of Studies', guestCompany:'CNAS', season:4, episode:122, topics:['AI Ethics','Defense','Policy'] },
  { id:243, title:'Blue Origin New Glenn: Finally Orbiting', slug:'new-glenn-first-orbital', topic:'Space', topicColor:'#06b6d4', duration:'~1:10:00', date:'2026-08-05', guest:'Jarrett Jones', guestRole:'SVP, New Glenn', guestCompany:'Blue Origin', season:4, episode:123, topics:['Blue Origin','New Glenn','Launch'] },
  { id:244, title:'The Quantum Workforce: Who Owns the Quantum Plan?', slug:'quantum-workforce-who-owns-the-plan', topic:'Quantum', topicColor:'#a78bfa', duration:'~48:00', date:'2026-08-12', guest:'Brad Pollard', guestRole:'Field CTO', guestCompany:'SHI International', season:4, episode:124, topics:['Quantum','Workforce','Strategy'] },
  { id:245, title:'Women\'s Health and ARPA-H: Reimagining Maternal Care', slug:'arpa-h-womens-health-maternal-care', topic:'Biotech', topicColor:'#10b981', duration:'~45:00', date:'2026-08-19', guest:'Dr. Renee Wegrzyn', guestRole:'Director', guestCompany:'ARPA-H', season:4, episode:125, topics:['Women\'s Health','ARPA-H','Maternal Care'] },
  { id:246, title:'Oklo\'s Fast Reactor: The Aurora Houseplant Power Plant', slug:'oklo-aurora-fast-reactor', topic:'Nuclear', topicColor:'#f59e0b', duration:'~48:00', date:'2026-08-26', guest:'Jacob DeWitte', guestRole:'CEO & Co-founder', guestCompany:'Oklo Inc.', season:4, episode:126, topics:['Fast Reactor','SMR','Nuclear'] },
  { id:247, title:'May Mobility\'s Robotaxi Deal: Geofenced Autonomy at Work', slug:'may-mobility-robotaxi-deal', topic:'AV', topicColor:'#8b5cf6', duration:'~40:00', date:'2026-09-02', guest:'Edwin Olson', guestRole:'CEO & Founder', guestCompany:'May Mobility', season:4, episode:127, topics:['Robotaxi','Geofenced','May Mobility'] },
  { id:248, title:'X-Energy\'s IPO and the Advanced Reactor Investment Landscape', slug:'x-energy-ipo-advanced-reactor', topic:'Nuclear', topicColor:'#f59e0b', duration:'~50:00', date:'2026-09-09', guest:'Clay Sell', guestRole:'CEO', guestCompany:'X-energy', season:4, episode:128, topics:['X-energy','IPO','Advanced Nuclear'] },
  { id:249, title:'Behind the Meter: Google\'s $4.75B Solar-Storage Acquisition', slug:'google-solar-storage-acquisition', topic:'Energy Storage', topicColor:'#f97316', duration:'~42:00', date:'2026-09-16', guest:'Shawn Shaw', guestRole:'CEO & Author', guestCompany:'Camelot Energy Group', season:4, episode:129, topics:['Behind-the-Meter','Google','Solar+Storage'] },
  { id:250, title:'Precision Neuroscience: The BCI That Maps the Brain in 15 Minutes', slug:'precision-neuroscience-brain-mapping', topic:'BCI', topicColor:'#0ea5e9', duration:'~44:00', date:'2026-09-23', guest:'Ben Rapoport', guestRole:'CEO & Co-founder', guestCompany:'Precision Neuroscience', season:4, episode:130, topics:['BCI','Precision','Minimally Invasive'] },
  { id:251, title:'FEOC Compliance: The $100/kWh Chinese Battery Dilemma', slug:'feoc-compliance-chinese-battery-dilemma', topic:'Energy Storage', topicColor:'#f97316', duration:'~38:00', date:'2026-09-30', guest:'John Weaver', guestRole:'Energy Storage Analyst', guestCompany:'Clean Power Associates', season:4, episode:131, topics:['FEOC','Supply Chain','Battery Cost'] },
  { id:252, title:'The Future of Fusion: A 2027 Outlook Panel', slug:'future-of-fusion-2027-outlook', topic:'Fusion', topicColor:'#fb923c', duration:'~1:00:00', date:'2026-10-07', guest:'Dr. Melanie Windridge', guestRole:'Fusion Communicator & Physicist', guestCompany:'Fusion Energy Insights', season:4, episode:132, topics:['Fusion Outlook','2027','Industry'] },
];

// Generate all files
let count = 0;
for (const ep of episodes) {
  const hosts = pickHosts(ep.topic);
  const json = {
    id: ep.id,
    title: ep.title,
    slug: ep.slug,
    topic: ep.topic,
    topicColor: ep.topicColor,
    duration: ep.duration,
    date: ep.date,
    season: ep.season,
    episode: ep.episode,
    featured: ep.featured || false,
    guest: { name: ep.guest, role: ep.guestRole, company: ep.guestCompany },
    hosts: hosts.map(h => H[h]),
    topics: ep.topics,
    script: generateScript(ep),
    showNotes: {
      keyTopics: (TOPIC_POINTS[ep.topic] || TOPIC_POINTS.AI).slice(0, 8),
      estimatedDuration: '10-12 minutes'
    }
  };
  const fname = `ep-${ep.id}-${ep.slug}.json`;
  writeFileSync(join(OUT, fname), JSON.stringify(json, null, 2), 'utf8');
  count++;
}

console.log(`Generated ${count} podcast JSON files in ${OUT}`);

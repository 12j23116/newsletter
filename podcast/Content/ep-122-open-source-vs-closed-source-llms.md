# Episode 122: Open Source vs Closed Source LLMs — Who's Winning?

**Show:** TechNova Podcast  
**Hosts:** Dr. Sarah Chen (Host & AI Research Lead), Marcus Webb (Co-host & Security Analyst)  
**Guest:** Gabe Goodhart (AI Research Engineer, IBM Research)  
**Duration:** ~10+ minutes  
**Date:** June 10, 2026  

---

## [COLD OPEN]

**Marcus Webb:** Gabe, the open source AI community has been on fire. Kimi K2, Llama 4, DeepSeek — these models are getting dangerously close to GPT-5 and Claude 4 territory. Are we watching the closed-source moat evaporate?

**Gabe Goodhart:** That's the question everyone in the industry is grappling with. I'd say the moat isn't evaporating, but it's definitely narrowing. The gap that used to be a canyon is now more like a creek. And for a lot of enterprise use cases, the creek is narrow enough to step over.

**Dr. Sarah Chen:** Welcome to TechNova. I'm Dr. Sarah Chen.

**Marcus Webb:** And I'm Marcus Webb. Today we're joined by Gabe Goodhart, AI research engineer at IBM Research, working at the intersection of open and closed model ecosystems. Gabe, welcome.

**Gabe Goodhart:** Thanks for having me. Excited to dig into this.

---

## [SEGMENT 1: The State of Open Source LLMs in 2026]

**Dr. Sarah Chen:** Gabe, give us the landscape. Where do open source models stand right now compared to the closed-source frontier?

**Gabe Goodhart:** So as of mid-2026, the open source frontier is defined by a few key models. Meta's Llama 4 family — particularly the 405B parameter model — is probably the most capable open weight model available. Then you have Kimi K2 from Moonshot AI, which surprised everyone by matching or beating GPT-4 class models on several reasoning benchmarks. DeepSeek's V3 and R1 models are also strong, particularly in code and math. And Mistral's latest models are competitive in the mid-size range. On the closed side, you've got GPT-5, Claude 4, and Gemini 2 Ultra as the frontier. The gap between the best open model and the best closed model is probably 10 to 15 percent on most benchmarks. A year ago, that gap was more like 30 to 40 percent.

**Marcus Webb:** 10 to 15 percent — is that enough to justify paying for closed-source models when you can get open source for free?

**Gabe Goodhart:** It depends entirely on the use case. If you're building a coding assistant for professional developers, that 10 to 15 percent matters a lot — it's the difference between code that works and code that doesn't. If you're building a customer service chatbot, a document summarizer, or a content classifier, the open source models are more than good enough. And when you factor in cost, control, and customization, open source often wins even at a slight quality disadvantage.

**Dr. Sarah Chen:** Let's talk about the advantages of open source beyond just cost. What can you do with an open model that you can't do with a closed one?

**Gabe Goodhart:** The big three are: fine-tuning, deployment control, and data privacy. With an open weight model, you can fine-tune it on your own data to specialize it for your domain. You can't do that with GPT-5 or Claude 4 — you can do prompt engineering and RAG, but you can't actually change the model's weights. Second, deployment control — you can run the model on your own infrastructure, which means no rate limits, no API dependencies, no vendor lock-in. And third, data privacy — you don't have to send your data to someone else's API. For regulated industries like healthcare, finance, and defense, that's not a nice-to-have, it's a requirement.

---

## [SEGMENT 2: The Closed-Source Advantage]

**Marcus Webb:** Okay, but the closed-source labs aren't standing still. What advantages do they still hold?

**Gabe Goodhart:** Several, and they're important. First, raw capability — the frontier closed models are still the best on the hardest tasks: complex reasoning, long-context understanding, multimodal integration. If you need the absolute best performance, you still go to closed source. Second, safety and alignment — the closed labs have invested heavily in RLHF and safety training, and their models are generally more reliable in terms of not producing harmful or off-brand content. Third, ecosystem — OpenAI and Anthropic have built extensive tooling, APIs, and integrations that make it easy to build on their platforms. And fourth, multimodal — the closed models generally have better vision, audio, and image generation capabilities integrated into the model.

**Dr. Sarah Chen:** What about the reasoning model breakthroughs? The chain-of-thought and verifiable reward approaches — are those making it into open source?

**Gabe Goodhart:** Yes, but with a lag. The techniques themselves are published in research papers, so the open source community knows how to implement them. But implementing them requires significant compute for the reinforcement learning phase, and that's where the closed labs have an advantage — they have massive compute clusters. DeepSeek's R1 model was actually a breakthrough here — it showed that you can train a reasoning model with relatively modest compute if you're clever about the training process. But the closed-source reasoning models are still a step ahead.

**Marcus Webb:** Is the gap closing or stable? In other words, is open source catching up, or are both moving forward at the same rate?

**Gabe Goodhart:** I'd say the gap is slowly closing. The open source community benefits from the closed labs publishing their techniques — even if they don't publish their models, the research papers give the community a roadmap. And the open source community is incredibly fast at implementing and iterating. But the closed labs keep pushing the frontier with techniques they haven't published yet. So it's a chase where the prey keeps moving, but the chaser is getting faster.

---

## [SEGMENT 3: Enterprise Decision-Making]

**Dr. Sarah Chen:** Let's get practical. If you're an enterprise CTO deciding between open and closed source LLMs, how do you make that decision?

**Gabe Goodhart:** I'd frame it as a portfolio approach. Don't bet on one or the other — use both. Use closed-source frontier models for the tasks where you need maximum capability — complex reasoning, creative generation, multimodal tasks. Use open source models for the tasks where you need control, customization, or cost efficiency — classification, summarization, domain-specific Q&A, internal tools. And use a routing layer that sends each request to the appropriate model based on task complexity and sensitivity.

**Marcus Webb:** That sounds complex to implement. Is it worth the overhead?

**Gabe Goodhart:** It's more complex, but the cost savings can be enormous. A typical enterprise might spend 80 percent of its LLM budget on 20 percent of queries that need frontier-level capability. By routing the other 80 percent of queries to a self-hosted open source model, you can cut your API costs by 60 to 70 percent. And you get the added benefit of data sovereignty for sensitive queries. The routing layer itself is not that complex — it's essentially a classifier that estimates query difficulty and routes accordingly.

**Dr. Sarah Chen:** What about the talent and infrastructure requirements? Running your own LLM is not trivial.

**Gabe Goodhart:** True. You need ML engineers who understand model deployment, inference optimization, and fine-tuning. You need GPU infrastructure — either on-premise or cloud-based. And you need monitoring and maintenance. For a mid-size company, this might be two to three engineers and a few hundred thousand dollars in annual infrastructure costs. For a large enterprise, it scales up from there. But when you compare that to API costs that scale linearly with usage, the break-even point often comes within six to twelve months for high-volume use cases.

---

## [SEGMENT 4: The Future of the Open/Closed Divide]

**Marcus Webb:** Gabe, where is this heading? Will open source eventually catch up completely, or will closed-source labs always have an edge?

**Gabe Goodhart:** I think there will always be a frontier that's closed-source, because the labs that push the frontier are investing billions in compute and research that they need to recoup. But I think the practical gap — the gap that matters for most use cases — will continue to narrow. The open source models of 2027 will be better than the closed-source models of 2025. And for most enterprise applications, that's more than good enough. The real question is whether the closed labs can keep justifying their pricing when the open source alternative is "good enough" for 90 percent of use cases.

**Dr. Sarah Chen:** What about the geopolitical angle? A lot of the open source momentum is coming from China — DeepSeek, Moonshot, Qwen. Does that change the dynamic?

**Gabe Goodhart:** It does, and it's an underappreciated factor. Chinese labs are releasing open weight models partly because it's a way to build global influence and developer mindshare. The US export controls on advanced chips have made it harder for Chinese labs to train frontier models, but they've compensated with algorithmic efficiency and training techniques. The result is that some of the best open source models are now coming from China, which raises interesting questions about dependency, security, and geopolitical competition in the AI ecosystem.

**Marcus Webb:** Gabe, this has been a really balanced and informative conversation. Before we wrap, what's your prediction for the next twelve months?

**Gabe Goodhart:** I think we'll see at least one open source model that matches or exceeds the current closed-source frontier on most benchmarks. That will be a watershed moment — it will force the closed labs to either drop prices significantly or offer capabilities that open source genuinely can't replicate. I think we'll also see more sophisticated open source tooling for fine-tuning, inference, and deployment, which will lower the barrier to entry for enterprises. The open source AI ecosystem is maturing fast.

**Dr. Sarah Chen:** Gabe Goodhart, AI research engineer at IBM Research. Thank you so much for joining us.

**Gabe Goodhart:** Thank you both. Really enjoyed this.

**Marcus Webb:** And thanks to all of you for listening. This is TechNova — see you next time.

---

## [SHOW NOTES]

- **Episode:** 122
- **Topic:** Open Source, LLMs, AI Strategy
- **Guest:** Gabe Goodhart — AI Research Engineer, IBM Research
- **Key Topics Covered:**
  - Open source landscape: Llama 4, Kimi K2, DeepSeek V3/R1, Mistral
  - Gap between open and closed: 10-15% on benchmarks (narrowing from 30-40%)
  - Open source advantages: fine-tuning, deployment control, data privacy
  - Closed source advantages: raw capability, safety, ecosystem, multimodal
  - Enterprise portfolio approach: routing layer for cost optimization
  - Infrastructure and talent requirements for self-hosting
  - Geopolitical dimension: Chinese labs driving open source momentum
  - Prediction: open source model matching frontier within 12 months
- **Estimated spoken duration:** ~10-12 minutes

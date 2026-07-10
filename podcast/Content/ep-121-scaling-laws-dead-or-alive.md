# Episode 121: Scaling Laws — Are They Dead or Still Holding?

**Show:** TechNova Podcast  
**Hosts:** Dr. Sarah Chen (Host & AI Research Lead), Marcus Webb (Co-host & Security Analyst)  
**Guest:** Sebastian Raschka (Independent LLM Researcher & Author)  
**Duration:** ~10+ minutes  
**Date:** June 24, 2026  

---

## [COLD OPEN]

**Marcus Webb:** Sebastian, there's this narrative going around that scaling laws are dead — that we've hit a wall, that throwing more compute at bigger models just isn't working anymore. Is that true?

**Sebastian Raschka:** It's one of those things where the reality is way more nuanced than the headline. The scaling laws are not dead. What's happening is that the easy gains from just making models bigger are diminishing, and the field is shifting toward making models smarter through post-training. But the laws themselves — the mathematical relationships between compute, data, and model performance — those still hold.

**Dr. Sarah Chen:** Welcome to TechNova. I'm Dr. Sarah Chen.

**Marcus Webb:** And I'm Marcus Webb. Today we're joined by Sebastian Raschka — independent LLM researcher and author of "Build A Reasoning Model." Sebastian, welcome.

**Sebastian Raschka:** Thanks for having me. Excited to talk about this.

---

## [SEGMENT 1: What Are Scaling Laws and Why Do They Matter?]

**Dr. Sarah Chen:** Sebastian, for our listeners who aren't deep in ML research, can you explain what scaling laws are and why they've been so central to AI progress?

**Sebastian Raschka:** Sure. Scaling laws describe how model performance improves as you increase three things: the number of parameters in the model, the amount of training data, and the amount of compute you use. The key paper was from Kaplan et al. at OpenAI in 2020, which showed that there's a power-law relationship — if you increase these factors, loss decreases in a predictable way. This was hugely influential because it told the field: just scale up. Bigger models, more data, more compute, and you'll get better models. And that's exactly what happened — GPT-3, GPT-4, Claude, Gemini — all of these were built on the assumption that scaling works.

**Marcus Webb:** And did it work? Were the laws accurate?

**Sebastian Raschka:** Remarkably accurate, yes. The Kaplan paper was refined by DeepMind's Chinchilla paper in 2022, which showed that data scaling was actually more important than the original laws suggested — you needed to scale data and model size together, not just model size. But the fundamental insight held: more compute, applied correctly, leads to better models. This drove the entire industry strategy for the last five years.

**Dr. Sarah Chen:** So where did the "scaling laws are dead" narrative come from?

**Sebastian Raschka:** It started in late 2024 and early 2025, when a few things happened. First, some of the next-generation models — I'm thinking of models that were supposed to be significant leaps over GPT-4 class — the improvements were more incremental than expected. Second, there were reports that some labs were running into data quality issues — you can scale up the quantity of data, but if the quality isn't there, the returns diminish. And third, the cost of training frontier models has gotten astronomical — we're talking hundreds of millions to billions of dollars per training run. So people started asking: are we getting diminishing returns on this massive investment?

---

## [SEGMENT 2: The Shift to Post-Training and Reasoning]

**Marcus Webb:** So if the answer isn't just "make the model bigger," what is it? What's driving progress in 2026?

**Sebastian Raschka:** The big shift is toward post-training — specifically, reasoning-focused post-training. The idea is that a model's raw capabilities are determined during pre-training, where it learns from trillions of tokens. But how it uses those capabilities — how it reasons, how it breaks down problems, how it verifies its own answers — that's shaped during post-training. And what we've discovered is that you can take a relatively smaller model and make it punch way above its weight through techniques like chain-of-thought prompting, self-consistency, and reinforcement learning with verifiable rewards.

**Dr. Sarah Chen:** Can you break down what "verifiable rewards" means in this context?

**Sebastian Raschka:** Sure. Traditional RLHF — reinforcement learning from human feedback — uses human preferences as the reward signal. Humans rate which response is better. That's subjective and noisy. Verifiable rewards, on the other hand, use objective signals — for math problems, you can check if the answer is correct. For code, you can run the tests. For logical reasoning, you can verify the steps. This gives you a much cleaner training signal, and it's what enabled the reasoning model breakthroughs we've seen with models like OpenAI's o-series and similar approaches from other labs.

**Marcus Webb:** So the model learns to reason by being rewarded for getting verifiable answers correct, not just for sounding good to a human rater.

**Sebastian Raschka:** Exactly. And this is a big deal because it means the model is learning a general reasoning skill, not just learning to produce text that humans find appealing. A model trained with verifiable rewards on math problems gets better at reasoning in general — it transfers to other domains. That's why this approach has been so impactful.

**Dr. Sarah Chen:** And how does this relate to the scaling question? Are you saying post-training is replacing pre-training scaling?

**Sebastian Raschka:** Not replacing — complementing. Think of it this way: pre-training gives the model knowledge and basic capabilities. Post-training gives it the ability to use those capabilities effectively. You still need a strong base model — a bigger, better-trained model will always have more raw capability. But post-training is where you're getting the most exciting gains right now. It's like the difference between a smart person who's knowledgeable and a smart person who's knowledgeable and also thinks carefully before answering. The second one is much more useful.

---

## [SEGMENT 3: Data Quality and the Data Wall]

**Marcus Webb:** Sebastian, you mentioned data quality as one of the factors behind the "scaling is dead" narrative. Can you talk about the data wall? Is there actually a shortage of training data?

**Sebastian Raschka:** There's a lot of discussion about this. The claim is that we're running out of high-quality text data — that the internet has a finite amount of well-written, informative content, and we're approaching that limit. I think this is partially true and partially overblown. It's true that if you only count published books, articles, and high-quality web content, the total is maybe a few hundred trillion tokens, and the biggest models are already training on a significant fraction of that. But there are several ways around this.

**Dr. Sarah Chen:** What are the ways around it?

**Sebastian Raschka:** First, synthetic data. Models can generate training data for other models — and if done carefully, with quality filtering, this can be very effective. Second, there's a lot of non-text data that can be converted to text — video transcripts, audio, code execution traces. Third, multi-epoch training — training on the same data multiple times, which we used to think was bad but turns out to be fine if you do it carefully. And fourth, curriculum learning — ordering the training data in a way that maximizes learning, rather than just shoveling everything in randomly.

**Marcus Webb:** What about the quality issue? You can have a lot of data, but if it's garbage...

**Sebastian Raschka:** Right, and this is where I think the real bottleneck is. It's not the quantity of data — it's the quality. The best models today are trained on carefully curated, filtered, and deduplicated datasets. The data pipeline — how you clean, filter, and process the training data — has become one of the most important competitive advantages. And it's one of the least transparent parts of the industry, because companies don't share their data pipelines. Everyone talks about model architecture and training algorithms, but the secret sauce is often in the data.

---

## [SEGMENT 4: What Actually Drives Progress in 2026]

**Dr. Sarah Chen:** Let's synthesize. If you had to rank the factors that are driving AI progress right now in 2026, what would the ranking be?

**Sebastian Raschka:** I'd say number one is post-training — reasoning, tool use, agentic capabilities. That's where the most visible progress is happening. Number two is data quality and data pipelines — the labs that have the best data are producing the best models, full stop. Number three is architecture improvements — things like mixture of experts, attention efficiency improvements, better tokenization. These are incremental but they compound. And number four is raw scale — more parameters, more compute. It still matters, but it's no longer the dominant factor it was in 2020 to 2023.

**Marcus Webb:** So the answer to "are scaling laws dead" is...

**Sebastian Raschka:** The scaling laws are alive and well. What's dead is the idea that scaling alone is sufficient. You need scaling plus good data plus good post-training plus good architecture. The laws describe one dimension of progress, and that dimension still works. But it's not the only dimension anymore, and it's not the one where the most exciting gains are coming from.

**Dr. Sarah Chen:** Sebastian, this has been a really clarifying conversation. Before we let you go, what are you working on now?

**Sebastian Raschka:** I'm continuing my research on efficient training methods — specifically, how to get better performance from smaller models through better post-training. I think the future is not just giant frontier models, but a spectrum of model sizes, each optimized for specific use cases. A 7-billion-parameter model that's been really well post-trained can be more useful for many tasks than a 500-billion-parameter model that's been lazily trained.

**Marcus Webb:** That's a great note to end on. Sebastian Raschka, thank you for joining us.

**Sebastian Raschka:** My pleasure. Thanks for having me.

**Dr. Sarah Chen:** And thanks to all of you for listening. This is TechNova — see you next time.

---

## [SHOW NOTES]

- **Episode:** 121
- **Topic:** Scaling Laws, LLMs, Training
- **Guest:** Sebastian Raschka — Independent LLM Researcher & Author
- **Key Topics Covered:**
  - Origins of scaling laws (Kaplan et al. 2020, Chinchilla 2022)
  - Why "scaling is dead" narrative emerged in 2024-2025
  - Shift to post-training and reasoning-focused techniques
  - Verifiable rewards vs. RLHF
  - Data quality as the real bottleneck
  - Synthetic data, multi-epoch training, curriculum learning
  - Ranking of progress drivers in 2026: post-training > data quality > architecture > raw scale
- **Estimated spoken duration:** ~10-12 minutes

# Episode 200: Quantum Error Correction — Google's Surface Code Breakthrough

**Show:** TechNova Podcast  
**Hosts:** Dr. Sarah Chen (Host & AI Research Lead), Marcus Webb (Co-host & Security Analyst)  
**Guest:** Dr. Hartmut Neven (VP of Engineering, Google Quantum AI)  
**Duration:** ~10+ minutes  
**Date:** June 3, 2026  

---

## [COLD OPEN]

**Marcus Webb:** Hartmut, Google just announced that you've achieved below-threshold error correction with the surface code. For the non-physicists in the audience — how big a deal is this?

**Dr. Hartmut Neven:** It is, I would say, the most important milestone in quantum computing since we demonstrated quantum supremacy in 2019. What we've shown is that as we increase the size of our error-correcting code — as we add more physical qubits to the logical qubit — the error rate goes down. That means we're below threshold. We're in the regime where scaling up actually helps, where more qubits mean fewer errors, not more. That's the foundation you need to build a fault-tolerant quantum computer.

**Dr. Sarah Chen:** Welcome to TechNova. I'm Dr. Sarah Chen.

**Marcus Webb:** And I'm Marcus Webb. Today we're joined by Dr. Hartmut Neven, VP of Engineering at Google Quantum AI. Hartmut, welcome.

**Dr. Hartmut Neven:** Thank you. Happy to be here.

---

## [SEGMENT 1: The Problem of Quantum Errors]

**Dr. Sarah Chen:** Hartmut, let's start with the fundamental problem. Why do quantum computers need error correction at all?

**Dr. Hartmut Neven:** Quantum bits, or qubits, are extremely fragile. They interact with their environment in ways that cause errors — the quantum information degrades through a process called decoherence. A typical superconducting qubit might have an error rate of about one in a thousand per operation. That sounds small, but if you're running a computation with millions of operations, those errors compound and your result is garbage. Classical computers also have errors, but they're so rare — maybe one in a billion billion — that we can ignore them. In quantum, we can't ignore them. We have to actively correct them.

**Marcus Webb:** And why is quantum error correction so hard? Why can't you just use the same error correction techniques we use in classical computing?

**Dr. Hartmut Neven:** Because of the no-cloning theorem. In classical computing, the simplest error correction is to make copies — store three copies of each bit, and if one gets flipped, take the majority vote. But quantum mechanics says you can't copy an unknown quantum state. So you can't just replicate qubits. Instead, you have to encode the information of one logical qubit — the qubit you actually care about — across many physical qubits, using entanglement. The surface code is the most practical scheme for doing this with superconducting qubits.

**Dr. Sarah Chen:** Can you explain the surface code in simple terms?

**Dr. Hartmut Neven:** Imagine a grid of physical qubits. Some of them are data qubits — they hold the quantum information. Others are measurement qubits — they check for errors without disturbing the data. The measurement qubits are arranged in a checkerboard pattern, and each one measures a specific combination of its neighboring data qubits. If an error occurs, it changes the measurement outcomes in a detectable pattern. By analyzing these patterns over time, you can identify and correct errors. The key parameter is the distance of the code — how many qubits are in each row and column of the grid. A distance-d code can correct up to d/2 errors. So as you increase the distance, you can correct more errors.

---

## [SEGMENT 2: The Below-Threshold Result]

**Marcus Webb:** So what exactly did Google achieve? What does "below threshold" mean?

**Dr. Hartmut Neven:** The threshold is a critical error rate. If your physical qubit error rate is above the threshold, then adding more qubits to the code actually increases the logical error rate — you're making things worse. But if your physical error rate is below the threshold, then adding more qubits decreases the logical error rate — you're making things better. The threshold for the surface code is typically around one percent, depending on the specific implementation. What we demonstrated is that our physical error rate is below that threshold, and we showed this by running codes of increasing distance — distance 3, distance 5, and distance 7 — and observing that the logical error rate decreased with each step. That's the first time this has been shown experimentally.

**Dr. Sarah Chen:** And what were the specific numbers?

**Dr. Hartmut Neven:** Our physical qubit error rate is about 0.3 percent per cycle. At distance 3, the logical error rate was about 3.2 percent per cycle. At distance 5, it dropped to about 1.5 percent. At distance 7, it was about 0.8 percent. So we see roughly a factor of two reduction each time we increase the distance by two. That's consistent with theoretical predictions for below-threshold operation. The key takeaway is: the trend is in the right direction. More qubits, fewer errors.

**Marcus Webb:** This was done on Google's Willow chip, right? How many qubits does Willow have?

**Dr. Hartmut Neven:** Willow has 105 superconducting qubits. It's our fifth-generation chip, and it was designed specifically to test surface code error correction. The previous chip, Sycamore, had 53 qubits and wasn't quite at the error rate needed for below-threshold operation. Willow's improvements in qubit quality — longer coherence times, better gate fidelity, faster readout — are what got us below threshold.

---

## [SEGMENT 3: The Path to Fault-Tolerant Quantum Computing]

**Dr. Sarah Chen:** So you've shown the trend works. What's the path from here to a useful fault-tolerant quantum computer?

**Dr. Hartmut Neven:** The path is clear, though it's going to take significant engineering. The logical error rate we have today — about 0.8 percent at distance 7 — is still too high for useful computations. You need logical error rates of about 10^-12 or better for algorithms like Shor's algorithm on cryptographically relevant keys. To get there from where we are, you need larger code distances — maybe distance 20 to 30 — which means you need thousands of physical qubits per logical qubit. And for useful applications, you might need dozens to hundreds of logical qubits. So we're talking about a machine with maybe 100,000 to a million physical qubits.

**Marcus Webb:** That's a big jump from 105. What's the timeline?

**Dr. Hartmut Neven:** We're targeting a useful fault-tolerant quantum computer by the end of this decade. The roadmap involves scaling up the chip size, improving the cryogenic infrastructure to support more qubits, and developing the control electronics to operate them all simultaneously. Each generation roughly doubles the qubit count and improves the error rate. We're also investing heavily in the classical computing infrastructure needed for error decoding — the surface code requires real-time classical processing to identify and correct errors, and that processing has to happen faster than the errors accumulate.

**Dr. Sarah Chen:** What about the applications? When you have a fault-tolerant quantum computer, what can you actually do with it?

**Dr. Hartmut Neven:** The most near-term applications are in quantum simulation — simulating molecular systems and materials that are intractable for classical computers. This could accelerate drug discovery, materials science, and chemistry. Beyond that, there's the cryptographic application — Shor's algorithm for factoring, which is what drives the post-quantum cryptography effort. And there are optimization problems, machine learning applications, and fundamental physics research. I think the simulation applications will come first, within maybe three to five years of having a fault-tolerant machine, because the quantum advantage is clearest there.

---

## [SEGMENT 4: The Competitive Landscape]

**Marcus Webb:** How does Google's approach compare to what IBM, Quantinuum, and others are doing?

**Dr. Hartmut Neven:** IBM is also pursuing superconducting qubits with surface codes, though they've been more focused on increasing qubit count than on error correction specifically. Quantinuum is using trapped ions, which have lower error rates natively but are harder to scale. There are also approaches using neutral atoms — companies like QuEra and Atom Computing — and photonic approaches like PsiQuantum. Each has trade-offs. Superconducting qubits are fast and scalable in chip fabrication, but they have higher error rates. Trapped ions have lower error rates but slower operations. Neutral atoms are promising for scalability but are earlier in development.

**Dr. Sarah Chen:** Do you think there will be one winning platform, or will multiple platforms coexist?

**Dr. Hartmut Neven:** I think it's too early to say. It's possible that different platforms are better for different applications — trapped ions for precision simulations, superconducting for large-scale algorithms, neutral atoms for certain optimization problems. But I also think the platform that achieves fault tolerance first and demonstrates clear quantum advantage will have a significant head start in building the ecosystem of algorithms, tools, and users.

**Marcus Webb:** Hartmut, this has been fascinating. Before we wrap, what's the one thing you want people to understand about this result?

**Dr. Hartmut Neven:** I want people to understand that this is the moment quantum computing transitioned from a physics experiment to an engineering challenge. The question is no longer "can we do error correction?" — we've shown that we can. The question is "how fast can we scale it?" And that's a question of engineering, investment, and time — not fundamental physics uncertainty.

**Dr. Sarah Chen:** Dr. Hartmut Neven, VP of Engineering at Google Quantum AI. Thank you so much for joining us.

**Dr. Hartmut Neven:** Thank you both. This was wonderful.

**Marcus Webb:** And thanks to all of you for listening. This is TechNova — see you next time.

---

## [SHOW NOTES]

- **Episode:** 200
- **Topic:** Quantum, QEC, Surface Code
- **Guest:** Dr. Hartmut Neven — VP of Engineering, Google Quantum AI
- **Key Topics Covered:**
  - Why quantum error correction is necessary (decoherence, no-cloning theorem)
  - Surface code explanation: data qubits, measurement qubits, code distance
  - Below-threshold result: error rate decreases with increasing code distance
  - Willow chip: 105 qubits, 0.3% physical error rate
  - Distance 3/5/7 results: 3.2% → 1.5% → 0.8% logical error rates
  - Path to fault tolerance: 100K-1M physical qubits needed
  - Timeline: useful fault-tolerant QC by end of decade
  - Applications: quantum simulation, cryptography, optimization
  - Competitive landscape: IBM, Quantinuum, QuEra, PsiQuantum
- **Estimated spoken duration:** ~10-12 minutes

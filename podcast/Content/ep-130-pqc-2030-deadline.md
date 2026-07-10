# Episode 130: Post-Quantum Cryptography — The 2030 Deadline

**Show:** TechNova Podcast  
**Hosts:** Dr. Sarah Chen (Host & AI Research Lead), Marcus Webb (Co-host & Security Analyst)  
**Guest:** Dr. Dustin Moody (Mathematician, PQC Lead, NIST)  
**Duration:** ~10+ minutes  
**Date:** June 17, 2026  

---

## [COLD OPEN]

**Marcus Webb:** Dustin, I've been in cybersecurity for twenty years, and I've seen a lot of "the sky is falling" narratives. Y2K, Heartbleed, you name it. But the quantum threat to encryption feels different. Is this one real, or is it another overhyped deadline?

**Dr. Dustin Moody:** It's real. And what makes it different from Y2K is the "harvest now, decrypt later" strategy. Adversaries don't need to wait until they have a quantum computer to start exploiting this. They can collect encrypted data today, store it, and decrypt it in five or ten years when a quantum computer is available. So the deadline isn't when the quantum computer arrives — the deadline is now, because data being encrypted today is already at risk.

**Dr. Sarah Chen:** Welcome to TechNova. I'm Dr. Sarah Chen.

**Marcus Webb:** And I'm Marcus Webb. Today we're joined by Dr. Dustin Moody, mathematician and post-quantum cryptography lead at NIST — the National Institute of Standards and Technology. Dustin, welcome.

**Dr. Dustin Moody:** Thanks for having me. Glad to be here.

---

## [SEGMENT 1: The Quantum Threat to Encryption]

**Dr. Sarah Chen:** Dustin, let's start with the basics. Why does quantum computing threaten our current encryption?

**Dr. Dustin Moody:** Sure. So the encryption we use today falls into two categories. First, symmetric encryption — things like AES — which is used for encrypting data at rest and in transit. Second, public-key cryptography — things like RSA and elliptic curve cryptography, or ECC — which is used for key exchange, digital signatures, and authentication. The quantum threat is primarily to public-key cryptography. In 1994, Peter Shor published an algorithm that, running on a sufficiently large quantum computer, can factor large numbers and compute discrete logarithms efficiently. Those are exactly the mathematical problems that RSA and ECC rely on for their security. So if you have a quantum computer big enough, RSA and ECC are broken.

**Marcus Webb:** And how big is "big enough"?

**Dr. Dustin Moody:** Estimates vary, but roughly you'd need a quantum computer with several thousand to a few million logical qubits, depending on the key size. We're not there yet — current quantum computers have maybe a thousand noisy physical qubits. But the field is progressing, and most experts think a cryptographically relevant quantum computer could exist within ten to twenty years. Some say sooner.

**Dr. Sarah Chen:** And that's where the 2030 deadline comes from?

**Dr. Dustin Moody:** The 2030 timeline isn't about when a quantum computer will exist. It's about when you need to have migrated to post-quantum algorithms to be safe. The reasoning is: if a quantum computer arrives in, say, 2035, and it takes you five years to migrate your systems, you need to start in 2030. And for organizations with long-lived data — classified government data, medical records, financial data — data that needs to remain confidential for ten or twenty years — you need to migrate even sooner, because that data is already being harvested today.

---

## [SEGMENT 2: NIST's Post-Quantum Standards]

**Marcus Webb:** NIST has been running a competition to select post-quantum algorithms. Where does that stand?

**Dr. Dustin Moody:** We started the process in 2016 — we put out a call for proposals, and we received 69 submissions from around the world. Over several rounds, we evaluated them for security, performance, and implementation characteristics. In 2022, we announced the first selections: CRYSTALS-Kyber for key encapsulation, and CRYSTALS-Dilithium, Falcon, and SPHINCS+ for digital signatures. In 2024, we published the final standards: FIPS 203, 204, 205, and 206. These are now the official US government standards for post-quantum cryptography.

**Dr. Sarah Chen:** Can you explain the difference between the key encapsulation and digital signature algorithms, and why you selected multiple options?

**Dr. Dustin Moody:** Sure. Key encapsulation, or KEM, is the replacement for RSA key exchange — it's how two parties establish a shared secret key over a public channel. CRYSTALS-Kyber, now standardized as ML-KEM in FIPS 203, is our primary recommendation for that. Digital signatures are used for authentication and non-repudiation — proving who signed something. We selected three signature algorithms because different use cases have different requirements. ML-DSA, which is Dilithium, is the primary recommendation — it has a good balance of size and performance. Falcon, or FN-DSA, produces smaller signatures but is harder to implement securely. And SLH-DSA, which is SPHINCS+, is a fallback — it's based on hash functions, which are very well understood, but it has larger signatures and slower performance.

**Marcus Webb:** Why include a fallback? Is there concern about the primary algorithms?

**Dr. Dustin Moody:** It's good cryptographic hygiene. The new post-quantum algorithms are based on mathematical problems that haven't been studied as long as the ones underlying RSA and ECC. There's a small but non-zero chance that someone finds a breakthrough attack. Having a hash-based fallback, which relies on a completely different mathematical foundation, gives us a safety net. We also have a fourth round of candidates still under evaluation, in case we need additional alternatives.

---

## [SEGMENT 3: The Migration Challenge]

**Dr. Sarah Chen:** Let's talk about the practical side. How hard is this migration for a typical enterprise?

**Dr. Dustin Moody:** It's hard. *(laughs)* Honestly, this is one of the biggest cryptographic migrations in history, maybe the biggest since the move to RSA in the 1990s. And it's harder than that migration because the new algorithms have different properties — different key sizes, different signature sizes, different performance characteristics. You can't just swap out RSA for Kyber and expect everything to work the same.

**Marcus Webb:** What are the specific challenges?

**Dr. Dustin Moody:** Several. First, key and signature sizes are larger. An RSA-2048 key is 256 bytes. A Kyber key is about 1,600 bytes. That doesn't sound like a lot, but when you're putting keys in TLS certificates, in DNS records, in network protocols with packet size limits, it matters. Second, performance — Kyber is actually faster than RSA for key exchange, which is great. But some of the signature algorithms are slower. Third, implementation — you need new libraries, new hardware support, new testing. And fourth, discovery — most organizations don't even know where all their cryptography is. Crypto is embedded everywhere — in applications, in middleware, in hardware, in legacy systems. Just finding it all is a massive project.

**Dr. Sarah Chen:** What's your advice for organizations that haven't started yet?

**Dr. Dustin Moody:** Start with a cryptographic inventory. You can't migrate what you don't know about. Find every place where RSA or ECC is used in your systems — and that includes third-party software, cloud services, APIs, everything. Then prioritize based on risk — long-lived data first, public-facing systems next, internal systems last. And start with a pilot — pick one system, migrate it to the new algorithms, and learn from the experience. The migration is going to take years, so the sooner you start, the better.

**Marcus Webb:** Is there a hybrid approach? Can you use both classical and post-quantum algorithms during the transition?

**Dr. Dustin Moody:** Yes, and we strongly recommend it. Hybrid key exchange — combining Kyber with ECDH, for example — gives you the best of both worlds. If the quantum threat materializes, you're protected by Kyber. If a weakness is found in Kyber, you're still protected by ECDH. Several protocols already support hybrid modes, including TLS 1.3 with the hybrid key exchange extensions. It's a pragmatic way to migrate incrementally without betting everything on the new algorithms.

---

## [SEGMENT 4: The Global Picture and Looking Ahead]

**Dr. Sarah Chen:** How does the US effort compare to what's happening in other countries?

**Dr. Dustin Moody:** NIST's process has been the global benchmark — we had submissions from over 25 countries, and our standards are being adopted worldwide. But other bodies are also working on this. The IETF is developing protocols that use the new algorithms. The ITU has recommendations. China has their own post-quantum standards, which overlap with but aren't identical to ours. The EU's cybersecurity agency ENISA has published guidelines. The UK's NCSC has been very active. So it's a coordinated global effort, though there are some regional differences in algorithm preferences.

**Marcus Webb:** What about the US government's mandate? There's a memorandum from the White House about this, right?

**Dr. Dustin Moody:** Yes, National Security Memorandum 10, issued in 2022, directed federal agencies to inventory their cryptographic systems and prepare for migration. And there's a follow-up directive requiring agencies to complete their inventory and begin migration planning. The goal is for federal systems to be post-quantum ready by 2035, with high-priority systems migrated sooner. The Office of Management and Budget is tracking agency progress, and there's real pressure to move forward.

**Dr. Sarah Chen:** Dustin, what's the one thing you want our listeners to take away from this conversation?

**Dr. Dustin Moody:** Don't wait. The 2030 deadline is not far away, and the migration takes longer than people think. If you haven't started your post-quantum migration planning, start today. Do the inventory, assess your risk, run a pilot. The tools and standards are ready — what's needed now is execution.

**Marcus Webb:** Dr. Dustin Moody, NIST post-quantum cryptography lead. Thank you so much for joining us.

**Dr. Dustin Moody:** Thank you both. This was a great conversation.

**Dr. Sarah Chen:** And thanks to all of you for listening. This is TechNova — see you next time.

---

## [SHOW NOTES]

- **Episode:** 130
- **Topic:** PQC, Encryption, NIST
- **Guest:** Dr. Dustin Moody — Mathematician, PQC Lead, NIST
- **Key Topics Covered:**
  - Shor's algorithm and the quantum threat to RSA/ECC
  - "Harvest now, decrypt later" strategy
  - NIST PQC competition history (2016-2024)
  - FIPS standards: ML-KEM (Kyber), ML-DSA (Dilithium), FN-DSA (Falcon), SLH-DSA (SPHINCS+)
  - Migration challenges: key sizes, performance, implementation, crypto discovery
  - Hybrid approach recommendation (classical + post-quantum)
  - White House NSM-10 and federal migration timeline
  - Global coordination efforts
- **Estimated spoken duration:** ~10-12 minutes

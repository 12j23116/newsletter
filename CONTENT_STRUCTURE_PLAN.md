# Content Structure Plan
**TechScope Multi-Category Content Architecture**

---

## Executive Summary

**Goal:** Organize 3 content types (Blog, Guide, Podcast) across 12 technology categories with a scalable, SEO-optimized structure.

**Content Types:**
- **Blog:** News, updates, short-form analysis (1,500-2,500 words)
- **Guide:** Comprehensive pillar content, tutorials, implementation guides (3,000-5,000 words)
- **Podcast:** Audio/video interviews, expert discussions

**Categories:** AI, Robotics, Fusion, Biotech, BCI, AV, Space, Materials, Quantum, Nuclear, Energy Storage, Cybersecurity

---

## Recommended URL Structure

### Primary Structure: Content-Type First

```
/blog/                          # All blog posts (filterable by category)
/blog/[slug]/                   # Individual blog post

/guides/                        # All guides (filterable by category)
/guides/[slug]/                 # Individual guide

/podcasts/                      # All podcasts (filterable by category)
/podcasts/[slug]/               # Individual podcast episode

/categories/[category]/         # Category hub (shows all content types)
/categories/[category]/blog/    # Category-specific blog posts
/categories/[category]/guides/  # Category-specific guides
/categories/[category]/podcasts/# Category-specific podcasts
```

### URL Examples

```
/blog/ai-agents-2026-trends
/guides/complete-guide-to-llm-fine-tuning
/podcasts/andrew-ng-on-agi-timeline

/categories/ai/
/categories/ai/blog/
/categories/ai/guides/
/categories/ai/podcasts/
```

---

## Folder Structure

```
src/
├── pages/
│   ├── blog/
│   │   ├── index.astro                    # Blog hub (all categories)
│   │   ├── [slug].astro                   # Individual blog post
│   │   ├── blog-content.ts                # Blog data
│   │   └── blog-styles.css
│   │
│   ├── guides/
│   │   ├── index.astro                    # Guides hub (all categories)
│   │   ├── [slug].astro                   # Individual guide
│   │   ├── guides-content.ts              # Guides data
│   │   └── guides-styles.css
│   │
│   ├── podcasts/
│   │   ├── index.astro                    # Podcasts hub (all categories)
│   │   ├── [slug].astro                   # Individual podcast
│   │   ├── podcasts-content.ts            # Podcasts data
│   │   └── podcasts-styles.css
│   │
│   ├── categories/
│   │   ├── index.astro                    # All categories overview
│   │   ├── [category]/
│   │   │   ├── index.astro                # Category hub (all content types)
│   │   │   ├── blog/
│   │   │   │   ├── index.astro            # Category blog posts
│   │   │   │   └── [slug].astro           # Category blog post
│   │   │   ├── guides/
│   │   │   │   ├── index.astro            # Category guides
│   │   │   │   └── [slug].astro           # Category guide
│   │   │   └── podcasts/
│   │   │       ├── index.astro            # Category podcasts
│   │   │       └── [slug].astro           # Category podcast
│   │
│   └── index.astro                        # Homepage
│
├── content/                                # Markdown content files
│   ├── blog/
│   │   ├── ai/
│   │   │   ├── 001-ai-agents-2026.md
│   │   │   └── 002-llm-optimization.md
│   │   ├── robotics/
│   │   └── ...
│   │
│   ├── guides/
│   │   ├── ai/
│   │   │   ├── 001-complete-llm-guide.md
│   │   │   └── 002-ai-agents-implementation.md
│   │   └── ...
│   │
│   └── podcasts/
│       ├── ai/
│       │   ├── 001-andrew-ng-agi.md
│       │   └── 002-demis-hassabis.md
│       └── ...
│
└── components/
    ├── BlogCard.astro
    ├── GuideCard.astro
    ├── PodcastCard.astro
    ├── ContentFilter.astro
    └── CategoryNav.astro
```

---

## Content Workflow

### Phase 1: Setup Structure (Week 1)

1. **Create folder structure**
   - Set up `/blog/`, `/guides/`, `/podcasts/` directories
   - Create category subdirectories in `/content/`
   - Build reusable components

2. **Build hub pages**
   - Blog hub with category filters
   - Guides hub with category filters
   - Podcasts hub with category filters
   - Category overview pages

3. **Configure content collections**
   - Set up Astro content collections for each type
   - Define schemas (frontmatter fields)
   - Configure category taxonomy

### Phase 2: Content Production (Weeks 2-12)

**Priority Order (by search volume):**

1. **AI** (25 blog posts, 8 guides, 5 podcasts)
2. **Cybersecurity** (13 blog posts, 5 guides, 3 podcasts)
3. **Space** (14 blog posts, 5 guides, 3 podcasts)
4. **Biotech** (15 blog posts, 5 guides, 3 podcasts)
5. **Nuclear** (9 blog posts, 4 guides, 2 podcasts)
6. **Energy Storage** (8 blog posts, 4 guides, 2 podcasts)
7. **Robotics** (12 blog posts, 4 guides, 2 podcasts)
8. **AV** (10 blog posts, 3 guides, 2 podcasts)
9. **Quantum** (11 blog posts, 3 guides, 2 podcasts)
10. **Materials** (6 blog posts, 2 guides, 1 podcast)
11. **BCI** (7 blog posts, 2 guides, 1 podcast)
12. **Fusion** (8 blog posts, 2 guides, 1 podcast)

**Weekly Production Target:**
- 8-10 blog posts
- 2-3 guides
- 1-2 podcasts

### Phase 3: Optimization (Weeks 13-16)

1. **Internal linking**
   - Link guides to related blog posts
   - Cross-link categories
   - Add "related content" sections

2. **SEO enhancement**
   - Schema markup
   - Sitemap generation
   - Meta descriptions

3. **Performance**
   - Image optimization
   - Lazy loading
   - CDN caching

---

## Content Type Specifications

### Blog Posts

**Purpose:** News, trends, short-form analysis

**Length:** 1,500-2,500 words

**Frontmatter:**
```yaml
---
title: "AI Agents in 2026: The New Frontier"
slug: "ai-agents-2026-trends"
category: "AI"
date: 2026-01-15
readTime: "8 min"
author: "TechScope Team"
tags: ["AI", "Agents", "LLMs"]
featured: true
excerpt: "Exploring the rise of autonomous AI agents..."
---
```

**Frequency:** 8-10 per week

### Guides

**Purpose:** Comprehensive, evergreen content

**Length:** 3,000-5,000 words

**Frontmatter:**
```yaml
---
title: "Complete Guide to LLM Fine-Tuning"
slug: "complete-guide-to-llm-fine-tuning"
category: "AI"
date: 2026-01-15
readTime: "25 min"
author: "TechScope Team"
tags: ["AI", "LLMs", "Tutorial"]
difficulty: "Intermediate"
lastUpdated: 2026-01-20
excerpt: "A comprehensive guide to fine-tuning large language models..."
---
```

**Frequency:** 2-3 per week

### Podcasts

**Purpose:** Expert interviews, discussions

**Format:** Audio + transcript

**Frontmatter:**
```yaml
---
title: "Andrew Ng on the Path to AGI"
slug: "andrew-ng-on-agi-timeline"
category: "AI"
date: 2026-01-15
duration: "45 min"
guest: "Andrew Ng"
guestTitle: "AI Pioneer, Coursera Founder"
tags: ["AI", "AGI", "Interview"]
excerpt: "Andrew Ng shares his vision for artificial general intelligence..."
audioUrl: "/podcasts/ai/001-andrew-ng.mp3
---
```

**Frequency:** 1-2 per week

---

## Navigation Strategy

### Primary Navigation

```
Home
├── Blog
├── Guides
├── Podcasts
└── Categories
    ├── AI
    ├── Robotics
    ├── Fusion
    ├── Biotech
    ├── BCI
    ├── AV
    ├── Space
    ├── Materials
    ├── Quantum
    ├── Nuclear
    ├── Energy Storage
    └── Cybersecurity
```

### Category Page Layout

Each category page includes:
1. **Hero section** - Category overview, stats
2. **Content type tabs** - Blog | Guides | Podcasts
3. **Featured content** - Top 3 items
4. **Recent content** - Latest 10 items
5. **Related categories** - Cross-links

### Hub Page Layout

Each content type hub includes:
1. **Hero section** - Content type overview
2. **Category filter** - Filter by 12 categories
3. **Featured content** - Top picks
4. **All content** - Grid with pagination
5. **Newsletter signup** - Content-specific

---

## Internal Linking Strategy

### Hub-to-Category Links
- Blog hub → Category blog pages
- Guides hub → Category guide pages
- Podcasts hub → Category podcast pages

### Category-to-Hub Links
- Category pages → Back to content type hubs
- Category pages → Other categories (related)

### Content-to-Content Links
- Guides → Related blog posts
- Blog posts → Related guides
- Podcasts → Related guides/blog posts
- All content → Category pages

### Breadcrumb Structure

```
Home > Blog > AI > AI Agents in 2026
Home > Guides > AI > Complete LLM Guide
Home > Podcasts > AI > Andrew Ng Interview
Home > Categories > AI > Blog > AI Agents in 2026
```

---

## Content Collection Schema (Astro)

### Blog Collection

```typescript
// astro.config.mjs
export default defineConfig({
  collections: {
    blog: {
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        category: z.enum(['AI', 'Robotics', 'Fusion', 'Biotech', 'BCI', 'AV', 'Space', 'Materials', 'Quantum', 'Nuclear', 'EnergyStorage', 'Cybersecurity']),
        date: z.date(),
        readTime: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
        excerpt: z.string(),
      })
    }
  }
})
```

### Guide Collection

```typescript
guides: {
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum([...]),
    date: z.date(),
    readTime: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    lastUpdated: z.date(),
    excerpt: z.string(),
  })
}
```

### Podcast Collection

```typescript
podcasts: {
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum([...]),
    date: z.date(),
    duration: z.string(),
    guest: z.string(),
    guestTitle: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    audioUrl: z.string().url(),
  })
}
```

---

## SEO Strategy

### URL Best Practices
- Hyphen-separated, lowercase
- Include primary keyword
- Max 60 characters
- No stop words

### Meta Templates

**Blog Post:**
```
Title: [Title] | TechScope [Category] Blog
Description: [Excerpt] | Expert analysis on [category] trends and developments.
```

**Guide:**
```
Title: [Title] | TechScope [Category] Guide
Description: [Excerpt] | Comprehensive [category] guide for [difficulty] learners.
```

**Podcast:**
```
Title: [Title] | TechScope [Category] Podcast
Description: [Excerpt] | Interview with [guest] on [category] topics.
```

### Schema Markup
- BlogPost schema for blog posts
- HowTo schema for guides
- PodcastEpisode schema for podcasts
- BreadcrumbList schema for navigation

---

## Implementation Checklist

### Structure Setup
- [ ] Create `/blog/` directory structure
- [ ] Create `/guides/` directory structure
- [ ] Create `/podcasts/` directory structure
- [ ] Create `/content/` markdown directories
- [ ] Set up Astro content collections
- [ ] Configure collection schemas

### Component Development
- [ ] BlogCard.astro component
- [ ] GuideCard.astro component
- [ ] PodcastCard.astro component
- [ ] ContentFilter.astro component
- [ ] CategoryNav.astro component
- [ ] Breadcrumb.astro component

### Page Development
- [ ] Blog hub page
- [ ] Guides hub page
- [ ] Podcasts hub page
- [ ] Category hub pages (12)
- [ ] Category blog pages (12)
- [ ] Category guide pages (12)
- [ ] Category podcast pages (12)
- [ ] Individual content pages

### Content Migration
- [ ] Migrate existing blog content
- [ ] Create guide content structure
- [ ] Create podcast content structure
- [ ] Add frontmatter to all content
- [ ] Configure internal links

### SEO & Performance
- [ ] Add schema markup
- [ ] Configure sitemap
- [ ] Optimize images
- [ ] Set up caching
- [ ] Configure meta tags

---

## Analytics & Tracking

### Key Metrics
- Page views by content type
- Page views by category
- Time on page (guides should be highest)
- Bounce rate
- Conversion (newsletter signup)
- Search rankings by keyword

### Content Performance Tracking
- Track which categories drive most traffic
- Identify top-performing content types
- Monitor guide completion rates
- Track podcast listen-through rates

---

## Next Steps

1. **Review this plan** - Confirm structure and workflow
2. **Approve folder structure** - Lock in directory organization
3. **Begin implementation** - Start with Phase 1 setup
4. **Content calendar** - Create detailed production schedule
5. **Begin content production** - Start with AI category (highest priority)

---

**Document Version:** 1.0
**Last Updated:** 2026-01-15
**Status:** Ready for Review

# Graph Report - /home/unity008/ProjectAI/lpks  (2026-07-28)

## Corpus Check
- Corpus is ~987 words - fits in a single context window. You may not need a graph.

## Summary
- 49 nodes · 39 edges · 13 communities (8 shown, 5 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Next.js Boilerplate & Assets|Next.js Boilerplate & Assets]]
- [[_COMMUNITY_Package Core|Package Core]]
- [[_COMMUNITY_App Layout & Fonts|App Layout & Fonts]]
- [[_COMMUNITY_Dev Tooling|Dev Tooling]]
- [[_COMMUNITY_NPM Scripts|NPM Scripts]]
- [[_COMMUNITY_JSConfig Path Aliases|JSConfig Path Aliases]]
- [[_COMMUNITY_pnpm Workspace Config|pnpm Workspace Config]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_UI Icons|UI Icons]]
- [[_COMMUNITY_Globe Icon|Globe Icon]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `README.md - Next.js Project Documentation` - 5 edges
3. `compilerOptions` - 2 edges
4. `paths` - 2 edges
5. `next` - 2 edges
6. `Next.js Framework` - 2 edges
7. `Vercel Platform` - 2 edges
8. `pnpm-workspace.yaml - Package Manager Configuration` - 2 edges
9. `next.svg - Next.js Logo` - 2 edges
10. `geistSans` - 1 edges

## Surprising Connections (you probably didn't know these)
- `next.svg - Next.js Logo` --conceptually_related_to--> `Next.js Framework`  [INFERRED]
  public/next.svg → README.md
- `vercel.svg - Vercel Logo` --conceptually_related_to--> `Vercel Platform`  [INFERRED]
  public/vercel.svg → README.md
- `file.svg - Document Icon` --semantically_similar_to--> `window.svg - Window/Application Icon`  [INFERRED] [semantically similar]
  public/file.svg → public/window.svg

## Import Cycles
- None detected.

## Communities (13 total, 5 thin omitted)

### Community 0 - "Next.js Boilerplate & Assets"
Cohesion: 0.22
Nodes (9): next, next.svg - Next.js Logo, vercel.svg - Vercel Logo, README.md - Next.js Project Documentation, create-next-app, Geist Font, next/font, Next.js Framework (+1 more)

### Community 1 - "Package Core"
Cohesion: 0.29
Nodes (6): dependencies, react, react-dom, name, private, version

### Community 2 - "App Layout & Fonts"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

### Community 3 - "Dev Tooling"
Cohesion: 0.40
Nodes (5): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss

### Community 4 - "NPM Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 5 - "JSConfig Path Aliases"
Cohesion: 0.50
Nodes (3): compilerOptions, paths, @/*

### Community 6 - "pnpm Workspace Config"
Cohesion: 0.67
Nodes (3): pnpm-workspace.yaml - Package Manager Configuration, sharp Image Processing, unrs-resolver

## Knowledge Gaps
- **29 isolated node(s):** `geistSans`, `geistMono`, `metadata`, `eslintConfig`, `@/*` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Package Core` to `Next.js Boilerplate & Assets`?**
  _High betweenness centrality (0.153) - this node is a cross-community bridge._
- **Why does `next` connect `Next.js Boilerplate & Assets` to `Package Core`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **What connects `geistSans`, `geistMono`, `metadata` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._
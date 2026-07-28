# Task for delegate

You are a graphify extraction subagent. Read the files listed and extract a knowledge graph fragment.
Output ONLY valid JSON matching the schema below - no explanation, no markdown fences, no preamble.

Files (chunk 1 of 1):
/home/unity008/ProjectAI/lpks/README.md
/home/unity008/ProjectAI/lpks/pnpm-workspace.yaml
/home/unity008/ProjectAI/lpks/public/file.svg
/home/unity008/ProjectAI/lpks/public/globe.svg
/home/unity008/ProjectAI/lpks/public/next.svg
/home/unity008/ProjectAI/lpks/public/vercel.svg
/home/unity008/ProjectAI/lpks/public/window.svg

Rules:
- EXTRACTED: relationship explicit in source (import, call, citation)
- INFERRED: reasonable inference (shared structure, implied dependency)
- AMBIGUOUS: uncertain — flag it, do not omit
- Code files: semantic edges AST cannot find. Do not re-extract imports. When adding `calls` edges: source is the caller, target is the callee, never reversed; keep `calls` within one language.
- Doc/paper files: named concepts, entities, citations. Store rationale (WHY decisions were made) as a `rationale` attribute on the relevant node, not as a separate node. Use `file_type:"rationale"` for concept-like nodes (ideas, principles, mechanisms) and `file_type:"concept"` for named concepts. `file_type` MUST be one of exactly these six values: `code`, `document`, `paper`, `image`, `rationale`, `concept`. Any other value is invalid and will be rejected.
- Image files: use vision — understand what the image IS, not just OCR
- Semantic similarity: if two concepts solve the same problem or represent the same idea without a structural link (no import, call, or citation), add a `semantically_similar_to` edge marked INFERRED with confidence_score 0.6-0.95. Non-obvious cross-file links only.
- Hyperedges: if 3+ nodes share a concept, flow, or pattern not captured by pairwise edges, add a hyperedge to a top-level `hyperedges` array. Use sparingly. Max 3 per chunk.
- If a file has YAML frontmatter (--- ... ---), copy source_url, captured_at, author, contributor onto every node from that file.
- confidence_score is REQUIRED on every edge — never omit it, never use 0.5 as a default. EXTRACTED = 1.0 always. INFERRED: pick exactly ONE of 0.95 (direct structural evidence), 0.85 (strong inference), 0.75 (reasonable inference), 0.65 (weak inference), 0.55 (speculative but plausible) — never 0.5; if none fit, mark the edge AMBIGUOUS. AMBIGUOUS = 0.1-0.3.

Node ID format: lowercase, only `[a-z0-9_]`, no dots or slashes. Format `{stem}_{entity}` where stem is the full repo-relative path with the extension dropped, every segment joined with `_` (each lowercased with non-alphanumeric chars replaced by `_`) and entity is the symbol name similarly normalized. Use every directory level, not just the immediate parent. Top-level files use just the filename stem. This must match the AST extractor's ID. Never append chunk or sequence suffixes — IDs must be deterministic from the label alone.

Output exactly this JSON (no other text):
{"nodes":[{"id":"auth_session_validatetoken","label":"Human Readable Name","file_type":"code|document|paper|image|rationale|concept","source_file":"<FILE_LIST path verbatim>","source_location":null,"source_url":null,"captured_at":null,"author":null,"contributor":null}],"edges":[{"source":"node_id","target":"node_id","relation":"calls|implements|references|cites|conceptually_related_to|shares_data_with|semantically_similar_to|rationale_for","confidence":"EXTRACTED|INFERRED|AMBIGUOUS","confidence_score":1.0,"source_file":"<FILE_LIST path verbatim>","source_location":null,"weight":1.0}],"hyperedges":[{"id":"snake_case_id","label":"Human Readable Label","nodes":["node_id1","node_id2","node_id3"],"relation":"participate_in|implement|form","confidence":"EXTRACTED|INFERRED","confidence_score":0.75,"source_file":"<FILE_LIST path verbatim>"}],"input_tokens":0,"output_tokens":0}

source_file RULE: set source_file to the FILE_LIST path for that file VERBATIM (absolute, no shortening to basename, no re-relativizing, no separator change). Keeps full build and --update on one base so build_merge's replace matches instead of duplicating.

Write the JSON output to /home/unity008/ProjectAI/lpks/graphify-out/.graphify_chunk_01.json

## Acceptance Contract
Acceptance level: checked
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Implement the requested change without widening scope

Required evidence: changed-files, tests-added, commands-run, residual-risks, no-staged-files

Finish with a fenced JSON block tagged `acceptance-report` in this shape:
Use empty arrays when no items apply; array fields contain strings unless object entries are shown.
`criteriaSatisfied[].status` must be exactly one of: satisfied, not-satisfied, not-applicable.
`commandsRun[].result` must be exactly one of: passed, failed, not-run.
`manualNotes` and `notes` are optional strings; an empty string means no note and does not satisfy `manual-notes` evidence.
```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "specific proof"
    }
  ],
  "changedFiles": [
    "src/file.ts"
  ],
  "testsAddedOrUpdated": [
    "test/file.test.ts"
  ],
  "commandsRun": [
    {
      "command": "command",
      "result": "passed",
      "summary": "short result"
    }
  ],
  "validationOutput": [
    "validation output or concise summary"
  ],
  "residualRisks": [
    "none"
  ],
  "noStagedFiles": true,
  "diffSummary": "short description of the diff",
  "reviewFindings": [
    "blocker: file.ts:12 - issue found, or no blockers"
  ],
  "manualNotes": "anything else the parent should know"
}
```
# DeepQA Portfolio Website — Implementation Tasks

**Lifecycle**: ACTIVE
**Owner**: Dhani
**Next consumer**: /plan-implement
**Review trigger**: scope, dependency, or verification change

## Readiness

**Status**: PASS

- Product Spec: PASS
- Technical Spec: PASS
- Contract Spec: PASS / N/A for external interfaces
- Cross-Spec: PASS
- Open Blocking/High: None

**User approval**: approved — Dhani approved the pipeline through /plan-implement on 2026-09-27.
**Baseline**: 48ac383 feat: replace work section with contact
**QA depth**: Focused

## Phase 1: Foundation

- [x] T001 [P] Update portfolio smoke coverage for the approved Home structure and local project assets.
  - Acceptance: The test checks the hero proof line, Catatan, Proyek, note link, local thumbnails, required landmarks, no placeholder destinations, and no private data.

- [x] T002 [P] Add local SVG thumbnails for AI workflow, QA skill toolkit, and mobile automation test.
  - Acceptance: Three readable local assets exist with intrinsic dimensions and no external dependency.

**Checkpoint**: Foundation ready

## Phase 2: User Story 1 — Hero and proof (P1)

**Goal**: A visitor understands Dhani's focus, experience, and approved profile paths quickly.

**Independent Test**: Open Home at desktop and mobile widths. Confirm the portrait, hero statement, proof line, profile actions, focus order, and inactive-state behavior.

### Implementation

- [x] T003 [US1] Implement the approved Home hero and profile actions in dist/index.html.
  - Acceptance: The page shows the approved portrait, Dhani, Quality Assurance, the QA fundamentals / automation / AI statement, supporting copy, and WhatsApp, LinkedIn, CV, and email actions with safe inactive states for missing destinations.

- [x] T004 [US1] Add the compact company proof line inside the hero and remove the separate experience section.
  - Acceptance: The hero contains Verint / automation, Tokopedia / scale and performance, Sorabel / E2E, and Populix / AI. No separate Pengalaman or About section exists.

- [x] T005 [US1] Story review for Hero and proof.
  - Acceptance: An independent reviewer finds the story consistent with PRD, Product Spec, Technical Spec, privacy rules, and smoke checks.

**Checkpoint**: US1 independently functional and reviewed

## Phase 3: User Story 2 — Catatan, Proyek, and note detail (P1)

**Goal**: A visitor can scan selected notes and projects, open the full note, and return to Home.

**Independent Test**: Open Home, inspect Catatan and Proyek, open the note, read its image and text, and return to Home with JavaScript disabled.

### Implementation

- [x] T006 [US2] Implement the Catatan section and featured note row.
  - Acceptance: Catatan shows title, subtitle, proportional local thumbnail, and a working link to claude-qa-workflow.html.

- [x] T007 [US2] Implement the Proyek section with three consistent rows and local thumbnails.
  - Acceptance: Proyek shows AI workflow, QA skill toolkit, and Mobile automation test with consistent typography, spacing, and thumbnail proportions. Missing destinations remain non-actionable.

- [x] T008 [US2] Align the note detail page with the approved editorial style.
  - Acceptance: The note page keeps the full approved text, diagram, source link, return path, alt text, intrinsic dimensions, lazy loading, fallback, and no-underline treatment.

- [x] T009 [US2] Harden responsive layout, accessibility, and no-JavaScript navigation.
  - Acceptance: Home and note remain usable on phone and desktop widths, headings are ordered, focus styles are visible, and no meaning depends on hover or color alone.

- [x] T010 [US2] Story review for Catatan, Proyek, and note detail.
  - Acceptance: An independent reviewer finds content, privacy, responsive behavior, accessibility, and smoke checks PASS.

**Checkpoint**: US2 independently functional and reviewed

## Phase 4: User Story 3 — Measurement (P1)

**Goal**: The site exposes privacy-light events without a backend or blocking network call.

**Independent Test**: Load Home and the note without an analytics endpoint. Confirm local deepqa:track events and navigation. Confirm no personal data is sent.

### Implementation

- [x] T011 [US3] Add view and relevant-link tracking attributes to Home and note.
  - Acceptance: Home, note, profile, and project actions dispatch local events with event, content type, and pathname only. Network delivery stays disabled unless explicitly configured.

- [x] T012 [US3] Run the analytics story review.
  - Acceptance: An independent reviewer confirms failure handling, privacy, no-JavaScript behavior, and analytics smoke checks PASS.

**Checkpoint**: US3 independently functional and reviewed

## Dependencies and execution order

- T001 and T002 → T003-T005 → T006-T010 → T011-T012
- T003 and T004 share dist/index.html and run in order.
- T006 and T007 share the Home content structure and run in order.
- No backend, database, new dependency, or external API is required.

## Checkpoint plan

| Checkpoint | Trigger | Tasks |
| --- | --- | --- |
| CP1 | Foundation and US1 completion | T001-T005 |
| CP2 | US2 completion | T006-T010 |
| CP3 | US3 completion | T011-T012 |

Gate protocol (review, regression, retrospective, git) is defined by /plan-implement.

## Progress notes

### T001-T005 — Hero and proof

Status: PASS
Changed: dist/index.html, dist/styles.css, tests/portfolio-smoke.mjs
Validation: test-first failure recorded before the new assets and markup; portfolio smoke PASS; independent reviewer PASS after the note-anchor fix.

### Checkpoint CP1

**Went well**: The new smoke test locks the approved hero structure, proof line, safe profile actions, and local assets.
**Went wrong**: The first review found the article return link still used the removed insights anchor.
**Improve**: Keep Home anchor names in a single smoke assertion and update detail links in the same task.

### T006-T010 — Catatan, Proyek, and note detail

Status: PASS
Changed: dist/index.html, dist/styles.css, dist/articles/claude-qa-workflow.html, tests/portfolio-smoke.mjs, dist/assets/*.svg
Validation: portfolio smoke PASS; article anchor assertion PASS; independent reviewer PASS after the fix; no-JavaScript paths remain relative and readable.

### Checkpoint CP2

**Went well**: Catatan and Proyek now share one compact row pattern and proportional thumbnails.
**Went wrong**: The note page had one stale anchor after the Home section rename.
**Improve**: Test every detail-page return link against the current Home section IDs.

### T011-T012 — Measurement

Status: PASS
Changed: dist/index.html, dist/script.js, tests/analytics-smoke.mjs
Validation: node --check dist/script.js PASS; analytics smoke PASS; no endpoint is called unless configured.

### Checkpoint CP3

**Went well**: Analytics stays local and disabled for network delivery by default.
**Went wrong**: No provider is selected yet, so the main number remains unmeasured.
**Improve**: Add provider-specific contract coverage after an endpoint and consent rule are approved.

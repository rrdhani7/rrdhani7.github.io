# AI-First QA Portfolio - Working Memory

## Project facts

- The configured project folder was absent when discovery began.
- The portfolio brief is one reference, not the final source of truth.
- The current legacy portfolio uses a generic vCard template and placeholder content.
- The main differentiator is deep AI integration in daily QA work.
- The portfolio must connect technical proof to business and technical results.
- The working brand name is DeepQA.
- The preferred first host is `deepqa.github.io` through GitHub Pages.

## Decisions

| # | Decision | Why | Stage/agent | Date |
| --- | --- | --- | --- | --- |
| 1 | Use one behavior goal: qualified visitors take one relevant next step | It supports several opportunities without making several sites | P1/product-discovery | 2026-09-20 |
| 2 | Treat all visitor problems as unverified | No visitor interviews exist yet | P1/product-discovery | 2026-09-20 |
| 3 | ~~Propose an outcome-first portfolio with proof and visitor paths~~ | Superseded by decision 4 after owner feedback | P1/product-discovery | 2026-09-20 |
| 4 | Propose a research journal with reports, tools, and quiet opportunity paths | The owner wants useful content to build trust before any offer | P1/product-discovery | 2026-09-20 |
| 5 | Separate reports, field notes, tools, selected work, and about content | Clear boundaries make the site easier to scan | P1/product-discovery | 2026-09-20 |
| 6 | Place the premium offer at the end of a useful public report | This keeps the main experience educational and supports soft selling | P1/product-discovery | 2026-09-20 |
| 7 | Use DeepQA as the working brand | The name supports reports, tools, products, and applied QA research | P1/product-discovery | 2026-09-20 |
| 8 | Use GitHub Pages for the first version | It gives the first version a simple public host | P1/product-discovery | 2026-09-20 |
| 9 | Use one contextual offer per content type | It supports premium writing, consulting, and tools without competing sales sections | P1/product-discovery | 2026-09-20 |
| 10 | Keep the home page to four main sections | The owner found the earlier section structure unclear | P1/product-discovery | 2026-09-20 |

## Tried & failed (do not repeat)

- None.

## Open questions

- Which public report should become the first entry point? -> owner: user
- Does the user approve the contextual-path problem as the first problem to solve? -> owner: user
- Does Dhani control the `deepqa` GitHub account or organization required for `deepqa.github.io`? -> owner: user
- Which business metrics can Dhani publish safely? -> owner: user
- Which three sanitized artifacts can support the first case study? -> owner: user
- Do recent visitors follow the proposed decision path? -> owner: discovery interviews

## Delegation log

| Handoff | Provider/model | Outcome |
| --- | --- | --- |
| None | None | No delegation |

## Development workflow approval

- Dhani approved the PRD, the proposed metrics, and the pipeline through `/plan-implement` on 2026-09-22.
- FE, BE, and database work must follow best practice. For this static portfolio, avoid a backend or database unless an approved requirement needs one.
- Product, technical, contract, verification, and task artifacts are approved for implementation on 2026-09-22.
- The current release uses static HTML/CSS/JS only. No backend, database, new dependency, or external API is required.

## Compact journal revision — 2026-09-26

- Lifecycle: ACTIVE. Owner: Dhani. Next consumer: design review. Review trigger: more published content or new tools.
- Goal / tier: Quick, reversible layout change. Make the home page feel complete with one article.
- User approval: “oke coba implement” approves the compact design proposed in this task. Supersedes the earlier four-section home decision for this revision.
- Decision: 880px content width, short Indonesian introduction, stacked article list, compact LinkedIn footer. Preserve typefaces and blue/lime palette. Remove empty tool and pending-content sections; merge About into the introduction.
- Changed files: dist/index.html, dist/styles.css, dist/articles/claude-qa-workflow.html, tests/portfolio-smoke.mjs.
- Review: home styles use journal classes; article navigation no longer references removed sections. No backend, dependency, or analytics changes.
- Focused QA PASS: portfolio and analytics smoke checks; browser inspection at desktop and mobile widths (1280px and 375px, no horizontal overflow); article opens and “Semua tulisan” returns to the home list.
- Delivery: local preview on port 4173. Not published. Visual sign-off pending owner review.

## Personal editorial revision — 2026-09-26

- Lifecycle: ACTIVE. Owner: Dhani. Next consumer: owner visual review. Review trigger: supplied portrait or changed content.
- User approved implementation of the Juliardi/Brian-inspired direction. Supersedes the compact journal visual treatment above.
- Quick scope: 960px layout, Dhani as primary identity with DeepQA secondary, direct QA/AI introduction, warm white and neutral type, restrained blue, two-column desktop intro, stacked mobile intro, article rows without cards.
- No portrait asset exists in this project. Use a decorative CSS monogram as an explicit temporary substitute; a real portrait remains optional owner input.
- Shared article header and palette match the new home page. Article body content and analytics unchanged.
- Focused QA PASS: existing portfolio and analytics smoke checks, diff whitespace check, browser visual inspection, 375px and 1280px document widths without horizontal overflow, article open and return to home.
- Delivery: local preview only; not published. Visual sign-off pending owner review.

## Owner portrait — 2026-09-26

- Owner supplied IMG_2537 2.HEIC for the agreed portrait slot. Replaced the temporary monogram with the supplied photo.
- Converted to an optimized 1200×1600 JPEG; preserved the original file. Display crop and grayscale are CSS-only, with descriptive alt text.
- Validation: both smoke suites and whitespace check pass. Browser confirms image loads; checked standard preview and 375px mobile with no horizontal overflow.
- Local preview only; not published.

## Approved Figma direction — 2026-09-27

- Lifecycle: ACTIVE. Owner: Dhani. Next consumer: PRD approval and `/plan-product-spec`. Review trigger: scope, content, contact destinations, or metric change.
- Dhani approved the Figma direction as the visual source of truth for the next implementation.
- Decision: keep one Home page with a focused hero, a compact company proof line inside the hero, Catatan, and Proyek. Do not use a separate Pengalaman section or separate About page in the first release.
- Decision: keep one note detail path with the approved text, diagram, and a return path to Home. Use the same type, spacing, thumbnail proportion, and no-underline style for Catatan and Proyek.
 - PRD revision: `specs/ai-qa-portfolio/prd.md` and `metrics.md` approved by Dhani on 2026-09-27 for the development workflow through `/plan-implement`.

## Plan implement complete — 2026-09-27

- Lifecycle: ACTIVE. Owner: Dhani. Next consumer: `/impl-review`. Review trigger: implementation review or QA result.
- Tasks T001-T012 PASS. The implementation matches the approved Home hero, compact proof line, Catatan, Proyek, note detail, local thumbnails, and disabled-by-default analytics.
- Validation: `node --check dist/script.js`, portfolio smoke, analytics smoke, and `git diff --check` PASS.
- Independent reviewer PASS after fixing the article return link from `#insights` to `#notes`.
- Commit: implementation commit recorded in Git after all task and regression checks passed.

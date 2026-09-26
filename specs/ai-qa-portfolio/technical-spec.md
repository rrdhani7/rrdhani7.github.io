# DeepQA Portfolio Website — Technical Spec

**Lifecycle**: ACTIVE
**Owner**: Dhani
**Next consumer**: /plan-contract-spec
**Review trigger**: architecture, content delivery, contact destination, or analytics change

Product Spec: [product-spec.md](./product-spec.md)

## Architecture

The release stays a static frontend. HTML, CSS, JavaScript, and approved local images and SVG thumbnails live in dist/. No backend, database, new dependency, or external API is required.

Core links work without JavaScript. The optional analytics adapter emits local events and sends a JSON beacon only when an endpoint is configured.

## Components

- Home page — hero, proof line, Catatan, Proyek, and footer.
- Note page — approved note text, diagram, source link, and return path.
- Local visual assets — portrait, note diagram, and three project thumbnails.
- Analytics adapter — privacy-light local events with disabled network delivery by default.

## Frontend contract

- dist/index.html is the public Home page.
- dist/articles/claude-qa-workflow.html is the first note detail page.
- All asset paths are relative and work from both page locations.
- The Home page exposes one main landmark and one h1.
- Each image has descriptive alt, intrinsic width, and intrinsic height.
- Profile actions without approved destinations are visible as inactive controls or omitted.
- Core navigation works with JavaScript disabled.

## Content safety

- Use only owner-approved note text and images.
- Use short, sanitized company and project labels.
- Do not add ticket keys, internal URLs, credentials, private screenshots, or test data.
- Keep the LinkedIn source link as attribution only.
- Do not render user-entered HTML.

## Analytics adapter

- Use data-track attributes for profile, note, project, and related-link actions.
- Use data-track-view for Home and note views.
- Dispatch deepqa:track with only event, content type, and pathname.
- Use navigator.sendBeacon only when window.DEEPQA_ANALYTICS_ENDPOINT is non-empty.
- Catch all send errors. Never block navigation or rendering.

## Reliability and security

- Missing optional images show a readable fallback.
- Missing destinations never become placeholder links.
- External fonts remain optional through system fallbacks.
- No credentials or provider tokens enter the repository.

## Quality plan

- Run node --check dist/script.js.
- Run node tests/portfolio-smoke.mjs.
- Run node tests/analytics-smoke.mjs.
- Serve dist/ locally and inspect desktop and mobile layouts.
- Run git diff --check.

Key files:

- dist/index.html
- dist/styles.css
- dist/script.js
- dist/articles/claude-qa-workflow.html
- dist/assets/dhani-portrait.jpg
- dist/assets/claude-qa-workflow.jpg
- dist/assets/*.svg

---

**Status**: APPROVED
**User approval**: Approved by Dhani on 2026-09-27 for the development workflow through /plan-implement.

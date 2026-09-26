# DeepQA Portfolio Website — Product Spec

**Lifecycle**: ACTIVE
**Owner**: Dhani
**Next consumer**: /plan-technical-spec
**Review trigger**: UX, scope, content, or visitor evidence change

Product PRD: [prd.md](./prd.md)

## Overview

DeepQA is a calm, personal QA portfolio. The Home page states Dhani's value, shows compact company proof, and presents notes and projects. A visitor can open one full note with its supporting diagram. The page gives a relevant path to a report, tool, consultation, or career conversation when that destination is approved.

## User stories

1. (P1) As a QA practitioner, I want to understand Dhani's QA, automation, and AI focus quickly, so that I can decide whether his notes are useful.
2. (P1) As a QA practitioner, I want to read a full note with its diagram or image, so that I can learn from real work.
3. (P1) As a recruiter, I want concise proof from Verint, Tokopedia, Sorabel, and Populix, so that I can judge fit quickly.
4. (P1) As a QA or engineering leader, I want to inspect selected projects, so that I can decide whether to discuss a report, tool, or consultation.
5. (P1) As Dhani, I want to measure relevant next-step clicks, so that I can learn whether the portfolio supports qualified conversations.

## Spec: Hero and proof

### User story

As a recruiter, buyer, or collaborator, I want to understand Dhani's focus and proof quickly, so that I can choose a relevant next step.

### Functional specification

- Show the approved portrait, name, role, value statement, and short supporting description.
- State the connection between QA fundamentals, automation, and AI.
- Show one compact proof line for Verint / automation, Tokopedia / scale and performance, Sorabel / E2E, and Populix / AI.
- Show WhatsApp, LinkedIn, CV, and email entry points only when destinations are approved.
- Keep the proof inside the hero. Do not add a separate experience timeline or About page.

### Non-functional specification

- The hero is readable on phone and desktop widths.
- Links have visible keyboard focus and do not depend on hover.
- The 8x claim remains an owner claim until scope and method are approved.

## Spec: Catatan and note detail

### User story

As a QA practitioner, I want to open a full note with its supporting media, so that I can learn from real work.

### Functional specification

- Show the approved note under Catatan with a title, subtitle, and proportional thumbnail.
- Open dist/articles/claude-qa-workflow.html from the note row.
- Show the full approved note text, diagram, source link, and a return path to Home.
- Keep the note readable when JavaScript is disabled.
- Do not publish private source material.

### Non-functional specification

- The image has descriptive alt text, intrinsic dimensions, lazy loading, and a fallback.
- The detail page keeps the approved type, spacing, and no-underline link treatment.

## Spec: Proyek and soft-selling paths

### User story

As a potential client, I want to see selected project signals, so that I can decide whether to discuss a report, tool, or consultation.

### Functional specification

- Show AI workflow, QA skill toolkit, and Mobile automation test under Proyek.
- Use the same type scale, row rhythm, and thumbnail proportion as Catatan.
- Link a project only when its destination is approved and its content exists.
- Keep missing project detail non-actionable instead of showing a broken link.

### Non-functional specification

- Project rows remain compact and scannable.
- The page does not use underline decoration for normal links.
- Project images do not expose private employer data.

## Spec: Measurement and trust

### User story

As Dhani, I want to measure relevant next-step clicks, so that I can learn whether the portfolio supports qualified conversations.

### Functional specification

- Emit local deepqa:track events for eligible views and approved relevant-link clicks.
- Send no network event unless window.DEEPQA_ANALYTICS_ENDPOINT is explicitly configured.
- Do not send names, email addresses, query strings, or free-form content.
- Ignore analytics failures and keep reading and navigation working.

### Non-functional specification

- Measurement adds no visible delay.
- Core navigation works without JavaScript.
- The mobile page load guardrail remains 3 seconds at p75.

## Assumptions

- Dhani owns or can republish the note text, image, and supplied portrait.
- Dhani can approve sanitized company and project descriptions.
- Static hosting remains sufficient.
- Final contact destinations may be supplied after the first implementation.

## Open questions

- Which WhatsApp number, email, and CV file are final?
- Which project destinations are approved?
- Which analytics provider and consent rule will receive events?

---

**Status**: APPROVED
**User approval**: Approved by Dhani on 2026-09-27 for the development workflow through /plan-implement.

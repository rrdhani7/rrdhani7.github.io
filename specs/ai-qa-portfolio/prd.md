---
title: DeepQA Portfolio Website — Home and Content Path
product: "[[DeepQA]]"
feature: Public portfolio website
status: approved
tags: [portfolio, qa, ai, writing, consulting, career]
related:
  - "[[AI-First QA Portfolio - Discovery]]"
source_url: https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=0-1
source_type: other
last_synced: 2026-09-27
created: 2026-09-27
updated: 2026-09-27
---

# DeepQA Portfolio Website — Home and Content Path

**Lifecycle**: ACTIVE
**Owner**: Dhani
**Next consumer**: `/plan-product-spec` after user approval
**Review trigger**: approved design, public content, contact destinations, or main number changes

**Size**: one cycle
**Evidence**: [discovery](./discovery.md) · research absent · validation absent · priorities absent · [numbers](./metrics.md) · [approved design](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=0-1)

Research, validation, and prioritization documents do not exist for this revision. Visitor needs remain unverified. The design and positioning come from Dhani's approved brief and review feedback.

## 1. Introduction

DeepQA is Dhani's public portfolio for QA work, AI practice, useful notes, and selected projects. It serves QA practitioners, QA and engineering leaders, recruiters, hiring managers, and potential clients. The page must support soft selling for premium reports, tools, consulting, and the next career opportunity without feeling like a sales page or a full CV.

| No | Type | Question | Answer | Source |
|----|------|----------|--------|--------|
| 1 | What | What is this feature? | A public QA portfolio with one home page, one note detail path, and selected project summaries. | [Approved Figma design](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=0-1) |
| 2 | What | Which problem does it solve? | A visitor may not understand Dhani's strengths, proof, and next step from a sparse or disconnected portfolio. | [Discovery](./discovery.md) — unverified; owner brief |
| 3 | Where | Where does it apply? | The DeepQA Home page and the note detail page. | [Approved Figma design](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=7-2) |
| 4 | Why | Why is it important? | The portfolio must build trust for premium reports, tools, consulting, and career conversations before a visitor contacts Dhani. | Owner brief; [discovery](./discovery.md) |
| 5 | When | When does a visitor use it? | After a visitor opens a shared portfolio, note, project, or profile link. | Owner brief; [approved design](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=0-1) |
| 6 | Who | Which users is it for? | QA practitioners, QA and engineering leaders, recruiters, hiring managers, and potential clients. | [Discovery](./discovery.md); owner brief |
| 7 | How | How does it work? | It introduces Dhani, shows concise proof, presents notes and projects, and offers relevant contact or content paths. | [Approved Figma design](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=7-2) |

## 2. The problem

Visitors may not know what Dhani does, how his QA experience connects to automation and AI, or which next step fits their need. Recruiters and hiring managers may miss relevant company experience when it appears as a separate CV-like section. Potential clients may leave without seeing enough proof to start a conversation about a report, tool, or consultation. This problem is based on Dhani's design feedback and owner goals; no visitor interview has confirmed it.

**Why now**: The owner approved a new Figma direction and needs a clear product brief before implementation.

## 3. Success numbers

- **Main number**: qualified next-step rate — start **0% tracked** → target **10% of eligible sessions within 8 weeks of launch**.
- **Must not become worse**: mobile page load will not become worse than **3 seconds at p75** for the main content page.

These values are copied from [metrics.md](./metrics.md). Visitor evidence does not yet support the target.

## 4. Time budget

**Proposed appetite: 5 working days** for the first release. The team must fit the Home page, one note detail path, selected project summaries, approved contact links, and basic measurement inside this limit.

## 5. Not in scope

- A content management system or editor dashboard.
- Visitor accounts, payment processing, or a gated report store.
- A full booking system for consulting.
- A newsletter, email automation, or lead scoring system.
- Public copies of internal employer data, tickets, credentials, or private test data.
- A separate experience timeline or a separate About page in the first release.

**If the time runs out**:

| Must ship | Remove first |
| --- | --- |
| Home hero, proof line, Catatan, Proyek, one note detail page, approved contact paths, and measurement | Extra project detail pages, downloads, advanced motion, analytics dashboard, and unapproved contact links |

## 6. User stories

### Readers and practitioners

1. (P1) As a QA practitioner, I want to understand Dhani's QA, automation, and AI focus quickly, so that I can decide whether his notes are useful to me.
2. (P1) As a QA practitioner, I want to read a full note with its diagram or image, so that I can learn from real work.
3. (P2) As a reader, I want to open a project summary, so that I can see how the ideas become practical work.

### Recruiters and hiring managers

1. (P1) As a recruiter, I want to see concise proof from Verint, Tokopedia, Sorabel, and Populix, so that I can judge fit without reading a long CV.
2. (P1) As a hiring manager, I want to see the connection between QA fundamentals, automation, and AI, so that I can assess Dhani's level and range.

### Potential clients and collaborators

1. (P1) As a QA or engineering leader, I want to inspect selected work, so that I can decide whether to discuss a report, tool, or consultation.
2. (P1) As a potential collaborator, I want a clear approved contact path, so that I can start a conversation.

### Owner

1. (P1) As Dhani, I want to publish one approved note with supporting media, so that the portfolio starts with real work.
2. (P1) As Dhani, I want to present project summaries without exposing private data, so that the portfolio shows useful proof safely.
3. (P1) As Dhani, I want to measure relevant next-step clicks, so that I can learn whether the portfolio supports qualified conversations.

## 7. Requirements

| No | Requirement | Acceptance criteria | Design |
|----|-------------|---------------------|--------|
| 1 | The Home page must introduce Dhani as a QA practitioner who combines QA fundamentals, automation, and AI. | The Home page shows the approved portrait, name, role, hero statement, and short supporting description. | [Home frame](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=7-2) |
| 2 | The Home page must show the approved profile actions. | The hero includes WhatsApp, LinkedIn, CV, and email entry points when their destinations are approved. | [Home frame](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=7-2) |
| 3 | The Home page must show Dhani's company proof inside the hero. | One concise proof line names Verint / automation, Tokopedia / scale and performance, Sorabel / E2E, and Populix / AI. | [Home frame](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=7-2) |
| 4 | The Home page must present approved notes under the Catatan section. | A note row shows a title, subtitle, proportional thumbnail, and a link to the full note. | [Home frame](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=7-2) |
| 5 | The first note must have a detail page. | The detail page shows the approved note text, its diagram or image, and a way to return to Home. | [Note detail frame](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=26-19) |
| 6 | The Home page must present selected work under the Proyek section. | The section shows AI workflow, QA skill toolkit, and mobile automation test summaries with consistent type and proportional thumbnails. | [Home frame](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=7-2) |
| 7 | The Home page must keep the approved editorial style. | Catatan and Proyek use the same type scale, spacing logic, thumbnail proportion, and no underline treatment. | [Approved Figma design](https://www.figma.com/design/kiQzoAuuIRzeIpwPitdRG3/DeepQA?node-id=0-1) |
| 8 | The site must protect employer and user data. | Public content excludes credentials, internal addresses, ticket keys, private screenshots, and personal test data. | — |
| 9 | The site must work on a phone and a desktop browser. | Hero, Catatan, Proyek, detail content, images, and approved links remain usable at both widths. | — |
| 10 | The site must record the main number and its guardrail. | Analytics can identify eligible sessions, note or project views, relevant-link clicks, and page-load performance. | [Metrics](./metrics.md) |

## 8. Detail: Hero and proof

### User story

As a recruiter, buyer, or collaborator, I want to understand Dhani's focus and proof quickly, so that I can choose a relevant next step.

### Problem

Separate experience blocks can make a personal portfolio feel like a long CV. A visitor may not connect each company to the capability it proves.

### Solution

Place one clear value statement, profile actions, and one compact company proof line in the hero. Keep company details short and move deeper evidence into notes or projects.

### Behavior

- The hero states the connection between QA fundamentals, automation, and AI.
- The profile actions provide the approved contact and career paths.
- The proof line keeps the four company signals readable in one glance.
- Missing or unapproved contact destinations stay hidden or inactive.

### Quality the user can feel

- The visitor understands Dhani's role within a few seconds.
- The hero feels personal and calm, not like a CV or sales banner.

## 8. Detail: Notes and detail page

### User story

As a QA practitioner, I want to open a full note with its supporting media, so that I can learn from real work.

### Problem

A short Home row cannot show the full reasoning, diagram, or context of a note.

### Solution

Use the Home row as an entry point to one readable detail page. Keep the approved note text and supporting image together.

### Behavior

- The Catatan row opens the matching detail page.
- The detail page shows the full approved text and diagram or image.
- The reader can return to Home without losing the main path.
- The page does not publish private source material.

### Quality the user can feel

- The note reads like a complete piece of work.
- The image supports the text instead of making the layout feel empty.

## 8. Detail: Projects and soft-selling paths

### User story

As a potential client, I want to see selected project signals, so that I can decide whether to discuss a report, tool, or consultation.

### Problem

The portfolio needs to show practical capability without adding a large services page or aggressive sales section.

### Solution

Present three concise project summaries with the same visual language as Catatan. Let each approved project or contact action become a quiet next step.

### Behavior

- Proyek shows AI workflow, QA skill toolkit, and mobile automation test summaries.
- Each thumbnail keeps the approved proportion and supports the row.
- A project link uses one relevant destination when the content exists.
- A missing project detail does not create a broken or misleading link.

### Quality the user can feel

- The page shows practical range without feeling crowded.
- The next step feels relevant to the item the visitor just viewed.

## 8. Detail: Measurement and trust

### User story

As Dhani, I want to measure relevant next-step clicks, so that I can learn whether the portfolio supports qualified conversations.

### Problem

No visitor evidence confirms which content or contact path helps people continue.

### Solution

Add privacy-light events for eligible sessions, note or project views, relevant-link clicks, and mobile page load.

### Behavior

- Events record content type and action without unnecessary personal data.
- Analytics failures never block reading, images, or navigation.
- Claims without approved evidence remain labelled or stay out of public content.

### Quality the user can feel

- The site remains fast and useful when measurement is unavailable.
- Public claims feel specific and safe to inspect.

## 9. Risky details

- **Contact destinations** → use only Dhani-approved WhatsApp, LinkedIn, CV, and email URLs; hide any missing destination.
- **Employer data exposure** → use short, sanitized capability labels and redraw private diagrams.
- **AI productivity claim** → keep “8x” only when Dhani can provide scope and method; otherwise label it as an owner claim or remove it.
- **Article rights and fidelity** → use owner-approved LinkedIn text and image; do not change its meaning without approval.
- **Project content depth** → accept short summaries for the first release; add full project pages later.
- **Unvalidated visitor problem** → accept the risk for the first release and run interviews after launch.

## 10. Assumptions

- Dhani owns or can republish the first note text and image.
- Dhani can approve sanitized descriptions of work at Verint, Tokopedia, Sorabel, and Populix.
- The supplied portrait can be used on the public portfolio.
- Static hosting is enough for the first release.
- One privacy-light measurement provider can measure the main number without a backend.
- The approved Figma design is the visual source of truth for the first implementation.

## 11. Open questions

- Which WhatsApp number, email address, CV file, and LinkedIn URL are the final public destinations?
- Which project summaries have approved evidence and detail pages?
- Can Dhani publish the “8x more productive” claim with a baseline, scope, and method?
- Which analytics provider and consent rule should receive the events?
- Should an approved project open a detail page, a tool, a report, or a contact path?
- Does Dhani approve the proposed **5 working days** time budget?

---

**Status**: APPROVED
**User approval**: Approved by Dhani on 2026-09-27 for the development workflow through `/plan-implement`.

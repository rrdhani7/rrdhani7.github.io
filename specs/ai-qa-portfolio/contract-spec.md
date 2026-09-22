# DeepQA Portfolio Website v1 - Contract Spec

**Lifecycle**: ACTIVE
**Owner**: Dhani
**Next consumer**: `/plan-verification`
**Review trigger**: a new server endpoint, analytics provider, form, or external data exchange

Technical Spec: [technical-spec.md](./technical-spec.md)

## External interfaces

This release adds no backend endpoint, event broker, database contract, authentication flow, or public API. The static host serves versioned files only. The optional `window.DEEPQA_ANALYTICS_ENDPOINT` hook is a local implementation seam, not a committed external contract; it remains disabled until an owner-approved provider and schema exist.

The frontend must not send personal data, credentials, query strings, or free-form article content to any endpoint. If a future provider is approved, it needs a new contract spec before implementation.

---

**Status**: APPROVED
**User approval**: Approved by Dhani on 2026-09-22 for the development workflow through `/plan-implement`.

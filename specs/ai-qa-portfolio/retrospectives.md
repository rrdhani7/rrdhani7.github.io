# DeepQA Portfolio Website v1 - Retrospectives

### Checkpoint CP1 (T001-T005)

**Went well**: The article path stayed static, local, and progressive. The smoke test caught missing content before implementation.
**Went wrong**: The first review found a no-JS navigation gap, a placeholder action, wrong image dimensions, and no image fallback.
**Improve**: Keep the no-JS path explicit in future static page tasks and verify asset dimensions from the file.

### Checkpoint CP2 (T006-T008)

**Went well**: Selected-work cards now show source labels, limits, and relevant next steps. The placeholder contact action was removed.
**Went wrong**: The first review found unsupported-looking proof claims and missing limits.
**Improve**: Treat every public metric as a claim that needs a visible source label and limit.

### Checkpoint CP3 (T009-T010)

**Went well**: Event hooks stay disabled by default, do not block navigation, and send no personal data.
**Went wrong**: The test does not exercise the configured endpoint branch.
**Improve**: Add provider-specific contract coverage only when an analytics endpoint is approved.

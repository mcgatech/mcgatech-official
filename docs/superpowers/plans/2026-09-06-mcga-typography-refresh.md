# MCGA Typography Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `subagent-driven-development` (recommended) or `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the MCGA website more readable with Lora headings and Source Sans 3 body typography.

**Architecture:** A single stylesheet import and its custom-font variables control the whole visual system. Existing semantic HTML and interaction behavior remain unchanged; static tests protect the specified typeface choices.

**Tech Stack:** CSS3, Google Fonts, Node.js built-in test runner.

---

### Task 1: Apply the corporate type system

**Files:**
- Modify: `styles.css`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Write a failing type-contract test**

Require `styles.css` to contain `Lora`, `Source Sans 3`, and no `DM Mono`.

- [ ] **Step 2: Verify red**

Run: `node --test tests/site.test.mjs`

Expected: failure because the old type pairing is still imported.

- [ ] **Step 3: Implement the typography**

Replace the Google Fonts import with Lora and Source Sans 3. Set `--display` to Lora with Georgia fallback, and `--sans` to Source Sans 3 plus Chinese system sans fallbacks. Replace use of `--mono` with `--sans`; retain restrained tracking only on micro-labels. Increase heading line-height from `.87` to at least `.98` and reduce extreme negative letter spacing.

- [ ] **Step 4: Verify green**

Run: `node --test tests/site.test.mjs && node --check script.js`

Expected: all checks pass.

## Self-Review

The plan changes only typography, preserves the dark visual identity, and tests the specified font migration.


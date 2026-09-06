# MCGA Brand Architecture Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `subagent-driven-development` (recommended) or `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe the website as MCGA's concise corporate home, with StayLink as its first product brand and space for future brands.

**Architecture:** Revise only existing content and presentation. `index.html` owns the shortened company narrative and brand portfolio section; `styles.css` provides relaxed typography and clear product-card hierarchy; the static test protects the new brand positioning.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in test runner.

---

## File Structure

- `index.html` — shortened corporate content and brand portfolio markup.
- `styles.css` — spacious type rhythm and brand-card presentation.
- `tests/site.test.mjs` — content-contract test for MCGA-led hierarchy.

### Task 1: Revise corporate content and brand portfolio

**Files:**
- Modify: `index.html`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing brand-hierarchy test**

Append assertions requiring `MCGA builds dependable software for modern digital life.`, `Brands & products`, `StayLink`, `An MCGA product brand`, and `More to come`, while asserting the hero no longer contains `Explore StayLink`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`

Expected: failure because the old product-led hero content remains.

- [ ] **Step 3: Implement compact company-first copy**

Replace hero copy with the exact headline `MCGA builds dependable software for modern digital life.` and a single short supporting sentence. Remove the hero StayLink link. Condense company, mission, capability, and commitment paragraphs to one short sentence each. Add a `brands-section` with a StayLink card carrying `An MCGA product brand` and a future card carrying `More to come`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/site.test.mjs`

Expected: all tests pass.

### Task 2: Relax typography and style the brand portfolio

**Files:**
- Modify: `styles.css`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing style-contract test**

Add assertions that `styles.css` includes `.brands-section`, `.brand-card`, and a mobile `@media (max-width: 719px)` rule.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`

Expected: failure because no brand-portfolio CSS exists.

- [ ] **Step 3: Implement relaxed presentation**

Reduce crowded feeling by increasing body line-height to `1.75`, reducing large narrative type to a maximum of `2.55rem`, and increasing standard section vertical padding. Style `.brands-section` as a two-column desktop grid and one-column mobile grid. Make the StayLink card a subtle product-brand card, and the future card low emphasis with a dashed border. Do not make either element visually compete with the MCGA hero.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/site.test.mjs`

Expected: all tests pass.

### Task 3: Final verification

**Files:**
- Verify: `index.html`
- Verify: `styles.css`
- Verify: `script.js`
- Verify: `tests/site.test.mjs`

- [ ] **Step 1: Run final checks**

Run: `node --test tests/site.test.mjs && node --check script.js`

Expected: zero test failures and valid JavaScript.

- [ ] **Step 2: Validate key brand hierarchy strings**

Run: `rg -n "MCGA builds dependable|Brands & products|An MCGA product brand|More to come" index.html`

Expected: all four strings are present.

## Self-Review

- **Spec coverage:** Task 1 implements the MCGA-led content hierarchy and future-brand positioning; Task 2 addresses spacing and responsive visual hierarchy; Task 3 verifies both.
- **Placeholder scan:** No deferred requirements are present.
- **Consistency:** `brands-section` and `brand-card` are used consistently between markup, CSS, and tests.


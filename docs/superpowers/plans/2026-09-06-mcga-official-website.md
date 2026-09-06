# MCGA Official Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `subagent-driven-development` (recommended) or `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive, single-page MCGA TECHNOLOGIES LLC website with a dark network-console identity and a StayLink product reference.

**Architecture:** A dependency-free static site uses semantic HTML for content, CSS for responsive visual design and animation, and isolated vanilla JavaScript for navigation behavior. A Node built-in test verifies critical page content and accessibility hooks.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js built-in test runner.

---

## File Structure

- `index.html` — semantic site structure, page content, navigation, and SVG network artwork.
- `styles.css` — theme variables, responsive layout, components, and animation.
- `script.js` — mobile navigation and header scroll state.
- `tests/site.test.mjs` — static content and interaction-hook verification.

### Task 1: Establish semantic page structure

**Files:**
- Create: `index.html`
- Create: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing content-contract test**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('contains the company narrative and page landmarks', () => {
  for (const text of ['MCGA TECHNOLOGIES LLC', 'Reliable connection is foundational.', 'Who we are', 'Our mission', 'What we build', 'Our commitment']) {
    assert.ok(html.includes(text), text + ' must be present');
  }
  assert.match(html, /<main/);
  assert.match(html, /<footer/);
  assert.match(html, /aria-controls="site-nav"/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/site.test.mjs`

Expected: failure because `index.html` does not exist.

- [ ] **Step 3: Create the page skeleton**

Create `index.html` with a skip link, header, navigation to `#about`, `#capabilities`, and `#commitment`, a hero, narrative sections using the headings above, capability cards, commitment panel, and footer. Add a button with `aria-controls="site-nav"`, an `id="site-nav"` navigation element, and links to `https://staylink.org/` and `mailto:support@staylink.org`.

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tests/site.test.mjs`

Expected: one passing test.

- [ ] **Step 5: Commit**

```bash
git add index.html tests/site.test.mjs
git commit -m "feat: add MCGA website structure"
```

Expected: commit the page structure; record that the commit is unavailable if no Git repository exists.

### Task 2: Implement the network-console visual system

**Files:**
- Modify: `index.html`
- Create: `styles.css`

- [ ] **Step 1: Link the stylesheet and add visual hooks**

Add `<link rel="stylesheet" href="styles.css" />` in the HTML head. Apply classes `site-header`, `hero`, `eyebrow`, `network-stage`, `capability-grid`, and `commitment-panel` to their corresponding components.

- [ ] **Step 2: Create the themed CSS**

Define `--ink: #07110f`, `--paper: #e7f4ef`, `--signal: #63f5c3`, and `--line: rgba(149, 210, 191, .22)`. Build a 12-column desktop grid, collapse it to one column below `720px`, style visible keyboard focus, add a subtle grid background and staggered entrance animation, and disable animation with:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 3: Add the hero network artwork**

Create an inline SVG inside `.network-stage` with node circles and `.network-line` paths. Animate the paths using `stroke-dasharray` and the `draw` keyframe.

- [ ] **Step 4: Check visual output locally**

Run: `python3 -m http.server 4173`

Open: `http://localhost:4173`

Expected: readable green-white text, a visible network artwork, and no narrow-screen horizontal scrolling.

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css
git commit -m "feat: style MCGA network console landing page"
```

Expected: commit the visual system; record that the commit is unavailable if no Git repository exists.

### Task 3: Add responsive interaction behavior

**Files:**
- Modify: `index.html`
- Create: `script.js`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Extend the test with behavior hooks**

```js
test('includes the navigation interaction script', () => {
  assert.match(html, /<script src="script\.js" defer><\/script>/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/site.test.mjs`

Expected: new test fails because `script.js` is not linked.

- [ ] **Step 3: Implement interaction behavior**

Add `<script src="script.js" defer></script>` to the page. In `script.js`, toggle the `is-open` class and button `aria-expanded` value on click; close the menu after a navigation-link click; add `is-scrolled` to the header when `window.scrollY > 12`.

- [ ] **Step 4: Run automated and manual checks**

Run: `node --test tests/site.test.mjs`

Expected: two passing tests. Manually confirm the mobile menu opens, closes, and retains keyboard access.

- [ ] **Step 5: Commit**

```bash
git add index.html script.js tests/site.test.mjs
git commit -m "feat: add responsive navigation interactions"
```

Expected: commit interactions; record that the commit is unavailable if no Git repository exists.

### Task 4: Final verification

**Files:**
- Verify: `index.html`
- Verify: `styles.css`
- Verify: `script.js`
- Verify: `tests/site.test.mjs`

- [ ] **Step 1: Run full automated checks**

Run: `node --test tests/site.test.mjs`

Expected: all tests pass.

- [ ] **Step 2: Check content and accessibility hooks**

Run: `rg -n "Reliable connection|StayLink|aria-controls|prefers-reduced-motion" index.html styles.css`

Expected: matches for hero statement, product link, accessible menu trigger, and motion preference rule.

- [ ] **Step 3: Review local preview**

Run: `python3 -m http.server 4173`

Open: `http://localhost:4173`

Expected: all sections load, anchor navigation works, and desktop/mobile layouts are balanced.

## Self-Review

- **Spec coverage:** Tasks 1–3 cover every approved section, the dark network-console direction, responsive navigation, and motion preference support. Task 4 verifies them.
- **Placeholder scan:** There are no deferred or unnamed requirements.
- **Consistency:** `site-nav`, `is-open`, `is-scrolled`, and `script.js` use the same names throughout.


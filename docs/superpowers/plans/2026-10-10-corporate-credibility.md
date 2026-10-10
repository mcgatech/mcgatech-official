# Corporate Credibility Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add clear, verifiable MCGA company, contact, policy, and Utah-registration-path information to the public website.

**Architecture:** Retain the existing static one-page site, adding factual corporate content to `index.html`. Create static legal pages that reuse the current stylesheet. Extend the Node built-in test suite to assert the visible information and public links.

**Tech Stack:** Semantic HTML5, CSS, vanilla JavaScript, Node.js built-in test runner.

---

### Task 1: Specify the public-information contract

**Files:**
- Modify: `tests/site.test.mjs`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Write the failing test**

Add this test after the existing structure test:

```js
test('MCGA website publishes verifiable company and contact information', () => {
  const html = readFileSync(resolve(projectRoot, 'index.html'), 'utf8');
  for (const phrase of [
    'MCGA TECHNOLOGIES LLC is a Utah, United States software company founded in 2026.',
    'We build reliable software for secure, well-managed digital environments.',
    'admin@mcgatech.com',
    'Product development is underway.',
  ]) assert.ok(html.includes(phrase), `missing: ${phrase}`);
  assert.match(html, /href="mailto:admin@mcgatech\\.com"/i);
  assert.match(html, /href="privacy\\.html"/i);
  assert.match(html, /href="terms\\.html"/i);
  assert.match(html, /https:\\/\\/secure\\.utah\\.gov\\/bes\\/index\\.html/i);
  assert.match(html, /href="#contact"/i);
});

test('MCGA website has accessible standalone legal pages', () => {
  for (const fileName of ['privacy.html', 'terms.html']) {
    const html = readFileSync(resolve(projectRoot, fileName), 'utf8');
    assert.match(html, /<main\\b/i);
    assert.match(html, /MCGA TECHNOLOGIES LLC/i);
    assert.match(html, /href="mailto:admin@mcgatech\\.com"/i);
    assert.match(html, /href="index\\.html"/i);
  }
});
```

- [ ] **Step 2: Run the test and confirm red**

Run: `node --test tests/site.test.mjs`

Expected: FAIL because the company phrases, new links, and legal pages do not yet exist.

- [ ] **Step 3: Commit the failing test**

Run: `git add tests/site.test.mjs && git commit -m "test: specify corporate credibility content"`

### Task 2: Add public company and contact details

**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Add the navigation destination**

Add `<a href="#contact">Contact</a>` to the primary navigation in `index.html`.

- [ ] **Step 2: Add a semantic corporate section after `#about`**

```html
<section id="contact" class="company-section" aria-labelledby="company-title">
  <h2 id="company-title">Company & contact</h2>
  <div class="company-details">
    <p class="company-statement">MCGA TECHNOLOGIES LLC is a Utah, United States software company founded in 2026.</p>
    <p>We build reliable software for secure, well-managed digital environments.</p>
    <dl>
      <div><dt>Company</dt><dd>MCGA TECHNOLOGIES LLC</dd></div>
      <div><dt>Location</dt><dd>Utah, United States</dd></div>
      <div><dt>Contact</dt><dd><a href="mailto:admin@mcgatech.com">admin@mcgatech.com</a></dd></div>
      <div><dt>Public record</dt><dd><a href="https://secure.utah.gov/bes/index.html" target="_blank" rel="noopener noreferrer">Search the Utah business registry <span class="sr-only">(opens in a new tab)</span></a></dd></div>
    </dl>
  </div>
</section>
```

- [ ] **Step 3: Make development status specific but modest**

Change the products-card paragraph to `<p>Product development is underway. New MCGA products are on the way.</p>`.

- [ ] **Step 4: Implement responsive styling**

Add `.company-section` to the existing section-grid selector. Add `.company-details` as columns 5–10; give its `dl` a top and row borders, `dt` the existing uppercase muted label style, and email/registry links the `--signal` color. In the existing mobile media query, make `.company-details` span all columns and change its definition-list rows to one column.

- [ ] **Step 5: Run the focused test**

Run: `node --test tests/site.test.mjs`

Expected: Company/contact assertions pass; legal-page assertions still fail.

- [ ] **Step 6: Commit the content**

Run: `git add index.html styles.css && git commit -m "feat: publish MCGA company and contact details"`

### Task 3: Add policy pages and footer navigation

**Files:**
- Modify: `index.html`
- Create: `privacy.html`
- Create: `terms.html`
- Modify: `styles.css`
- Test: `tests/site.test.mjs`

- [ ] **Step 1: Link the legal documents from the site footer**

Add an `aria-label="Legal"` nav to the footer with `<a href="privacy.html">Privacy Policy</a>` and `<a href="terms.html">Terms of Use</a>`.

- [ ] **Step 2: Create `privacy.html`**

Create a standard HTML document that loads `styles.css`, links home with `href="index.html"`, and uses a `<main>` legal section. Its content is: title `Privacy Policy | MCGA TECHNOLOGIES LLC`; heading `Privacy Policy`; sections `Information we receive`, `How we use information`, and `Contact`; paragraphs stating that email inquiry content is received, contact information is used to respond to inquiries and operate/improve services, and privacy questions go to `admin@mcgatech.com` through its mailto link. Repeat the legal footer.

- [ ] **Step 3: Create `terms.html`**

Create the equivalent document with title `Terms of Use | MCGA TECHNOLOGIES LLC`; heading `Terms of Use`; sections `Website use`, `Intellectual property`, `Governing law`, and `Contact`; paragraphs stating the site provides general company information, its content belongs to MCGA unless noted, Utah law governs, and questions go to `admin@mcgatech.com`. Repeat the legal footer.

- [ ] **Step 4: Style legal content**

Add a reusable `.legal-page`/`.legal-copy` style using the site width, bordered readable content column, existing display face for `h1`, and uppercase sans labels for `h2`. Preserve all existing visual-system tokens and responsive padding.

- [ ] **Step 5: Run verification commands**

Run: `node --test && git diff --check && node --check script.js`

Expected: every command exits 0; the test suite reports no failures.

- [ ] **Step 6: Commit the feature**

Run: `git add index.html privacy.html terms.html styles.css tests/site.test.mjs && git commit -m "feat: add MCGA privacy and terms pages"`

### Task 4: Verify public delivery

**Files:**
- Verify: `index.html`
- Verify: `privacy.html`
- Verify: `terms.html`

- [ ] **Step 1: Serve the site locally**

Run: `python3 -m http.server 8080`

Expected: a local static server starts in the project root.

- [ ] **Step 2: Verify all public pages respond**

Run: `curl -I http://127.0.0.1:8080/ && curl -I http://127.0.0.1:8080/privacy.html && curl -I http://127.0.0.1:8080/terms.html`

Expected: all endpoints return HTTP 200.

- [ ] **Step 3: Final cleanliness check**

Run: `git status --short`

Expected: empty output after the feature commit.

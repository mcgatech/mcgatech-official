import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

test('MCGA website includes required semantic structure and content', () => {
  const html = readFileSync(resolve(projectRoot, 'index.html'), 'utf8');

  for (const phrase of [
    'MCGA TECHNOLOGIES LLC',
    'MCGA builds dependable software for modern digital life.',
    'Brands & products',
    'StayLink',
    'An MCGA product brand',
    'More to come',
    'Who we are',
    'Our mission',
    'What we build',
    'Our commitment',
    'Secure connections',
    'Cross-platform experience',
    'Simple management',
    'Continuous improvement',
    'United States',
  ]) {
    assert.ok(html.includes(phrase), `missing required phrase: ${phrase}`);
  }

  assert.match(html, /<main\b/i);
  assert.match(html, /<footer\b/i);
  assert.match(html, /aria-controls="site-nav"/i);
  assert.match(html, /<nav\b[^>]*id="site-nav"/i);
  assert.match(html, /href="#about"/i);
  assert.match(html, /href="#capabilities"/i);
  assert.match(html, /href="#commitment"/i);
  assert.match(html, /class="brand-cards"/i);
  assert.match(html, /class="brand-card"/i);
  assert.match(html, /class="brand-card brand-card--future"/i);
  assert.doesNotMatch(html, /Explore StayLink/i);
  assert.match(html, /href="https:\/\/staylink\.org\//i);
  assert.match(html, /href="mailto:support@staylink\.org"/i);
  assert.match(html, /<footer\b[\s\S]*href="https:\/\/staylink\.org\//i);
});

test('MCGA website provides the network-console visual system', () => {
  const html = readFileSync(resolve(projectRoot, 'index.html'), 'utf8');

  assert.match(html, /<link\b[^>]*href="styles\.css"/i);
  assert.match(html, /class="[^"]*network-stage[^"]*"/i);
  assert.match(html, /network-line/i);

  const css = readFileSync(resolve(projectRoot, 'styles.css'), 'utf8');
  assert.match(css, /prefers-reduced-motion/i);
  assert.match(css, /@keyframes\s+draw/i);
});

test('MCGA website styles capability cards as a dedicated layout', () => {
  const css = readFileSync(resolve(projectRoot, 'styles.css'), 'utf8');

  assert.match(css, /\.capability-cards\b/);
  assert.match(css, /\.capability-card\b/);
});

test('MCGA website provides a responsive brand portfolio layout', () => {
  const css = readFileSync(resolve(projectRoot, 'styles.css'), 'utf8');

  assert.match(css, /\.brands-section\b/);
  assert.match(css, /\.brand-card\b/);
  assert.match(css, /@media\s*\(max-width:\s*719px\)/);
});

test('MCGA website uses the refreshed editorial typography', () => {
  const css = readFileSync(resolve(projectRoot, 'styles.css'), 'utf8');

  assert.match(css, /Lora/);
  assert.match(css, /Source Sans 3/);
  assert.doesNotMatch(css, /DM Mono/);
});

test('MCGA website loads deferred interaction behavior', () => {
  const html = readFileSync(resolve(projectRoot, 'index.html'), 'utf8');

  assert.match(html, /<script src="script\.js" defer><\/script>/i);
});

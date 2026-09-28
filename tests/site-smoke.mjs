import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'dist');
const pages = [
  'index.html',
  'work/populix-research-products.html',
  'work/tokopedia-marketplace.html',
  'explorations/claude-qa-workflow.html',
  'notes/claude-qa-workflow.html',
];

for (const page of pages) {
  const file = resolve(output, page);
  assert.ok(existsSync(file), `Missing page: ${page}`);
  const html = readFileSync(file, 'utf8');
  const pageUrl = `http://localhost/${page}`;

  for (const [, attribute, value] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const url = new URL(value.replaceAll('&amp;', '&'), pageUrl);
    if (url.origin !== 'http://localhost') continue;
    const localFile = resolve(output, `.${url.pathname}`);
    assert.ok(existsSync(localFile), `${page}: broken ${attribute} ${value}`);
  }
}

const home = readFileSync(resolve(output, 'index.html'), 'utf8');
const note = readFileSync(resolve(output, 'explorations/claude-qa-workflow.html'), 'utf8');
const redirect = readFileSync(resolve(output, 'notes/claude-qa-workflow.html'), 'utf8');

assert.match(home, /Saya menggabungkan fondasi QA, automation, dan AI/);
assert.match(home, /work\/populix-research-products\.html/);
assert.match(home, /work\/tokopedia-marketplace\.html/);
assert.match(home, /explorations\/claude-qa-workflow\.html/);
assert.doesNotMatch(home, /work\/sorabel-commerce-journeys\.html/);
assert.doesNotMatch(home, /CV dan email menyusul|8×/);
assert.match(note, /Menyusun test case dengan ground truth/);
assert.match(note, /Ingin menerapkan workflow serupa/);
assert.match(redirect, /explorations\/claude-qa-workflow\.html/);

console.log('Site build and navigation checks passed.');

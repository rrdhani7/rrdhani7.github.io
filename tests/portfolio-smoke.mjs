import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (relativePath) => readFileSync(resolve(root, relativePath), "utf8");
const mustExist = (relativePath) => {
  assert.equal(existsSync(resolve(root, relativePath)), true, "RELATIVE_PATH must exist");
};

for (const file of [
  "dist/index.html",
  "dist/styles.css",
  "dist/script.js",
  "dist/articles/claude-qa-workflow.html",
  "dist/assets/claude-qa-workflow.jpg",
  "dist/assets/dhani-portrait.jpg",
  "dist/assets/ai-workflow.svg",
  "dist/assets/qa-skill-toolkit.svg",
  "dist/assets/mobile-automation.svg",
]) {
  mustExist(file);
}

const home = read("dist/index.html");
const article = read("dist/articles/claude-qa-workflow.html");
const script = read("dist/script.js");
const styles = read("dist/styles.css");

assert.match(home, /<main\b[^>]*id="top"/);
assert.match(home, /id="hero-title"/);
assert.match(home, /QA fundamental/);
assert.match(home, /automation/);
assert.match(home, /8x/);
assert.match(home, /Verint \/ automation/);
assert.match(home, /Tokopedia \/ skala &amp; performa/);
assert.match(home, /Sorabel \/ E2E/);
assert.match(home, /Populix \/ AI/);
assert.match(home, /id="notes"/);
assert.match(home, /Catatan/);
assert.match(home, /href="\.\/articles\/claude-qa-workflow\.html"/);
assert.match(home, /id="projects"/);
assert.match(home, /AI workflow/);
assert.match(home, /QA skill toolkit/);
assert.match(home, /Mobile automation test/);
assert.match(home, /ai-workflow\.svg/);
assert.match(home, /qa-skill-toolkit\.svg/);
assert.match(home, /mobile-automation\.svg/);
assert.match(home, /href="https:\/\/www\.linkedin\.com\/in\/rrdhani\//);
assert.doesNotMatch(home, /id="experience"|id="about"|>Pengalaman<|>Tentang saya</);
assert.doesNotMatch(home, /hello@example\.com|href="#"/);
assert.doesNotMatch(home, /password|ticket-[0-9]+|internal\./i);
assert.match(home, /aria-disabled="true"/);
assert.match(styles, /:focus-visible/);
assert.doesNotMatch(styles, /text-decoration:\s*underline/);

assert.match(article, /<main\b/);
assert.match(article, /<h1\b/);
assert.match(article, /<img\b[^>]*alt="[^"]+"/);
assert.match(article, /loading="lazy"/);
assert.match(article, /width="800"/);
assert.match(article, /height="592"/);
assert.match(article, /class="article-image-fallback"/);
assert.match(article, /data-track-view="article-view"/);
assert.match(article, /href="\.\.\/index\.html#top"/);
assert.match(article, /href="\.\.\/index\.html#notes"/);
assert.match(article, /Beberapa bulan terakhir saya mulai pakai Claude/);
assert.doesNotMatch(article, /See how the workflow fits the wider QA system/);
assert.match(script, /deepqa:track/);
assert.match(script, /DEEPQA_ANALYTICS_ENDPOINT/);

console.log("Portfolio smoke checks passed.");

import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (relativePath) => readFileSync(resolve(root, relativePath), "utf8");
const mustExist = (relativePath) => {
  assert.equal(existsSync(resolve(root, relativePath)), true, `${relativePath} must exist`);
};

for (const file of [
  "dist/index.html",
  "dist/styles.css",
  "dist/script.js",
  "dist/articles/claude-qa-workflow.html",
  "dist/assets/claude-qa-workflow.jpg",
]) {
  mustExist(file);
}

const home = read("dist/index.html");
const article = read("dist/articles/claude-qa-workflow.html");
const script = read("dist/script.js");
const styles = read("dist/styles.css");

assert.match(home, /<main\b[^>]*id="top"/);
assert.match(home, /href="\.\/articles\/claude-qa-workflow\.html"/);
assert.match(home, /id="hero-title"/);
assert.match(home, /id="insights"/);
assert.match(home, /id="lab"/);
assert.match(home, /id="about"/);
assert.match(home, /id="contact"/);
assert.match(home, /href="https:\/\/www\.linkedin\.com\/in\/rrdhani\/"/);
assert.doesNotMatch(home, /id="work"|href="#work"|Selected work/);
assert.doesNotMatch(article, /index\.html#work|Selected work/);
assert.ok(home.includes("<h3>Claude untuk workflow QA</h3>"));
assert.ok(home.includes("Beberapa bulan terakhir saya mulai pakai Claude"));
assert.doesNotMatch(home, /When AI writes the test/);
assert.doesNotMatch(home, /Risk Map|Prompt Regression|Release Signal/);
assert.doesNotMatch(home, /Grounded QA workflow|Parallel test runs|Tools underneath/);
assert.doesNotMatch(home, /hello@example\.com/);
assert.doesNotMatch(home, /href="#"/);
assert.doesNotMatch(home, /Empty state|Konten akan ditambahkan di sini|Belum ada profil/);
assert.match(home, /Tulisan lain menyusul/);
assert.match(home, /Belum ada tool yang bisa dicoba/);
assert.match(styles, /:focus-visible/);
assert.match(article, /<main\b/);
assert.match(article, /<h1\b/);
assert.match(article, /<img\b[^>]*alt="[^"]+"/);
assert.match(article, /loading="lazy"/);
assert.match(article, /width="800"/);
assert.match(article, /height="592"/);
assert.match(article, /class="article-image-fallback"/);
assert.match(article, /data-track-view="article-view"/);
assert.match(article, /Beberapa bulan terakhir saya mulai pakai Claude/);
assert.doesNotMatch(article, /See how the workflow fits the wider QA system/);
assert.match(script, /deepqa:track/);
assert.match(script, /DEEPQA_ANALYTICS_ENDPOINT/);

console.log("Portfolio smoke checks passed.");

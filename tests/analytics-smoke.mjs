import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";

const root = resolve(import.meta.dirname, "..");
const source = readFileSync(resolve(root, "dist/script.js"), "utf8");
const events = [];
const handlers = [];
const trackedLink = {
  dataset: { track: "article-next-step", trackContent: "selected-work" },
  addEventListener(type, handler) {
    if (type === "click") handlers.push(handler);
  },
};

class CustomEventStub {
  constructor(type, init) {
    this.type = type;
    this.detail = init.detail;
  }
}

const context = {
  window: {
    DEEPQA_ANALYTICS_ENDPOINT: "",
    location: { pathname: "/articles/claude-qa-workflow.html" },
    dispatchEvent(event) { events.push(event); },
    addEventListener() {},
  },
  document: {
    documentElement: { classList: { add() {} } },
    querySelector() { return null; },
    querySelectorAll(selector) {
      return selector === "[data-track]" ? [trackedLink] : [];
    },
    getElementById() { return null; },
  },
  navigator: { sendBeacon() { throw new Error("sendBeacon must not run without an endpoint"); } },
  CustomEvent: CustomEventStub,
  Blob,
  console,
};

vm.runInNewContext(source, context);
assert.equal(handlers.length, 1);
handlers[0]();
assert.equal(events.length, 1);
assert.equal(JSON.stringify(events[0].detail), JSON.stringify({
  event: "article-next-step",
  contentType: "selected-work",
  path: "/articles/claude-qa-workflow.html",
}));
assert.doesNotMatch(JSON.stringify(events[0].detail), /@|email|name/i);

console.log("Analytics smoke checks passed.");

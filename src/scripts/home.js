const sectionNames = ["work", "explorations", "about"];
const tabs = [...document.querySelectorAll("[data-section]")];
const panels = [...document.querySelectorAll("[data-panel]")];

function showSection(name, updateUrl = true) {
  const selected = sectionNames.includes(name) ? name : "work";
  for (const tab of tabs) {
    const active = tab.dataset.section === selected;
    tab.classList.toggle("is-active", active);
    if (active) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  }
  for (const panel of panels) panel.hidden = panel.dataset.panel !== selected;
  if (updateUrl) {
    const url = new URL(location.href);
    if (selected === "work") url.searchParams.delete("section");
    else url.searchParams.set("section", selected);
    history.pushState({ section: selected }, "", url);
  }
  window.scrollTo({ top: 0, behavior: "instant" });
}

tabs.forEach((tab) => tab.addEventListener("click", (event) => {
  event.preventDefault();
  showSection(tab.dataset.section);
}));
window.addEventListener("popstate", () => showSection(new URLSearchParams(location.search).get("section"), false));
showSection(new URLSearchParams(location.search).get("section"), false);

const preview = document.querySelector(".hover-preview");
const list = document.querySelector(".work-list");

function showPreview(item) {
  if (!preview) return;
  const rect = item.getBoundingClientRect();
  const y = Math.max(96, Math.min(window.innerHeight - 224, rect.top - 190));
  preview.style.setProperty("--preview-y", `${y}px`);
  preview.style.setProperty("--preview-bg", item.dataset.previewBg);
  preview.style.setProperty("--preview-fg", item.dataset.previewFg);
  preview.querySelector(".preview-company").textContent = item.dataset.previewCompany;
  preview.querySelector(".preview-focus").textContent = item.dataset.previewFocus;
  preview.hidden = false;
  requestAnimationFrame(() => preview.classList.add("is-visible"));
}
function hidePreview() {
  if (!preview) return;
  preview.classList.remove("is-visible");
  window.setTimeout(() => { if (!preview.classList.contains("is-visible")) preview.hidden = true; }, 250);
}
list?.querySelectorAll("[data-preview-company]").forEach((item) => {
  item.addEventListener("mouseenter", () => showPreview(item));
  item.addEventListener("focus", () => showPreview(item));
  item.addEventListener("click", () => showPreview(item));
});
list?.addEventListener("mouseleave", hidePreview);
list?.addEventListener("focusout", (event) => { if (!list.contains(event.relatedTarget)) hidePreview(); });
window.addEventListener("scroll", hidePreview, { passive: true });

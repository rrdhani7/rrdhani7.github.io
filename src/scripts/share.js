document.querySelectorAll("[data-share-linkedin]").forEach((button) => {
  button.addEventListener("click", () => {
    const url = new URL("https://www.linkedin.com/sharing/share-offsite/");
    const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    const source = document.querySelector('meta[name="source"]')?.content;
    url.searchParams.set("url", isLocal && source ? source : window.location.href);
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

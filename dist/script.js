document.documentElement.classList.add('js');

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    if (toggle) toggle.textContent = 'Menu';
  });
});

(() => {
  const endpoint = typeof window.DEEPQA_ANALYTICS_ENDPOINT === 'string'
    ? window.DEEPQA_ANALYTICS_ENDPOINT.trim()
    : '';

  const track = (eventName, contentType) => {
    const detail = {
      event: eventName,
      contentType: contentType || 'unknown',
      path: window.location.pathname,
    };

    window.dispatchEvent(new CustomEvent('deepqa:track', { detail }));

    if (!endpoint || !navigator.sendBeacon) return;

    try {
      const body = JSON.stringify(detail);
      navigator.sendBeacon(endpoint, new Blob([body], { type: 'application/json' }));
    } catch {
      // Analytics must never block reading or navigation.
    }
  };

  document.querySelectorAll('[data-track]').forEach((element) => {
    element.addEventListener('click', () => {
      track(element.dataset.track, element.dataset.trackContent);
    });
  });

  const view = document.querySelector('[data-track-view]');
  if (view) track(view.dataset.trackView, view.dataset.trackContent);

  document.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      image.hidden = true;
      const fallback = document.getElementById(image.dataset.fallback);
      if (fallback) fallback.hidden = false;
    });
  });
})();

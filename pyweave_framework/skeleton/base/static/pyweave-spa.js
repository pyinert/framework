const app = document.getElementById('pyweave-app');
const sameOrigin = (url) => url.origin === window.location.origin;
const shouldHandle = (link) => link && link.target !== '_blank' && !link.hasAttribute('download');

async function visit(url, { replace = false } = {}) {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'X-PyWeave': 'true',
      'X-Requested-With': 'XMLHttpRequest'
    },
    credentials: 'same-origin'
  });

  if (!response.ok || !response.headers.get('X-PyWeave')) {
    window.location.href = url;
    return;
  }

  const payload = await response.json();
  app.innerHTML = payload.html;
  app.dataset.page = JSON.stringify(payload.page || {});
  document.title = payload.title || document.title;

  if (replace) history.replaceState(payload.page || {}, '', url);
  else history.pushState(payload.page || {}, '', url);
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href]');
  if (!shouldHandle(link)) return;
  const url = new URL(link.href);
  if (!sameOrigin(url)) return;
  if (url.pathname.startsWith('/static/')) return;

  event.preventDefault();
  visit(url.href).catch(() => window.location.href = url.href);
});

window.addEventListener('popstate', () => {
  visit(window.location.href, { replace: true }).catch(() => window.location.reload());
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/static/sw.js');
      const warmOfflineCache = () => {
        const worker = registration.active || registration.waiting || registration.installing;
        if (worker) worker.postMessage({ type: 'PYWEAVE_CACHE_OFFLINE_ROUTES' });
      };
      if (navigator.serviceWorker.controller) warmOfflineCache();
      navigator.serviceWorker.addEventListener('controllerchange', warmOfflineCache);
    } catch (error) {
      console.warn('PyWeave PWA registration failed', error);
    }
  });
}

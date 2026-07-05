export function registerPyWeavePWA() {
  if (!('serviceWorker' in navigator)) return;

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

export const registerPwa = registerPyWeavePWA;

registerPyWeavePWA();

// ============================================================
// Camaraza Pizzas — Service Worker
// Recibe notificaciones push del sistema, aunque la app esté cerrada
// o el celular bloqueado, y reacciona si el usuario la toca.
// ============================================================

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Manejador de fetch mínimo: red primero, sin caché agresivo.
// Necesario para que Chrome considere la app instalable como PWA de verdad.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: 'Camaraza Pizzas', body: event.data ? event.data.text() : 'Tienes una novedad' };
  }

  const title = data.title || '🍕 Camaraza Pizzas';
  const options = {
    body: data.body || 'Tienes un nuevo pedido',
    icon: data.icon || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="48" fill="%23C5391A"/%3E%3C/svg%3E',
    badge: data.badge || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="48" fill="%23C5391A"/%3E%3C/svg%3E',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/' },
    tag: data.tag || 'camaraza-pedido',
    renotify: true,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
    })
  );
});

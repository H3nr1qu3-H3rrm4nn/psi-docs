self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('psi-docs-cache-v1').then((cache) =>
      cache.addAll(['/', '/index.html', '/manifest.webmanifest', '/icons/icon.svg'])
    )
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== 'psi-docs-cache-v1')
          .map((key) => caches.delete(key))
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached
      return fetch(event.request)
        .then((response) => {
          const responseClone = response.clone()
          caches.open('psi-docs-cache-v1').then((cache) => {
            cache.put(event.request, responseClone)
          })
          return response
        })
        .catch(() => caches.match('/'))
    })
  )
})

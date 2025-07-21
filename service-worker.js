self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                './index.html',
                './inventory.html',
                './styles.css',
                './app.js',
                './manifest.json',
                './bootstrap.bundle.min.js',
                './bootstrap.min.css',
                './sql-wasm.js',
                './sql-wasm.wasm'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
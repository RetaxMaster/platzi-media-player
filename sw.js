const VERSION = "v1";

// self es como this para los services workers
self.addEventListener("install", event => {

    event.waitUntil(precache());

});

// Cada vez que se haga un request
self.addEventListener("fetch", event => {

    const request = event.request;

    // solo con get
    if (request.method !== "GET") {
        return;
    }

    // buscar en caché
    event.respondWith(cachedResponse(request));

    // actualizar el cache (Para que puedan actualizarse los archivos en caso de haber actualizaciones)
    event.waitUntil(updateCache(request));

});

async function precache() {
    const cache = await caches.open(VERSION);

    // Añadimos los recursos
    return cache.addAll([
      /* '/',
      '/index.html',
      '/assets/index.js',
      '/assets/MediaPlayer.js',
      '/assets/plugins/AutoPlay.js',
      '/assets/plugins/AutoPause.ts',
      '/assets/index.css',
      '/assets/BigBuckBunny.mp4', */
    ]);
}

async function cachedResponse(request) {

    const cache = await caches.open(VERSION);
    const response = await cache.match(request); // <- Puede dar undefined si es que no existe en caché

    return response || fetch(request);
    
}

async function updateCache(request) {

    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
    
}
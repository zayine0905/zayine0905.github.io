const CACHE_NAME = 'card-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // 只保留实际存在的文件路径
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))  // 这里有两个闭合括号
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
});

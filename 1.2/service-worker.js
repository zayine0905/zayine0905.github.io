// 错误1修复：缺少右括号
const CACHE_NAME = 'card-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png'
];

// 安装阶段：缓存核心文件
self.addEventListener('install', event => {
  event.waitUntil(  // 错误2修复：这里需要闭合两个括号
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  ); // ← 补全缺少的括号
});

// 拦截请求：优先使用缓存
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  ); // ← 补全缺少的括号
});
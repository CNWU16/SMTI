// 清除 Monetag 注入的恶意 Service Worker
// 这个文件必须保留（同路径覆盖），否则旧 SW 不会被替换

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // 清除所有缓存
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key))))
  );
});

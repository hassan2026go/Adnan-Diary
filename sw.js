const C='kalimat-v4',G='https://www.gstatic.com/firebasejs/10.14.1/',F=['./','index.html','privacy.html','manifest.webmanifest','icon-192.png','icon-512.png',G+'firebase-app.js',G+'firebase-auth.js',G+'firebase-firestore.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request,u=r.url,own=u.startsWith(self.location.origin);if(r.method!=='GET'||(!own&&!u.startsWith(G)))return;
 const put=res=>{if(res&&res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res};
 e.respondWith(own?fetch(r).then(put).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))):caches.match(r).then(m=>m||fetch(r).then(put)))});

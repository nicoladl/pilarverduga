importScripts('/pilarverduga/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pilarverduga/_nuxt/32a73ec7e7d09a88a825.js",
    "revision": "0704a126b23a6a2cfd76372403876984"
  },
  {
    "url": "/pilarverduga/_nuxt/7e8ce8c105734b32f4e6.js",
    "revision": "30e300653c57742a1f83a757124da37b"
  },
  {
    "url": "/pilarverduga/_nuxt/9971b710cecccdad3961.js",
    "revision": "5e40e019e0fa17a4bbd7a481520b126f"
  },
  {
    "url": "/pilarverduga/_nuxt/b6567edac0aad01b1881.js",
    "revision": "c50332358ecd815a15d73b4c5c565451"
  },
  {
    "url": "/pilarverduga/_nuxt/cab3aead1e95831491d2.js",
    "revision": "aacd2aea878883c0e43236e46b3e62ef"
  }
], {
  "cacheId": "pilarverduga",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/pilarverduga/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/pilarverduga/.*'), workbox.strategies.networkFirst({}), 'GET')

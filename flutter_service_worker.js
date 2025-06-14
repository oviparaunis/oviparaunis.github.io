'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "77fc29d437d8abc46f1c4569066e94ec",
"assets/AssetManifest.bin.json": "1467cb2201c4061f912ec5de0f220d50",
"assets/AssetManifest.json": "15310aec95d4dc4c0ad6b8f0ebcce9cf",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"assets/lib/item_src/1001.webp": "3148324bd83e3334aef2a34f48f00282",
"assets/lib/item_src/1002.webp": "1f55b475a05d55b84979bdb7e66783f7",
"assets/lib/item_src/1003.webp": "28f93256b3eecc9b4dad847d2f6de529",
"assets/lib/item_src/1004.webp": "d23eeb55ce082c4a860720ef707866dc",
"assets/lib/item_src/1005.webp": "6c2385b681ef9281ff753b3ca1cf5d02",
"assets/lib/item_src/1006.webp": "05cd0d4686a799c28b48605c27b46c90",
"assets/lib/item_src/1007.webp": "06e9820ecb661d702b76cebd4fe33188",
"assets/lib/item_src/1008.webp": "21016a4ea823bd62258035f78e6b77d3",
"assets/lib/item_src/1009.webp": "a282cc21525d548348dbcb628f22add2",
"assets/lib/item_src/2001.webp": "e00ef6e8e1c3f7dccd267894aad87220",
"assets/lib/item_src/2003.webp": "cfd3db4b012eabe6d2a3154191388fb7",
"assets/lib/item_src/2004.webp": "478bd96e9eef5a8f3d73aaa72b568da7",
"assets/lib/item_src/2005.webp": "bfca30cf7e2cd69d226df86eb038c371",
"assets/lib/item_src/2006.webp": "d0f6f6c1318372e52572c5a3d274d30a",
"assets/lib/item_src/2009.webp": "34d1f05c5b9eb472e96531428ee4f506",
"assets/lib/item_src/2010.webp": "8bd68eab3244ab04c3f40cc338cbfa6a",
"assets/lib/item_src/2011.webp": "9a3d5db4295ab1978d206346ea102511",
"assets/lib/item_src/2016.webp": "421d19a10289712a4efff8f05cfabfd9",
"assets/lib/item_src/2017.webp": "8b7a94bd0e63d1fe5143a358dd6db370",
"assets/lib/item_src/2019.webp": "e076867c68c5beffae184cf05fedce11",
"assets/lib/item_src/2020.webp": "487561ed74917f9e791ca902f75ec773",
"assets/lib/item_src/2023.webp": "afbea2c00e1e9bd05d55754ae6d79444",
"assets/lib/item_src/2025.webp": "497c85966a8de6b1b07554bdba40af10",
"assets/lib/item_src/2031.webp": "db4bb6baf962b958365ada85f0119914",
"assets/lib/item_src/2033.webp": "f6da6efa24324304a2093b5f22e7dcf2",
"assets/lib/item_src/2034.webp": "918e80c1f7e7e0692bc2454436203534",
"assets/lib/item_src/2038.webp": "ed1c273ea72dd4e411dad276fd69d706",
"assets/lib/item_src/2039.webp": "3dc5d9f29d94ac32b7b5eb6cdd6840d3",
"assets/lib/item_src/2041.webp": "f7ad80f360b071d0e50374a4b2665e01",
"assets/lib/item_src/2044.webp": "4a7363049ffcedf5de3ccf47956d62a0",
"assets/lib/item_src/2045.webp": "ed175c887e5a0adc98ee294fb36b6d1c",
"assets/lib/item_src/2046.webp": "5065238ab42d253e2eb5bbb3e57fc28a",
"assets/lib/item_src/2052.webp": "ddbf8ec8988c90a53a669e6f01e0eef9",
"assets/lib/item_src/2053.webp": "8004642b829cea7762e0ef8274125b4c",
"assets/lib/item_src/2054.webp": "cac887c680af89a1f8799bee21217c3e",
"assets/lib/item_src/2222.webp": "102ac96605d6fa83880a65546dedc30e",
"assets/lib/item_src/2248.webp": "78790d66390b720a6dd764259ae28b8f",
"assets/lib/item_src/2329.webp": "255519789ee52c6c19f3174462d5f29c",
"assets/lib/item_src/adaptivehelm.webp": "5433637727cbc8c6de349f1cab68b331",
"assets/lib/item_src/crownguard.webp": "65fb4b3e3e8a9981a28268fad6783ab0",
"assets/lib/item_src/evenshroud.webp": "ac0a2897b9d3ea586a1d0526b2d78db2",
"assets/lib/item_src/frying_pan.webp": "00a18c88f864b86a2287331eb797afaa",
"assets/lib/item_src/krakensfury.webp": "24b606b045b247fa27ba0577f772d964",
"assets/lib/item_src/nashorstooth.webp": "f883df9d571166405e82215e00ce539b",
"assets/lib/item_src/nightharvester.webp": "ba7d911935606455ddab25cfbce91eb9",
"assets/lib/item_src/spiritvisage.webp": "9cdec66f733bbc022aee1dc05268a1e8",
"assets/lib/item_src/steraksgage.webp": "56db1a24f97916d665f75276d2d22d3a",
"assets/lib/item_src/strikersflail.webp": "8f2c2eb18a0f1f6be52799b5a1f3a715",
"assets/lib/item_src/temp.png": "e6a7e9456ea691d43222579a44f91ea0",
"assets/lib/item_src/voidstaff.webp": "a8a50c2c69a3d275c051934f5f739e79",
"assets/NOTICES": "f0845e19f30d959b3d123e5febe20ed8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1c18ba372631565de1ca0aff3fe9de1f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a150c6b31d74dd2d8f5a33730c57e447",
"/": "a150c6b31d74dd2d8f5a33730c57e447",
"main.dart.js": "d9278c1edff0321474ba4584abef9058",
"manifest.json": "9ee3360931a930ea295a2dc44ceca2ba",
"version.json": "e5f5d01d0a2a5fc1061276c5a90b26e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

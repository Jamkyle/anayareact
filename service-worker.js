"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/anayareact/index.html","e628a4830b8a723c711c87e3e9739a89"],["/anayareact/static/css/main.2d3af040.css","07d208491b21fc921b533609740ea213"],["/anayareact/static/js/main.948e8318.js","f76a727e2d626d339414b5561066b5d5"],["/anayareact/static/media/anaya-chorale.2854c484.jpg","2854c484db617b585cf56af57ce3d6a7"],["/anayareact/static/media/anaya.dc2ba1f1.svg","dc2ba1f1edd8cb5d23c18ba0fdb2d2b0"],["/anayareact/static/media/andrei.6fa06404.jpg","6fa064047b65b34ececa0978bf8a3a64"],["/anayareact/static/media/arrow.0762729b.svg","0762729b8a5d18ae096d274a3ba4ba87"],["/anayareact/static/media/facebook.e67031b8.svg","e67031b8d8e6f77a2a56a3215c033ccc"],["/anayareact/static/media/insta.77bdc99f.svg","77bdc99fe65445bdf2ce63c39789c155"],["/anayareact/static/media/mini.5fef746e.svg","5fef746e375f6a9743b54b5e1eb010fc"],["/anayareact/static/media/natalya.9c352d7d.jpg","9c352d7d2b3e238d6f6b40e837de16a9"],["/anayareact/static/media/pinterest.42950d5e.svg","42950d5e87c004490f9fc89c78eb2f91"],["/anayareact/static/media/twitter.c793707b.svg","c793707b130efd1909a9c2fad4b38e15"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),a=urlsToCacheKeys.has(t));var r="/anayareact/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(r,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});
‘use strict’;
importScripts(‘sw-toolbox.js’); 
toolbox.precache([“index.html”,”css/main.css”,"_scss/main.scss"]); 
toolbox.router.get(‘/img/*’, toolbox.cacheFirst); 
toolbox.router.get(‘/*’, toolbox.networkFirst, { networkTimeoutSeconds: 5});

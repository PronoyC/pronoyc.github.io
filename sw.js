'use strict';

importScripts('sw-toolbox.js');

toolbox.precache([“index.html”,”css/main.css”,"_scss/main.scss", "_layouts/default.html"]); 

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});

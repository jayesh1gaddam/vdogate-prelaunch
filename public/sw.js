/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    // Ensure we only append .js if not already present
    const urlObj = new URL(uri, parentUri);
    if (!urlObj.pathname.endsWith('.js')) {
      urlObj.pathname += '.js';
    }
    uri = urlObj.href;
    return registry[uri] || (
      registry[uri] = new Promise((resolve, reject) => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = () => {
              script.onload = null;
              script.onerror = null;
              resolve();
            };
            script.onerror = (err) => {
              script.onload = null;
              script.onerror = null;
              script.remove();
              // Remove failed promise from registry to allow retry
              delete registry[uri];
              reject(new Error(`Failed to load script ${uri}: ${err?.message || 'unknown error'}`));
            };
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            try {
              importScripts(uri);
              resolve();
            } catch (e) {
              nextDefineUri = undefined;
              // Remove failed promise from registry to allow retry
              delete registry[uri];
              reject(e);
            }
          }
        })

      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn't register its module`);
        }
        return promise;
      })
      .catch((err) => {
        // Remove failed promise from registry to allow retry
        delete registry[uri];
        throw err;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-e43f5367'], (function (workbox) { 'use strict';

  try {
    importScripts("fallback-development.js");
  } catch (e) {
    self.fallback = undefined;
  }
  // Only force activation in local development
  if (self.location && (self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1')) {
    self.skipWaiting();
  }
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      handlerDidError: async ({
        request
      }) => self.fallback ? self.fallback(request) : Response.error()
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: [{
      handlerDidError: async ({
        request
      }) => self.fallback ? self.fallback(request) : Response.error()
    }]
  }), 'GET');

}));

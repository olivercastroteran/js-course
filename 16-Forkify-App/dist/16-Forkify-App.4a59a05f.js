// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"2mBWx":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8ad96e854a59a05f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"7dWZ8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _model = require("./model");
var _recipeView = require("./views/recipeView");
var _recipeViewDefault = parcelHelpers.interopDefault(_recipeView);
var _searchView = require("./views/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _resultsView = require("./views/resultsView");
var _resultsViewDefault = parcelHelpers.interopDefault(_resultsView);
var _paginationView = require("./views/paginationView");
var _paginationViewDefault = parcelHelpers.interopDefault(_paginationView);
var _runtime = require("regenerator-runtime/runtime");
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1); // remove # from hash id
        if (!id) return;
        // 0. Spinner
        (0, _recipeViewDefault.default).renderSpinner();
        // 1. Fetching recipe
        await _model.loadRecipe(id);
        // 2. Rendering recipe
        (0, _recipeViewDefault.default).render(_model.state.recipe);
    } catch (error) {
        console.log(error);
        (0, _recipeViewDefault.default).renderError();
    }
};
const controlSearchResults = async function() {
    try {
        (0, _resultsViewDefault.default).renderSpinner();
        // 1. Get search query
        const query = (0, _searchViewDefault.default).getQuery();
        if (!query) return;
        // 2. Load search results
        await _model.loadSearchResults(query);
        // 3. Render results
        (0, _resultsViewDefault.default).render(_model.getSearchResultsPage());
        // 4. Render initial pagination buttons
        (0, _paginationViewDefault.default).render(_model.state.search);
    } catch (error) {
        console.log(error);
    }
};
const controlPagination = function(goToPage) {
    // 1. Render NEW results
    (0, _resultsViewDefault.default).render(_model.getSearchResultsPage(goToPage));
    // 2. Render NEW pagination buttons
    (0, _paginationViewDefault.default).render(_model.state.search);
};
const init = function() {
    (0, _recipeViewDefault.default).addHandlerRender(controlRecipes);
    (0, _searchViewDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewDefault.default).addHandlerClick(controlPagination);
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1egVF","core-js/modules/web.immediate.js":"kq8dN","regenerator-runtime/runtime":"24cPR","./model":"3QBkH","./views/recipeView":"3wx5k","./views/searchView":"kbE4Z","./views/resultsView":"kBQ4r","./views/paginationView":"7NIiB"}],"1egVF":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kq8dN":[function(require,module,exports,__globalThis) {
'use strict';
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("18399094e52e9b5");
require("b987c8c5a73f1fb6");

},{"18399094e52e9b5":"siQBm","b987c8c5a73f1fb6":"2QsRH"}],"siQBm":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("3aef17abdf5c0aad");
var globalThis = require("fd6ad8300cb52344");
var clearImmediate = require("f4a89fbc61d6a43e").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"3aef17abdf5c0aad":"btYuj","fd6ad8300cb52344":"jfiEi","f4a89fbc61d6a43e":"kbtSP"}],"btYuj":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("2ef029864e0a3ed2");
var getOwnPropertyDescriptor = require("65af9505de050498").f;
var createNonEnumerableProperty = require("ac128b488c13b4c8");
var defineBuiltIn = require("5dde49cfc867d5a4");
var defineGlobalProperty = require("d540effc4e599e31");
var copyConstructorProperties = require("36e340e17f77a950");
var isForced = require("9be82f4850845c8d");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = globalThis;
    else if (STATIC) target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
    else target = globalThis[TARGET] && globalThis[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"2ef029864e0a3ed2":"jfiEi","65af9505de050498":"3BhV2","ac128b488c13b4c8":"2y2ns","5dde49cfc867d5a4":"gYVPo","d540effc4e599e31":"eds6r","36e340e17f77a950":"3JVk6","9be82f4850845c8d":"1n0IY"}],"jfiEi":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || check(typeof this == 'object' && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function('return this')();

},{}],"3BhV2":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("60c9fede82e47196");
var call = require("79e23a7762ea01aa");
var propertyIsEnumerableModule = require("9653d7aeada974ee");
var createPropertyDescriptor = require("e64cff387724f621");
var toIndexedObject = require("5a2d2f10b7335759");
var toPropertyKey = require("48439fd08f7c1ef3");
var hasOwn = require("47b1228caa7fa27e");
var IE8_DOM_DEFINE = require("2d0c439936af1fef");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"60c9fede82e47196":"8DYZl","79e23a7762ea01aa":"lRvh9","9653d7aeada974ee":"6EVue","e64cff387724f621":"1VymN","5a2d2f10b7335759":"7bkuk","48439fd08f7c1ef3":"8HBJW","47b1228caa7fa27e":"cD5tm","2d0c439936af1fef":"6Q1rj"}],"8DYZl":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("1c280cb51085992f");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"1c280cb51085992f":"6dcFP"}],"6dcFP":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"lRvh9":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("43b3cebfa28b52f5");
var call = Function.prototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"43b3cebfa28b52f5":"cK70D"}],"cK70D":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("61c82ec0da7b633e");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"61c82ec0da7b633e":"6dcFP"}],"6EVue":[function(require,module,exports,__globalThis) {
'use strict';
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1VymN":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"7bkuk":[function(require,module,exports,__globalThis) {
'use strict';
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("71d36e5aa064080c");
var requireObjectCoercible = require("3fe3f037de0bfd79");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"71d36e5aa064080c":"gggf8","3fe3f037de0bfd79":"024lL"}],"gggf8":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("27a60817ed9974e0");
var fails = require("33886e29ae3fc4b5");
var classof = require("8dc525eb7fe417b6");
var $Object = Object;
var split = uncurryThis(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

},{"27a60817ed9974e0":"lJQcB","33886e29ae3fc4b5":"6dcFP","8dc525eb7fe417b6":"7sdIO"}],"lJQcB":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("52e95ac28c20cdc6");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind -- safe
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"52e95ac28c20cdc6":"cK70D"}],"7sdIO":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("89673b59a095dc1f");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"89673b59a095dc1f":"lJQcB"}],"024lL":[function(require,module,exports,__globalThis) {
'use strict';
var isNullOrUndefined = require("3e386f2123e8ecb");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"3e386f2123e8ecb":"kb5s8"}],"kb5s8":[function(require,module,exports,__globalThis) {
'use strict';
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"8HBJW":[function(require,module,exports,__globalThis) {
'use strict';
var toPrimitive = require("6047ffc73d3ee0db");
var isSymbol = require("67ec9ef7c73cae4f");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
};

},{"6047ffc73d3ee0db":"Us91o","67ec9ef7c73cae4f":"fw3WM"}],"Us91o":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("59634d0a78fb315e");
var isObject = require("da929d22beb80bed");
var isSymbol = require("e52bd56448934893");
var getMethod = require("566cad4acbc044de");
var ordinaryToPrimitive = require("d2265917e0cbc8c0");
var wellKnownSymbol = require("ac46b7ec1c864cd5");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
};

},{"59634d0a78fb315e":"lRvh9","da929d22beb80bed":"9pO3z","e52bd56448934893":"fw3WM","566cad4acbc044de":"h2L5Y","d2265917e0cbc8c0":"4PtIX","ac46b7ec1c864cd5":"et5Ec"}],"9pO3z":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("f4b10ad82f6e5e2c");
module.exports = function(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"f4b10ad82f6e5e2c":"j2AF6"}],"j2AF6":[function(require,module,exports,__globalThis) {
'use strict';
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function(argument) {
    return typeof argument == 'function' || argument === documentAll;
} : function(argument) {
    return typeof argument == 'function';
};

},{}],"fw3WM":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("d05aa12213f7f96d");
var isCallable = require("22ead21215a3ac7f");
var isPrototypeOf = require("2e6ac43a3b7aa7c0");
var USE_SYMBOL_AS_UID = require("5dd2960f9bbb275b");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"d05aa12213f7f96d":"gq2b2","22ead21215a3ac7f":"j2AF6","2e6ac43a3b7aa7c0":"kMmZm","5dd2960f9bbb275b":"bi1Ez"}],"gq2b2":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("5622d629dd5c4cca");
var isCallable = require("c18640a17c478da4");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};

},{"5622d629dd5c4cca":"jfiEi","c18640a17c478da4":"j2AF6"}],"kMmZm":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("66907edd66ea5c1b");
module.exports = uncurryThis({}.isPrototypeOf);

},{"66907edd66ea5c1b":"lJQcB"}],"bi1Ez":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("2cd2cf052477fbf4");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"2cd2cf052477fbf4":"1gWC2"}],"1gWC2":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("112e29217be6688");
var fails = require("4a05b2d1bfcd4503");
var globalThis = require("d396ecc87d1cc79b");
var $String = globalThis.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"112e29217be6688":"c9RnC","4a05b2d1bfcd4503":"6dcFP","d396ecc87d1cc79b":"jfiEi"}],"c9RnC":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("478e522c539a8474");
var userAgent = require("391e6b26303fefbe");
var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"478e522c539a8474":"jfiEi","391e6b26303fefbe":"ZrHrC"}],"ZrHrC":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("9c9df37a32e6a02a");
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : '';

},{"9c9df37a32e6a02a":"jfiEi"}],"h2L5Y":[function(require,module,exports,__globalThis) {
'use strict';
var aCallable = require("66eb5f224ea818c3");
var isNullOrUndefined = require("4924ea1440616e5d");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"66eb5f224ea818c3":"6Vme1","4924ea1440616e5d":"kb5s8"}],"6Vme1":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("ba856c69856d286a");
var tryToString = require("f38b40ddf5efce55");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + ' is not a function');
};

},{"ba856c69856d286a":"j2AF6","f38b40ddf5efce55":"4WSBn"}],"4WSBn":[function(require,module,exports,__globalThis) {
'use strict';
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return 'Object';
    }
};

},{}],"4PtIX":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("6e17f4d09edae09e");
var isCallable = require("a53851dd19baf81a");
var isObject = require("290d630b24cc95ae");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"6e17f4d09edae09e":"lRvh9","a53851dd19baf81a":"j2AF6","290d630b24cc95ae":"9pO3z"}],"et5Ec":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("caa56297d1d9d8c2");
var shared = require("96d71d8d305221b8");
var hasOwn = require("28094e2c1188e8c2");
var uid = require("d353219a88a803cc");
var NATIVE_SYMBOL = require("c01492286820524f");
var USE_SYMBOL_AS_UID = require("b87a5b8e12e2c73c");
var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
    return WellKnownSymbolsStore[name];
};

},{"caa56297d1d9d8c2":"jfiEi","96d71d8d305221b8":"j00sC","28094e2c1188e8c2":"cD5tm","d353219a88a803cc":"2360k","c01492286820524f":"1gWC2","b87a5b8e12e2c73c":"bi1Ez"}],"j00sC":[function(require,module,exports,__globalThis) {
'use strict';
var store = require("426d978193f703a5");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"426d978193f703a5":"9OyJ4"}],"9OyJ4":[function(require,module,exports,__globalThis) {
'use strict';
var IS_PURE = require("73a34a3cf5199f1b");
var globalThis = require("2e2c5bf464596956");
var defineGlobalProperty = require("f9ba25581f27a8a0");
var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: '3.49.0',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: "\xa9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
    license: 'https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
});

},{"73a34a3cf5199f1b":"5aJM5","2e2c5bf464596956":"jfiEi","f9ba25581f27a8a0":"eds6r"}],"5aJM5":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = false;

},{}],"eds6r":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("222682854aaf738d");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(globalThis, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        globalThis[key] = value;
    }
    return value;
};

},{"222682854aaf738d":"jfiEi"}],"cD5tm":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("20866b4c465b0b9c");
var toObject = require("4cda4e0991161e2b");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"20866b4c465b0b9c":"lJQcB","4cda4e0991161e2b":"7Ydn8"}],"7Ydn8":[function(require,module,exports,__globalThis) {
'use strict';
var requireObjectCoercible = require("939b5818e07ad403");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"939b5818e07ad403":"024lL"}],"2360k":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("3517033e1fd8de92");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.1.toString);
module.exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"3517033e1fd8de92":"lJQcB"}],"6Q1rj":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("c2c38b2a19cbfbe4");
var fails = require("837f61326994de89");
var createElement = require("d05f4374db310c2d");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"c2c38b2a19cbfbe4":"8DYZl","837f61326994de89":"6dcFP","d05f4374db310c2d":"gLAUg"}],"gLAUg":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("815ed2409f318e08");
var isObject = require("4be50ae6602f51e7");
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"815ed2409f318e08":"jfiEi","4be50ae6602f51e7":"9pO3z"}],"2y2ns":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("53d85f62f4fceb0");
var definePropertyModule = require("307a1b6ce1b95b92");
var createPropertyDescriptor = require("4e9d9485fbf709ae");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"53d85f62f4fceb0":"8DYZl","307a1b6ce1b95b92":"3QdLP","4e9d9485fbf709ae":"1VymN"}],"3QdLP":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("43d6ae2c7bf69f62");
var IE8_DOM_DEFINE = require("5d5eb9279831c28b");
var V8_PROTOTYPE_DEFINE_BUG = require("b30dc21e473cd740");
var anObject = require("547ae4dc3a239a74");
var toPropertyKey = require("6d48dd5d51d01c2b");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"43d6ae2c7bf69f62":"8DYZl","5d5eb9279831c28b":"6Q1rj","b30dc21e473cd740":"1ICO1","547ae4dc3a239a74":"2H1cC","6d48dd5d51d01c2b":"8HBJW"}],"1ICO1":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("abf4c33865ff9ab1");
var fails = require("eb70be34b5e78d41");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, 'prototype', {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"abf4c33865ff9ab1":"8DYZl","eb70be34b5e78d41":"6dcFP"}],"2H1cC":[function(require,module,exports,__globalThis) {
'use strict';
var isObject = require("37fa643bd2989530");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + ' is not an object');
};

},{"37fa643bd2989530":"9pO3z"}],"gYVPo":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("e5a97dcc361757a2");
var definePropertyModule = require("c8ccc7c26988e51d");
var makeBuiltIn = require("69a23104a9406897");
var defineGlobalProperty = require("147839faf26832a6");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"e5a97dcc361757a2":"j2AF6","c8ccc7c26988e51d":"3QdLP","69a23104a9406897":"g5krC","147839faf26832a6":"eds6r"}],"g5krC":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("2a8a8a5fc2179add");
var fails = require("4d580b59c0e19a45");
var isCallable = require("b47602191d6d594");
var hasOwn = require("b84de22815120ec9");
var DESCRIPTORS = require("d379cdc5f174691c");
var CONFIGURABLE_FUNCTION_NAME = require("75b0213918f6b720").CONFIGURABLE;
var inspectSource = require("dc4e1b5eaffbb2eb");
var InternalStateModule = require("1d412a287eb7057b");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, 'length', {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, 'name', {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) defineProperty(value, 'length', {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, 'constructor') && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, 'prototype', {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

},{"2a8a8a5fc2179add":"lJQcB","4d580b59c0e19a45":"6dcFP","b47602191d6d594":"j2AF6","b84de22815120ec9":"cD5tm","d379cdc5f174691c":"8DYZl","75b0213918f6b720":"43B9n","dc4e1b5eaffbb2eb":"fQae3","1d412a287eb7057b":"aPIxl"}],"43B9n":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("3ab30be7455e76c0");
var hasOwn = require("71cbc72c03a8ae49");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"3ab30be7455e76c0":"8DYZl","71cbc72c03a8ae49":"cD5tm"}],"fQae3":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("a2b69646527eb0a5");
var isCallable = require("87b5b5f4f7e2b9ea");
var store = require("37340ba460aa0d6e");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"a2b69646527eb0a5":"lJQcB","87b5b5f4f7e2b9ea":"j2AF6","37340ba460aa0d6e":"9OyJ4"}],"aPIxl":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_WEAK_MAP = require("cc8ea2c8eb4ea12b");
var globalThis = require("a5e7cd47ade36391");
var isObject = require("ac444ca192889ed7");
var createNonEnumerableProperty = require("eaaba203e9afd11a");
var hasOwn = require("93609bf42b6b5e2d");
var shared = require("749fa45b23c61ca0");
var sharedKey = require("78716ac62fd0f769");
var hiddenKeys = require("22437d0747e2f617");
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"cc8ea2c8eb4ea12b":"lwbwm","a5e7cd47ade36391":"jfiEi","ac444ca192889ed7":"9pO3z","eaaba203e9afd11a":"2y2ns","93609bf42b6b5e2d":"cD5tm","749fa45b23c61ca0":"9OyJ4","78716ac62fd0f769":"kgIeU","22437d0747e2f617":"e97Fz"}],"lwbwm":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("29fd1372ef23bd35");
var isCallable = require("3f83a994606ab921");
var WeakMap = globalThis.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"29fd1372ef23bd35":"jfiEi","3f83a994606ab921":"j2AF6"}],"kgIeU":[function(require,module,exports,__globalThis) {
'use strict';
var shared = require("8ff3df2d484eb4cc");
var uid = require("f260a70ba57703b1");
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"8ff3df2d484eb4cc":"j00sC","f260a70ba57703b1":"2360k"}],"e97Fz":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = {};

},{}],"3JVk6":[function(require,module,exports,__globalThis) {
'use strict';
var hasOwn = require("aaa73fdc906ca9d7");
var ownKeys = require("556865db979016eb");
var getOwnPropertyDescriptorModule = require("96e993c6ef839162");
var definePropertyModule = require("603b24c10a4813a3");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"aaa73fdc906ca9d7":"cD5tm","556865db979016eb":"8OYJc","96e993c6ef839162":"3BhV2","603b24c10a4813a3":"3QdLP"}],"8OYJc":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("b87d921818ee552");
var uncurryThis = require("c8a8812ba14ebd8d");
var getOwnPropertyNamesModule = require("2798fa64d3492761");
var getOwnPropertySymbolsModule = require("b7a35238330b1114");
var anObject = require("c9d2270ef4697e37");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"b87d921818ee552":"gq2b2","c8a8812ba14ebd8d":"lJQcB","2798fa64d3492761":"dNFXU","b7a35238330b1114":"g469h","c9d2270ef4697e37":"2H1cC"}],"dNFXU":[function(require,module,exports,__globalThis) {
'use strict';
var internalObjectKeys = require("a3ff6aae3ffadb1c");
var enumBugKeys = require("b86ced834140b2fc");
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"a3ff6aae3ffadb1c":"8wC9r","b86ced834140b2fc":"duBaB"}],"8wC9r":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("b9ce68bbac269451");
var hasOwn = require("523a10a15af17091");
var toIndexedObject = require("3c45f703873a0543");
var indexOf = require("2e6c1f082f47fbbd").indexOf;
var hiddenKeys = require("b85fee037a239832");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"b9ce68bbac269451":"lJQcB","523a10a15af17091":"cD5tm","3c45f703873a0543":"7bkuk","2e6c1f082f47fbbd":"2CyRk","b85fee037a239832":"e97Fz"}],"2CyRk":[function(require,module,exports,__globalThis) {
'use strict';
var toIndexedObject = require("5f585ef52712d28e");
var toAbsoluteIndex = require("9e50c9644ec8cee0");
var lengthOfArrayLike = require("a8c5e7260a682fe7");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"5f585ef52712d28e":"7bkuk","9e50c9644ec8cee0":"jMid2","a8c5e7260a682fe7":"fnm6t"}],"jMid2":[function(require,module,exports,__globalThis) {
'use strict';
var toIntegerOrInfinity = require("50542f48ab14d42e");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"50542f48ab14d42e":"dLjXf"}],"dLjXf":[function(require,module,exports,__globalThis) {
'use strict';
var trunc = require("378fd5a49fa575c8");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"378fd5a49fa575c8":"dJciK"}],"dJciK":[function(require,module,exports,__globalThis) {
'use strict';
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"fnm6t":[function(require,module,exports,__globalThis) {
'use strict';
var toLength = require("415736f30245ed91");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"415736f30245ed91":"9hQjW"}],"9hQjW":[function(require,module,exports,__globalThis) {
'use strict';
var toIntegerOrInfinity = require("2535dac8f6ea0de7");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"2535dac8f6ea0de7":"dLjXf"}],"duBaB":[function(require,module,exports,__globalThis) {
'use strict';
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"g469h":[function(require,module,exports,__globalThis) {
'use strict';
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"1n0IY":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("eaa668dd0c955b67");
var isCallable = require("dd87c802f39713be");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"eaa668dd0c955b67":"6dcFP","dd87c802f39713be":"j2AF6"}],"kbtSP":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("3323fc5bf4239f6b");
var apply = require("e62aaff0eeb021be");
var bind = require("5629883b0acd6944");
var isCallable = require("eeaed77cae043a8f");
var hasOwn = require("ef3cf3f6b3c49cdf");
var fails = require("7e21ebd8708a53db");
var html = require("4087caed3e195223");
var arraySlice = require("4ba9bf3733bdf34a");
var createElement = require("a1fb834dfd781446");
var validateArgumentsLength = require("467bd283e41c493");
var IS_IOS = require("cb13ade1c01b8ee4");
var IS_NODE = require("9e5f5cdbba455f59");
var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = globalThis.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== 'file:' && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        globalThis.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"3323fc5bf4239f6b":"jfiEi","e62aaff0eeb021be":"8TAX6","5629883b0acd6944":"axsgM","eeaed77cae043a8f":"j2AF6","ef3cf3f6b3c49cdf":"cD5tm","7e21ebd8708a53db":"6dcFP","4087caed3e195223":"3UlyI","4ba9bf3733bdf34a":"jUu5C","a1fb834dfd781446":"gLAUg","467bd283e41c493":"Du86q","cb13ade1c01b8ee4":"5rPCk","9e5f5cdbba455f59":"dzPUC"}],"8TAX6":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("79a018cb9706c8aa");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-function-prototype-bind, es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"79a018cb9706c8aa":"cK70D"}],"axsgM":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("dfcc7e345b87d954");
var aCallable = require("97ec7f4e8a61c82");
var NATIVE_BIND = require("67941e099c4f25");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"dfcc7e345b87d954":"7O56k","97ec7f4e8a61c82":"6Vme1","67941e099c4f25":"cK70D"}],"7O56k":[function(require,module,exports,__globalThis) {
'use strict';
var classofRaw = require("64d8ed412cb1bfe9");
var uncurryThis = require("48e0c19ae7c2f4ce");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

},{"64d8ed412cb1bfe9":"7sdIO","48e0c19ae7c2f4ce":"lJQcB"}],"3UlyI":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("aa42623022a62759");
module.exports = getBuiltIn('document', 'documentElement');

},{"aa42623022a62759":"gq2b2"}],"jUu5C":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("3fee46f5b88dad5");
module.exports = uncurryThis([].slice);

},{"3fee46f5b88dad5":"lJQcB"}],"Du86q":[function(require,module,exports,__globalThis) {
'use strict';
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError('Not enough arguments');
    return passed;
};

},{}],"5rPCk":[function(require,module,exports,__globalThis) {
'use strict';
var userAgent = require("c718edb4de90a3e3");
module.exports = /ipad|iphone|ipod/i.test(userAgent) && /applewebkit/i.test(userAgent);

},{"c718edb4de90a3e3":"ZrHrC"}],"dzPUC":[function(require,module,exports,__globalThis) {
'use strict';
var ENVIRONMENT = require("fddab296259b0452");
module.exports = ENVIRONMENT === 'NODE';

},{"fddab296259b0452":"aQezF"}],"aQezF":[function(require,module,exports,__globalThis) {
'use strict';
/* global Bun, Deno -- detection */ var globalThis = require("3cd7f89904db4fae");
var userAgent = require("1ef2abc497d030bf");
var classof = require("cc9b0d048f77dceb");
var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
};
module.exports = function() {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof(globalThis.process) === 'process') return 'NODE';
    if (globalThis.window && globalThis.document) return 'BROWSER';
    return 'REST';
}();

},{"3cd7f89904db4fae":"jfiEi","1ef2abc497d030bf":"ZrHrC","cc9b0d048f77dceb":"7sdIO"}],"2QsRH":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("a13453f53d888acf");
var globalThis = require("98c43db47378b69a");
var setTask = require("22bd427d2823a2b2").set;
var schedulersFix = require("c099e11bd457cd31");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = globalThis.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"a13453f53d888acf":"btYuj","98c43db47378b69a":"jfiEi","22bd427d2823a2b2":"kbtSP","c099e11bd457cd31":"a0otd"}],"a0otd":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("42440acbb3222e22");
var apply = require("917b2c1920d5b421");
var isCallable = require("dfb3aef40a972b65");
var ENVIRONMENT = require("2160bf3ef1dfd7fc");
var USER_AGENT = require("caa3fc72b2274367");
var arraySlice = require("a6e8af3f08388569");
var validateArgumentsLength = require("e64a6dae9e897a7");
var Function = globalThis.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && function() {
    var version = globalThis.Bun.version.split('.');
    return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"42440acbb3222e22":"jfiEi","917b2c1920d5b421":"8TAX6","dfb3aef40a972b65":"j2AF6","2160bf3ef1dfd7fc":"aQezF","caa3fc72b2274367":"ZrHrC","a6e8af3f08388569":"jUu5C","e64a6dae9e897a7":"Du86q"}],"24cPR":[function(require,module,exports,__globalThis) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"3QBkH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
var _config = require("./config");
var _helpers = require("./helpers");
const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: (0, _config.RES_PER_PAGE)
    }
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helpers.getJSON)(`${(0, _config.API_URL)}${id}`);
        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients
        };
    } catch (error) {
        console.error(`${error} \u{1F4A5}\u{1F4A5}\u{1F4A5}`);
        throw error;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await (0, _helpers.getJSON)(`${(0, _config.API_URL)}?search=${query}`);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url
            };
        });
    } catch (error) {
        console.error(`${error} \u{1F4A5}\u{1F4A5}\u{1F4A5}`);
        throw error;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 10
    return state.search.results.slice(start, end); // 10 results since slice does not include last one
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1egVF","./config":"2hPh4","./helpers":"7nL9P"}],"2hPh4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
const API_URL = 'https://forkify-api.jonas.io/api/v2/recipes/';
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1egVF"}],"7nL9P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${data.status})`);
        return data;
    } catch (error) {
        throw error;
    }
};

},{"./config":"2hPh4","@parcel/transformer-js/src/esmodule-helpers.js":"1egVF"}],"3wx5k":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractionJs = require("fraction.js");
var _fractionJsDefault = parcelHelpers.interopDefault(_fractionJs);
class RecipeView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    _generateMarkup() {
        return `
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${0, _iconsSvgDefault.default}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
    }
    _generateMarkupIngredient(ing) {
        return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ing.quantity ? new (0, _fractionJsDefault.default)(ing.quantity).toFraction() : ''}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>
    `;
    }
}
exports.default = new RecipeView();

},{"url:../../img/icons.svg":"6JeoS","@parcel/transformer-js/src/esmodule-helpers.js":"1egVF","fraction.js":"5jFnK","./View":"jSw21"}],"6JeoS":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("icons.0809ef97.svg") + "?" + Date.now();

},{}],"5jFnK":[function(require,module,exports,__globalThis) {
/*
Fraction.js v5.3.4 8/22/2025
https://raw.org/article/rational-numbers-in-javascript/

Copyright (c) 2025, Robert Eisele (https://raw.org/)
Licensed under the MIT license.
*/ 'use strict';
(function(F) {
    function D() {
        return Error("Parameters must be integer");
    }
    function x() {
        return Error("Invalid argument");
    }
    function C() {
        return Error("Division by Zero");
    }
    function q(a, b) {
        var d = g, c = h;
        let f = h;
        if (void 0 !== a && null !== a) {
            if (void 0 !== b) {
                if ("bigint" === typeof a) d = a;
                else {
                    if (isNaN(a)) throw x();
                    if (0 !== a % 1) throw D();
                    d = BigInt(a);
                }
                if ("bigint" === typeof b) c = b;
                else {
                    if (isNaN(b)) throw x();
                    if (0 !== b % 1) throw D();
                    c = BigInt(b);
                }
                f = d * c;
            } else if ("object" === typeof a) {
                if ("d" in a && "n" in a) d = BigInt(a.n), c = BigInt(a.d), "s" in a && (d *= BigInt(a.s));
                else if (0 in a) d = BigInt(a[0]), 1 in a && (c = BigInt(a[1]));
                else if ("bigint" === typeof a) d = a;
                else throw x();
                f = d * c;
            } else if ("number" === typeof a) {
                if (isNaN(a)) throw x();
                0 > a && (f = -h, a = -a);
                if (0 === a % 1) d = BigInt(a);
                else {
                    b = 1;
                    var k = 0, l = 1, m = 1;
                    let r = 1;
                    1 <= a && (b = 10 ** Math.floor(1 + Math.log10(a)), a /= b);
                    for(; 1E7 >= l && 1E7 >= r;)if (c = (k + m) / (l + r), a === c) {
                        1E7 >= l + r ? (d = k + m, c = l + r) : r > l ? (d = m, c = r) : (d = k, c = l);
                        break;
                    } else a > c ? (k += m, l += r) : (m += k, r += l), 1E7 < l ? (d = m, c = r) : (d = k, c = l);
                    d = BigInt(d) * BigInt(b);
                    c = BigInt(c);
                }
            } else if ("string" === typeof a) {
                c = 0;
                k = b = d = g;
                l = m = h;
                a = a.replace(/_/g, "").match(/\d+|./g);
                if (null === a) throw x();
                "-" === a[c] ? (f = -h, c++) : "+" === a[c] && c++;
                if (a.length === c + 1) b = w(a[c++], f);
                else if ("." === a[c + 1] || "." === a[c]) {
                    "." !== a[c] && (d = w(a[c++], f));
                    c++;
                    if (c + 1 === a.length || "(" === a[c + 1] && ")" === a[c + 3] || "'" === a[c + 1] && "'" === a[c + 3]) b = w(a[c], f), m = t ** BigInt(a[c].length), c++;
                    if ("(" === a[c] && ")" === a[c + 2] || "'" === a[c] && "'" === a[c + 2]) k = w(a[c + 1], f), l = t ** BigInt(a[c + 1].length) - h, c += 3;
                } else "/" === a[c + 1] || ":" === a[c + 1] ? (b = w(a[c], f), m = w(a[c + 2], h), c += 3) : "/" === a[c + 3] && " " === a[c + 1] && (d = w(a[c], f), b = w(a[c + 2], f), m = w(a[c + 4], h), c += 5);
                if (a.length <= c) c = m * l, f = d = k + c * d + l * b;
                else throw x();
            } else if ("bigint" === typeof a) f = d = a, c = h;
            else throw x();
        }
        if (c === g) throw C();
        e.s = f < g ? -h : h;
        e.n = d < g ? -d : d;
        e.d = c < g ? -c : c;
    }
    function w(a, b) {
        try {
            a = BigInt(a);
        } catch (d) {
            throw x();
        }
        return a * b;
    }
    function u(a) {
        return "bigint" === typeof a ? a : Math.floor(a);
    }
    function n(a, b) {
        if (b === g) throw C();
        const d = Object.create(v.prototype);
        d.s = a < g ? -h : h;
        a = a < g ? -a : a;
        const c = y(a, b);
        d.n = a / c;
        d.d = b / c;
        return d;
    }
    function A(a) {
        const b = Object.create(null);
        if (a <= h) return b[a] = h, b;
        for(; a % p === g;)b[p] = (b[p] || g) + h, a /= p;
        for(; a % B === g;)b[B] = (b[B] || g) + h, a /= B;
        for(; a % z === g;)b[z] = (b[z] || g) + h, a /= z;
        for(let d = 0, c = p + z; c * c <= a;){
            for(; a % c === g;)b[c] = (b[c] || g) + h, a /= c;
            c += G[d];
            d = d + 1 & 7;
        }
        a > h && (b[a] = (b[a] || g) + h);
        return b;
    }
    function y(a, b) {
        if (!a) return b;
        if (!b) return a;
        for(;;){
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
        }
    }
    function v(a, b) {
        q(a, b);
        if (this instanceof v) a = y(e.d, e.n), this.s = e.s, this.n = e.n / a, this.d = e.d / a;
        else return n(e.s * e.n, e.d);
    }
    "undefined" === typeof BigInt && (BigInt = function(a) {
        if (isNaN(a)) throw Error("");
        return a;
    });
    const g = BigInt(0), h = BigInt(1), p = BigInt(2), B = BigInt(3), z = BigInt(5), t = BigInt(10), e = {
        s: h,
        n: g,
        d: h
    }, G = [
        p * p,
        p,
        p * p,
        p,
        p * p,
        p * B,
        p,
        p * B
    ];
    v.prototype = {
        s: h,
        n: g,
        d: h,
        abs: function() {
            return n(this.n, this.d);
        },
        neg: function() {
            return n(-this.s * this.n, this.d);
        },
        add: function(a, b) {
            q(a, b);
            return n(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
        },
        sub: function(a, b) {
            q(a, b);
            return n(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
        },
        mul: function(a, b) {
            q(a, b);
            return n(this.s * e.s * this.n * e.n, this.d * e.d);
        },
        div: function(a, b) {
            q(a, b);
            return n(this.s * e.s * this.n * e.d, this.d * e.n);
        },
        clone: function() {
            return n(this.s * this.n, this.d);
        },
        mod: function(a, b) {
            if (void 0 === a) return n(this.s * this.n % this.d, h);
            q(a, b);
            if (g === e.n * this.d) throw C();
            return n(this.s * e.d * this.n % (e.n * this.d), e.d * this.d);
        },
        gcd: function(a, b) {
            q(a, b);
            return n(y(e.n, this.n) * y(e.d, this.d), e.d * this.d);
        },
        lcm: function(a, b) {
            q(a, b);
            return e.n === g && this.n === g ? n(g, h) : n(e.n * this.n, y(e.n, this.n) * y(e.d, this.d));
        },
        inverse: function() {
            return n(this.s * this.d, this.n);
        },
        pow: function(a, b) {
            q(a, b);
            if (e.d === h) return e.s < g ? n((this.s * this.d) ** e.n, this.n ** e.n) : n((this.s * this.n) ** e.n, this.d ** e.n);
            if (this.s < g) return null;
            a = A(this.n);
            b = A(this.d);
            let d = h, c = h;
            for(let f in a)if ("1" !== f) {
                if ("0" === f) {
                    d = g;
                    break;
                }
                a[f] *= e.n;
                if (a[f] % e.d === g) a[f] /= e.d;
                else return null;
                d *= BigInt(f) ** a[f];
            }
            for(let f in b)if ("1" !== f) {
                b[f] *= e.n;
                if (b[f] % e.d === g) b[f] /= e.d;
                else return null;
                c *= BigInt(f) ** b[f];
            }
            return e.s < g ? n(c, d) : n(d, c);
        },
        log: function(a, b) {
            q(a, b);
            if (this.s <= g || e.s <= g) return null;
            var d = Object.create(null);
            a = A(e.n);
            const c = A(e.d);
            b = A(this.n);
            const f = A(this.d);
            for(var k in c)a[k] = (a[k] || g) - c[k];
            for(var l in f)b[l] = (b[l] || g) - f[l];
            for(var m in a)"1" !== m && (d[m] = !0);
            for(var r in b)"1" !== r && (d[r] = !0);
            l = k = null;
            for(const E in d)if (m = a[E] || g, d = b[E] || g, m === g) {
                if (d !== g) return null;
            } else if (r = y(d, m), d /= r, m /= r, null === k && null === l) k = d, l = m;
            else if (d * l !== k * m) return null;
            return null !== k && null !== l ? n(k, l) : null;
        },
        equals: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d === e.s * e.n * this.d;
        },
        lt: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d < e.s * e.n * this.d;
        },
        lte: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d <= e.s * e.n * this.d;
        },
        gt: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d > e.s * e.n * this.d;
        },
        gte: function(a, b) {
            q(a, b);
            return this.s * this.n * e.d >= e.s * e.n * this.d;
        },
        compare: function(a, b) {
            q(a, b);
            a = this.s * this.n * e.d - e.s * e.n * this.d;
            return (g < a) - (a < g);
        },
        ceil: function(a) {
            a = t ** BigInt(a || 0);
            return n(u(this.s * a * this.n / this.d) + (a * this.n % this.d > g && this.s >= g ? h : g), a);
        },
        floor: function(a) {
            a = t ** BigInt(a || 0);
            return n(u(this.s * a * this.n / this.d) - (a * this.n % this.d > g && this.s < g ? h : g), a);
        },
        round: function(a) {
            a = t ** BigInt(a || 0);
            return n(u(this.s * a * this.n / this.d) + this.s * ((this.s >= g ? h : g) + a * this.n % this.d * p > this.d ? h : g), a);
        },
        roundTo: function(a, b) {
            q(a, b);
            var d = this.n * e.d;
            a = this.d * e.n;
            b = d % a;
            d = u(d / a);
            b + b >= a && d++;
            return n(this.s * d * e.n, e.d);
        },
        divisible: function(a, b) {
            q(a, b);
            return e.n === g ? !1 : this.n * e.d % (e.n * this.d) === g;
        },
        valueOf: function() {
            return Number(this.s * this.n) / Number(this.d);
        },
        toString: function(a = 15) {
            let b = this.n, d = this.d;
            var c;
            a: {
                for(c = d; c % p === g; c /= p);
                for(; c % z === g; c /= z);
                if (c === h) c = g;
                else {
                    for(var f = t % c, k = 1; f !== h; k++)if (f = f * t % c, 2E3 < k) {
                        c = g;
                        break a;
                    }
                    c = BigInt(k);
                }
            }
            a: {
                f = h;
                k = t;
                var l = c;
                let m = h;
                for(; l > g; k = k * k % d, l >>= h)l & h && (m = m * k % d);
                k = m;
                for(l = 0; 300 > l; l++){
                    if (f === k) {
                        f = BigInt(l);
                        break a;
                    }
                    f = f * t % d;
                    k = k * t % d;
                }
                f = 0;
            }
            k = f;
            f = this.s < g ? "-" : "";
            f += u(b / d);
            (b = b % d * t) && (f += ".");
            if (c) {
                for(a = k; a--;)f += u(b / d), b %= d, b *= t;
                f += "(";
                for(a = c; a--;)f += u(b / d), b %= d, b *= t;
                f += ")";
            } else for(; b && a--;)f += u(b / d), b %= d, b *= t;
            return f;
        },
        toFraction: function(a = !1) {
            let b = this.n, d = this.d, c = this.s < g ? "-" : "";
            if (d === h) c += b;
            else {
                const f = u(b / d);
                a && f > g && (c += f, c += " ", b %= d);
                c = c + b + "/" + d;
            }
            return c;
        },
        toLatex: function(a = !1) {
            let b = this.n, d = this.d, c = this.s < g ? "-" : "";
            if (d === h) c += b;
            else {
                const f = u(b / d);
                a && f > g && (c += f, b %= d);
                c = c + "\\frac{" + b + "}{" + d;
                c += "}";
            }
            return c;
        },
        toContinued: function() {
            let a = this.n, b = this.d;
            const d = [];
            for(; b;){
                d.push(u(a / b));
                const c = a % b;
                a = b;
                b = c;
            }
            return d;
        },
        simplify: function(a = .001) {
            a = BigInt(Math.ceil(1 / a));
            const b = this.abs(), d = b.toContinued();
            for(let f = 1; f < d.length; f++){
                let k = n(d[f - 1], h);
                for(var c = f - 2; 0 <= c; c--)k = k.inverse().add(d[c]);
                c = k.sub(b);
                if (c.n * a < c.d) return k.mul(this.s);
            }
            return this;
        }
    };
    "function" === typeof define && define.amd ? define([], function() {
        return v;
    }) : (Object.defineProperty(v, "__esModule", {
        value: !0
    }), v["default"] = v, v.Fraction = v, module.exports = v);
})(this);

},{}],"jSw21":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner() {
        const spinner = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', spinner);
    }
    renderError(message = this._errorMessage) {
        const markup = `
        <div class="error">
          <div>
            <svg>
              <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
      `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
        <div class="message">
          <div>
            <svg>
              <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>
      `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"6JeoS","@parcel/transformer-js/src/esmodule-helpers.js":"1egVF"}],"kbE4Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector('.search');
    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', (e)=>{
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1egVF"}],"kBQ4r":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Please try again ;)';
    _message = '';
    _generateMarkup() {
        return this._data.map(this._generateMarkupPreview).join('');
    }
    _generateMarkupPreview(result) {
        return `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
          </div>
        </a>
      </li>
    `;
    }
}
exports.default = new ResultsView();

},{"./View":"jSw21","@parcel/transformer-js/src/esmodule-helpers.js":"1egVF","url:../../img/icons.svg":"6JeoS"}],"7NIiB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', (e)=>{
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // Page 1, and there are other pages
        if (currentPage === 1 && numPages > 1) return `
        <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        // Last page
        if (currentPage === numPages && numPages > 1) return `
        <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
      `;
        // Other page
        if (currentPage < numPages) return `
        <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
        <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        // Page 1, and there are NO other pages
        return '';
    }
}
exports.default = new PaginationView();

},{"./View":"jSw21","url:../../img/icons.svg":"6JeoS","@parcel/transformer-js/src/esmodule-helpers.js":"1egVF"}]},["2mBWx","7dWZ8"], "7dWZ8", "parcelRequire3a11", {}, "./", "/")

//# sourceMappingURL=16-Forkify-App.4a59a05f.js.map

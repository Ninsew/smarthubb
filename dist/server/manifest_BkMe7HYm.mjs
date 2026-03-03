import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_3KNGRMBj.mjs';
import 'es-module-lexer';
import { k as decodeKey } from './chunks/astro/server_Bo3SPKDP.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Bm8NKbd8.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/pontus.oberg/Desktop/Claude/smarthubb/","adapterName":"@astrojs/node","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"api/generate","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/generate","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/generate\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"generate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/generate.ts","pathname":"/api/generate","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"icontester/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/icontester","isIndex":false,"type":"page","pattern":"^\\/icontester\\/?$","segments":[[{"content":"icontester","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/icontester.astro","pathname":"/icontester","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"integritetspolicy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/integritetspolicy","isIndex":false,"type":"page","pattern":"^\\/integritetspolicy\\/?$","segments":[[{"content":"integritetspolicy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/integritetspolicy.astro","pathname":"/integritetspolicy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"kontakt/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/kontakt","isIndex":false,"type":"page","pattern":"^\\/kontakt\\/?$","segments":[[{"content":"kontakt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kontakt.astro","pathname":"/kontakt","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"om-oss/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/om-oss","isIndex":false,"type":"page","pattern":"^\\/om-oss\\/?$","segments":[[{"content":"om-oss","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/om-oss.astro","pathname":"/om-oss","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"sok/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sok","isIndex":false,"type":"page","pattern":"^\\/sok\\/?$","segments":[[{"content":"sok","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sok.astro","pathname":"/sok","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BmI49W-s.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.CKyzMUlQ.css"},{"type":"inline","content":".admin-container[data-astro-cid-u2h3djql]{max-width:1000px;margin:2rem auto;padding:0 1rem}.card[data-astro-cid-u2h3djql]{background:#f8f9fa;border-radius:8px;padding:1.5rem;border:1px solid #dee2e6;margin-bottom:2rem}.input-group[data-astro-cid-u2h3djql]{display:flex;gap:1rem;margin-top:1rem}input[data-astro-cid-u2h3djql]{flex:1;padding:.5rem;border:1px solid #ced4da;border-radius:4px}button[data-astro-cid-u2h3djql]{background:#007bff;color:#fff;border:none;padding:.5rem 1rem;border-radius:4px;cursor:pointer}button[data-astro-cid-u2h3djql]:hover{background:#0056b3}table[data-astro-cid-u2h3djql]{width:100%;border-collapse:collapse;margin-top:1rem}th[data-astro-cid-u2h3djql],td[data-astro-cid-u2h3djql]{padding:.75rem;text-align:left;border-bottom:1px solid #dee2e6}th[data-astro-cid-u2h3djql]{background:#f1f3f5}.failed[data-astro-cid-u2h3djql]{color:#dc3545;background:#fff5f5}#statusMsg[data-astro-cid-u2h3djql]{margin-top:1rem;font-weight:700}\n"}],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://smarthubb.se","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/icontester.astro",{"propagation":"none","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/integritetspolicy.astro",{"propagation":"none","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/kategori/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/kontakt.astro",{"propagation":"none","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/om-oss.astro",{"propagation":"none","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/sok.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/tagg/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/kategori/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/sok@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tagg/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/generate@_@ts":"pages/api/generate.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/icontester@_@astro":"pages/icontester.astro.mjs","\u0000@astro-page:src/pages/integritetspolicy@_@astro":"pages/integritetspolicy.astro.mjs","\u0000@astro-page:src/pages/kategori/[slug]@_@astro":"pages/kategori/_slug_.astro.mjs","\u0000@astro-page:src/pages/kontakt@_@astro":"pages/kontakt.astro.mjs","\u0000@astro-page:src/pages/om-oss@_@astro":"pages/om-oss.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/sok@_@astro":"pages/sok.astro.mjs","\u0000@astro-page:src/pages/tagg/[tag]@_@astro":"pages/tagg/_tag_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_BkMe7HYm.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/hacs.md?astroContentCollectionEntry=true":"chunks/hacs_jIdNZFVi.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/home-assistant-202512.md?astroContentCollectionEntry=true":"chunks/home-assistant-202512_TFW_VKD4.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/home-assistant.md?astroContentCollectionEntry=true":"chunks/home-assistant_DRV98MEQ.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/ikeas-nya-matterprodukter.md?astroContentCollectionEntry=true":"chunks/ikeas-nya-matterprodukter_BSfAnZed.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/zigbee2mqtt.md?astroContentCollectionEntry=true":"chunks/zigbee2mqtt_ClLqZPJ5.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/hacs.md?astroPropagatedAssets":"chunks/hacs_Irb0EQuU.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/home-assistant-202512.md?astroPropagatedAssets":"chunks/home-assistant-202512_DCmmIEx1.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/home-assistant.md?astroPropagatedAssets":"chunks/home-assistant_dA3S4DBj.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/ikeas-nya-matterprodukter.md?astroPropagatedAssets":"chunks/ikeas-nya-matterprodukter_CiIMrlUX.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/zigbee2mqtt.md?astroPropagatedAssets":"chunks/zigbee2mqtt_Cd4UF95B.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/hacs.md":"chunks/hacs_Cp2NfxIp.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/home-assistant-202512.md":"chunks/home-assistant-202512_BF3FTyU_.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/home-assistant.md":"chunks/home-assistant_uKAPfqOo.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/ikeas-nya-matterprodukter.md":"chunks/ikeas-nya-matterprodukter_BmR1ptEU.mjs","C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/content/blog/zigbee2mqtt.md":"chunks/zigbee2mqtt_fYyucjf5.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BmI49W-s.js","/astro/hoisted.js?q=1":"_astro/hoisted.Sdoy6reD.js","/astro/hoisted.js?q=2":"_astro/hoisted.C31bkfJY.js","/astro/hoisted.js?q=3":"_astro/hoisted.DahsVtqp.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.C2FoH00j.css","/_astro/_slug_.yNQc7ZIt.css","/_astro/_slug_.CKyzMUlQ.css","/_astro/kontakt.-4Rt1AxY.css","/_astro/sok.CCo0B6c7.css","/favicon.svg","/robots.txt","/SmartHubbLogo.svg","/_astro/hoisted.BmI49W-s.js","/_astro/hoisted.C31bkfJY.js","/_astro/hoisted.DahsVtqp.js","/_astro/hoisted.Sdoy6reD.js","/404.html","/api/generate","/blog/index.html","/icontester/index.html","/integritetspolicy/index.html","/kontakt/index.html","/om-oss/index.html","/rss.xml","/sok/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"9wQDPZ+3iq4lA3BVrSJU6lUm6/sd3NdXKzjJoOdpiaA=","experimentalEnvGetSecretEnabled":false});

export { manifest };

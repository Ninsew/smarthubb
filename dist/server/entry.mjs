import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CMNhYBRR.mjs';
import { manifest } from './manifest_BkMe7HYm.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/api/generate.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page6 = () => import('./pages/icontester.astro.mjs');
const _page7 = () => import('./pages/integritetspolicy.astro.mjs');
const _page8 = () => import('./pages/kategori/_slug_.astro.mjs');
const _page9 = () => import('./pages/kontakt.astro.mjs');
const _page10 = () => import('./pages/om-oss.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/sok.astro.mjs');
const _page13 = () => import('./pages/tagg/_tag_.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/index.astro", _page2],
    ["src/pages/api/generate.ts", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/blog/[...slug].astro", _page5],
    ["src/pages/icontester.astro", _page6],
    ["src/pages/integritetspolicy.astro", _page7],
    ["src/pages/kategori/[slug].astro", _page8],
    ["src/pages/kontakt.astro", _page9],
    ["src/pages/om-oss.astro", _page10],
    ["src/pages/rss.xml.js", _page11],
    ["src/pages/sok.astro", _page12],
    ["src/pages/tagg/[tag].astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/pontus.oberg/Desktop/Claude/smarthubb/dist/client/",
    "server": "file:///C:/Users/pontus.oberg/Desktop/Claude/smarthubb/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };

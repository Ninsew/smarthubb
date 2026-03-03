import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Bo3SPKDP.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_m3RuKTSp.mjs';
import { g as getLatestLogs } from '../chunks/db_CU3vSB-q.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const logs = getLatestLogs(20);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Admin Dashboard | SmartHubb", "data-astro-cid-u2h3djql": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="admin-container" data-astro-cid-u2h3djql> <h1 data-astro-cid-u2h3djql>SmartHubb AI Dashboard</h1> <section class="controls" data-astro-cid-u2h3djql> <h2 data-astro-cid-u2h3djql>Kontrollpanel</h2> <div class="card" data-astro-cid-u2h3djql> <p data-astro-cid-u2h3djql>Trigger manuell artikel-generering</p> <div class="input-group" data-astro-cid-u2h3djql> <input type="text" id="keyword" placeholder="Ange ämne (t.ex. 'Zigbee2MQTT Guide')" data-astro-cid-u2h3djql> <button id="triggerBtn" data-astro-cid-u2h3djql>Starta Generering</button> </div> <p id="statusMsg" data-astro-cid-u2h3djql></p> </div> </section> <section class="logs" data-astro-cid-u2h3djql> <h2 data-astro-cid-u2h3djql>Senaste Genereringar</h2> <table data-astro-cid-u2h3djql> <thead data-astro-cid-u2h3djql> <tr data-astro-cid-u2h3djql> <th data-astro-cid-u2h3djql>Datum</th> <th data-astro-cid-u2h3djql>Titel</th> <th data-astro-cid-u2h3djql>Ämne</th> <th data-astro-cid-u2h3djql>Status</th> <th data-astro-cid-u2h3djql>Tokens</th> </tr> </thead> <tbody data-astro-cid-u2h3djql> ${logs.map((log) => renderTemplate`<tr${addAttribute(log.status, "class")} data-astro-cid-u2h3djql> <td data-astro-cid-u2h3djql>${new Date(log.timestamp).toLocaleString("sv-SE")}</td> <td data-astro-cid-u2h3djql>${log.title}</td> <td data-astro-cid-u2h3djql>${log.keyword}</td> <td data-astro-cid-u2h3djql>${log.status === "success" ? "\u2705" : "\u274C"}</td> <td data-astro-cid-u2h3djql>${log.tokens}</td> </tr>`)} </tbody> </table> </section> </main>   ` })}`;
}, "C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

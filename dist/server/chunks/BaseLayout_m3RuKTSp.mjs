import { c as createAstro, a as createComponent, r as renderTemplate, e as renderSlot, b as addAttribute, g as renderHead, u as unescapeHTML } from './astro/server_Bo3SPKDP.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://smarthubb.se");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image, type = "website" } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const siteName = "SmartHubb.se";
  const siteDescription = "Guider och tips f\xF6r smart hem och Home Assistant";
  const defaultImage = "/og-image.png";
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(['<html lang="sv"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', "><!-- Primary Meta Tags --><title>", " | ", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name"', '><meta property="og:locale" content="sv_SE"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Sitemap & RSS --><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" title="SmartHubb.se RSS" href="/rss.xml"><!-- JSON-LD Structured Data --><script type="application/ld+json">', "<\/script>", `<!-- Google Analytics 4 --><script async src="https://www.googletagmanager.com/gtag/js?id=G-E6S0Z330L6"><\/script><script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E6S0Z330L6', {
      page_path: window.location.pathname,
      cookie_flags: 'SameSite=None;Secure',
    });
  <\/script><!-- Prevent flash of wrong theme --><script>
    (function() {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = stored || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  <\/script>`, "", '</head> <body> <header class="site-header"> <nav class="container nav-container"> <a href="/" class="site-logo"> <svg class="logo-img" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 4L6 13v17a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V13L20 4z" stroke="var(--color-primary-600)" stroke-width="2.5" fill="none"></path> <circle cx="20" cy="23" r="2.5" fill="var(--color-primary-600)"></circle> <path d="M15 19.5a7 7 0 0 1 10 0" stroke="var(--color-primary-600)" stroke-width="2.5" stroke-linecap="round" fill="none"></path> <path d="M11 15.5a12 12 0 0 1 18 0" stroke="var(--color-primary-600)" stroke-width="2.5" stroke-linecap="round" fill="none"></path> <text x="46" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="currentColor">SmartHubb</text> </svg> </a> <button class="mobile-menu-btn" aria-label="Meny" id="mobile-menu-btn"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M3 12h18M3 6h18M3 18h18"></path> </svg> </button> <ul class="nav-links" id="nav-links"> <li><a href="/"', '>Hem</a></li> <li><a href="/blog"', '>Guider</a></li> <li><a href="/om-oss"', '>Om oss</a></li> <li> <a href="/sok"', ' aria-label="S\xF6k"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.35-4.35"></path> </svg> <span class="nav-search-text">S\xF6k</span> </a> </li> <li> <button id="theme-toggle" class="theme-toggle" aria-label="V\xE4xla m\xF6rkt/ljust l\xE4ge"> <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <circle cx="12" cy="12" r="5"></circle> <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path> </svg> <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg> </button> </li> </ul> </nav> </header> <main> ', ' </main> <footer class="site-footer"> <div class="container"> <div class="footer-grid"> <div class="footer-brand"> <div class="footer-logo"> <svg class="footer-logo-img" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 4L6 13v17a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V13L20 4z" stroke="var(--color-primary-500)" stroke-width="2.5" fill="none"></path> <circle cx="20" cy="23" r="2.5" fill="var(--color-primary-500)"></circle> <path d="M15 19.5a7 7 0 0 1 10 0" stroke="var(--color-primary-500)" stroke-width="2.5" stroke-linecap="round" fill="none"></path> <path d="M11 15.5a12 12 0 0 1 18 0" stroke="var(--color-primary-500)" stroke-width="2.5" stroke-linecap="round" fill="none"></path> <text x="46" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="currentColor">SmartHubb</text> </svg> </div> <p class="footer-description">\nTips och guider f\xF6r dig som vill bygga smart hem med Home Assistant.\n</p> </div> <div> <h4 class="footer-column-title">Guider</h4> <ul class="footer-links"> <li><a href="/blog">Alla guider</a></li> <li><a href="/kategori/home-assistant">Home Assistant</a></li> <li><a href="/kategori/zigbee">Zigbee</a></li> <li><a href="/kategori/matter">Matter</a></li> </ul> </div> <div> <h4 class="footer-column-title">Kategorier</h4> <ul class="footer-links"> <li><a href="/kategori/belysning">Belysning</a></li> <li><a href="/kategori/sakerhet">S\xE4kerhet</a></li> <li><a href="/kategori/klimat">Klimat</a></li> <li><a href="/kategori/underhallning">Underh\xE5llning</a></li> </ul> </div> <div> <h4 class="footer-column-title">Information</h4> <ul class="footer-links"> <li><a href="/om-oss">Om oss</a></li> <li><a href="/kontakt">Kontakt</a></li> <li><a href="/integritetspolicy">Integritetspolicy</a></li> </ul> </div> </div> <div class="footer-bottom"> <p class="footer-copyright">\n&copy; ', ' SmartHubb.se. Alla r\xE4ttigheter f\xF6rbeh\xE5llna.\n</p> <div class="footer-social"> <a href="#" aria-label="Facebook"> <svg viewBox="0 0 24 24" fill="currentColor"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <a href="#" aria-label="YouTube"> <svg viewBox="0 0 24 24" fill="currentColor"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> </svg> </a> </div> </div> </div> </footer> <!-- Back to top button --> <button id="back-to-top" class="back-to-top" aria-label="Tillbaka till toppen"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M18 15l-6-6-6 6"></path> </svg> </button> <!-- Cookie consent banner --> <div id="cookie-banner" class="cookie-banner" hidden> <div class="cookie-content"> <p>Vi anv\xE4nder cookies f\xF6r att f\xF6rb\xE4ttra din upplevelse p\xE5 SmartHubb.se. Genom att forts\xE4tta godk\xE4nner du v\xE5r <a href="/integritetspolicy">integritetspolicy</a>.</p> <div class="cookie-buttons"> <button id="cookie-accept" class="btn btn-primary btn-sm">Godk\xE4nn</button> <button id="cookie-decline" class="btn btn-secondary btn-sm">Avb\xF6j</button> </div> </div> </div>  </body> </html>'])), addAttribute(canonicalURL, "href"), title, siteName, addAttribute(`${title} | ${siteName}`, "content"), addAttribute(description || siteDescription, "content"), addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description || siteDescription, "content"), addAttribute(new URL(image || defaultImage, Astro2.site), "content"), addAttribute(siteName, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description || siteDescription, "content"), addAttribute(new URL(image || defaultImage, Astro2.site), "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "description": siteDescription,
    "url": Astro2.site?.toString() || "https://smarthubb.se",
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": new URL("/SmartHubbLogo.svg", Astro2.site).toString()
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": new URL("/sok?q={search_term_string}", Astro2.site).toString()
      },
      "query-input": "required name=search_term_string"
    }
  })), renderSlot($$result, $$slots["structured-data"]), renderSlot($$result, $$slots["head"]), renderHead(), addAttribute(currentPath === "/" ? "active" : "", "class"), addAttribute(currentPath.startsWith("/blog") ? "active" : "", "class"), addAttribute(currentPath === "/om-oss" ? "active" : "", "class"), addAttribute(`nav-search-link ${currentPath === "/sok" ? "active" : ""}`, "class"), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear());
}, "C:/Users/pontus.oberg/Desktop/Claude/smarthubb/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };

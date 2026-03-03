import"./hoisted.DahsVtqp.js";document.querySelectorAll(".share-copy").forEach(e=>{e.addEventListener("click",async()=>{const t=e.getAttribute("data-url");if(t)try{await navigator.clipboard.writeText(t),e.classList.add("copied");const r=e.innerHTML;e.innerHTML=`
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Kopierad!
          `,setTimeout(()=>{e.classList.remove("copied"),e.innerHTML=r},2e3)}catch(r){console.error("Failed to copy:",r)}})});function i(){const t=document.documentElement.getAttribute("data-theme")==="dark"?"dark":"light",r=document.querySelector("iframe.giscus-frame");r&&r.contentWindow?.postMessage({giscus:{setConfig:{theme:t}}},"https://giscus.app")}const o=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="data-theme"&&i()})});o.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});

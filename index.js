import{a as S,S as q,i}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&p(l)}).observe(document,{childList:!0,subtree:!0});function m(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(o){if(o.ep)return;o.ep=!0;const s=m(o);fetch(o.href,s)}})();const M="49743033-5279597e0b6160ec8a63a5c3f";async function h(e,t){return(await S("https://pixabay.com/api/",{params:{key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const y=document.querySelector(".gallery"),g=document.querySelector(".loader");let r=null;function P(e){const t=e.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${t}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${e.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${e.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${e.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${e.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function v(e){const t=e.map(P).join("");y.insertAdjacentHTML("beforeend",t),r?r.refresh():r=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function j(){y.innerHTML="",r&&(r.destroy(),r=null)}function L(){g.classList.remove("hidden")}function b(){g.classList.add("hidden")}function I(){const e=document.querySelector(".gallery-item");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({left:0,top:t*3,behavior:"smooth"})}}function w(){const e=document.querySelector(".load-more-hidden, .js-load-more");e&&(e.classList.remove("load-more-hidden"),e.classList.add("js-load-more"))}function f(){const e=document.querySelector(".js-load-more, .load-more-hidden");e&&(e.classList.remove("js-load-more"),e.classList.add("load-more-hidden"))}const R=document.querySelector(".form"),c=document.querySelector("input"),d=document.querySelector(".load-more-hidden, .js-load-more");let a=1,n="",u=0;R.addEventListener("submit",E);d.addEventListener("click",$);f();async function E(e){if(e.preventDefault(),n=c.value.trim(),a=1,!n){i.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),c.focus();return}L(),j(),f();try{const t=await h(n,a);if(!t.hits||t.hits.length===0){i.warning({position:"topRight",title:"Warning",message:"Sorry, no images found. Please try another query!"});return}u=Math.ceil(t.totalHits/15),v(t.hits),a<u&&w()}catch(t){i.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",t)}finally{b(),c.value=""}}async function $(){a++,d.disabled=!0,f(),L();try{const e=await h(n,a);v(e.hits),I(),a<u?w():i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(e){i.error({position:"topRight",title:"Error",message:e.message})}finally{b(),d.disabled=!1}}
//# sourceMappingURL=index.js.map

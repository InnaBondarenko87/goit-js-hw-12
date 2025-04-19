import{a as L,S as b,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const w="49743033-5279597e0b6160ec8a63a5c3f";async function p(e,t){return await L("https://pixabay.com/api/?",{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:16,page:t}})}const m=document.querySelector(".gallery"),h=document.querySelector(".loader");let i=null;function S(e){const t=e.tags.split(",").slice(0,3).join(", ");return`
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
    `}function g(e){const t=e.map(S).join("");m.insertAdjacentHTML("beforeend",t),i?i.refresh():i=new b(".gallery a",{captionsData:"alt",captionDelay:250})}function j(){m.innerHTML="",i&&(i.destroy(),i=null)}function y(){h.classList.remove("hidden")}function v(){h.classList.add("hidden")}function q(){const e=document.querySelector(".gallery-item");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({left:0,top:t*3,behavior:"smooth"})}}const P=document.querySelector(".form"),u=document.querySelector("input"),a=document.querySelector(".js-load-more");let n=1,c="";P.addEventListener("submit",I);a.addEventListener("click",R);a.classList.replace("js-load-more","load-more-hidden");function I(e){if(e.preventDefault(),c=u.value.trim(),n=1,!c){l.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),u.focus();return}y(),j(),a.classList.replace("js-load-more","load-more-hidden"),p(c,n).then(t=>{const r=t.data;if(!r.hits||r.hits.length===0){l.warning({position:"topRight",title:"Warning",message:"Sorry, no images found. Please try another query!"});return}r.hits.length<r.totalHits?a.classList.replace("load-more-hidden","js-load-more"):a.classList.replace("js-load-more","load-more-hidden"),g(r.hits)}).catch(t=>{l.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",t)}).finally(()=>{v(),u.value=""})}async function R(){n++,a.disabled=!0,a.classList.replace("js-load-more","load-more-hidden"),y();try{const t=(await p(c,n)).data;g(t.hits),q();const r=Math.ceil(t.totalHits/15);n>=r?l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):a.classList.replace("load-more-hidden","js-load-more")}catch(e){l.error({position:"topRight",title:"Error",message:e.message})}finally{v(),a.disabled=!1}}
//# sourceMappingURL=index.js.map

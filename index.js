import{a as d,S as p,i as o}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const m="49743033-5279597e0b6160ec8a63a5c3f";async function h(t,r){return await d("https://pixabay.com/api/?",{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:16,page:r}})}const u=document.querySelector(".gallery"),f=document.querySelector(".loader");let a=null;function g(t){const r=t.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${r}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${t.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${t.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${t.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${t.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function y(t){const r=t.map(g).join("");u.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function v(){u.innerHTML="",a&&(a.destroy(),a=null)}function L(){f.classList.remove("hidden")}function b(){f.classList.add("hidden")}const w=document.querySelector(".form"),l=document.querySelector("input");w.addEventListener("submit",S);function S(t){t.preventDefault();const r=l.value.trim();if(!r){o.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),l.focus();return}L(),v(),h(r).then(i=>i.data).then(i=>{if(!i.hits||i.hits.length===0){o.warning({position:"topRight",title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}y(i.hits)}).catch(i=>{o.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",i)}).finally(()=>{b(),l.value=""})}
//# sourceMappingURL=index.js.map

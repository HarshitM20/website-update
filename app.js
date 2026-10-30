(function(){
var top=document.querySelector(".top"),bg=document.querySelector(".burger");
if(bg)bg.onclick=function(){var o=top.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
var onS=function(){top.classList.toggle("scrolled",window.scrollY>12)};onS();window.addEventListener("scroll",onS,{passive:true});
var hc=document.querySelector(".hero2 .hgrid>div:first-child");if(hc)[].forEach.call(hc.children,function(k,i){k.style.setProperty("--i",i)});
[".cards",".steps",".facts",".duo",".chips",".perks"].forEach(function(q){[].forEach.call(document.querySelectorAll(q),function(c){[].forEach.call(c.children,function(k,i){k.style.setProperty("--d",i);k.classList.add("rv")})})});
var rv=[].slice.call(document.querySelectorAll(".rv"));
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});rv.forEach(function(el){io.observe(el)})}else{rv.forEach(function(el){el.classList.add("in")})}
var wood="repeating-linear-gradient(90deg,#8a5a34 0 18px,#7a4d2b 18px 33px,#94623a 33px 52px)";
var F=[["Teak",wood],["Walnut","repeating-linear-gradient(90deg,#4a2f1e 0 16px,#3a2415 16px 30px)"],["Oak","repeating-linear-gradient(90deg,#c9a173 0 16px,#b58a5c 16px 31px)"],["Ivory","linear-gradient(90deg,#f2eee5,#e0dacd)"],["Slate","linear-gradient(90deg,#5b6165,#474c50)"]];
var leaf=document.getElementById("leaf"),box=document.getElementById("sws"),nm=document.getElementById("fname");
if(leaf&&box){F.forEach(function(f,i){var b=document.createElement("button");b.type="button";b.className="sw2";b.style.setProperty("--finish",f[1]);b.setAttribute("aria-label",f[0]);
b.onclick=function(){pick(i,true)};box.appendChild(b)});
function pick(i,a){if(a&&leaf.animate)leaf.animate([{opacity:.25,transform:"scale(.97)"},{opacity:1,transform:"none"}],{duration:520,easing:"cubic-bezier(.22,.7,.2,1)"});leaf.style.setProperty("--finish",F[i][1]);nm.textContent=F[i][0]+" finish";[].forEach.call(box.children,function(b,j){b.setAttribute("aria-pressed",j===i?"true":"false")})}pick(0)}
var qf=document.getElementById("qf");
if(qf)qf.addEventListener("submit",function(){if(!qf.querySelector(".ok")){var p=document.createElement("p");p.className="ok";p.textContent="Opening WhatsApp with your message…";qf.appendChild(p)}});
})();
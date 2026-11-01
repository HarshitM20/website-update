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
(function(){
var grid=document.getElementById("dgrid");if(!grid)return;
var cards=[].slice.call(grid.querySelectorAll(".dcard")),f="all",q="";
var cnt=document.getElementById("dcount"),none=document.getElementById("dnone");
function apply(){var n=0;cards.forEach(function(c){var ok=(f==="all"||c.dataset.cat===f)&&(!q||c.dataset.code.toLowerCase().indexOf(q)>-1);c.hidden=!ok;if(ok)n++});cnt.textContent="Showing "+n+" design"+(n===1?"":"s");none.hidden=n>0}
var pills=[].slice.call(document.querySelectorAll(".pill"));
pills.forEach(function(p){p.onclick=function(){f=p.dataset.f;pills.forEach(function(o){o.classList.toggle("on",o===p)});apply()}});
document.getElementById("dq").addEventListener("input",function(e){q=e.target.value.trim().toLowerCase().replace(/^rd[\s-]*/,"");apply()});
var lb=document.getElementById("lb"),vis=[],idx=0;
function show(i){idx=(i+vis.length)%vis.length;var c=vis[idx],code=c.dataset.code,lab=c.dataset.label,im=document.getElementById("lbimg");
im.src=c.querySelector("img").src;im.alt="Door design "+code;document.getElementById("lbcode").textContent=code;document.getElementById("lbcat").textContent=lab;var mt=c.dataset.size?"Available size: "+c.dataset.size+(c.dataset.finish?"  ·  Finish: "+c.dataset.finish:""):"";var me=document.getElementById("lbmeta");me.textContent=mt;me.hidden=!mt;
document.getElementById("lbwa").href="https://wa.me/919989536746?text="+encodeURIComponent("Hello Rudra Agencies, I am interested in design "+code+" ("+lab+") from your catalogue. Please share price and availability.")}
grid.addEventListener("click",function(e){var c=e.target.closest(".dcard");if(!c)return;vis=cards.filter(function(x){return !x.hidden});idx=vis.indexOf(c);show(idx);lb.showModal()});
document.getElementById("lbprev").onclick=function(){show(idx-1)};document.getElementById("lbnext").onclick=function(){show(idx+1)};
lb.querySelector(".lbx").onclick=function(){lb.close()};
lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});
document.addEventListener("keydown",function(e){if(!lb.open)return;if(e.key==="ArrowLeft")show(idx-1);if(e.key==="ArrowRight")show(idx+1)});
})();

(function(){
var box=document.getElementById("hdoor");if(!box)return;
var imgs=[].slice.call(box.querySelectorAll(".hd")),tabs=[].slice.call(document.querySelectorAll(".dtab")),nm=document.getElementById("fname"),nt=document.getElementById("fnote"),cur=0,t;
function go(i){cur=i;imgs.forEach(function(m,j){m.classList.toggle("on",j===i)});tabs.forEach(function(b,j){b.classList.toggle("on",j===i);b.setAttribute("aria-selected",j===i?"true":"false")});nm.textContent=tabs[i].textContent;nt.textContent="Catalogue design "+tabs[i].dataset.code}
function auto(){clearInterval(t);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)t=setInterval(function(){go((cur+1)%imgs.length)},4500)}
tabs.forEach(function(b,i){b.onclick=function(){go(i);auto()}});
var st=box.parentNode;st.addEventListener("mouseenter",function(){clearInterval(t)});st.addEventListener("mouseleave",auto);
auto();
})();

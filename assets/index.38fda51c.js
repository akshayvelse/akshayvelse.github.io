const _e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(l){if(l.ep)return;l.ep=!0;const r=i(l);fetch(l.href,r)}};_e();function I(){}function xe(e){return e()}function Wt(){return Object.create(null)}function ft(e){e.forEach(xe)}function ke(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let vt;function Ht(e,t){return vt||(vt=document.createElement("a")),vt.href=t,e===vt.href}function $e(e){return Object.keys(e).length===0}function je(e,...t){if(e==null)return I;const i=e.subscribe(...t);return i.unsubscribe?()=>i.unsubscribe():i}function ze(e,t,i){e.$$.on_destroy.push(je(t,i))}function a(e,t){e.appendChild(t)}function S(e,t,i){e.insertBefore(t,i||null)}function z(e){e.parentNode.removeChild(e)}function K(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function c(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function x(){return L(" ")}function Se(){return L("")}function at(e,t,i,n){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i,n)}function o(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function Mt(e,t,i){t in e?e[t]=typeof e[t]=="boolean"&&i===""?!0:i:o(e,t,i)}function Ae(e){return Array.from(e.childNodes)}let Pt;function dt(e){Pt=e}const pt=[],Rt=[],yt=[],Gt=[],Ce=Promise.resolve();let Lt=!1;function Me(){Lt||(Lt=!0,Ce.then(ve))}function It(e){yt.push(e)}const Tt=new Set;let wt=0;function ve(){const e=Pt;do{for(;wt<pt.length;){const t=pt[wt];wt++,dt(t),Te(t.$$)}for(dt(null),pt.length=0,wt=0;Rt.length;)Rt.pop()();for(let t=0;t<yt.length;t+=1){const i=yt[t];Tt.has(i)||(Tt.add(i),i())}yt.length=0}while(pt.length);for(;Gt.length;)Gt.pop()();Lt=!1,Tt.clear(),dt(e)}function Te(e){if(e.fragment!==null){e.update(),ft(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(It)}}const _t=new Set;let Le;function G(e,t){e&&e.i&&(_t.delete(e),e.i(t))}function Q(e,t,i,n){if(e&&e.o){if(_t.has(e))return;_t.add(e),Le.c.push(()=>{_t.delete(e),n&&(i&&e.d(1),n())}),e.o(t)}}function tt(e){e&&e.c()}function J(e,t,i,n){const{fragment:l,on_mount:r,on_destroy:p,after_update:s}=e.$$;l&&l.m(t,i),n||It(()=>{const d=r.map(xe).filter(ke);p?p.push(...d):ft(d),e.$$.on_mount=[]}),s.forEach(It)}function V(e,t){const i=e.$$;i.fragment!==null&&(ft(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Ie(e,t){e.$$.dirty[0]===-1&&(pt.push(e),Me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,i,n,l,r,p,s=[-1]){const d=Pt;dt(e);const f=e.$$={fragment:null,ctx:null,props:r,update:I,not_equal:l,bound:Wt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:Wt(),dirty:s,skip_bound:!1,root:t.target||d.$$.root};p&&p(f.root);let h=!1;if(f.ctx=i?i(e,t.props||{},(m,v,...b)=>{const _=b.length?b[0]:v;return f.ctx&&l(f.ctx[m],f.ctx[m]=_)&&(!f.skip_bound&&f.bound[m]&&f.bound[m](_),h&&Ie(e,m)),v}):[],f.update(),h=!0,ft(f.before_update),f.fragment=n?n(f.ctx):!1,t.target){if(t.hydrate){const m=Ae(t.target);f.fragment&&f.fragment.l(m),m.forEach(z)}else f.fragment&&f.fragment.c();t.intro&&G(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),ve()}dt(d)}class Y{$destroy(){V(this,1),this.$destroy=I}$on(t,i){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(i),()=>{const l=n.indexOf(i);l!==-1&&n.splice(l,1)}}$set(t){this.$$set&&!$e(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function Ue(e,t=I){let i;const n=new Set;function l(s){if(W(e,s)&&(e=s,i)){const d=!nt.length;for(const f of n)f[1](),nt.push(f,e);if(d){for(let f=0;f<nt.length;f+=2)nt[f][0](nt[f+1]);nt.length=0}}}function r(s){l(s(e))}function p(s,d=I){const f=[s,d];return n.add(f),n.size===1&&(i=t(l)||I),s(e),()=>{n.delete(f),n.size===0&&(i(),i=null)}}return{set:l,update:r,subscribe:p}}const we=Ue({about:"active",resume:"deactive",portfolio:"deactive",blog:"deactive",contact:"deactive"}),Ut=["all","web design","mobile application","software design"],Jt=[{datacategory:"web design",src:"/images/project-6.png",alt:"Project 6",target:"https://github.com/FISAT-PROJECTS/keam-project"},{datacategory:"web design",src:"/images/project-5.png",alt:"Project 5",target:"https://github.com/Co-Science/tele-go-m"},{datacategory:"mobile application",src:"/images/project-4.png",alt:"Project 4",target:"https://github.com/HackOnTheWay"},{datacategory:"mobile application",src:"/images/project-3.png",alt:"Project 3",target:""},{datacategory:"software design",src:"/images/project-2.png",alt:"Project 2",target:""},{datacategory:"software design",src:"/images/project-1.png",alt:"Project 1",target:""}],X={name:"Akshay M V",email:"akshayvelse75@gmail.com",mobile:"+91 9074706319",role:"UI UX Designer",linkedin:"https://www.linkedin.com/in/akshay-m-v/",behance:"http://www.behance.net/akshay_mv",instagram:"https://www.instagram.com/penskape/",location:"Kochi, Kerala, India"},Vt=[{name:"Google UX Design Profesional Certificate",shortname:"Google",location:"Coursera",start:"2020",end:"Ongoing",description:"Foundational UX concepts, like user-centered design, accessibility, and equity-focused design",url:"http://www.ihrd.ac.in/index.php/institutions/technical-higher-secondary-school/216-technical-higher-secondary-school-kallor"},{name:"Federal Institute of Science And Technology",shortname:"FISAT",location:"Angamaly",start:"2019",end:"2023",description:"B.Tech in Civil Engineering",url:"https://www.fisat.ac.in/"},{name:"Model Technical Higher Secondary School",shortname:"MTHSS",location:"Kaloor",start:"2017",end:"2019",description:"High School with major in Computer Science",url:"https://www.coursera.org/professional-certificates/google-ux-design?action=enroll"}],Zt=[{name:"Freelance Graphic Designing",location:"Online & Offline",role:"Designer",type:"Freelance",start:"4/20",end:"present",description:["Designed various vector and digital illustrations for friends and public customers."]}],Yt=[{src:"/images/icon-design.svg",alt:"design icon",title:"Web design",desc:"The most modern and high-quality design made at a professional level."},{src:"/images/icon-dev.svg",alt:"Web development icon",title:"Software Design",desc:"Software designs at the professional level in Windows and Mac platforms."},{src:"/images/icon-photo.svg",alt:"camera icon",title:"Graphic Design",desc:"Professional graphic designs and quality digital illustrations."},{src:"/images/icon-app.svg",alt:"mobile app icon",title:"Mobile Application Design",desc:"Design of User-centered applications for iOS and Android."}],He=[{name:"Adobe illustrator"},{name:"Adobe XD"},{name:"Adobe Photoshop"},{name:"Adobe After Effects"},{name:"Figma"},{name:"VS Code"}],Qt=[{name:"UI/UX design"},{name:"Interaction design"},{name:"User research"},{name:"Basic HTML,CSS"},{name:"Rapid prototyping"},{name:"Usability testing"},{name:"Wireframing"},{name:"Design sprints"},{name:"Usability testing"},{name:"UX Writing"},{name:"A/B testing"},{name:"User journey mapping"},{name:"Design system design"}];function te(e,t,i){const n=e.slice();return n[0]=t[i],n}function ee(e){let t,i,n,l,r,p,s,d,f=e[0].title+"",h,m,v,b=e[0].desc+"",_,M;return{c(){t=c("li"),i=c("div"),n=c("img"),p=x(),s=c("div"),d=c("h4"),h=L(f),m=x(),v=c("p"),_=L(b),M=x(),Ht(n.src,l=e[0].src)||o(n,"src",l),o(n,"alt",r=e[0].alt),o(n,"width","40"),o(i,"class","service-icon-box"),o(d,"class","h4 service-item-title"),o(v,"class","service-item-text"),o(s,"class","service-content-box"),o(t,"class","service-item")},m(j,T){S(j,t,T),a(t,i),a(i,n),a(t,p),a(t,s),a(s,d),a(d,h),a(s,m),a(s,v),a(v,_),a(t,M)},p:I,d(j){j&&z(t)}}}function Pe(e){let t,i,n,l,r=Yt,p=[];for(let s=0;s<r.length;s+=1)p[s]=ee(te(e,r,s));return{c(){t=c("section"),i=c("h3"),i.textContent="What i'm doing",n=x(),l=c("ul");for(let s=0;s<p.length;s+=1)p[s].c();o(i,"class","h3 service-title"),o(l,"class","service-list"),o(t,"class","service")},m(s,d){S(s,t,d),a(t,i),a(t,n),a(t,l);for(let f=0;f<p.length;f+=1)p[f].m(l,null)},p(s,[d]){if(d&0){r=Yt;let f;for(f=0;f<r.length;f+=1){const h=te(s,r,f);p[f]?p[f].p(h,d):(p[f]=ee(h),p[f].c(),p[f].m(l,null))}for(;f<p.length;f+=1)p[f].d(1);p.length=r.length}},i:I,o:I,d(s){s&&z(t),K(p,s)}}}class Ee extends Y{constructor(t){super(),Z(this,t,null,Pe,W,{})}}function De(e){let t,i,n,l,r,p;return r=new Ee({}),{c(){t=c("header"),t.innerHTML='<h2 class="h2 article-title">About me</h2>',i=x(),n=c("section"),n.innerHTML=`<p>I&#39;m a Junior UI UX Designer from Kerala, India, pursuing my career as a User Interface and Interaction Designer. 
    I enjoy turning complex problems into simple, beautiful, and intuitive designs.</p> 

  <p>At first, I was not sure whether to call myself a UI designer or a UX designer. 
But getting to know about the terms I knew that I was equally fascinated by user interactions and the product design. 
So I decided to call myself a UI and UX designer. The very next thing I was trying to find out was the concept of standing out.
How to make my designs stand out? How to make my designs special from others. 
But my experience made me realize that the one and only thing that can make my designs special is me. 
I am the only person who can make my designs stand out, by adding my individual essence to my work. Up to this point, 
I firmly believe in this principle. 
All of my designs contain a specific essence by which no other designs will ever replicate, the essence of me.</p>`,l=x(),tt(r.$$.fragment),o(n,"class","about-text")},m(s,d){S(s,t,d),S(s,i,d),S(s,n,d),S(s,l,d),J(r,s,d),p=!0},p:I,i(s){p||(G(r.$$.fragment,s),p=!0)},o(s){Q(r.$$.fragment,s),p=!1},d(s){s&&z(t),s&&z(i),s&&z(n),s&&z(l),V(r,s)}}}class Oe extends Y{constructor(t){super(),Z(this,t,null,De,W,{})}}function qe(e){let t;return{c(){t=c("button"),t.innerHTML=`<ion-icon name="paper-plane"></ion-icon> 
        <span>Send Message</span>`,o(t,"class","form-btn"),o(t,"type","submit"),t.disabled=!0,o(t,"data-form-btn","")},m(i,n){S(i,t,n)},d(i){i&&z(t)}}}function Fe(e){let t;return{c(){t=c("button"),t.innerHTML=`<ion-icon name="paper-plane"></ion-icon> 
        <span>Send Message</span>`,o(t,"class","form-btn"),o(t,"type","submit"),o(t,"data-form-btn","")},m(i,n){S(i,t,n)},d(i){i&&z(t)}}}function Ne(e){let t,i,n,l,r,p,s,d,f,h,m,v,b,_,M,j,T;function U(w,k){return w[3]&&w[4]&&w[5]?Fe:qe}let $=U(e),y=$(e);return{c(){t=c("header"),t.innerHTML='<h2 class="h2 article-title">Contact</h2>',i=x(),n=c("section"),n.innerHTML='<figure><iframe title="google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502964.51010808954!2d76.02072330106692!3d9.982931412200601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1657221279902!5m2!1sen!2sin" width="400" height="300" loading="lazy"></iframe></figure>',l=x(),r=c("section"),p=c("h3"),p.textContent="Lets talk!",s=x(),d=c("form"),f=c("div"),h=c("input"),m=x(),v=c("input"),b=x(),_=c("textarea"),M=x(),y.c(),o(n,"class","mapbox"),o(n,"data-mapbox",""),o(p,"class","h3 form-title"),h.value=e[1],o(h,"type","text"),o(h,"name","fullname"),o(h,"class","form-input"),o(h,"placeholder","Full name"),h.required=!0,o(h,"data-form-input",""),v.value=e[0],o(v,"type","email"),o(v,"name","email"),o(v,"class","form-input"),o(v,"placeholder","Email address"),v.required=!0,o(v,"data-form-input",""),o(f,"class","input-wrapper"),_.value=e[2],o(_,"name","message"),o(_,"class","form-input"),o(_,"placeholder","Your Message"),_.required=!0,o(_,"data-form-input",""),o(d,"action","contact.php"),o(d,"class","form"),o(d,"data-form",""),o(r,"class","contact-form")},m(w,k){S(w,t,k),S(w,i,k),S(w,n,k),S(w,l,k),S(w,r,k),a(r,p),a(r,s),a(r,d),a(d,f),a(f,h),a(f,m),a(f,v),a(d,b),a(d,_),a(d,M),y.m(d,null),j||(T=[at(h,"input",e[7]),at(v,"input",e[6]),at(_,"input",e[8])],j=!0)},p(w,[k]){k&2&&h.value!==w[1]&&(h.value=w[1]),k&1&&v.value!==w[0]&&(v.value=w[0]),k&4&&(_.value=w[2]),$!==($=U(w))&&(y.d(1),y=$(w),y&&(y.c(),y.m(d,null)))},i:I,o:I,d(w){w&&z(t),w&&z(i),w&&z(n),w&&z(l),w&&z(r),y.d(),j=!1,ft(T)}}}function Xe(e,t,i){let n=null,l=null,r=null,p=!1,s=!1,d=!1;function f(v){i(0,n=v.target.value),n&&!!n.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?i(3,p=!0):i(3,p=!1)}function h(v){i(1,l=v.target.value),l?i(4,s=!0):i(4,s=!1)}function m(v){i(2,r=v.target.value),r?i(5,d=!0):i(5,d=!1)}return[n,l,r,p,s,d,f,h,m]}class Be extends Y{constructor(t){super(),Z(this,t,Xe,Ne,W,{})}}function ie(e,t,i){const n=e.slice();return n[3]=t[i],n}function Ke(e){let t,i,n=e[3]+"",l,r;return{c(){t=c("li"),i=c("button"),l=L(n),r=x(),o(i,"class","navbar-link active"),o(i,"data-nav-link",""),o(t,"class","navbar-item")},m(p,s){S(p,t,s),a(t,i),a(i,l),a(t,r)},p:I,d(p){p&&z(t)}}}function We(e){let t,i,n=e[3]+"",l,r,p,s;return{c(){t=c("li"),i=c("button"),l=L(n),r=x(),o(i,"class","navbar-link"),o(i,"data-nav-link",""),o(t,"class","navbar-item")},m(d,f){S(d,t,f),a(t,i),a(i,l),a(t,r),p||(s=at(i,"click",e[2]),p=!0)},p:I,d(d){d&&z(t),p=!1,s()}}}function ne(e){let t;function i(r,p){return r[3]!==r[0]?We:Ke}let n=i(e),l=n(e);return{c(){l.c(),t=Se()},m(r,p){l.m(r,p),S(r,t,p)},p(r,p){n===(n=i(r))&&l?l.p(r,p):(l.d(1),l=n(r),l&&(l.c(),l.m(t.parentNode,t)))},d(r){l.d(r),r&&z(t)}}}function Re(e){let t,i,n=e[1],l=[];for(let r=0;r<n.length;r+=1)l[r]=ne(ie(e,n,r));return{c(){t=c("nav"),i=c("ul");for(let r=0;r<l.length;r+=1)l[r].c();o(i,"class","navbar-list"),o(t,"class","navbar")},m(r,p){S(r,t,p),a(t,i);for(let s=0;s<l.length;s+=1)l[s].m(i,null)},p(r,[p]){if(p&7){n=r[1];let s;for(s=0;s<n.length;s+=1){const d=ie(r,n,s);l[s]?l[s].p(d,p):(l[s]=ne(d),l[s].c(),l[s].m(i,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=n.length}},i:I,o:I,d(r){r&&z(t),K(l,r)}}}function Ge(e,t,i){let n="About",l=["About","Resume","Portfolio","Contact"];function r(p){we.update(s=>(s[n.toLowerCase()]="deactive",s[p.target.innerText.toLowerCase()]="active",s)),i(0,n=p.target.textContent)}return[n,l,r]}class Je extends Y{constructor(t){super(),Z(this,t,Ge,Re,W,{})}}function ae(e,t,i){const n=e.slice();return n[3]=t[i],n}function oe(e,t,i){const n=e.slice();return n[3]=t[i],n}function le(e){let t,i,n=e[3]+"",l,r,p,s,d;return{c(){t=c("li"),i=c("button"),l=L(n),p=x(),o(i,"class",r=e[0]===e[3]?"active":""),o(i,"data-filter-btn",""),o(t,"class","filter-item")},m(f,h){S(f,t,h),a(t,i),a(i,l),a(t,p),s||(d=at(i,"click",e[1]),s=!0)},p(f,h){h&1&&r!==(r=f[0]===f[3]?"active":"")&&o(i,"class",r)},d(f){f&&z(t),s=!1,d()}}}function re(e){let t,i,n,l,r,p,s,d,f,h,m=e[3].alt+"",v,b,_,M=e[3].datacategory+"",j,T,U,$,y;return{c(){t=c("li"),i=c("a"),n=c("figure"),l=c("div"),l.innerHTML='<ion-icon name="eye-outline"></ion-icon>',r=x(),p=c("img"),f=x(),h=c("h3"),v=L(m),b=x(),_=c("p"),j=L(M),U=x(),o(l,"class","project-item-icon-box"),Ht(p.src,s=e[3].src)||o(p,"src",s),o(p,"alt",d=e[3].alt),o(p,"loading","lazy"),o(n,"class","project-img"),o(h,"class","project-title"),o(_,"class","project-category"),o(i,"href",T=e[3].target!==""?e[3].target:"#"),o(t,"class",$="project-item "+(e[0]==="other"&&!e[2].has(e[3].datacategory)||e[3].datacategory===e[0]||e[0]==="all"?"active":"")),o(t,"data-filter-item",""),o(t,"data-category",y=e[3].datacategory)},m(w,k){S(w,t,k),a(t,i),a(i,n),a(n,l),a(n,r),a(n,p),a(i,f),a(i,h),a(h,v),a(i,b),a(i,_),a(_,j),a(t,U)},p(w,k){k&1&&$!==($="project-item "+(w[0]==="other"&&!w[2].has(w[3].datacategory)||w[3].datacategory===w[0]||w[0]==="all"?"active":""))&&o(t,"class",$)},d(w){w&&z(t)}}}function Ve(e){let t,i,n,l,r,p,s=Ut,d=[];for(let m=0;m<s.length;m+=1)d[m]=le(oe(e,s,m));let f=Jt,h=[];for(let m=0;m<f.length;m+=1)h[m]=re(ae(e,f,m));return{c(){t=c("header"),t.innerHTML='<h2 class="h2 article-title">Portfolio</h2>',i=x(),n=c("section"),l=c("ul");for(let m=0;m<d.length;m+=1)d[m].c();r=x(),p=c("ul");for(let m=0;m<h.length;m+=1)h[m].c();o(l,"class","filter-list"),o(p,"class","project-list"),o(n,"class","projects")},m(m,v){S(m,t,v),S(m,i,v),S(m,n,v),a(n,l);for(let b=0;b<d.length;b+=1)d[b].m(l,null);a(n,r),a(n,p);for(let b=0;b<h.length;b+=1)h[b].m(p,null)},p(m,[v]){if(v&3){s=Ut;let b;for(b=0;b<s.length;b+=1){const _=oe(m,s,b);d[b]?d[b].p(_,v):(d[b]=le(_),d[b].c(),d[b].m(l,null))}for(;b<d.length;b+=1)d[b].d(1);d.length=s.length}if(v&5){f=Jt;let b;for(b=0;b<f.length;b+=1){const _=ae(m,f,b);h[b]?h[b].p(_,v):(h[b]=re(_),h[b].c(),h[b].m(p,null))}for(;b<h.length;b+=1)h[b].d(1);h.length=f.length}},i:I,o:I,d(m){m&&z(t),m&&z(i),m&&z(n),K(d,m),K(h,m)}}}function Ze(e,t,i){let n="all";const l=p=>i(0,n=p.target.innerText.toLowerCase()),r=new Set(Ut);return[n,l,r]}class Ye extends Y{constructor(t){super(),Z(this,t,Ze,Ve,W,{})}}function se(e,t,i){const n=e.slice();return n[1]=t[i],n}function ce(e,t,i){const n=e.slice();return n[1]=t[i],n}function pe(e,t,i){const n=e.slice();return n[1]=t[i],n}function de(e,t,i){const n=e.slice();return n[8]=t[i],n}function fe(e,t,i){const n=e.slice();return n[1]=t[i],n}function me(e){let t,i,n=e[1].name+"",l,r,p,s=e[1].start+"",d,f,h=e[1].end+"",m,v,b,_=e[1].description+"",M,j;return{c(){t=c("li"),i=c("h4"),l=L(n),r=x(),p=c("span"),d=L(s),f=L(" \u2014 "),m=L(h),v=x(),b=c("p"),M=L(_),j=x(),o(i,"class","h4 timeline-item-title"),o(b,"class","timeline-text"),o(t,"class","timeline-item")},m(T,U){S(T,t,U),a(t,i),a(i,l),a(t,r),a(t,p),a(p,d),a(p,f),a(p,m),a(t,v),a(t,b),a(b,M),a(t,j)},p:I,d(T){T&&z(t)}}}function ge(e){let t=e[8]+"",i,n,l;return{c(){i=L(t),n=x(),l=c("br")},m(r,p){S(r,i,p),S(r,n,p),S(r,l,p)},p:I,d(r){r&&z(i),r&&z(n),r&&z(l)}}}function ue(e){let t,i,n=e[1].name+"",l,r,p=e[1].role+"",s,d,f,h=e[1].start+"",m,v,b=e[1].end+"",_,M,j,T,U=e[1].description,$=[];for(let y=0;y<U.length;y+=1)$[y]=ge(de(e,U,y));return{c(){t=c("li"),i=c("h4"),l=L(n),r=L(", "),s=L(p),d=x(),f=c("span"),m=L(h),v=L(" \u2014 "),_=L(b),M=x(),j=c("p");for(let y=0;y<$.length;y+=1)$[y].c();T=x(),o(i,"class","h4 timeline-item-title"),o(j,"class","timeline-text"),o(t,"class","timeline-item")},m(y,w){S(y,t,w),a(t,i),a(i,l),a(i,r),a(i,s),a(t,d),a(t,f),a(f,m),a(f,v),a(f,_),a(t,M),a(t,j);for(let k=0;k<$.length;k+=1)$[k].m(j,null);a(t,T)},p(y,w){if(w&0){U=y[1].description;let k;for(k=0;k<U.length;k+=1){const A=de(y,U,k);$[k]?$[k].p(A,w):($[k]=ge(A),$[k].c(),$[k].m(j,null))}for(;k<$.length;k+=1)$[k].d(1);$.length=U.length}},d(y){y&&z(t),K($,y)}}}function he(e){let t,i,n,l=e[1].name+"",r,p,s,d,f;return{c(){t=c("li"),i=c("div"),n=c("h5"),r=L(l),p=x(),s=c("data"),f=x(),o(n,"class","h5"),o(s,"value",d=e[1].value),o(i,"class","title-wrapper"),o(t,"class","skills-item")},m(h,m){S(h,t,m),a(t,i),a(i,n),a(n,r),a(i,p),a(i,s),a(t,f)},p:I,d(h){h&&z(t)}}}function be(e){let t,i,n,l=e[1].name+"",r,p,s,d,f;return{c(){t=c("li"),i=c("div"),n=c("h5"),r=L(l),p=x(),s=c("data"),f=x(),o(n,"class","h5"),o(s,"value",d=e[1].value),o(i,"class","title-wrapper"),o(t,"class","skills-item")},m(h,m){S(h,t,m),a(t,i),a(i,n),a(n,r),a(i,p),a(i,s),a(t,f)},p:I,d(h){h&&z(t)}}}function Qe(e){let t,i,n,l,r,p,s,d,f,h,m,v,b,_,M,j,T,U,$,y,w,k,A,P=Vt,E=[];for(let g=0;g<P.length;g+=1)E[g]=me(fe(e,P,g));let N=Zt,O=[];for(let g=0;g<N.length;g+=1)O[g]=ue(pe(e,N,g));let B=e[0],D=[];for(let g=0;g<B.length;g+=1)D[g]=he(ce(e,B,g));let F=Qt,H=[];for(let g=0;g<F.length;g+=1)H[g]=be(se(e,F,g));return{c(){t=c("header"),t.innerHTML='<h2 class="h2 article-title">Resume</h2>',i=x(),n=c("section"),l=c("div"),l.innerHTML=`<div class="icon-box"><ion-icon name="book-outline"></ion-icon></div> 

    <h3 class="h3">Education</h3>`,r=x(),p=c("ol");for(let g=0;g<E.length;g+=1)E[g].c();s=x(),d=c("section"),f=c("div"),f.innerHTML=`<div class="icon-box"><ion-icon name="book-outline"></ion-icon></div> 

    <h3 class="h3">Experience</h3>`,h=x(),m=c("ol");for(let g=0;g<O.length;g+=1)O[g].c();v=x(),b=c("section"),_=c("h3"),_.textContent="Software Proficiency",M=x(),j=c("ul");for(let g=0;g<D.length;g+=1)D[g].c();T=x(),U=c("br"),$=x(),y=c("section"),w=c("h3"),w.textContent="My skills",k=x(),A=c("ul");for(let g=0;g<H.length;g+=1)H[g].c();o(l,"class","title-wrapper"),o(p,"class","timeline-list"),o(n,"class","timeline"),o(f,"class","title-wrapper"),o(m,"class","timeline-list"),o(d,"class","timeline"),o(_,"class","h3 skills-title"),o(j,"class","skills-list content-card"),o(b,"class","skill"),o(w,"class","h3 skills-title"),o(A,"class","skills-list content-card"),o(y,"class","skill")},m(g,C){S(g,t,C),S(g,i,C),S(g,n,C),a(n,l),a(n,r),a(n,p);for(let u=0;u<E.length;u+=1)E[u].m(p,null);S(g,s,C),S(g,d,C),a(d,f),a(d,h),a(d,m);for(let u=0;u<O.length;u+=1)O[u].m(m,null);S(g,v,C),S(g,b,C),a(b,_),a(b,M),a(b,j);for(let u=0;u<D.length;u+=1)D[u].m(j,null);S(g,T,C),S(g,U,C),S(g,$,C),S(g,y,C),a(y,w),a(y,k),a(y,A);for(let u=0;u<H.length;u+=1)H[u].m(A,null)},p(g,[C]){if(C&0){P=Vt;let u;for(u=0;u<P.length;u+=1){const q=fe(g,P,u);E[u]?E[u].p(q,C):(E[u]=me(q),E[u].c(),E[u].m(p,null))}for(;u<E.length;u+=1)E[u].d(1);E.length=P.length}if(C&0){N=Zt;let u;for(u=0;u<N.length;u+=1){const q=pe(g,N,u);O[u]?O[u].p(q,C):(O[u]=ue(q),O[u].c(),O[u].m(m,null))}for(;u<O.length;u+=1)O[u].d(1);O.length=N.length}if(C&1){B=g[0];let u;for(u=0;u<B.length;u+=1){const q=ce(g,B,u);D[u]?D[u].p(q,C):(D[u]=he(q),D[u].c(),D[u].m(j,null))}for(;u<D.length;u+=1)D[u].d(1);D.length=B.length}if(C&0){F=Qt;let u;for(u=0;u<F.length;u+=1){const q=se(g,F,u);H[u]?H[u].p(q,C):(H[u]=be(q),H[u].c(),H[u].m(A,null))}for(;u<H.length;u+=1)H[u].d(1);H.length=F.length}},i:I,o:I,d(g){g&&z(t),g&&z(i),g&&z(n),K(E,g),g&&z(s),g&&z(d),K(O,g),g&&z(v),g&&z(b),K(D,g),g&&z(T),g&&z(U),g&&z($),g&&z(y),K(H,g)}}}function ti(e){return[He.sort((i,n)=>parseInt(n.level)-parseInt(i.level))]}class ei extends Y{constructor(t){super(),Z(this,t,ti,Qe,W,{})}}function ii(e){let t,i,n,l,r,p,s,d,f=X.name+"",h,m,v,b,_,M,j,T,U,$,y,w,k,A,P,E,N,O=X.email+"",B,D,F,H,g,C,u,q,ot,ye=X.mobile+"",Et,Dt,et,mt,Ot,it,gt,qt,kt,Ft,$t,Nt,R,ut,lt,jt,Xt,ht,rt,zt,Bt,bt,st,St,xt,At,Kt;return{c(){t=c("aside"),i=c("div"),n=c("figure"),l=c("img"),p=x(),s=c("div"),d=c("h1"),h=L(f),m=x(),v=c("p"),v.textContent=`${X.role}`,b=x(),_=c("button"),_.innerHTML=`<span>Show Contacts</span> 

      <ion-icon name="chevron-down"></ion-icon>`,M=x(),j=c("div"),T=c("div"),U=x(),$=c("ul"),y=c("li"),w=c("div"),w.innerHTML='<ion-icon name="mail-outline"></ion-icon>',k=x(),A=c("div"),P=c("p"),P.textContent="Email",E=x(),N=c("a"),B=L(O),D=x(),F=c("li"),H=c("div"),H.innerHTML='<ion-icon name="phone-portrait-outline"></ion-icon>',g=x(),C=c("div"),u=c("p"),u.textContent="Phone",q=x(),ot=c("a"),Et=L(ye),Dt=x(),et=c("li"),mt=c("div"),mt.innerHTML='<ion-icon name="location-outline"></ion-icon>',Ot=x(),it=c("div"),gt=c("p"),gt.textContent="Location",qt=x(),kt=c("address"),kt.textContent=`${X.location}`,Ft=x(),$t=c("div"),Nt=x(),R=c("ul"),ut=c("li"),lt=c("a"),jt=c("ion-icon"),Xt=x(),ht=c("li"),rt=c("a"),zt=c("ion-icon"),Bt=x(),bt=c("li"),st=c("a"),St=c("ion-icon"),Ht(l.src,r="/images/my-avatar2.png")||o(l,"src",r),o(l,"alt",X.name),o(l,"width","80"),o(n,"class","avatar-box"),o(d,"class","name"),o(d,"title",X.name),o(v,"class","title"),o(s,"class","info-content"),o(_,"class","info_more-btn"),o(_,"data-sidebar-btn",""),o(i,"class","sidebar-info"),o(T,"class","separator"),o(w,"class","icon-box"),o(P,"class","contact-title"),o(N,"href","mailto:"+X.email),o(N,"class","contact-link"),o(A,"class","contact-info"),o(y,"class","contact-item"),o(H,"class","icon-box"),o(u,"class","contact-title"),o(ot,"href","tel:"+e[1]),o(ot,"class","contact-link"),o(C,"class","contact-info"),o(F,"class","contact-item"),o(mt,"class","icon-box"),o(gt,"class","contact-title"),o(it,"class","contact-info"),o(et,"class","contact-item"),o($,"class","contacts-list"),o($t,"class","separator"),Mt(jt,"name","logo-behance"),o(lt,"href",X.behance),o(lt,"class","social-link"),o(ut,"class","social-item"),Mt(zt,"name","logo-instagram"),o(rt,"href",X.instagram),o(rt,"class","social-link"),o(ht,"class","social-item"),Mt(St,"name","logo-linkedin"),o(st,"href",X.linkedin),o(st,"class","social-link"),o(bt,"class","social-item"),o(R,"class","social-list"),o(j,"class","sidebar-info_more"),o(t,"class",xt="sidebar "+e[0]),o(t,"data-sidebar","")},m(ct,Ct){S(ct,t,Ct),a(t,i),a(i,n),a(n,l),a(i,p),a(i,s),a(s,d),a(d,h),a(s,m),a(s,v),a(i,b),a(i,_),a(t,M),a(t,j),a(j,T),a(j,U),a(j,$),a($,y),a(y,w),a(y,k),a(y,A),a(A,P),a(A,E),a(A,N),a(N,B),a($,D),a($,F),a(F,H),a(F,g),a(F,C),a(C,u),a(C,q),a(C,ot),a(ot,Et),a($,Dt),a($,et),a(et,mt),a(et,Ot),a(et,it),a(it,gt),a(it,qt),a(it,kt),a(j,Ft),a(j,$t),a(j,Nt),a(j,R),a(R,ut),a(ut,lt),a(lt,jt),a(R,Xt),a(R,ht),a(ht,rt),a(rt,zt),a(R,Bt),a(R,bt),a(bt,st),a(st,St),At||(Kt=at(_,"click",e[2]),At=!0)},p(ct,[Ct]){Ct&1&&xt!==(xt="sidebar "+ct[0])&&o(t,"class",xt)},i:I,o:I,d(ct){ct&&z(t),At=!1,Kt()}}}function ni(e,t,i){let n=X.mobile.replaceAll("-","").replaceAll(" ","").replace(")","").replace("(",""),l="active";return[l,n,()=>{l=="active"?i(0,l=""):i(0,l="active")}]}class ai extends Y{constructor(t){super(),Z(this,t,ni,ii,W,{})}}function oi(e){let t,i,n,l,r,p,s,d,f,h,m,v,b,_,M,j,T,U,$,y,w,k;return i=new ai({}),r=new Je({}),d=new Oe({}),v=new ei({}),j=new Ye({}),y=new Be({}),{c(){t=c("main"),tt(i.$$.fragment),n=x(),l=c("div"),tt(r.$$.fragment),p=x(),s=c("article"),tt(d.$$.fragment),h=x(),m=c("article"),tt(v.$$.fragment),_=x(),M=c("article"),tt(j.$$.fragment),U=x(),$=c("article"),tt(y.$$.fragment),o(s,"class",f="about "+e[0].about),o(s,"data-page","about"),o(m,"class",b="resume "+e[0].resume),o(m,"data-page","resume"),o(M,"class",T="portfolio "+e[0].portfolio),o(M,"data-page","portfolio"),o($,"class",w="contact "+e[0].contact),o($,"data-page","contact"),o(l,"class","main-content")},m(A,P){S(A,t,P),J(i,t,null),a(t,n),a(t,l),J(r,l,null),a(l,p),a(l,s),J(d,s,null),a(l,h),a(l,m),J(v,m,null),a(l,_),a(l,M),J(j,M,null),a(l,U),a(l,$),J(y,$,null),k=!0},p(A,[P]){(!k||P&1&&f!==(f="about "+A[0].about))&&o(s,"class",f),(!k||P&1&&b!==(b="resume "+A[0].resume))&&o(m,"class",b),(!k||P&1&&T!==(T="portfolio "+A[0].portfolio))&&o(M,"class",T),(!k||P&1&&w!==(w="contact "+A[0].contact))&&o($,"class",w)},i(A){k||(G(i.$$.fragment,A),G(r.$$.fragment,A),G(d.$$.fragment,A),G(v.$$.fragment,A),G(j.$$.fragment,A),G(y.$$.fragment,A),k=!0)},o(A){Q(i.$$.fragment,A),Q(r.$$.fragment,A),Q(d.$$.fragment,A),Q(v.$$.fragment,A),Q(j.$$.fragment,A),Q(y.$$.fragment,A),k=!1},d(A){A&&z(t),V(i),V(r),V(d),V(v),V(j),V(y)}}}function li(e,t,i){let n;return ze(e,we,l=>i(0,n=l)),[n]}class ri extends Y{constructor(t){super(),Z(this,t,li,oi,W,{})}}new ri({target:document.getElementById("app")});

import{A as Re,a as Ee,d as I,e as ot,f as x,q as at,z as ct}from"./chunk-WUROQ357.js";import{$ as K,B as ze,Ba as ge,Ca as ye,Da as Ye,G as Ue,Ga as U,Ka as B,M as ue,Ma as V,Na as qe,P as he,Q as fe,R as Be,S as T,Tb as et,U as _,Ua as W,Ub as tt,V as z,Va as Ke,Vb as nt,X as w,Z as h,_ as d,a as F,aa as Ve,ab as Qe,ac as _e,b as Le,ba as We,bb as ve,bc as rt,c as Fe,ca as $e,cc as it,dc as E,f as C,fc as Q,i as S,ic as st,kc as we,l as je,lc as ee,m as A,ma as Ge,oa as R,pa as pe,q as j,ra as Xe,sa as Ze,wa as Je,xa as me,y as P,ya as He,z as de,za as O}from"./chunk-MJLH2B47.js";var G=class{},re=class{},D=class r{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),s=e.slice(n+1).trim();this.addHeaderEntry(i,s)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof r?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new r;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof r?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let i=(t.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let s=t.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(c=>s.indexOf(c)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(s=>s.toString()),i=t.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var be=class{encodeKey(t){return lt(t)}encodeValue(t){return lt(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function zt(r,t){let e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(i=>{let s=i.indexOf("="),[o,c]=s==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,s)),t.decodeValue(i.slice(s+1))],a=e.get(o)||[];a.push(c),e.set(o,a)}),e}var Ut=/%(\d[a-f0-9])/gi,Bt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function lt(r){return encodeURIComponent(r).replace(Ut,(t,e)=>Bt[e]??t)}function te(r){return`${r}`}var M=class r{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new be,t.fromString){if(t.fromObject)throw new T(2805,!1);this.map=zt(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],i=Array.isArray(n)?n.map(te):[te(n)];this.map.set(e,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let i=t[n];Array.isArray(i)?i.forEach(s=>{e.push({param:n,value:s,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new r({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(te(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],i=n.indexOf(te(t.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Se=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function Vt(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function dt(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function ut(r){return typeof Blob<"u"&&r instanceof Blob}function ht(r){return typeof FormData<"u"&&r instanceof FormData}function Wt(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}var ft="Content-Type",pt="Accept",vt="X-Request-URL",_t="text/plain",wt="application/json",$t=`${wt}, ${_t}, */*`,$=class r{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(t,e,n,i){this.url=e,this.method=t.toUpperCase();let s;if(Vt(this.method)||i?(this.body=n!==void 0?n:null,s=i):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new D,this.context??=new Se,!this.params)this.params=new M,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let c=e.indexOf("?"),a=c===-1?"?":c<e.length-1?"&":"";this.urlWithParams=e+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||dt(this.body)||ut(this.body)||ht(this.body)||Wt(this.body)?this.body:this.body instanceof M?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ht(this.body)?null:ut(this.body)?this.body.type||null:dt(this.body)?null:typeof this.body=="string"?_t:this.body instanceof M?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?wt:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,i=t.responseType||this.responseType,s=t.transferCache??this.transferCache,o=t.body!==void 0?t.body:this.body,c=t.withCredentials??this.withCredentials,a=t.reportProgress??this.reportProgress,l=t.headers||this.headers,u=t.params||this.params,g=t.context??this.context;return t.setHeaders!==void 0&&(l=Object.keys(t.setHeaders).reduce((y,m)=>y.set(m,t.setHeaders[m]),l)),t.setParams&&(u=Object.keys(t.setParams).reduce((y,m)=>y.set(m,t.setParams[m]),u)),new r(e,n,o,{params:u,headers:l,context:g,reportProgress:a,responseType:i,withCredentials:c,transferCache:s})}},k=function(r){return r[r.Sent=0]="Sent",r[r.UploadProgress=1]="UploadProgress",r[r.ResponseHeader=2]="ResponseHeader",r[r.DownloadProgress=3]="DownloadProgress",r[r.Response=4]="Response",r[r.User=5]="User",r}(k||{}),X=class{headers;status;statusText;url;ok;type;constructor(t,e=200,n="OK"){this.headers=t.headers||new D,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},Me=class r extends X{constructor(t={}){super(t)}type=k.ResponseHeader;clone(t={}){return new r({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},N=class r extends X{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=k.Response;clone(t={}){return new r({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},ie=class extends X{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},Gt=200,Xt=204;function Te(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials,transferCache:r.transferCache}}var Zt=(()=>{class r{handler;constructor(e){this.handler=e}request(e,n,i={}){let s;if(e instanceof $)s=e;else{let a;i.headers instanceof D?a=i.headers:a=new D(i.headers);let l;i.params&&(i.params instanceof M?l=i.params:l=new M({fromObject:i.params})),s=new $(e,n,i.body!==void 0?i.body:null,{headers:a,context:i.context,params:l,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=A(s).pipe(ze(a=>this.handler.handle(a)));if(e instanceof $||i.observe==="events")return o;let c=o.pipe(P(a=>a instanceof N));switch(i.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return c.pipe(j(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new T(2806,!1);return a.body}));case"blob":return c.pipe(j(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new T(2807,!1);return a.body}));case"text":return c.pipe(j(a=>{if(a.body!==null&&typeof a.body!="string")throw new T(2808,!1);return a.body}));case"json":default:return c.pipe(j(a=>a.body))}case"response":return c;default:throw new T(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new M().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,Te(i,n))}post(e,n,i={}){return this.request("POST",e,Te(i,n))}put(e,n,i={}){return this.request("PUT",e,Te(i,n))}static \u0275fac=function(n){return new(n||r)(h(G))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})();var Jt=new w("");function Ht(r,t){return t(r)}function Yt(r,t,e){return(n,i)=>$e(e,()=>t(n,s=>r(s,i)))}var Et=new w(""),Rt=new w(""),qt=new w("",{providedIn:"root",factory:()=>!0});var mt=(()=>{class r extends G{backend;injector;chain=null;pendingTasks=d(Ge);contributeToStability=d(qt);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Et),...this.injector.get(Rt,[])]));this.chain=n.reduceRight((i,s)=>Yt(i,s,this.injector),Ht)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(Ue(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||r)(h(re),h(We))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})();var Kt=/^\)\]\}',?\n/,Qt=RegExp(`^${vt}:`,"m");function en(r){return"responseURL"in r&&r.responseURL?r.responseURL:Qt.test(r.getAllResponseHeaders())?r.getResponseHeader(vt):null}var gt=(()=>{class r{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new T(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?je(n.\u0275loadImpl()):A(null)).pipe(he(()=>new C(s=>{let o=n.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((f,p)=>o.setRequestHeader(f,p.join(","))),e.headers.has(pt)||o.setRequestHeader(pt,$t),!e.headers.has(ft)){let f=e.detectContentTypeHeader();f!==null&&o.setRequestHeader(ft,f)}if(e.responseType){let f=e.responseType.toLowerCase();o.responseType=f!=="json"?f:"text"}let c=e.serializeBody(),a=null,l=()=>{if(a!==null)return a;let f=o.statusText||"OK",p=new D(o.getAllResponseHeaders()),b=en(o)||e.url;return a=new Me({headers:p,status:o.status,statusText:f,url:b}),a},u=()=>{let{headers:f,status:p,statusText:b,url:q}=l(),v=null;p!==Xt&&(v=typeof o.response>"u"?o.responseText:o.response),p===0&&(p=v?Gt:0);let L=p>=200&&p<300;if(e.responseType==="json"&&typeof v=="string"){let Lt=v;v=v.replace(Kt,"");try{v=v!==""?JSON.parse(v):null}catch(Ft){v=Lt,L&&(L=!1,v={error:Ft,text:v})}}L?(s.next(new N({body:v,headers:f,status:p,statusText:b,url:q||void 0})),s.complete()):s.error(new ie({error:v,headers:f,status:p,statusText:b,url:q||void 0}))},g=f=>{let{url:p}=l(),b=new ie({error:f,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});s.error(b)},y=!1,m=f=>{y||(s.next(l()),y=!0);let p={type:k.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(p.total=f.total),e.responseType==="text"&&o.responseText&&(p.partialText=o.responseText),s.next(p)},Y=f=>{let p={type:k.UploadProgress,loaded:f.loaded};f.lengthComputable&&(p.total=f.total),s.next(p)};return o.addEventListener("load",u),o.addEventListener("error",g),o.addEventListener("timeout",g),o.addEventListener("abort",g),e.reportProgress&&(o.addEventListener("progress",m),c!==null&&o.upload&&o.upload.addEventListener("progress",Y)),o.send(c),s.next({type:k.Sent}),()=>{o.removeEventListener("error",g),o.removeEventListener("abort",g),o.removeEventListener("load",u),o.removeEventListener("timeout",g),e.reportProgress&&(o.removeEventListener("progress",m),c!==null&&o.upload&&o.upload.removeEventListener("progress",Y)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(n){return new(n||r)(h(ee))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})(),Tt=new w(""),tn="XSRF-TOKEN",nn=new w("",{providedIn:"root",factory:()=>tn}),rn="X-XSRF-TOKEN",sn=new w("",{providedIn:"root",factory:()=>rn}),se=class{},on=(()=>{class r{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n,i){this.doc=e,this.platform=n,this.cookieName=i}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Q(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||r)(h(E),h(O),h(nn))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})();function an(r,t){let e=r.url.toLowerCase();if(!d(Tt)||r.method==="GET"||r.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return t(r);let n=d(se).getToken(),i=d(sn);return n!=null&&!r.headers.has(i)&&(r=r.clone({headers:r.headers.set(i,n)})),t(r)}function ir(...r){let t=[Zt,gt,mt,{provide:G,useExisting:mt},{provide:re,useFactory:()=>d(Jt,{optional:!0})??d(gt)},{provide:Et,useValue:an,multi:!0},{provide:Tt,useValue:!0},{provide:se,useClass:on}];for(let e of r)t.push(...e.\u0275providers);return K(t)}var cn=new w(""),ln="b",dn="h",un="s",hn="st",fn="u",pn="rt",ne=new w(""),mn=["GET","HEAD"];function gn(r,t){let y=d(ne),{isCacheActive:e}=y,n=Fe(y,["isCacheActive"]),{transferCache:i,method:s}=r;if(!e||i===!1||s==="POST"&&!n.includePostRequests&&!i||s!=="POST"&&!mn.includes(s)||!n.includeRequestsWithAuthHeaders&&yn(r)||n.filter?.(r)===!1)return t(r);let o=d(ye);if(d(cn,{optional:!0}))throw new T(2803,!1);let a=r.url,l=vn(r,a),u=o.get(l,null),g=n.includeHeaders;if(typeof i=="object"&&i.includeHeaders&&(g=i.includeHeaders),u){let{[ln]:m,[pn]:Y,[dn]:f,[un]:p,[hn]:b,[fn]:q}=u,v=m;switch(Y){case"arraybuffer":v=new TextEncoder().encode(m).buffer;break;case"blob":v=new Blob([m]);break}let L=new D(f);return A(new N({body:v,headers:L,status:p,statusText:b,url:q}))}return t(r).pipe(Be(m=>{m instanceof N}))}function yn(r){return r.headers.has("authorization")||r.headers.has("proxy-authorization")}function yt(r){return[...r.keys()].sort().map(t=>`${t}=${r.getAll(t)}`).join("&")}function vn(r,t){let{params:e,method:n,responseType:i}=r,s=yt(e),o=r.serializeBody();o instanceof URLSearchParams?o=yt(o):typeof o!="string"&&(o="");let c=[n,i,t,o,s].join("|"),a=_n(c);return a}function _n(r){let t=0;for(let e of r)t=Math.imul(31,t)+e.charCodeAt(0)<<0;return t+=2147483648,t.toString()}function bt(r){return[{provide:ne,useFactory:()=>(Ze("NgHttpTransferCache"),F({isCacheActive:!0},r))},{provide:Rt,useValue:gn,multi:!0,deps:[ye,ne]},{provide:Qe,multi:!0,useFactory:()=>{let t=d(ve),e=d(ne);return()=>{t.whenStable().then(()=>{e.isCacheActive=!1})}}}]}var Ce=class extends it{supportsDOMEvents=!0},Ae=class r extends Ce{static makeCurrent(){rt(new r)}onAndCancel(t,e,n,i){return t.addEventListener(e,n,i),()=>{t.removeEventListener(e,n,i)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=En();return e==null?null:Rn(e)}resetBaseElement(){Z=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Q(document.cookie,t)}},Z=null;function En(){return Z=Z||document.querySelector("base"),Z?Z.getAttribute("href"):null}function Rn(r){return new URL(r,document.baseURI).pathname}var Tn=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||r)};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})(),Pe=new w(""),Pt=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(i=>{i.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,i,s){return this._findPluginFor(n).addEventListener(e,n,i,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(s=>s.supports(e)),!n)throw new T(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||r)(h(Pe),h(R))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})(),ae=class{_doc;constructor(t){this._doc=t}manager},oe="ng-app-id";function St(r){for(let t of r)t.remove()}function Mt(r,t){let e=t.createElement("style");return e.textContent=r,e}function bn(r,t,e,n){let i=r.head?.querySelectorAll(`style[${oe}="${t}"],link[${oe}="${t}"]`);if(i)for(let s of i)s.removeAttribute(oe),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function Ie(r,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",r),e}var It=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,i,s={}){this.doc=e,this.appId=n,this.nonce=i,this.isServer=we(s),bn(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,Mt);n?.forEach(i=>this.addUsage(i,this.external,Ie))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let s=n.get(e);s?s.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(St(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])St(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,Mt(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,Ie(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(oe,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||r)(h(E),h(me),h(ge,8),h(O))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})(),Oe={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ke=/%COMP%/g;var xt="%COMP%",Sn=`_nghost-${xt}`,Mn=`_ngcontent-${xt}`,Dn=!0,On=new w("",{providedIn:"root",factory:()=>Dn});function Cn(r){return Mn.replace(ke,r)}function An(r){return Sn.replace(ke,r)}function kt(r,t){return t.map(e=>e.replace(ke,r))}var Dt=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,i,s,o,c,a,l=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=c,this.ngZone=a,this.nonce=l,this.tracingService=u,this.platformIsServer=we(c),this.defaultRenderer=new J(e,o,a,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===U.ShadowDom&&(n=Le(F({},n),{encapsulation:U.Emulated}));let i=this.getOrCreateRenderer(e,n);return i instanceof ce?i.applyToHost(e):i instanceof H&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,s=i.get(n.id);if(!s){let o=this.doc,c=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,g=this.platformIsServer,y=this.tracingService;switch(n.encapsulation){case U.Emulated:s=new ce(a,l,n,this.appId,u,o,c,g,y);break;case U.ShadowDom:return new xe(a,l,e,n,o,c,this.nonce,g,y);default:s=new H(a,l,n,u,o,c,g,y);break}i.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||r)(h(Pt),h(It),h(me),h(On),h(E),h(O),h(R),h(ge),h(Ye,8))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})(),J=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,i,s){this.eventManager=t,this.doc=e,this.ngZone=n,this.platformIsServer=i,this.tracingService=s}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(Oe[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(Ot(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(Ot(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new T(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,i){if(i){e=i+":"+e;let s=Oe[i];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let i=Oe[n];i?t.removeAttributeNS(i,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,i){i&(B.DashCase|B.Important)?t.style.setProperty(e,n,i&B.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&B.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,i){if(typeof t=="string"&&(t=_e().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);let s=this.decoratePreventDefault(n);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(t,e,s)),this.eventManager.addEventListener(t,e,s,i)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function Ot(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var xe=class extends J{sharedStylesHost;hostEl;shadowRoot;constructor(t,e,n,i,s,o,c,a,l){super(t,s,o,a,l),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=i.styles;u=kt(i.id,u);for(let y of u){let m=document.createElement("style");c&&m.setAttribute("nonce",c),m.textContent=y,this.shadowRoot.appendChild(m)}let g=i.getExternalStyles?.();if(g)for(let y of g){let m=Ie(y,s);c&&m.setAttribute("nonce",c),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},H=class extends J{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,i,s,o,c,a,l){super(t,s,o,c,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let u=n.styles;this.styles=l?kt(l,u):u,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ce=class extends H{contentAttr;hostAttr;constructor(t,e,n,i,s,o,c,a,l){let u=i+"-"+n.id;super(t,e,n,s,o,c,a,l,u),this.contentAttr=Cn(u),this.hostAttr=An(u)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}},Pn=(()=>{class r extends ae{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,s){return e.addEventListener(n,i,s),()=>this.removeEventListener(e,n,i,s)}removeEventListener(e,n,i,s){return e.removeEventListener(n,i,s)}static \u0275fac=function(n){return new(n||r)(h(E))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})(),Ct=["alt","control","meta","shift"],In={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},xn={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},kn=(()=>{class r extends ae{constructor(e){super(e)}supports(e){return r.parseEventName(e)!=null}addEventListener(e,n,i,s){let o=r.parseEventName(n),c=r.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>_e().onAndCancel(e,o.domEventName,c,s))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let s=r._normalizeKey(n.pop()),o="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),o="code."),Ct.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),o+=l+".")}),o+=s,n.length!=0||s.length===0)return null;let a={};return a.domEventName=i,a.fullKey=o,a}static matchEventFullKeyCode(e,n){let i=In[e.key]||e.key,s="";return n.indexOf("code.")>-1&&(i=e.code,s="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Ct.forEach(o=>{if(o!==i){let c=xn[o];c(e)&&(s+=o+".")}}),s+=i,s===n)}static eventCallback(e,n,i){return s=>{r.matchEventFullKeyCode(s,e)&&i.runGuarded(()=>n(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||r)(h(E))};static \u0275prov=_({token:r,factory:r.\u0275fac})}return r})();function Ur(r,t){return et(F({rootComponent:r},Nn(t)))}function Nn(r){return{appProviders:[...Un,...r?.providers??[]],platformProviders:zn}}function Ln(){Ae.makeCurrent()}function Fn(){return new pe}function jn(){return Je(document),document}var zn=[{provide:O,useValue:st},{provide:He,useValue:Ln,multi:!0},{provide:E,useFactory:jn,deps:[]}];var Un=[{provide:Ve,useValue:"root"},{provide:pe,useFactory:Fn,deps:[]},{provide:Pe,useClass:Pn,multi:!0,deps:[E,R,O]},{provide:Pe,useClass:kn,multi:!0,deps:[E]},Dt,It,Pt,{provide:V,useExisting:Dt},{provide:ee,useClass:Tn,deps:[]},[]];var Br=(()=>{class r{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||r)(h(E))};static \u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var le=function(r){return r[r.NoHttpTransferCache=0]="NoHttpTransferCache",r[r.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",r[r.I18nSupport=2]="I18nSupport",r[r.EventReplay=3]="EventReplay",r[r.IncrementalHydration=4]="IncrementalHydration",r}(le||{});function Bn(r,t=[],e={}){return{\u0275kind:r,\u0275providers:t}}function Vr(){return Bn(le.EventReplay,tt())}function Wr(...r){let t=[],e=new Set,n=e.has(le.HttpTransferCacheOptions);for(let{\u0275providers:i,\u0275kind:s}of r)e.add(s),i.length&&t.push(i);return K([[],nt(),e.has(le.NoHttpTransferCache)||n?[]:bt({}),t])}var Vn=20,Wn=(()=>{class r{_ngZone=d(R);_platform=d(Ee);_renderer=d(V).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new S;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Vn){return this._platform.isBrowser?new C(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(de(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):A()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let i=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(P(s=>!s||i.indexOf(s)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((i,s)=>{this._scrollableContainsElement(s,e)&&n.push(s)}),n}_scrollableContainsElement(e,n){let i=at(n),s=e.getElementRef().nativeElement;do if(i==s)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(n){return new(n||r)};static \u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ui=(()=>{class r{elementRef=d(Xe);scrollDispatcher=d(Wn);ngZone=d(R);dir=d(ct,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new S;_renderer=d(qe);_cleanupScroll;_elementScrolled=new S;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),i&&x()!=I.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),x()==I.INVERTED?e.left=e.right:x()==I.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;ot()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",i="right",s=this.elementRef.nativeElement;if(e=="top")return s.scrollTop;if(e=="bottom")return s.scrollHeight-s.clientHeight-s.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?i:n:e=="end"&&(e=o?n:i),o&&x()==I.INVERTED?e==n?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:o&&x()==I.NEGATED?e==n?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:e==n?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}static \u0275fac=function(n){return new(n||r)};static \u0275dir=Ke({type:r,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return r})(),$n=20,Bi=(()=>{class r{_platform=d(Ee);_listeners;_viewportSize;_change=new S;_document=d(E,{optional:!0});constructor(){let e=d(R),n=d(V).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=s=>this._change.next(s);this._listeners=[n.listen("window","resize",i),n.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+n,height:i,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),i=e.documentElement,s=i.getBoundingClientRect(),o=-s.top||e.body.scrollTop||n.scrollY||i.scrollTop||0,c=-s.left||e.body.scrollLeft||n.scrollX||i.scrollLeft||0;return{top:o,left:c}}change(e=$n){return e>0?this._change.pipe(de(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||r)};static \u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Nt=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=W({type:r});static \u0275inj=z({})}return r})(),Vi=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=W({type:r});static \u0275inj=z({imports:[Re,Nt,Re,Nt]})}return r})();var Ne=class{_box;_destroyed=new S;_resizeSubject=new S;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new C(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),n.unsubscribe(),this._elementObservables.delete(t)}}).pipe(P(e=>e.some(n=>n.target===t)),ue({bufferSize:1,refCount:!0}),fe(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Hi=(()=>{class r{_cleanupErrorListener;_observers=new Map;_ngZone=d(R);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let i=n?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Ne(i)),this._observers.get(i).observe(e)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=_({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{ir as a,Dt as b,Ur as c,Br as d,Vr as e,Wr as f,Wn as g,Ui as h,Bi as i,Vi as j,Hi as k};

(this.$WP=this.$WP||[]).push(["2xmlss",(e,t)=>{var i,r,a,n,s,o,l,d,c,u,E,p,f,y,v,h,L,S,_,m,T,O,D,A,I,C,g,N=(e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,R=(e,t,i)=>(N(e,"symbol"!=typeof t?t+"":t,i),i),w=!1;function B({dataFromPreviewApp:e,updateFromEntryEditor:t,name:i}){var r;e[i]=(null==(r=t.fields)?void 0:r[i])??null}function b(e){var t;return!!(c.has(e.type)||"Array"===e.type&&(null==(t=e.items)?void 0:t.type)==="Symbol")}var M="Asset";function P(e){return!!(e&&"object"==typeof e&&"sys"in e&&e.sys.id)}function K(e,t){var i,r={...t,method:e,from:"live-preview",source:L,location:window.location.href,version:"2.9.4"};d.log("Send message",r),null==(i=window.top)||i.postMessage(r,"*")}function U(e,t=100){var i;return(...r)=>{clearTimeout(i),i=setTimeout(()=>{e.apply(this,r)},t)}}function F(e){if("function"==typeof structuredClone)return structuredClone(e);try{return JSON.parse(JSON.stringify(e))}catch(t){return d.warn("Failed to clone data, updates are done on the original one",e,t),e}}function H(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function G(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var k="Collection";function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Y(e){return`${e}${k}`}var q={};function V(e){return q[e]||(q[e]=new a({entities:[],sendMessage:K,subscribe:(e,t)=>{var i=i=>{"object"==typeof i.data&&i.data&&"live-preview"===i.data.from&&i.data.method===e&&t(i.data)};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)},locale:e})),q[e]}async function $({entityReferenceMap:e,referenceId:t,isAsset:i,locale:r}){var a,n,s,o=e.get(t);if(o)return{reference:o,typeName:"contentType"in o.sys&&null!=(s=null==(n=null==(a=o.sys)?void 0:a.contentType)?void 0:n.sys)&&s.id?j(o.sys.contentType.sys.id):M};if(i){var l=await V(r).fetchAsset(t);if(!l)throw Error(`Unknown reference ${t}`);return{reference:l,typeName:M}}var d=await V(r).fetchEntry(t);if(!d)throw Error(`Unknown reference ${t}`);return{reference:d,typeName:j(d.sys.contentType.sys.id)}}function Q(e,t,i){K("TAGGED_FIELD_CLICKED",{action:"TAGGED_FIELD_CLICKED",fieldId:e,entryId:t,locale:i})}function x(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W={},z={},J={},X={},Z={},ee={},et={},ei={},er={};function ea(e,t){for(var i=0,r=Object.keys(e);i<r.length;i++)if(t===e[r[i]])return!0;return!1}function en(e){return ea(I.INLINES,e.nodeType)}function es(e){return ea(A.BLOCKS,e.nodeType)}function eo(e){return"text"===e.nodeType}function el(e){return!!e&&"object"==typeof e&&"sys"in e&&"ResourceLink"!==e.sys.type}function ed(e){return!!e&&"object"==typeof e&&"sys"in e&&"ResourceLink"===e.sys.type}function ec(e){return!!e&&"object"==typeof e&&e.content&&e.nodeType===W.BLOCKS.DOCUMENT}function eu(e){return e.sys&&"linkType"in e.sys&&e.sys.linkType===M}function eE(e,t,i){if(!i)return!0;var r=i.get(t);return!!r&&(r.fields.has(e)||r.fields.has(Y(e)))}function ep(e,t,i){var r,a=null==(r=null==i?void 0:i.get(t))?void 0:r.alias;if(!a)return e;for(var n in e){var s=null==a?void 0:a.get(n);s!==n&&(e[s]=e[n])}return e}function ef(e,t,i){var r,a;try{var n=t.fields.file,s=null==n?void 0:n.details,o={...e,title:t.fields.title,description:t.fields.description,contentType:null==n?void 0:n.contentType,url:function(e){if(!e)return e;try{var t=new URL(e,"https://images.ctfassets.net");return t.protocol="https:",t.href}catch(t){return d.error(`Recevied invalid asset url "${e}"`,t),e}}(null==n?void 0:n.url),width:null==(r=null==s?void 0:s.image)?void 0:r.width,height:null==(a=null==s?void 0:s.image)?void 0:a.height};return ep(o,M,i)}catch(i){return d.warn("Failed update asset",{dataFromPreviewApp:e,updateFromEntryEditor:t},i),e}}async function ey({contentType:e,dataFromPreviewApp:t,updateFromEntryEditor:i,locale:r,entityReferenceMap:a,gqlParams:n}){if(t.sys.id!==i.sys.id)return t;var s,o=F(t),l=j(e.sys.id);for(var d of e.fields){var c=d.apiName??d.name;eE(c,l,n)&&(b(d)?B({dataFromPreviewApp:o,updateFromEntryEditor:i,name:c}):"RichText"===d.type?await eS({dataFromPreviewApp:o,updateFromEntryEditor:i,entityReferenceMap:a,name:c,locale:r,gqlParams:n}):"Link"===d.type?await eO({dataFromPreviewApp:o,updateFromEntryEditor:i,name:c,locale:r,entityReferenceMap:a,gqlParams:n}):"Array"===d.type&&(null==(s=d.items)?void 0:s.type)==="Link"&&await eD({dataFromPreviewApp:o,updateFromEntryEditor:i,name:c,locale:r,entityReferenceMap:a,gqlParams:n}))}return ep(o,l,n)}function ev(e){return Object.values(e).every(e=>0===e.length)}async function eh(e,t,i,r,a,n){if(C.includes(e.nodeType)){if(e.data&&e.data.target&&e.data.target.sys){var s,o={sys:{...e.data.target.sys,type:"Link",linkType:e.data.target.sys.type}};if("Entry"===e.data.target.sys.linkType?s=await em({referenceFromPreviewApp:null,updatedReference:o,entityReferenceMap:r,locale:a,gqlParams:n}):"Asset"===e.data.target.sys.linkType&&(s=await e_({referenceFromPreviewApp:null,updatedReference:o,entityReferenceMap:r,locale:a,gqlParams:n})),s)switch(e.nodeType){case W.BLOCKS.EMBEDDED_ENTRY:t.block.push(s);break;case W.BLOCKS.EMBEDDED_ASSET:i.block.push(s);break;case W.INLINES.EMBEDDED_ENTRY:t.inline.push(s);break;case W.INLINES.ENTRY_HYPERLINK:t.hyperlink.push(s);break;case W.INLINES.ASSET_HYPERLINK:i.hyperlink.push(s);break;default:d.warn("Unhandled nodeType in embedded entries in rich text",{nodeType:e.nodeType,ref:s})}}}else if(e.content)for(var l of e.content)await eh(l,t,i,r,a,n)}async function eL(e,t,i,r){var a={block:[],inline:[],hyperlink:[]},n={block:[],inline:[],hyperlink:[]};if(e)for(var s of e.content)await eh(s,a,n,t,i,r);return{entries:ev(a)?{block:[],inline:[],hyperlink:[]}:a,assets:ev(n)?{block:[],inline:[],hyperlink:[]}:n}}async function eS({dataFromPreviewApp:e,updateFromEntryEditor:t,name:i,locale:r,entityReferenceMap:a,gqlParams:n}){var s;e[i]||(e[i]={}),e[i].json=(null==(s=null==t?void 0:t.fields)?void 0:s[i])||null,e[i].links=await eL(e[i].json,a,r,n)}async function e_({referenceFromPreviewApp:e,updatedReference:t,entityReferenceMap:i,locale:r,gqlParams:a}){var{reference:n}=await $({entityReferenceMap:i,referenceId:t.sys.id,isAsset:!0,locale:r});return ef({...e,...t,__typename:M},n,a)}async function em({referenceFromPreviewApp:e,updatedReference:t,entityReferenceMap:i,locale:r,gqlParams:a}){var n,{reference:s,typeName:o}=await $({entityReferenceMap:i,referenceId:t.sys.id,locale:r}),l={...e,...t,__typename:o};for(var d in s.fields)if(eE(d,o,a)){var c=s.fields[d];c&&"object"==typeof c?(ec(c)&&(l[d]={json:c},l[d].links=await eL(c,i,r)),"sys"in c&&(l[d]=c,await eO({dataFromPreviewApp:l,updateFromEntryEditor:s,locale:r,entityReferenceMap:i,name:d,gqlParams:a}))):Array.isArray(c)&&null!=(n=c[0])&&n.sys?(l[Y(d)]={items:c},await eD({dataFromPreviewApp:l,updateFromEntryEditor:s,locale:r,entityReferenceMap:i,name:d,gqlParams:a})):l[d]=c}return ep(l,o,a)}async function eT({referenceFromPreviewApp:e,updatedReference:t,entityReferenceMap:i,locale:r,gqlParams:a}){return t?e&&e.__typename?e:t.__typename?t:eu(t)?e_({referenceFromPreviewApp:e,updatedReference:t,entityReferenceMap:i,locale:r,gqlParams:a}):em({referenceFromPreviewApp:e,updatedReference:t,entityReferenceMap:i,locale:r,gqlParams:a}):null}async function eO({dataFromPreviewApp:e,updateFromEntryEditor:t,name:i,locale:r,entityReferenceMap:a,gqlParams:n}){var s,o=null==(s=null==t?void 0:t.fields)?void 0:s[i];e[i]=await eT({referenceFromPreviewApp:e[i],updatedReference:o,entityReferenceMap:a,locale:r,gqlParams:n})}async function eD({dataFromPreviewApp:e,updateFromEntryEditor:t,name:i,locale:r,entityReferenceMap:a,gqlParams:n}){var s,o=Y(i),l=(null==(s=null==t?void 0:t.fields)?void 0:s[i])||[],d=await Promise.all(l.map(async t=>{var i,s,l=null==(s=null==(i=e[o])?void 0:i.items)?void 0:s.find(e=>e.sys.id===t.sys.id);return await eT({referenceFromPreviewApp:l,updatedReference:t,entityReferenceMap:a,locale:r,gqlParams:n})}));e[o]||(e[o]={items:[]}),e[o].items=d.filter(Boolean)}async function eA(e,t,i,r,a,n){if(n.has(t.sys.id))d.warn("Detected a circular reference, stopping recursion"),s=r.get("urn"in t.sys?t.sys.urn:t.sys.id);else{n.add("urn"in t.sys?t.sys.urn:t.sys.id);var s,{reference:o}=await $({entityReferenceMap:r,referenceId:t.sys.id,...eu(t)?{isAsset:!0}:void 0,locale:i});s=o}if(!s)return e;var l=F(s);for(var c in s.fields){var u=s.fields[c];if(el(u)&&a<v)await eC(l,s,i,c,r,a+1,n);else if(Array.isArray(u)&&el(u[0])&&a<v)await eI(l,s,i,c,r,a+1,n);else if(ec(u))await eN(l,s,c,i,r,a+1,n);else{if(ed(u)||Array.isArray(u)&&ed(u[0]))return d.warn("Detected a resource link, support is still under development."),l;B({dataFromPreviewApp:l.fields,updateFromEntryEditor:s,name:c})}}return l}async function eI(e,t,i,r,a,n,s){var o;if(!(null!=(o=t.fields)&&o[r])){delete e.fields[r];return}return e.fields[r]=await Promise.all(t.fields[r].map((t,o)=>{var l;return eA(null==(l=e.fields[r])?void 0:l[o],t,i,a,n+1,s)})).then(e=>e.filter(Boolean)),e}async function eC(e,t,i,r,a,n,s){var o,l=null==(o=null==t?void 0:t.fields)?void 0:o[r];if(!l){delete e.fields[r];return}return e.fields[r]=await eA(e.fields[r],l,i,a,n+1,s),e}async function eg(e,t,i,r,a){var n;if(C.includes(e.nodeType)&&e.data&&e.data.target&&e.data.target.sys&&("Entry"===e.data.target.sys.linkType||"Asset"===e.data.target.sys.linkType)){var s={sys:{id:(null==(n=e.data.target)?void 0:n.sys.id)||"",type:"Link",linkType:e.data.target.sys.linkType}};e.data.target=await eA(void 0,s,i,t,r+1,a)}if(e.content)for(var o of e.content)await eg(o,t,i,r+1,a)}async function eN(e,t,i,r,a,n,s){var o,l=null==(o=t.fields)?void 0:o[i];if(ec(l))for(var d of(e.fields[i]=l,l.content))await eg(d,a,r,n,s)}async function eR(e,t,i,r,a,n,s){var o;if(t.sys.id!==i.sys.id)return t;for(var l of e.fields){var c="Asset"===e.name?l.id:l.apiName||l.name;if(b(l)||"File"===l.type)B({dataFromPreviewApp:t.fields,updateFromEntryEditor:i,name:c});else if("Link"===l.type&&n<v)await eC(t,i,r,c,a,n+1,s);else if("Array"===l.type&&(null==(o=l.items)?void 0:o.type)==="Link"&&n<v)await eI(t,i,r,c,a,n+1,s);else if("RichText"===l.type)await eN(t,i,c,r,a,n,s);else if("ResourceLink"===l.type)return d.warn("Detected a resource link, support is still under development."),t}return t}return e({c:x,l:U,openEntryInEditorUtility:Q}),[()=>{var t,N,B,b,M,Y,q,V,$,ea,el,ed,ec,eu,eE,ep;o=Object.defineProperty,d={error:(l=e=>(...t)=>{w&&console[e](...t)})("error"),warn:l("warn"),log:l("log")},c=new Set(["Symbol","Text","Integer","Number","Boolean","Date","Location","Object"]),(t=u||{}).FIELD_ID="data-contentful-field-id",t.ENTRY_ID="data-contentful-entry-id",t.LOCALE="data-contentful-locale",E=`current-${(u=t).FIELD_ID}`,p=`current-${u.ENTRY_ID}`,f=`current-${u.LOCALE}`,y="contentful-tooltip",v=10,h="live-preview-editor",L="live-preview-sdk",i=class{constructor(e,t){R(this,"storageKey"),R(this,"value"),this.storageKey=e,this.value=this.restoreSessionData()||t}getKey(e,t){return`${e}-${t}`}restoreSessionData(){try{var e=window.sessionStorage.getItem(this.storageKey),t=e?JSON.parse(e):null;return Array.isArray(t)?new Map(t):null}catch{return null}}get(e,t){return this.value.get(this.getKey(e,t))}set(e,t,i){this.value.set(this.getKey(e,t),i);try{window.sessionStorage.setItem(this.storageKey,JSON.stringify(Array.from(this.value.entries())))}catch{d.warn(`StorageMap: Failed to set data for key "${e}" in sessionStorage`)}}clear(){this.value.clear();try{window.sessionStorage.removeItem(this.storageKey)}catch{d.warn("StorageMap: Failed to clear data from sessionStorage")}}},r=class{get entities(){return[...this.entitiesMap.values()]}updateEntity(e){this.entitiesMap.set(e.sys.id,e)}getValue(e,t){var i=this.entitiesMap.get(e.sys.id);if(i&&i.sys.type===e.sys.linkType)return function e(t,i){if(!i.length)return t;try{var[r,...a]=i;return e(t[r],a)}catch{return}}(i,t)}getEntitiesFromMap(e){var t=[],i=[];for(var r of e){var a=this.entitiesMap.get(r);a?t.push(a):i.push(r)}if(i.length)throw Error(`Missing entity in the store (${i.join(",")})`);return t}async fetchAsset(e){try{return this.getEntitiesFromMap([e])[0]}catch{return}}async fetchAssets(e){return this.getEntitiesFromMap(e)}async fetchEntry(e){try{return this.getEntitiesFromMap([e])[0]}catch{return}}async fetchEntries(e){return this.getEntitiesFromMap(e)}constructor({entities:e,locale:t}){H(this,"locale",void 0),H(this,"entitiesMap",void 0),this.entitiesMap=new Map(e.map(e=>[e.sys.id,e])),this.locale=t}},(N=S||(S={})).REQUEST_ENTITIES="REQUEST_ENTITIES",N.REQUESTED_ENTITIES="REQUESTED_ENTITIES",a=class extends r{cleanupPromise(e){setTimeout(()=>{this.requestCache.delete(e)},300)}getCacheId(e){return 1===e.length?e[0]:e.join(this.cacheIdSeperator)}findMissingEntites(e){var t=[];for(var i of e)this.entitiesMap.get(i)||t.push(i);return t}async fetchEntity(e,t){var i=this.findMissingEntites(e);if(0===i.length)return e.map(e=>this.entitiesMap.get(e));var r=this.getCacheId(i),a=this.requestCache.get(r);if(a)return a;var n=new Promise((a,n)=>{var s=this.subscribe(S.REQUESTED_ENTITIES,t=>{i.every(e=>t.entities.find(t=>t.sys.id===e))&&(clearTimeout(o),a(t.entities),this.cleanupPromise(r),e.forEach(e=>this.cleanupPromise(e)),s())}),o=setTimeout(()=>{n(Error("Request for entities timed out")),s()},this.timeoutDuration);this.sendMessage(S.REQUEST_ENTITIES,{entityIds:i,entityType:t?"Asset":"Entry",locale:this.locale})});return this.requestCache.set(r,n),e.forEach(e=>{this.requestCache.set(e,n)}),(await n).forEach(e=>{this.entitiesMap.set(e.sys.id,e)}),e.map(e=>this.entitiesMap.get(e))}async fetchAsset(e){try{return(await this.fetchAssets([e]))[0]}catch{return}}fetchAssets(e){return this.fetchEntity(e,!0)}async fetchEntry(e){try{return(await this.fetchEntries([e]))[0]}catch(e){return}}fetchEntries(e){return this.fetchEntity(e)}constructor({entities:e,locale:t,sendMessage:i,subscribe:r,timeoutDuration:a=3e3}){super({entities:e,locale:t}),G(this,"requestCache",new Map),G(this,"sendMessage",void 0),G(this,"subscribe",void 0),G(this,"timeoutDuration",void 0),G(this,"cacheIdSeperator",","),this.sendMessage=i,this.subscribe=r,this.timeoutDuration=a}},(B=_||{}).CONNECTED="CONNECTED",B.DISCONNECTED="DISCONNECTED",B.ERROR="ERROR",B.IFRAME_CONNECTED="IFRAME_CONNECTED",B.TAGGED_FIELD_CLICKED="TAGGED_FIELD_CLICKED",B.URL_CHANGED="URL_CHANGED",B.SUBSCRIBED="SUBSCRIBED",B.ENTRY_UPDATED="ENTRY_UPDATED",B.ENTRY_SAVED="ENTRY_SAVED",B.INSPECTOR_MODE_CHANGED="INSPECTOR_MODE_CHANGED",B.DEBUG_MODE_ENABLED="DEBUG_MODE_ENABLED",B.ENTITY_NOT_KNOWN="ENTITY_NOT_KNOWN",B.UNKNOWN_REFERENCE_LOADED="UNKNOWN_REFERENCE_LOADED",_=B,n=class{constructor({locale:e}){R(this,"tooltip",null),R(this,"currentElementBesideTooltip",null),R(this,"defaultLocale"),this.tooltip=null,this.currentElementBesideTooltip=null,this.defaultLocale=e,this.updateTooltipPosition=this.updateTooltipPosition.bind(this),this.addTooltipOnHover=this.addTooltipOnHover.bind(this),this.createTooltip=this.createTooltip.bind(this),this.clickHandler=this.clickHandler.bind(this),this.createTooltip(),window.addEventListener("scroll",this.updateTooltipPosition),window.addEventListener("mouseover",this.addTooltipOnHover)}receiveMessage(e){("action"in e&&"INSPECTOR_MODE_CHANGED"===e.action||e.method===_.INSPECTOR_MODE_CHANGED)&&document.body.classList.toggle("contentful-inspector--active",e.isInspectorActive)}updateTooltipPosition(){if(!this.currentElementBesideTooltip||!this.tooltip)return!1;var e,t=this.currentElementBesideTooltip.getBoundingClientRect(),i=null==(e=this.tooltip.parentElement)?void 0:e.getBoundingClientRect();if(t&&i){var r=t.top-32,a=t.left-5;return r<0&&(r=t.top<0?t.top:0),this.tooltip.style.top=r+"px",this.tooltip.style.left=a+"px",!0}return!1}addTooltipOnHover(e){var t,i,r;for(var a of e.composedPath()){if("BODY"===a.nodeName)break;if("function"==typeof(null==a?void 0:a.getAttribute)){var n=a.getAttribute(u.FIELD_ID),s=a.getAttribute(u.ENTRY_ID),o=a.getAttribute(u.LOCALE)??this.defaultLocale;if(n&&s&&o){this.currentElementBesideTooltip=a,this.updateTooltipPosition()&&(null==(t=this.tooltip)||t.setAttribute(E,n),null==(i=this.tooltip)||i.setAttribute(p,s),null==(r=this.tooltip)||r.setAttribute(f,o));break}}}}createTooltip(){if(!document.querySelector(`.${y}`)){var e=document.createElement("button");e.classList.add(y),e.innerHTML=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5325 2.22242C13.825 2.51492 13.825 2.98742 13.5325 3.27992L12.16 4.65242L9.3475 1.83992L10.72 0.467422C11.0125 0.174922 11.485 0.174922 11.7775 0.467422L13.5325 2.22242ZM0.25 13.7499V10.9374L8.545 2.64243L11.3575 5.45493L3.0625 13.7499H0.25Z" fill="white"/>
      </svg>Edit`,window.document.body.insertAdjacentElement("beforeend",e),e.addEventListener("click",this.clickHandler),this.tooltip=e}this.updateTooltipPosition()}clickHandler(){var e,t,i,r=null==(e=this.tooltip)?void 0:e.getAttribute(E),a=null==(t=this.tooltip)?void 0:t.getAttribute(p),n=(null==(i=this.tooltip)?void 0:i.getAttribute(f))||this.defaultLocale;r&&a&&n&&Q(r,a,n)}},m="u">typeof globalThis?globalThis:"u">typeof window?window:"u">typeof global?global:"u">typeof self?self:{},Object.defineProperty(z,"__esModule",{value:!0}),z.BLOCKS=void 0,(b=z.BLOCKS||(z.BLOCKS={})).DOCUMENT="document",b.PARAGRAPH="paragraph",b.HEADING_1="heading-1",b.HEADING_2="heading-2",b.HEADING_3="heading-3",b.HEADING_4="heading-4",b.HEADING_5="heading-5",b.HEADING_6="heading-6",b.OL_LIST="ordered-list",b.UL_LIST="unordered-list",b.LIST_ITEM="list-item",b.HR="hr",b.QUOTE="blockquote",b.EMBEDDED_ENTRY="embedded-entry-block",b.EMBEDDED_ASSET="embedded-asset-block",b.EMBEDDED_RESOURCE="embedded-resource-block",b.TABLE="table",b.TABLE_ROW="table-row",b.TABLE_CELL="table-cell",b.TABLE_HEADER_CELL="table-header-cell",Object.defineProperty(J,"__esModule",{value:!0}),J.INLINES=void 0,(M=J.INLINES||(J.INLINES={})).HYPERLINK="hyperlink",M.ENTRY_HYPERLINK="entry-hyperlink",M.ASSET_HYPERLINK="asset-hyperlink",M.EMBEDDED_ENTRY="embedded-entry-inline",Object.defineProperty(X,"__esModule",{value:!0}),(Y=T||(T={})).BOLD="bold",Y.ITALIC="italic",Y.UNDERLINE="underline",Y.CODE="code",Y.SUPERSCRIPT="superscript",Y.SUBSCRIPT="subscript",X.default=T,V=m&&m.__spreadArray||function(e,t,i){if(i||2==arguments.length)for(var r,a=0,n=t.length;a<n;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},$=m&&m.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Object.defineProperty(Z,"__esModule",{value:!0}),Z.V1_MARKS=Z.V1_NODE_TYPES=Z.TEXT_CONTAINERS=Z.HEADINGS=Z.CONTAINERS=Z.VOID_BLOCKS=Z.TABLE_BLOCKS=Z.LIST_ITEM_BLOCKS=Z.TOP_LEVEL_BLOCKS=void 0,ea=$(X),Z.TOP_LEVEL_BLOCKS=[z.BLOCKS.PARAGRAPH,z.BLOCKS.HEADING_1,z.BLOCKS.HEADING_2,z.BLOCKS.HEADING_3,z.BLOCKS.HEADING_4,z.BLOCKS.HEADING_5,z.BLOCKS.HEADING_6,z.BLOCKS.OL_LIST,z.BLOCKS.UL_LIST,z.BLOCKS.HR,z.BLOCKS.QUOTE,z.BLOCKS.EMBEDDED_ENTRY,z.BLOCKS.EMBEDDED_ASSET,z.BLOCKS.EMBEDDED_RESOURCE,z.BLOCKS.TABLE],Z.LIST_ITEM_BLOCKS=[z.BLOCKS.PARAGRAPH,z.BLOCKS.HEADING_1,z.BLOCKS.HEADING_2,z.BLOCKS.HEADING_3,z.BLOCKS.HEADING_4,z.BLOCKS.HEADING_5,z.BLOCKS.HEADING_6,z.BLOCKS.OL_LIST,z.BLOCKS.UL_LIST,z.BLOCKS.HR,z.BLOCKS.QUOTE,z.BLOCKS.EMBEDDED_ENTRY,z.BLOCKS.EMBEDDED_ASSET,z.BLOCKS.EMBEDDED_RESOURCE],Z.TABLE_BLOCKS=[z.BLOCKS.TABLE,z.BLOCKS.TABLE_ROW,z.BLOCKS.TABLE_CELL,z.BLOCKS.TABLE_HEADER_CELL],Z.VOID_BLOCKS=[z.BLOCKS.HR,z.BLOCKS.EMBEDDED_ENTRY,z.BLOCKS.EMBEDDED_ASSET,z.BLOCKS.EMBEDDED_RESOURCE],Z.CONTAINERS=((q={})[z.BLOCKS.OL_LIST]=[z.BLOCKS.LIST_ITEM],q[z.BLOCKS.UL_LIST]=[z.BLOCKS.LIST_ITEM],q[z.BLOCKS.LIST_ITEM]=Z.LIST_ITEM_BLOCKS,q[z.BLOCKS.QUOTE]=[z.BLOCKS.PARAGRAPH],q[z.BLOCKS.TABLE]=[z.BLOCKS.TABLE_ROW],q[z.BLOCKS.TABLE_ROW]=[z.BLOCKS.TABLE_CELL,z.BLOCKS.TABLE_HEADER_CELL],q[z.BLOCKS.TABLE_CELL]=[z.BLOCKS.PARAGRAPH],q[z.BLOCKS.TABLE_HEADER_CELL]=[z.BLOCKS.PARAGRAPH],q),Z.HEADINGS=[z.BLOCKS.HEADING_1,z.BLOCKS.HEADING_2,z.BLOCKS.HEADING_3,z.BLOCKS.HEADING_4,z.BLOCKS.HEADING_5,z.BLOCKS.HEADING_6],Z.TEXT_CONTAINERS=V([z.BLOCKS.PARAGRAPH],Z.HEADINGS,!0),Z.V1_NODE_TYPES=[z.BLOCKS.DOCUMENT,z.BLOCKS.PARAGRAPH,z.BLOCKS.HEADING_1,z.BLOCKS.HEADING_2,z.BLOCKS.HEADING_3,z.BLOCKS.HEADING_4,z.BLOCKS.HEADING_5,z.BLOCKS.HEADING_6,z.BLOCKS.OL_LIST,z.BLOCKS.UL_LIST,z.BLOCKS.LIST_ITEM,z.BLOCKS.HR,z.BLOCKS.QUOTE,z.BLOCKS.EMBEDDED_ENTRY,z.BLOCKS.EMBEDDED_ASSET,J.INLINES.HYPERLINK,J.INLINES.ENTRY_HYPERLINK,J.INLINES.ASSET_HYPERLINK,J.INLINES.EMBEDDED_ENTRY,"text"],Z.V1_MARKS=[ea.default.BOLD,ea.default.CODE,ea.default.ITALIC,ea.default.UNDERLINE],Object.defineProperty(ee,"__esModule",{value:!0}),Object.defineProperty(et,"__esModule",{value:!0}),Object.defineProperty(ei,"__esModule",{value:!0}),D={nodeType:(O=z).BLOCKS.DOCUMENT,data:{},content:[{nodeType:O.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},ei.default=D,Object.defineProperty(er,"__esModule",{value:!0}),er.isText=er.isBlock=er.isInline=void 0,A=z,I=J,er.isInline=en,er.isBlock=es,er.isText=eo,el=m&&m.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var a=Object.getOwnPropertyDescriptor(t,i);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,a)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),ed=m&&m.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ec=m&&m.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||el(t,e,i)},eu=m&&m.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&el(t,e,i);return ed(t,e),t},eE=m&&m.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Object.defineProperty(W,"__esModule",{value:!0}),W.helpers=W.EMPTY_DOCUMENT=W.MARKS=W.INLINES=W.BLOCKS=void 0,Object.defineProperty(W,"BLOCKS",{enumerable:!0,get:function(){return z.BLOCKS}}),Object.defineProperty(W,"INLINES",{enumerable:!0,get:function(){return J.INLINES}}),Object.defineProperty(W,"MARKS",{enumerable:!0,get:function(){return eE(X).default}}),ec(Z,W),ec(ee,W),ec(et,W),Object.defineProperty(W,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return eE(ei).default}}),ep=eu(er),W.helpers=ep,C=[W.BLOCKS.EMBEDDED_ENTRY,W.BLOCKS.EMBEDDED_ASSET,W.INLINES.EMBEDDED_ENTRY,W.INLINES.ENTRY_HYPERLINK,W.INLINES.ASSET_HYPERLINK],s=class{constructor({locale:e}){R(this,"subscriptions",new Map),R(this,"storage"),R(this,"defaultLocale"),this.defaultLocale=e,this.storage=new i("live-updates",new Map),window.addEventListener("beforeunload",()=>this.clearStorage())}async mergeEntity({contentType:e,dataFromPreviewApp:t,entityReferenceMap:i,locale:r,updateFromEntryEditor:a,gqlParams:n,visitedReferences:s}){return"__typename"in t?{data:await ("Asset"===t.__typename?ef(t,a,n):ey({contentType:e,dataFromPreviewApp:t,updateFromEntryEditor:a,locale:r,entityReferenceMap:i,gqlParams:n})),updated:!0}:this.isCfEntity(t)?{data:await eR(e,t,a,r,i,0,s),updated:!0}:{updated:!1,data:t}}async mergeNestedReference({dataFromPreviewApp:e,...t},i){var r=P(e)&&e.sys.id,a=i&&r,n=!1,s=(a?this.storage.get(r,t.locale):void 0)||e;if(P(s)&&r===t.updateFromEntryEditor.sys.id){var o=await this.mergeEntity({...t,dataFromPreviewApp:s});s=o.data,n=o.updated}else for(var l in s)if(s[l]&&"object"==typeof s[l]){var d=await this.merge({...t,dataFromPreviewApp:s[l]},!1);s[l]=d.data,n=n||d.updated}return a&&this.storage.set(r,t.locale,s),{data:s,updated:n}}async merge({dataFromPreviewApp:e,...t},i=!0){if(Array.isArray(e)){var r=[],a=!1;for(var n of e){var s=await this.mergeNestedReference({...t,dataFromPreviewApp:n},i);r.push(s.data),a=a||s.updated}return{data:r,updated:a}}return this.mergeNestedReference({...t,dataFromPreviewApp:e},i)}isCfEntity(e){return P(e)&&"fields"in e}async receiveMessage(e){if("action"in e&&"ENTRY_UPDATED"===e.action||e.method===_.ENTRY_UPDATED){var{entity:t,contentType:i,entityReferenceMap:r}=e;await Promise.all([...this.subscriptions].map(async([,e])=>{try{var a=new Set,{updated:n,data:s}=await this.merge({dataFromPreviewApp:F(e.data),locale:e.locale||this.defaultLocale,updateFromEntryEditor:t,contentType:i,entityReferenceMap:r,gqlParams:e.gqlParams,visitedReferences:a});n&&e.callback(s)}catch(i){K(_.ERROR,{message:i.message,payload:{data:e.data,update:t},type:"SUBSCRIPTION_UPDATE_FAILED"}),d.error("Failed to apply live update",{error:i,subscribedData:e.data,updateFromEditor:t})}}))}}async restore(e,t,i){if(e){var r,a=e=>{if(P(e)){var i=this.storage.get(e.sys.id,t);if(i)return i}return e};if(Array.isArray(e))r=e.map(a);else{var n=a(e);n!==e&&(r=n)}var s=this.subscriptions.get(i);s&&r&&s.callback(r)}}clearStorage(){this.storage.clear()}subscribe(e){var{isGQL:t,isValid:i,sysId:r,isREST:a}=function(e){var t=!0,{isGQL:i,sysId:r,isREST:a}=function e(t){if(Array.isArray(t)){for(var i of t){var r=e(i);if(Object.values(r).includes(!0))return r}return{isGQL:!1,sysId:null,isREST:!1}}var a=Object.hasOwn(t,"__typename"),n=Object.hasOwn(t,"sys")?t.sys.id:null,s=Object.hasOwn(t,"fields");return a||n||s?{isGQL:a,sysId:n,isREST:s}:e(Object.values(t))}(e);return r||(t=!1,d.error('Live Updates requires the "sys.id" to be present on the provided data',e)),i||a||(t=!1,d.error('For live updates as a basic requirement the provided data must include the "fields" property for REST or "__typename" for Graphql, otherwise the data will be treated as invalid and live updates are not applied.',e)),{isGQL:i,isREST:a,sysId:r,isValid:t}}(e.data);if(!i)return K(_.ERROR,{message:"Failed to subscribe",payload:{isGQL:t,isValid:i,sysId:r,isREST:a},type:"SUBSCRIPTION_SETUP_FAILED"}),()=>{};var n=`${performance.now()}-${Math.random().toString(36).slice(2)}`,s=e.locale||this.defaultLocale;return this.subscriptions.set(n,{...e,gqlParams:e.query?function(e){var t,i=[];for(var r of e.definitions)if("OperationDefinition"===r.kind||"FragmentDefinition"===r.kind){var a="typeCondition"in r?r.typeCondition.name.value:null==(t=r.name)?void 0:t.value;if(!a){d.warn("Could not generate __typename for query definition",r);continue}for(var n of r.selectionSet.selections)"Field"===n.kind&&i.push(...function e(t,i){var r,a,n=[];for(var s of t)"Field"===s.kind&&(n.push({name:s.name.value,alias:null==(r=s.alias)?void 0:r.value,__typename:i}),null!=(a=s.selectionSet)&&a.selections&&n.push(...e(s.selectionSet.selections,"items"===s.name.value&&function(e){if(e.endsWith(k))return j(e.replace(k,""))}(i)||s.name.value)));return n}(r.selectionSet.selections,a))}var s=new Map;for(var{__typename:o,alias:l,name:c}of i){var u=s.get(o)||{alias:new Map,fields:new Set};u.fields.add(c),l&&u.alias.set(c,l),s.set(o,u)}return s}(e.query):void 0}),setTimeout(()=>{this.restore(e.data,s,n)},0),K(_.SUBSCRIBED,{action:_.SUBSCRIBED,type:t?"GQL":"REST",locale:s,entryId:r}),()=>{this.subscriptions.delete(n)}}},R(g=class e{static init(t){if("object"!=typeof t||!(null!=t&&t.locale))throw Error("Init function have to be called with a locale configuration (for example: `ContentfulLivePreview.init({ locale: 'en-US'})`)");var{debugMode:i,enableInspectorMode:r,enableLiveUpdates:a,locale:o}=t;if("u">typeof window){if(!function(){var e;try{return(null==(e=window.top)?void 0:e.location.href)!==window.location.href}catch{return!0}}())return this.liveUpdatesEnabled=!1,Promise.resolve(null);if(i&&(w=i),"boolean"==typeof r&&(this.inspectorModeEnabled=r),"boolean"==typeof a&&(this.liveUpdatesEnabled=a),this.locale=o,e.initialized)return d.log("You have already initialized the Live Preview SDK."),Promise.resolve(e.inspectorMode);this.inspectorModeEnabled&&(e.inspectorMode=new n({locale:o})),this.liveUpdatesEnabled&&(e.liveUpdates=new s({locale:o})),window.addEventListener("message",t=>{var i,r;if("object"==typeof t.data&&t.data&&("from"in t.data&&"live-preview"===t.data.from||"source"in t.data&&t.data.source===h)){if(d.log("Received message",t.data),"action"in t.data&&"DEBUG_MODE_ENABLED"===t.data.action||t.data.method===_.DEBUG_MODE_ENABLED){w=!0;return}this.inspectorModeEnabled&&(null==(i=e.inspectorMode)||i.receiveMessage(t.data)),this.liveUpdatesEnabled&&(null==(r=e.liveUpdates)||r.receiveMessage(t.data))}}),function(e,t=500){var i=window.location.href;setInterval(()=>{var t=window.location.href;t!==i&&(i=t,e(t))},t)}(()=>{K(_.URL_CHANGED,{action:_.URL_CHANGED,taggedElementCount:document.querySelectorAll(`[${u.ENTRY_ID}]`).length})});var l=document.querySelectorAll(`[${u.ENTRY_ID}]`).length;return K(_.CONNECTED,{action:_.CONNECTED,connected:!0,tags:l,taggedElementCount:l,locale:this.locale,isInspectorEnabled:this.inspectorModeEnabled,isLiveUpdatesEnabled:this.liveUpdatesEnabled}),this.initialized=!0,Promise.resolve(e.inspectorMode)}}static subscribe(e){if(!this.liveUpdatesEnabled)return()=>{};if(!this.liveUpdates)throw Error("Live Updates are not initialized, please call `ContentfulLivePreview.init()` first.");return this.liveUpdates.subscribe(e)}static getProps({fieldId:e,entryId:t,locale:i}){return this.inspectorModeEnabled?e&&t?{[u.FIELD_ID]:e,[u.ENTRY_ID]:t,[u.LOCALE]:i}:(d.warn("Missing property for inspector mode",{fieldId:e,entryId:t}),null):null}static toggleInspectorMode(){return this.inspectorModeEnabled=!this.inspectorModeEnabled,this.inspectorModeEnabled}static toggleLiveUpdatesMode(){return this.liveUpdatesEnabled=!this.liveUpdatesEnabled,this.liveUpdatesEnabled}static openEntryInEditor({fieldId:e,entryId:t,locale:i}){e&&t||d.error("Please provide field id and entry id to openEntryInEditor."),Q(e,t,i||this.locale)}},"initialized",!1),R(g,"inspectorMode",null),R(g,"liveUpdates",null),R(g,"inspectorModeEnabled",!0),R(g,"liveUpdatesEnabled",!0),R(g,"locale"),e({ContentfulLivePreview:g,LIVE_PREVIEW_EDITOR_SOURCE:h,LIVE_PREVIEW_SDK_SOURCE:L,LivePreviewPostMessageMethods:_,StorePostMessageMethods:S,c:x,l:U,openEntryInEditorUtility:Q,p:m})},[]]},[]]);
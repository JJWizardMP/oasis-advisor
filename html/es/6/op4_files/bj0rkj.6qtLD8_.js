(this.$WP=this.$WP||[]).push(["bj0rkj",(e,n)=>{var r,a,l,i,s,u,t,c,d,o,b,m,h,f,v,p,k,N,g,C,L,T,y,_,A,S,j,x,z,D={breadcrumbNavLinksFlyout:"WnMHS z Gi Za",visible:"FCzQK",submenu:"tgvpH",breadcrumbNavLink:"fKngU _S R4 b",withChevron:"razWA",chevron:"egvgn",open:"YmqIy"},F=({link:e,isOpen:n,onOpen:i,hideSublinks:s})=>{var t=g(),c=null!=e.sublinks&&e.sublinks.length>0&&!s,d="TABLET"===t,o=u(e=>{d&&c&&(i(),e.preventDefault())},[d,c,i]);return a(l,{children:[a("a",{href:e.url??void 0,className:C(D.breadcrumbNavLink,{[D.withChevron]:c,[D.open]:n}),onClick:o,onMouseOver:d?void 0:i,onFocus:d?void 0:i,children:[e.preLocalizedAnchorText||e.localizedAnchorText||r(L,{id:"common_more_capital_ffffe27f"}),c&&r("div",{className:D.chevron,children:r(v,{})})]}),c&&r(B,{links:e.sublinks,submenu:!0,visible:n})]})},B=({links:e,submenu:n,visible:a})=>{var[l,u]=i(null),t=!a&&null!=l;s(()=>{t&&u(null)},[t]);var c=T();return r("div",{className:C(D.breadcrumbNavLinksFlyout,{[D.submenu]:n,[D.visible]:a}),"data-test-target":"global-nav",children:e?.filter(Boolean)?.map((e,n)=>r(F,{link:e,isOpen:n===l,onOpen:()=>u(n),hideSublinks:c&&"TOURISM"===e.linkId},n))})},E={breadcrumbWrapper:"KCGqk _T Cj",breadcrumbText:"n q",icon:"OQDkj y S0 c",alignToEdge:"ZQkQX"},I=({breadcrumb:e,navLinks:n,hasChevron:l,unlinkedLastItem:s})=>{var[t,c]=i(!1),o=d(null),b=u(e=>{t?c(!1):c(!0),e.preventDefault()},[t]),m=u(e=>{null!=o.current&&e.target instanceof Node&&o.current.contains(e.target)||(e.preventDefault(),c(!1))},[]),C=u(e=>{e instanceof KeyboardEvent&&27===e.keyCode&&(e.preventDefault(),c(!1))},[]);N("keydown",null!=n&&t?C:void 0,void 0,!0),N("click",null!=n&&t?m:void 0,void 0,!0),N("touchstart",null!=n&&t?m:void 0,void 0,!0);var L=g(),T=h(e.obfuscated?e.href:null)||e.href,y=r("span",{className:E.breadcrumbText,children:r(k,{variant:"supporting-02",display:"inline",elementType:"span",children:e.name})});return a("div",{className:E.breadcrumbWrapper,ref:o,children:[s?y:a(p,{theme:"standalone",display:"inline-block",href:T,onClick:null!=n?b:void 0,children:[y,null!=n&&r("span",{className:E.icon,children:r(f,{})})]}),l?r("span",{className:E.icon,children:r(v,{})}):null,null!=n&&("TABLET"===L?r("div",{className:E.alignToEdge,children:r(x,{links:n,visible:t})}):r(x,{links:n,visible:t}))]})},W=({breadcrumbs:e,navLinks:n,fontSize:i=13,alwaysLinkLastItem:s})=>{var u=c(()=>e.filter(e=>!e.obfuscated).map(e=>({name:e.name,href:e.href})),[e]);return 0===e.length?null:a(l,{children:[e.map((a,l)=>r(I,{breadcrumb:a,navLinks:l===e.length-1?n:void 0,fontSize:i,hasChevron:l+1<e.length,unlinkedLastItem:!s&&l+1===e.length&&!n},a.href)),r(b,{breadcrumbList:u})]})},O={submenu:"Duuud",visible:"QFmsi",breadcrumbNavLink:"ZcAuY _T S4 Cj _S G_ B-",chevron:"EuuxD u ND S4",open:"eVYZc"},q=({link:e})=>{var n=null!=e.sublinks&&e.sublinks.length>0,[s,t]=i(!1),c=e.linkId||"more",d="HelpDesk"===c?"/help":e.url||"",b=u(e=>{(n||"more"===c)&&(t(!s),e.preventDefault())},[n,s,c]),m=e.preLocalizedAnchorText||e.localizedAnchorText,h=o();return a(l,{children:[n?a("button",{"aria-controls":h,"aria-expanded":s,className:C(O.breadcrumbNavLink,{[O.open]:s}),onClick:b,children:[m||r(L,{id:"common_more_capital_ffffe27f"}),r("span",{className:O.chevron,children:r(j,{})})]}):r("a",{href:d,className:O.breadcrumbNavLink,onClick:b,children:m||r(L,{id:"common_more_capital_ffffe27f"})}),n&&r(w,{id:h,links:e.sublinks,submenu:!0,visible:s})]})},w=({links:e,submenu:n,visible:a,id:l})=>{var[u,t]=i(null),c=null!=u;return s(()=>{c&&t(null)},[c]),r("div",{id:l,className:C({[O.submenu]:n,[O.visible]:a}),children:e?.filter(Boolean)?.map((e,n)=>r(q,{link:e,isOpen:n===u,onOpen:()=>t(n)},n))})},K={breadcrumbContainer:"JKAup f Fc Gi",breadcrumb:"ExtaW f Wh",breadcrumbAnchor:"upENX Cj S4",brand_refresh:"TwIAI",navLinksContainer:"tTwnP"},Q=({breadcrumb:e})=>r("span",{className:K.breadcrumb,children:e.obfuscated?r(m,{useSpan:!0,encodedUrl:e.href,children:r("span",{className:K.breadcrumbAnchor,children:e.name})}):r("a",{className:K.breadcrumbAnchor,href:e.href,children:e.name})},e.href),G=({breadcrumbs:e,navLinks:n,navLinksFetching:i})=>{var s=c(()=>e.filter(e=>e.href).map(e=>r(Q,{breadcrumb:e},e.href)),[e]),u=c(()=>e.filter(e=>!e.obfuscated).map(e=>({name:e.name,href:e.href})),[e]);return 0===e.length?null:r(y,{children:r(_.Consumer,{children:e=>{var t=e&&null!=n&&n.filter(Boolean).length>0;return a(l,{children:[a("div",{"data-automation":"breadcrumbs",className:C(K.breadcrumbContainer,{[K.brand_refresh]:e.brandRefresh}),children:[s,r(b,{breadcrumbList:u})]}),r(A,{component:S.globalnav,enabled:!i&&t,children:t&&r("div",{className:K.navLinksContainer,"data-test-target":"global-nav-stacked",children:r(z,{links:n})})})]})}})})};return[()=>{x=B,e({FooterBreadcrumbs:G,InlineBreadcrumbs:t(W),StackedNavLinks:z=w})},[e=>(r=e.jsx,a=e.jsxs,l=e.Fragment),e=>(i=e.useState,s=e.useEffect,u=e.useCallback,t=e.memo,c=e.useMemo,d=e.useRef,o=e.useId),e=>b=e.BreadcrumbsJsonLd,e=>(m=e.default,h=e.useObfuscatedUrl),e=>f=e.default,e=>v=e.default,e=>p=e.default,e=>k=e.default,e=>N=e.useWindow,e=>g=e.useViewportCategory,e=>C=e.default,e=>L=e.default,e=>T=e.default,e=>(y=e.FeatureProvider,_=e.FeatureContext),e=>(A=e.default,S=e.Component),e=>j=e.default]]},["21h32l","o4yt4q","a7906a","ay1l3c","m49sy3","7a7jm3","lr6tb6","essqvy","ltllz9","ys6v1o","fkji80","7thqz4","z2i5er","c96qj3","6nmgrj","i0z8n1"]]);
(this.$WP=this.$WP||[]).push(["qjohxf",(e,r)=>{var t,a,n,o,i,l,s,u,c,d,h,g,m,p,f,v,P,y,I,S,b,A,D,E,T,w,R,C,N,O,k,L,M,j,U,_,x,q,z,V,G,H,W,$,B,F,J,K,Y,Q,X,Z,ee,er,et,ea,en,eo,ei,el,es,eu,ec,ed,eh,eg,em,ep,ef,ev,eP,ey,eI,eS,eb,eA,eD,eE,eT,ew={__key:0x8f5c28f35cae,id:"8f5c28f35caeff98",loc:{},definitions:[]},eR={__key:0x9d2363549483,id:"9d2363549483b1c2",loc:{},definitions:[]},eC=e=>null==e?null:`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`,eN=(e,r)=>{var t=T(),a=I(),{userAgentCategory:n,browser:i,os:l,isWebview:s}=v(),u=w(),c=N(),d=p(),h=m(eR),{preferences:g,attractions:f,restaurants:P,hotels:y,flights:S,vr:b}=k(),{singleDate:A,toDate:D,fromDate:E,...R}=f,C={attractions:{...R,singleDateStr:eC(f.singleDate),toDateStr:eC(f.toDate),fromDateStr:eC(f.fromDate)}},{date:O,...L}=P,M={restaurants:{...L,dateStr:eC(P.date)}},j=null==y?{hotels:{defaultDates:null,rooms:null,adults:null,children:null,childAgesPerRoom:null,checkInDateStr:null,checkOutDateStr:null}}:{hotels:{defaultDates:y.defaultDates,rooms:y.rooms,adults:y.adults,children:y.children,childAgesPerRoom:y.childAgesPerRoom,checkInDateStr:eC(y.checkInDate),checkOutDateStr:eC(y.checkOutDate)}},{oneWayDate:U,departureDate:_,returnDate:x,...q}=S,z={flights:{...q,oneWayDateStr:eC(S.oneWayDate),departureDateStr:eC(S.departureDate),returnDateStr:eC(S.returnDate)}},{checkInDate:V,checkOutDate:G,...H}=b,W={vr:{...H,checkInDateStr:eC(b.checkInDate),checkOutDateStr:eC(b.checkOutDate)}};o(()=>{h({clientPageViews:{clientRequestTimestampMs:Date.now(),request:[{eventTimestampMs:Date.now(),identifierType:s?"DEVICE_ID":"TA_PERSISTENTCOOKIE",locale:t,userId:c,sessionId:d,origin:location.origin,page:e.page,params:Object.entries(e.params).map(([e,r])=>({key:e,value:"object"!=typeof r?String(r):JSON.stringify(r)||""})),path:e.path,referrer:document.referrer,route:JSON.stringify(e),currency:u,uid:r,userAgent:navigator.userAgent,viewportCategory:a,userAgentCategory:n,browserType:i.family,browserVersion:String(i.majorVersion),osType:l.family,customData:JSON.stringify({preferences:g,...C,...M,...j,...z,...W})}]}},{batch:!1})},[r])},eO=()=>{var e="undefined"!=typeof document?document.cookie.split(";").find(e=>e.includes("TASID=")):null;if(!e)return null;try{return e.split("=")[1]}catch(r){return console.error(`Unable to parse TASID cookie: '${e}'`),null}},ek=e=>{var r=Z(eO())||ee();return"undefined"!=typeof document&&(document.cookie=`TASID=${r}; Domain=${e}; Path=/; Max-Age=1800; Secure`),r},eL=["NotFound","InternalError","ClientRedirect"],eM=(e,r,t,a,n,o)=>{var i=Date.now();e({navigations:{clientRequestTimestampMs:i,request:[{eventTimestampMs:i,fromPage:t.page,fromParams:Object.entries(t.params).map(([e,r])=>({key:e,value:"object"!=typeof r?String(r):JSON.stringify(r)||""})),fromPath:t.path,fromRoute:JSON.stringify(t),identifierType:"TA_PERSISTENTCOOKIE",navigationType:"PAGE_VIEW"===n||"FRAGMENT_PUSH"===n||"PARAM_UPDATE"===n||"IN_PLACE"===n?"USER_INITIATED":n,opaqueIds:o?[{key:"MEMBER_UID",value:o}]:[],origin:location.origin,referrer:document.referrer,toPage:a.page,toParams:Object.entries(a.params).map(([e,r])=>({key:e,value:"object"!=typeof r?String(r):JSON.stringify(r)||""})),toPath:a.path,toRoute:JSON.stringify(a),uid:r,userAgent:navigator.userAgent}]}})},ej=(e,r)=>`${-1===e.indexOf("#")?e:e.split("#")[0]}${""!==(r||"")?`#${r||""}`:""}`;function eU({route:e,uid:r}){return eN(e,r),null}var e_=({bootstrapRoute:e,bootstrapUid:r,bootstrappedServerSideCanonicalized:n,onSessionIdChanged:c,children:d})=>{var[h,g]=i(e),[p,f]=i(r),[v,P]=i(!!n),y=l("INITIAL"),I=l(""),S=m(ew),b=N(),D=A(),E=l(!1),T=s((e,r="PAGE_VIEW",t=!1)=>{E.current||P(!1),h.page===e.page&&B(h.params,e.params)&&("PAGE_VIEW"===r||"PARAM_UPDATE"===r)?y.current=h.fragment!==e.fragment?"FRAGMENT_PUSH":"IN_PLACE":y.current=r;var a=t||"PAGE_VIEW"===y.current||"POP"===y.current||"PARAM_UPDATE"===y.current;(a||"INITIAL"===y.current)&&("referrer"in e&&null!=e.referrer?I.current=e.referrer:I.current=`https://${D}${h.path||"/"}`,eM(S,p,h,e,y.current,b)),g({page:e.page,params:e.params,path:ej(e.path,e.fragment),fragment:e.fragment}),a&&(c?.(eS(D)),f(er()))},[c,D,S,h,p,b]),w=s((e,r="FRAGMENT_PUSH")=>{h.fragment!==e&&(y.current=r,g({...h,path:ej(h.path,e),fragment:e||""}))},[h]),R=et(s(()=>{try{history.replaceState({...history.state,scrollY:window.scrollY},"",history.state?.path||h.path)}catch(e){console.error("Caught exception while accessing History API:",e)}},[h.path]),300),C=l("");o(()=>(C.current=window.location.hash,I.current=document.referrer||"","scrollRestoration"in history&&(history.scrollRestoration="manual"),window.addEventListener("scroll",R),()=>{window.removeEventListener("scroll",R)}),[R]);var O=l(null),k=$();o(()=>{var e=history.state?.scrollY;null!=e&&("POP"===y.current||"INITIAL"===y.current)&&window.scroll(0,e);try{"INITIAL"===y.current?(history.state&&"referrer"in history.state&&history.state.referrer&&(I.current=history.state.referrer),history.replaceState({...h,referrer:I.current},"",h.path)):"FRAGMENT_PUSH"===y.current?history.pushState({...h,referrer:I.current},"",h.path):"PARAM_UPDATE"===y.current?history.pushState({...h,referrer:I.current},"",h.path):"PAGE_VIEW"===y.current?(history.pushState({...h,referrer:I.current},"",h.path),window.scroll(0,0)):"IN_PLACE"===y.current&&history.replaceState({...h,referrer:I.current},"",h.path)}catch(e){console.error("Caught exception while accessing History API:",e)}},[h,D,k,T]);var L=l(T);return o(()=>{if(Object.defineProperty(document,"referrer",{configurable:!0,get:()=>I.current}),""!==C.current){var e=J(`${window.location.pathname}${window.location.search}${C.current}`);e&&(E.current=!0,L.current(e,"INITIAL"))}},[]),o(()=>{if(eL.includes(h.page)||E.current){E.current=!1;return}v||"INITIAL"!==y.current&&"PAGE_VIEW"!==y.current&&"POP"!==y.current&&"PARAM_UPDATE"!==y.current||K(k,h,"PARAM_UPDATE"===y.current).then(e=>{B(h,e)||(F.get(e.page)?.isClientNavigable({sourcePage:h.page})?(y.current="IN_PLACE",B(h.params,e.params)?g({...e,params:h.params}):g(e)):window.location.href=e.path)}),y.current="PAGE_VIEW",O.current=h},[h,D,k,v,T]),t(Q,{value:u(()=>Object.freeze({route:Y(h),navigate:T,navigateToFragment:w,uid:p}),[h,p,T,w]),children:[a(eU,{route:h,uid:p}),d]})},ex=({locale:e,children:r,webviewCurrencyOverride:t})=>{var{userSelectedCurrencyOverride:n}=k().preferences;return a(R,{value:u(()=>{var r=t??n??ea[e]?.currency??"USD";return"RMB"===r&&(r="CNY"),{locale:e,currency:r}},[t,e,n]),children:r})},eq=e=>{var r=l({});0===Object.keys(r.current).length&&(r.current={...e.messages});var[o,s]=i(!1),c=u(()=>({getMessage:e=>r.current[e]||null,loadMessages:e=>{Object.entries(e).forEach(([e,t])=>{r.current[e]=t})},showTranslationKeys:o,toggleShowTranslationKeys:()=>s(e=>!e)}),[o,s]),[m,p]=i(()=>e.sessionId||eS(e.domainName)),v=u(()=>Object.freeze(e.lithiumBootstrap),[e.lithiumBootstrap]),[I,A]=i(e.userId),T=u(()=>({userId:I,authenticate(e){void 0!==e.userId&&A(e.userId)}}),[I]),w=u(()=>({TAUD:null,...e.cookies}),[e.cookies]),R=Object.freeze(e.userAgent);return Object.freeze(R.os),Object.freeze(R.browser),Object.freeze(R.renderEngine),Object.freeze(R.jsEngine),a(M,{children:a(L,{taud:w.TAUD,children:a(eA,{locale:e.locale,webviewCurrencyOverride:e.webviewCurrencyOverride,children:a(D,{value:e.domainName,children:a(E,{value:e.cdnPrefix,children:a(P,{value:R,children:a(y,{value:e.securityToken,children:a(O,{value:T,children:a(g,{client:e.urqlClient,children:a(S,{children:a(b.Provider,{value:v,children:a(f,{value:m,children:a(eb,{bootstrapRoute:e.route[0],bootstrapUid:e.route[1].uid,bootstrappedServerSideCanonicalized:e.serverSideCanonicalized,onSessionIdChanged:p,children:a(en,{children:t(n,{children:[a(j,{}),a(C.Provider,{value:c,children:t(G,{children:[a(V,{lazyChunkIds:e.lazyChunkIds,appVersion:v.version,assets:e.assets}),a(d,{children:a(h,{children:a(z,{initialThemeStore:e.themeStore,children:e.children})})})]})})]})})})})})})})})})})})})})})})},ez=()=>{var{mode:e,setMode:r}=c(W);return t("div",{children:[a("h3",{children:"Hot Module Reload"}),a("p",{children:"Hot Module Reload is currently available for this application."}),t(ef,{name:"hmrRadio",ariaLabelledBy:"hmrRadioLabel",children:[a("b",{id:"hmrRadioLabel",children:"When a module needs to be reloaded:"}),a(ev,{value:"module",selected:"module"===e,onSelect:()=>r("module"),label:t(n,{children:["Use"," ",a("a",{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"react fast-refresh"})," ","to reinitialize the module in place"]})}),a(ev,{value:"document",selected:"document"===e,onSelect:()=>r("document"),label:"Refresh the underlying document"}),a(ev,{value:"ignore",selected:"ignore"===e,onSelect:()=>r("ignore"),label:"Ignore it"})]})]})},eV=()=>(eP("HMR",eE),null),eG=()=>H()?a(eV,{}):null,eH=({children:e})=>{var{login:r}=ec();return a(es.Provider,{value:r,children:e})},eW=()=>{o(()=>{var e=document.cookie.split(";").filter(e=>e.trim().startsWith("EVT="));e.length>0&&ei(new URLSearchParams(e[0].split("=")[1].split("*").map(e=>{var[r,t]=e.split(".",2);return[r,t]})))},[])},e$=({children:e})=>(eh(ed(X())),eW(),eI(),eT.useIsomorphicIncrement(1),t(n,{children:[a(eo,{}),t(eg,{children:[a(eG,{}),a(eH,{children:a(eu,{children:a(el,{children:e})})})]}),a(ep,{}),a(ey,{}),a(em,{})]}));return[()=>{eS=ek,eb=e_,eA=ex,eD=eq,eE=a(ez,{}),eT=new U({metricName:"1ItPi6291mgUX3pmUpNDSsfmvEFxiV4K34cxN6guTx3EpdY4BNvXGoihDjofJtUWQG/drmOjHz6q1IQmEQBD2g==",version:0,additionalLabels:["1ItPi6291mgUX3pmUpNDSrQC2e3FptICirP/9PT4nx1Dpa7sVgfT7EbUV+bLw5ErNvVZjTPjvBCLu33fU13esg=="],labelHooks:[_,x,q]}),e({LithiumContainer:eD,TripadvisorPage:e$,lithiumIdentifierPrefix:"lithium-",usePageViewLogging:eN})},[e=>(t=e.jsxs,a=e.jsx,n=e.Fragment),e=>(o=e.useEffect,i=e.useState,l=e.useRef,s=e.useCallback,u=e.useMemo,c=e.useContext),e=>d=e.KeyboardNavigationModeProvider,e=>h=e.CartHeaderProvider,e=>(g=e.default,m=e.useStatelessMutation),e=>(p=e.useSessionId,f=e.SessionProvider),e=>(v=e.useUserAgent,P=e.UserAgentProvider),e=>y=e.SecurityTokenProvider,e=>(I=e.useViewportCategory,S=e.ViewportCategoryProvider),e=>b=e.LithiumBootstrapContext,e=>(A=e.useDomainName,D=e.DomainNameProvider),e=>E=e.CdnPrefixProvider,e=>(T=e.useLocale,w=e.useCurrency,R=e.I18nProvider,C=e.Messages),e=>(N=e.useUserId,O=e.UserProvider),e=>(k=e.useTravelInfo,L=e.LithiumTravelInfoProvider),e=>(M=e.ErrorBoundary,j=e.WebMonitoring,U=e.Counter,_=e.useSourceLabel,x=e.useRenderLabel,q=e.useWebApplicationLabel),e=>z=e.LithiumThemeProvider,e=>V=e.default,e=>(G=e.HotModuleReloadControlContextProvider,H=e.useIsHotModuleReloadEnabled,W=e.HotModuleReloadControlContext),e=>$=e.useClient,e=>B=e.default,e=>F=e.pages,e=>(J=e.getRouteFromPath,K=e.tryToCanonicalizeRoute,Y=e.freezeRoute,Q=e.RouteProvider,X=e.usePageviewUid),e=>(Z=e.validSessionIdOrNull,ee=e.generateSessionGuid,er=e.generateLithiumPuid),e=>et=e.useDebouncedCallback,e=>ea=e.pointsOfSale,e=>en=e.default,e=>eo=e.PageViewLogger,e=>ei=e.enqueue,e=>el=e.PopupHierarchyLithiumProvider,e=>es=e.Login,e=>eu=e.AdServerProvider,e=>ec=e.default,e=>(ed=e.useConsentLogger,eh=e.useConsentFramework),e=>eg=e.default,e=>em=e.GoogleAnalyticsLoader,e=>ep=e.GoogleTagManager,e=>(ef=e.RadioGroup,ev=e.RadioButton),e=>eP=e.useDebugPane,e=>ey=e.Braze,e=>eI=e.useDatadomeEffect]]},["21h32l","o4yt4q","2r4qug","3cotbs","fbuhsy","al4vil","nnprhg","ahlu9q","ys6v1o","p5p2yo","qlcuu5","s6q22n","7thqz4","52far5","etaac9","83pm0d","g05qlv","vbk5jk","t9nvqo","mqwhqn","b5nukb","u5g3tb","fgwvq1","c3xckd","dsbyen","gyzem5","promjz","vumu0s","xj2t7q","xo1is3","lchj5q","iog21h","rdycz1","973cci","vjlqzu","4x6ber","904jnz","frf6ac","uvk21c","bt3bv2","98inwa"]]);
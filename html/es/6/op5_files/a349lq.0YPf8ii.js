(this.$WP=this.$WP||[]).push(["a349lq",(e,a)=>{var r,n,o,i,t,l,c,s,d,u,m,p,h,f,k,_,g,y,v,N,b,w,C,L,A,D,T,O,P,x,S,z,R,F,q,I,M,$,j,B,E,H,V,J,K,U,Q,G,W,Y,Z,X,ee,ea,er,en,eo,ei,et,el,ec={__key:0xe3d18675ba88,id:"e3d18675ba8804fe",loc:{},definitions:[]},es={logoRow:"MQpxt _Y",logo:"HAOGn F0",copyright:"CDuLn",links:"VPSQM",link:"Qxcli",paragraph:"VFcwS",expandDisclaimer:"ZGryi Cg b Wc _S y G_ B-"},ed=({link:e})=>{var a=w(e.isObfuscated?e.url:null),r=e.isObfuscated?a:e.url,n="cookie_consent"===e.trackAction,i=f({module:"Footer",action:"click",context:e&&e.trackAction||""}),t=e.preLocalizedAnchorText||e.localizedAnchorText;return o("span",{className:es.link,children:n?o(L,{variant:"primary",onClick:()=>{i(),D()},children:o(c,{id:"common_Cookie_consent_14f6"})}):o(L,{variant:"primary",href:r??"",rel:"noopener",target:e.newWindow?"_blank":"_self",onClick:i,leftAlign:!0,children:t})})},eu=({legalLinks:e,showLeonardoMessage:a})=>{var t,l=A(),[s,d]=y(!1),[{data:u}]=i({query:ec}),m=u?.currentLocale?.languageName||"",p=!1;Z.has(u?.currentLocale?.ietfLocale??"")?t=null:u?.currentLocale?.ietfLocale==="en"?(t="the United States",p=!0):t=u?.currentLocale?.country?.name||"";var h=[null!=t?o(c,{id:"footer_disclaimer_line1",args:{language:m,country:t}}):o(c,{id:"footer_disclaimer_line1_no_country",args:{language:m}}),r(n,{children:[o(c,{id:"footer_disclaimer_line2"}),p&&r(n,{children:[" ",o(c,{id:"footer_disclaimer_line2_estimates"})]})]}),o(c,{id:"footer_disclaimer_line3"})];return r(n,{children:[r("div",{className:es.logoRow,children:[o("img",{className:es.logo,src:`${l}/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg`,alt:"",loading:"lazy"}),r("div",{children:[o("div",{className:es.copyright,children:r(C,{variant:"supporting-02",children:[o(c,{id:"common_26ec",args:{0:Y}})," ",o(c,{id:"common_Allrightsreserved"})]})}),o("div",{className:es.links,children:o(C,{variant:"title-05",elementType:"span",children:(e||[]).map(e=>null!=e&&o(ed,{link:e},e.url))})})]})]}),r(C,{variant:"supporting-02",children:[a&&o("p",{className:es.paragraph,children:o(c,{id:"photos_provided_by_2_1bed",args:{0:"VFM Leonardo"}})}),s?h.map((e,a)=>o("p",{className:es.paragraph,children:e},a)):r("p",{className:es.paragraph,children:[h[0]," ",o("button",{className:es.expandDisclaimer,onClick:()=>d(!0),children:o(c,{id:"common_more_ffffe87d"})})]})]})]})},em=({link:e})=>{var a=k(),n=e.preLocalizedLink?.match(/^(.*)<a.*href="([^"]*)".*>(.*)<\/a>(.*)$/);if(null==n)return null;var[,i,t,l,c]=n;return r("li",{className:"rcHyD",children:[i,o(T,{theme:"standalone",display:"inline",href:t,target:"_blank",rel:"noopener",onClick:()=>{a({module:"Footer",action:"click",context:e.trackAction||""})},children:l}),c]})},ep=({partnerLinks:e})=>o(C,{variant:"supporting-01",children:o("ul",{className:"MD",children:(e||[]).filter(Boolean).map(e=>o(em,{link:e},e.preLocalizedLink))})}),eh=({link:e,trackingModule:a})=>{var r=k(),n="isObfuscated"in e&&e.isObfuscated,i=w(n?e.url:null);return o("li",{className:"ciSaE",children:o(T,{theme:"standalone",display:"inline",href:(n?i:e.url)??void 0,target:e.newWindow?"_blank":void 0,rel:`noopener${"cookie_consent"===e.trackAction?" nofollow":""}`,onClick:()=>r({module:a||"Footer",action:"click",context:e.trackAction||""}),children:e.preLocalizedAnchorText||e.localizedAnchorText})})},ef=({links:e,trackingModule:a})=>o(C,{variant:"supporting-01",children:o("ul",{children:(e||[]).filter(Boolean).map(e=>o(eh,{link:e,trackingModule:a},e.url))})}),ek={socialLinks:"zlkck A QA",link:"HqkqA Cl _F"},e_=e=>{switch(e){case"facebook":return o(P,{size:24});case"twitter":return o(R,{size:24});case"instagram":return o(x,{size:24});case"pinterest":return o(z,{size:24});default:return o(S,{size:24})}},eg=({socialLinks:e})=>{var a=k(),r=O();return o("div",{className:ek.socialLinks,children:(e||[]).map(e=>e&&null!=e.url&&o("a",{href:e.url,rel:"noopener",className:u(ek.link,r),onClick:()=>{a({module:"Footer",action:"click",context:e&&e.trackAction||""})},title:e.preLocalizedAnchorText??e.localizedAnchorText??void 0,"aria-label":e.preLocalizedAnchorText??e.localizedAnchorText??void 0,children:e_(e.trackAction)},e.url))})},ey=()=>{var{localize:e}=s(),{page:a}=F(),r=k(),n=I(),i=j(),{setCurrency:t}=q().update.preferences,[l,c]=y(!1),[{data:d}]=B(!l),u=v(()=>{var e=new Set;return[...d?.majorCurrencies||[],...d?.minorCurrencies||[]].map(a=>e.has(a?.code)||a?.name==null||null==a.code||null==a.symbol?null:(e.add(a.code),{value:a.code,displayName:`${a.symbol}\u00a0\u00a0${a.name}`,label:a.name})).filter(Boolean)},[d]),m=i.symbol===i.code?i.symbol:`${i.symbol} ${i.code}`;return o($,{options:u,value:i.code,onChange:e=>{n({itemType:"Currency_Dropdown",itemName:"Currency_Dropdown_Change",customData:JSON.stringify({defaultCurrency:i.code,newCurrency:e}),page:a,actionType:"click"}),t(e)},label:e.string("common_9bc"),selectedDisplayName:m,menuVariant:"leading-bottom-caret",onOpen:()=>{n({itemType:"Currency_Dropdown",itemName:"Currency_DropdownClick",actionSubType:"Dropdown_Open",customData:JSON.stringify({defaultCurrency:i.code}),page:a,actionType:"click"}),r({module:"CURRENCY_PICKER",action:"Open",context:i.code}),c(!0)},fullscreenMobile:!0,loading:!u})},ev=({currentPath:e})=>{var{localize:a}=s(),{page:r}=F(),n=k(),t=I(),l=M(),{pointOfSaleName:c}=i({query:ec})[0].data?.currentLocale||{},u=d(),[m,p]=y(void 0),[{data:h}]=E(m),f=v(()=>[...h?.Americas||[],...h?.Europe||[],...h?.APAC||[],...h?.AfricaAndMiddleEast||[]].filter(Boolean).map(({locale:a,pointOfSaleName:o,hostname:i})=>null!=a&&null!=o&&null!=i?{displayName:o,href:`https://${i}${e}?fromPos=${u}&toPos=${a}&pickerLocation=footer`,onClick:()=>{n({module:"POS_PICKER",action:"SELECT",context:`${a}_FROM_${u}`}),l({itemType:"POS_Dropdown",itemName:"POS_Dropdown_Change",customData:JSON.stringify({defaultPos:u,newPos:a}),page:r,actionType:"click"})}}:null).filter(Boolean),[h,r,e,u,n,l]);return o($,{mode:"menu",options:f,label:a.string("footer_region"),selectedDisplayName:c||"",menuVariant:"trailing-bottom-caret",onOpen:()=>{t({itemType:"POS_Dropdown",itemName:"POS_DropdownClick",actionSubType:"Dropdown_Open",customData:JSON.stringify({defaultPos:u}),page:r,actionType:"click"}),n({module:"POS_PICKER",action:"Open",context:u}),p(window.location.hostname)},fullscreenMobile:!0,loading:!f})},eN={LIGHT:"Light theme",DARK:"Dark theme"},eb=[{displayName:"Use your device settings",value:"AUTO"},{displayName:"Dark theme (beta)",value:"DARK"},{displayName:"Light theme",value:"LIGHT"}],ew=()=>{var{theme:e,themePreferenceOrAuto:a,setTheme:r}=p(),n=I(),i=N(()=>{n({itemType:"theme-switcher",itemName:"global-footer",actionType:"click",customData:JSON.stringify({action:"open"})})},[n]),t=N(e=>{r(e),n({itemType:"theme-switcher",itemName:"global-footer",actionType:"click",customData:JSON.stringify({action:"select",theme:e})})},[n,r]);return o($,{mode:"select",menuVariant:"trailing-bottom-caret",label:"Appearance",selectedDisplayName:eN[e],options:eb,value:a,onOpen:i,onChange:t})},eC={container:"KoJoc Cj Pl PN Py PA",pickers:"sVVKe Q2",footer:"dLJNv",detailed:"vhldu",social:"jkVHQ",links1:"wEeet",links2:"VJiOT",links3:"FNtVm",partners:"DBFqh",legal:"MfOiD",withThemePicker:"DUehT"},eL=({header:e,children:a,dataAutomationTag:n})=>{var i=b(),t=b(),c="DESKTOP"!==l(),[s,d]=y(!1),m=O(),p=n?{"data-automation":n}:{},h=N(()=>d(e=>!e),[]),f=N(e=>{switch(e.key){case" ":case"Enter":d(e=>!e),e.preventDefault();break;case"ArrowDown":case"ArrowRight":d(!0),e.preventDefault();break;case"ArrowUp":case"ArrowLeft":d(!1),e.preventDefault()}},[]);return r("div",{className:u("BGfZK",{yVneo:s}),children:[r("div",{className:u("lRfGJ",c&&m),id:i,...c?{role:"button","aria-controls":t,"aria-expanded":s,onClick:h,onKeyDown:f,tabIndex:0}:{},children:[o("div",{className:"woaMF",children:s?o(H,{}):o(V,{})}),o("div",{className:"HRDdz",children:o(C,{variant:"body-01",children:e})})]}),o("section",{className:"cQtCs",id:t,"aria-labelledby":i,...p,children:a})]})},eA=["Home","NotFound","Articles","ArticlesHome"],eD=["Hotel_Review","ShowUserReview"],eT=({footerLinks:e,currentPath:a})=>{var i=h(),t=eA.includes(i),{canChangeThemes:l}=p(),s=k(),f=g(()=>{"Hotel_Review"===i&&s({module:"footer",action:"in_view",context:"Hotel_Review"})}),y=_(),v=j(),N=d(),b=g(()=>{y({itemType:"Currency_Dropdown",itemName:"Currency_DropdownImp",page:i,customData:JSON.stringify({defaultCurrency:v.code})}),y({itemType:"POS_Dropdown",itemName:"POS_DropdownImp",page:i,customData:JSON.stringify({defaultPos:N})})});return o("footer",{className:eC.container,children:o(m,{children:r("div",{ref:f,className:u(eC.footer,{[eC.detailed]:t,[eC.withThemePicker]:l}),children:[t&&r(n,{children:[o("div",{className:eC.links1,children:o(et,{header:o(c,{id:"footer_about_ta_v2"}),dataAutomationTag:"footer_section_about_ta",children:o(ea,{links:e&&e.aboutUsLinks})})}),o("div",{className:eC.links2,children:o(et,{header:o(c,{id:"footer_explore_v2"}),dataAutomationTag:"footer_section_explore",children:o(ea,{links:e&&e.exploreLinks})})}),r("div",{className:eC.links3,children:[o(et,{header:o(c,{id:"footer_do_business_v2"}),dataAutomationTag:"footer_section_do_business",children:o(ea,{links:e&&e.businessLinks})}),e?.appLinks!=null&&e.appLinks.length>0&&o(et,{header:o(c,{id:"footer_get_app_v2"}),dataAutomationTag:"footer_section_get_app",children:o(ea,{links:e&&e.appLinks})})]}),e?.partnerLinks!=null&&e?.partnerLinks.length>0&&o("div",{className:eC.partners,children:o(et,{header:o(c,{id:"footer_ta_sites_v2"}),dataAutomationTag:"footer_section_ta_sites",children:o(ee,{partnerLinks:e.partnerLinks})})})]}),r("div",{className:eC.pickers,ref:b,children:[o(en,{}),o(eo,{currentPath:a}),l&&o(ei,{})]}),t&&o("div",{className:eC.social,children:o(er,{socialLinks:e&&e.socialLinks})}),o("div",{className:eC.legal,children:o(X,{legalLinks:e&&e.legalLinks,showLeonardoMessage:eD.includes(i)})})]})})})},eO={__key:0x61842e0c4ee4,id:"61842e0c4ee49dd9",loc:{},definitions:[]},eP=(e,a)=>a?U.error:e?.footerLinks==null?U.missing:U.ok,ex=({geoId:e,pageName:a,currentPath:c})=>{var{os:{family:s}}=t(),u=l(),[{data:m,fetching:p,error:h}]=i({query:eO,variables:{locale:d(),pageName:a||"",geoId:e,isMobile:"MOBILE"===u,osFamily:"IOS"===s||"ANDROID"===s?s:"UNKNOWN"}}),f=eP(m,h);return r(Q,{errorRenderer:()=>r(n,{children:[o(J,{component:K.footer,status:U.error,enabled:!p}),o(J,{component:K.footer,status:f,increment:-1,enabled:!p})]}),children:[o(J,{component:K.footer,status:f,enabled:!p}),o(el,{footerLinks:m?.footerLinks,currentPath:c||"/",pageName:a||""})]})},eS=["ForumHome"],ez=({showMasthead:e=!0})=>{var{page:a}=F(),n=!eS.includes(a);return o(m,{children:r("div",{className:"hqlkK Pg PN Pt PA Cj",children:[e&&o(W,{}),n&&o(G,{})]})})};return[()=>{Y=new Date().getFullYear(),Z=new Set(["ar","zh-Hans"]),X=eu,ee=ep,ea=ef,er=eg,en=ey,eo=ev,ei=ew,et=eL,el=eT,e({OnPageAssets:ez,default:ex})},[e=>(r=e.jsxs,n=e.Fragment,o=e.jsx),e=>i=e.useQuery,e=>t=e.useUserAgent,e=>l=e.useViewportCategory,e=>(c=e.default,s=e.useLocalize,d=e.useLocale),e=>u=e.default,e=>m=e.default,e=>p=e.useTheme,e=>h=e.default,e=>(f=e.useGARecordCallback,k=e.useGARecorder),e=>_=e.default,e=>g=e.useOnVisible,e=>(y=e.useState,v=e.useMemo,N=e.useCallback,b=e.useId),e=>w=e.useObfuscatedUrl,e=>C=e.default,e=>L=e.BorderlessButton,e=>A=e.useCdnPrefix,e=>D=e.showConsentPreferences,e=>T=e.default,e=>O=e.useKeyboardFocusableClassName,e=>P=e.default,e=>x=e.default,e=>S=e.default,e=>z=e.default,e=>R=e.default,e=>F=e.useRoute,e=>q=e.useTravelInfo,e=>(I=e.default,M=e.useBlockingInteractionLogger),e=>$=e.DropdownMenu,e=>(j=e.useSelectedCurrencyInfo,B=e.useCurrencyPickerQuery),e=>E=e.usePosPickerQuery,e=>H=e.default,e=>V=e.default,e=>(J=e.StatusCounter,K=e.Component,U=e.Status),e=>Q=e.ErrorBoundary,e=>G=e.BreadcrumbsInFooter,e=>W=e.default]]},["21h32l","mqwhqn","nnprhg","ys6v1o","7thqz4","fkji80","94v69w","u9jlwp","eqoaya","32pwc7","xg719z","3btuy0","o4yt4q","ay1l3c","essqvy","jppfwt","s6q22n","973cci","lr6tb6","2r4qug","0v7vxf","008v8e","ue3yko","it6k5j","5azdze","fgwvq1","etaac9","r73jw8","ntn269","556vjb","q18gbm","mxujx7","2wld0u","6nmgrj","83pm0d","n1m6wk","75vfyw"]]);

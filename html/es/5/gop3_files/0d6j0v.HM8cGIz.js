(this.$WP=this.$WP||[]).push(["0d6j0v",(e,i)=>{var n,r,a,l,s,t,d,o,c,m,u,f,h,g,v,p,b,O,_,y,C,x,M,w,L,R,k,E,P,D,S,N,I,A,T,B,H,W,F,U,V,z,q,$,G,j,K,J,Q,Y,X,Z,ee,ei,en,er,ea,el,es,et,ed,eo,ec,em,eu,ef,eh,eg,ev,ep,eb,eO,e_={textHighlight:"b",disclaimerBox:"z Mf",optimusLogo:"MH"},ey=({offers:e,variant:i,datesGuestsChanged:a})=>{var l,s=I(),t=es(),d=et(()=>{t({optimusOfferDisclosure:{type:i,pageviewUid:s}})});if(!a&&"PLUS_OFFER_CHANGE"===i||a&&"NO_PLUS_OFFER"===i)return null;var o=e.some(e=>e?.data?.isOptimusOffer);switch(i){case"PLUS_OFFER_CHANGE":l=o?n(Y,{id:"plus_offers_may_have_changed_message",args:{0:e_.textHighlight}}):null;break;case"NO_PLUS_OFFER":l=o?null:n(Y,{id:"plus_offer_not_available_message"});break;default:l=null}return l?r("div",{className:e_.disclaimerBox,ref:d,children:["NO_PLUS_OFFER"===i&&n("div",{className:e_.optimusLogo,children:n(el,{variant:"plus-logo-text",height:16})}),n(ei,{variant:"supporting-02",marginBottom:"spacing-03",children:l}),n(er,{})]}):null},eC=(e,i)=>({datesGuestsChanged:!!e.page.datesGuestsChanged,...i}),ex=({locationId:e,specialOffer:i})=>{var r="MOBILE"===C(),a=A().page;return(l(()=>{r&&i&&ec({module:"hotel_review",action:"ba_special_offer_mobile_web",value:1})},[i,r]),r)?n("div",{className:"Pc Pn MA",children:n(eo,{locationId:e,coupon:i,servlet:a,icon:"special-offer-fill",layout:"about",linkLevel:"level_2",linkSolidUnderline:!0})}):null},eM=()=>n(ed,{children:(e,i,r,a)=>e&&i&&!a?n(ex,{locationId:e,specialOffer:i}):null}),ew={wrap:"lqzkg",commerceRedesignMW:"ckdyO Re",expandCommerceRedesignMW:"vXupC c",hrMainCommerceRedesign:"lZKfA",chevronIcon:"dZVVI Vm",secondary:"JKhQH",invalidShade:"Wkqpp G5 l t _U s",disclaimerLine:"rRxxD o W q _S",disclaimerMessage:"nulNe",disclaimerMessageRedesignCommerceMW:"QAwjX",disclaimerTeaser:"Kchxi",disclaimerTeaserRedesignCommerceMW:"UussA c",mobileDisclaimerRedesignTextLink:"bDtSu _P",mobexpand:"YiGCY",viewAllLink:"KgcsX _S",viewAllOverlay:"JwQzf",mobile_view_all:"MpJsN",mobileDisclaimer:"MCUlA",mobileDisclaimerRedesign:"rpBSm _P",secondaryCommerceBorderlessButton:"UPzWc j"},eL=e=>!e.isInvalid&&e.textLinkOffers.length>0,eR=e=>{var i=[...e.chevronOffers,...e.textLinkOffers,...e.hiddenOffers];return i.length>=2?i.splice(0,2):[...e.chevronOffers||[]]},ek=e=>[...e.chevronOffers,...e.textLinkOffers,...e.hiddenOffers],eE=(e,i)=>i?e.filter(e=>"AVAILABLE"===e.status).length:e.length,eP=e=>{var{localize:i}=X(),{isOptimusSubscriber:a}=V(),l=Q(),s=[...e.chevronOffers,...e.textLinkOffers,...e.hiddenOffers],t=h("optimus_paywall")&&!a||!l;return n(j,{below:!0,contents:i=>n("div",{className:ew.viewAllOverlay,children:s.map((r,a)=>n(o,{children:n("div",{onClick:t&&r.data.isOptimusOffer?()=>void 0:i,children:e.renderHidden(r)})},`${r.data&&r.data.contentId}_${a+0}`))}),closeButton:!1,arrowType:"small",fixed:e.isStickyCommerce,isUpdatedOnScroll:e.isStickyCommerce,children:(a,l,t,d)=>r("div",{ref:a,className:ew.viewAllLink,onClick:d?t:l,children:[i("view_all_n_deals_plural",{0:s.length}),n("span",{className:"ui_icon caret-down","data-automation":e.complete?"viewAllDealsLoaded":null})]})})},eD=e=>{var{localize:i}=X(),{isYellowBorderVariant:l,isBorderlessButtonVariant:s}=e.designSystemSecondaryButtonExperiment??{},t=ek(e),d=t.filter(e=>null!==e.priceText||null!==e.taxesAndFeesText||null!==e.totalStayText),c=e.redesignCommerceMWExperiment?.isEnabled?d:t,m=e.renderHiddenMobile||e.renderHidden,h=eE(c,e.hrMainCommerceRedesign?.isEnabled),g=r(a,{children:[e.lowestPrice?i("view_all_deals_from_commerce_on_list_screen",{0:h,1:e.lowestPrice}):i("view_all_n_deals_plural",{0:h})," ",(e?.redesignCommerceMWExperiment?.isEnabled||e.hrMainCommerceRedesign?.isEnabled)&&n(ee,{name:"single-chevron-down",className:ew.chevronIcon})]}),v=r(a,{children:[i("collapse_deals")," ",(e?.redesignCommerceMWExperiment?.isEnabled||e.hrMainCommerceRedesign?.isEnabled)&&n(ee,{name:"single-chevron-up",className:ew.chevronIcon})]});return n(f,{handle:(i,a)=>{a||ea("detail-offers").on("toggle",i);var t=n("span",{className:ew.mobexpand,children:a?v:g}),d=n(ei,{variant:"button-04",marginTop:e.hrMainCommerceRedesign?.isEnabled?"spacing-01":"spacing-03",marginBottom:e.hrMainCommerceRedesign?.isEnabled?"spacing-01":"spacing-02",children:a?v:g});return e.hrMainCommerceRedesign?.isEnabled&&e.textLinkOffers?.[0].status==="IN_PROGRESS"?n(en,{height:17,marginTop:16,marginBottom:16}):l?n(b,{variant:"secondary-commerce",fullWidth:!0,onClick:i,children:t}):s?n("div",{className:ew.secondaryCommerceBorderlessButton,children:r(O,{variant:"primary",onClick:i,children:[t,a?n(_,{size:18,marginLeft:"spacing-01"}):n(y,{size:18,marginLeft:"spacing-01"})]})}):e?.redesignCommerceMWExperiment?.isEnabled||e?.hrMainCommerceRedesign?.isEnabled?n("div",{className:u(ew.expandCommerceRedesignMW,{[ew.hrMainCommerceRedesign]:e?.hrMainCommerceRedesign?.isEnabled}),children:h<=1?void 0:n(O,{variant:"primary-small",onClick:i,children:d})}):n(Z,{type:"secondary",size:"fullwidth",onClick:i,children:t})},initiallyExpanded:e.expandDealsByDefault,children:()=>n("div",{children:c.filter(i=>!e.hrMainCommerceRedesign?.isEnabled||"AVAILABLE"===i.status).map((e,i)=>n(o,{children:m(e)},`${e.data&&e.data.contentId}_${i+0}`))})})},eS=({text:e,isRightAligned:i,isRedesign:l})=>{var{localize:s}=X(),t=C();if(!e)return null;var d=r(a,{children:[e," ",h("hamon_fr")?n("a",{href:"/pages/service.html",children:s("hotel_info_about_service")}):null]});return"MOBILE"===t?r("div",{className:u(ew.mobileDisclaimer,{[ew.mobileDisclaimerRedesign]:l}),children:[" ",d]}):n(J,{message:d,leftOf:i,children:i=>n("div",{ref:i,className:ew.disclaimerLine,children:e})})},eN=(e,i,l,s,t)=>i?r(a,{children:[s&&n(G,{mobileContainerStyle:"inset",onClose:()=>t(!1),children:n(ei,{variant:"supporting-01",children:n("div",{className:ew.disclaimerMessageRedesignCommerceMW,children:e.disclaimerMsg})})}),n(O,{onClick:()=>t(!0),variant:"accent",children:n("div",{className:ew.disclaimerTeaserRedesignCommerceMW,children:r(ei,{variant:"supporting-02",children:[e.teaserText,n(ee,{name:"exclamation-circle"})]})})})]}):r(a,{children:[l&&n(er,{}),l?r("div",{className:u(ew.disclaimerTeaser,{[ew.mobileDisclaimerRedesignTextLink]:l}),onClick:()=>t(!0),children:[n("span",{children:e.teaserText}),n(ee,{name:"exclamation-circle"})]}):n(q,{name:"disclaimer_modal",children:i=>r("div",{className:u(ew.disclaimerTeaser,{[ew.mobileDisclaimerRedesignTextLink]:l}),onClick:i,children:[n("span",{children:e.teaserText}),n(ee,{name:"exclamation-circle"})]})}),l&&s?n(G,{mobileContainerStyle:"inset",onClose:()=>t(!1),children:n(ei,{variant:"supporting-01",children:n("div",{className:ew.disclaimerMessageRedesignCommerceMW,children:e.disclaimerMsg})})}):n($,{name:"disclaimer_modal",children:n("div",{className:ew.disclaimerMessage,children:e.disclaimerMsg})})]}),eI=e=>{var i,{localize:a}=X(),c=W(),m=Q(),f="MOBILE"===C(),[p]=t(m);l(()=>{c&&m!==p&&!p&&window.location.reload()},[c,m,p]);var{complete:b,datesGuestsChanged:O}=e,_=0+e.chevronOffers.length;l(()=>{N([...e.chevronOffers,...e.textLinkOffers,...e.hiddenOffers])});var{params:y}=A(),x="newPlusSubscriber"in y&&y.newPlusSubscriber,M="detailId"in y?y.detailId:void 0,w="referringFunnelKey"in y?y.referringFunnelKey:void 0,L=h("optimus_paywall"),R=d(()=>({isModalCheckout:L}),[L]),[k,E]=t(!1),[P,D]=t(!1),S=s(()=>{D(!0),E(!1)},[]),[I,T]=t(!1),H=d(()=>({isPopoverOpen:I,setPopoverOpen:T}),[I,T]),[V,z]=t(!1);l(()=>{P||E(!L&&!!x&&!O)},[x,O,P,L]);var{isSecondaryCUGOfferUIEnabled:q}=e,$=q?eR(e):(i=e.chevronOffers).length>1&&f?[i[0]]:[...i||[]],G=$.length>0&&$[0].isSPSingleOffer;return n(U.Provider,{value:k,children:n(B.Provider,{value:R,children:n(K.Provider,{value:H,children:r("div",{className:ew.wrap,children:[e.renderAlert?e.renderAlert():null,x&&n(eh,{offers:$,variant:x?"NO_PLUS_OFFER":"PLUS_OFFER_CHANGE"}),k&&!e.isRefreshPopupOpen&&n(F,{hotelId:M||0,funnelKey:w,closeModal:S}),r("div",{className:u("premium_offers_area offers",{[ew.commerceRedesignMW]:e?.redesignCommerceMWExperiment?.isEnabled}),"data-hac-complete":b?"true":null,"data-is-any-available":e.isAnyOfferAvailable,"data-section-signature":"meta","data-sponsoredlisting":e.sponsoredListingData?JSON.stringify(e.sponsoredListingData):null,children:[e.renderOfferHeader?e.renderOfferHeader(a):null,n("div",{children:$.map((i,r)=>n(o,{children:1===$.length||q?e.renderDominant(i):e.renderChevron(i)},`${i.data&&i.data.contentId}_${r+0}`))}),n(()=>e.textLinkOffers.length<=0&&$.length<=0?null:n("div",{className:`${ew.secondary} is-hidden-mobile`,children:e.textLinkOffers.length<=0||G?null:r(g,{multiline:!0,gaplessVertical:!0,children:[e.textLinkOffers.map((i,r)=>n(v,{width:6,children:e.renderTextLink(i)},`${i.provider}_${r+_}`)),e.hiddenOffers.length<=0||G?null:n(v,{children:n(eP,{...e})})]})}),{})]}),eL(e)?r("div",{className:u("is-hidden-tablet",{[ew.mobile_view_all]:!e.redesignCommerceMWExperiment?.isEnabled&&!e?.hrMainCommerceRedesign?.isEnabled}),children:[n(eD,{...e}),e.additionalDisclaimer&&eN(e.additionalDisclaimer,e.redesignCommerceMWExperiment?.isEnabled,e.hrMainCommerceRedesign?.isEnabled,V,z)]}):null,!e.redesignCommerceMWExperiment?.isEnabled&&n(eS,{text:e.priceDisclaimer,isRightAligned:e.isRightAligned,isRedesign:e.hrMainCommerceRedesign?.isEnabled}),e.isInvalid?n("div",{className:ew.invalidShade}):null]})})})})},eA=(e,i)=>()=>i(e),eT=(e,i)=>n=>i({...e,offer:n}),eB=e=>e?.listing?.chevronOffers?.find(e=>e.isLowestPrice)?.totalStayText||e?.listing?.textLinkOffers?.find(e=>e.isLowestPrice)?.totalStayText||e?.listing?.hiddenOffers?.find(e=>e.isLowestPrice)?.totalStayText,eH=e=>{var i=D(e),l=S(e);H(!0);var{params:t}=A(),d=T(),o="MOBILE"===C(),c=x(),m=M(),u=w(),f="promotePlusDominant"in t&&t.promotePlusDominant,h="trayInitiallyExpanded"in t&&t.trayInitiallyExpanded,g=L(),v=R(),{enabled:p}=k(),b=[...e?.listing?.chevronOffers||[],...e?.listing?.textLinkOffers||[],...e?.listing?.hiddenOffers||[]],O=o&&b.length>2&&b[1].data.isMemberRate,_={...e,isSecondaryCUGOfferUIEnabled:O,redesignCommerceMWExperiment:m,hrMainCommerceRedesign:u,designSystemSecondaryButtonV1Enabled:g.isYellowBorderVariant,allInPriceExperiment:v,viewDealCtaUpdateEnabled:p},y=e?.listing?.lowestPrice;(v.isPTotalSNightlyVariant||v.isPTotalVariant)&&(y=eB(e));var N=s(()=>{var i=[...e?.listing?.chevronOffers||[]],n=[...e?.listing?.textLinkOffers||[]],r=i.find(e=>!0===e.data.isOptimusOffer);return f&&r&&i.length>1?[[r],[...i.filter(e=>!0!==e.data.isOptimusOffer),...n]]:[[...i],[...n]]},[f,e?.listing?.chevronOffers,e?.listing?.textLinkOffers]);if(z(e?.listing?.complete&&e?.listing?.hasOptimusOffers||!1),!e.listing)return null;if(l&&e.renderNoCommerce)return n(a,{children:e.renderNoCommerce(e)});if(e.listing.complete&&!i&&e.renderNoAvailability)return n(a,{children:e.renderNoAvailability(e)});var[I,B]=N();return n(E,{samplingRate:.005,children:n(P.Consumer,{children:({setCustomAttributes:l})=>(l({isDefaultDates:d.hotels?.defaultDates,tabbedLayoutFullyTabbedVariant1:c.fullyTabbedVariantEnabled,tabbedLayoutScrollableVariant2:c.scrollableVariantEnabled}),r(a,{children:[n(eI,{chevronOffers:I,textLinkOffers:B,hiddenOffers:e?.listing?.hiddenOffers||[],isAnyOfferAvailable:i,complete:!!e?.listing?.complete,priceDisclaimer:e?.listing?.priceDisclaimer,additionalDisclaimer:e?.listing?.additionalDisclaimer,sponsoredListingData:e?.listing?.sponsoredListingData,lowestPrice:y,isInvalid:!!e.loading,isRefreshPopupOpen:e.isRefreshPopupOpen,renderAlert:e.renderAlert&&eA(e,e.renderAlert),renderOfferHeader:e.renderOfferHeader&&eA(e,e.renderOfferHeader),renderDominant:eT(_,e.renderDominant),renderChevron:eT(_,e.renderChevron),renderHidden:eT({...e,allInPriceExperiment:v},e.renderHidden),renderTextLink:eT({...e,allInPriceExperiment:v},e.renderTextLink),renderHiddenMobile:e.renderHiddenMobile&&eT({...e,allInPriceExperiment:v,redesignCommerceMWExperiment:m,hrMainCommerceRedesign:u},e.renderHiddenMobile),expandDealsByDefault:e.expandDealsByDefault||h,lastReferrer:e.lastReferrer,setPaywallIsBlocking:e.setPaywallIsBlocking,datesGuestsChanged:!!e.datesGuestsChanged,designSystemSecondaryButtonExperiment:g,isRightAligned:e.isRightAligned,isStickyCommerce:e.isStickyCommerce,isSecondaryCUGOfferUIEnabled:O,redesignCommerceMWExperiment:m,hrMainCommerceRedesign:u}),n(eg,{})]}))})})},eW=/^https?:\/\/[a-z\-\.]+\.tripadvisor\.[a-z\-\.]+\/([A-Za-z_+]+)-/,eF=e=>{var i=c(null),n=c(null),r=c(null),a=c(!1),s=em();return l(()=>{if(e.populated){var l=Date.now();n.current||(n.current=l),e.clickable&&(r.current||(r.current=l),e.complete&&!i.current&&(i.current=l))}if(!a.current&&i.current&&(a.current=!0,window.performance&&window.performance.timing)){var{timing:t}=window.performance,d=t.fetchStart;if(d){var o=t.domInteractive,c=e.page||"unknown",m=e.mode||"default",u=null;if("string"==typeof document.referrer){var f=eW.exec(document.referrer);f&&(u=f[1])}var h=[c,m,u=u||"external"],g=[];o&&g.push({name:"nav_to_meta_active",value:o-d,labels:h}),n.current&&g.push({name:"nav_to_meta_filled",value:n.current-d,labels:h}),r.current&&g.push({name:"nav_to_meta_clickable",value:r.current-d,labels:h}),i.current&&g.push({name:"nav_to_meta_complete",value:i.current-d,labels:h}),s(g)}}},[e.page,e.mode,e.populated,e.clickable,e.complete,s]),null},eU=(e,i)=>{var n=e?.route?.page||"unknown",r=window.__NAV_DATA_PROMISE__?"template":"normal",a=!!i?.listing?.complete,l=a||!!i?.listing?.chevronOffers;return{page:n,mode:r,populated:l,clickable:a||l&&!!i?.listing?.chevronOffers?.length,complete:a}},eV=({text:e})=>n("div",{className:"VostL Pc c is-hidden-mobile",children:n("span",{dangerouslySetInnerHTML:{__html:e}})}),ez={header:"hYCpv",nobutton:"Vutqb",button:"undfk Mc Nb MC NC w"},eq=({textNode:e,buttonText:i,buttonLink:a,newTab:l})=>r("div",{"data-section-signature":"meta",children:[n("div",{className:`${ez.header} ${i&&a?"":ez.nobutton}`,children:e}),i&&a?n("a",{className:`${ez.button} ui_button primary`,href:a,target:l?"_blank":null,children:i}):null]}),e$={__key:0xc4f6183cd13d,id:"c4f6183cd13d8fa8",loc:{},definitions:[]},eG=({locationId:e=0,isMobile:i,commerceCountryId:r,servletName:a,children:l})=>n(eu,{query:e$,variables:{locationId:e,deviceType:i?"MOBILE":"DESKTOP",commerceCountryId:r,servletName:a||"",hotelTravelInfo:ef()},children:({data:e,fetching:i})=>{var n=e&&e.locations&&e.locations.length&&e.locations[0]||null,{contactLinks:r}=n?.businessAdvantageData||{},a=r&&r.find(e=>e?.contactLinkType==="URL_HOTEL");return l(n?.locationId,a,i)}});return[()=>{eh=m(eC)(ey),eg=eM,ev={renderAlert:void 0,renderOfferHeader:void 0,sponsoredListingData:void 0,renderHiddenMobile:void 0,priceDisclaimer:void 0,additionalDisclaimer:void 0,isInvalid:!1,lowestPrice:void 0},eP.defaultProps=ev,eD.defaultProps=ev,eI.defaultProps=ev,ep=m((e,i)=>({expandDealsByDefault:i.expandDealsByDefault||void 0!==e.route.expandDeals,lastReferrer:e.meta.referrerUrl||"",isRefreshPopupOpen:e.page.isRefreshPopupOpen||!1,datesGuestsChanged:!!e.page.datesGuestsChanged}),e=>({setPaywallIsBlocking:i=>e(p.page.hotels.setPaywallIsBlocking(i))}))(eH),eb=m(eU)(eF),eO=eV,eq.defaultProps={buttonText:void 0,buttonLink:void 0,newTab:!1},e({HotelDetailNoAvailability:eq,HotelDetailOffers:ep,HotelDetailOffersHeader:eO,HotelWebsiteProvider:m(e=>({locationId:e.page.detailId,isMobile:"MOBILE"===e.meta.device.viewportCategory,commerceCountryId:e.meta.commerceCountryId,servletName:e.meta.initialServletName}))(eG),MetaPerfRecorder:eb})},[e=>(n=e.jsx,r=e.jsxs,a=e.Fragment),e=>(l=e.useEffect,s=e.useCallback,t=e.useState,d=e.useMemo,o=e.Fragment,c=e.useRef),e=>m=e.connect,e=>u=e.default,e=>f=e.default,e=>h=e.featureIsEnabled,e=>(g=e.Columns,v=e.Column),e=>p=e.actions,e=>(b=e.default,O=e.BorderlessButton),e=>_=e.default,e=>y=e.default,e=>C=e.useViewportCategory,e=>(x=e.useTabbedLayout,M=e.useRedesignCommerceMW,w=e.useHRMainCommerceRedesignMW,L=e.useDesignSystemSecondaryButtonOnHR,R=e.useAllInPricingDisplayVariant,k=e.useViewDealCtaUpdate),e=>(E=e.HotelsFullStoryProvider,P=e.HotelsFullStoryContext),e=>(D=e.isAnyAvailable,S=e.isNoCommerce,N=e.trackHRCugShown),e=>(I=e.usePageviewUid,A=e.useRoute),e=>T=e.useTravelInfo,e=>B=e.default,e=>H=e.useOptimusCashbackHotelsUserEducationEnabled,e=>W=e.useIsAnyOptimusExperiment,e=>(F=e.default,U=e.IsConfirmationModalOpen),e=>V=e.default,e=>z=e.default,e=>q=e.Opener,e=>$=e.Modal,e=>G=e.ModalContainer,e=>(j=e.default,K=e.PopoverContext),e=>J=e.default,e=>Q=e.useUserId,e=>(Y=e.UnsafeLocalize,X=e.useLocalize),e=>Z=e.default,e=>ee=e.Icon,e=>ei=e.default,e=>en=e.default,e=>er=e.default,e=>ea=e.createRadio,e=>el=e.default,e=>es=e.useImpressionLogger,e=>et=e.useOnVisible,e=>(ed=e.BusinessAdvantageProvider,eo=e.SpecialOffer),e=>ec=e.default,e=>em=e.useRecordMetrics,e=>eu=e.Query,e=>ef=e.default]]},["21h32l","o4yt4q","2mj4nv","fkji80","6v3s6a","skjzuv","ptdiqu","45ddp0","jppfwt","4ilds0","i0z8n1","ys6v1o","wsk8ra","honxae","nzwvrx","fgwvq1","etaac9","dl0elk","d8mine","7g0c7c","ddsxom","g6kunc","a6xk1z","80hn7v","8m6oju","i3sz5h","4q9l40","wt5b21","52far5","7thqz4","4nzso8","ybxsmg","essqvy","u59av4","covaqn","bqgabj","sw5ax0","vumu0s","3btuy0","g5mqn8","4axon3","di2bn9","mqwhqn","crdfjq"]]);

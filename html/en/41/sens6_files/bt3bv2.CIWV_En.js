(this.$WP=this.$WP||[]).push(["bt3bv2",(e,t)=>{var r,a,i,n,s,o,l,u,c,m,d,E,T,_,v,I,y,g,p,w,A,b,h,H,f,R,S,D,x,P,C,L,k,V,M,B,N,z,X,K,O,j,F,q,Z,W,U,Y,G,Q,$="test",J="EXIT",ee="brazeInitialized",et="brazeInterstitialsData",er="visible",ea="USER",ei=["AttractionProductReview","Hotel_Review","HotelsFusion"],en="extend_braze_sdk_on_dt_and_mw_1699021043",es=["AttractionProductReview","Hotel_Review","Hotels","HotelsFusion"],eo=["Attraction_Review","AttractionProductHighlight","AttractionProductsFusion","AttractionsFusion","AttractionsHome","AttractionsNear","FindRestaurants","ForumHome","Home","Hotel_Feature","HotelHighlight","HotelsHome","HotelsList","HotelsListFusion","HotelsNear","ListForums","Restaurant_Review","Restaurants","RestaurantsHome","RestaurantsNear","Search","SearchForums","ShowForum","ShowTopic","ShowUserReviews","SmartDeals","Tourism"],el="ExperiencesExitIntentInterstitial",eu="EXP_EXIT",ec="experiences_exit_interstitial_v2_1697228327",em=["Hotel_Review"],ed="HotelsExitIntentInterstitial",eE="HOTELS_EXIT",eT="hotels_exit_interstitial__h_v2_1700590819",e_="HOTEL_REVIEW_EXIT",ev="HotelReviewExitIntentInterstitial",eI=(e,t,r)=>{var a=e.get(t),i=new Date().getTime();return a&&a?.find(e=>e.key===r&&(!e.ttl||e.ttl>=i))||null},ey=(e,t,r)=>{var a=eg(),i=eI(a,e,t)?.value;return i&&"object"==typeof i?i[r]:null},eg=()=>new Map(m.get(et)),ep=(e,t,r)=>{var a=e.get(t),i=new Date().getTime();return a=a?.filter(e=>e.key!==r.key&&(!e.ttl||e.ttl>=i))||[],r.ttl&&(r.ttl+=i),a.push(r),e.set(t,a),e},ew=(e,t,r,a)=>{if(null!=e){var i=eg();ep(i,e,{key:t,value:r,ttl:a}),m.set(et,Array.from(i.entries()))}},eA=(e,t,r,a)=>{if(null!=e){var i=ey(e,a,t);ew(e,a,{[t]:null==i?1:i+1},r)}},eb=e=>{var t=N.getObjectValueFromStorage(e,er,ea);return null==t?0:t},eh=e=>eb(e)+1,eH=e=>"Hotel_Review"===e?"hotels_exit_interstitial__hr_us_v2_1701184978":"",ef=(e=!1)=>{var{page:t}=u(),{userAgentCategory:r}=T(),a=em.includes(t),i=eH(t),n=y({experimentKeys:[i],skipImpression:e,page:t},!a||!i||"DESKTOP"!==r);return n?n[i]:""},eR=()=>{var{page:e}=u(),{userAgentCategory:t}=T(),r=eo.includes(e),a=es.includes(e)&&"DESKTOP"!==t,i=y({experimentKeys:[en],page:e},!r&&!a);return i?i[en]:""},eS=()=>{var e=z(!0)===$,t="test"===X();return e||t},eD=(e,t)=>{var[r,n]=a(!1);return i(()=>{var r;return t||(r=setTimeout(()=>n(!0),e)),()=>clearTimeout(r)},[e,t]),r},ex=()=>{var{page:e}=u(),t=v(I.TARGETING),{userAgentCategory:r}=T(),a=ei.includes(e)&&"DESKTOP"===r,i=K();return O(0,!1)&&t&&(a||i)},eP={error:"/HD6ArEBAtTwBI7ZVjta90qp4unZxfbHurUTBGj19rQQ0+FVYV8WhM5fZH0wzrq+",ok:"/HD6ArEBAtTwBI7ZVjta9/W82wQIR3jyvbLaRjmIOqY="},eC=(e,t)=>{q.set(e,t)},eL=e=>q.get(e),ek=`\u0022`,eV=()=>{var e=j(),{browser:r,os:a}=T(),i=E(),s=_(),o=d(),{params:l}=u(),c="detailId"in l?l.detailId:0,v="geoId"in l?l.geoId:0,I=F.useConstantIncrementCallback();return n(async({event:n,eventProperties:l})=>{if(m.get(ee)&&e){var{logCustomEvent:u}=await t("tnit44");try{var d,E=eL(n),T=!!E,_=T?(d={},Object.entries(E).forEach(([e,t])=>{d[e]="string"==typeof t?t.replace(ek,'\\"'):t}),d):null;u(n,{...l,page:o,detailId:c,geoId:v,deviceType:i,locale:s,customEventData:_,isCustomEventDataPresent:T}),I(eP.ok)}catch(e){console.error(`[Braze] Problem occurred on: ${r.family} - ${r.majorVersion} | ${a.family} - ${a.majorVersion} | `,e),I(eP.error)}}},[e,o,c,v,i,r,a,s,I])},eM=e=>{switch(e){case"variant1":return V;case"variant2":return 0;case"control":return k;default:return L}},eB=e=>{var{page:t}=u(),{userAgentCategory:r}=T(),{experimentBuckets:a,fetching:i}=g({experimentKeys:[ec]},e||"DESKTOP"!==r||"AttractionProductReview"!==t);return{delayTime:eM(a?.[ec]||""),fetching:i}},eN=e=>"test"===e?B:M,ez=e=>{var{page:t}=u(),{userAgentCategory:r}=T(),{experimentBuckets:a,fetching:i}=g({experimentKeys:[eT]},e||"DESKTOP"!==r||"HotelsFusion"!==t);return{delayTime:eN(a?.[eT]||""),fetching:i}},eX={interstitialMaxDisplay:-1,template:"",trackItemName:"",exitDelayTime:-1,fetching:!1},eK=e=>{var{page:t}=u(),{delayTime:r,fetching:a}=W(e),{delayTime:i,fetching:n}=U(e);switch(t){case"AttractionProductReview":return{fetching:a,interstitialMaxDisplay:3,template:eu,trackItemName:el,exitDelayTime:r};case"HotelsFusion":return{fetching:n,interstitialMaxDisplay:3,template:eE,trackItemName:ed,exitDelayTime:i};case"Hotel_Review":return{fetching:!1,interstitialMaxDisplay:3,template:e_,trackItemName:ev,exitDelayTime:L};default:return eX}},eO=()=>{var{params:e}=u(),t=d(),r=!!H(),a=h();return{trackImpression:n(({itemName:i,customData:n})=>{a({itemName:i,page:t,geoId:"geoId"in e&&e.geoId||null,locationId:"detailId"in e&&e.detailId||null,customData:JSON.stringify({...n,signedIn:r,isEligibility:!0})})},[a,e,t,r])}},ej=({dismiss:e=()=>{}})=>{var{page:t}=u(),r=s(Date.now()),[l,m]=a(!1),[d,E]=a(!1),T=z(!l),{interstitialMaxDisplay:_,template:v,trackItemName:I,exitDelayTime:y,fetching:g}=Y(!l),p=o(()=>ei.includes(t),[t]),w=Z(),A=n(()=>{w({event:J,eventProperties:{abTestValue:T,displayCount:eh(v)}})},[v,T,w]),b=s(A),{trackImpression:h}=G(),H=n(()=>{var e=eh(v);(p||T===$)&&e<=_&&h({itemName:I,customData:{impressionCount:e,sessionCount:e}})},[v,_,I,p,T,h]),f=s(H),R=n(e=>{e.clientY<=0&&(m(!0),E(!0))},[m]);return i(()=>{b.current!==A&&(b.current=A),f.current!==H&&(f.current=H)},[A,H]),i(()=>{var e=Date.now()>r.current+y;g||(l&&e&&d&&(T||p)&&(b.current(),f.current()),E(!1))},[p,T,g,l,y,d,A,H]),c("mouseout",R),c("beforeunload",e),null},eF=()=>{var e=e=>r(ej,{dismiss:e}),t="interstitials-braze";return l({factory:({dismiss:t})=>e(t),eventTypes:[t],key:t,tier:700}),null},eq={__key:0xb28d0534b3ca,id:"b28d0534b3caa770",loc:{},definitions:[]},eZ=()=>{var[e,n]=a(null),l=D(),u=o(()=>!!(l.startsWith("hare")||l.includes("qa.tripadvisor-preview.com")),[l]),[{data:c}]=x({query:eq}),d=s(),E=H();return i(()=>{var e;return(async()=>{var{initialize:r,automaticallyShowInAppMessages:a,openSession:i,destroy:s,getUser:o}=await t("tnit44"),l=r(u?"33cabfd1-22ad-4bb9-b839-923528e22192":"6e55efa5-e689-47c3-a55b-e6d7515a6c5d",{baseUrl:"sdk.iad-05.braze.com",sessionTimeoutInSeconds:60,minimumIntervalBetweenTriggerActionsInSeconds:1,enableLogging:u,allowUserSuppliedJavascript:!0,manageServiceWorkerExternally:!0,noCookies:!0,inAppMessageZIndex:10104,doNotLoadFontAwesome:!0});l?(a(),i(),e=s,d.current=o(),m.set(ee,!0,P)):m.set(ee,!1,P),n(l)})(),()=>{e&&e()}},[u]),i(()=>{if(e&&d?.current){var t=c?.data?.hashedPersistentCookieSHA256;t&&d.current.addAlias(t,"CTA_SHA256")}},[c,d,e]),i(()=>{(async()=>{var{changeUser:r}=await t("tnit44");e&&E&&r(E)})()},[E,e]),r(f,{component:R.braze,status:e?S.ok:S.missing,enabled:null!==e})},eW=()=>j()?r(b,{children:r(eZ,{})}):null;return[()=>{C=12*(30*(P=864e5)),L=15e3,k=1e4,V=5e3,M=1e4,B=5e3,N={getObjectValueFromStorage:ey,getBrazeStorageData:eg,saveValueToLocalStorage:ew,saveDisplayCountToBrazeStorage:eA},z=ef,X=eR,K=eS,O=eD,j=ex,F=new p({metricName:"/HD6ArEBAtTwBI7ZVjta93C0lsh0r5m7+1h2uMR+Ctj6S7rKi5+tmJVNyp6fjPiaq5rr6c5rsp+XGnGmyrZ6y64ZVL67MHPVqEacrZP0wZY=",version:0,additionalLabels:["/HD6ArEBAtTwBI7ZVjta98Sr44QR3Z1Lmq5fKuJGI7cdKriEzyXX7YlewxVwwfzY"],labelHooks:[w,A]}),q=new Map,Z=eV,W=eB,U=ez,Y=eK,G=eO,Q=eF,e({BRAZE_EXIT_EVENT_KEY:J,BRAZE_EXIT_EVENT_TEST_BUCKET:$,Braze:eW,EXP_EXIT_TEMPLATE:eu,EXP_EXIT_TRACK_ITEM_NAME:el,HOTELS_EXIT_TEMPLATE:eE,HOTELS_EXIT_TRACK_ITEM_NAME:ed,HOTEL_REVIEW_EXIT_TEMPLATE:e_,HOTEL_REVIEW_EXIT_TRACK_ITEM_NAME:ev,LOCAL_STORAGE_TTL_01_YEAR:C,PER_USER_DISPLAY:ea,VISIBLE:er,brazeStorage:N,default:Q,getInterstitialsCustomEventData:eL,getStoredDisplayCount:eb,setInterstitialsCustomEventData:eC,useBrazeExitIntentTest:z,useBrazeLogCustomEventCallback:Z})},[e=>r=e.jsx,e=>(a=e.useState,i=e.useEffect,n=e.useCallback,s=e.useRef,o=e.useMemo),e=>l=e.usePopupHierarchyRender,e=>u=e.useRoute,e=>c=e.useWindow,e=>m=e.default,e=>d=e.default,e=>E=e.useViewportCategory,e=>T=e.useUserAgent,e=>_=e.useLocale,e=>(v=e.useConsent,I=e.CategoriesEnum),e=>(y=e.useAbTestWithSegments,g=e.useAbTestWithQueryStatus),e=>(p=e.Counter,w=e.useSourceLabel,A=e.useWebApplicationLabel,b=e.ErrorBoundary),e=>h=e.default,e=>H=e.useUserId,e=>(f=e.StatusCounter,R=e.Component,S=e.Status),e=>D=e.useDomainName,e=>x=e.useQuery]]},["21h32l","o4yt4q","xo1is3","fgwvq1","ltllz9","9b9b10","eqoaya","ys6v1o","nnprhg","7thqz4","973cci","gugp1d","83pm0d","xg719z","52far5","6nmgrj","qlcuu5","mqwhqn"]]);
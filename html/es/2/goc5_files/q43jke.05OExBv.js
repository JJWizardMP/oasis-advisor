(this.$WP=this.$WP||[]).push(["q43jke",(e,t)=>{var i,a,n,r,o,l,s,c,d,u,p,m,v,h,f,y,T,g,b,I,k,w,N,R,B,C,q,_,M,S,j={__key:0x6bb628c49399,id:"6bb628c49399e8da",loc:{},definitions:[]},z=()=>"invalidateAndRefetch",A=()=>{var e=y(),t="geoId"in e?.params&&e.params?.geoId||1,[{fetching:i,data:a},n]=N({query:j,variables:{geoId:t},pause:!0},{addItemToTrip:z,tripsRemoveItem:z,tripsRemoveReference:z,createTrip:z,Trips_createTrip:z,Trips_copyTripItem:()=>"invalidateAndRefetch"}),o=r(()=>{n({requestPolicy:"network-only"})},[n]);return[{fetching:i,recentTrip:a?.userTrip,geoId:t},o]},D={buttonMargin:"muhZz"},E=e=>i("div",{className:e.isMobile?D.buttonMargin:void 0,children:i(R,{saveObject:{id:e.id,type:e.type},allowPopStatModal:!0,children:(t,a)=>i(B,{active:a,onClick:t,decorated:!1,bookmarkStyle:"outline",bookmarkSize:"20",asButton:!0,fullWidth:e.isMobile,children:()=>"Save to Trip"})})}),O={__key:1209045768215,id:"011980be58179363",loc:{},definitions:[]},x=e=>{var[t]=C({query:O,variables:{locationId:e||1},pause:!e});return t.fetching||t.error?null:t.data?.locations?.[0]?.names?.name},L=(e,t,i)=>{var a=o(t),n=o(i),[c,d]=l(!1),u=r(()=>d(!1),[d]);return s(()=>{if(!e)return()=>{};var t=setTimeout(()=>d(!0),a.current);return()=>clearTimeout(t)},[e,a]),s(()=>{if(!c)return()=>{};var e=setTimeout(u,n.current);return()=>clearTimeout(e)},[c,u,n]),s(()=>c?(window.addEventListener("scroll",u),()=>{window.removeEventListener("scroll",u)}):()=>{},[c,u]),[c,u]},W={footer:"kcxIj D B1 Z BB k",tripDescription:"RnKfS Cj _u",cta:"bBWzk q",ctaButton:"gyhvZ",saveCta:"aNepR",titleRow:"yXCZj k",title:"b q o W",saveCount:"RhIkn q",countRow:"sQhRc",count:"olcnV",planningBox:"Rdavf D",planningTitle:"oRSbw b",planningBody:"EyNtG H5",planningIconOuter:"qKrMm B1 Z BB",planningIcon:"EvTyu"},Z=({onDismiss:e,isMobile:t,geoId:n})=>{var r=M(n);return r?a("div",{className:W.planningBox,children:[i(b,{on:"bottom",from:t?"center":"left",offset:20}),i("div",{className:W.planningTitle,children:"Let's keep planning!"}),a("div",{className:W.planningBody,children:["See a hotel that looks good to you? Simply click",i("span",{className:W.planningIconOuter,children:i("span",{className:W.planningIcon,children:i(u,{})})}),"to save and view it on a map for your upcoming trip to ",r,"."]}),i(h,{variant:"primary",onClick:e,children:"Got it!"})]}):null},P=(e,t)=>(e?.detailCounts||[]).filter({hotels:e=>e?.locationType==="ACCOMMODATION",restaurants:e=>e?.locationType==="EATERY",attractions:e=>e?.locationType==="ATTRACTION"||e?.locationType==="ACTIVITY"||e?.saveType==="attractionproduct"}[t]).map(e=>e?.count||0).reduce((e,t)=>e+t,0),Q=e=>{if(e){var t=Date.parse(e);if((Date.now()-t)/864e5>30)return!1}return!0},V=e=>{if(e){var t=Date.parse(e);return Date.now()-t<=5e3}return!1},F=({footerShownCallback:e})=>{var t=T(),r=y(),o="detailId"in r?.params?r.params.detailId:void 0,l="MOBILE"===t,[{fetching:h,recentTrip:b,geoId:N}]=q(),R=g(),B=b?.route?.url,C=k(),M=w(),[j,z]=S(V(b?.created),2e3,3e3),A=!h&&b?.id!==void 0&&Q(b?.updated);return s(()=>{if(e&&e(A),A){var t=b?.id;t&&R&&I.set("mostRecentlyAddedToTrip",{tripId:t,userId:R},144e5),M({trips:{element:"view_persistent_footer",tripId:b?.id}})}},[e,A,M,b,R]),A?a(n,{children:[a("div",{className:W.footer,children:[a("div",{className:W.tripDescription,children:[a("div",{className:W.titleRow,children:[i("div",{className:W.title,children:b?.title}),a("div",{className:W.saveCount,children:[i(u,{size:22}),i("span",{className:W.count,children:b?.size})]})]}),a("div",{className:W.countRow,children:[i(p,{size:22}),i("span",{className:W.count,children:P(b,"hotels")}),i(d,{size:22}),i("span",{className:W.count,children:P(b,"attractions")}),i(m,{size:22}),i("span",{className:W.count,children:P(b,"restaurants")})]})]}),a("div",{className:W.cta,children:[o&&i("div",{className:c(W.ctaButton,W.saveCta),children:i(_,{isMobile:l,id:o,type:"location"})}),i("div",{className:W.ctaButton,children:i("a",{href:B??"#",children:i(v,{legacyStyled:!1,fullWidth:l,size:l?"small":"medium",onClick:()=>{C({Trips:{elementClick:{element:"omni_trip_view"}}})},children:i(f,{id:"cx_trips_view_cta"})})})})]})]}),j&&i(Z,{onDismiss:z,isMobile:l,geoId:N})]}):null};return[()=>{q=A,_=E,M=x,S=L,e("default",F)},[e=>(i=e.jsx,a=e.jsxs,n=e.Fragment),e=>(r=e.useCallback,o=e.useRef,l=e.useState,s=e.useEffect),e=>c=e.default,e=>d=e.default,e=>u=e.default,e=>p=e.default,e=>m=e.default,e=>(v=e.default,h=e.BorderlessButton),e=>f=e.default,e=>y=e.useRoute,e=>T=e.useViewportCategory,e=>g=e.useUserId,e=>b=e.Arrow,e=>I=e.default,e=>k=e.useInteractionLogger,e=>w=e.useImpressionLogger,e=>N=e.useInvalidatableQuery,e=>R=e.QueriedTripFlowSelector,e=>B=e.BookmarkIcon,e=>C=e.useQuery]]},["21h32l","o4yt4q","fkji80","s1ymgp","l75rcq","c5q3iu","o3mm96","jppfwt","7thqz4","fgwvq1","ys6v1o","52far5","79a2um","9b9b10","32pwc7","vumu0s","fbuhsy","9rb8bq","hfpjvp","mqwhqn"]]);
(this.$WP=this.$WP||[]).push(["9l9n46",(e,n)=>{var a,o,t,i,r,s,l,c,u,d,g,v,L={__key:28678397229422,id:"1a1535adf96e7c31",loc:{},definitions:[]},j=e=>{var[{data:n,fetching:a}]=r({query:L,variables:{locationId:e||0},pause:!e||e<=0});if(a)return{fetching:!0,sojernLocationId:null,sojernLocationName:null};var o=!!e&&!!n?.BaAggregation_getEligibleSojernLocation?.[0]?.sojernLocationId&&!!n?.BaAggregation_getEligibleSojernLocation?.[0]?.sojernLocationName&&!!n?.locations?.[0]?.businessAdvantageSubscriptions&&!!n?.locations?.[0]?.businessAdvantageSubscriptions?.length;return{fetching:a,sojernLocationId:o?n?.BaAggregation_getEligibleSojernLocation?.[0]?.sojernLocationId:null,sojernLocationName:o?n?.BaAggregation_getEligibleSojernLocation?.[0]?.sojernLocationName:null}},b=e=>{var n=a(),{page:r}=o(),l=t(),{fetching:c,sojernLocationId:u,sojernLocationName:d}=g(e),v=i();return{sojernGTMCallback:s(a=>{!c&&u&&d&&v({event:"BA_SOJERN_BL_CLICK",data:{sojernLocationId:u,sojernLocationName:d,tripLocationId:e,sessionId:l,clickType:a,page:r,pageUid:n,eventTime:new Date().getTime()}})},[c,u,d,v,e,l,r,n])}},I=e=>{var{fetching:n,sojernLocationId:r,sojernLocationName:u}=g(e),d=a(),{page:v}=o(),L=t(),j=i(),b=l(null);return{fetching:n,sojernLocationId:r,onVisibleCallback:s(()=>{if(!n&&r&&u&&e){var a={event:"BA_SOJERN_BL_IMPRESSION",data:{page:v,pageUid:d,sessionId:L,sojernLocationId:r,sojernLocationName:u,tripLocationId:e,eventTime:void 0}};b.current===a||c(b.current,a)||(j({event:a.event,data:{page:a.data.page,pageUid:a.data.pageUid,sessionId:a.data.sessionId,sojernLocationId:a.data.sojernLocationId,sojernLocationName:a.data.sojernLocationName,tripLocationId:a.data.tripLocationId,eventTime:new Date().getTime()}}),b.current=a)}},[r,u,n,L,v,d,j,e])}},S=({locationId:e})=>{var{onVisibleCallback:n,sojernLocationId:a}=v(e),o=d(n);return a?u("span",{style:{visibility:"hidden"},ref:o}):null};return[()=>{g=j,e({BaSojernLocationIdAndBaStatus:L,SojernImpression:S,useSojernTestClickEventGTMCallback:b,useSojernTestImpressionEventGTMCallback:v=I})},[e=>(a=e.usePageviewUid,o=e.useRoute),e=>t=e.useSessionId,e=>i=e.useGTMCallback,e=>r=e.useQuery,e=>(s=e.useCallback,l=e.useRef),e=>c=e.default,e=>u=e.jsx,e=>d=e.useOnVisible]]},["fgwvq1","al4vil","904jnz","mqwhqn","o4yt4q","b5nukb","21h32l","3btuy0"]]);
(this.$WP=this.$WP||[]).push(["igyuz7",(e,t)=>{var r,a,i,n,s,u,o,l,d,g,c,v,m,D,G,w,y,f=({children:e,eligibility:t,impressionKey:r})=>{var i=a(()=>({impressionKey:r,eligibility:t}),[t,r]);return D(y.Provider,{value:i,children:e})},b=()=>i(y),p="unknown",E="sponsoredListingIdClicked",H="requiredLoginActivated",I=()=>{var e=window?.navigator?.connection;return e?[e.effectiveType||p,e.type||p]:[p,p]},h=["AttractionsFusion"],T=["Restaurants","Restaurant_Review"],S=e=>{var t=o.get(E);return t&&t===e},C=e=>{o.set(E,e,18e5)},L=()=>{var{impressionKey:e,eligibility:t}=b();return k(t,e)},k=(e,t)=>{var r=c(),a=x(e.variant),{page:i}=d(),{geoId:s,locationId:u}=V();return n((e,n,o,l)=>{r({page:i,itemType:e,itemName:o,customData:JSON.stringify({...a,...n}),geoId:s,locationId:u,impressionKey:t,userId:l})},[r,a,i,s,u,t])},R=()=>{var e=g(),t=b(),r=x(t.eligibility.variant),{page:a}=d(),{geoId:i,locationId:s}=V();return n((n,u,o="click",l,d)=>{e({page:a,actionType:o,actionSubType:l,itemType:n,itemName:u,customData:JSON.stringify({...r,...d}),geoId:i,locationId:s,impressionKey:t.impressionKey})},[e,r,a,i,s,t])},x=e=>{var t=P();return a(()=>({variant:e,isDated:t}),[e,t])},P=()=>{var{page:e}=d(),{startDate:t,endDate:r}=O(e);return a(()=>!!t||!!r,[r,t])},O=e=>{var{restaurants:t,attractions:r}=l();if(h.includes(e)){if(r?.fromDate&&r?.toDate)return{startDate:r.fromDate,endDate:r.toDate};if(r?.singleDate)return{startDate:r.singleDate,endDate:null}}else if(T.includes(e))return{startDate:t?.date||null,endDate:null};return{startDate:null,endDate:null}},V=()=>{var{params:e}=d(),t="geoId"in e&&e.geoId||null,r="detailId"in e&&e.detailId||null;return a(()=>({geoId:t,locationId:r}),[t,r])},A=(e,t)=>{var r=k(e,t),a=!v(m()),i="MOBILE"===w();return n(()=>{i&&r("MembershipHardGateGhost",{googleOneTapEligible:a,businessLogicEligible:e.businessLogicEligible,showHardGate:e.showHardGate})},[r,e,a,i])},F=(e,t)=>{var r=L(),a=s(null),i=n(()=>{var i=Date.now();a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{r(t,{actualTime:(Date.now()-i)/1e3})},e)},[e,t,r]);return u(()=>()=>clearTimeout(a.current),[]),i},K=e=>{if(!e)return null;switch(e){case"TA":return"email";case"GOOGLE":return"google";case"LINE":return"line";default:return null}},M=(e,t)=>{u(()=>{!e&&t&&o.set(H,new Date().getTime())},[e,t])},_=()=>{var e=o.get(H);return e?new Date(e):null},q="hardGateSessionData",z=(e,t)=>{var r=o.get(q)||{};e!==r.sessionId&&(r.sessionId=e,r.sessionStartTime=new Date,r.entryServlet=t,o.set(q,r))},N=()=>o.get(q)?.sessionStartTime,W=()=>o.get(q)?.entryServlet,j=()=>({fetching:!1,variant:"unbucketed",businessLogicEligible:!1,showHardGate:!1});return[()=>{e({HardGateContext:y=r({impressionKey:G(),eligibility:{variant:"unbucketed",businessLogicEligible:!1,showHardGate:!1}}),HardGateContextProvider:f,ML_PAGE_VIEWED_KEY:"mlHardGatePageViewCount",getConnectionType:I,getEntryServlet:W,getHardGateViewTimestamp:_,getSessionStartTime:N,isFromSponsoredClick:S,markFromSponsoredClick:C,setHardGateSessionData:z,sourceFromLoginProvider:K,useBounceTracking:F,useEmptyHardGateEligbility:j,useHardGateContext:b,useHardGateEligibility:j,useHardGateGhostImpression:A,useHardGateImpression:L,useHardGateInteraction:R,useHardGateViewRecord:M,useIsDated:P,useRouteIds:V,useTravelDates:O})},[e=>(r=e.createContext,a=e.useMemo,i=e.useContext,n=e.useCallback,s=e.useRef,u=e.useEffect),e=>o=e.default,e=>l=e.useTravelInfo,e=>d=e.useRoute,e=>g=e.default,e=>c=e.default,e=>v=e.shouldSuppressRegistrationDialog,e=>m=e.useSessionId,e=>D=e.jsx,e=>G=e.uuid,e=>w=e.useViewportCategory]]},["o4yt4q","9b9b10","etaac9","fgwvq1","r73jw8","xg719z","cyrz7y","al4vil","21h32l","eww825","ys6v1o"]]);

(this.$WP=this.$WP||[]).push(["24j2l1",(e,t)=>{var r,n,a,i,s,u,o,l,c,p,h,d,g={__key:0xb10e776e33c1,id:"b10e776e33c12fce",loc:{},definitions:[]},E=(e,t,a)=>{var[{data:s,fetching:u}]=r({query:g,variables:{geoId:e,dataVersion:t},pause:a||!e});return{fetching:u,data:i(()=>{var e=s?.PlusCuration_getGeoEntrypointData?.filter(Boolean)?.at(0);if(e){var{geoId:t,geoLocation:r,entrypointImage:a}=e,i=r?.names?.name;return t&&i?{geoId:t,name:i,entrypointImage:n(a)}:null}return null},[s])}},f=e=>null===e?null:"control"===e||"test"===e?e:(console.error(`Got unexpected abtest result for phase 4 entrypoint experiment: ${e}`),null),S=(e,t)=>{var{logImpression:r=!1,treatControlAsNull:n=!0}=e,{bucket:a,fetching:i}=s({experiment:"plus_phase_4_entry_points_1662590205",logImpression:r,treatControlAsNull:n},t);return{fetching:i,bucket:f(a)}},v=e=>{var{fetching:t,bucket:r}=c({treatControlAsNull:!1},a),{fetching:n,data:i}=E(u(),e,null===r);return{fetching:n||t,isEligible:!!i?.geoId}},y=(e,t=!1)=>{var r=l();switch(e){case"Interstitial":return P(r,t);case"Footer":return m(r,t);default:return o(e),!1}},P=(e,t)=>p.has(e)||t&&h.has(e),m=(e,t)=>d.has(e)||t&&h.has(e),_=()=>{var e=u(),{fetching:t,isEligible:r}=v("PHASE4"),n=null;r&&(n="PHASE4");var{fetching:a,data:i}=E(e,"PHASE4","PHASE4"!==n),s=t||a;return null===i?{fetching:s,dataVersion:null,data:null}:{fetching:s,dataVersion:"PHASE4",data:i}};return[()=>{c=S,p=new Set(["Hotels","Tourism","ShowForum","ShowTopic","Hotel_Review"]),h=new Set(["AttractionsFusion","Attraction_Review"]),d=new Set(["Tourism"]),e({isFooterSupportedPage:m,isInterstitialSupportedPage:P,useEligibleVersionedEntrypointData:_,useGetEntrypointData:E,useIsEligibleEntrypoint:v,useIsSupportedPage:y,usePhase4EntrypointBucket:c})},[e=>r=e.useQuery,e=>(n=e.extractImageWithId,a=e.PAUSE_BUCKET_CALL),e=>i=e.useMemo,e=>(s=e.useExperimentBucket,u=e.useGeoId,o=e.exhaustivenessCheck),e=>l=e.default]]},["mqwhqn","f2fjik","o4yt4q","a2qxj9","eqoaya"]]);

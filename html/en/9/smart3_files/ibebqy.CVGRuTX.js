(this.$WP=this.$WP||[]).push(["ibebqy",(e,r)=>{var t,i,a,o,s,u,n,m,g,I,c,p,v,w,l,T=()=>{var e=u(),r=m(),i=n(),{newsletterId:a}=g();return t(({customData:t={},...o})=>e({pageUid:r,userId:i,team:"Trips",customData:JSON.stringify({newsletterId:a,...t}),...o}),[e,r,i,a])},d=()=>{var e=I(),r=m(),i=n(),{newsletterId:a}=g();return t(({customData:t={},...o})=>e({pageUid:r,userId:i,team:"Trips",customData:JSON.stringify({newsletterId:a,...t}),...o}),[e,r,i,a])};function f(e,r){return"setFlowId"===r.type?{...e,flowId:r.flowId}:e}var y=({flowId:e="",children:r})=>{var[o,s]=i(f,w),u=t(e=>s({type:"setFlowId",flowId:e}),[]),n=a(()=>({dispatch:s,setFlowId:u,state:o,flowId:e}),[s,u,o,e]);return c(l.Provider,{value:n,children:r})},D=()=>{var e=s(l);if(!e)throw Error("useGaiTrackingContext must be used within a GaiTrackingProvider");return e},h=()=>{var e=v(),{flowId:r}=D();return t((t,i,a)=>{e({itemName:t,itemType:"GenerateTrip",actionType:a||"other",customData:{flowID:r,...i||{}}})},[e,r])},P=()=>{var e=p(),{flowId:r}=D();return t((t,i)=>{e({itemName:t,itemType:"GenerateTrip",customData:{flowID:r,...i||{}}})},[e,r])},G=()=>{var e=v(),{flowId:r}=D();return t((t,i,a)=>e({itemName:t,itemType:"WaitTime",actionType:a||"other",customData:{flowID:r,...i||{}}}),[e,r])},L=()=>{var e=p(),{flowId:r}=D();return t((t,i)=>e({itemName:t,itemType:"WaitTime",customData:{flowID:r,...i||{}}}),[e,r])},W=()=>{var e=p(),{flowId:r}=D();return t((t,i)=>e({itemName:t,itemType:"ViewGAI",customData:{flowID:r,...i||{}}}),[e,r])},x=()=>{var e=v(),{flowId:r}=D();return t((t,i,a)=>e({itemName:t,itemType:"ViewGAI",actionType:a||"other",customData:{flowID:r,...i||{}}}),[e,r])};return[()=>{p=T,v=d,w={flowId:void 0},l=o(void 0),e({GaiTrackingProvider:y,useGaiImpressionLogger:p,useGaiInteractionLogger:v,usePreviewImpressionLogger:W,usePreviewInteractionLogger:x,usePromptsImpressionLogger:P,usePromptsInteractionLogger:h,useWaitTimeImpressionLogger:L,useWaitTimeInteractionLogger:G})},[e=>(t=e.useCallback,i=e.useReducer,a=e.useMemo,o=e.createContext,s=e.useContext),e=>u=e.default,e=>n=e.useUserId,e=>m=e.usePageviewUid,e=>g=e.useTripsNewsletterId,e=>I=e.default,e=>c=e.jsx]]},["o4yt4q","xg719z","52far5","fgwvq1","l56ssi","r73jw8","21h32l"]]);
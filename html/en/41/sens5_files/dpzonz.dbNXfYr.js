(this.$WP=this.$WP||[]).push(["dpzonz",(e,r)=>{var t,i,a,o,n,s,l,p,c,d,u,m,v,g,T,f,C={cardCorner:"qijCB _Q",mapCorner:"apbVu _Q"},b=({viewTripOpensNewTab:e,type:r="location",id:v,tripId:b,allowPopStatModal:I,size:h,variant:_,position:w="static",dataAttributes:P,onClick:q,onSaveComplete:N=()=>{},onUnsaveComplete:S=()=>{},flowOrigin:j,showSoftLoginPrompt:k=!1,onViewTripToastVisible:z,onAutosavedToTripToastVisible:x,sourceTripId:V,tripItemId:F,saveToast:H,creationMethod:L})=>{var{localize:O}=l(),Q=g(),$=T(),A=f(),B=o(null),M=n(()=>L?{type:r,id:v,creationMethod:L}:{type:r,id:v},[r,v,L]),R=(e,r)=>{Q({itemName:"ItemHeart",locationId:Number(v)}),r(),e.preventDefault(),e.stopPropagation(),q?.(e)},W=()=>{$({itemName:"SuccessfulItemHeart"})};return t(u,{saveObject:M,tripId:b,allowPopStatModal:I,onComplete:s((e,r,t,i,a)=>e?N(e,r,t,i,a):S(),[N,S]),flowOrigin:j,viewTripOpensNewTab:e,onViewTripToastVisible:(e,r)=>{z?.(e,r),W()},onAutosavedToTripToastVisible:(e,r)=>{x?.(e,r),W()},sourceTripId:V,tripItemId:F,saveToast:H,flowId:A.flowId,signedInPrior:A.signedInPrior,children:(e,r,o)=>{var n=i(a,{children:[t(p,{size:h,variant:_,icon:r?c:d,"aria-label":r?O.string("trip_detail_remove_from_trip"):O.string("trips_save_to_a_trip"),disabled:o,onClick:r=>R(r,e),ref:B,dataAttributes:{"data-automation":`trips-save-button-item-${v}`,...P}}),k&&t(m,{triggerRef:B,onSave:e,position:"above",alignEdge:"left",shiftX:-15,shiftY:-5})]});return"card-corner"===w?t("div",{className:C.cardCorner,children:n}):"map-corner"===w?t("div",{className:C.mapCorner,children:n}):n}})},I=e=>t(v,{children:t(b,{...e})});return[()=>{e("default",I)},[e=>(t=e.jsx,i=e.jsxs,a=e.Fragment),e=>(o=e.useRef,n=e.useMemo,s=e.useCallback),e=>l=e.useLocalize,e=>(p=e.CircularButton,c=e.HeartFillIconSelected),e=>d=e.default,e=>u=e.QueriedTripFlowSelector,e=>m=e.SaveTooltip,e=>(v=e.CreateTripTrackingProvider,g=e.useCreateTripInteractionLogger,T=e.useCreateTripImpressionLogger,f=e.useCreateTripTrackingContext)]]},["21h32l","o4yt4q","7thqz4","jppfwt","l75rcq","9rb8bq","96t94x","sa2a6q"]]);

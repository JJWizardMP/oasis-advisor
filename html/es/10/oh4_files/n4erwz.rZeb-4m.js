(this.$WP=this.$WP||[]).push(["n4erwz",(e,t)=>{var i,n,o,r,a,l=e=>"reviews"===e.page||"RMHome"===e.page||"OwnerResponse"===e.page||"RMReviewCollection"===e.page||"OwnerNotificationSetting"===e.page,s=()=>{var e=o();if(l(e))switch(e.page){case"reviews":return e.params.locationId;case"RMHome":case"OwnerResponse":case"RMReviewCollection":case"OwnerNotificationSetting":return e.params.detailId;default:return e}},c=()=>{var e=r(),t=s();return i=>{e({...i,locationId:t})}},g=()=>{var e=a(),t=s();return i=>{e({...i,locationId:t})}},u=(e,t)=>({module:"upsell_banner",location_id:e,creative_type:"Reputation_Management",action:"click",language:t,copy_version:1}),d=(e,t,i,n)=>({module:"reviews",location_id:e,review_id:i,review_provider:n,action:t}),p=(e,t,i,n)=>({location_id:e,module:i,description:n,action:t}),v=(e,t,i,n)=>({location_id:e,module:i,action:t,inputType:n}),_=(e,t,i,n)=>({location_id:e,module:i,details:n,action:t}),w=(e,t,i,n)=>({location_id:e,module:i,action:t,selectedValue:n}),m=(e,t,i,n,o)=>({location_id:e,module:t,action:i,lastReferrerUrl:n,userId:o}),C=(e,t,i,n,o)=>({module:"expanded_review",location_id:e,review_id:String(i),review_provider:n,response_element:o,action:t}),R=(e,t,i)=>{var n=[];return t.forEach((e,t)=>{n.push({review_id:e.globalId,review_provider:e.provider,position_in_list:t+1,review_status:e.responseSubmissionStatus})}),{module:"review_listing",location_id:e,page:i+1,reviews:n}},x=(e,t,i,n,o)=>({module:"filters",location_id:e,filterCategory:t,filterAction:i?"Select":"Unselect",filterValue:n,filterMatches:String(o)}),f=(e,t)=>({module:"pagination",location_id:e,page_num:String(t.pageNumber),cta:t.buttonType,action:"click"}),S=()=>{var e=n();return i((t,i,n)=>{e({action:t,context:JSON.stringify(i),module:i.module,value:i.location_id,...n&&{destinationUrl:n}})},[e])};return[()=>{e({getBannerContext:u,getDropDownContext:w,getExpandedReviewContext:C,getFiltersContext:x,getInfoContext:_,getInputClickContext:v,getLinkContext:p,getPaginationContext:f,getReviewContext:d,getReviewListingContext:R,getSalesLanderContext:m,useRMBlockingInteraction:g,useRMInteraction:c,useTrack:S})},[e=>i=e.useCallback,e=>n=e.useGARecorder,e=>o=e.useRoute,e=>(r=e.useInteractionLogger,a=e.useBlockingInteractionLogger)]]},["o4yt4q","32pwc7","fgwvq1","itj2is"]]);
(this.$WP=this.$WP||[]).push(["rfo7hc",(e,n)=>{var s,t,r,i,a,o,u,l,_,p,g,m,S,h,c,d,v,f,b,I,w,P,L,E,A="list_page_membership_banner_1678826829",N=({pause:e=!1,skipImpression:n=!1})=>{var s=t({experimentKeys:[A],skipImpression:n},e);return{fetching:null===s,bucket:s?.[A]}},R=({pause:e,logImpression:n})=>r({experiment:"membership_banner_and_heart_icon_prompt_test_1678827009",logImpression:n},e),G="list_page_banner",y=(e,n)=>{var t=s(),r=o(),i=e&&v.has(r),a=u(),l=n.includes(a);return!t&&!i&&l},B=(e=!1)=>{var n=y(e,["Restaurants","FindRestaurants"]),{bucket:s}=c({pause:!n,skipImpression:!1}),{bucket:t}=d({pause:!n,logImpression:!0});return n&&(s===G||t===G)},O=e=>{switch(e){case"heart_icon":return"softLoginPromptSessions";case"global_nav_review":return"softLoginGlobalReviewPromptSessions";case"global_nav_sign_in":return"softLoginGlobalSignInPromptSessions";default:throw a(e),Error(`Storage key not considered for experiment ${e}`)}},T=(e,n)=>{var s=_.get(n),t=e-6048e5;return(s?JSON.parse(s):[]).filter(e=>e.dateShown>t)},U=(e,n=!1)=>{var s=l(),[t,r]=p(!1),a=O(e);return g(()=>{if(!n)try{var e=new Date().getTime(),t=T(e,a).map(e=>e.sessionId);if(t.length>=2||t.includes(s)){r(!1);return}r(!0)}catch(e){r(!1),console.error("Failed to parse JSON: ",e)}},[u(),i(),n,s,a]),!!n||t},k=e=>{var n=l(),s=O(e);return()=>{try{var e=new Date().getTime(),t=T(e,s),r=t.map(e=>e.sessionId);if(r.length>=2||r.includes(n))return;_.set(s,JSON.stringify([...t,{sessionId:n,dateShown:e}]),6048e5)}catch(e){console.error("Failed to parse soft login prompt sessions JSON: ",e)}}},x=["AttractionsFusion","Restaurants","FindRestaurants"],H=()=>{var e=s(),n=u(),t=m(),r=x.includes(n),i="MOBILE"===t,{fetching:a,bucket:o}=d({pause:!!e||!r||i,logImpression:!1});return!e&&r&&!i&&!a&&"heart_icon_prompt"===o},V=(e,n,s)=>1===e&&!("RESERVATION"===n&&"1"===s)&&!("ALL_OPTIONS"===n&&"10600"===s)&&!("ESTABLISHMENT_TYPE"===n&&"12208"===s),C=({pause:e,logImpression:n})=>r({experiment:"global_navigation_membership_prompt_test_1678827275",logImpression:n},e),M=({pause:e,logImpression:n})=>r({experiment:"nvt_reco_acq_evergreen_home_1671224434",logImpression:n},e),q=({pause:e,logImpression:n})=>r({experiment:"restaurants_list_in_lithium__with__findrestaurants__1683819495",logImpression:n},e),F=()=>D("review"),K=()=>D("sign_in"),D=e=>{var n=s(),t=u(),r="DESKTOP"===m(),i=U("review"===e?"global_nav_review":"global_nav_sign_in",null!==n),{fetching:a,isValid:o}=J(t),{fetching:l,isValid:_}=Z(t,!!n||!r||o),{fetching:p,isValid:g}=Y(t,!!n||!r||o||_),S=!a&&o||!l&&_||!p&&g,{fetching:h,bucket:c}=f({pause:!!n||!r||!S||!i,logImpression:!0}),d="review"===e?"review_global_nav_prompt"===c:"sign_in_global_nav_prompt"===c;return!n&&r&&S&&i&&!h&&d},J=e=>{var n=o(),s=!w.has(n),t=i()||0,{countryGeoId:r,fetching:a}=S("Tourism"!==e||s),u=!P.has(t)&&(r===h||t===h),l=L.has(n)&&E.has(t);return{fetching:a,isValid:"Tourism"===e&&!l&&(u||s)}},Z=(e,n)=>{var s="en-US"!==o(),{fetching:t,bucket:r}=b({pause:n||"Home"!==e||!s,logImpression:!1});return{fetching:t,isValid:"Home"===e&&s&&(!r||"Control_No Ads"===r)}},Y=(e,n)=>{var{fetching:s,bucket:t}=I({pause:n||"Restaurants"!==e,logImpression:!1});return{fetching:s,isValid:"Restaurants"===e&&"test"===t}};return[()=>{c=N,d=R,v=new Set(["en-AU","en-CA","en-GB","en-HK","en-IE","en-IN","en-MY","en-NZ","en-PH","en-SG","en-US","en-ZA"]),f=C,b=M,I=q,w=new Set(["en-US"]),P=new Set([54171,28970,35805,187147,189158,1954828,187895,189970]),L=new Set(["en-AU","en-CA","en-HK","en-IN","en-IE","en-MY","en-NZ","en-PH","en-SG","en-ZA","en-GB","en-UK","en-US"]),E=new Set([60750,294265,503715,295105,255094,12,3676467,143025,2049541]),e({isSoftLoginPromptEligibleRestaurantsShelf:V,useIsSoftLoginPromptSessionEligible:U,useListPageMembershipBannerBucket:c,useMembershipBannerAndHeartIconBucket:d,useShowSoftLoginBannerRestaurants:B,useShowSoftLoginGlobalReviewPrompt:F,useShowSoftLoginGlobalSignInPrompt:K,useShowSoftLoginHeartIconPrompt:H,useUpdateSoftLoginPromptSessions:k})},[e=>s=e.useUserId,e=>t=e.default,e=>(r=e.useExperimentBucket,i=e.useGeoId,a=e.exhaustivenessCheck),e=>o=e.useLocale,e=>u=e.default,e=>l=e.useSessionId,e=>_=e.default,e=>(p=e.useState,g=e.useEffect),e=>m=e.useViewportCategory,e=>(S=e.useCountryGeoId,h=e.US_GEO_ID)]]},["52far5","gugp1d","a2qxj9","7thqz4","eqoaya","al4vil","9b9b10","o4yt4q","ys6v1o","b3ve7j"]]);

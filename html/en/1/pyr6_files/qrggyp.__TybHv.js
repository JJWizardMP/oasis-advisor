(this.$WP=this.$WP||[]).push(["qrggyp",(e,r)=>{var t,a,n,u,s,i,o,l,_,E,c,R,p,f,h,S={__key:0x9a2b47f3765b,id:"9a2b47f3765b9fe5",loc:{},definitions:[]},O=e=>{var[{data:r,fetching:t}]=u({query:S,variables:{locationId:e}},{HRM_updateTrialSubscription:()=>"invalidateAndRefetch"}),a=r?.HRM_getLocationsReputationManagementSubscriptionInfo?.[0]?.subscriptionName;return{isSubscriber:"REPUTATION_PRO"===a||"REVIEW_HUB"===a,isChecking:t,checked:!!r&&!t}},T={__key:0xba800aa456c6,id:"ba800aa456c60096",loc:{},definitions:[]},d={__key:51480438288025,id:"2ed2393cae99778b",loc:{},definitions:[]},A=e=>{var[{data:r,fetching:t,error:a}]=n({query:d,variables:{locationId:e||0},pause:null==e}),u=r?.locations?.[0];return null==u?{data:void 0,fetching:t,error:a}:{data:{placeType:u.placeType,countryId:u.countryId},fetching:t,error:a}},v=e=>{var r=A(e),{data:t}=r,a=null;return(t?.placeType==="EATERY"||t?.placeType==="ACCOMMODATION")&&(a=t?.placeType),{...r,data:a}},I=e=>{var[r]=u({query:S,variables:{locationId:e}},{HRM_updateTrialSubscription:()=>"invalidateAndRefetch"}),{data:t,fetching:a,error:n}=r,s=t?.HRM_getLocationsReputationManagementSubscriptionInfo?.[0];if(null==s)return{fetching:a,error:n};var{subscriptionName:i,packageName:o,trialInfo:l,features:_,hasCancelledSubscription:E}=s;return{data:{subscriptionName:i,packageName:o,features:(_??[]).filter(Boolean),trialInfo:{status:l?.status??null},hasCancelledSubscription:E||!1},fetching:a,error:n}},P=e=>{var{data:r,fetching:t,error:a}=I(e);return{featureSet:new Set(r?.features?.filter(Boolean)||[]),fetching:t,error:a}},b=["REVIEW_INSIGHTS","FB_GOOG_REVIEWS","RESPONSE_TEMPLATES"],y=["REVIEW_INSIGHTS","ARC","FB_GOOG_REVIEWS","RESPONSE_TEMPLATES","NOTIFICATIONS"],C=e=>{var{isSubscriber:r}=O(e),{featureSet:a,fetching:n,error:u}=P(e),{data:s,fetching:i,error:o}=v(e);return{data:t(()=>r?new Set:"EATERY"===s?new Set(b.filter(e=>!a.has(e))):"ACCOMMODATION"===s?new Set(y.filter(e=>!a.has(e))):new Set,[s,a,r]),error:u||o,fetching:n||i}},L=e=>{var{featureSet:r,fetching:a,error:n}=P(e),{data:u,fetching:c,error:R}=C(e),p=a||c,f=n||R;return t(()=>{var e;return p?e=[]:(e=[E],r.has("FORK_REVIEWS")&&e.push(s),(r.has("FB_GOOG_REVIEWS")||u.has("FB_GOOG_REVIEWS"))&&e.push(i,o),r.has("BCOM_XPED_REVIEWS")&&e.push(l,_)),{fetching:p,error:f,data:e}},[p,r,u,f])},M=e=>{var{locationId:r,children:t}=e,{featureSet:a}=P(r),{data:n}=C(r);if("and"in e&&!0===e.and){var{feature:u,upsellFeature:s}=e;if(a.has(u)&&n.has(s))return"function"==typeof t?t(!0):t}else if(!0===e.or){var{feature:i,upsellFeature:o}=e;if(a.has(i)||n.has(o))return"function"==typeof t?t(!0):t}else if("feature"in e&&null!=e.feature){var{feature:l}=e;if(a.has(l))return"function"==typeof t?t(!0):t}else if("upsellFeature"in e&&null!=e.upsellFeature){var{upsellFeature:_}=e;if(n.has(_))return"function"==typeof t?t(!0):t}return"function"==typeof t?c(R,{children:t(!1)}):null},F=({locationId:e,locationType:r,children:t})=>{var{data:a}=v(e);return a!==r?null:t},m=()=>{var{localize:e}=p();return r=>{switch(r.constantKey){case"HOW_TO_RESPOND_PAGE_PATH":return"/ForRestaurants-reviews";case"LOCALIZED_PRODUCT_NAME":return e.string("rs_reputation_product_name_short");case"PRODUCT_NAME":return"reviewhub";case"READ_STATUS_FEATURE_DATE_STRING":return"2021-03-23";case"UPSELL_BANNER_TITLE":return e.string("hrm_review_hub_banner_header");case"UPSELL_PATH":return"/ForRestaurants/ta_reviewhub";case"UPSELL_PLATFORM_REVIEWS":return e.string("rs_repman_tooltip_platforms",{sPlatform:r.platform});default:return r}}},D=e=>{var{localize:r}=p(),{subscribeBannerMcid:t}=a(f);return a=>{switch(a.constantKey){case"HOW_TO_RESPOND_PAGE_PATH":return"/TripAdvisorInsights/respond";case"LOCALIZED_PRODUCT_NAME":return r.string("hrm_template_tooltip_fremium_rp");case"PRODUCT_NAME":return"reputationpro";case"READ_STATUS_FEATURE_DATE_STRING":return"9999-11-30";case"UPSELL_BANNER_TITLE":return r.string("hrm_review_insights_banner_header");case"UPSELL_PATH":return`/business/reputationpro?detail=${e}&mcid=${t}`;case"UPSELL_PLATFORM_REVIEWS":return null;default:return a}}},N=e=>{var{data:r}=v(e),t=D(e),a=m();if(null==r)return()=>null;switch(r){case"ACCOMMODATION":return t;case"EATERY":return a;default:return r}},g=({locationId:e,children:r,...t})=>{var a=N(e)(t);return null==a?null:r(a)},V=e=>{var{featureSet:r,fetching:a,error:n}=P(e);return t(()=>{var e=[];return!a&&(e=[E],r.has("FORK_REVIEWS")&&e.push(s),r.has("FB_GOOG_REVIEWS")&&e.push(i,o),r.has("BCOM_XPED_REVIEWS")&&e.push(l,_)),{data:e,fetching:a,error:n}},[n,r,a])},w=e=>e&&e.filter(e=>e&&"ACTIVE"===e.status&&"TA"===e.provider).length>0||!1,G=(e,r)=>{var[{data:a}]=n({query:T,variables:{locationId:e},pause:!h.has(r)});return t(()=>{var e=w(a?.locationSubscriptions?.[0]?.subscriptions);return{isEnabled:e,attributes:[{name:"isRmSubscriber",value:e}]}},[a])},H=e=>{var{isSubscriber:r}=O(e);return r};return[()=>{h=new Set(["OwnerResponse","RMReviewCollection","OwnerNotificationSetting","RMHome"]),e({LocationPlaceTypeCheck:F,ProvideReputationConstant:g,ReputationFeatureCheck:M,useAsyncHrmSubscriberCheck:O,useAvailableProviders:L,useHrmFullStoryAttributes:G,useHrmSubscriberCheck:H,useLocationPlaceType:v,useRMSubscriptionInfo:I,useReputationConstantProvider:N,useReputationFeatureSet:P,useSupportedProviders:V,useUpsellReputationFeatureSet:C})},[e=>(t=e.useMemo,a=e.useContext),e=>n=e.useQuery,e=>u=e.useInvalidatableQuery,e=>(s=e.THEFORK_PROVIDER,i=e.GOOGLE_PROVIDER,o=e.FACEBOOK_PROVIDER,l=e.BCOM_PROVIDER,_=e.EXPEDIA_PROVIDER,E=e.TA_PROVIDER),e=>(c=e.jsx,R=e.Fragment),e=>p=e.useLocalize,e=>f=e.ReviewsMcidContext]]},["o4yt4q","mqwhqn","fbuhsy","kipze9","21h32l","7thqz4","5xwfgn"]]);
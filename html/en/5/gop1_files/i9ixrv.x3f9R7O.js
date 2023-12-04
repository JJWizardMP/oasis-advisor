(this.$WP=this.$WP||[]).push(["i9ixrv",(e,t)=>{function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){return n(1,arguments),!isNaN(function(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&Error().stack,new Date(NaN))}(e))}var i,a,u,s,o,l,c,d,p,m,f,g,b,h,_,D,y,C,N,v,S,A,P,E,T,w,O,R,I,U,k,M,x={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},F=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,L=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,q=/^([+-])(\d{2})(?::?(\d{2}))?$/;function B(e,t){n(1,arguments);var r,i,a=t||{},u=null==a.additionalDigits?2:function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(a.additionalDigits);if(2!==u&&1!==u&&0!==u)throw RangeError("additionalDigits must be 0, 1 or 2");if(!("string"==typeof e||"[object String]"===Object.prototype.toString.call(e)))return new Date(NaN);var s=function(e){var t,n={},r=e.split(x.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],x.timeZoneDelimiter.test(n.date)&&(n.date=e.split(x.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var i=x.timezone.exec(t);i?(n.time=t.replace(i[1],""),n.timezone=i[1]):n.time=t}return n}(e);if(s.date){var o=function(e,t){var n=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var i=r[1]&&parseInt(r[1]),a=r[2]&&parseInt(r[2]);return{year:null==a?i:100*a,restDateString:e.slice((r[1]||r[2]).length)}}(s.date,u);r=function(e,t){if(null===t)return null;var n,r,i=e.match(F);if(!i)return null;var a=!!i[4],u=j(i[1]),s=j(i[2])-1,o=j(i[3]),l=j(i[4]),c=j(i[5])-1;if(a)return l>=1&&l<=53&&c>=0&&c<=6?((n=new Date(0)).setUTCFullYear(t,0,4),r=n.getUTCDay()||7,n.setUTCDate(n.getUTCDate()+((l-1)*7+c+1-r)),n):new Date(NaN);var d=new Date(0);return s>=0&&s<=11&&o>=1&&o<=(z[s]||(H(t)?29:28))&&u>=1&&u<=(H(t)?366:365)?(d.setUTCFullYear(t,s,Math.max(u,o)),d):new Date(NaN)}(o.restDateString,o.year)}if(isNaN(r)||!r)return new Date(NaN);var l=r.getTime(),c=0;if(s.time&&(isNaN(c=function(e){var t=e.match(L);if(!t)return null;var n=Y(t[1]),r=Y(t[2]),i=Y(t[3]);return(24===n?0===r&&0===i:i>=0&&i<60&&r>=0&&r<60&&n>=0&&n<25)?36e5*n+6e4*r+1e3*i:NaN}(s.time))||null===c))return new Date(NaN);if(s.timezone){if(isNaN(i=function(e){if("Z"===e)return 0;var t=e.match(q);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return i>=0&&i<=59?n*(36e5*r+6e4*i):NaN}(s.timezone)))return new Date(NaN)}else{var d=new Date(l+c),p=new Date(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds());return p.setFullYear(d.getUTCFullYear()),p}return new Date(l+c+i)}function j(e){return e?parseInt(e):1}function Y(e){return e&&parseFloat(e.replace(",","."))||0}var z=[31,null,31,30,31,30,31,31,30,31,30,31];function H(e){return e%400==0||e%4==0&&e%100}var $={__key:0xd6cb223cda84,id:"d6cb223cda844f7b",loc:{},definitions:[]},G=e=>{if(!e||!e.dueDate)return null;var t="number"==typeof e.totalAmount&&e.totalAmount>=0?e.totalAmount:null,{currencyCode:n}=e,i=e.dueDate?B(e.dueDate):null;return n&&t&&i&&r(i)?{totalAmount:t,currencyCode:n,dueDate:i}:null},V=e=>{if(!e)return null;var{totalAmount:t,currencyCode:n,discountAmount:r}=e,{discountAmount:i=0}=r||{discountAmount:0};return t&&n?{totalAmount:t,currencyCode:n,discountAmount:i,amountPaid:t-i}:null},W=e=>{if(!e)return{startDate:null,endDate:null,renewalDate:null,cancellationDate:null,autoRenew:!1,withinFullRefundCancellationPeriod:!1};var t=B(e.startDate),n=B(e.endDate),i=e.renewalDate?B(e.renewalDate):null,a=e.cancellationDate?B(e.cancellationDate):null;return{startDate:r(t)?t:null,endDate:r(n)?n:null,renewalDate:i&&r(i)?i:null,cancellationDate:a&&r(a)?a:null,autoRenew:e.autoRenew,withinFullRefundCancellationPeriod:e.withinFullRefundCancellationPeriod}},Z=e=>{var t=e?.OptimusBenefits_getOptimusSubscriptionStatus;return t?{isMember:t.isMember,isFormerMember:!t.isMember&&!!t.subscriptionNumber,subscriptionNumber:t.subscriptionNumber,billingAccountId:t.billingAccountId,nextCharge:G(t.nextCharge),subscriptionPrice:V(t.subscriptionPrice),...W(t.subscriptionDates),purchaseType:t.purchaseType,trialDetails:t.trialDetails,hasAcceptedVfTerms:t.hasAcceptedVfTerms||!1,isExternallyManaged:t.isExternallyManaged||!1,externalPartnerManagementDetails:t.externalPartnerManagementDetails||null,entitlements:t.entitlements||null}:null},Q=e=>a({query:$,pause:!i()||e},Z),J={__key:0xee3d6d7a2cde,id:"ee3d6d7a2cdea3a3",loc:{},definitions:[]},K=e=>{if(!e?.fullSubscription?.firstCharge)return null;var{firstCharge:t}=e.fullSubscription,n=e.discount&&!e.discount.trialDiscount?e.discount?.originalPrice:t?.totalAmount||0;return{firstCharge:{currencyCode:t?.currencyCode||"USD",dueDate:new Date(t?.dueDate||""),totalAmount:t?.totalAmount||0,originalAmount:n}}},X=e=>{if(!e?.discount)return null;var{discount:t}=e,n=t.status;return{discountCode:t.discountCode,discountCodeRejectionReason:t.discountCodeRejectionReason,discountType:t.discountType,discountNote:t.discountNote,expiryDate:t.expiryDate,status:n,originalPrice:t.originalPrice,discountedPrice:t.discountedPrice,trialDiscount:t.trialDiscount||!1,discountNumPeriodsMonths:t.discountNumPeriodsMonths,discountNumPeriodsAnnual:t.discountNumPeriodsAnnual,trialOriginalPrice:t.trialOriginalPrice,trialDiscountedPrice:t.trialDiscountedPrice}},ee=e=>{if(!e?.trialPeriod)return null;var{trialPeriod:t,fullSubscription:n}=e,{firstCharge:r}=n||{},i=e.discount?.trialDiscount?e.discount?.trialOriginalPrice||0:t.trialCharge?.totalAmount||0,a=t.trialPeriodUnits;return{numberOfDays:t.numberOfDays,endDate:new Date(t.endDate),trialCharge:{currencyCode:t.trialCharge?.currencyCode||"USD",dueDate:new Date(t.trialCharge?.dueDate||""),totalAmount:t.trialCharge?.totalAmount||0,originalAmount:i},trialPeriodUnits:a,trialPeriodDuration:t.trialPeriodDuration||0,renewalCharge:{currencyCode:r?.currencyCode||"USD",dueDate:new Date(r?.dueDate||""),totalAmount:r?.totalAmount||0}}},et=(e,t,n,r)=>{var a=i(),[o,l]=u(a),[{data:c,fetching:d,error:p},m]=g({query:J,variables:{request:{currencyCode:e,discountCode:t,source:r}},pause:n});s(()=>{a===o||n||(m({requestPolicy:"network-only"}),l(a))},[o,n,m,a]);var f=K(c?.subscriptionPricing),b=X(c?.subscriptionPricing),h=ee(c?.subscriptionPricing);return{subscriptionPrice:{isMember:c?.subscriptionPricing?.isMember||!1,fullSubscription:f,discount:b,trialPeriod:h},fetching:d,error:p}},en=e=>{var t=d(),{promoCodeForm:{appliedPromoCode:n,isApplying:r,promoCodeField:i}}=o(f);return C(t,r&&i.value||n?.code,!t,e)},er={__key:0xe3ecbd1bf6c0,id:"e3ecbd1bf6c0666a",loc:{},definitions:[]},ei=()=>{var[,e]=b(er);return l(()=>e(),[e])},ea={__key:21823375681207,id:"13d9268e26b759b8",loc:{},definitions:[]},eu={__key:0xb8e78ef6fc39,id:"b8e78ef6fc393870",loc:{},definitions:[]},es=e=>({BETTER_RATES_ELSEWHERE:e.string("plus_account_cancellation_reason_better_rates_elsewhere"),CANNOT_FIND_REQUIRED_HOTEL:e.string("plus_account_cancellation_reason_cannot_find_required_hotel"),COVID19_PANDEMIC_UNCERTAINTY:e.string("plus_account_cancellation_reason_covid19_pandemic_uncertainty"),CUSTOMER_SERVICE_EXPERIENCE:e.string("plus_account_cancellation_reason_customer_service_experience"),ISSUE_WITH_BOOKING:e.string("plus_account_cancellation_reason_issue_with_booking"),SUBSCRIBED_BY_MISTAKE:e.string("plus_account_cancellation_reason_subscribed_by_mistake"),TRAVEL_PLANS_CHANGED:e.string("plus_account_cancellation_reason_travel_plans_changed")}),eo=(e,t,n)=>{var r=es(n);return(!t&&e?.OptimusBenefits_getUserCancellationReasonOptions?.reasons||[]).map(e=>{var t=r[e];return{reason:e,value:e,displayName:t,label:t}})},el=()=>{var{localize:e}=p(),[{data:t,fetching:n}]=g({query:eu}),r=eo(t,n,e),[,i]=b(ea);return[r,l(e=>i({reason:e}),[i])]},ec={__key:0xf27bc21fc949,id:"f27bc21fc949bef1",loc:{},definitions:[]},ed=()=>{var[{data:e,fetching:t}]=g({query:ec}),n=!t&&e?.OptimusBenefits_getUserCancelSubscriptionEligibility||null;return{upcomingBookings:n?.upcomingBookings||0,status:n?.status||null}},ep=e=>fetch("/data/1.0/plusStandalonePurchase/status",{method:"POST",body:JSON.stringify(e),credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then(e=>{if(e.ok)return e.text();throw Error("failed to get standalone purchase status")}).then(e=>JSON.parse(e)),em=e=>fetch("/data/1.0/plusStandalonePurchase/start",{method:"POST",body:JSON.stringify(e),credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then(e=>{if(e.ok)return e.text();throw Error("failed to start standalone purchase")}).then(e=>JSON.parse(e)),ef=()=>{var{funnelKey:e}=o(h);return l(t=>{var n={currency:t.currency,totalAmount:t.totalAmount,subscriptionNumber:t.subscriptionNumber,funnelKey:e},r=new URLSearchParams;Object.entries(n).forEach(([e,t])=>{r.set(e,String(t))});var i=new AbortController,a=setTimeout(()=>i.abort(),3e3);return fetch("/PlusCommerce",{method:"POST",credentials:"same-origin",body:r.toString(),headers:{"content-type":"application/x-www-form-urlencoded"},signal:i.signal}).finally(()=>clearTimeout(a))},[e])},eg=()=>{var e=T(),t=l((t,n)=>{var r=t.purchaseState?.session;e({currency:r?.currency||null,totalAmount:r?.totalAmount||null,subscriptionNumber:r?.subscriptionNumber||null}).catch(e=>{console.error("Error logging P_Sub commerce click",e)}).finally(()=>{n&&n(t)})},[e]);return l(e=>{var n=0,{session:r,onSuccess:i,onError:a}=e,u=(e,n)=>{clearInterval(e),t(n,i)},s=(e,t)=>{clearInterval(e),a&&a(t)},o=setInterval(()=>{n++>=30&&s(o),P(r).then(e=>{e||s(o,"MISSING_DATA");var{purchaseState:t}=e,n=t?.status,r=t?.session;"SUCCESS"===n&&r&&u(o,e),("INTERNAL_ERROR"===n||"PAYMENT_FAILURE"===n||"ACCOUNT_ERROR"===n)&&s(o,n)}).catch(()=>s(o,"QUERY_ERROR"))},1e3)},[t])},eb=()=>{var e=eg(),t=m(),n=i(),r=d(),a=e=>"PAYPAL"===e?"PAYPAL":null;return l(({billingAccountId:i,checkoutSessionId:u,source:s,billingAddress:o,firstName:l,lastName:c,emailAddress:d,phoneNumber:p,paymentToken:m,storedCardId:f,discountCode:g,onSuccess:b,onError:h,cardType:_,inAuthSessionId:D,inAuthTransactionId:y,inAuthUBAId:C,inAuthUBASessionId:N,inAuthUBAEvents:v,inAuthPageId:S,updateMemberAccountInfo:A,expectedSubscriptionPrice:P,csrfToken:T,paymentNonce:w,paymentMethod:O,payerId:R,paymentEmail:I})=>{var U=null,k=a(O);k&&(U={paymentMethod:k,paymentNonce:w,payerId:R,paymentEmail:I}),E({userId:n||"",billingAccountId:i,pointOfSale:t,source:s,billingAddress:o?{name:o.cardholderName,address1:o.street,address2:o.street2,postalCode:o.postalCode,state:o.state,city:o.city,countryCode:o.country}:void 0,firstName:l,lastName:c,emailAddress:d,phoneNumber:p,sessionPaymentAccountToken:m,checkoutSessionId:u,currencyCode:r,cardType:_,existingStoredCardId:f||null,discountCode:g,inAuthTransactionId:y||"",inAuthSessionId:D||"",inAuthUBAId:C||"",inAuthUBASessionId:N||"",inAuthUBAEvents:v||"",inAuthPageId:S||"",updateMemberAccountInfo:A,expectedSubscriptionPrice:P,csrfToken:T,tokenizedPaymentInfo:U}).then(t=>{if(!t){h();return}t?.status==="IN_PROGRESS"&&t?.session?e({session:t.session,onSuccess:b,onError:h}):t?.status==="PAYMENT_FAILURE"?h("PAYMENT_FAILURE"):h()}).catch(()=>{h()})},[n,t,r,e])},eh=()=>{var{params:e}=_(),t="detailId"in e?e.detailId:void 0;return t?`&detailId=${t}`:""},e_={__key:0xbff38878d8c2,id:"bff38878d8c23557",loc:{},definitions:[]},eD=()=>{var[,e]=b(e_);return l(()=>e(),[e])},ey={__key:59203459582753,id:"35d8612d8b2196a4",loc:{},definitions:[]},eC=e=>{var t=d(),n=i(),r=c(n),[{data:a,fetching:u,error:o},p]=g({query:ey,variables:{currency:t},pause:e||!t}),m=l(()=>p({requestPolicy:"network-only"}),[p]);return s(()=>{var e=n!==r.current;n&&e&&m(),e&&(r.current=n)},[m,n]),{eligible:a?.OptimusBenefits_getOptimusEligibility?.eligible||!1,landerEligible:a?.OptimusBenefits_getOptimusEligibility?.landerEligible||!1,subscribed:a?.OptimusBenefits_getOptimusEligibility?.subscribed||!1,error:o,fetching:u}},eN="STANDALONE",ev="OptimusCurationShopping",eS=(e,t)=>{switch(t){case"SHOP_REGULAR":return{flow:ev,variant:"regular",checkoutType:ev};case"SHOP_BEST_RATE":return{flow:ev,variant:"best_rate",checkoutType:ev};default:return{flow:e?"STANDALONE_TRIAL":eN,variant:null,checkoutType:eN}}},eA=()=>(M()||"").startsWith("SHOP_"),eP="shopFlowData",eE=e=>{D.set(eP,D.has(eP)?{...D.get(eP),geoId:e}:{geoId:e},72e5)},eT=()=>{var{geoId:e}=D.get(eP)||{};return e},ew=()=>{D.remove(eP)},eO=()=>{var{params:e}=_();return"oft"in e&&e.oft?e.oft:null};return[()=>{y=Q,C=et,N=en,v=ei,S=el,A=ed,P=ep,E=em,T=ef,w=eb,O=eh,R=eD,I=eC,U=eS,k=eA,e({clearShopCheckoutParams:ew,getFlowVariantCheckoutType:U,getShopCheckoutGeoId:eT,setShopCheckoutGeoId:eE,useCommerceClickLogger:T,useDetailQueryParameter:O,useFlowTypeDesignator:M=eO,useIsShopFlow:k,useOptimusEligibility:I,useOptimusSubscription:y,useOptimusSubscriptionCancel:S,useOptimusSubscriptionCancelEligibility:A,useOptimusSubscriptionDisableAutoRenew:v,useOptimusSubscriptionEnableAutoRenew:R,useOptimusSubscriptionPrice:N,useOptimusSubscriptionPriceQuery:C,usePurchaseOptimusSubscription:w})},[e=>i=e.useUserId,e=>a=e.default,e=>(u=e.useState,s=e.useEffect,o=e.useContext,l=e.useCallback,c=e.useRef),e=>(d=e.useCurrency,p=e.useLocalize,m=e.useLocale),e=>f=e.Payment,e=>(g=e.useQuery,b=e.useMutation),e=>h=e.FunnelTracking,e=>_=e.useRoute,e=>D=e.default]]},["52far5","l47ri7","o4yt4q","7thqz4","1yajq4","mqwhqn","kkqcv8","fgwvq1","9b9b10"]]);

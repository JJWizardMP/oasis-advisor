(this.$WP=this.$WP||[]).push(["avx3a3",(e,t)=>{var a,r,s,n,i,o,l,c,u,d,p,m,h,g,f,v,S,y,D,I,b,E,N,T,w,_,k,O,L,A,C,x,q,G,P,R,j,H,U,W,M,z={current:{seeAllLinks:!1,titles:!1,tagTranslations:!1,maxAccommodations:!1,tooltips:!1}},$=()=>z.current,F=(e,t)=>{var a=new Date;a.setDate(a.getDate()+e),t.push(a.getFullYear()),t.push(a.getMonth()+1),t.push(a.getDate())},K=(e,t,a)=>{var r=t.travelerInfo&&t.travelerInfo.hotels;if(r)e.stayDates=r.stayDates,e.guests=r.guests,e.paramSeqId=r.paramSeqId||0;else{var s=[];F(1,s),F(2,s),e.stayDates=s.join("_"),e.guests="1_1",e.paramSeqId=0}e.requestNumber>1&&(e.searchKey=t?.page?.crossSells?.endpointResults?.searchKey),a.sponsoredListingsEnabled&&(1===e.requestNumber?e.sponsoredListingData={}:e.sponsoredListingData=t?.page?.crossSells?.endpointResults?.sponsoredListingData||{}),t.tracking&&t.tracking.uid&&(e.pageLoadUid=t.tracking.uid)},X=(e,t)=>{var a={detailId:t.featuredAccommodation,requestNumber:e.page.crossSells.requestNumber,configuration:t.configuration,requestCaller:t.requestCaller,filters:t.filters};return K(a,e,t),a},B=(e,t)=>{var a=new URLSearchParams;if(a.append("rn",String(e.requestNumber)),a.append("stayDates",e.stayDates),a.append("guestInfo",e.guests),a.append("csc",e.configuration),a.append("rc",e.requestCaller),e.sponsoredListingData){var r={...e.sponsoredListingData};delete r.debugData,a.append("sld",JSON.stringify(r))}return e.requestNumber>t.length&&a.append("ifp",""),e.searchKey&&a.append("sk",e.searchKey),e.pageLoadUid&&a.append("puid",e.pageLoadUid),e.paramSeqId&&a.append("paramSeqId",String(e.paramSeqId)),e.filters&&a.append("ft",JSON.stringify(e.filters)),`/data/1.0/crosssellaccommodations/${e.detailId}?${a.toString()}`},J=e=>{var{accommodationsByType:t,pageLocations:a,isSearchComplete:r,sponsoredListingData:s,searchKey:n}=e;return{pageLocations:a,locationMap:a.reduce((e,a)=>(e[a.locationName]={crossSells:a.crossSellTypes.map(e=>t[e]),locationName:a.locationName,locationOrder:a.locationOrder},e),{}),isSearchComplete:r,sponsoredListingData:s,searchKey:n}},V=(e,t,a)=>{var r=`/data/1.0/crosssellaccommodations/${e}/uiAssets/${t}`,s=new URLSearchParams;a&&s.append("ft",JSON.stringify(a));var n=s.toString();return n?`${r}?${n}`:r},Y=e=>{window.__SP_DEBUG_EVENTS__=window.__SP_DEBUG_EVENTS__||[],e.forEach(e=>window.__SP_DEBUG_EVENTS__.push(e)),window.require("ta/Core/TA.FireEvent").fireEvent("sp_debug_refresh")};function Z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Q="hr_xsell_skeleton";function ee(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var et=[10,1e3,1e3,1e3,1e3,1500,1500,1500,2e3,2e3,2e3],ea="Will stop polling.",er=e=>!!e.detailId&&!!e.stayDates&&!!e.guests,es=(e,t=1e4)=>Promise.race([fetch(e,{method:"GET",header:{"Content-Type":"application/json"},credentials:"same-origin"}),new Promise((e,a)=>{setTimeout(()=>a(Error("timeout")),t)})]);function en(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function ei(e){en(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&Error().stack,new Date(NaN))}function eo(e,t){for(var a=Math.abs(e).toString();a.length<t;)a="0"+a;return(e<0?"-":"")+a}function el(e,t){if(arguments.length<1)throw TypeError("1 argument required, but only ".concat(arguments.length," present"));var a=ei(e);if(!function(e){return en(1,arguments),!isNaN(ei(e))}(a))throw RangeError("Invalid time value");var r=t||{},s=null==r.format?"extended":String(r.format),n=null==r.representation?"complete":String(r.representation);if("extended"!==s&&"basic"!==s)throw RangeError("format must be 'extended' or 'basic'");if("date"!==n&&"time"!==n&&"complete"!==n)throw RangeError("representation must be 'date', 'time', or 'complete'");var i="",o="",l="extended"===s?"-":"";if("time"!==n){var c=eo(a.getDate(),2),u=eo(a.getMonth()+1,2),d=eo(a.getFullYear(),4);i="".concat(d).concat(l).concat(u).concat(l).concat(c)}if("date"!==n){var p=a.getTimezoneOffset();if(0!==p){var m=Math.abs(p),h=eo(Math.floor(m/60),2),g=eo(m%60,2);o="".concat(p<0?"+":"-").concat(h,":").concat(g)}else o="Z";var f=eo(a.getHours(),2),v=eo(a.getMinutes(),2),S=eo(a.getSeconds(),2),y=""===i?"":"T",D=[f,v,S].join("extended"===s?":":"");i="".concat(i).concat(y).concat(D).concat(o)}return i}var ec=e=>"cg"===e,eu=e=>{for(var t={},a=function(a){Object.keys(e[a]).forEach(r=>{t[`${r}`]=e[a][r]})},r=0;r<e.length;r++)a(r);return t},ed=e=>e&&e.reduce((e,t)=>(e[t.key]=t.value,e),{}),ep=(e,t)=>{if(!ec(t))return null;var a=e.comparisonGridInfo&&e.comparisonGridInfo.nearbyTransportation&&{name:e.comparisonGridInfo.nearbyTransportation?.location?.name||"",distance:Number(e.comparisonGridInfo.nearbyTransportation?.distance?.toFixed(1))||0,type:e.comparisonGridInfo.nearbyTransportation?.poiType||"flights"}||null,r=e.comparisonGridInfo&&{name:e.comparisonGridInfo.nearbyHighlightPoi?.location?.name||"",distance:Number(e.comparisonGridInfo.nearbyHighlightPoi?.distance?.toFixed(1))||0,type:e.comparisonGridInfo.nearbyHighlightPoi?.poiType||"parking"}||null,s=e.comparisonGridInfo&&r&&a&&{name:e.comparisonGridInfo.location?.neighborhoods?.[0]?.name||e.location?.geoName||"",nearbyTransportation:a,nearbyPOI:r}||null,n=e.comparisonGridInfo?.availableAmenityKeys?.map(e=>e&&e.tagId||0)||[],i=e.comparisonGridInfo?.reviewSnippets?.items?.filter(e=>e).map(e=>{var t=e&&e.text||"";return{htmlEscapedText:t=(t=t.replaceAll("￹",'<span class="highlighted">')).replaceAll("￻","</span>"),url:e&&e.reviewUrl?.url||""}})||null;return e.comparisonGridInfo&&i&&n&&s&&{availableAmenityKeys:n,accommodationClassTagId:e.comparisonGridInfo.location?.detail?.starRating?.[0]?.tagId,neighborhood:s,reviewSnippets:i}||null},em=(e,t,a)=>{var r,s=e.location?.reviewSummary?.rating||0;s&&(s*=10);var n=e.location&&{latitude:e.location.latitude,longitude:e.location.longitude},i={id:e.location?.locationId||0,name:e.location?.name||"",detailUrl:e.location?.url||"",numReviews:e.location?.reviewSummary?.count||0,bubbleRating:s,geoPoint:n,thumbnail:e.location?.thumbnail},o=ep(e,t),l=e.sponsoredListingInfo?{tracking_guid:e.sponsoredListingInfo.trackingGUID,attributionToken:e.sponsoredListingInfo.attributionToken?e.sponsoredListingInfo.attributionToken:void 0}:void 0;e.distance?.distance&&e.distance?.unit&&(r={distance:e.distance.distance,unit:e.distance.unit});var c={location:i,listingKey:e.listingKey||"",displayPrice:e.displayPrice||"",distance:r,localizedDistance:e.localizedDistance||"",sponsoredListingV2:l,hideSPPill:a,popIndexMessage:e.popIndexMessage||""};return ec(t)&&o&&(c.comparisonGridInfo=o),c},eh=(e,t)=>{var{accommodationsByType:a,pageLocations:r,isHacComplete:s,searchKey:n}=e||{},i=ed(a),o=s?y.SHOWING:y.LOADING;return{pageLocations:r,locationMap:r&&r.reduce((e,t)=>{var a=[];return t.crossSellTypes.forEach(e=>{var t={};ec(e)&&(t=eu(i[e].accommodations.map(e=>e&&e.comparisonGridInfo.availableAmenityKeys?.map(e=>{var t={};return e&&e.tagId&&(t[e.tagId]=e.localizedName),t})).flat())),a.push({accommodations:i[e].accommodations.map(t=>t&&em(t,e,i[e].hideSponsoredPill)),crossSellType:i[e].crossSellType,placementName:i[e].placementName,isOverallComplete:s,impressionKey:"",tagTranslations:t,updateWithNewData:!0,displayState:o})}),e[t.locationName]={crossSells:a,locationName:t.locationName,locationOrder:t.locationOrder},e},{}),isSearchComplete:t,sponsoredListingData:void 0,searchKey:n}},eg=e=>{var{seeAllLinks:t,tagTranslations:a,titles:r,tooltips:s}=e||{},n=ed(t),i={};return Object.keys(n||{}).forEach(e=>{n[e]&&(i[e]=n[e].nonCanonicalUrl)}),{seeAllLinks:i,tagTranslations:ed(a),titles:ed(r),tooltips:ed(s),maxAccommodations:!1}},ef=e=>{var t=e.accommodationsByType?.filter(e=>e?.value?.placementName==="XS_NEARBY");if(!t||0===t.length)return null;var a=t[0]?.value?.accommodations;return a?.find(e=>e?.sponsoredListingInfo==null)},ev={__key:0xfe68a644a473,id:"fe68a644a4731869",loc:{},definitions:[]},eS=[1e3,1e3,1e3,1e3,1500,1500,1500,2e3,2e3,2e3,5e3,1e4];function ey(e){var[,t]=r(0),a=s(null),i=s(null),o=s(0),l=s(0),{updateCrossSellEndpointData:c,filters:u}=e,{page:d,params:p}=h(),m=g(),{detailId:f=-1}=p,{hotels:v}=E(),S=T(),y=b(),D=i.current,N={adults:v&&v.adults||2,rooms:v&&v.rooms||1,checkInDate:v?.checkInDate?el(v.checkInDate,{representation:"date"}):"",checkOutDate:v?.checkOutDate?el(v.checkOutDate,{representation:"date"}):"",childAgesPerRoom:v&&v.childAgesPerRoom,usedDefaultDates:v&&!!v.defaultDates},L=u&&u.zft&&parseInt(u.zft,10),A=null;L&&(A={integerFilters:[{filterType:"MULTI_TAG",values:[L]}]});var C={locationId:f,application:"HOTEL_DETAIL",currencyCode:S,sessionId:y,pageviewUid:m,travelInfo:N,requestNumber:l.current,filters:A,route:{page:d,params:p}};i.current=C,I(D&&D.travelInfo,C.travelInfo)||(l.current=0,o.current=0);var[{fetching:x,data:q,error:G}]=O({query:ev,variables:C}),P=q&&q.HPS_getWebXSellShelves,R=(({data:e,error:t})=>e?.HPS_getWebXSellShelves?.isHacComplete||!!t)({data:q,error:G})||l.current>=eS.length,j=eh(P,R),H=!x&&!R&&j;n(()=>{if(R&&P&&N.checkInDate&&N.checkOutDate){var e=ef(P),t=e?.location?.thumbnail?.photoSizeDynamic;w(_,{template:k,checkInDate:N.checkInDate.toString(),checkOutDate:N.checkOutDate.toString(),propertyName:e?.location?.name,displayPrice:e?.displayPrice,rating:e?.location?.reviewSummary?.rating,localizedDistance:e?.localizedDistance,reviewCount:e?.location?.reviewSummary?.count,thumbnail:t,url:e?.location?.url,locationId:e?.location?.locationId})}else w(_,null)},[R,P,N.checkInDate,N.checkOutDate]);var U=!x&&!G&&j&&o.current<=l.current;return n(()=>{U&&(H&&(clearTimeout(a.current),a.current=setTimeout(()=>{l.current+=1,t(e=>e+1)},eS[l.current])),o.current+=1,c(j))},[l,H,U,o,j,c]),null}var eD={__key:0xc84f6b4b3b08,id:"c84f6b4b3b08fade",loc:{},definitions:[]};function eI(e){var{containerLoadedCallback:t,setUIAssets:a,application:r}=e,[{fetching:s,data:i,error:o}]=O({query:eD,variables:{locationId:e.featuredAccommodation,application:r}}),l=eg(i&&i.HPS_getWebXSellComponents);return n(()=>{!l||o||s||(t(),a(l))},[s,o,l,a,t]),null}var eb=(e,t,a,r)=>{e&&fetch(V(e,t,r),{method:"GET",header:{"Content-Type":"application/json"},credentials:"same-origin"}).then(e=>{if(e.ok)return e;throw JSON.stringify(e),Error(e.statusText)}).then(e=>e.json()).then(e=>{a(e)})};function eE(e){var t="locationPhotoDirectLink"===e.requestCaller,[a,s]=r(!1),i=m("t4b_hr_xsell_sponsored_slot_0_display")&&!t,{didALocationRegister:o,featuredAccommodation:l,xsellConfig:p,setUIAssets:g,filters:f,requestCaller:v,skipOnLoadSearch:S}=e,{page:y}=h(),D="Hotel_Review"===y;n(()=>{D||a||!o||(eb(l,p,g,f),s(!0))},[a,s,o,l,p,g,f,D]);var I=null;if(!a&&o&&D&&(I=c(W,{featuredAccommodation:l,application:"HOTEL_DETAIL",containerLoadedCallback:()=>(s(!0),null)})),o&&a){var b={configuration:p,featuredAccommodation:l,requestCaller:v||"hotelReview",sponsoredListingsEnabled:i,serverSideSponsoredHotelSelectionEnabled:i,skipOnLoadSearch:S,filters:f};I=D?u(d,{children:[I,c(U,{...b})]}):c(H,{...b})}return I}var eN={seeAllLinks:!1,titles:!1,tagTranslations:!1,maxAccommodations:!1,tooltips:!1},eT=()=>{if("undefined"==typeof window)return $();var e=l().getState();return e?.page?.crossSells?.uiAssets||eN},ew=(e,t,a)=>t&&e&&t[e]?t[e]:a,e_=e=>ew(e,M().titles,c(N,{id:"p13n_you_may_also_like"})),ek=e=>{var{tooltips:t}=M();return t&&e&&t[e]||null},eO=(e,t,a)=>t&&e&&t[e]?t[e]:a,eL=e=>{var{seeAllLinks:t}=M();return eO(e,t,t?.default)};return[()=>{L=class extends a{render(){return null}constructor(e){super(e),z.current=e.data}},x=i({data:(e,t)=>{var a=t("/data/1.0/crosssellaccommodations/comparisongridcrosssellsuiassets/");return()=>{var{data:e,loading:t}=a.get();return t||!e?{}:{data:e}}},actions:{}})(L),A=class extends a{render(){return null}constructor(e){super(e),this.props.updateCrossSellEndpointData(this.props.data)}},q=i({data:(e,t)=>{var a=t("/data/1.0/crosssellaccommodations/comparisongridcrosssells");return e=>{var{data:t,loading:r}=a.get();return r||!t||e.page.crossSells.updatingResults?{}:{data:J(t)}}},actions:{updateCrossSellEndpointData:o.page.hotelreview.setCrossSellsEndpointResults}})(A),G={module:Q,action:"xsell_show"},P={module:Q,action:"xsell_collapse"},R={module:Q,action:"xsell_remains_hidden"},j=class{constructor(e=D){Z(this,"trackEventAjax",void 0),Z(this,"displayStates",void 0),Z(this,"previousResults",void 0),Z(this,"shouldShowIncompleteResults",void 0),Z(this,"calculateDisplayStates",(e,t,a=!1)=>{for(var{accommodationsByType:r,...s}=e,n={},i=Object.keys(r),o=0;o<i.length;o++){var l=i[o],c=r[l],u=!1;this.displayStates[l]||(this.displayStates[l]=y.HIDDEN,u=!0);var d=this.displayStates[l],p=c.accommodations.length>0,m=c.isOverallComplete,h=void 0;if(a){var g=this.shouldShowIncompleteResults[l];h=this.getTimeoutStateTransition(d,m,g)}else h=this.getNextDisplayStateTransition(d,p,m,t,u);h.updateWithNewData&&(this.displayStates[l]=h.displayState),n[l]={...c,...h}}var f={accommodationsByType:n,...s};return this.previousResults=f,f}),Z(this,"calculateTimeoutStates",()=>this.calculateDisplayStates(this.previousResults,0,!0)),Z(this,"transition",(e,t)=>({displayState:e,updateWithNewData:t})),Z(this,"fromHidden",(e,t,a)=>e?(this.trackEventAjax(G),this.transition(y.SHOWING,!0)):t?(a&&this.trackEventAjax(R),this.transition(y.HIDDEN,!1)):(this.trackEventAjax(G),this.transition(y.LOADING,!0))),Z(this,"fromLoading",(e,t)=>e?this.transition(y.SHOWING,!0):t?(this.trackEventAjax(P),this.transition(y.HIDDEN,!0)):this.transition(y.LOADING,!1)),Z(this,"fromShowing",(e,t,a)=>e?this.transition(y.SHOWING,!0):t?(this.trackEventAjax(P),this.transition(y.HIDDEN,!0)):1===a?this.transition(y.LOADING,!0):this.transition(y.SHOWING,!1)),Z(this,"getNextDisplayStateTransition",(e,t,a,r,s)=>{switch(e){case y.HIDDEN:return this.fromHidden(t,a,s);case y.LOADING:return this.fromLoading(t,a);default:return this.fromShowing(t,a,r)}}),Z(this,"getTimeoutStateTransition",(e,t,a=!0)=>{if(e===y.SHOWING){if(t||a)return this.transition(y.SHOWING,!1)}else e===y.LOADING&&this.trackEventAjax(P);return this.transition(y.HIDDEN,e!==y.HIDDEN)}),this.trackEventAjax=e,this.displayStates={},this.shouldShowIncompleteResults={n:!0,c:!0,m:!0}}},C=class extends a{componentDidMount(){this.props.skipOnLoadSearch||this.fetchCrossSellData()}componentDidUpdate(e){this.urlParamsChanged(e.urlData)&&!this.props.updatingXSellResults&&this.fetchCrossSellData()}urlParamsChanged(e){var t=this.props.urlData;return e.requestNumber!==t.requestNumber||e.stayDates!==t.stayDates||e.guests!==t.guests||e.detailId!==t.detailId||e.configuration!==t.configuration||e.requestCaller!==t.requestCaller||!f(e.filters,t.filters)}fetchCrossSellData(){var{urlData:e}=this.props;if(!er(e)){JSON.stringify(e);return}es(B(e,this.pollingDelay)).then(e=>{if(e.ok||e.status>=200&&e.status<300)return e;var t=`ResponseStatus: ${e.status} Invalid results from server: ${JSON.stringify(e)}`;return 400===e.status&&(t=`${ea} ${t}`),Promise.reject(Error(t))}).then(e=>e.json()).then(e=>{var t=this.displayManager.calculateDisplayStates(e,this.props.urlData.requestNumber);t.sponsoredListingData&&t.sponsoredListingData.debugData&&Y(t.sponsoredListingData.debugData);var a=J(t);this.props.updateCrossSellEndpointData(a),a.isSearchComplete||this.triggerPoll()}).catch(e=>{e?.message?.startsWith(ea)||this.triggerPoll()})}triggerPoll(){var e={poll:this.props.poll,pollingDelay:this.pollingDelay,requestNumber:this.props.urlData.requestNumber,loading:!1,complete:!1,timedOut:this.pollingTimedOut};JSON.stringify(e),v(e,this.timerContainer)}render(){return null}constructor(e){super(e),ee(this,"displayManager",void 0),ee(this,"pollingDelay",void 0),ee(this,"pollingTimedOut",()=>{this.props.urlData.requestNumber;var e=J(this.displayManager.calculateTimeoutStates());this.props.updateCrossSellEndpointData(e)}),ee(this,"timerContainer",new S),this.displayManager=new j,this.pollingDelay=et}},H=p((e,t)=>({...t,urlData:X(e,t),updatingXSellResults:!!e.page.crossSells?.updatingResults}),{poll:o.page.hotelreview.crossSellsPoll,updateCrossSellEndpointData:o.page.hotelreview.setCrossSellsEndpointResults})(C),U=p((e,t)=>({...t}),{updateCrossSellEndpointData:o.page.hotelreview.setCrossSellsEndpointResults})(ey),W=p((e,t)=>({...t}),{setUIAssets:o.page.hotelreview.setUIAssets})(eI),e({ComparisonGridDataLoader:q,UiAssetLoader:x,WaitForPageLocation:p((e,t)=>({...t,didALocationRegister:!t.wait&&!!e.page.crossSells?.atLeastOneLocationRegistered,featuredAccommodation:Number(e.route.detail||e.page.detailId)}),{setUIAssets:o.page.hotelreview.setUIAssets})(eE),getSeeAllUrlForCrossSellType:eL,getTitleForCrossSellType:e_,getTooltipForCrossSellType:ek,getUIAssets:M=eT})},[e=>(a=e.Component,r=e.useState,s=e.useRef,n=e.useEffect),e=>i=e.bind,e=>(o=e.actions,l=e.getStore),e=>(c=e.jsx,u=e.jsxs,d=e.Fragment),e=>p=e.connect,e=>m=e.featureIsEnabled,e=>(h=e.useRoute,g=e.usePageviewUid),e=>f=e.default,e=>(v=e.setTimer,S=e.TimerContainer),e=>y=e.DisplayState,e=>D=e.default,e=>I=e.shallowEquals,e=>b=e.useSessionId,e=>E=e.useTravelInfo,e=>(N=e.default,T=e.useCurrency),e=>(w=e.setInterstitialsCustomEventData,_=e.BRAZE_EXIT_EVENT_KEY,k=e.HOTEL_REVIEW_EXIT_TEMPLATE),e=>O=e.useQuery]]},["o4yt4q","6z5q2p","45ddp0","21h32l","2mj4nv","skjzuv","fgwvq1","b5nukb","0l1dx6","o1fcvi","4axon3","t05m6z","al4vil","etaac9","7thqz4","bt3bv2","mqwhqn"]]);
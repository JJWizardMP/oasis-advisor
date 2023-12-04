(this.$WP=this.$WP||[]).push(["r6ayw2",(e,t)=>{var o,r,a,i,s,n,c,l,_,d,u,p,m,g,I,y,b,f={__key:3970514814735,id:"039c7520070f6f07",loc:{},definitions:[]},h=e=>{switch(e.__typename){case"Trips_LocationItemObject":if(e.object?.placeType==="COUNTRY")return e.object?.locationId;if(e.object?.detail?.__typename==="Geo")return e.object?.countryId;return e.object?.parentGeoId;case"Trips_AttractionItemObject":case"Trips_ForumPostItemObject":case"Trips_ReviewItemObject":return e.object?.location?.parentGeoId;default:return null}},v=e=>e?.__typename==="Trips_LocationItemObject",j=e=>e.object?.__typename==="Trips_LocationItemObject"&&e.object?.object?.placeType==="ACCOMMODATION"&&e.object?.object?.accommodationCategory==="HOTEL",T=["things_to_do","food_and_drink","places_to_stay","places_to_go","places_to_see","forums","reviews","photos_and_videos","notes"],O=e=>{if(!e.length)return[];var t=[];return T.forEach(o=>{var r=e.find(e=>e.id===o);r&&t.push(r)}),t},w=(e,t)=>{switch(t){case"food_and_drink":return e.string("trips_v2_category_food_and_drink");case"forums":return e.string("trips_v2_category_forums");case"notes":return e.string("trips_v2_category_notes");case"photos_and_videos":return e.string("trips_v2_category_photos_and_videos");case"places_to_see":return e.string("trips_v2_category_places_to_see");case"places_to_go":return e.string("trips_v2_category_places_to_go");case"places_to_stay":return e.string("trips_v2_category_places_to_stay");case"reviews":return e.string("trips_v2_category_reviews");case"things_to_do":return e.string("trips_v2_category_things_to_do");default:return""}},P=e=>{switch(e.__typename){case"Trips_LocationItemObject":return e.object?.locationId;case"Trips_ReviewItemObject":return e.reviewId;case"Trips_LinkPostItemObject":return e.linkPostId;case"Trips_AttractionItemObject":return e.attractionProductId;case"Trips_PhotoItemObject":return e.photoId;case"Trips_VideoItemObject":return e.videoId;case"Trips_NoteItemObject":return e.noteId;case"Trips_ForumPostItemObject":return e.forumPostId;case"Trips_RepostItemObject":return e.repostId;default:return}},k=(e,t)=>{var o=new Date(e);return o.setDate(e.getDate()+t),o},z=e=>e.find(e=>"places_to_stay"===e.category)?.items?.map(e=>"GENERATIVE_AI"===e.creationMethod&&e.object?.__typename==="Trips_LocationItemObject"?e.object?.locationId:null)?.filter(Boolean),C={__key:61275194274963,id:"37babe3034932e67",loc:{},definitions:[]},M=["places_to_stay","places_to_go","places_to_see","things_to_do","food_and_drink","notes"],E=e=>{var{localize:t}=d(),[a,i]=o([]),[s,n]=o([]),l=r(()=>(e.categorizedItems.find(e=>"photos_and_videos"===e.category)?.items||[]).map(e=>e?.object?.__typename==="Trips_VideoItemObject"&&e.object?.object?.__typename==="Media_VideoResult"||e?.object?.__typename==="Trips_PhotoItemObject"&&e.object?.object?.__typename==="Media_PhotoResult"?e.object?.object?.locationId:null).filter(Boolean),[e.categorizedItems]),[_]=c({query:C,variables:{locationIds:l},pause:!l?.length}),u=r(()=>{var e=new Map;return _?.data?.locations?.forEach(t=>{t?.locationId&&e.set(t.locationId,t)}),e},[_]),p=r(()=>e.tripLocations?.filter(t=>t?.location?.name&&t?.location?.locationId&&t?.location?.locationId!==e.geo?.locationId).map(e=>({id:String(e?.location?.locationId||""),label:e?.location?.localizedAdditionalNames?.long||e?.location?.name||""}))||[],[e.geo?.locationId,e.tripLocations]),m=r(()=>O(e.categorizedItems.map(e=>({id:e.category,label:w(t,e.category)}))||[]),[e.categorizedItems,t]),g=r(()=>{if(!e.categorizedItems?.length)return[];if(!a.length&&!s.length)return e.categorizedItems;var t=e.categorizedItems.filter(e=>!a.length||a.includes(e.category));return s.length?t.map(e=>e?.category?{category:e.category,items:e?.items?.filter(e=>{if(!e?.object?.object)return!1;var t=h(e.object);return!!t&&s.includes(String(t))})||[]}:null).filter(Boolean):t},[e.categorizedItems,a,s]),I=r(()=>g.reduce((e,t)=>e+t.items.length,0),[g]),y=r(()=>e.categorizedItems.reduce((e,t)=>M.includes(t.category)?e+t.items.length:e,0),[e.categorizedItems]);return{tripSaves:e.categorizedItems,filteredTripSaves:g,filtersCount:a.length+s.length,tripLocations:p,tripCategories:m,categoryFilters:a,locationFilters:s,setCategoryFilters:i,setLocationFilters:n,totalItinerarySavesCount:y,filteredTripSavesCount:I,photoVideoLocationsMap:u}},L={__key:28603069568711,id:"1a03abcd16c7a215",loc:{},definitions:[]},S=e=>r(()=>{var t=new Map,o=new Map;return e?.forEach(e=>{if(e?.id&&e?.object&&t.set(e.id,e.object),e?.object?.object){var r=P(e.object.object);r&&o.set(r,e.object)}}),{itemsMap:t,itemsReferencesMap:o}},[e]),D=({children:e,tripId:t,userId:o})=>{var a=l(),{localize:n}=d(),_=u(),y=p(),h=I(o),[{data:v,fetching:j,error:T},O]=c({query:f,variables:{tripId:t,currency:_}});i(()=>{o!==h&&O({requestPolicy:"network-only"})},[o,h,O]);var w=v?.Trips_getTrips?.[0];w&&(w.sponsorship=v?.SponsorshipManager_getCurrentSponsorshipByTripByIdAndLocale?.[0]);var{itemsMap:P,itemsReferencesMap:C}=S(w?.items||null),M=r(()=>{var e={buckets:[],items:[]};return w?.structure&&(e.items=w?.structure?.items?.map(e=>e&&P.has(e)?P.get(e):null)?.filter(Boolean)||[],e.buckets=w?.structure?.buckets?.map((e,t)=>{var o=n.string("attractions.booking.section.mdtitinerary.day",{0:t+1}),r=o;if(w?.date?.type==="DATES"&&w?.date?.from){var a=g(w.date.from),i=a?k(a,t):null;o=i?y.formatDate("week_long_date_medium_month",i):o,r=i?y.formatDate("date_medium_month",i):o}return e?.id?{id:e?.id,name:o,shortName:r,items:e?.items?.map(e=>e&&P.has(e)?P.get(e):null)?.filter(Boolean)||[]}:null})?.filter(Boolean)||[]),e},[w,P,n,y]),E=r(()=>w&&w.categorizedItems?.reduce((e,t)=>(t&&t?.category&&t?.items?.length&&e.push({category:t.category,items:t?.items?.map(e=>e&&P.has(e)?P.get(e):null)?.filter(Boolean)||[]}),e),[])||[],[w,P]),D=r(()=>z(E),[E]),[{data:A,fetching:R,error:q}]=c({query:L,variables:{locationIds:D||[]},pause:!D?.length}),B=s(()=>a.query(f,{tripId:t,currency:_},{requestPolicy:"network-only"}).toPromise(),[a,t,_]),G=r(()=>{var e=new Map;return A?.SeoMetaData_getLocationListSeoContent?.forEach(t=>{var o=t?.items?.[0];t?.locationId&&!o?.reviewId&&o?.text&&e.set(t.locationId,o.text)}),e},[A]),x=r(()=>({error:T,fetching:!w&&j,refetch:B,trip:w,categorizedItems:E,sanitizedStructure:M,itemsReferencesMap:C,hotelsNarrativeDescriptionMap:G,fetchingHotelsNarrativeDescription:R,errorHotelsNarrativeDescription:q}),[E,T,j,C,B,M,w,G,R,q]);return m(b.Provider,{value:x,children:e})},A=()=>{var e=n(b);if(!e)throw Error("useTrip must be used within a TripProvider");return e};function R(e){var{refetch:t}=A(),[r,a]=_(e),[i,n]=o(!1),c=s(async(e,o)=>{var r=await a(e,o);return r.error||(n(!0),await t().catch(e=>console.error(e)).finally(()=>n(!1))),r},[a,t]);return[{...r,fetching:r.fetching||i},c]}return e("useTripMutation",R),[()=>{y=E,e({ORDERED_CATEGORIES:T,TripContext:b=a(void 0),TripProvider:D,addDays:k,getAiGeneratedHotelsLocationIds:z,getItemReferenceId:P,getParentGeoIdFromTripSave:h,isHotelTripItem:j,isLocationItemObject:v,localizeTripCategoryName:w,orderCategories:O,useTrip:A,useTripItemsMap:S,useTripMutation:R,useTripSaves:y})},[e=>(o=e.useState,r=e.useMemo,a=e.createContext,i=e.useEffect,s=e.useCallback,n=e.useContext),e=>(c=e.useQuery,l=e.useClient,_=e.useMutation),e=>(d=e.useLocalize,u=e.useCurrency,p=e.useIntlFormatter),e=>m=e.jsx,e=>g=e.isoStringToDate,e=>I=e.default]]},["o4yt4q","mqwhqn","7thqz4","21h32l","o5y7tg","dlu2yg"]]);
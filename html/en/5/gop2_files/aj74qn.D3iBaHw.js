(this.$WP=this.$WP||[]).push(["aj74qn",(e,t)=>{var o,a,r,i,l,s,n,c,u=({children:e})=>{var[t,i]=a(!1),[l,s]=a(null),[n,u]=a(!1),d=r(()=>({showPlacesToStay:t,setShowPlacesToStay:i,savePlacesToStay:n,setSavePlacesToStay:u,placesToStay:l||[],setPlacesToStay:s}),[l,t,n,u]);return o(c.Provider,{value:d,children:e})},d=()=>{var e=i(c);if(void 0===e)throw Error("usePlacesToStay must be used within a PlacesToStayProvider");return e},p={__key:76253025188520,id:"455a0a7abaa84b98",loc:{},definitions:[]},h={__key:0xe30d25a64d28,id:"e30d25a64d2854f3",loc:{},definitions:[]},y=({tripId:e})=>{var[{data:t,fetching:o,error:a}]=s({query:p,variables:{tripId:e??0,currency:n()},pause:!e}),i=r(()=>t?.Trips_tripGeoHotels?.geoHotels?.[0]?.hotelLocations?.map(e=>e?.location?.locationId??null).filter(Boolean)??[],[t]),[{data:l,fetching:c,error:u}]=s({query:h,variables:{locationIds:i},pause:!i.length}),d=r(()=>l?.SeoMetaData_getLocationListSeoContent?.reduce((e,t)=>{var o=t?.items?.[0];return t?.locationId&&o&&(o.text=o?.text?.replaceAll("￹","").replaceAll("￻",""),e.set(t.locationId,o)),e},new Map)??new Map,[l]);return{placesToStay:r(()=>t?.Trips_tripGeoHotels?.geoHotels?.[0]?.hotelLocations?.map(e=>({...e?.location,reviewSnippet:d.get(e?.location?.locationId??0)})).filter(e=>!!e),[t?.Trips_tripGeoHotels?.geoHotels,d]),fetching:o||c,error:a||u}};return[()=>{c=l(void 0),e({PlacesToStayProvider:u,useFetchPlacesToStay:y,usePlacesToStayContext:d})},[e=>o=e.jsx,e=>(a=e.useState,r=e.useMemo,i=e.useContext,l=e.createContext),e=>s=e.useQuery,e=>n=e.useCurrency]]},["21h32l","o4yt4q","mqwhqn","7thqz4"]]);

(this.$WP=this.$WP||[]).push(["juddza",(e,s)=>{var i,r,t,n={__key:71773406072784,id:"41470c5f8fd05e89",loc:{},definitions:[]},p="sponsored_trips_v2_1692715419",u="for_you_tab_1692623414",o="fill_your_trip_1695817535",a="trips_itinerary_improvements_1701117573",_=["en-US"],l=({pause:e,tripId:s}={pause:!1})=>{var l=t(),d=_.includes(l),y=i({experimentKeys:[p,u,o,a],skipImpression:!0},e),[{fetching:f,data:h}]=r({query:n,variables:{tripId:s||0},pause:!s}),b=y?.[p]!=="test"&&!!h?.trip?.sponsorship;return{fetching:null===y||f,isTripsV2:!b&&d,isForYouTabEnabled:d&&y?.[u]==="test",isFillYourTripEnabled:d&&y?.[o]==="test",isItineraryV2:d&&y?.[a]==="test"}};return[()=>{e({ENABLED_LOCALES:_,useTripsVersion:l})},[e=>i=e.default,e=>r=e.useQuery,e=>t=e.useLocale]]},["gugp1d","mqwhqn","7thqz4"]]);
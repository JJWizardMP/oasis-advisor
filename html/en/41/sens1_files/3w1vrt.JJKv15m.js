(this.$WP=this.$WP||[]).push(["3w1vrt",(e,t)=>{var r,a,o,s,i,l,A,n,_,u,L,E,I,d,M,c,O,R,T,N,U,D,S,p,h,g,C,B,H,G,v={Hotels:"h",HotelsFusion:"hfs",MobileHotels:"h",Hotel_Review:"hr",Hotel_Feature:"hf",MobileHotel_Review:"hr",HotelHighlight:"hh",MobileHotelHighlight:"hh","Hotel_Review-s1":"hh",SmartDeals:"sd",MobileSmartDeals:"sd",HotelsList:"hl",HotelsListFusion:"hlf",HotelsNear:"hn",LastMinute:"lm",ShowUserReviews:"sur",ShowUserReviewsHotels:"sur",ShowUserReviewsRestaurants:"sur",ShowUserReviewsAttractions:"sur",MobileShowUserReviews:"sur",LocationPhotoDirectLink:"lpdl",AccommodationCrossSells:"acs",MobileNearbyHotels:"nh",NearbyHotels:"nh",Restaurants:"r",FindRestaurants:"r",RestaurantsFusion:"rf",Vacation_Packages:"vp",MobileVacation_Packages:"vp",Attractions:"a",Attraction_Review:"ar",AttractionsFusion:"af",AttractionProductsFusion:"apf",AttractionProductHighlight:"aph",AttractionProductReview:"apr",Unknown:"un"},P=()=>"maps",w=e=>{var{page:t}=a(),o=null!=e?e:t,s=o&&v[o]?v[o]:"un";return r(()=>{"un"===s&&console.error(`Unknown mediaalbum service client: ${o||"falsyValue"}`)},[o,s]),s},m=()=>({mediaGroup:"ALL_INCLUDING_RESTRICTED"}),F=e=>{switch(e){case"p":case"v":case"pano":return e;default:return"u"}},b={ALL_INCLUDING_RESTRICTED:0,ALL_UNRESTRICTED:1,TRAVELER:2,MANAGEMENT:3,STAFF:4,UNKNOWN:-1},f=e=>{switch(e){case p.allUnrestricted:case p.allIncludingRestricted:case p.traveler:case p.staff:case p.management:return e;default:return p.unknown}},y=e=>b[f(e)],V=e=>h[e]||p.unknown,Y=()=>b[f(m().mediaGroup)],k=e=>{switch(e){case u:return"rssub";case E:return"hasub";case I:return"pbsub";case d:return"vidsub";case M:return"favsub";default:return"allsub"}},K=e=>{if(e||0===e){var t=V(e);if("UNKNOWN"!==t)return{mediaGroup:t}}return null},W=(e,t)=>N(e)?U(e,t):"UNKNOWN",$=e=>({...G,...e}),j={albumSelect:"ALBUM",scroll:"SCROLL",galleryItemClicked:"GALLERY_CLICK",fullscreenNav:"FULLSCREEN_NAV",fullscreenClose:"FULLSCREEN_CLOSE",close:"CLOSE",pageLoaded:"PAGED",sourceFilterSelect:"SOURCE_CHANGE",categoryFilterSelect:"CATEGORY_CHANGE",galleryLayoutChanged:"LAYOUT_CHANGE",loadError:"ERROR",sort:"SORT",routeNavigate:"ROUTE_NAVIGATE",invalidateMediaId:"INVALIDATE_REFERENCE_MEDIA"},q={setAlbum:"ALBUM",setType:"TYPE",setCategory:"CATEGORY",openGallery:"GALLERY",openDetail:"DETAIL",openViewer:"OPEN",updateLocationInfo:"UPDATE_LOCATION_INFO",updateSelectedMedia:"UPDATE_MEDIA",updateSelectedMediaObject:"UPDATE_MEDIA_OBJECT",resetState:"RESET_STATE"};return[()=>{D=w,S={ALL_ALBUMS:o,ALL_PHOTOS_ALBUM:s,ALL_MEDIA_ALBUM:i,THIN_GEO_PHOTO_ALBUM:l,PANO_ALBUM:A,TRAVELER_ALBUM:n,STORYBOARD_ALBUM:_,ROOM_AND_SUITE_ALBUM:u,DINING_ALBUM:L,HOTEL_AND_AMENITIES:E,POOL_AND_BEACH:I,VIDEO:d,FAVORITE_PHOTOS:M,GYM:c},h={0:(p={...T,unknown:"UNKNOWN"}).allIncludingRestricted,1:p.allUnrestricted,2:p.traveler,3:p.management,4:p.staff},g=new Map([["BOOKINGCOM","Booking.com"],["LEONARDO","Leonardo"],["ICE","ICE Portal"]]),C=new Map([["LEONARDO","Leonardo"],["ICE","ICE Portal"]]),B=new Set([A,L,O,R,d,M]),H=new Set(["BOOKINGCOM"]),e({ALL_TYPE:0,AlbumTypes:S,DEFAULT_STATE:G={albumId:o,categoryId:o,typeId:0,mediaId:null,sort:null},actions:j,buildDefaultState:$,categoryIdsThatAreAlbumIdsSet:B,explicitlyCreditedProviders:C,externalProviders:g,getCurrentAllMediaGroupTypeId:Y,getFilter:K,getMapsClientName:P,getMediaFilterToRetrieveAllPhotos:m,getMediaGroupForString:f,getMediaGroupIdForString:y,getMediaGroupStringForId:V,getRHRFiltersWindowConfig:k,getTitleForMediaGroup:W,idToMediaGroup:h,mediaGroupIds:b,mediaGroups:p,mvActions:q,noReportBtnProviders:H,useClientName:D,validateMediaType:F})},[e=>r=e.useEffect,e=>a=e.useRoute,e=>(o=e.ALL_ALBUMS_ALBUM_ID,s=e.ALL_PHOTOS_ALBUM_ID,i=e.ALL_MEDIA_ALBUM_ID,l=e.THIN_GEO_PHOTO_ALBUM_ID,A=e.PANO_ALBUM_ID,n=e.TRAVELER_ALBUM_ID,_=e.STORYBOARD_ALBUM_ID,u=e.ROOM_AND_SUITE_ALBUM_ID,L=e.DINING_ALBUM_ID,E=e.HOTEL_AND_AMENITIES_ALBUM_ID,I=e.POOL_AND_BEACH_ALBUM_ID,d=e.VIDEOS_ALBUM_ID,M=e.FAVORITE_PHOTOS_ALBUM_ID,c=e.GYM_ALBUM_ID,O=e.FAMILY_AND_PLAY_AREAS_ALBUM_ID,R=e.BATHROOM_ALBUM_ID),e=>(T=e.mediaGroups,N=e.isMediaGroup,U=e.getTitleForMediaGroup)]]},["o4yt4q","fgwvq1","4ecb70","j9pg61"]]);

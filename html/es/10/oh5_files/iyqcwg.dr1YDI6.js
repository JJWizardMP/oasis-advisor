(this.$WP=this.$WP||[]).push(["iyqcwg",(e,t)=>{var o,r=e=>e.photo&&e.photo.photoSizes[e.photo.photoSizes.length-1]?e.photo.photoSizes[e.photo.photoSizes.length-1]:null,i=e=>[e.owner||e.userProfile,...(e.collaborators||[]).map(e=>e.user)].filter(Boolean),n=(e,t)=>i(e).some(e=>e.isMe||e.userId&&e.userId===t||e.id&&e.id===t),a=e=>e.owner?.isMe?"OWNER":e&&n(e)?"COLLABORATOR":"PUBLIC",s=(e,t,o,r)=>{var n=i(e);if(n=n.slice(0,t),o>0){var a=0;n=n.filter(e=>(a=e.displayName.length+a)<o)}return r&&(n=n.reverse()),n},p=(e,t)=>[...t||[]].sort((e,t)=>e.created>t.created?1:-1),l=e=>e?.owner?.isMe,c=e=>e.owner&&e.owner.isMe?"OWNER":n(e)?"COLLABORATOR":"VIEWER",d=(e,t)=>(e.items||[]).find(e=>{var o=e.reference&&e.reference.type&&e.reference.type.toLowerCase(),r=e.reference?.id,i=t.type.toLowerCase(),n=t.id.toString(),a="originalObject"in t&&t.originalObject?.type?.toLowerCase(),s="originalObject"in t&&t.originalObject?.id?.toString();return o===i&&r===n||o===a&&r===s}),u=(e,t)=>{var o=d(e,t);return o?o.id:null},_={locationinformation:"location",attractionproductinformation:"attractionProduct",forumpost:"post",tripitem:"savesItem",linkpost:"link",linkpost_linkpostv2:"link",photo:"photo",video:"video",review:"review",repost:"repost",trip:"bundleSave",tripnotes_tripnote:"note"},f={locationinformation:"LOCATION",attractionproductinformation:"ATTRACTIONPRODUCT",forumpost:"POST",tripitem:"SAVESITEM",linkpost:"LINK",photo:"PHOTO",video:"VIDEO",review:"REVIEW",repost:"REPOST",trip:"TRIPCONTENT"},m=e=>_[e.toLowerCase()],T=e=>f[e.toLowerCase()],h=["LocationInformation","AttractionProductInformation","ForumPost","LinkPost","LinkPost_LinkPostV2","Review","Photo","Video","Repost","Trip","TripNotes_TripNote"],v=e=>e.locationId??e.attractionProductId??e.postId??e.repostId??e.linkPostId??e.id??void 0,P=e=>{switch(e.__typename){case"AttractionProductInformation":case"LocationInformation":return[e];case"Photo":case"Review":return[e.location];case"Video":return e.orderedLocations;default:return[]}},g=(e,t)=>{if(!e)return null;var o=v(e),r=e.__typename?m(e.__typename):null;if(null!=o&&null!=r){if(h.includes(e.__typename))return{type:r,id:o};var i={id:e.reference.id,type:"attractionproduct"===e.reference.type?"attractionProduct":e.reference.type};if("TripItem"===e.__typename&&e.reference&&e.reference.id&&e.reference.type)return t&&"note"!==i.type?i:{type:r,id:o,originalObject:i}}return null},y=e=>({id:`${e.id}`,type:e.type}),w=({tripId:e,itemId:t,tab:o,showHotelPicksTooltip:r,filters:i})=>{var n=t?`?itemId=${t}`:"",a=o?`/Tab/${o}${i?`/${i.join("&")}`:""}`:"",s=r?"/showTooltip":"";return`/Trips/${e}${n}${a||s?`#${a}${s}`:""}`},I=e=>{var[,t,r]=e.split("/");return"Tab"!==t?null:Object.values(o).includes(r)?r:null},O=e=>"showTooltip"===e.split("/").slice(-1)[0],R=e=>{var[,t,r,...i]=e.split("/");if("Tab"===t&&r===o.ForYou){var n=i.filter(e=>!!e&&"showTooltip"!==e),a=n.length?n.flatMap(e=>e.split("&")):void 0;return a?.length?n:void 0}},b=e=>["LinkPost","Photo","Review","Video"].includes(e?.object?.repostedObject?.__typename),L=(e,t)=>{if("_blank"===t){var o=window.open("about:blank",t);return()=>{null!=o&&(o.location=e)}}return()=>{window.open(e,t)}};function S(e,t){return e.reduce((e,o)=>(t(o)?e[0].push(o):e[1].push(o),e),[[],[]])}var k=e=>{if(!("__typename"in e))return[];if("LinkPost_LinkPostV2"===e.__typename){var t=e.preview?.media??[];if(!t.length)return[];var[o,r]=S(t.reduce((e,t)=>t&&t.object?[...e,t]:e,[]).sort((e,t)=>t.id-e.id),e=>"LinkPreview_PhotoRefV2"===e.__typename);if(o.length)return o[0]?.object?.photoSizes??[];if(r.length)return[r[0].object]}if("LinkPost"===e.__typename){var i=e.preview&&e.preview.media||[];if(0===i.length)return[];var n=e=>("Photo"===e.__typename?e.photoId:e.previewId)??0,[a,s]=S(i.filter(Boolean).sort((e,t)=>n(t)-n(e)),e=>e?.__typename==="Photo");if(a.length)return a[0]?.photoSizes??[];if(s.length)return[s[0]]}return[]},A=(e,t)=>Math.round(Math.abs(e.getTime()-t.getTime())/864e5)+1,E=["places_to_stay","food_and_drink","things_to_do"],C=e=>e.replace(/-/giu,"_");return[()=>{e({CATEGORIES_WITH_RECOMMENDATIONS:E,TRACKING_ITEM_NAME_BY_CATEGORY_MAP:new Map([["food_and_drink","FoodAndDrink"],["forums","Forums"],["notes","Notes"],["photos_and_videos","PhotosAndVideos"],["places_to_go","PlacesToGo"],["places_to_see","PlacesToSee"],["places_to_stay","PlacesToStay"],["reviews","Reviews"],["things_to_do","ThingsToDo"]]),buildPublicTripShareUrl:w,formatDateParam:C,getCommentsForDisplay:p,getFiltersFromFragment:R,getItemByReference:d,getItemIdByReference:u,getPhotoSizesForLinkPost:k,getQueryReferenceTypeFromObjectType:T,getReferenceTypeFromObjectType:m,getShowHotelPicksTooltipFromFragment:O,getTripCoverPhoto:r,getTripPageTabFromFragment:I,getTripUsers:i,getTripUsersForDisplay:s,isOwner:l,isRepostSaveable:b,isTripUser:n,locationsForItem:P,toDurationInDays:A,toReference:y,toSavesObject:g,userRelation:c,userTypeFromTrip:a,windowOpener:L})},[e=>o=e.TRIP_PAGE_TAB_OPTIONS]]},["3309mt"]]);
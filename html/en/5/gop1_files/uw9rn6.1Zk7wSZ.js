(this.$WP=this.$WP||[]).push(["uw9rn6",(e,r)=>{var t,i,a,p,o,d,s,n,T,u,l,c,I,m,y,v,f,h,_=({object:e,sourceTripId:r,tripItemId:a,additionalItemReferences:u})=>{var l=c(),[,y]=I(p),[,v]=I(o),[,f]=I(d),[,h]=I(s),[_,g]=t({fetching:!1}),E=Number(e?.id),P=e?.type==="gaiTrip",R=e?.type==="publicTripBundle",q=e?.creationMethod,w=i(()=>a?"COPY_TRIP_ITEM":P?"COPY_TRIP":"ADD_ITEM_TO_TRIP",[P,a]);if(!e)return[_,()=>Promise.resolve([null,null])];var M=(r,t,i)=>{r?t?g({fetching:!1,result:{trip:r,tripItem:t}}):["bundleSave","gaiTrip","publicTripBundle"].includes(e.type)?g({fetching:!1,result:{trip:r,tripItem:{__typename:"TripItem",id:0,comments:[],reference:{id:e.id.toString(),type:e.type}}}}):g({fetching:!1,error:{query:w,tripsError:i??void 0}}):g({fetching:!1,error:{query:w,tripsError:i??void 0}})};return[_,async t=>{g({fetching:!0});try{if(a&&r&&!isNaN(r)){var i,p,o,d=await f({copyComments:!1,sourceTripId:r,targetTripId:t,copyStructure:!1,sourceItemIds:[a]});d?.data?.Trips_copyTripItem?.itemIds?.[0]&&(p={__typename:"TripItem",id:d.data.Trips_copyTripItem.itemIds[0],comments:[],reference:{id:e.id.toString(),type:e.type}});var s=await l.query(n,{tripId:t}).toPromise();i=s?.data?.tripsGetOne,o=d?.data?.Trips_copyTripItem?.errors?.[0]}else if(P||R){if(!isNaN(E)){var c=await v({copyComments:!1,tripId:E,targetTripId:t,excludeItemTypes:["Note"],additionalItemReferences:u});i={id:c?.data?.Trips_copyTrip?.tripId??0,__typename:"Trip"},o=c?.data?.Trips_copyTrip?.errors?.[0]}}else if("GENERATIVE_AI"===q){var I=await h({request:{tripIds:[t],references:[{id:`${e.id}`,type:e.type}],creationMethod:q,allowDuplicates:!1}});if(I?.error)throw I.error;var _=I?.data?.Trips_addItemReferences?.errors?.[0]?.value?.[0]?.error,A=await l.query(T,{tripId:t},{requestPolicy:"network-only"}).toPromise();return o=_?{field:_?.field?.toUpperCase(),type:_?.type?.toUpperCase()}:null,(i=A?.data?.tripsGetOne)&&(p=m(i,e)),M(i,p,o),[i,o]}else{var D=await y({tripId:t,referenceId:`${e.id}`,referenceType:e.type,allowDuplicates:!1});if(D?.error)throw D.error;i=D?.data?.addItemToTrip?.trip,o=D?.data?.addItemToTrip?.errors?.[0]?.error,i&&(p=m(i,e))}return M(i,p,o),[i,o]}catch(e){return console.error(e),g({fetching:!1,error:{query:w}}),[null,null]}}]},g="mostRecentlyAddedToTrip",E=(e,r)=>{r?y.set(g,{tripId:e,userId:r},144e5):y.remove(g)},P=e=>{var r=y.get(g);return r&&r.userId===e?r.tripId:null},R=({selectedTripId:e,object:r,isActive:t,onExplicitSave:i,tripItemId:p,sourceTripId:o})=>{var[d,s]=f({object:r,tripItemId:p,sourceTripId:o}),n=v();return[d,a(()=>{var a=e??P(n);return t||!a||r?.type!=null&&h.has(r.type)?(i&&i(),Promise.resolve([null,null])):s(a)},[t,r,i,s,n,e]),e=>E(e,n)]},q=(e,r,i)=>{var[a,p]=t({fetching:!1,saved:!!i}),[,o]=I(u),[,d]=I(l);return[a,i?()=>i?(p({...a,fetching:!0}),d({itemId:i.id,tripId:r}).then(e=>{var r=e?.data?.tripsRemoveItem;return r?p({fetching:!1,saved:!1,result:{trip:r}}):p({fetching:!1,saved:!0,error:{query:"REMOVE_TRIP_ITEM",tripsError:void 0}}),a}).catch(()=>(p({fetching:!1,saved:!0,error:{query:"REMOVE_TRIP_ITEM"}}),a))):Promise.resolve(a):()=>(p({...a,fetching:!0}),o({tripId:r,referenceId:`${e.id}`,referenceType:e.type,allowDuplicates:!1}).then(e=>{var r=e?.data?.addItemToTrip?.trip,t=e?.data?.addItemToTrip?.errors?.[0]?.error;if(t||!r)return p({fetching:!1,saved:!1,error:{query:"ADD_ITEM_TO_TRIP",tripsError:t||void 0}}),a;var i=e?.data?.addItemToTrip?.items?.[0];return i?p({fetching:!1,saved:!0,result:{trip:r,tripItem:i}}):p({fetching:!1,saved:!1,error:{query:"ADD_ITEM_TO_TRIP"}}),a}).catch(()=>(p({fetching:!1,saved:!1,error:{query:"ADD_ITEM_TO_TRIP"}}),a)))]};return[()=>{f=_,h=new Set(["savesItem","bundleSave","gaiTrip","publicTripBundle"]),e({getMostRecentlyAddedToTrip:P,useAutosave:R,useSave:f,useTripSaveToggle:q})},[e=>(t=e.useState,i=e.useMemo,a=e.useCallback),e=>(p=e.AddItemToTrip,o=e.TripsCopyTrip,d=e.TripsCopyTripItem,s=e.AddItemReferenceToTrip,n=e.GetTripTitle,T=e.GetModifiedTrip,u=e.AddItemWithFullTrip,l=e.RemoveItemWithFullTrip),e=>(c=e.useClient,I=e.useMutation),e=>m=e.getItemByReference,e=>y=e.default,e=>v=e.useUserId]]},["o4yt4q","ag9b0s","mqwhqn","iyqcwg","9b9b10","52far5"]]);

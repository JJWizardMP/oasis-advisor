(this.$WP=this.$WP||[]).push(["itf998",(e,r)=>{var t,s,i={offset:-1,filtersVersion:0,filters:null,prefsVersion:0,prefs:null,expandedReviews:{},reviewToScroll:null},f=e=>{var r=s.getFrom(e);if(r.offset<0){var t=-1;e.route&&e.route.o&&e.route.o.length>1&&(t=parseInt(e.route.o.slice(1),10)),r.offset=t>=0?t:0}return r},o="SET_PAGE",n="CHANGE_FILTERS",l="CLEAR_FILTERS",a="GOT_FILTERS",c="SET_PREFS",p="GOT_PREFS",u="EXPAND_REVIEWS",R="SCROLL_TO_REVIEW",E="CLEAR_REVIEW_TO_SCROLL",S={changePage:e=>s.action({type:o,paging:e}),gotFilters:e=>s.action({type:a,filters:e}),changeFilters:(e,r=!0)=>s.action({type:n,filters:e,resetPage:r}),clearFilters:()=>s.action({type:l}),gotPrefs:e=>s.action({type:p,prefs:e}),setPrefs:e=>s.action({type:c,prefs:e}),expandReviews:(e,r)=>s.action({type:u,ids:e,expand:r}),scrollToReview:(e,r)=>s.action({type:R,id:e,offset:r}),clearReviewToScroll:()=>s.action({type:E})};return[()=>{(s=new t("@ta/location-review.review-list-state",i)).setReducer((e,r)=>{switch(r.type){case o:return{...e,offset:r.paging.offset};case a:if(e.filters)return e;return{...e,filters:r.filters||{}};case n:if(!e.filters)return e;return{...e,...r.resetPage?{offset:0}:{},filtersVersion:e.filtersVersion+1,filters:{...e.filters||{},...r.filters||{}}};case l:return{...e,offset:0,filtersVersion:e.filtersVersion+1,filters:{}};case p:if(e.prefs)return e;return{...e,prefs:r.prefs||{}};case c:if(!e.prefs)return e;return{...e,offset:0,prefsVersion:e.prefsVersion+1,prefs:{...e.prefs||{},...r.prefs||{}}};case u:return{...e,expandedReviews:r.ids.reduce((e,t)=>(e[t]=!!r.expand,e),{...e.expandedReviews||{}})};case R:return{...e,reviewToScroll:r.id,...void 0!==r.offset&&null!==r.offset?{offset:r.offset}:{}};case E:return{...e,reviewToScroll:null};default:return e}}),e({ACTIONS:S,getState:f})},[e=>t=e.PrivateStateAccessor]]},["45ddp0"]]);

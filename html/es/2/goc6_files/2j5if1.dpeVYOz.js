(this.$WP=this.$WP||[]).push(["2j5if1",(e,t)=>{var i,a,n,r,o,l,s,d,c,u,m,h,p,f,g,_,I,y,T,v,N,A,D,R,S,O,w,E,b=e=>{var{description:t,photo:a,route:c,sponsorName:u,title:m,articleId:h,authors:p,locationType:f,sponsorshipContentType:D}=e.article,R=N(),S=v(),O=n(),{localize:w}=y(),{page:E}=r(),b=E===s||E===d,C=w.string("ad_related_stories_feature_in_content_widget"),q="BRANDED"===D?w.string("branded_call_out_in_partnership_with",{sponsorName:u}):w.string("sponsored_story_content_widget"),W=w.string("as_feature_in_content_widget"),z=p?.[0]?.author?.name?p?.[0]?.author?.name:void 0,U=u?"from":"by",x=u||void 0,L=T(()=>{S({itemType:o,itemGroup:"SingleArticle",itemName:u,itemId:`${h}`,customData:JSON.stringify({locationType:f,route:c}),team:"TAPS",page:E,pageUid:O})}),j=_(()=>{R({itemType:o,itemGroup:"SingleArticle",itemId:`${h}`,itemName:u,customData:JSON.stringify({locationType:f,route:c}),page:E,team:"TAPS",actionType:"click",pageUid:O})},[h,R,f,E,O,c,u]);if(null===a)return null;var G=i("div",{className:g({"zeMXO o":b}),children:t});return i("section",{ref:L,className:g("fyOpZ",{XIzLn:b}),children:i(I,{href:c,display:"block",theme:"none",target:l,onClick:()=>j(),children:i(A,{headerTitle:e.article.sponsorName?q:"as-featured-in"===e.titleOption?W:C,headerUrl:c,image:a,href:c,target:l,authorTarget:l,authorVariant:U,authorName:b?void 0:x||z,title:m,snippet:G})})})},C=e=>{var{articles:t}=e,{localize:l}=y(),{page:p}=r(),f=n(),_=v(),I=p===d||p===s,N=p===u,A=p===m||p===h||I,R=p===h||I,S=p===u,O=t.map(e=>e.articleId);return a("section",{ref:T(()=>{_({itemType:o,itemGroup:"MultipleArticles",itemId:`${e.locationId}`,customData:JSON.stringify({articleCardIds:O}),page:p,team:"TAPS",pageUid:f})}),className:g("MIrqC Gi",{Emfdu:N,NxaVD:A,WlGzA:R,HFNjH:I}),children:[i("div",{className:g("eaQSM E",{KEiyD:R}),children:i(D,{variant:"title-02",color:"primaryText",children:l.string("ad_related_stories_feature_in_content_widget")})}),i("div",{className:g("NeZCO _h A",{vimTh:R,rMelW:S,qqaht:I}),children:t.map((e,t)=>i("div",{className:g("yVyfR",{YvpmX:0===t,lYDNx:1===t,ggzcD:2===t}),children:i(c,{article:e,widgetType:"as-featured-in"})},e.articleId))})]})},q={__key:0xe3fca2feb0f0,id:"e3fca2feb0f0fdf1",loc:{},definitions:[]},W=e=>{var t=[],i=e.filter(e=>e.sponsorName);return i.length>=3&&(t=i),i.length<3&&(t=[...i,...e.filter(e=>!e.sponsorName)]),t.length>3?t.slice(0,3):t},z=e=>{var t=[],i=(e,i)=>{e.forEach(e=>{if(e?.document&&e?.document?.content!=null){var{content:a,route:n,title:r,estimatedReadTime:o,lastUpdatedAt:l,space:s}=e.document,d={title:r,locationType:i,route:n?.url||"",readTime:o?`${o}`:null,lastUpdatedAt:l||null,sponsorshipContentType:e?.sponsoredArticle?.contentType,sponsorName:e?.sponsoredArticle?.sponsorName||"",authors:"authors"in a&&a?.authors||null,description:"seoInfo"in a&&a?.seoInfo?.metaDescription||"",photo:"thumbnail"in a&&a?.thumbnail?.photo?.photoSizeDynamic||null,articleId:s||"1"};d.photo&&t.push(d)}})};return e?.RichContent_getDocumentsByLocationId?.[0]?.documents&&i(e.RichContent_getDocumentsByLocationId[0].documents,p),e?.RichContent_getDocumentsByLocationId?.[1]?.documents&&i(e.RichContent_getDocumentsByLocationId[1].documents,f),t},U=(e,t,i)=>{var[{data:a,fetching:n}]=R({query:q,variables:{detailId:e,geoId:t},pause:!e&&!t||!i});return{fetching:n,articles:W(z(a))}},x=["Attraction_Review","Restaurant_Review","Tourism","ShowTopic","ShowForum"],L=[255060,189970,659488,298184,143028,147404],j=()=>{var{page:e,params:t}=r(),i="geoId"in t?t.geoId:null;return!("Tourism"===e&&i&&L.includes(i))&&x.includes(e)},G=()=>{var{params:e}=r(),t=E(),a=p in e&&e.detailId?e.detailId:0,n=f in e&&e.geoId?e.geoId:0,{fetching:o,articles:l}=w(a,n,t);return t&&!o&&l&&0!==l.length?l.length<=2?i(S,{titleOption:a?"as-featured-in":"related-stories",article:l[0]}):3===l.length?i(O,{articles:l,locationId:a||n}):null:null};return[()=>{S=b,O=C,w=U,E=j,e({AsFeaturedInWidget:G,default:G})},[e=>(i=e.jsx,a=e.jsxs),e=>(n=e.usePageviewUid,r=e.useRoute),e=>(o=e.AFI_WIDGET,l=e.BLANK,s=e.SHOW_TOPIC,d=e.SHOW_FORUM,c=e.ArticleCard,u=e.RESTAURANT_REVIEW,m=e.TOURISM,h=e.ATTRACTION_REVIEW,p=e.DETAIL_ID,f=e.GEO_ID),e=>g=e.default,e=>_=e.useCallback,e=>I=e.default,e=>y=e.useLocalize,e=>T=e.useOnVisible,e=>v=e.default,e=>N=e.default,e=>A=e.EditorialFeatureArticleShelf,e=>D=e.default,e=>R=e.useQuery]]},["21h32l","fgwvq1","eozxiw","fkji80","o4yt4q","lr6tb6","7thqz4","3btuy0","xg719z","r73jw8","asj0sy","essqvy","mqwhqn"]]);
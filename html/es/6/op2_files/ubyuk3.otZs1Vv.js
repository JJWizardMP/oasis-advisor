(this.$WP=this.$WP||[]).push(["ubyuk3",(e,n)=>{var o,t,i,r,a,l,s,c,d,u,p,g,m,h,b,v,y,T,I,_,f,k,C,z,w,M,S,x,H,N,E,O,R,B,D,A,U,P={ARTICLE:"ARTICLE",TRIP:"TRIP",TOURISM:"TOURISM"},L=(e,n)=>{var{articleId:o,tripId:t,geoId:i}=n;return e===s?{pageContentId:o.toString(),pageType:P.ARTICLE}:e===c?{pageContentId:t.toString(),pageType:P.TRIP}:e===d?{pageContentId:i.toString(),pageType:P.TOURISM}:{pageContentId:null,pageType:null}},V={__key:44020487857713,id:"2809518aa6318c6d",loc:{},definitions:[]},$={__key:0xbc99048f6dd8,id:"bc99048f6dd84da1",loc:{},definitions:[]},W=(e,n)=>{if(!n||!n.title||!n.route?.url)return null;var{title:o,content:t,route:{url:i}}=n,r=null!=t&&"__typename"in t&&t?.__typename==="RichContent_SlateJsContent"?t:null;return{...e,campaignType:"ARTICLE",title:o,description:r?.seoInfo?.metaDescription||null,authors:r?.authors?.map(e=>e?.author?.name).join(", ")||null,clickUrl:i,photo:r?.thumbnail?.photo?.photoSizeDynamic||null}},q=(e,n)=>{if(!n||!n.url)return null;var{url:o,thumbnail:t,locationV2:i}=n,r=i?.names||null;return r&&r.name?{...e,campaignType:"GEO",name:r.name,stateAndCountryOrEquivalent:r.stateAndCountryOrEquivalent,clickUrl:o,photo:t?.photoSizeDynamic||null}:null},G=(e,n)=>{if(!n||!n.route?.url||!n.title)return null;var{title:o,description:t,photo:i,route:{url:r},owner:a}=n,l=null!=i&&"photoSizeDynamic"in i?i?.photoSizeDynamic:null;return{...e,campaignType:"TRIP",title:o,description:t,ownerDisplayName:a?.profile?.displayName||null,clickUrl:r,photo:l}},F=e=>{if(void 0!==e){var n=Array.isArray(e?.response)?e?.response?.[0]:e?.response;if(!n||!n.content)return null;var{campaignId:o=null,sponsorId:t=null,sponsorDisplayName:i=null,contentType:r=null,content:a=null}=n,l={campaignId:o,sponsorId:t,contentType:r,sponsorDisplayName:i};switch(a.__typename){case"SponsorshipManager_ArticleContent":return W(l,a.articleContent);case"SponsorshipManager_GeoContent":return q(l,a.geoContent);case"SponsorshipManager_TripContent":return G(l,a.tripContent);default:return null}}},j=(e,n)=>{var t=r(),{params:l,page:s}=a(),c=o(Date.now().toString()),d=!t||e||!1,h=u in l&&l.geoId||0,b=p in l&&l.detailId||0,v=g in l&&l.tripId?l.tripId:0,{pageContentId:y,pageType:T}=L(s,{articleId:m in l&&l.forumPostId?l.forumPostId:0,tripId:v,geoId:h}),I=[n||h,b].filter(e=>0!==e),[{data:_}]=i({query:V,variables:{locationIds:I},pause:d||I?.length===0});(_?.locations||[]).forEach(e=>{var n=e?.parents?.[0]?.locationId;null!=n&&I?.push(n)});var[{data:f,fetching:k}]=i({query:$,variables:{request:[{locationIds:I,timestamp:c.current,pageContentId:y,pageType:T}]},pause:d});return{fetching:k,randomSponsorshipCampaign:F(f)}},J={backfillBanner:"Qbkpw",backfillBannerHorizon:"jQUcx",halfImageFeatureCard:"vEXdk",sponsoredBy:"MHxOK o",contents:"ycgdb H Fb o",image:"XfIiI Gi H",textSection:"wbZRt",text:"cmfsL o W",button:"CPUap s",horizonHeightOverride:"IfzFI",textSectionSponsoredVersion:"OLLkV",halfImageFeatureCardMobileHorizon:"yWTQN",imageMobileHorizon:"mOZIw _U",contentsMobileHorizon:"SozsP H Fb o",sponsoredByMobileHorizon:"oStfU",sponsoredByMobileHorizonText:"yXcuw o W",textSectionMobileHorizon:"JLfla u",textSectionMobileHorizonNoSponsor:"EJdwc",titleMobileHorizon:"HpDFG o W",buttonMobileHorizon:"hgAEJ",buttonMobileHorizonText:"zWvZE Wb",halfImageFeatureCardMobileVersion:"giteA",sponsoredByMobileVersion:"DLhsI",contentsMobileVersion:"xGwkQ",imageMobileVersion:"iLoaf",textSectionMobileVersion:"BGuiv",textMobileVersion:"nsvzk o W"},Q="MOBILE",X="plus",Z="on-dark",K=({titleText:e,campaignId:n,subtitleText:i="",ctaText:r,image:s,clickUrl:c,sponsorId:d=0,sponsorName:u="",campaignType:p="",contentType:g,buttonVariant:m=Z,backgroundColor:E="plusBackground",isHorizon:O=!1,viewportOverride:R})=>{var{page:B}=a(),{localize:D}=y(),A=l(),U=x(),P=S(),L=M(),V=C(E),$=o(null),{width:W}=N.useElementRect($,2e3),q=((void 0!==W&&!O&&W<550?Q:void 0)||R||L)===Q,G=124!==d,F=()=>q&&O?"onLightText":V||q?"onDarkText":void 0,j=H(()=>{P({itemType:`ContentWidget${p}`,itemGroup:"ContentWidget",itemName:u,itemId:`${n}`,customData:JSON.stringify({campaignType:p,clickUrl:c,contentType:g,sponsorId:d}),team:"TAPS",page:B,pageUid:A})}),K=t(()=>{U({itemType:`ContentWidget${p}Click`,itemGroup:"ContentWidget",itemId:`${n}`,itemName:u,customData:JSON.stringify({campaignType:p,clickUrl:c,contentType:g,sponsorId:d}),page:B,team:"TAPS",actionType:"click",pageUid:A})},[n,p,c,g,U,B,A,d,u]);return q&&O?b("div",{className:J.backfillBanner,children:b(f,{href:c,display:"block",theme:"none",target:"_blank",onClick:()=>K(),children:v("section",{ref:j,"aria-label":`${e} ${i} ${r}`,className:k(J.halfImageFeatureCardMobileHorizon,z({backgroundColor:E})),children:[s&&b("div",{className:k(J.imageMobileHorizon),children:b(I,{source:s,width:"100%",height:"100%",sizeHint:"40vw"})}),v("div",{className:J.contentsMobileHorizon,children:[G&&b("div",{className:J.sponsoredByMobileHorizon,children:b(w,{variant:"supporting-02",color:F(),children:b("div",{className:k(J.sponsoredByMobileHorizonText),children:g===h?D.string("branded_call_out_in_partnership_with",{sponsorName:u}):D.string("content_widget_sponsored_by_low",{name:u})})})}),b("div",{className:k(J.textSectionMobileHorizon,{[J.textSectionMobileHorizonNoSponsor]:!G}),children:b(w,{variant:"input-01",color:F(),children:b("div",{className:k(J.titleMobileHorizon),children:e})})}),b("div",{className:k(J.buttonMobileHorizon),children:b(w,{variant:"button-04",color:F(),children:b("div",{className:k(J.buttonMobileHorizonText),children:r})})})]})]})})}):b("div",{ref:$,className:k(J.backfillBanner,{[J.backfillBannerHorizon]:O}),children:b(f,{href:c,display:"block",theme:"none",target:"_blank",onClick:()=>K(),children:v("section",{ref:j,"aria-label":`${e} ${i} ${r}`,className:k(J.halfImageFeatureCard,{[J.horizonHeightOverride]:O},z({backgroundColor:E}),{[J.halfImageFeatureCardMobileVersion]:q}),children:[s&&b("div",{className:k(J.image,{[J.imageMobileVersion]:q}),children:b(I,{source:s,width:"100%",height:"100%",sizeHint:"30vw"})}),v("div",{className:k(J.contents,{[J.contentsMobileVersion]:q}),children:[G&&b("div",{className:k(J.sponsoredBy,{[J.sponsoredByMobileVersion]:q}),children:b(_,{variant:V||q?"secondary":"primary",children:g===h?D.string("branded_call_out_in_partnership_with",{sponsorName:u}):D.string("content_widget_sponsored_by",{name:u})})}),v("div",{className:k(J.textSection,{[J.textSectionMobileVersion]:q,[J.textSectionSponsoredVersion]:G}),children:[b(w,{variant:"title-03",color:F(),children:b("div",{className:k(J.text),children:e})}),null!=i&&b(w,{variant:"body-01",color:F(),children:b("div",{className:k(J.text,{[J.textMobileVersion]:q}),children:i})})]}),b("div",{className:J.button,children:b(T,{href:c||"",variant:q||m!==X?q&&m===X?s?Z:X:q?Z:V?Z:void 0:X,fullWidth:!0,children:r})})]})]})})})},Y=(e,n,o)=>`${o}${""!==n?`https://${n}`:n}${e}`,ee=({data:e,isHorizon:n,viewportOverride:o,clickTrackerUrl:t})=>{var{localize:i}=y(),{name:r,clickUrl:a,sponsorId:l,sponsorDisplayName:s,photo:c,campaignId:d,campaignType:u,contentType:p}=e,g=B(a,E(),t||"");return b(R,{sponsorName:s,contentType:p,titleText:i.string("content_widget_discover_geo",{geo:r}),subtitleText:i.string("content_widget_travelers_like",{geo:r}),ctaText:i.string("content_widget_explore"),image:c||"",clickUrl:g,sponsorId:l,campaignId:d,campaignType:u,backgroundColor:"pinkBackground",isHorizon:n,viewportOverride:o})},en=({data:e,isHorizon:n,viewportOverride:o,clickTrackerUrl:t})=>{var{localize:i}=y(),{title:r,clickUrl:a,sponsorId:l,description:s,sponsorDisplayName:c,photo:d,campaignId:u,campaignType:p,contentType:g}=e,m=B(a,E(),t||"");return b(R,{sponsorName:c,contentType:g,titleText:r,subtitleText:s||"",ctaText:i.string("content_widget_view_now"),image:d||"",clickUrl:m,sponsorId:l,campaignId:u,campaignType:p,backgroundColor:"creamBackground",isHorizon:n,viewportOverride:o})},eo=({data:e,isHorizon:n,viewportOverride:o,clickTrackerUrl:t})=>{var{localize:i}=y(),{title:r,clickUrl:a,sponsorId:l,description:s,contentType:c,sponsorDisplayName:d,photo:u,campaignId:p,campaignType:g}=e,m=B(a,E(),t||"");return b(R,{sponsorName:d,contentType:c,titleText:r,subtitleText:s||"",ctaText:i.string("content_widget_read_now"),image:u||"",clickUrl:m,sponsorId:l,campaignId:p,campaignType:g,backgroundColor:"purple80Background",isHorizon:n,viewportOverride:o})},et=({data:e,isHorizon:n,viewportOverride:o,clickUrl:t})=>{switch(e.campaignType){case"GEO":return b(D,{data:e,isHorizon:n,viewportOverride:o,clickTrackerUrl:t});case"TRIP":return b(A,{data:e,isHorizon:n,viewportOverride:o,clickTrackerUrl:t});case"ARTICLE":return b(U,{data:e,isHorizon:n,viewportOverride:o,clickTrackerUrl:t});default:return null}};return[()=>{O=j,R=K,B=Y,D=ee,A=en,U=eo,e({ContentWidget:et,useRandomSponsorshipCampaign:O})},[e=>(o=e.useRef,t=e.useCallback),e=>i=e.useQuery,e=>r=e.useIsMounted,e=>(a=e.useRoute,l=e.usePageviewUid),e=>(s=e.ARTICLES_PAGE,c=e.TRIPS_PAGE,d=e.TOURISM,u=e.GEO_ID,p=e.DETAIL_ID,g=e.TRIP_ID,m=e.ARTICLE_ID,h=e.BRANDED_CONTENT_TYPE),e=>(b=e.jsx,v=e.jsxs),e=>y=e.useLocalize,e=>T=e.default,e=>I=e.default,e=>_=e.default,e=>f=e.default,e=>(k=e.default,C=e.isDarkBackgroundColor,z=e.backgroundColor),e=>w=e.default,e=>M=e.useViewportCategory,e=>S=e.default,e=>x=e.default,e=>H=e.useOnVisible,e=>N=e.ElementSizeObserver,e=>E=e.useDomainName]]},["o4yt4q","mqwhqn","mb2nze","fgwvq1","eozxiw","21h32l","7thqz4","jppfwt","34bu7w","oz3g7e","lr6tb6","gw8uw6","essqvy","ys6v1o","xg719z","r73jw8","3btuy0","j8mzb2","qlcuu5"]]);
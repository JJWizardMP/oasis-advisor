(this.$WP=this.$WP||[]).push(["ted64f",(e,a)=>{var i,n,t,r,s,l,o,d,c,u,m,v,h,g,p,f,I,L,C,N,w,y,b,k,S,x,P,T,D,R,E,U,O,A,_,B,q,G,H,M,j,z,F,W,Q,K,V,Z,$,J,Y={disclaimerSection:"Pj",triggerElement:"EbnQN",disclaimerMsg:"OAiOz"},X=({metaListingData:e})=>{var a=Q(),t=e.listing?.additionalDisclaimer,r=t?.teaserText,s=t?.disclaimerMsg;return r&&s?i("div",{className:Y.disclaimerSection,children:[n(z,{variant:"supporting-02",color:"placeholderText",elementType:"span",marginRight:"spacing-01",children:r}),n(F,{variant:"top-caret",alignment:"middle",fitToContent:"expand",triggeringElement:n("div",{className:Y.triggerElement,children:n(z,{variant:"supporting-02",color:"placeholderText",elementType:"span",children:n("u",{children:n(K,{id:"hr_disclaimer_learn_more_cta"})})})}),content:n("div",{className:Y.disclaimerMsg,children:n(z,{variant:"supporting-01",children:s})}),link:n(W,{href:a,theme:"inline",target:"_blank",children:n(z,{variant:"supporting-01",children:n(K,{id:"hr_disclaimer_learn_more_cta"})})})})]}):null},ee={additionalDisclaimer:"LPwzv f",titleContainer:"uMQvl f k",headingContainer:"GjOKC f",socialActionsContainer:"NCYZN f",hotelInfoContainer:"UJWmn f k",leftCol:"nWTom",rightCol:"vhjAH",ratingPopIndexContainer:"REmmD f K o",ratingContainer:"ynxsE f H",verticalDivider:"FiVZW",contactLinksContainer:"irgls f K q",sensitiveBadge:"nDoIs"},ea=["URL_HOTEL","PHONE","EMAIL","URL_VIRTUAL_TOUR","URL_AFFILIATE","URL_WHATSAPP"],ei=({granularPopIndexData:e,granularPopIndexUrl:a,hotelsUrl:t,isGranularPopIndex:r,location:s,showGaiReviewSummaryBanner:l})=>{var o=s.reviewSummary?.rating||0,d=s.reviewSummary?.count||0;return d<=0?null:i("div",{className:ee.ratingPopIndexContainer,children:[i("div",{className:ee.ratingContainer,children:[n(N,{rating:o,reviewCount:d,showGaiReviewSummaryBanner:l}),r&&n("div",{className:ee.verticalDivider})]}),r&&n(w,{popIndexInfo:e,unfilteredListPageUrl:t,filteredListPageUrl:a,isDsStyle:!0})]})},en=({contactLinks:e,contextualReviewUrl:a,granularPopIndexData:t,granularPopIndexUrl:r,hotelsUrl:s,isGranularPopIndex:l,isOptimusEnabled:o,isOwner:d,locale:c,location:u,locationId:N,otaLink:w,hasGaiReviewSummaryData:y})=>{var b=!!M().hotels?.defaultDates;return i("div",{"data-test-target":"hr-atf-info",children:[n(_,{locationId:N}),n("div",{className:ee.additionalDisclaimer,children:n(H,{optimusEnabled:o,children:e=>n($,{metaListingData:e})})}),i("div",{className:ee.titleContainer,children:[i("div",{className:ee.headingContainer,children:[n(m,{isDsStyle:!0}),o&&n(h,{}),n(v,{})]}),i("div",{className:ee.socialActionsContainer,children:[n(g,{locationId:N,locationUrl:u.url}),n(j,{id:N,size:"small",variant:"primary-border",allowPopStatModal:!0})]})]}),i("div",{className:ee.hotelInfoContainer,children:[i("div",{className:ee.leftCol,children:[d?n(A,{locationId:N,isOwner:!0,children:n(ei,{location:u,granularPopIndexData:t,granularPopIndexUrl:r,hotelsUrl:s,isGranularPopIndex:l,showGaiReviewSummaryBanner:y})}):n(ei,{location:u,granularPopIndexData:t,granularPopIndexUrl:r,hotelsUrl:s,isGranularPopIndex:l,showGaiReviewSummaryBanner:y}),u.address&&n(D,{address:{address:u.address},layout:"atfInfo",userLanguage:c,isDsStyle:!0}),i("div",{className:ee.contactLinksContainer,children:[n(p,{contactLinks:e,links:ea,location:u,otaLink:w,isDsStyle:!0}),!d&&a&&n(f,{url:a})]})]}),n("div",{className:ee.rightCol,children:b?n(I,{}):n(H,{optimusEnabled:o,ttp:"HR_HeaderCommerce",children:e=>n(L,{metaListingData:e})})})]}),u.hasSensitiveIssues&&n("div",{className:ee.sensitiveBadge,children:n(C,{sensitiveIssuesFlag:!0,location:u})})]})},et=e=>{var{meta:a}=e,{commerceCountryId:i,initialServletName:n}=a,{detail:t,sponsoredListingLocationIdAttribution:r}=e.route,{userAgentCategory:s}=a.device,l=t?Number(t):-1,{geoId:o=0}=e.page;return{commerceCountryId:i,deviceType:"MOBILE"===s?"MOBILE":"DESKTOP",trafficSource:r===t?"sp":"ba",locationId:l,servletName:n||"",geoId:o,ribbonsConfigType:"HR_TEST_V3"}},er=(e,a,t,r,s,d,g,f,I,L)=>{var N=e&&e.locations&&e.locations[0],y=N||a?.location;if(!y)return null;var b=y.currentUserOwnerStatus?.isValid,D=y&&y.streetAddress&&y.streetAddress.fullAddress;D&&(y={...y,address:D});var R=null;N&&N.businessAdvantageData&&N.businessAdvantageData.contactLinks?R=U(N.businessAdvantageData.contactLinks):s&&s.contactLinks&&(R=U(s.contactLinks));var E=n(T,{location:y,isHighlighted:!0,showGaiReviewSummaryBanner:L}),O=e&&e.hotelInfo&&e.hotelInfo[0]&&e.hotelInfo[0].popIndexInfo,B=e&&e.hotelInfo&&e.hotelInfo[0]&&e.hotelInfo[0].filteredListPageRoute,q=e?.locations?.[0]?.parents?.[0]?.hotelsUrl,H=!!(O&&B),M=i("div",{className:k.ratingContainer,children:[E,H&&n(w,{popIndexInfo:O,unfilteredListPageUrl:q,filteredListPageUrl:B})]});return g?n(J,{contactLinks:R,contextualReviewUrl:f,granularPopIndexData:O,granularPopIndexUrl:B,hotelsUrl:q,isGranularPopIndex:H,isOptimusEnabled:!!I,isOwner:!!b,location:y,locationId:r,otaLink:s?.otaLink,hasGaiReviewSummaryData:L}):i("div",{className:k.wrapper,"data-test-target":"hr-aft-info",children:[n(_,{locationId:r}),i(l,{mobile:!0,multiline:!0,children:[i("div",{className:G("ui_column","is-9-mobile","is-12-tablet",k.description),children:[i("div",{className:k.title,children:[n(m,{}),d&&n(h,{}),n(v,{})]}),b?n(A,{locationId:r,isOwner:b,children:M}):M,n(S,{contactLinks:R,location:y,otaLink:s?.otaLink})]}),n("div",{className:G("ui_column","is-3-mobile","is-12-tablet",k.actions),children:i("div",{className:k.reverseActions,children:[i("div",{className:k.saveShareBlock,children:[!b&&n("div",{className:k.reviewButtonWrapper,children:n(c,{})}),n(x,{location:y}),n(P,{location:y}),n(u,{locationId:r,contactLinkType:"MOBILE_HOTEL_PHONE_ATF_CTA"})]}),n("div",{className:k.businessListingWrapper,children:n(p,{contactLinks:R,location:y,otaLink:s?.otaLink})})]})})]}),n(C,{sensitiveIssuesFlag:!0,location:y}),n(o,{})]})},es=e=>{var a=O(),{commerceCountryId:i,deviceType:s,trafficSource:l,locationId:o,servletName:c,geoId:u,ribbonsConfigType:m,transData:v,isMobile:h,isSpTraffic:g,optimusEnabledOverride:p}=e,{otaData:f}=R(o,i,s,c,a),I=!!Z(o),{writeUserReviewUrl:L}=d(),C=E(),{isOptimusEnabled:N}=B(),{enabled:w}=q(),{onVisibleCallback:k}=V(o);return(t(()=>{k()},[k]),!g&&C)?n(r,{query:y,variables:{locationId:o,geoId:u,ribbonsConfigType:m},pause:!o||o<=0,children:({data:e})=>er(e,v,h,o,f,N,w,L,p,I)}):n(r,{query:b,variables:{commerceCountryId:i,deviceType:s,trafficSource:l,locationId:o,servletName:c,geoId:u,ribbonsConfigType:m,hotelTravelInfo:a},pause:!o||o<=0,children:({data:e})=>er(e,v,h,o,void 0,N,w,L,p,I)})};return[()=>{$=X,J=s((e,a)=>(m.stage(e,a),v.stage(e,a),()=>({locale:e.i18n.locale})))(en),e("default",s((e,a)=>(m.stage(e,a),v.stage(e,a),J.stage(e,a),()=>({...et(e),transData:e.page?.transData,isMobile:"MOBILE"===e.meta.device.viewportCategory,isSpTraffic:e.route.sponsoredListingLocationIdAttribution===Number(e.route.detail)})))(es))},[e=>(i=e.jsxs,n=e.jsx),e=>t=e.useEffect,e=>r=e.Query,e=>s=e.bind,e=>l=e.Columns,e=>o=e.default,e=>(d=e.useContextualUserReviewUrl,c=e.ContextualReviewLink),e=>u=e.default,e=>(m=e.Heading,v=e.ClaimListing,h=e.OptimusBadge,g=e.CircularShareButton,p=e.BusinessListing,f=e.WriteReviewLink,I=e.DefaultDatePseudoOffer,L=e.FirstOffer,C=e.SensitiveIssues,N=e.BubbleReviewRating,w=e.GranularPopIndex,y=e.ATFInfoNoContactsQueryNode,b=e.ATFInfoQueryNode,k=e.styles,S=e.HotelMobileLinks,x=e.SaveButton,P=e.ShareButton,T=e.Rating),e=>(D=e.Address,R=e.useBaOtaQueryWrapper,E=e.useIsBaOtaTestEnabled,U=e.remapContacts),e=>O=e.default,e=>A=e.HotelReviewFlyOut,e=>_=e.SensitiveIssuesBadgeGql,e=>B=e.useOptimusEnabledForUser,e=>q=e.useHRExpandedCommerce,e=>G=e.default,e=>H=e.MetaQueryPoller,e=>M=e.useTravelInfo,e=>j=e.default,e=>z=e.default,e=>F=e.ClickTooltip,e=>W=e.default,e=>Q=e.useGetServiceLink,e=>K=e.default,e=>V=e.useSojernTestImpressionEventGTMCallback,e=>Z=e.useGetGaiReviewSummaryData]]},["21h32l","o4yt4q","mqwhqn","6z5q2p","ptdiqu","lynjjl","o8gqrw","6a7xmo","dadotz","g5mqn8","crdfjq","9qzk4c","uy63ln","4tv4as","wsk8ra","fkji80","nzwvrx","etaac9","dpzonz","essqvy","xm2jzo","lr6tb6","epp8eq","7thqz4","9l9n46","8uims9"]]);
(this.$WP=this.$WP||[]).push(["62gnsz",(e,t)=>{var i,a,o,n,c,l,r,s,d,u,f,m,p,k,v,I={so:"f u _Z",iconMargin:"NH",weblink:"Pc Pp"},L=({servletName:e,specialOffer:t,locationId:a,localize:o,isUpdatedMWStickyCommerceUI:n})=>i(u,{locationId:a,coupon:t,servlet:e,icon:"special-offer-fill",layout:"header",linkLevel:n?"level_3":"level_2",leadInText:"",linkTextOverride:o.string("b2bh_so_special_offer"),expandedClickableArea:!0,isUpdatedMWStickyCommerceUI:n}),y=(e,t)=>t?i("div",{className:I.weblink,children:i(f,{locationId:e,otaLink:t,icon:"globe-world",linkLevel:"level_3"})}):null,_=(e,t,a,o)=>e&&t?i("div",{className:I.weblink,children:i(m,{locationId:e,contact:t,layout:"atfInfo",contactType:t.contactLinkType,icon:"globe-world",linkLevel:"level_3",linkStyle:o?"active-link":void 0,offerTextOverride:o?a.string("meta_hotel_website_c9a"):a.string("visit_hotel_website")})}):null,g=({servletName:e,specialOffer:t,locationId:l,contactLinks:r,otaLink:s,isUpdatedMWStickyCommerceUI:d})=>{var u=r&&r.find(e=>e?.contactLinkType==="URL_HOTEL"),{localize:f}=n();return(o(()=>{(u||t)&&c({module:"hotel_review",action:"header_ba_link_impression",value:t?1:2})},[u,t]),t||u||s)?i(a,{children:i("div",{className:v(I.so,{[I.iconMargin]:!d}),onClick:e=>(e.stopPropagation(),!1),children:t?L({servletName:e,specialOffer:t,locationId:l,localize:f,isUpdatedMWStickyCommerceUI:d}):s?y(l,s):_(l,u,f,d)})}):null},h=({servletName:e,commerceCountryId:t,stateLocationId:a=0,trafficSource:o,isUpdatedMWStickyCommerceUI:n})=>{var c=p(),{otaData:l}=r(a,t,"TABLET"===c||"MOBILE"===c?"MOBILE":"DESKTOP",e||"",k()),u=s();return"sp"!==o&&u&&l?.locationId?i(g,{servletName:e,locationId:l.locationId,stateLocationId:a,trafficSource:o,specialOffer:l.specialOffer,contactLinks:l.contactLinks,commerceCountryId:t,otaLink:l.otaLink,isUpdatedMWStickyCommerceUI:n}):i(d,{withContactLinks:!0,children:(c,l,r,s)=>!c||s?null:i(g,{servletName:e,locationId:c,stateLocationId:a,trafficSource:o,specialOffer:l,contactLinks:r,commerceCountryId:t,isUpdatedMWStickyCommerceUI:n})})};return[()=>{e("default",l((e,t)=>({servletName:e.route.page,commerceCountryId:e.meta.commerceCountryId,stateLocationId:e.page.detailId,trafficSource:e.route.sponsoredListingLocationIdAttribution===e.page.detailId?"sp":"ba",isUpdatedMWStickyCommerceUI:t.isUpdatedMWStickyCommerceUI||!1}))(h))},[e=>(i=e.jsx,a=e.Fragment),e=>o=e.useEffect,e=>n=e.useLocalize,e=>c=e.default,e=>l=e.connect,e=>(r=e.useBaOtaQueryWrapper,s=e.useIsBaOtaTestEnabled,d=e.BusinessAdvantageProvider,u=e.SpecialOffer,f=e.BaOtaLink),e=>m=e.WebLink,e=>p=e.useViewportCategory,e=>k=e.default,e=>v=e.default]]},["21h32l","o4yt4q","7thqz4","4axon3","2mj4nv","g5mqn8","t9pxn7","ys6v1o","crdfjq","fkji80"]]);

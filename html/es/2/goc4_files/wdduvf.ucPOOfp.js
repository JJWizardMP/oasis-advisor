(this.$WP=this.$WP||[]).push(["wdduvf",(e,i)=>{var a,t,n,r,l,o,s,d,c,u,g,h,v,p,m,_,w,f,b,k,y,C,M,R,N,D,S,B,I,T,x,L,P,H,q,A,E,z,O,j,$,W,F,Q,K,U,V,Y,G,J,X,Z,ee,ei,ea,et={withSeparator:"YSwkQ"},en=({review:e,onClick:i})=>{var{userProfile:r}=e,{localize:l}=f(),o=r?.displayName||"",s=r?.route?.url||void 0,d=r?.avatar?.photoSizes?.filter(Boolean).map(e=>({url:e.url||"",width:e.width||0,height:e.height||0})),u=r?.hometown?.location?.additionalNames?.long||null,g=r?.contributionCounts?.sumAllUgc||0,h=l.string("social_profile_contributions",{0:g});return a(N,{variant:"two-line",profileInfo:[{displayName:o,profileHref:s,avatarSource:d,target:"_blank",onClick:i}],additionalInfo1:t(n,{children:[null!==u&&u&&a("span",{children:u}),void 0!==g&&g>0&&a("span",{className:c(u&&et.withSeparator),children:h})]})})},er=({review:e})=>{var{rating:i}=e;return a("div",{className:"Ml",children:null!==i&&a(D,{rating:i})})},el={cardContainer:"f e Q1",highlighted:"dpcpn",dot:"NK Ni"},eo=({tripTypeId:e,highlighted:i})=>a(k,{id:"triptype_desc_sentence_pl_styled",args:{0:e,styles:i?el.highlighted:null}}),es=({visitedDate:e})=>{var{page:i}=d(),t=ey.includes(i);return e?t?a(k,{id:"location_reviews_date_of_stay_styled",args:{date:e,styles:el.highlighted}}):a(k,{id:"location_reviews_visited_date_styled",args:{date:e,styles:el.highlighted}}):null},ed=({review:e,marginBottom:i,marginTop:n,variant:r})=>{var{tripInfo:l}=e,o=b(),s=l?.stayDate?o.formatDate("date_full_month_year",new Date(l?.stayDate)):null,d=l?.tripType&&K.get(l.tripType);return"modal"===r?t(m,{variant:"supporting-01",marginBottom:i,marginTop:n,children:[a(es,{visitedDate:s}),s&&d&&a("span",{className:el.dot,children:"•"}),d&&a(eo,{tripTypeId:d,highlighted:!1})]}):t("div",{className:c(u({marginBottom:i,marginTop:n}),el.cardContainer),children:[a(m,{variant:"supporting-01",children:a(es,{visitedDate:s})}),d&&a(m,{variant:"supporting-01",children:a(eo,{tripTypeId:d,highlighted:!0})})]})},ec=({id:e,helpfulVoteCount:i,isLiked:t=!1,onLikeClick:n})=>{var{localize:r}=f(),[l,o,s]=x({item:{__typename:L.Review,socialStatistics:{isLiked:t,likeCount:i},id:e},onClick:n});return a(S,{variant:"primary-border",icon:o?I:T,onClick:l,size:"medium","aria-label":o?r.string("sng_click_to_remove_helpful_vote"):r.string("sng_click_to_add_helpful_vote"),children:a(w,{id:"media_viewer_helpful_media_with_count",args:{0:s}})})},eu={container:"qjgJZ PJ",contributor:"FnpKD M k",actions:"pylIl",hidden:"EsaWh",responseWrapper:"Fqrsd"},eg=({review:e,onOwnerContributorClick:i,onReadMoreClicked:n,hidden:l=!1})=>{var{userProfile:o,text:s,publishedDate:d,id:u}=e,g=b(),{localize:v}=f(),{open:p}=A({id:u?.toString()||""}),_=o?.route?.url||void 0,k=o?.displayName||"",y=o?.avatar?.photoSizes?.filter(Boolean).map(e=>({url:e.url||"",width:e.width||0,height:e.height||0})),C=d?g.formatDate("date_long",new Date(d)):null,M=r(()=>[{onClick:()=>p(),displayName:v.string("location_reviews_report_response")}],[v,p]);return t("div",{className:c(eu.container,l&&eu.hidden),children:[t("div",{className:eu.contributor,children:[a(N,{variant:"two-line",profileInfo:[{displayName:k,profileHref:_,target:"_blank",avatarSource:y,onClick:i}]}),a("div",{className:eu.actions,children:a(P,{options:M,menuVariant:"trailing-top-caret",label:v.string("sng_review_options"),mode:"menu",fullscreenMobile:!0,trigger:({active:e,onKeyDown:i,ariaAttributes:t,ref:n,onClick:r})=>a(S,{ref:n,ariaAttributes:t,onKeyDown:i,variant:"clear",icon:H,size:"small","aria-label":e?v.string("sng_close_options_menu"):v.string("sng_open_options_menu"),onClick:e=>{r&&r(e)}})})})]}),a("div",{className:eu.responseWrapper,children:a(h,{onExpand:n,children:s})}),a(m,{variant:"supporting-02",marginTop:"spacing-03",children:a(w,{id:"user_review_written_date",args:{date:C}})}),a(m,{variant:"supporting-02",marginTop:"spacing-03",children:a(w,{id:"omnibus_review_management_v2"})})]})},eh=({photos:e,locationId:i})=>{var{page:r}=d(),{localize:s}=f(),c=z(r),u={...O,...j(r)},[g,h]=l(null),v=_(W.click("photo",`${i}`)),p=o(()=>{h(null)},[]),m=o(e=>{h({mediaId:{id:e||0,type:"p"},albumId:c}),v()},[c,v]);return t(n,{children:[g&&a($,{locationId:i,initialSettings:g,onClose:p,...u.mediaViewerParams}),a("div",{className:"cXxXE _e q",children:e?.filter(Boolean).map(e=>a("button",{className:"cdboh _S B-",onClick:()=>m(e.id),"aria-label":s.string("sng_see_full_review_image"),children:a(E,{source:e.photoSizeDynamic,width:165,height:97})},e.id))})]})},ev=({reviewId:e})=>{var{open:i}=q({id:String(e),onClose:()=>{}});return a(P,{fullscreenMobile:!0,mode:"menu",menuVariant:"trailing-top-caret",label:"Report review",options:[{onClick:()=>i(),displayName:"Report this review"}],onOpen:()=>{},trigger:({active:e,onKeyDown:i,ariaAttributes:t,ref:n,onClick:r})=>a(S,{ref:n,ariaAttributes:t,onKeyDown:i,variant:"clear",icon:H,size:"small","aria-label":e?"close":"open",onClick:e=>{r&&r(e)}})})},ep=({review:e,tracking:i,reviewText:n})=>{var{title:r,text:l,id:o,helpfulVotes:s,publishedDate:d,photos:c,ownerResponse:u,location:g}=e,h=b(),v=M(()=>{i?.onVisibleImpression?.()}),p=d?h.formatDate("date_long",new Date(d)):null,_=!!u?.text;return t("div",{ref:v,children:[t("div",{className:"f v k",children:[t("div",{children:[a(F,{review:e,onClick:()=>{i?.onContributorClick?.()}}),a(Q,{review:e})]}),a("div",{children:a(J,{reviewId:o})})]}),r&&a(m,{variant:"title-05",marginBottom:"spacing-02",marginTop:"spacing-02",children:r}),a(m,{variant:"body-01",children:n??l}),c&&c.length>0&&a(G,{photos:c,locationId:g?.locationId||0}),t("div",{className:"MHTxO f K Mk",children:[t("div",{className:"uPWwq",children:[a(U,{review:e,marginBottom:"spacing-02",variant:"modal"}),p&&a(m,{variant:"supporting-02",children:a(w,{id:"user_review_written_date",args:{date:p}})})]}),a(V,{id:o||0,helpfulVoteCount:s||0,onLikeClick:()=>{i?.onLikeClick?.()}}),a("div",{className:"w",children:a(m,{variant:"supporting-02",marginTop:"spacing-04",children:a(R,{variant:"MEMBER"})})})]}),u&&_&&a(Y,{review:u,onOwnerContributorClick:()=>{i?.onOwnerContributorClick?.()},onReadMoreClicked:()=>{i?.onReadMoreClicked?.()}})]})},em=({onClose:e,review:i})=>{var{id:t}=i;return a(C,{onClose:e,widthOption:"fixed-60",children:a(X,{review:i,tracking:{onContributorClick:_(W.click("contributor",`${t}`)),onLikeClick:_(W.click("like",`${t}`)),onOwnerContributorClick:_(W.click("owner-contributor",`${t}`)),onReadMoreClicked:_(W.click("owner-read-more",`${t}`))}})})},e_={__key:3097743837159,id:"02d13febc7e7ba2c",loc:{},definitions:[]},ew={__key:0xb0d72a9c7677,id:"b0d72a9c767723a4",loc:{},definitions:[]},ef=({onClose:e})=>t(C,{onClose:e,widthOption:"fixed-60",children:[a(m,{variant:"title-03",marginBottom:"spacing-02",marginTop:"spacing-02",children:a(w,{id:"highlighted_reviews_see_what_other_travelers_are_saying"})}),a(m,{variant:"body-01",children:"Reviews selected by recency and descriptiveness of user-identified themes such as wait time, length of visit, general tips, and location information."})]}),eb={container:"Pk Px",card:"bhNjB Ra Pk PY Px PK",center:"c",carouselWrapper:"ZHWfd",cardHeader:"tCJHr MH"},ek=["Attraction_Review"],ey=["Hotel_Review"];function eC(e,i){return"Attraction_Review"===i&&"en"===e}var eM=()=>{var e=eN(),i=eR();return null!==e&&e.length>=3||null!==i&&null!==i.items&&i.items.length>=3},eR=()=>{var{params:e,page:i}=d(),a=y(),t="detailId"in e&&e.detailId||0,n=!eC(a,i)||0===t,[{data:r,fetching:l}]=s({query:ew,variables:{locationId:t},pause:n});return!l&&r&&r.SeoMetaData_locationQualityReviews&&r.SeoMetaData_locationQualityReviews&&r.SeoMetaData_locationQualityReviews[0]&&r.SeoMetaData_locationQualityReviews[0].items?r.SeoMetaData_locationQualityReviews[0]:null},eN=()=>{var{params:e,page:i}=d(),a=y(),t="detailId"in e&&e.detailId||0,n=eC(a,i)||!ei.includes(i)||0===t,[{data:r,fetching:l}]=s({query:e_,variables:{locationId:t,filters:[{axis:"LANGUAGE",selections:[a]}],limit:3},pause:n});return!l&&r?.locations&&r?.locations.length>0&&r.locations[0]&&r.locations[0].reviewListPage?r.locations[0].reviewListPage.reviews:null},eD=({review:e})=>{var{title:i,text:n,publishedDate:r,id:o,ownerResponse:s}=e,d=b(),[c,u]=l(!1),g=!!s?.text,v=_(W.click("open-modal",`${o}`)),p=_(W.click("close-modal",`${o}`)),f=_(W.click("contributor",`${o}`)),k=r?d.formatDate("date_long",new Date(r)):null;return t("div",{className:eb.card,children:[t("div",{className:eb.cardHeader,children:[a("div",{children:a(F,{review:e,onClick:f})}),a("div",{children:a(J,{reviewId:o})})]}),a(Q,{review:e}),i&&a(m,{variant:"title-05",marginBottom:"spacing-02",marginTop:"spacing-02",children:i}),a(h,{variant:"extended",clickHandler:()=>(u(!0),v(),!1),children:a(m,{variant:"body-01",children:n})}),s&&g&&a(Y,{hidden:!0,review:s}),a(U,{review:e,marginTop:"spacing-03",marginBottom:"spacing-03",variant:"card"}),k&&a(m,{variant:"supporting-02",marginBottom:"spacing-02",children:a(w,{id:"user_review_written_date",args:{date:k}})}),c&&a(Z,{onClose:()=>{u(!1),p()},review:e})]})},eS=()=>{var e=eN(),i=eR(),n=_(W.click("scrolled",void 0)),[r,o]=l(!1),s=g({backgroundColor:"beigeBackground"}),{page:u}=d(),h=ey.includes(u);if(!(i&&i.items||e))return null;var f=(function(e){if(!e)return null;var i=new Date;return i.setFullYear(i.getFullYear()-1),e.filter(e=>null!=e&&null!=e.publishedDate&&new Date(e.publishedDate).getTime()>i.getTime())})(function(e,i){if(!e||!i)return null;var a=Math.floor(i);return e.filter(e=>e&&null!==e&&e.rating&&e.rating>=a-1&&a<=i+1)}(i?.items?.map(e=>e?.review),i?.averageRating))?.slice(0,10),b=h?e:f;return!b||null===b||b.length<3?null:t("div",{className:c(eb.container,s),children:[t(v,{children:[t("div",{className:eb.center,children:[a(m,{variant:"title-03",marginBottom:"spacing-02",children:h?a(w,{id:"highlighted_reviews_see_what_other_travelers_are_saying"}):a(w,{id:"ar_highlighted_reviews_carousel"})}),a(B,{onClick:()=>(o(!0),!1),marginBottom:"spacing-03",children:a(m,{elementType:"span",variant:"button-04",children:a(w,{id:"highlighted_reviews_learn_more"})})})]}),a("div",{className:eb.carouselWrapper,children:a(p,{size:"wide",onScrolled:n,variableHeight:!0,children:b.map(e=>e?a(eD,{review:e},e.id):null)})}),a("div",{className:eb.center,children:a(m,{variant:"supporting-02",marginTop:"spacing-04",children:h?a(R,{variant:"MEMBER"}):a(R,{variant:"MEMBERS_PLURAL"})})})]}),r&&a(ee,{onClose:()=>{o(!1)}})]})};return[()=>{W={click:(e,i)=>({module:"highlighted-reviews",context:i,action:e})},F=en,Q=er,K=new Map([["BUSINESS",1],["COUPLES",2],["FAMILY",3],["FRIENDS",4],["SOLO",5]]),U=ed,V=ec,Y=eg,G=eh,J=ev,X=ep,Z=em,ee=ef,ei=[...ek,...ey],ea=eS,e({HighlightedReviewsModalContent:X,default:ea,useArHighlightedReviews:eR,useHasHighlightedReviews:eM,useHrHighlightedReviews:eN})},[e=>(a=e.jsx,t=e.jsxs,n=e.Fragment),e=>(r=e.useMemo,l=e.useState,o=e.useCallback),e=>s=e.useQuery,e=>d=e.useRoute,e=>(c=e.default,u=e.margin,g=e.backgroundColor),e=>h=e.default,e=>v=e.default,e=>p=e.Carousel,e=>m=e.default,e=>_=e.useGARecordCallback,e=>(w=e.default,f=e.useLocalize,b=e.useIntlFormatter,k=e.UnsafeLocalize,y=e.useLanguage),e=>C=e.Modal,e=>M=e.useOnVisible,e=>R=e.TransparencyLinkReviewDisclosure,e=>N=e.default,e=>D=e.BubbleRating,e=>(S=e.CircularButton,B=e.BorderlessButton),e=>I=e.default,e=>T=e.default,e=>x=e.useLikeAction,e=>L=e.SocialObjectTypeMap,e=>P=e.DropdownMenu,e=>H=e.default,e=>(q=e.default,A=e.useReportManagementResponseModal),e=>E=e.default,e=>(z=e.getDefaultAlbumId,O=e.defaultMediaSettings,j=e.getPageMediaSettings),e=>$=e.default]]},["21h32l","o4yt4q","mqwhqn","fgwvq1","gw8uw6","livpad","94v69w","7yaz66","essqvy","32pwc7","7thqz4","i3sz5h","3btuy0","2ksxja","dpmjfu","bkeq24","jppfwt","wehxiu","u47wjb","b9lpgd","nev0g8","ntn269","mvpl5y","a2xbq6","34bu7w","r144n1","ejmcf4"]]);

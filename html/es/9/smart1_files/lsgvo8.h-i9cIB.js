(this.$WP=this.$WP||[]).push(["lsgvo8",(e,n)=>{var a,o,i,r,t,l,s,c,p,d,h,m,u,y,f,v,g,I,k,b,C,_,x,T=e=>e?.data&&e.data.photoSizeDynamic||void 0,R=e=>e?.__typename==="Mixer_SponsorProfile"?{sponsorId:e.sponsorProfile?.userId,sponsorName:e.sponsorProfile?.displayName,sponsorUrl:e.sponsorProfile?.route?.url}:e?.__typename==="Mixer_CustomSponsor"?{sponsorId:null,sponsorName:e.sponsorName,sponsorUrl:e.sponsorUrl}:{sponsorId:null,sponsorName:null,sponsorUrl:null},S=(e,n)=>e?.url!=null&&"/Articles"!==e.url?e.url:null!=n?`/Articles?l=${n}`:"/Articles",A=e=>{var n=e&&"document"in e&&e.document,a=n&&"content"in n&&n.content,o=a&&"thumbnail"in a&&a.thumbnail,i=n&&"route"in n&&n.route,r=n&&"snippet"in n&&n.snippet,t=n&&"space"in n&&n.space,l=e&&"sponsorInfo"in e&&e.sponsorInfo,s=a&&"seoInfo"in a&&a.seoInfo;return{route:i,space:t,title:n&&"title"in n&&n.title||s?.metaTitle,snippet:r,sponsorInfo:l,thumbnail:o}},D={articleInfo:"rhpRI _Q w z Za s",heroInfo:"IFDHX"},N=({article:e,isForHeroStoriesSection:n,fallbackImage:t,onClick:h})=>{var{route:f,snippet:v,space:g,sponsorInfo:b,title:C,thumbnail:_}=r(()=>k(e),[e]),x=_?.photo?.photoSizeDynamic||t,T=I(f,g),R="MOBILE"===u(),S=!!b&&b.sponsorId!==L;return a(d,{theme:"image",color:"onDarkLink",href:T,onClick:h,children:[x&&o(p,{aspectRatio:"16:9",height:"100%",width:"100%",source:x}),a("div",{className:l(D.articleInfo,n&&D.heroInfo),children:[S&&o(y,{contentType:b.contentType}),o(m,{variant:n?"expressive-display-01":"title-01",marginTop:n?"spacing-01":"spacing-02",lineClamp:R&&!S?3:2,children:o(d,{color:"onDarkLink",display:"block",href:T,theme:"standalone",children:C})}),n&&a(i,{children:[!R&&o(m,{color:"onDarkText",lineClamp:S?1:2,variant:"expressive-body-01",marginTop:"spacing-02",children:v}),o(c,{href:T,marginTop:"spacing-03",variant:"on-dark-outline",children:o(s,{id:"common_Read_more"})})]})]})]})},w=({article:e,isMosaicSection:n,width:i,imageWidth:t,imageHeight:l,fallbackImage:s,onClick:c})=>{var{route:h,space:u,sponsorInfo:f,title:v,thumbnail:g}=r(()=>k(e),[e]),b=g?.photo?.photoSizeDynamic||s,C=I(h,u),_=!!f&&f.sponsorId!==L;return o("div",{className:"hlAOR Re Cj B1 Z BB _Z o",style:{width:i||"100%"},children:a(d,{color:"onDarkLink",theme:"image",href:C,onClick:c,children:[o(p,{source:b,aspectRatio:"1:1",height:l||"100%",width:t||"100%"}),a("div",{className:"ILEYc _U s l Q1",children:[!n&&_&&o(y,{contentType:f.contentType}),o(m,{variant:"expressive-display-07",lineClamp:3,marginTop:"spacing-02",children:o(d,{color:"onDarkLink",display:"block",href:C,theme:"standalone",children:v})})]})]})})},z={card:"_T Cj",image:"yMxVz _T o Re",verticalCard:"ysyMr",horizontalCard:"VcHAw A Q2",mainText:"lqLKw",sponsorBannerContainer:"bDMdQ"},M=({article:e,isHorizontalCard:n,imageWidth:i,imageHeight:t,width:l,fallbackImage:s,onClick:c})=>{var{route:f,space:v,sponsorInfo:g,title:b,thumbnail:C}=r(()=>k(e),[e]),_=C?.photo?.photoSizeDynamic||s,x=I(f,v),T="MOBILE"===u(),R=!!g&&g.sponsorId!==L;return o("div",{className:z.card,style:{width:l||"auto"},children:o(d,{display:"block",theme:"none",href:x,onClick:c,children:a("div",{className:T||n?z.horizontalCard:z.verticalCard,children:[o("div",{className:z.image,children:o(h,{theme:"image",children:o(p,{height:t||"100%",width:i||"100%",source:_,aspectRatio:"16:9"})})}),a("div",{className:z.mainText,children:[R&&o("div",{className:z.sponsorBannerContainer,children:o(y,{contentType:g.contentType})}),o(m,{variant:"title-04",lineClamp:!(n||T)&&R?2:3,marginTop:"spacing-02",children:o(h,{theme:"standalone",display:"inline",children:b})})]})]})})})},O={__key:5001027003160,id:"048c64702318b3c7",loc:{},definitions:[]},j={fallbackAspectRatio2x1:648797939,fallbackAspectRatio3x2:648798051,fallbackAspectRatio4x3:648798127,fallbackAspectRatio2x3:648798221,fallbackAspectRatio3x4:648798281,fallbackAspectRatio1x1:648797939},B=()=>{var[{data:e}]=f({query:O,variables:{mediaIds:Object.values(j)}}),n=Object.keys(j),a=Array(Object.values(j).length).fill(null);return e&&e.Media_getMediaByIds&&(a=e.Media_getMediaByIds.map(e=>e&&"photoSizeDynamic"in e?e.photoSizeDynamic:null)),Object.fromEntries(n.map((e,o)=>[n[o],a[o]]))},L=124;return[()=>{v=T,g=R,I=S,k=A,b=N,C=t(w),_=t(M),x=B,e({FallbackImage:O,FullImageCard:C,HeroStoryCard:b,StandardCard:_,TRIPADVISOR_SPONSOR_ID:L,getAvatarSource:v,getSponsorInfo:g,useFallbackImage:x})},[e=>(a=e.jsxs,o=e.jsx,i=e.Fragment),e=>(r=e.useMemo,t=e.memo),e=>l=e.default,e=>s=e.default,e=>c=e.default,e=>p=e.default,e=>(d=e.default,h=e.LinkStyle),e=>m=e.default,e=>u=e.useViewportCategory,e=>y=e.SponsorshipContentCallOut,e=>f=e.useQuery]]},["21h32l","o4yt4q","fkji80","7thqz4","jppfwt","34bu7w","lr6tb6","essqvy","ys6v1o","eozxiw","mqwhqn"]]);
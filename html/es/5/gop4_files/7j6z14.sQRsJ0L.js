(this.$WP=this.$WP||[]).push(["7j6z14",(e,i)=>{var t,r,s,a,o,n,l,c,d,m,p,_,h,u,f,v,k,b,g,y,T,x,C,w={social_action:"mGZLW f _T M _S",icon:"AWqKr",text:"duDPx",cta:"tSJmJ S5 H4 _S",cta_icon:"LWEmz",backToListIcon:"EtNOL",cta_text:"dScTn",dark_icons:"qNoXj"},P={sms:19907,email:55593,clipboard:19905},I=({url:e,itemType:i,itemId:r,action:s,type:a,children:o})=>t(d,{useSpan:!0,module:"ShareCta",action:s,context:`${i}|${r}|${e}`,once:!1,value:a&&"repost_action"!==a?P[a]:void 0,children:o(a&&"repost_action"!==a?(t=>{if("LinkPost"===i)return e;var r=-1!==e.indexOf("?"),s=-1!==e.indexOf("#"),a=`${r?"&":"?"}m=${t}`;return s?e.replace("#",`${a}#`):`${e}${a}`})(P[a]):e)}),S={listItem:"CCyNL",large:"WaGUs",icon:"FwRYV",img:"hgevT",small:"JQnwv",black:"LmwIT"},L=({iconName:e,localizedText:i,onClickFunction:o,imgCdnUrl:n,size:l})=>r("li",{onClick:o,className:s("ui_link",S.listItem,{[S.small]:"small"===l,[S.large]:"large"===l}),children:[e.startsWith("/")?t("img",{src:`${n}${e}`,className:s(S.img,{[S.small]:"small"===l,[S.large]:"large"===l})}):t(a,{name:e,className:s(S.icon,S.black,{[S.small]:"small"===l,[S.large]:"large"===l})}),t("span",{children:i})]}),R=(e,i)=>{var t=`${i} ${e}`;t.length>140&&(t=e),window.location.href=`sms:?&body=${encodeURIComponent(t)}`},A=({url:e,itemType:i,size:r})=>{var s,{localize:a}=n();return s="LinkPost"===i?a.string("share_sms_link"):"ReadTrip"===i?a.string("trips_share_email_subject"):"WriteTrip"===i?a.string("trips_collaborate_invite_email_subject"):a.string("link_share_sms_checkthisout"),t(b,{iconName:"text-message",localizedText:a.string("link_share_option_sms"),size:r,onClickFunction:()=>R(e,s)})},j={__key:98563483689783,id:"59a4996ee3376ca2",loc:{},definitions:[]},$={__key:0x9e8dea738fac,id:"9e8dea738fac63a2",loc:{},definitions:[]},N={__key:9731236541920,id:"08d9bae5b5e0624e",loc:{},definitions:[]},z={__key:59634554670852,id:"363cc0728f04e177",loc:{},definitions:[]},q={__key:0xb3c007c2a99,id:"0b3c007c2a99625a",loc:{},definitions:[]},B=["Restaurant_Review","Attraction_Review","MobileAttraction_Review","AttractionProductReview","MobileAttractionProductReview","Hotel_Review","MobileHotel_Review"],W=(e,i,t,r,s,a)=>{var o=encodeURIComponent(e),n=encodeURIComponent(r),l=encodeURIComponent(s),c=encodeURIComponent(i||a.string("share_email_subject")),d=`${t||a.string("link_share_sms_checkthisout")}%0D%0A%0D%0A${n?`${n}%0D%0A`:""}${o}%0D%0A${l?`${l}%0D%0A`:""}%0D%0A${a.string("ib_share_booking_download_app")}%0D%0A${a.string("app_download_url_secure")}`;window.location.href=`mailto:?subject=${c}&body=${d}`},M=({url:e,subject:i,firstSentence:r,textBeforeLink:s,textAfterLink:a,size:o})=>{var{localize:l}=n();return t(b,{iconName:"email",localizedText:l.string("link_share_option_email"),size:o,onClickFunction:()=>W(e,i,r,s,a,l)})},U=e=>{var{localize:i}=n();if(B.indexOf(e.itemType)>-1)return t(p,{query:j,variables:{locationId:e.itemId},children:({fetching:r,data:s})=>{if(r||!s)return t(M,{...e});var a=s.locations?.[0]?.name||"";return t(M,{...e,subject:i.string("link_share_email_subject",{0:a}),firstSentence:i.string("mobile_here_is_a_place_i_found_8e0"),textBeforeLink:a})}});if("Review"===e.itemType)return t(p,{query:$,variables:{reviewId:e.itemId},children:({fetching:r,data:s})=>r||!s?t(M,{...e}):t(M,{...e,firstSentence:i.string("share_email_reviews"),textBeforeLink:s.reviews?.[0]?.title||""})});if("Photo"===e.itemType)return t(p,{query:N,variables:{id:e.itemId},children:({fetching:r,data:s})=>r||!s?t(M,{...e}):t(M,{...e,firstSentence:i.string("share_email_photos"),textBeforeLink:s.photos?.[0]?.caption||""})});if("Video"===e.itemType)return t(p,{query:z,variables:{id:e.itemId},children:({fetching:r,data:s})=>r||!s?t(M,{...e}):t(M,{...e,firstSentence:i.string("share_email_videos"),textBeforeLink:s.videos?.[0]?.caption||""})});if("LinkPost"===e.itemType)return t(M,{...e,subject:i.string("share_email_link_subject"),firstSentence:i.string("share_email_link"),textAfterLink:i.string("share_email_link_attribution")});if("ForumPost"===e.itemType)return t(M,{...e,firstSentence:i.string("share_email_forumtopic")});if("ForumResponse"===e.itemType)return t(M,{...e,firstSentence:i.string("share_email_forumreply")});if("WriteTrip"===e.itemType||"ReadTrip"===e.itemType){var r="WriteTrip"===e.itemType;return t(p,{query:q,variables:{id:e.itemId},children:({fetching:s,data:a})=>{var o=e;if(!s&&a){var n=a.trips&&a.trips.find(i=>i.id===e.itemId),l={tripName:n&&n.title||""},c=n?.owner?.isMe;o={...e,firstSentence:i("trips_share_email_hey"),subject:i("trips_share_email_subject"),textBeforeLink:i("trips_share_email_body_v2",l)},r?(o.subject=i("trips_collaborate_invite_email_subject"),c?o.textBeforeLink=i("trips_collaborate_invite_email_body_v2",l):o.textBeforeLink=i("trips_collaborate_invite_email_body_collaborator_version",l)):c||(o.subject=i("trips_share_email_subject"),o.textBeforeLink=i("trips_email_share_collaborator_version",l))}return t(M,{...o})}})}return t(M,{...e})};function D(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}var F=e=>{var{localize:i}=n();return t(v,{...e,localize:i})},E=({itemType:e,repostProps:i})=>"Repost"===e?t(f,{modalName:i.modalName,repostPreviewProps:i.repostPreviewProps,originalRepostReference:i.originalRepostReference,actor:i.actor,socialStatistics:i.socialStatistics,onClick:i.onClick,styleAsShareListItem:!0,openRepostModalAsLocal:!0}):"Video"===e||"Photo"===e||"Review"===e||"LinkPost"===e||"MediaBatch"===e||"ForumPost"===e||"ForumResponse"===e||"NotMyTrip"===e||"ReadTrip"===e||"WriteTrip"===e?t(f,{modalName:i.modalName,repostPreviewProps:i.repostPreviewProps,actor:i.actor,socialStatistics:i.socialStatistics,onClick:i.onClick,styleAsShareListItem:!0,openRepostModalAsLocal:!0}):null,O=({url:e,itemType:i,itemId:a,viewportCategory:o,headerComponent:n,repostProps:l})=>r("div",{className:s("FhikP","NgUHj"),children:[n,"MOBILE"===o&&t(k,{action:"share_select",itemType:i,itemId:a,url:e,type:"sms",children:e=>t(g,{url:e,itemType:i,size:"small"})}),t(k,{url:e,itemType:i,itemId:a,action:"share_select",type:"email",children:e=>t(y,{url:e,itemType:i,itemId:Number(a),size:"small"})}),t(k,{action:"share_select",itemType:i,itemId:a,url:e,type:"clipboard",children:e=>t(T,{url:e,size:"small"})}),l&&t(x,{itemType:i,repostProps:l})]}),X=({fixed:e,url:i,itemType:r,itemId:s,shiftX:a,shiftY:o,children:n,headerComponent:l,alignEdge:c,repostProps:d,above:p})=>t(m,{local:!0,closeButton:!1,fixed:e,above:p,below:!0,alignEdge:c,shiftX:a,shiftY:o,shiftArrow:a,arrowType:"small",contents:()=>t(C,{url:i,itemType:r,itemId:s,headerComponent:l,repostProps:d}),children:n}),Y=({url:e,itemType:i,itemId:r,styleAsSocialAction:s,headerComponent:a,onClick:o,alignEdge:n,repostProps:c,above:d,shiftX:m,shiftY:p,hideText:_,isBackToList:h,isDsIcon:u})=>t("div",{children:t(X,{url:e,itemType:i,itemId:r,shiftX:m,shiftY:p,headerComponent:a,alignEdge:n,repostProps:c,above:d,children:(a,n)=>t(k,{itemType:i,itemId:r,url:e,action:"share_button_click",children:()=>t(l,{children:e=>t(H,{onClick:i=>{o&&o(i),e(i,"share"),n()},target:a,styleAsSocialAction:s,hideText:_,isBackToList:h,isDsIcon:u})})})})}),H=({onClick:e,target:i,styleAsSocialAction:l,hideText:c,isBackToList:d,isDsIcon:m})=>{var{localize:p}=n();return t("div",{onClick:e,className:s(l?w.social_action:w.cta,w.dark_icons),children:r("span",{ref:i,children:[m?t(o,{color:"primaryIcon",size:20,marginRight:"spacing-01"}):t(a,{name:"share",className:s({[w.icon]:l,[w.cta_icon]:!l,[w.backToListIcon]:d})}),!c&&r("span",{className:l?s("ui_link",w.text,"socialCTA"):w.cta_text,children:[p("link_share_share")," "]})]})})};return[()=>{I.defaultProps={type:null},k=c((e,i)=>({url:i.url.startsWith("/")?e.meta.baseUrl+i.url:i.url}))(I),L.defaultProps={onClickFunction:()=>!1},b=c(e=>({imgCdnUrl:e.meta.imageCdnUrl}))(L),g=A,M.defaultProps={firstSentence:"",subject:"",textBeforeLink:"",textAfterLink:""},y=U,v=class extends _{render(){return t(h,{children:e=>t(b,{iconName:"link",size:this.props.size,localizedText:this.state.copied?this.props.localize.string("link_share_link_copied"):this.props.localize.string("link_share_option_clipboard"),onClickFunction:this.state.copied?void 0:()=>this.copyAndClose(this.props.url,e)})})}constructor(...e){super(...e),D(this,"state",{copied:!1}),D(this,"copyAndClose",(e,i)=>{var t=u.copy(e);return t&&(this.setState({copied:!0}),setTimeout(()=>i(),3e3)),t})}},T=F,x=E,C=c((e,i)=>({...i,url:i.url.startsWith("/")?e.meta.baseUrl+i.url:i.url,viewportCategory:e.meta.device.viewportCategory}))(O),X.defaultProps={fixed:!1,shiftX:0,shiftY:0,headerComponent:null,alignEdge:"right"},Y.defaultProps={styleAsSocialAction:!1,headerComponent:null,onClick:void 0,above:!1,shiftX:6,shiftY:4,hideText:!1},H.defaultProps={styleAsSocialAction:!1,hideText:!1},e({ShareCta:Y,ShareDropdownMenu:C,SharePopover:X,ShareTarget:H,ShareTracker:k})},[e=>(t=e.jsx,r=e.jsxs),e=>s=e.default,e=>a=e.Icon,e=>o=e.default,e=>n=e.useLocalize,e=>l=e.InteractionLogger,e=>c=e.connect,e=>d=e.ClickTracker,e=>m=e.default,e=>p=e.Query,e=>_=e.Component,e=>h=e.Closer,e=>u=e.default,e=>f=e.RepostAction]]},["21h32l","fkji80","ybxsmg","vgfso9","7thqz4","yc8qq2","2mj4nv","4axon3","4q9l40","mqwhqn","o4yt4q","80hn7v","yjij17","9enknt"]]);

(this.$WP=this.$WP||[]).push(["j16vpf",(e,t)=>{var r,o,a,i,n,c,s,d,l,m,p,u,b,_,h,v,j,f,P,g,k,w,y,N,D,T={member_event_block:"sCZGP",member_actions:"jXhbq f _Y _m",member:"uyyBf",event_wrap:"IHLTq _Z o",event_type:"cRVSd",event_info:"iHmzx",item:"uFrbE"},I=(e,t,r)=>r?.route?.url||"",S=(e,t,r,o,a)=>{if(r.repostedObject)switch(e){case"Review":return a.string("member_event_reposted_review",t);case"Photo":return a.string("member_event_reposted_photo",t);case"MediaBatch":return a.string("member_event_reposted_photo_v2",t);case"Video":return a.string("member_event_reposted_video",t);case"ForumPost":return a.string("member_event_reposted_forumpost",t);case"LinkPost":return a.string("member_event_reposted_linkpost",t);case"Trip":return a.string("member_event_reposted_Trip",t);case"ApiLocationTopic":return`<a class="${t[0]}" href="${t[1]}">${t[2]}</a> asked a question`;case"ApiTopicPosting":return`Answer from <a class="${t[0]}" href="${t[1]}">${t[2]}</a>`}else{var i="Trip"===r.__typename&&r.owner&&r.owner.id,n=o&&o.userId;switch(e){case"Review":return a.string("member_event_on_review",t);case"RoomTip":return a.string("member_event_on_tip",t);case"Photo":return a.string("member_event_on_photo",t);case"MediaBatch":return a.string("feed_batched_photos_header_v2",t);case"Video":return a.string("member_event_on_video",t);case"ForumPost":if(r.id===r.parentId)return a.string("member_event_on_forumpost_question",t);return a.string("member_event_on_forumpost_reply",t);case"LinkPost":return a.string("member_event_on_linkpost",t);case"Trip":if(i===n)return a.string("member_event_on_Trip",t);return a.string("trips_feed_trip_joined_v2",t);case"ApiLocationTopic":return a.string("member_event_on_location_topic",t);case"ApiTopicPosting":return a.string("member_event_on_topic_posting",t)}}return""},C=(e,t,r)=>{switch(e){case"Review":return r.string("member_event_on_review_with_date",t);case"RoomTip":return r.string("member_event_on_tip_with_date",t);case"Photo":return r.string("member_event_on_photo_with_date",t);case"ApiLocationTopic":return r.string("member_event_on_question_with_date",t)}return""},L=({object:e,actor:t,isEmbedded:o,displayDate:a})=>{var{localize:i}=n(),s=c(),d=b(a?"ui_header_link":"ui_link",T.member,{verified:!!t&&t.isVerified},{fallbackDisplayName:!t?.displayName}),l={0:d,1:I(e?.__typename,e,t),2:j(D(i,t)),3:a?g(i,s,a):null,4:e?.__typename==="Repost"?e?.repostedObject?.media?.length:e?.numPhotos},m=t&&t.userId,u=e.repostedObject?e.repostedObject.__typename:e.__typename,_=a&&a.length>0?C(u,l,i):S(u,l,e,t,i),h=w({module:"Reviews",action:"review_username_click",context:null===m?"":m});return r(f,{children:e=>r("div",{className:T.event_type,onClick:t=>{e(t,"userClick",{userId:m}),h()},children:o?r(p,{className:d,href:t?.route?.url,children:D(i,t)}):r("span",{dangerouslySetInnerHTML:{__html:_}})})})},O=({object:e,actor:t})=>{var i=e.publishedDate||e.createdDate;return o(a,{children:[r(L,{actor:t,object:e}),r("div",{className:T.event_info,children:r("span",{className:T.item,children:r(f,{children:t=>r(p,{href:e?.route?.url,className:"ui_link",onClick:e=>t(e,"feedClick"),children:r(P,{dateStr:i})})})})})]})},E=({object:e,actor:t})=>{var i=e.publishedDate||e.createdDate;return o(a,{children:[r(L,{actor:t,object:{...e,__typename:"Review"},displayDate:i}),t&&r(N,{profile:t})]})},R=({object:e,actor:t})=>{var i=e.publishedDate;return o(a,{children:[r(L,{actor:t,object:{...e,__typename:"RoomTip"},displayDate:i}),t&&r(N,{profile:t})]})},A=({object:e,actor:t})=>{var i=e.publishedDate||e.createdDate||e.uploadDate||e.created;return o(a,{children:[r(L,{actor:t,object:e,isEmbedded:!0}),i&&r("div",{className:T.event_info,children:r("span",{className:T.item,children:r(f,{children:t=>r(p,{href:e?.route?.url,className:"ui_link",onClick:e=>t(e,"feedClick"),children:r(P,{dateStr:i})})})})})]})},M=({object:e,actor:t})=>{var i=e.publishedDate||e.uploadDate;return o(a,{children:[r(L,{actor:t,object:e}),r("div",{className:T.event_info,children:r("span",{className:T.item,children:r(f,{children:t=>r(d,{name:`Photo_${e.id}`,href:null,username:e.userProfile?e.userProfile.username:"",className:"ui_link",onClick:e=>t(e,"feedClick"),children:r(P,{dateStr:i})},`Photo_${e.id}`)})})})]})},q=({object:e,actor:t})=>{var i=e.publishedDate||e.uploadDate;return o(a,{children:[r(L,{actor:t,object:e,displayDate:i}),t&&r(N,{profile:t})]})},F=({object:e,actor:t,isEmbedded:i})=>{var n=e.createdDate;return o(a,{children:[r(L,{actor:t,object:e,isEmbedded:i}),r("div",{className:T.event_info,children:r("span",{className:T.item,children:r(P,{dateStr:n})})})]})},$=({objectProps:{object:e,actor:t}})=>{var i=e.publishedDate||e.uploadDate;return o(a,{children:[r(L,{actor:t,object:e}),r("div",{className:T.event_info,children:r("span",{className:T.item,children:r(f,{children:e=>r(p,{className:"ui_link",onClick:t=>e(t,"feedClick"),children:r(P,{dateStr:i})})})})})]})},z=({object:e,actor:t})=>{var i=e.publishedDate;return o(a,{children:[r(L,{actor:t,object:e}),r("div",{className:T.event_info,children:r("span",{className:T.item,children:r(f,{children:t=>r(p,{href:e?.route?.url,className:"ui_link",onClick:e=>t(e,"feedClick"),children:r(P,{dateStr:i})})})})})]})},U=({objectProps:{object:e,actor:t}})=>{var i=e.publishedDate;return o(a,{children:[r(L,{actor:t,object:e}),r("div",{className:T.event_info,children:r("span",{className:T.item,children:r(P,{dateStr:i})})})]})},B=({object:e,actor:t})=>{var i=e.created;return o(a,{children:[r(L,{actor:t,object:e}),r("div",{className:T.event_info,children:r("span",{className:T.item,children:r(P,{dateStr:i})})})]})},x=({objectProps:{object:e,actor:t}})=>{var i=e.created;if(e.owner&&t&&t.userId===e.owner.id)i=e.firstPublished;else{var n=t&&e.collaborators&&e.collaborators.find(e=>e.user&&e.user.id===t.userId);n&&(i=n.publicallyJoined)}return o(a,{children:[r(L,{actor:t,object:e,isEmbedded:!(t&&t.userId&&e.owner&&e.owner.id)}),r("div",{className:T.event_info,children:r("span",{className:T.item,children:r(f,{children:t=>r(p,{href:e?.route?.url,className:"ui_link",onClick:e=>t(e,"feedClick"),children:r(P,{dateStr:i})})})})})]})},V=({object:e,actor:t})=>{var i=e.timePublished||e.timeSubmitted;return o(a,{children:[r(L,{actor:t,object:{...e,__typename:"ApiLocationTopic"},displayDate:new Date(i).toISOString()}),t&&r(N,{profile:t})]})},H=({objectProps:{object:e,actor:t},overflowMenuProps:i})=>{var n=e.timePublished||e.timeSubmitted;return o(a,{children:[r(L,{actor:t,object:{...e,__typename:"ApiTopicPosting"}}),n?r("div",{className:T.event_info,children:o("span",{className:T.item,children:[r(P,{dateStr:new Date(n).toISOString()})," | ",r(W,{...i})]})}):null]})},G=e=>e.id||e.postId||e.repostId,W=({parentProps:e,editUgcModalName:t,onEdit:o,overrideItems:a})=>{var i=t=>r(y,{sectionObject:e.object,sectionObjectForType:e.overflowMenuObjectForType,sectionActor:e.actor,onEdit:t,overrideItems:a,deleteObject:e.deleteObject,untagObject:e.untagObject});return null!=t?r(l,{name:t,children:i}):i(o)},Z=e=>{var t,c,{localize:d}=n(),l=i(`ugcEditModal_${e.object.__typename}_${G(e.object)}:${Math.random()}`).current,p=e.object.__typename,b="default",j=!0;e.isEmbedded?t=r(A,{object:e.object,actor:e.actor}):"onTopicPosting"===e.objectEventType&&(b="xtra-small",j=!1);var P=e.actor&&!e.actor.isMe?{FOLLOW:!0,UNTAG:!!_(e.object,e.loggedInUserId||void 0)}:{FOLLOW:!1,UNTAG:!!_(e.object,e.loggedInUserId||void 0)},g=k("LinkPost"===p?{linkPostId:e.object.postId,initialUrl:v(e.object.preview.canonicalUrl),initialComment:e.object.comment,initialLocations:(e.object.tags?.orderedLocations||[]).map(({locationId:e,name:t}={})=>e&&t&&{locationId:e,title:t}).filter(Boolean)}:{}),w={parentProps:e,editComponent:null,overrideItems:P};if(("Photo"===p||"Video"===p)&&(c=r(m,{children:t=>r(h,{modalName:l,mediaObject:e.object,onSubmit:()=>{t({node:d("ugc_post_updated")})}})}),w={parentProps:e,editComponent:c,overrideItems:P,editUgcModalName:l}),"LinkPost"===p&&(w={parentProps:e,editComponent:null,overrideItems:P,onEdit:g}),e.isEmbedded)t=r(A,{object:e.object,actor:e.actor});else switch(e.objectEventType){case"onReview":t=r(O,{object:e.object,actor:e.actor});break;case"onFullReview":t=r(E,{object:e.object,actor:e.actor});break;case"onRoomTip":t=r(R,{object:e.object,actor:e.actor});break;case"onPhoto":t=r(M,{object:e.object,actor:e.actor});break;case"onFullPhoto":t=r(q,{object:e.object,actor:e.actor});break;case"onMediaBatch":t=r(F,{object:e.object,actor:e.actor,isEmbedded:e.isEmbedded});break;case"onVideo":t=r(u,{children:({route:t})=>r($,{objectProps:e,geoScope:parseInt(t.geo,10)})});break;case"onForumPost":t=r(z,{object:e.object,actor:e.actor});break;case"onLinkPost":t=r(u,{children:({route:t})=>r(U,{objectProps:e,geoScope:parseInt(t.geo,10)})});break;case"onRepost":t=r(B,{object:e.object,actor:e.actor});break;case"onTrip":t=r(u,{children:({route:t})=>r(x,{objectProps:e,geoScope:parseInt(t.geo,10)})});break;case"onLocationTopic":t=r(V,{object:e.object,actor:e.actor});break;case"onTopicPosting":t=r(H,{objectProps:e,overflowMenuProps:w});break;default:console.error("objectEventRender Error - object is required.")}return o("div",{className:T.member_event_block,children:[!e.isEmbedded&&e.renderAvatar&&r(f,{children:t=>r(s,{photo:e.actor?.avatar,display:"inline",target:"_self",href:I("onFullReview"===e.objectEventType?"Review":null,e.object,e.actor),withBorder:!0,onClick:r=>t(r,"userClick",{userId:e.actor?.userId}),size:b})}),o("div",{className:T.event_wrap,children:[e.renderMemberActions?r("div",{className:T.member_actions,children:!e.isEmbedded&&o(a,{children:[c,j&&r(W,{...w,overrideItems:P})]})}):r("div",{className:T.member_actions}),t]})]})},J={isEmbedded:!1,displayDate:""};return[()=>{Z.defaultProps={deleteObject:null,isEmbedded:!1,displayDate:"",renderMemberActions:!0,renderAvatar:!0},L.defaultProps=J,O.defaultProps=J,E.defaultProps=J,R.defaultProps=J,M.defaultProps=J,q.defaultProps=J,F.defaultProps=J,$.defaultProps=J,z.defaultProps=J,U.defaultProps=J,B.defaultProps=J,A.defaultProps=J,x.defaultProps=J,V.defaultProps=J,H.defaultProps=J,e("MemberEventOnObjectBlock",Z)},[e=>(r=e.jsx,o=e.jsxs,a=e.Fragment),e=>i=e.useRef,e=>(n=e.useLocalize,c=e.useIntlFormatter),e=>s=e.Avatar,e=>d=e.DeprecatedModalLink,e=>l=e.Opener,e=>m=e.Toaster,e=>(p=e.Link,u=e.RouteConsumer),e=>b=e.default,e=>_=e.displayUntagIcon,e=>h=e.EditMediaModal,e=>v=e.default,e=>j=e.escapeHtml,e=>f=e.InteractionLogger,e=>(P=e.ContentDisplayDate,g=e.getDisplayDate),e=>k=e.useLinkUploader,e=>w=e.useGARecordCallback,e=>y=e.SectionOverflowMenu,e=>(N=e.MemberHeaderStats,D=e.getDisplayName)]]},["21h32l","o4yt4q","7thqz4","dl4tf4","8m6oju","80hn7v","iw69pc","bvvaww","fkji80","zx93be","sqiy8q","j8lyt5","irfizf","yc8qq2","tqlciu","diutc6","32pwc7","shzb6i","z0kge0"]]);

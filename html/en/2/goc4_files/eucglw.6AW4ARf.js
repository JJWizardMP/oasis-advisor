(this.$WP=this.$WP||[]).push(["eucglw",(_,e)=>{var I,E,a,i,L,t,c=(_,e,I,E)=>{var a={...e};E&&0!==Object.keys(E).length&&Object.entries(E).forEach(([_,e])=>{a[_]=e});var i=a.compoundMediaId?a.compoundMediaId.id:a.mediaId||"",L=`${i}|${a?.providerName||""}${a?.providerName?"|":""}${a.albumId}|${a.categoryId}|${a.typeId}`,c=`${a.albumId}|${a.categoryId}|${a.typeId}`,r={module:"mediaviewer",action:_,value:a.locationId};switch(_){case t.MV_OPEN:I(r);break;case t.DETAIL_VIEW:I({...r,context:L});break;case t.GALLERY_VIEW:I({...r,context:a.isMWRedesign?L:c});break;case t.GALLERY_VIEW_PHOTOS_SEEN:I({...r,context:`${a.photosSeen||0}`});break;case t.DETAIL_VIEW_IMAGE_CLICK:I(r);break;case t.DETAIL_VIEW_DISMISS:I({...r,context:a.mvDetailViewCloseType});break;case t.DETAIL_VIEW_IMAGE_TAP_HIDE:I(a.isMWRedesign?{...r,context:a.detailsWereShown?"show":"hide"}:r);break;case t.DETAIL_VIEW_IMAGE_TAP_SHOW:case t.DETAIL_VIEW_GALLERY_CLICK:I(r);break;case t.DETAIL_VIEW_PHOTOSTRIP_TILE_CLICK:I({...r,context:L});break;case t.CLOSE_CLICK:I(r);break;case t.GALLERY_VIEW_THUMBNAIL_CLICK:I({...r,context:a.isMWRedesign?`${String(a.tileDetails?.offset)}|${String(a.tileDetails?.mode)}|${L}`:L});break;case t.GALLERY_VIEW_CATEGORY_CLICK:I({...r,context:`${a.categoryId}`});break;case t.GALLERY_VIEW_ALBUM_CLICK:I({...r,context:`${a.albumId}`});break;case t.GALLERY_VIEW_TYPE_CLICK:I({...r,context:`${a.typeId}`});break;case t.HELPFUL_VOTE_CLICK:I({...r,context:L});break;case t.IMAGE_ARROW_CLICK:case t.PHOTOSTRIP_ARROW_CLICK:I(r);break;case t.REPORT_PANEL_SHOWN:I({...r,module:"Report_IAP",context:"photo_whats_wrong_aef"});break;case t.CAPTION_REVIEW_CLICK:case t.DETAIL_VIEW_IMAGE_SWIPE:I(r);break;case t.DETAIL_VIEW_REVIEW_CLICK:I({...r,context:`${i}`});break;case t.DETAIL_VIEW_PANO_DETAIL:I({...r,context:a.panoWasOpened?"show":"hide"});break;case t.DETAIL_VIEW_REVIEW_SCROLL:case t.DETAIL_VIEW_REVIEW_TRAY_EXPANSION:case t.GALLERY_VIEW_SCROLL_ENGAGEMENT:I(r);break;case t.SOURCE_FILTER_CLICK:case t.SEE_ALL_FILTERS_CLICK:case t.HIDE_FILTERS_CLICK:case t.GRID_VIEW_CLICK:case t.FLEXGRID_VIEW_CLICK:I({...r,context:c});break;case t.GRID_VIEW_ITEM_CLICK:I({...r,context:L});break;case t.VIEW_GALLERY_BUTTON_CLICK:I({...r,context:c});break;case t.ADVANCED_FILTER_CLICK:I({...r,context:`${a.categoryId}`});break;case t.SORT_TYPE_CHANGE:a.sort&&I({...r,context:`${a.sort}`});break;default:console.error("Invalid page action provided: ",_)}},r=()=>{var _=E(L),e=i(),I=JSON.stringify(_);return a((_,E)=>c(_,JSON.parse(I),e,E),[I,e])},C=()=>{var _=i();return a((e,I,E)=>c(e,I,_,E),[_])};return[()=>{_({MVTrackingContext:L=I({albumId:101,categoryId:101,locationId:0,typeId:0}),trackedPageActions:t=Object.freeze({MV_OPEN:"mediaviwer_open",DETAIL_VIEW:"detail_view",GALLERY_VIEW:"grid_view",GALLERY_VIEW_PHOTOS_SEEN:"grid_view_photos_seen",DETAIL_VIEW_DISMISS:"detail_view_dismiss",DETAIL_VIEW_IMAGE_CLICK:"detail_view_desktop_image_click",DETAIL_VIEW_IMAGE_TAP_HIDE:"detail_view_hide_nav_click",DETAIL_VIEW_IMAGE_TAP_SHOW:"detail_view_show_nav_click",DETAIL_VIEW_GALLERY_CLICK:"detail_view_gallery_click",DETAIL_VIEW_PHOTOSTRIP_TILE_CLICK:"detail_view_photostrip_tile_click",CLOSE_CLICK:"mediaviewer_close_click",GALLERY_VIEW_THUMBNAIL_CLICK:"grid_view_thumbnail_click",GALLERY_VIEW_CATEGORY_CLICK:"grid_view_category_click",GALLERY_VIEW_ALBUM_CLICK:"grid_view_album_click",GALLERY_VIEW_TYPE_CLICK:"grid_view_type_click",HELPFUL_VOTE_CLICK:"helpful_vote_click",IMAGE_ARROW_CLICK:"detail_view_image_arrow_click",PHOTOSTRIP_ARROW_CLICK:"detail_view_photostrip_arrow_click",REPORT_PANEL_SHOWN:"Panel_Shown",CAPTION_REVIEW_CLICK:"detail_view_caption_review_click",DETAIL_VIEW_IMAGE_SWIPE:"detail_view_image_swipe_click",DETAIL_VIEW_REVIEW_CLICK:"detail_view_review_click",DETAIL_VIEW_PANO_DETAIL:"detail_view_pano_detail",DETAIL_VIEW_PHOTO_360_DETAIL:"detail_view_photo_360_detail",DETAIL_VIEW_REVIEW_SCROLL:"detail_view_review_scroll",DETAIL_VIEW_REVIEW_TRAY_EXPANSION:"detail_view_review_tray_expansion",GALLERY_VIEW_SCROLL_ENGAGEMENT:"grid_view_scroll_engagement",SOURCE_FILTER_CLICK:"mv_photos_from_source_with_count",SEE_ALL_FILTERS_CLICK:"mv_see_all_filters",HIDE_FILTERS_CLICK:"mv_hide_filters",ADVANCED_FILTER_CLICK:"mv_advanced_filter_applied",GRID_VIEW_CLICK:"mv_standard_grid_icon",FLEXGRID_VIEW_CLICK:"mv_flexgrid_icon",GRID_VIEW_ITEM_CLICK:"mv_standard_grid_view_thumbnail_click",VIEW_GALLERY_BUTTON_CLICK:"mv_view_gallery_from_detail_view",SORT_TYPE_CHANGE:"mv_photos_sort_change"}),useMVTracking:r,useMVTrackingWithoutContext:C})},[_=>(I=_.createContext,E=_.useContext,a=_.useCallback),_=>i=_.useGARecorder]]},["o4yt4q","32pwc7"]]);

(this.$WP=this.$WP||[]).push(["bhr54q",(e,t)=>{var o,d,n,i=e=>{var{imageSet:t,hovered:o,selected:d,visited:n}=e;return o&&d&&t.hoverSelected?t.hoverSelected:d&&t.selected?t.selected:o&&t.hovered?t.hovered:n&&t.visited?t.visited:t.inactive},r=e=>e.selected?n.markerSelected:e.hovered?n.markerHover:e.defaultZIndexOffset,a=e=>{var t=i(e);return o(d,{position:e.position,draggable:e.draggable,onDrag:e.onDrag,zIndexOffset:r(e),width:t.width,height:t.height,anchor:t.anchor,src:t.icon,animated:e.animated,onClick:e.onClick,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,trackingContext:e.trackingContext,children:e.children})};return[()=>{a.defaultProps={children:[],animated:!0,hovered:void 0,selected:void 0,visited:void 0,onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,defaultZIndexOffset:0,trackingContext:void 0},e({default:a,findActiveImage:i,findZIndex:r})},[e=>o=e.jsx,e=>d=e.IconMarker,e=>n=e.default]]},["21h32l","49c7br","g6hkol"]]);

(this.$WP=this.$WP||[]).push(["ja55rt",(t,o)=>{function e(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var i,n,s,r,a,p,d,l,g=20,u=(t,o,e,i)=>{var{position:n}=window.getComputedStyle(document.body),{top:s,left:r}=document.body&&document.body.getBoundingClientRect()||{},a="static"!==n,{clientHeight:p=0,clientWidth:d=0}="undefined"!=typeof document&&(a?document.body:document.documentElement)||{},{innerHeight:l=0,innerWidth:g=0}=window;return"right"===t&&("right"===o||"left"===o)?i?Math.min(g,d)-e:d+(a?r:0)-e:"bottom"===t&&("top"===o||"bottom"===o)?i?Math.max(p,l)-e:p+(a?s:0)-e:"left"===t?(a?window.pageXOffset-r:0)+e:"top"===t?(a?window.pageYOffset-s:0)+e:e},h=(t,o,e,i,n,s=g)=>{var r=t.getBoundingClientRect(),{pageXOffset:a=0,pageYOffset:p=0}=window||{},d={top:r.top+(i?0:p),left:r.left+(i?0:a),right:r.right+(i?0:a),bottom:r.bottom+(i?0:p)},l={position:i?"fixed":"absolute",[e]:`${u(e,o,d[o],i)}px`};return n&&"windowX"===n?(l.left=`${s??g}px`,l.right=`${s??g}px`):n?l[n]=`${u(n,n,d[n],i)}px`:"top"===o||"bottom"===o?(l.left=`${d.left+r.width/2}px`,l.transform="translate(-50%)"):(l.top=`${d.top+r.height/2}px`,l.transform="translate(0,-50%)"),l},f=t=>"above"===t.position?h(t.target,"top","bottom",t.fixed,t.alignEdge,t.paddingX):"leftOf"===t.position?h(t.target,"left","right",t.fixed,t.alignEdge,t.paddingX):"rightOf"===t.position?h(t.target,"right","left",t.fixed,t.alignEdge,t.paddingX):h(t.target,"bottom","top",t.fixed,t.alignEdge,t.paddingX);return[()=>{l=[{property:"left",timing:250},{property:"top",timing:250}],d=class extends s{static getDerivedStateFromProps(t){return t.position?{position:f(t)}:null}render(){return this.state&&null!==this.state.position?i(p,{close:this.props.close,autoFocus:this.props.autoFocus,position:this.state.position,transitionProperties:this.props.animated?l:[],overlayType:this.props.overlayType,children:[this.props.children,n(r,{callback:this.setPosition,throttle:100}),this.props.isUpdatedOnScroll&&n(a,{callback:this.setPosition,throttle:5,useCapture:!0})]}):null}constructor(t){super(t),e(this,"setPosition",()=>{this.setState({position:f(this.props)})}),this.state={position:f(t)}}},e(d,"defaultProps",{alignEdge:void 0,fixed:!1,animated:!1,overlayType:"modal"}),t({WindowPadding:g,default:d,getPosition:h,getPositionForProps:f})},[t=>(i=t.jsxs,n=t.jsx),t=>s=t.Component,t=>r=t.default,t=>a=t.default,t=>p=t.Overlay]]},["21h32l","o4yt4q","d6vj30","w1vb4i","79a2um"]]);

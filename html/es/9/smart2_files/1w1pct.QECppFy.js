(this.$WP=this.$WP||[]).push(["1w1pct",(t,e)=>{function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a,r,s={html:{mime:"text/html",default:"",parse:t=>t.text()},json:{mime:"application/json",default:{},parse:t=>t.json()}},o=t=>Object.keys(t).map(e=>`${encodeURIComponent(e)}=${null==t[e]?"":encodeURIComponent(t[e].toString())}`).join("&");return[()=>{t("AjaxRequest$1",r=class extends a{componentDidMount(){var{url:t,responseType:e="html"}=this.props;fetch(t,{method:"GET",credentials:"same-origin",headers:{Accept:s[e].mime}}).then(t=>{if(!t.ok)throw Error(t.statusText);return s[e].parse(t)}).then(t=>{this.setState({loading:!1,data:t})}).catch(()=>{this.setState({loading:!1,data:s[e].default})})}render(){var{loading:t,data:e}=this.state,{responseType:n="html"}=this.props,a=null===e?s[n].default:e;return this.props.children({loading:t,data:a})}constructor(...t){super(...t),n(this,"state",{loading:!0,data:null})}}),n(r,"defaultProps",{responseType:"html"}),t({AjaxRequest:r,formEncode:o})},[t=>a=t.Component]]},["o4yt4q"]]);
(this.$WP=this.$WP||[]).push(["gppdva",(e,a)=>{var l,r,n,i,t,c,o,s,d,u,m,p,h={inputWrapper:"pyZKQ w u z",placeholderWrapper:"w",leftIcon:"UpHXv Vm X0 _S _H",searchIconHero:"RcfJl",inputElement:"UfnDM w Q",paddingForClear:"IiSKr",small:"VdUjX",error:"Otopy",medium:"aThUm",hero:"FWUfm",clearIcon:"mupWC Vm X0 _S _H",clearIconSmall:"MmzkE",clearIconMedium:"svxiJ",clearIconHero:"ZTUTr S7",disabled:"LwhHe"},f=(e,a)=>"small"===e?a?"input-01":"input-02":a?"input-04":"input-03",b=({leftIconClassName:e,localize:a,onClick:r,buttonType:n="button",variant:c="search",disabled:s,Icon:d})=>{switch(c){case"loading":return l("div",{className:e,children:l(o,{variant:"xsmall","aria-label":a.string("common_Loading")})});case"back":return l("button",{className:e,"aria-label":a.string("reg_back"),disabled:s,onClick:r,children:l(t,{size:20})});case"search":return l("button",{className:e,type:n,"aria-label":a.string("common_Search"),disabled:s,onClick:r,tabIndex:r?void 0:-1,children:d?l(d,{size:20}):l(i,{size:20})});default:return null}};return[()=>{m=n(function({loading:e=!1,onSearch:a,onBack:n,onChange:i=()=>{},onClear:t,searchButtonType:o="button",size:m="small",title:p,value:v="",error:g=!1,disabled:I=!1,Icon:C,placeholder:k,showPlaceholderWithContent:S,..._},z){var{localize:y}=s(),H=null!=p?p:y.string("common_Search"),W=u(h.leftIcon,{[h.searchIconHero]:"hero"===m}),q=u(h.inputWrapper,{[h.small]:"small"===m,[h.medium]:"medium"===m,[h.hero]:"hero"===m,[h.error]:g,[h.paddingForClear]:!!t}),N=u(h.clearIcon,{[h.clearIconSmall]:"small"===m,[h.clearIconMedium]:"medium"===m,[h.clearIconHero]:"hero"===m}),w=null!=t&&""!==v,x="search",U=a;null!=n&&"medium"===m&&(x="back",U=n);var j={leftIconClassName:W,localize:y,onClick:U,buttonType:o,variant:e?"loading":x,Icon:C},F=w?l("button",{className:N,type:"button","aria-label":y.string("trip_planner_clear"),disabled:I,onClick:t,children:l(c,{size:"hero"===m?24:20})}):null;return r("div",{className:u(q,I&&h.disabled),children:[l(b,{...j}),r("div",{className:h.placeholderWrapper,children:[S&&v&&k&&l(d,{variant:"supporting-02",children:k}),l(d,{variant:f(m,t),children:l("input",{..._,onChange:i,type:"search",className:h.inputElement,value:v,disabled:I,"aria-label":H,autoCapitalize:"none",placeholder:k,autoComplete:"chrome-off",autoCorrect:"off",spellCheck:"false",ref:z})})]}),F]})}),p=n(function(e,a){return l(m,{...e,ref:a})}),e({BaseSearchField:m,default:p})},[e=>(l=e.jsx,r=e.jsxs),e=>n=e.forwardRef,e=>i=e.default,e=>t=e.default,e=>c=e.default,e=>o=e.Spinner,e=>s=e.useLocalize,e=>d=e.default,e=>u=e.default]]},["21h32l","o4yt4q","qx89h8","7nq86i","qkjm8h","qndsds","7thqz4","essqvy","fkji80"]]);
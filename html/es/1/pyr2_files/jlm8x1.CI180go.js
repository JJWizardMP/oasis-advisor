(this.$WP=this.$WP||[]).push(["jlm8x1",(e,n)=>{var r,i,t,a,g={provider_img:"Ne d Vm",provider_noimg:"Ne Ch"},l={},s=(e,n,r)=>{var i=l[e];if(i)return i;var t=e.split("_")[0],a=(r,i)=>{var a=i.reduce((n,r)=>r===e?[e,n[1]]:r===t?[n[0],t]:n,[null,null]).reduce((e,n)=>e||n,null);return a?`${n}/img2/langs/${a}/${r}`:`${n}/img2/${r}`};return i=[{id:3,name:"Language Weaver",attributionImg:a("branding/partners/SDL.gif",["nl","ko","iw","in","zh_TW","vi","es","sv","ja","ar","fr","tr","pt","de","pl","it","da","no","zh","th","el","ru"])},{id:4,name:"Language Weaver/TA Edited"},{id:5,name:"Google",attributionImg:a("branding/partners/powered_by_google_translate.png",["nl","ko","iw","in","zh_TW","vi","sk","fi","es","sv","ja","ar","fr","tr","pt","de","pl","it","da","hu","no","cs","sr","zh","th","el","ru"])},{id:6,name:"MicroSoft",attributionText:r.string("mtprovider_attribution_microsoft")},{id:7,name:"ProMT",attributionText:r.string("mtprovider_attribution_promt")},{id:8,name:"AsiaOnline",attributionText:r.string("mtprovider_attribution_asiaonline_d49")}].reduce((e,n)=>(e[n.id]=n,e),{}),l[e]=i,i},o=({providerId:e,locale:n,cdnPrefix:t})=>{var{localize:l}=a(),o=s(n,t,l)[e||0];return o?r("span",{className:o.attributionImg?g.provider_img:g.provider_noimg,children:[o.attributionText&&i("span",{dangerouslySetInnerHTML:{__html:o.attributionText}}),o.attributionImg&&i("img",{src:o.attributionImg,alt:o.name})]}):null},_=(e,n)=>`${e.replace(/-or\d+/,"").replace(/(-d\d+(-Reviews)?)/,n>0?`$1-or${n}`:"$1").replace(/.html/,"").substring(0,125)}.html`,u=e=>({en:e.string("language_english_ffffe66c"),fr:e.string("language_french_ffffe66c"),es:e.string("language_spanish_ffffe66c"),de:e.string("language_german_ffffe66c"),it:e.string("language_italian_ffffe66c"),ja:e.string("language_japanese_ffffe66c"),zhCN:e.string("Chinese_sim"),zhTW:e.string("Chinese_trad"),sv:e.string("language_swedish_ffffe66c"),nl:e.string("language_dutch_ffffe66c"),pt:e.string("language_portugese_ffffe66c"),tr:e.string("language_turkish_13a4"),da:e.string("cds_langname_da_159b"),no:e.string("locale_no"),pl:e.string("locale_pl"),th:e.string("locale_th"),ko:e.string("locale_ko"),ru:e.string("locale_ru"),el:e.string("locale_el"),in:e.string("locale_id"),ar:e.string("locale_ar"),vi:e.string("language_vietnamese_fffffd37"),cs:e.string("language_czech"),sk:e.string("locale_sk"),sr:e.string("locale_sr"),iw:e.string("language_hebrew"),fi:e.string("locale_fi"),hu:e.string("locale_hu"),uk:e.string("locale_uk")}),f={zh:"zhCN",zh_CN:"zhCN",zh_HK:"zhTW",zh_TW:"zhTW"},c=e=>{var n=e||"en";return f[n]||n.split("_")[0]||"en"},d=e=>e&&e.i18n&&e.i18n.locale||"en_US",h=e=>c(d(e));return[()=>{e({MTProviderLogo:t((e,n)=>({...n,locale:e.i18n.locale||"",cdnPrefix:e.meta.imageCdnUrl||""}))(o),contentLangFromState:h,getLanguageNames:u,getReviewsUrl:_})},[e=>(r=e.jsxs,i=e.jsx),e=>t=e.connect,e=>a=e.useLocalize]]},["21h32l","2mj4nv","7thqz4"]]);
(this.$WP=this.$WP||[]).push(["46822j",(e,a)=>{var t,s,d={mod:0,modSet:[]},o=e=>{var{page:a,params:o}=t(),m=s(),r=new Map(Object.entries(o));if(!e.isEnabled||e.locales?.length&&!e.locales.includes(m)||e.pages?.length&&!e.pages.includes(a))return!1;var u=d;e.modDataMap&&e.modDataMap.has(m)?u=e.modDataMap.get(m):e.modData&&(u=e.modData);var l=Number(r.get(e.param));return!!u&&u.mod>0&&l>0&&!!u.modSet&&u.modSet.includes(l%u.mod)};return[()=>{e("useModTest",o)},[e=>t=e.useRoute,e=>s=e.useLocale]]},["fgwvq1","7thqz4"]]);
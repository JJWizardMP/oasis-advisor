(this.$WP=this.$WP||[]).push(["dl4tf4",(a,e)=>{var l,t,i,r,o,n,s,d,c,h={avatar:"kjIqZ I",fallbackIcon:"KBVhr j u _Z w"},m={"xtra-small":24,small:32,default:42,large:72,"xtra-large":120},g=(a,e)=>0===a.indexOf("http://")||0===a.indexOf("https://")?a:e?e+a:a,u=(a,e="default")=>{var l=m[e],t=null;if(a&&a.photoSizes&&a.photoSizes.length>0){var i=a.photoSizes.find(a=>a.width>=l?a.url:null);t=i?i.url:a.photoSizes[a.photoSizes.length-1].url}return t},f=(a,e,t)=>t?l("img",{src:a,alt:e}):l(d,{src:a,alt:e}),p=({photoUrl:a,size:e="default",imgCdnUrl:r,icon:o,alt:n,notLazy:d})=>t(i,{children:[a?f(g(a,r),n||"",d):l("div",{className:h.fallbackIcon,children:l(s,{size:m[e]})}),o&&l("div",{className:o})]}),v=a=>l(n,{className:a.className,href:a.href,target:a.target,mobileTarget:a.mobileTarget,onClick:a.onClick,children:l(p,{photoUrl:a.photoUrl,imgCdnUrl:a.imgCdnUrl,icon:a.icon,size:a.size,alt:a.alt,notLazy:a.notLazy})});function z(a){var e,{photo:t,photoUrl:i,imgCdnUrl:o,viewportCategory:n,icon:s,size:d,tabletSize:c,desktopSize:m,widescreenSize:g,display:f,href:z,onClick:C,alt:U}=a,k=a.withBorder?"ui_social_avatar":"ui_avatar",w="default"!==a.size&&a.size,b=c?`${c}-tablet`:null,y=m?`${m}-desktop`:null,L=g?`${g}-widescreen`:null,T=r(h.avatar,k,w,b,y,L,f,a.className);e="DESKTOP"===n?m||c||d:"TABLET"===n&&c||d;var N=t?u(t,e):i;return z?l(v,{photoUrl:N,imgCdnUrl:a.imgCdnUrl,icon:a.icon,size:d,href:a.href,target:a.target,mobileTarget:a.mobileTarget,onClick:a.onClick,alt:a.alt,className:T,withBorder:a.withBorder,notLazy:a.notLazy}):l("span",{className:T,onClick:C,children:l(p,{photoUrl:N,imgCdnUrl:o,icon:s,size:d,alt:U,notLazy:a.notLazy})})}return[()=>{c={className:void 0,photo:void 0,icon:null,size:"default",tabletSize:void 0,desktopSize:void 0,widescreenSize:void 0,display:null,href:"",target:"_blank",mobileTarget:void 0,onClick:void 0,imgCdnUrl:"",alt:"",withBorder:!1,notLazy:!1},v.defaultProps={photoUrl:null,icon:c.icon,className:c.className,href:c.href,target:c.target,onClick:c.onClick,imgCdnUrl:c.imgCdnUrl,alt:c.alt,withBorder:c.withBorder,mobileTarget:c.mobileTarget},p.defaultProps={photoUrl:v.defaultProps.photoUrl,imgCdnUrl:c.imgCdnUrl,icon:c.icon,alt:c.alt,notLazy:c.notLazy},z.defaultProps=c,a("Avatar",o(a=>({imgCdnUrl:a.meta.imageCdnUrl,viewportCategory:a.meta.device.viewportCategory??""}))(z))},[a=>(l=a.jsx,t=a.jsxs,i=a.Fragment),a=>r=a.default,a=>o=a.connect,a=>n=a.ResponsiveTargetLink,a=>s=a.default,a=>d=a.LazyImage]]},["21h32l","fkji80","2mj4nv","bvvaww","j56vim","76j3t0"]]);

(this.$WP=this.$WP||[]).push(["tm6ey6",(e,t)=>{var n,o,r,s,u,i,a,d,l,m={__key:0xb4b198a675e,id:"0b4b198a675ed0b0",loc:{},definitions:[]},c=()=>{var e=u();o(()=>{var t=d.get("eupubconsent-v2")||null;e.query(m,{request:[{tcfString:t}]},{requestPolicy:"network-only"}).toPromise().then(({data:e})=>{if(e&&e?.UserIdentityIntegration_getAmazonUserToken?.[0]){var{cookieExpiry:t,AIPToken:n}=e.UserIdentityIntegration_getAmazonUserToken[0];if("undefined"!=typeof document&&t&&n){var o=new Date(t);document.cookie=`AMZN-Token=${n}; expires=${o}; Secure; SameSite=None;`}}})},[e])},f=()=>(c(),null),y=()=>{var[e,t]=r(!0),u=l(),m=s(),c=i(a.TARGETING);return(o(()=>{t(!!d.get("AMZN-Token"))},[]),u&&m&&c&&!e)?n(f,{}):null};return[()=>{e({default:y,useAmazonAPS:c})},[e=>n=e.jsx,e=>(o=e.useEffect,r=e.useState),e=>s=e.useUserId,e=>u=e.useClient,e=>(i=e.useConsent,a=e.CategoriesEnum),e=>d=e.default,e=>l=e.useAmazonTest]]},["21h32l","o4yt4q","52far5","mqwhqn","973cci","5gpqhx","nexzid"]]);

(this.$WP=this.$WP||[]).push(["c3xckd",(e,t)=>{var r="abcdefghijklmnopqrstufwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@-",a=e=>{if(4!==e.length)throw Error("PUID prefix needs to be length 4 exactly");for(var t=e,a=0;a<20;a++)t+=r[Math.floor(Math.random()*r.length)];return t},n=()=>a("LIT@"),i=()=>a("BIZ@"),o=()=>Math.floor(4294967296*Math.random()).toString(16).padStart(8,"0"),l=()=>(o()+o()+o()+o()).toUpperCase(),h=e=>null!=e&&/[A-F0-9]{32}/.test(e)?e:null;return[()=>{e({generateB2bPuid:i,generateLithiumPuid:n,generatePuid:a,generateSessionGuid:l,validSessionIdOrNull:h})},[]]},[]]);

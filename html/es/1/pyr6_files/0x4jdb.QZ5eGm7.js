(this.$WP=this.$WP||[]).push(["0x4jdb",(t,n)=>{var i,e,u,d,s,h,a={__key:0xb97bb2b565ce,id:"b97bb2b565ce8297",loc:{},definitions:[]},o=t=>{var n=t?.FraudInAuthProxy_getInAuthConfig;return n?{inAuthEnabled:n.inAuthEnabled,inAuthHost:n.inAuthHost,inAuthSiteKey:n.inAuthSiteKey,transactionId:s(),inAuthClientId:n.inAuthClientId,inAuthScriptHost:n.inAuthScriptHost}:null},r=()=>{var[{fetching:t,data:n}]=d({query:a});return i(()=>t||!n?null:o(n),[t,n])},c=({onSuccess:t,onError:n,onSubmit:i,config:e})=>{if(e.inAuthEnabled&&e.inAuthScriptHost&&e.inAuthClientId&&e.transactionId){var{inAuthScriptHost:d="",inAuthClientId:s="",transactionId:h=""}=e;u(`https://${d}/cdn/cs/${s}.js`,"payments",{dvct:"500",id:"bcn",dvc:"a",dvci:h}).then(()=>{var e=window._bcn;if(void 0!==e){var{dvc:u}=e;void 0!==u&&e.dvc.setSubmissionCallback(()=>{var i,e,u,d,s,h,a=window._bcn,{dvc:o}=a;void 0!==o?(i=a.dvc.getTID(),e=a.getToken(),u=a.getSessionId(),d=a.getUbaSessionId(),s=a.getPageId(),h=a.getEvents(),t&&t(i,{inAuthTransactionId:u,inAuthSessionId:i,inAuthUBAId:e,inAuthUBASessionId:d,inAuthUBAEvents:h,inAuthPageId:s})):n&&n("dvc not defined")}),i&&i()}}).catch(t=>{n&&n(t)})}},A=()=>{var t=h();return e((n,i,e)=>{t&&c({onSuccess:n,onError:i,onSubmit:e,config:t})},[t])};return[()=>{h=r,t("useInAuth",A)},[t=>(i=t.useMemo,e=t.useCallback),t=>u=t.importScript,t=>d=t.useQuery,t=>s=t.uuid]]},["o4yt4q","q7wvkq","mqwhqn","eww825"]]);

require(['ta/rollupAmdShim'], function(rollupAmdShim) {rollupAmdShim.install(["ta/common/behavior/specialOfferAjaxAction"],[]);});
if(window.requirejs && requirejs.taConfig)requirejs.taConfig({"deferred":{},"name":"build/concat/hr_special_offers","files":{"js3":{"src":{"ta":{"common":{"behavior":{"specialOfferAjaxAction":1}}}}}},"_":{"baseUrl":"/"}});
define("ta/common/behavior/specialOfferAjaxAction",["ta/util/Cookie","ta/Core/TA.Event","ta/util/Error"],function(e,o,n){function t(){var t=e.readRaw("ajaxAction");if(t){if(t=decodeURIComponent(t).split("|"),/^target:(\/[\w\d_-]+)/.test(t[0])){if(0!==window.location.pathname.indexOf(RegExp.$1))return;t=t.slice(1)}e.remove("ajaxAction","/",window.cookieDomain);try{var a=t.slice(1);a.unshift({}),a.unshift(t[0]),o.run.apply(null,a)}catch(e){n.record(e,"ajaxAction",null,{funcName:t[0]})}}}return o.queueForLoad(t,1,"checkForAjaxAction"),{}});

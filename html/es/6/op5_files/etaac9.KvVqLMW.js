(this.$WP=this.$WP||[]).push(["etaac9",(t,e)=>{var a,s,r,l,i,n,u,h,o,c,d,D,g,v,p,f,m,y,I,R,k,A=()=>r(g);function C(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function O(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function $(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function T(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var P=(t,e)=>(null===t?null:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`)===(null===e?null:`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`),b={CUR:(t,e)=>({currency:e}),HD:(t,e)=>{var a=e.split(".");if(a.length<2)return null;var s=h(a[0]),r=h(a[1]);return null===s||null===r?null:{key:"HD",checkIn:s,checkOut:r,pageLocationId:a.length>2&&parseInt(a[2],10)||null}},HDD:(t,e)=>{var a=e.split(".");if(a.length<2)return null;var s=h(a[0]),r=h(a[1]);return null===s||null===r?null:{key:"HDD",checkIn:s,checkOut:r,attemptedToUpdateDefaultDates:a.length>2&&"1"===a[2]}},HC:()=>({key:"HC"}),G:(t,e)=>{var a=e.split("."),s=parseInt(a[0],10),r=parseInt(a[1],10);return a.length<2?null:{key:"G",adults:0===s?0:s||2,rooms:0===r?0:r||1,pageLocationId:a.length>2&&parseInt(a[2],10)||null,childAgesPerRoom:a.length>3?o(a[3]):[]}},CG:()=>({key:"CG"}),LD:(t,e)=>{var a=e.split(".");return a.length<6?null:{key:"LD",arrivalYear:parseInt(a[0],10)||0,arrivalMonth:parseInt(a[1],10)||0,arrivalDay:parseInt(a[2],10)||0,departureYear:parseInt(a[3],10)||0,departureMonth:parseInt(a[4],10)||0,departureDay:parseInt(a[5],10)||0}},LG:(t,e)=>{var a=e.split(".");return a.length<3?null:{key:"LG",adults:parseInt(a[0],10)||0,rooms:parseInt(a[1],10)||0,childAgesPerRoom:a.length>3?o(a[3]):[]}},VPD:(t,e)=>{var a=e.split(".");if(a.length<2)return null;var s=h(a[0]),r=h(a[1]);return null===s||null===r?null:{key:"VPD",departureDate:s,returnDate:r}},HMD:(t,e)=>{var a=e.split(".");if(a.length<4)return null;var s=h(a[0]),r=h(a[1]);return null===s||null===r?null:{key:"HMD",checkIn:s,checkOut:r,fuzzyDates:"true"===a[2],defaultDates:"true"===a[3],geoId:a.length>4&&parseInt(a[4],10)||1,currentGeoId:a.length>5&&parseInt(a[5],10)||1}},VPRG:(t,e)=>{var a=e.split(".");if(a.length<2)return null;var s=parseInt(a[0],10),r=parseInt(a[1],10);return{key:"VPRG",rooms:0===s?0:s||1,adults:0===r?0:r||2,childAgesPerRoom:a.length>2?o(a[2]):[]}},AC:()=>({key:"AC"}),ARC:()=>({key:"ARC"}),AD:(t,e)=>{var a=e.split(".");return{key:"AD",tourDate:h(a[0]),locationId:a.length>1&&parseInt(a[1],10)||null}},ADD:(t,e)=>({key:"ADD",tourDate:h(e.split(".")[0])||null}),ARD:(t,e)=>{var a=e.split(".");return a.length<2?null:{key:"ARD",fromDate:h(a[0]),toDate:h(a[1]),locationId:a.length>2&&parseInt(a[2],10)||null}},ARDD:(t,e)=>{var a=e.split(".");return a.length<2?null:{key:"ARDD",fromDate:h(a[0]),toDate:h(a[1])}},APAX:(t,e)=>{var a=e.split(".");return a.length<2?null:{key:"APAX",adults:parseInt(a[0],10)||2,children:parseInt(a[1],10)||0}},RC:()=>({key:"RC"}),RD:(t,e)=>{var a=e.split(".");return{key:"RD",date:h(a[0]),locationId:a.length>1&&parseInt(a[1],10)||null}},RDD:(t,e)=>{var a=h(e.split(".")[0]);return null===a?null:{key:"RDD",date:a}},RT:(t,e)=>null==e?null:{key:"RT",time:e},RG:(t,e)=>{var a=parseInt(e,10)||null;return null==a?null:{key:"RG",guests:a}},RTD:(t,e)=>{var a=e.split("."),s=h(a[0]),r=h(a[1]);return null===s||null===r?null:{key:"RTD",departureDate:s,returnDate:r}},OWD:(t,e)=>{var a=h(e.split(".")[0]);return null===a?null:{key:"OWD",date:a}},FO:(t,e)=>({key:"FO",airportCode:e}),FD:(t,e)=>({key:"FD",airportCode:e}),FT:(t,e)=>{for(var a=e.split("."),s=parseInt(a[0],10)||0,r=parseInt(a[1],10)||0,l=[],i=0,n=2;n<a.length;n++){var u=a[n];if(u.startsWith("CS")){var h=parseInt(u.substring(2),10);i=h>=0?h:0}else{var o=parseInt(u,10);o>=0&&l.push(o)}}return{key:"FT",adults:s,seniors:r,childAges:l,cosIndex:i}},VRD:(t,e)=>{var a=e.split(".");if(a.length<2)return null;var s=h(a[0]),r=h(a[1]);return null===s||null===r?null:{key:"VRD",checkInDate:s,checkOutDate:r}},VRC:()=>({key:"VRC"}),VRG:(t,e)=>{var a=e.split(".");return a.length<2?null:{key:"VRG",adults:parseInt(a[0],10)||2,children:parseInt(a[1],10)||0}},VRCG:()=>({key:"VRCG"})};function w(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var M=(t,e)=>(null===t?null:`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`)===(null===e?null:`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`);function G(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var S=t=>t&&t.split("*").map(t=>{var e=t.split("-");return e.length<2?null:e.length<=3?e:[e[0],e[1],e.slice(2).join("-")]}).filter(Boolean)||[],Y=t=>decodeURIComponent(t.startsWith("%1%")?t.substring(3):t),F=()=>{var t="undefined"!=typeof document&&document.cookie,e=t&&t.match(/(?:^| )TAUD=([^;]+)/);return e&&e[1]?Y(e[1]):null},_=t=>{var e=F();t(t=>({...t,...new D(S(e)).getTravelInfoData()}))},V=t=>{var e=(...e)=>{var a=e.map(t=>`${t.arg}=${t.value}`).join("&");k.current=k.current.then(()=>fetch(`/UpdateSessionDatesAjax?${a}`,{credentials:"same-origin"}).then(()=>{requestIdleCallback(()=>_(t))}))},a=(t,a)=>{e({arg:t,value:`${a}`})};return{preferences:{setCurrency:e=>{a("zuc",e),t(t=>({...t,preferences:{userSelectedCurrencyOverride:e}}))}},attractions:{setSingleDate:e=>{a("attrdate",null===e?"_":c(e)),t(t=>({...t,attractions:{...t.attractions,singleDate:e}}))},setDates:(e,s)=>{a("attrrange",`${c(e)}_${c(s)}`),t(t=>({...t,attractions:{...t.attractions,fromDate:e,toDate:s}}))},setPassengers:(e,s)=>{a("zuf",`${e}_${s}`),t(t=>({...t,attractions:{...t.attractions,adults:e,children:s}}))}},restaurants:{setDate:e=>{a("eaterydate",null===e?"_":c(e)),t(t=>({...t,restaurants:{...t.restaurants,date:e}}))},setGuests:e=>{a("eateryguests",null===e?"-1":e),t(t=>({...t,restaurants:{...t.restaurants,guests:e}}))},setTime:(e,s)=>{a("eaterytime",`${e}_${s}`),t(t=>({...t,restaurants:{...t.restaurants,time:{hour:e,minute:s}}}))},setTravelInfo:(a,s,r)=>{e({arg:"eaterydate",value:null===a?"_":c(a)},{arg:"eateryguests",value:null===r?"-1":`${r}`},{arg:"eaterytime",value:null===s?"_":`${s.hour}_${s.minute}`}),t(t=>({...t,restaurants:{...t.restaurants,date:a,guests:r,time:s}}))},clearAll:()=>{a("eateryclearall",""),t(t=>({...t,restaurants:{...t.restaurants,date:null,time:null,guests:null}}))}},hotels:{setStayDates:(e,s)=>{a("staydates",`${c(e)}_${c(s)}`),t(t=>({...t,hotels:{...t.hotels,checkInDate:e,checkOutDate:s}}))},setGuestInfo:(e,s,r)=>{a("uguests",`${s}_${e}${r.length>0?`_${r.map(t=>t.join(",")).join(":")}`:""}`),t(t=>({...t,hotels:{...t.hotels,adults:e,rooms:s,childAgesPerRoom:r,children:r.flat().length}}))},setTravelInfo:(a,s,r,l,i)=>{e({arg:"uguests",value:`${l}_${r}${i.length>0?`_${i.map(t=>t.join(",")).join(":")}`:""}`},{arg:"staydates",value:`${c(a)}_${c(s)}`}),t(t=>({...t,hotels:{...t.hotels,checkInDate:a,checkOutDate:s,defaultDates:!1,adults:r,rooms:l,childAgesPerRoom:i,children:i.flat().length}}))}},flights:{setOneWayDate:e=>{a("oneway",c(e)),t(t=>({...t,flights:{...t.flights,oneWayDate:e}}))},setRoundTripDates:(e,s)=>{a("rtdates",`${c(e)}_${c(s)}`),t(t=>({...t,flights:{...t.flights,departureDate:e,returnDate:s}}))},setOriginAirportCode:e=>{a("flightorig",e),t(t=>({...t,flights:{...t.flights,originAirportCode:e}}))},setDestinationAirportCode:e=>{a("flightdest",e),t(t=>({...t,flights:{...t.flights,destinationAirportCode:e}}))},setTravelerInfo:(e,s,r,l)=>{var i=0;switch(l){case"BUSINESS":i=1;break;case"FIRST":i=2;break;case"PREMIUM_ECONOMY":i=3;break;default:i=0}a("travelerinfo",`${e}_${s}_${i}${r.map(t=>`_${t}`).join("")}`),t(t=>({...t,flights:{...t.flights,adults:e,seniors:s,childAges:r,classOfService:l}}))}},vr:{setStayDates:(e,s)=>{a("staydates",`${c(e)}_${c(s)}`),t(t=>({...t,vr:{...t.vr,checkInDate:e,checkOutDate:s}}))},setGuestInfo:(e,s)=>{a("uguests",d(Math.ceil(e/4),e,[])),t(t=>({...t,vr:{...t.vr,adults:e,children:s}}))},setTravelInfo:(a,s,r,l)=>{e({arg:"uguests",value:d(Math.ceil(r/4),r,[])},{arg:"staydates",value:`${c(a)}_${c(s)}`}),t(t=>({...t,vr:{...t.vr,checkInDate:a,checkOutDate:s,adults:r,children:l}}))}}}},j=({taud:t,children:e})=>{var[s,r]=l(()=>new D(S(Y(t??""))).getTravelInfoData());i(()=>{var e=F();e!==Y(t??"")&&r(new D(S(e)).getTravelInfoData())},[t]);var u=n(()=>V(r),[]);return a(v,{value:n(()=>({...s,update:u}),[s,u]),children:e})};return[()=>{v=(g=s({preferences:{userSelectedCurrencyOverride:"USD"},attractions:{singleDate:null,toDate:null,fromDate:null,adults:null,children:null},restaurants:{date:null,guests:null,time:null},hotels:{checkInDate:new Date,checkOutDate:new Date,defaultDates:!0,rooms:0,adults:0,children:0,childAgesPerRoom:[]},flights:{oneWayDate:null,departureDate:null,returnDate:null,originAirportCode:null,destinationAirportCode:null,adults:1,seniors:0,childAges:[],classOfService:null},vr:{checkInDate:null,checkOutDate:null,adults:2,children:0},update:{preferences:{setCurrency:()=>void 0},attractions:{setSingleDate:()=>void 0,setDates:()=>void 0,setPassengers:()=>void 0},restaurants:{setDate:()=>void 0,setTime:()=>void 0,setGuests:()=>void 0,setTravelInfo:()=>void 0,clearAll:()=>void 0},hotels:{setStayDates:()=>void 0,setGuestInfo:()=>void 0,setTravelInfo:()=>void 0},flights:{setOneWayDate:()=>void 0,setRoundTripDates:()=>void 0,setOriginAirportCode:()=>void 0,setDestinationAirportCode:()=>void 0,setTravelerInfo:()=>void 0},vr:{setStayDates:()=>void 0,setGuestInfo:()=>void 0,setTravelInfo:()=>void 0}}})).Provider,p=class{CUR(t){this.currency=t.currency}constructor(){var t;(t="currency")in this?Object.defineProperty(this,t,{value:null,enumerable:!0,configurable:!0,writable:!0}):this[t]=null}},f=class{AC(t){this.fromDate=null,this.toDate=null,this.singleDate=null,this.clearedDate=!0}ARC(t){this.fromDate=null,this.toDate=null,this.singleDate=null,this.clearedDate=!0}AD(t){this.validateAndRecordSingleDate(t.tourDate)}ADD(t){null!==this.singleDate||this.clearedDate||this.validateAndRecordSingleDate(t.tourDate)}ARD(t){this.validateAndRecordRangeDates(t.fromDate,t.toDate)}ARDD(t){null!==this.fromDate||null!==this.toDate||this.clearedDate||this.validateAndRecordRangeDates(t.fromDate,t.toDate)}APAX(t){this.adults=t.adults,this.children=t.children}validateAndRecordSingleDate(t){null!==t&&!(t<this.today)&&(this.singleDate=t,(null===this.fromDate||null===this.toDate||this.singleDate<this.fromDate||this.singleDate>this.toDate)&&(this.fromDate=t,this.toDate=t))}validateAndRecordRangeDates(t,e){null==t||t<this.today||null==e||e<t||(this.fromDate=t,this.toDate=e,(null==this.singleDate||this.singleDate<t||this.singleDate>e)&&(this.singleDate=t),this.userSetRangeDates=!0)}constructor(){var t;C(this,"today",(t=new Date,new Date(t.getFullYear(),t.getMonth(),t.getDate()))),C(this,"clearedDate",!1),C(this,"userSetRangeDates",!1),C(this,"fromDate",null),C(this,"toDate",null),C(this,"singleDate",null),C(this,"adults",0),C(this,"children",0)}},m=class{RTD(t){this.validateAndRecordRoundTripDatesDate(t.departureDate,t.returnDate)}OWD(t){this.validateAndRecordOneWayDate(t.date)}FO(t){this.airportCodeRegExp.test(t.airportCode)&&(this.originAirportCode=t.airportCode)}FD(t){this.airportCodeRegExp.test(t.airportCode)&&(this.destinationAirportCode=t.airportCode)}FT(t){switch(this.adults=Math.max(0,t.adults),this.seniors=Math.max(0,t.seniors),this.childAges=t.childAges,this.adults||this.seniors||this.childAges?.length||(this.adults=1),t.cosIndex){case 1:this.classOfService="BUSINESS";break;case 2:this.classOfService="FIRST";break;case 3:this.classOfService="PREMIUM_ECONOMY";break;default:this.classOfService="ECONOMY"}}validateAndRecordOneWayDate(t){t&&(this.oneWayDate=this.keepDateInRange(t))}validateAndRecordRoundTripDatesDate(t,e){t&&e&&!(t>e)&&(this.departureDate=this.keepDateInRange(t),this.returnDate=this.keepDateInRange(e))}keepDateInRange(t){return t<this.today?this.today:t}constructor(){var t;O(this,"today",(t=new Date,new Date(t.getFullYear(),t.getMonth(),t.getDate()))),O(this,"airportCodeRegExp",RegExp("^[A-Z]{3}$")),O(this,"oneWayDate",new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate()+14)),O(this,"departureDate",this.oneWayDate),O(this,"returnDate",new Date(this.departureDate.getFullYear(),this.departureDate.getMonth(),this.departureDate.getDate()+7)),O(this,"originAirportCode",null),O(this,"destinationAirportCode",null),O(this,"adults",1),O(this,"seniors",0),O(this,"childAges",[]),O(this,"classOfService","ECONOMY")}},y=class{RC(t){this.date=null,this.time=null,this.guests=null}RD(t){this.validateAndRecordDate(t.date)}RT(t){this.time=u(t.time)}RG(t){this.guests=t.guests}validateAndRecordDate(t){null===t||t<this.today||(this.date=t)}constructor(){$(this,"today",new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())),$(this,"date",null),$(this,"time",null),$(this,"guests",null)}},I=class{HD(t){this.updateDates(t.checkIn,t.checkOut)&&(this.defaultDates=!1,this.userDates=!0)}HDD(t){this.updateDates(t.checkIn,t.checkOut)&&(this.defaultDates=!0,this.userDates=!1)}HC(t){this.clearDates()}G(t){this.rooms=t.rooms,this.adults=t.adults,this.childAgesPerRoom=t.childAgesPerRoom,this.sanitizeTravelerInfo()}CG(t){this.clearGuestsRooms()}LD(t){0===t.arrivalYear&&0===t.arrivalMonth&&0===t.arrivalDay&&0===t.departureYear&&0===t.departureMonth&&0===t.departureDay&&this.clearDates();var e=this.checkIn,a=this.checkOut,s=new Date(t.arrivalYear,t.arrivalMonth-1,t.arrivalDay),r=new Date(t.departureYear,t.departureMonth-1,t.departureDay);!this.updateDates(s,r)||P(this.checkIn,e)&&P(this.checkOut,a)||(this.defaultDates=!1)}LG(t){this.adults=t.adults,this.rooms=t.rooms,this.childAgesPerRoom=t.childAgesPerRoom,this.sanitizeTravelerInfo()}VPD(t){this.updateDates(t.departureDate,t.returnDate)&&(this.userDates=!0,this.defaultDates=!1)}HMD(t){!t.fuzzyDates&&!this.userDates&&this.updateDates(t.checkIn,t.checkOut)&&(this.userDates=!0,this.defaultDates=!1)}VPRG(t){this.rooms=t.rooms,this.adults=t.adults,this.childAgesPerRoom=t.childAgesPerRoom,this.sanitizeTravelerInfo()}sanitizeTravelerInfo(){var t=this.rooms||0,e=this.adults||0;t<1?t=1:t>8?t=8:e>4*t&&(t=(e+4-1)/4),e<1?e=2:e<t?e=t:e>4*t&&(e=4*t),this.rooms=t,this.adults=e}clearDates(){this.checkIn=null,this.checkOut=null,this.defaultDates=!1,this.userDates=!1}clearGuestsRooms(){this.rooms=1,this.adults=2,this.childAgesPerRoom=[]}updateDates(t,e){return t<this.today||e<=t?(this.clearDates(),!1):(this.checkIn=t,this.checkOut=e,!0)}constructor(){var t;T(this,"today",(t=new Date,new Date(t.getFullYear(),t.getMonth(),t.getDate()))),T(this,"checkIn",null),T(this,"checkOut",null),T(this,"userDates",!1),T(this,"defaultDates",!0),T(this,"rooms",1),T(this,"adults",2),T(this,"childAgesPerRoom",[])}},R=class{VRD(t){this.updateDates(t.checkInDate,t.checkOutDate)}VRC(t){this.clearDates()}VRG(t){this.adults=t.adults,this.children=t.children,this.sanitizeTravelerInfo()}VRCG(t){this.clearGuests()}LD(t){0===t.arrivalYear&&0===t.arrivalMonth&&0===t.arrivalDay&&0===t.departureYear&&0===t.departureMonth&&0===t.departureDay&&this.clearDates();var e=this.checkInDate,a=this.checkOutDate,s=new Date(t.arrivalYear,t.arrivalMonth-1,t.arrivalDay),r=new Date(t.departureYear,t.departureMonth-1,t.departureDay);!this.updateDates(s,r)||M(this.checkInDate,e)&&M(this.checkOutDate,a)||(this.defaultDates=!1)}LG(t){this.adults=t.adults,this.sanitizeTravelerInfo()}sanitizeTravelerInfo(){this.adults=this.adults||2,this.children=this.children||0}clearDates(){this.checkInDate=null,this.checkOutDate=null,this.userDates=!1}clearGuests(){this.adults=2,this.children=0}updateDates(t,e){return t<this.today||e<=t?(this.clearDates(),!1):(this.checkInDate=t,this.checkOutDate=e,!0)}constructor(){var t;w(this,"today",(t=new Date,new Date(t.getFullYear(),t.getMonth(),t.getDate()))),w(this,"checkInDate",null),w(this,"checkOutDate",null),w(this,"userDates",!1),w(this,"defaultDates",!1),w(this,"adults",2),w(this,"children",0)}},D=class{accumulate(t,e,a){var s=e;if(null===this.stamp?this.stamp=e:s+=this.stamp,t in b){var r=b[t](s,a);r&&Object.values(this.accumulators).forEach(e=>t in e&&e[t](r))}return this}getTravelInfoData(){var{checkIn:t}=this.accumulators.hotels,{checkOut:e}=this.accumulators.hotels,a=null==t||null==e?null:{checkInDate:t,checkOutDate:e,defaultDates:this.accumulators.hotels.defaultDates,rooms:this.accumulators.hotels.rooms,adults:this.accumulators.hotels.adults,children:this.accumulators.hotels.childAgesPerRoom.flat().length,childAgesPerRoom:this.accumulators.hotels.childAgesPerRoom};return{preferences:{userSelectedCurrencyOverride:this.accumulators.preferences.currency},attractions:{fromDate:this.accumulators.attractions.fromDate,toDate:this.accumulators.attractions.toDate,singleDate:this.accumulators.attractions.singleDate,adults:this.accumulators.attractions.adults,children:this.accumulators.attractions.children},restaurants:{date:this.accumulators.restaurants.date,time:this.accumulators.restaurants.time,guests:this.accumulators.restaurants.guests},flights:{oneWayDate:this.accumulators.flights.oneWayDate,departureDate:this.accumulators.flights.departureDate,returnDate:this.accumulators.flights.returnDate,originAirportCode:this.accumulators.flights.originAirportCode,destinationAirportCode:this.accumulators.flights.destinationAirportCode,adults:this.accumulators.flights.adults,seniors:this.accumulators.flights.seniors,childAges:this.accumulators.flights.childAges,classOfService:this.accumulators.flights.classOfService},vr:{checkInDate:this.accumulators.vr.checkInDate,checkOutDate:this.accumulators.vr.checkOutDate,adults:this.accumulators.vr.adults,children:this.accumulators.vr.children},hotels:a}}constructor(t){G(this,"accumulators",{preferences:new p,attractions:new f,restaurants:new y,flights:new m,hotels:new I,vr:new R}),G(this,"stamp",null),G(this,"records",void 0),this.records=t,t.forEach(([t,e,a])=>{t&&e&&this.accumulate(t,parseInt(e,10),a)})}},k={current:Promise.resolve()},t({LithiumTravelInfoProvider:j,TravelInfoContext:g,TravelInfoProvider:v,useTravelInfo:A})},[t=>a=t.jsx,t=>(s=t.createContext,r=t.useContext,l=t.useState,i=t.useEffect,n=t.useMemo),t=>(u=t.parseTime,h=t.parseDate,o=t.parseChildAgesPerRoom,c=t.serializeDate,d=t.serializeGuestInfo)]]},["21h32l","o4yt4q","bxkng5"]]);

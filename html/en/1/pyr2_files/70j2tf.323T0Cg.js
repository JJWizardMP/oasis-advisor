(this.$WP=this.$WP||[]).push(["70j2tf",(e,t)=>{var a,n,i,r,s,o,l,d,u,m,c,h,v,y,_,p=({content:e,icon:t,dataAttributes:i})=>a("div",{className:"nfyaF _W M",children:[n("span",{className:"eNwBI",children:n(t,{})}),n(d,{variant:"supporting-01",dataAttributes:i,children:e})]}),T={triggerText:"Wb",dayRow:"IRWIu k",dayText:"RAVKF",timeSection:"vxirE I",tooltipContents:"gTkad e Q2",timeText:"aAEJp I",modalContent:"qdrDn"},g=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],A=({hourOptions:e,dataAutomationPrefix:t})=>{var[p,A]=r(!1),{localize:D}=v(),f=m(),I=y();if(s(()=>{"MOBILE"!==f&&p&&A(!1)},[f,p]),!(e||[]).some(e=>e.timeIntervals?.length))return null;var N=e=>{var{hours:t,minutes:a}=e,n=new Date;return n.setHours(t||0),n.setMinutes(a||0),I.formatDate("time_12_24",n)},b=e=>{switch(e){case"MONDAY":return D("monday_52");case"TUESDAY":return D("tuesday_52");case"WEDNESDAY":return D("wednesday_52");case"THURSDAY":return D("thursday_52");case"FRIDAY":return D("friday_52");case"SATURDAY":return D("saturday_52");case"SUNDAY":return D("sunday_52");default:return""}},x=n(d,{variant:"supporting-01",dataAttributes:{"data-automation":`${t}_see_hours`},children:n("span",{className:T.triggerText,children:n(h,{id:"trips_v2_elements_see_hours"})})}),E=e=>e?n("div",{className:T.timeSection,children:e.openingTime&&e.closingTime&&n("div",{className:T.timeText,children:n(d,{variant:"body-01",dataAttributes:{"data-automation":`${t}_hours`},children:`${N(e.openingTime)} - ${N(e.closingTime)}`})},e?.openingTime.hours)}):n("div",{className:T.timeSection,children:n(d,{variant:"body-01",dataAttributes:{"data-automation":`${t}_closed_label`},children:n(h,{id:"trips_v2_elements_see_hours_closed"})})}),S=e=>n("div",{className:T.dayText,children:e?n(d,{variant:"body-01",dataAttributes:{"data-automation":`${t}_hours_day`},children:b(e)}):n("div",{})}),Y=[];g.forEach(t=>{var a=e?.find(e=>e.day===t);a?.timeIntervals?.length||Y.push({day:t,dayText:t,hours:null}),a?.timeIntervals?.forEach((e,a)=>{Y.push({day:t,dayText:0===a?t:null,hours:e})})});var $=n("div",{className:T.tooltipContents,children:Y.map((e,n)=>{var i=`${n} - ${e.day}`;return a("div",{className:T.dayRow,"data-automation":`${t}_hours_day_${e.day}_${n}`,children:[S(e.dayText),E(e.hours)]},i)})});return n(_,{icon:l,content:"MOBILE"!==f?n(u,{fitToContent:"expand",triggeringElement:x,content:$,variant:"top-caret",alignment:"left"}):a(i,{children:[n(o,{variant:"primary-small",onClick:()=>A(!0),dataAttributes:{"data-automation":`${t}_see_hours_button`},children:x}),p&&n(c,{slideFrom:"bottom",onClose:()=>A(!1),isOpen:p,bodyContentClass:T.modalContent,children:$})]})})},D=e=>e?.dailyTimeIntervals?.map(e=>({day:e?.day??null,timeIntervals:e?.timeIntervals?.map(e=>({openingTime:{hours:e?.openingTime?.hours??null,minutes:e?.openingTime?.minutes??null},closingTime:{hours:e?.closingTime?.hours??null,minutes:e?.closingTime?.minutes??null}})??null)??null}))??[];return[()=>{e({HoursDetail:A,IconDetail:_=p,convertToHourOptions:D})},[e=>(a=e.jsxs,n=e.jsx,i=e.Fragment),e=>(r=e.useState,s=e.useEffect),e=>o=e.BorderlessButton,e=>l=e.default,e=>d=e.default,e=>u=e.HoverTooltip,e=>m=e.useViewportCategory,e=>c=e.default,e=>(h=e.default,v=e.useLocalize,y=e.useIntlFormatter)]]},["21h32l","o4yt4q","jppfwt","w1yg77","essqvy","xm2jzo","ys6v1o","z2nh2s","7thqz4"]]);

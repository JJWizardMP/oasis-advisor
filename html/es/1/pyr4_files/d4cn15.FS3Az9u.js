(this.$WP=this.$WP||[]).push(["d4cn15",(e,i)=>{var n,a,t,c,l,r,o,s,d,h=({chipsData:e,onChange:i,disabled:d=!1,displayOptions:h,variant:u="input",...g})=>{var{scrollContainerProps:b,scrollButtonsProps:p}=s(48);return n("div",{className:t("_T",{UObru:h?.singleLineScrollMobile}),children:a("div",{className:t(c(g),{"vVcdb q f":h?.singleLineScroll,XCaFq:h?.singleLineScrollMobile,bSHRx:h?.lineLimit!=null}),style:{maxHeight:h?.lineLimit!=null?`${44*h.lineLimit}px`:void 0},...b,children:[e.map(e=>a("span",{children:["button"===u&&(null!=e.firstText&&null!=e.secondText&&null!=e.ariaLabel?n(l,{selected:!!e.active,disabled:d||!!e.disabled,onClick:n=>{i&&i(e.keyValue,!e.active,n)},"aria-label":e.ariaLabel,marginRight:"spacing-02",marginY:"spacing-01",firstText:e.firstText,firstIcon:e.firstIcon&&e.firstIcon,secondText:e.secondText,secondIcon:e.secondIcon&&e.secondIcon,thirdText:e.thirdText,thirdIcon:e.thirdIcon&&e.thirdIcon}):null!=e.chipContent&&n(l,{selected:!!e.active,disabled:d||!!e.disabled,onClick:n=>{i&&i(e.keyValue,!e.active,n)},"aria-label":e.ariaLabel,marginRight:"spacing-02",marginY:"spacing-01",icon:e.icon,iconPosition:e.iconPosition,children:e.chipContent})),"input"===u&&(null!=e.firstText&&null!=e.secondText&&null!=e.ariaLabel?n(r,{checked:!!e.active,disabled:d||!!e.disabled,onChange:e=>{i&&i(e.currentTarget.value,e.currentTarget.checked,e)},"aria-label":e.ariaLabel,value:e.keyValue,marginRight:"spacing-02",marginY:"spacing-01",firstText:e.firstText,firstIcon:e.firstIcon&&e.firstIcon,secondText:e.secondText,secondIcon:e.secondIcon&&e.secondIcon,thirdText:e.thirdText,thirdIcon:e.thirdIcon&&e.thirdIcon}):null!=e.chipContent&&n(r,{checked:!!e.active,disabled:d||!!e.disabled,onChange:e=>{i&&i(e.currentTarget.value,e.currentTarget.checked,e)},"aria-label":e.ariaLabel,value:e.keyValue,marginRight:"spacing-02",marginY:"spacing-01",icon:e.icon,iconPosition:e.iconPosition,children:e.chipContent}))]},e.keyValue)),n(o,{...p})]})})},u=({chipsData:e,selectedValue:i,...a})=>n(d,{chipsData:e.map(e=>({...e,active:e.keyValue===i})),...a}),g=({...e})=>n(d,{...e});return[()=>{d=h,e({MultiSelectChipBar:g,SingleSelectChipBar:u})},[e=>(n=e.jsx,a=e.jsxs),e=>(t=e.default,c=e.margin),e=>(l=e.ChipButton,r=e.ChipInput),e=>(o=e.default,s=e.useHorizontalScrollButtonsState)]]},["21h32l","gw8uw6","b1cljk","aa8hvr"]]);

(this.$WP=this.$WP||[]).push(["714tj5",(e,t)=>{var r,i,s,a,n={dropZone:"ZhCTm _S z",isDragOver:"EaIug"};function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=e=>{var t=e.lastIndexOf(".");if(!(t<0))return e.substring(t).toLowerCase()},p=(e,t,r)=>{if(r&&e.size>r)return"file_too_large";if(t){var i=l(e.name);if(!i||!t.includes(i))return"wrong_file_type"}},d=(e,t,r,i,s,a)=>{var n=p(e,r,i);n?s&&s(e,n):t(e,a)},h=(e,t,r,i,s)=>{if(e.dataTransfer.items)for(var a=0;a<e.dataTransfer.items.length;a++){var n=e.dataTransfer.items[a].getAsFile();n&&d(n,t,r,i,s,"drag_drop")}else for(var o=0;o<e.dataTransfer.files.length;o++){var l=e.dataTransfer.files[o];l&&d(l,t,r,i,s,"drag_drop")}},f=e=>{e.preventDefault()};return[()=>{e("DropZone",a=class extends s{componentDidMount(){this.props.disableOnDropForPage&&(window.addEventListener("dragover",f),window.addEventListener("drop",f))}componentWillUnmount(){this.props.disableOnDropForPage&&(window.removeEventListener("dragover",f),window.removeEventListener("drop",f))}constructor(e){super(e),o(this,"fileInputRef",null),o(this,"handleDragOver",e=>{e.preventDefault(),this.setState({isDragOver:!0})}),o(this,"handleDragLeave",e=>{e.preventDefault(),this.setState({isDragOver:!1})}),o(this,"handleDrop",e=>{e.preventDefault(),h(e,this.props.addFile,this.props.allowedFileTypes,this.props.maxSizeInBytes,this.props.fileRejected),this.setState({isDragOver:!1})}),o(this,"fileSelectionChanged",e=>{var t=e.target.files;t&&Array.from(t).forEach(e=>d(e,this.props.addFile,this.props.allowedFileTypes,this.props.maxSizeInBytes,this.props.fileRejected,"file_picker")),this.fileInputRef&&(this.fileInputRef.value="")}),o(this,"render",()=>{var e=this.props.allowMultipleSelection?{multiple:!0}:{};return r("div",{style:{width:this.props.width,height:this.props.height},className:`${n.dropZone} ${this.props.isDragOverOutsideComponent||this.state.isDragOver?n.isDragOver:""}`,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop,onClick:()=>this.fileInputRef?.click(),children:[i("input",{style:{display:"none"},type:"file",name:"media",accept:this.props.allowedFileTypes.join(","),...e,onChange:this.fileSelectionChanged,onClick:e=>e.stopPropagation(),ref:e=>{this.fileInputRef=e}}),this.props.children]})}),this.state={isDragOver:!1}}}),o(a,"defaultProps",{allowedFileTypes:["*"],allowMultipleSelection:!0,disableOnDropForPage:!0,isDragOverOutsideComponent:!1,width:"100%",height:"100%"}),e({DropZone:a,fileExtension:l,maxImageUploadSizeInBytes:15728640,maxImageUploadSizeInMB:15,maxVideoUploadSizeInBytes:524288e3,processFile:d,processFilesFromDrop:h})},[e=>(r=e.jsxs,i=e.jsx),e=>s=e.Component]]},["21h32l","o4yt4q"]]);
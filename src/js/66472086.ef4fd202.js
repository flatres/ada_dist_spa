(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["66472086"],{"01b0":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"06ef":function(e,t,n){"use strict";var a=n("8c7e"),o=n("01b0"),i=n("742b");n("fe99")("search",1,function(e,t,n,s){return[function(n){var a=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=s(n,e,this);if(t.done)return t.value;var l=a(e),r=String(this),d=l.lastIndex;o(d,0)||(l.lastIndex=0);var c=i(l,r);return o(l.lastIndex,d)||(l.lastIndex=d),null===c?-1:c.index}]})},"0b37":function(e,t,n){},"0e83":function(e,t,n){"use strict";var a=n("736a"),o=n.n(a);o.a},"736a":function(e,t,n){},"81a7":function(e,t,n){},c6aa:function(e,t,n){"use strict";var a=n("d151"),o=n.n(a);o.a},c733:function(e,t,n){"use strict";var a=n("0b37"),o=n.n(a);o.a},d151:function(e,t,n){},d612:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row crud-table"},[e.showTable?n("div",{staticClass:"col q-pr-sm",style:[e.maxWidth>0?{"max-width":e.maxWidth+"px",margin:"auto"}:""]},[e.title.length>0&&!e.isPopup?n("div",{staticClass:"row text-primary bg-dark q-py-xs q-px-sm uppercase"},[e._v(e._s(e.title))]):e._e(),n("q-table",{directives:[{name:"hotkey",rawName:"v-hotkey.once",value:{down:e.downTable,up:e.upTable},expression:"{'down': downTable, 'up': upTable}",modifiers:{once:!0}}],attrs:{"hide-header":e.hideHeader,data:e.filteredData,columns:e.columns,"row-key":e.rowKey,filter:e.searchTerm,"filter-method":e.searchFilter,dark:"",dense:"",stylex:"width:400px",selection:e.multiselect?"multiple":"none",selected:e.selected,pagination:e.pagination,separator:e.separator,classes:"no-shadow no-border bg-dark","hide-bottomx":e.modal,loading:e.loading},on:{"update:selected":function(t){e.selected=t},"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(t){return e.search||e.filterbox||e.fullscreen||e.download||e.canNew?n("div",{staticClass:"row flex-center fit no-padding",staticStyle:{"min-height":"30px"}},[n("div",{staticClass:"row flex-center fit"},[!0===e.filterbox?n("q-btn-dropdown",{staticClass:"q-mr-md action",attrs:{labelx:"Filter",size:"sm",icon:"fal fa-filter fa-sm",color:"primary",dense:""}},[n("q-list",{staticClass:"bg-menu"},e._l(e.columns,function(t){return!0===!t.hidden&&"options"===t.type?n("q-expansion-item",{key:t.name,attrs:{dark:"",group:"somegroup",icon:"explore",label:t.name}},[n("div",[n("q-list",{staticClass:"bg-menu",attrs:{link:""}},e._l(t.options,function(a){return n("q-item",{key:a.value,attrs:{clickable:""},nativeOn:{click:function(n){return e.setFilter(t.field,a.value)}}},[n("q-item-section",[n("q-item-label",{staticClass:"text-grey"},[e._v(e._s(a.label))])],1)],1)}),1)],1)]):e._e()}),1)],1):e._e(),e.search?e._e():n("q-space"),e.search?n("q-input",{directives:[{name:"hotkey",rawName:"v-hotkey.once",value:{"shift+s":e.focusSearch},expression:"{'shift+s': focusSearch}",modifiers:{once:!0}}],ref:"search",staticClass:"col q-mb-none",class:[!0===e.filterbox?"q-mx-lg":""],staticStyle:{"min-width":"200px"},attrs:{placeholder:"Search",clearable:"",dense:"","hide-underlines":"",dark:""},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}}):e._e(),n("div",{},[e.download?n("q-btn",{staticClass:"q-ml-md",attrs:{icon:"fal fa-download fa-xs",size:"md",dense:""}}):e._e(),e.fullscreen?n("q-btn",{staticClass:"q-ml-md text-secondary",attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}}):e._e(),e.canNew?n("q-btn",{directives:[{name:"hotkey",rawName:"v-hotkey.once",value:{"shift+n":e.triggerNewForm},expression:"{'shift+n': triggerNewForm}",modifiers:{once:!0}}],staticClass:"text-secondary new-button q-ml-md",attrs:{"icon-color":"secondary",icon:"fal fa-plus fa-xs",size:"md",dense:""},on:{click:e.triggerNewForm}}):e._e()],1)],1),n("div",{staticClass:"row full-width"},[n("div",{staticClass:"col"},e._l(e.columns,function(t){return"options"===t.type&&e.filters[t.field]&&e.filterchips?n("q-chip",{key:t.name,staticClass:"q-mr-xs",attrs:{"text-color":"dark",iconx:"alarm",color:"primary",dense:"",removable:""},on:{remove:function(n){e.filters[t.field]=null}}},[e._v("\n                "+e._s(e.getOptions(t.options,e.filters[t.field]))+"\n              ")]):e._e()}),1)])]):e._e()}},{key:"header",fn:function(t){return n("q-tr",{attrs:{props:t}},[e.multiselect?n("q-th",{staticClass:"no-border",attrs:{"auto-width":""}},[t.multipleSelect?n("q-checkbox",{staticStyle:{"padding-left":"4px"},attrs:{dense:"",dark:"","indeterminate-value":"some"},model:{value:t.selected,callback:function(n){e.$set(t,"selected",n)},expression:"props.selected"}}):e._e()],1):e._e(),e.expand&&e.details?n("q-th",{staticClass:"no-border",attrs:{"auto-width":""}}):e._e(),e._l(t.cols,function(a){return!0===!a.hidden?n("q-th",{key:a.name,attrs:{props:t}},["options"===a.type&&!0===a.filter?n("q-btn",{staticClass:"no-border no-shadow",attrs:{icon:"fal fa-filter",size:"xs",dense:"","text-color":"primary"},on:{click:function(e){e.stopPropagation()}}},[n("q-menu",{staticClass:"bg-dark",attrs:{dark:""}},[n("q-list",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],staticClass:"bg-dark",attrs:{dense:"",dark:"",link:""}},e._l(a.options,function(t){return n("q-item",{key:t.value,attrs:{dark:"",clickable:"",sparse:""},nativeOn:{click:function(n){return e.setFilter(a.field,t.value)}}},[n("q-item-section",[n("q-item-label",{staticClass:"text-grey"},[e._v(e._s(t.label))])],1)],1)}),1)],1)],1):e._e(),e._v("\n          "+e._s(a.label)+"\n        ")],1):e._e()})],2)}},{key:"top-row",fn:function(t){return e.selected.length>1?n("q-tr",{staticStyle:{height:"30px"}},[n("q-td",{staticClass:"bg-dark q-mt-md",staticStyle:{height:"30px"},attrs:{colspan:"100%"}},[n("q-btn",{staticClass:"action",attrs:{label:"delete",size:"md",dense:""}})],1)],1):e._e()}},{key:"body",fn:function(t){return[n("q-tr",{class:[!0===t.row[e.indicator]||"1"==t.row[e.indicator]?"indicatedRow":"normalRow",t.row[e.rowKey]===e.expandedRowId?"expanded":""],attrs:{props:t},nativeOn:{click:function(n){return e.clickRow(t)}}},[e.multiselect?n("q-td",{attrs:{"auto-width":""}},[n("q-checkbox",{attrs:{dense:"",dark:"",color:"primary"},model:{value:t.selected,callback:function(n){e.$set(t,"selected",n)},expression:"props.selected"}})],1):e._e(),e.expand&&e.details?n("q-td",{attrs:{"auto-width":""}},[n("q-icon",{attrs:{name:t.row[e.rowKey]===e.expandedRowId?"fal fa-chevron-down":"fal fa-chevron-right"}})],1):e._e(),e._l(e.columns,function(a,o){return!0===!a.hidden?n("q-td",{key:a.name,attrs:{props:t,stylex:"border-right:1px solid grey"}},[-1===o?n("q-btn",{staticClass:"no-border",attrs:{flat:"",round:"",dense:"",icon:"delete"},nativeOn:{click:function(n){return e.deleteItem(t.row.id)}}}):e._e(),!0!==!a.hidden||"string"!==a.type&&"number"!==a.type&&a.type||"left"!=a.align?e._e():n("span",[e._v(e._s(t.row[a.field]))]),!0===!a.hidden&&"options"===a.type&&"left"==a.align?n("span",{staticClass:"inlineEdit"},["options"===a.type&&e.inlineEdit?n("q-select",{attrs:{"map-options":"",dense:"",borderless:"","options-dark":"",options:a.options,dark:e.dark},on:{input:function(n){return e.update(t.row[e.rowKey])}},model:{value:t.row[a.field],callback:function(n){e.$set(t.row,a.field,n)},expression:"props.row[column.field]"}}):e._e(),e.inlineEdit?e._e():n("div",[e._v(e._s(e.getOptions(a.options,t.row[a.field])))])],1):e._e(),!0===!a.hidden&&"date"===a.type&&"left"==a.align?n("span",[e._v(e._s(t.row[a.field]))]):e._e(),!0===a.editable&&!0===e.canEdit&&!0===e.inlineEdit&&"date"===a.type||"time"===a.type||"datetime"===a.type?n("q-btn",{staticClass:"no-shadow",class:["left"===a.align?"float-right":"float-left"],attrs:{"text-color":"primary",icon:"fal fa-pencil fa-xs",size:"7px"}},[n("q-popup-proxy",[n("q-date",{attrs:{color:"secondary","text-color":"black",dark:"",minimal:""},model:{value:t.row[a.field],callback:function(n){e.$set(t.row,a.field,n)},expression:"props.row[column.field]"}})],1)],1):e._e(),!0===a.editable&&!0===e.canEdit&&!0===e.inlineEdit&&"date"!==a.type&&"time"!==a.type&&"datetime"!==a.type&&"options"!==a.type?n("span",[n("q-btn",{staticClass:"no-border no-shadow",class:["left"===a.align?"float-right":"float-left"],staticStyle:{"margin-left":"auto"},attrs:{icon:"fal fa-pencil","text-color":"primary",size:"7px"},on:{click:function(e){return e.stopPropagation(),(!1)(e)}}},[!0===a.editable&&!0===e.inlineEdit?n("q-popup-edit",{staticClass:"bg-dark",attrs:{color:"dark",title:a.label,buttons:"","content-class":"bg-dark text-light capitalize",dark:e.dark,"label-set":"Save"},on:{save:function(n){return e.update(t.row[e.rowKey])}},model:{value:t.row[a.field],callback:function(n){e.$set(t.row,a.field,n)},expression:"props.row[column.field]"}},["string"===a.type?n("q-input",{attrs:{type:"text",darkx:e.dark},on:{inputx:function(n){return e.update(t.row[e.rowKey])}},model:{value:t.row[a.field],callback:function(n){e.$set(t.row,a.field,n)},expression:"props.row[column.field]"}}):e._e(),"number"===a.type?n("q-input",{attrs:{type:"number",darkx:e.dark},on:{inputx:function(n){return e.update(t.row[e.rowKey])}},model:{value:t.row[a.field],callback:function(n){e.$set(t.row,a.field,n)},expression:"props.row[column.field]"}}):e._e(),"options"===a.type?n("q-select",{attrs:{"map-options":"","options-dark":"",options:a.options,dark:e.dark},on:{input:function(n){return e.update(t.row[e.rowKey])}},model:{value:t.row[a.field],callback:function(n){e.$set(t.row,a.field,n)},expression:"props.row[column.field]"}}):e._e()],1):e._e()],1)],1):e._e(),!0!==!a.hidden||"string"!==a.type&&"number"!==a.type&&a.type||"right"!=a.align?e._e():n("span",[e._v(e._s(t.row[a.field]))]),!0===!a.hidden&&"date"===a.type&&"right"==a.align?n("span",[e._v(e._s(t.row[a.field]))]):e._e(),!0===!a.hidden&&"number"===a.type?n("span",[e._v(e._s(t.row[a.field]))]):e._e(),!0===!a.hidden&&"options"===a.type&&"right"==a.align?n("span",[e._v(e._s(e.getOptions(a.options,t.row[a.field])))]):e._e()],1):e._e()}),e.actions.length>0&&e.canAction||e.canDelete?n("q-td",{on:{click:function(e){e.stopPropagation()}}},[e.actions.length>0&&e.canAction||e.canDelete?n("q-btn",{staticClass:"no-border no-shadow",staticStyle:{},attrs:{icon:"fal fa-ellipsis-v",flat:"",dense:"",size:"10px","text-color":"primary"}}):e._e(),n("q-menu",{staticClass:"bg-grey",staticStyle:{"min-width":"300px"},attrs:{dark:"","content-style":'{min-width:"200px"}',"auto-close":""}},[n("q-list",{staticClass:"bg-menu text-primary q-py-xs",staticStyle:{"min-width":"150px"},attrs:{dense:"",dark:""}},[e._l(e.actions,function(a){return n("q-item",{key:a.name,staticClass:"q-mb-sm",attrs:{link:"",clickable:""},nativeOn:{click:function(n){return e.sendAction(a.event,t.row)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{staticClass:"text-primary",class:[a.icon?a.icon:""]})],1),n("q-item-section",[e._v("\n                      "+e._s(a.title)+"\n                    ")])],1)}),!0===e.canDelete?n("q-item",{attrs:{clickable:""},nativeOn:{click:function(n){return e.deleteRow(t.row)}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{staticClass:"q-mr-sm text-red",attrs:{size:"lg",name:"fal fa-trash fa-menu"}})],1),n("q-item-section",[e._v("Delete")])],1):e._e()],2)],1)],1):e._e()],2),e.expand&&e.details?n("q-tr",{directives:[{name:"show",rawName:"v-show",value:t.row[e.rowKey]===e.expandedRowId,expression:"props.row[rowKey] === expandedRowId"}],class:[!0===t.row[e.indicator]?"indicatedRow":"normalRow",t.row[e.rowKey]===e.expandedRowId?"expanded":""],attrs:{props:t}},[n("q-td",{attrs:{colspan:"100%"}},[e._t("details",[n("details-row",{attrs:{canEdit:e.canEdit,columns:e.columns,selectedRow:t.row}})],{selectedRow:t.row})],2)],1):e._e()]}},{key:e.modal?"bottom":"pagination",fn:function(t){return n("div",{staticClass:"row flex-center q-py-sm"},[n("div",{staticClass:"row col flex-center"},[n("q-btn",{staticClass:"q-mr-sm no-shadow",attrs:{round:"",dense:"",size:"sm",icon:"undo",color:"","text-color":"primary",disable:t.isFirstPage},on:{click:t.prevPage}}),n("div",{staticClass:"q-mr-sm",staticStyle:{"font-size":"small"}},[e._v("Page "+e._s(t.pagination.page)+" / "+e._s(t.pagesNumber))]),n("q-btn",{staticClass:"no-shadow",attrs:{round:"",dense:"",size:"sm",icon:"redo",color:"","text-color":"primary",disable:t.isLastPage},on:{click:t.nextPage}})],1)])}}],null,!0)})],1):e._e(),e.showSidebar?n("div",{staticClass:"q-ml-sm",class:[e.sidebarWidth&&e.showTable?"col-"+e.sidebarWidth:"col"]},[n("q-tabs",{staticClass:"text-white narrow shadow-1 no-border no-shadow",attrs:{dense:"",shrink:"",animated:"",swipeable:"",align:"justify","indicator-color":"primary"},model:{value:e.selectedSbComponent,callback:function(t){e.selectedSbComponent=t},expression:"selectedSbComponent"}},[e.tablehide?n("q-btn",{staticClass:"text-primary q-px-md no-shadow",attrs:{icon:e.showTable?"fal fa-arrow-left fa-xs":"fal fa-arrow-right fa-xs",dense:"",name:"details"},nativeOn:{click:function(t){e.showTable=!e.showTable}}}):e._e(),!0===e.details&&!1===e.expand?n("q-tab",{attrs:{name:"details",label:"Details"}}):e._e(),e._l(e.sidebarComponents,function(e){return n("q-tab",{key:e.name,attrs:{name:e.name,label:e.title}})})],2),n("q-tab-panels",{staticClass:"full-height",model:{value:e.selectedSbComponent,callback:function(t){e.selectedSbComponent=t},expression:"selectedSbComponent"}},[n("q-tab-panel",{staticClass:"no-border no-shadow",attrs:{name:"details"}},[e._t("details",[n("details-panel",{attrs:{columns:e.columns,selectedRow:e.selectedRow}})],{selectedRow:e.selectedRow})],2),e._l(e.sidebarComponents,function(t){return n("q-tab-panel",{key:t.name,attrs:{name:t.name}},[n(t.component,{key:t.name,tag:"component",attrs:{columns:e.columns,selectedRow:e.selectedRow,data:e.data}})],1)})],2)],1):e._e(),n("q-dialog",{ref:"new",attrs:{"content-classes":"new-modal bg-dark q-pa-md"},on:{show:e.newFormFocus},model:{value:e.showNewForm,callback:function(t){e.showNewForm=t},expression:"showNewForm"}},[n("q-card",{staticClass:"bg-grey-9",attrs:{dark:""}},[n("q-toolbar",[n("q-toolbar-title",[e._v("New")]),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),n("q-card-section",[e._t("insert",[n("insert",{key:e.newComponentKey,attrs:{rowKey:e.rowKey,columns:e.columns,postApi:e.api.post,data:e.data},on:{saved:e.saved,close:function(t){e.showNewForm=!1}}})],{rowKey:e.rowKey})],2)],1)],1)],1)},o=[],i=(n("c880"),n("0c1f"),n("06ef"),n("288e"),n("75d5")),s=n.n(i),l=(n("dde3"),n("0e20"),n("2e73"),n("0e30"),n("ce9c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selectedRow?n("div",{staticClass:"row"},e._l(e.columns,function(t){return n("div",{key:t.field,staticClass:"col-12"},["string"===t.type&&!0===!t.hidden?n("q-input",{attrs:{type:"text",dark:e.dark,"stack-label":t.label},model:{value:e.selectedRow[t.field],callback:function(n){e.$set(e.selectedRow,t.field,n)},expression:"selectedRow[column.field]"}}):e._e(),"number"===t.type&&!0===!t.hidden?n("q-input",{attrs:{type:"number",dark:e.dark,"stack-label":t.label},model:{value:e.selectedRow[t.field],callback:function(n){e.$set(e.selectedRow,t.field,n)},expression:"selectedRow[column.field]"}}):e._e(),"options"===t.type&&!0===!t.hidden?n("q-select",{attrs:{options:t.options,"map-options":"",dark:e.dark,"stack-label":t.label},model:{value:e.selectedRow[t.field],callback:function(n){e.$set(e.selectedRow,t.field,n)},expression:"selectedRow[column.field]"}}):e._e()],1)}),0):e._e()}),r=[],d={name:"ComponentCrudDetails",props:{columns:{required:!0,type:Array},selectedRow:{required:!0}},data:function(){return{dark:!0}},methods:{},computed:{},components:{},created:function(){}},c=d,u=(n("c733"),n("2be6")),p=Object(u["a"])(c,l,r,!1,null,"36b139c7",null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selectedRow?n("div",{staticClass:"row content-start q-my-md"},e._l(e.columns,function(t){return!0===t.hidden?n("div",{key:t.field,staticClass:"col block content-start q-mr-sm"},["string"===t.type?n("q-input",{attrs:{type:"text",dark:e.dark,label:t.label,"stack-label":"",readonly:!e.canEdit&&!t.editable},model:{value:e.selectedRow[t.field],callback:function(n){e.$set(e.selectedRow,t.field,n)},expression:"selectedRow[column.field]"}}):e._e(),"number"===t.type?n("q-input",{attrs:{type:"number",dark:e.dark,label:t.label,"stack-label":"",readonly:!e.canEdit&&!t.editable},model:{value:e.selectedRow[t.field],callback:function(n){e.$set(e.selectedRow,t.field,n)},expression:"selectedRow[column.field]"}}):e._e(),"options"===t.type&&!0===t.editable&&!0===e.canEdit?n("q-select",{attrs:{"map-options":"",options:t.options,dark:e.dark,"stack-label":t.label,readonly:!e.canEdit&&!t.editable},model:{value:e.selectedRow[t.field],callback:function(n){e.$set(e.selectedRow,t.field,n)},expression:"selectedRow[column.field]"}}):e._e(),"text"===t.type&&!0===t.editable&&!0===e.canEdit?n("q-input",{attrs:{label:t.label,"stack-label":"",dark:e.dark,type:"textarea",autofocus:"",counter:"",readonly:!e.canEdit&&!t.editable},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.stopPropagation()}},model:{value:e.selectedRow[t.field],callback:function(n){e.$set(e.selectedRow,t.field,n)},expression:"selectedRow[column.field]"}}):e._e()],1):e._e()}),0):e._e()},w=[],h={name:"ComponentCrudDetails",props:{columns:{required:!0,type:Array},selectedRow:{required:!0},canEdit:{required:!0,type:Boolean}},data:function(){return{dark:!0}},methods:{},computed:{},components:{},created:function(){}},b=h,y=(n("e9de"),Object(u["a"])(b,m,w,!1,null,"03009f7c",null)),v=y.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-form"},[n("div",{ref:"new",staticClass:"row"},[e._l(e.columns,function(t,a){return t.validations?n("div",{key:t.field,staticClass:"col-12"},[!0===!t.hidden?n("div",{staticClass:"q-mb-md",attrs:{orientation:"vertical",label:t.label,helperx:t.required?"Required":"","error-label":""}},["string"===t.type?n("q-input",{ref:a?"input"+a:"",refInFor:!0,attrs:{tabindex:"0",label:t.label,"stack-labelx":t.label,type:"text",dark:e.dark,error:e.$v.newRow[t.field].$error,autofocus:""},on:{blur:function(n){e.$v.newRow[t.field].$touch},input:function(n){e.$v.newRow[t.field].$touch}},model:{value:e.newRow[t.field],callback:function(n){e.$set(e.newRow,t.field,"string"===typeof n?n.trim():n)},expression:"newRow[column.field]"}}):e._e(),"number"===t.type?n("q-input",{attrs:{tabindex:"0",label:t.label,"stack-labelx":t.label,type:"number",dark:e.dark,error:e.$v.newRow[t.field].$error,autofocus:""},on:{blur:function(n){e.$v.newRow[t.field].$touch},input:function(n){e.$v.newRow[t.field].$touch}},model:{value:e.newRow[t.field],callback:function(n){e.$set(e.newRow,t.field,"string"===typeof n?n.trim():n)},expression:"newRow[column.field]"}}):e._e(),"options"===t.type&&t.options.length<4?n("q-btn-toggle",{staticClass:"q-mt-md",attrs:{label:t.label,color:"dark","toggle-color":"cyan-9","text-color":"white","toggle-text-color":"primary",options:t.options,error:e.$v.newRow[t.field].$error,outline:""},on:{input:function(n){e.$v.newRow[t.field].$touch}},model:{value:e.newRow[t.field],callback:function(n){e.$set(e.newRow,t.field,n)},expression:"newRow[column.field]"}}):e._e(),"options"===t.type&&t.options.length>3?n("q-select",{attrs:{"stack-label":t.label,options:t.options,label:t.label,dark:e.dark,error:e.$v.newRow[t.field].$error},on:{input:function(n){e.$v.newRow[t.field].$touch}},model:{value:e.newRow[t.field],callback:function(n){e.$set(e.newRow,t.field,n)},expression:"newRow[column.field]"}}):e._e(),"date"===t.type||"time"===t.type||"datetime"===t.type?n("q-date",{staticClass:"text-primary",attrs:{dark:"",color:"primary",label:t.label,minimal:"",type:t.type},model:{value:e.newRow[t.field],callback:function(n){e.$set(e.newRow,t.field,n)},expression:"newRow[column.field]"}}):e._e()],1):e._e()]):e._e()}),n("div",{staticClass:"row q-mt-md full-width"},[n("q-btn",{directives:[{name:"hotkey",rawName:"v-hotkey.once",value:{enter:e.submit},expression:"{'enter': submit}",modifiers:{once:!0}}],staticClass:"text-primary col",attrs:{outline:"",dark:"",icon:"fal fa-check",label:"Create New"},nativeOn:{click:function(t){return e.submit(t)}}})],1)],2)])},k=[],x={name:"ComponentCrudNew",props:{rowKey:{default:"id"},columns:{required:!0,type:Array},data:{required:!0,type:Array},postApi:{required:!0,type:Function}},data:function(){return{dark:!0,newRow:{},autofocus:!1}},validations:function(){return{newRow:this.getValidations}},methods:{submit:function(){this.$v.newRow.$touch(),this.$v.newRow.$error?this.$q.notify("Please review fields again."):this.postApi(this.success,this.error,this.newRow)},success:function(e){this.data.push(e),this.$emit("saved",e[this.rowKey])},error:function(){this.$q.notify("Oops, something went wrong")}},computed:{getValidations:function(){var e={};return this.columns.forEach(function(t,n){e[t.field]=t.validations?t.validations:{}}),e}},components:{},created:function(){},mounted:function(){console.log(this.columns)}},q=x,_=(n("c6aa"),Object(u["a"])(q,g,k,!1,null,"53c91752",null)),R=_.exports,C=n("9869"),$=n("c005"),S=n.n($),K={name:"ComponentCRUD",props:{columns:{required:!0,type:Array},isPopup:{type:Boolean,default:!1},detailedView:{default:!0,type:Boolean},title:{default:"",type:String},api:{required:!1,type:Object,default:function(){return{get:null,getParameters:{},getSingle:null,put:null,post:null,delete:null}}},actions:{type:Array,default:function(){return[]}},search:{type:Boolean,default:!1},sortBy:{type:String,default:"id"},rowKey:{type:String,default:"id"},multiselect:{type:Boolean,default:!1},expand:{type:Boolean,default:!1},inlineEdit:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1},details:{type:Boolean,default:!1},newtab:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},filterbox:{type:Boolean,default:!1},filterchips:{type:Boolean,default:!1},sidebarComponents:{type:Array,default:function(){return[]}},canNew:{type:Boolean,default:!1},canEdit:{type:Boolean,default:!1},canDelete:{type:Boolean,default:!1},canAction:{type:Boolean,default:!0},indicator:{type:String,default:""},sidebarWidth:{default:4},tablehide:{default:!1},download:{type:Boolean,default:!1},modal:{type:Boolean,default:!1},maxWidth:{type:Number,default:0},rowsPerPage:{type:Number},dataOverride:{type:Array},channel:{type:String,default:""}},data:function(){return{data:[],dark:!0,loading:!1,selected:[],selectedRow:null,newRow:[],searchTerm:null,filters:{},separator:"cell",expandedRowId:null,showNewForm:!1,rowIndex:null,newComponentKey:1,showTable:!0,pagination:{page:1,sortBy:"id",rowsPerPage:50},wampSubscription:null,selectedSbComponent:null}},methods:{publish:function(e){this.$wamp.publish("crud."+this.channel,[],{id:e})},newFormFocus:function(){},saved:function(e){this.newComponentKey+=1,this.showNewForm=!1,this.publish(e),this.$emit("new",e),this.$emit("change",e)},get:function(e){var t=this;e?(this.api.getParameters||(this.api.getParameters={}),this.api.getParameters[this.rowKey]=e,this.api.getSingle||console.warn(this.channel,"Getsingle Not Set"),this.api.getSingle(function(n){if(n.length>0){var a=t.data.findIndex(function(n){return n[t.rowKey]===e});a>-1?(Object.entries(n[0]).forEach(function(e){var o=s()(e,2),i=o[0];o[1];t.data[a][i]=n[0][i]}),t.$emit("update",e,n),t.$emit("change",e,n)):(t.data.push(n[0]),t.$emit("new",e,n),t.$emit("change",e,n))}else t.data=t.data.filter(function(n){return n[t.rowKey]!==e}),t.$emit("delete",e),t.$emit("change",e)},null,this.api.getParameters)):this.api.get(function(e){t.loading=!1,t.data=e},null,this.api.getParamaters)},deleteRow:function(e){var t=this;this.$q.dialog({title:"Confirm Delete",message:"This action cannot be undone",ok:"DELETE",cancel:"Cancel",color:"dark"}).then(function(){t.api.delete(function(n){t.data=t.data.filter(function(n){return n[t.rowKey]!==e[t.rowKey]}),t.$emit("delete",n,e),t.$emit("change",n,e),t.publish(e[t.rowKey]),t.$q.notify({message:"Success",position:"top"})},t.error,e[t.rowKey])}).catch(function(){t.$q.notify({message:"Cancelled",position:"top"})})},error:function(){this.$q.notify({message:"Oops. Something went wrong",position:"top"})},update:function(e){var t=this,n=this.data.find(function(n){return n[t.rowKey]===e});this.api.put(function(){t.channel?t.publish(e):console.warn("Wamp Channel Not Set"),t.$emit("update",e,n),t.$emit("change",e,n)},this.error,n)},create:function(){},getOptions:function(e,t){if(!e)return"";var n=e.find(function(e){return e.value===t});return n?n.label:void 0},clickRow:function(e){e.selected=!e.selected,this.selectedRow=e.row,e.expand=!e.expand,this.expandedRowId=this.expandedRowId===e.row[this.rowKey]?null:e.row[this.rowKey],this.$emit("clickedRow",e.row[this.rowKey])},searchFilter:function(e,t,n,a){var o=this,i=t?t.toLowerCase():"";return e.filter(function(e){return n.some(function(t){var n="options"===t.type?o.getOptions(t.options,e[t.field]):a(t,e);return-1!==(n+"").toLowerCase().indexOf(i)})})},setFilter:function(e,t){this.filters[e]?this.filters[e]=t:C["a"].set(this.filters,e,t)},focusSearch:function(e){this.$refs.search.focus(),this.$refs.search.val="",e&&e.preventDefault()},moveRowIndex:function(e){var t=this.filteredData[e];this.selectedRow=t,this.expandedRowId=this.expandedRowId===t[this.rowKey]?null:t[this.rowKey],this.rowIndex=e},downTable:function(e){var t=null===this.rowIndex?0:++this.rowIndex;t===this.filteredData.length&&(t=0),this.moveRowIndex(t),e.preventDefault()},upTable:function(e){var t=null===this.rowIndex?this.data.length-1:--this.rowIndex;-1===t&&(t=this.filteredData.length-1),this.moveRowIndex(t),e.preventDefault()},triggerNewForm:function(){this.showNewForm=!0},sendAction:function(e,t){this.$emit(e,t)}},computed:{filteredData:function(){var e=this,t=this.dataOverride?this.dataOverride:this.data;console.log(t);var n=!0,a=t.filter(function(t){for(var a=0,o=Object.keys(e.filters);a<o.length;a++){var i=o[a];if(null!==e.filters[i]&&(n=!1,t[i]!==e.filters[i]))return!1}return!0});return n?t:a},showSidebar:function(){return!1===this.expand&&!0===this.details||(this.sidebarComponents.length>0||(console.warn("nope"),!1))}},components:{detailsPanel:f,detailsRow:v,insert:R},created:function(){C["a"].use(S.a),this.loading=!0,this.dataOverride?this.loading=!1:this.get(),this.selectedSbComponent=!0===this.details&&!1===this.expand||0===this.sidebarComponents.length?"details":this.sidebarComponents[0].name},mounted:function(){this.pagination.rowsPerPage=!0===this.modal?10:50,this.rowsPerPage&&(this.pagination.rowsPerPage=this.rowsPerPage),this.pagination.sortBy=this.sortBy,this.channel.length>0&&(this.wamp=this.$wamp.subscribe("crud."+this.channel,function(e,t,n){this.get(t[this.rowKey])},{acknowledge:!0}).then(function(e){this.wampSubscription=e})),this.focusSearch()},beforeDestroy:function(){this.wampSubscription&&this.$wamp.unsubscribe(this.wampSubscription)}},P=K,E=(n("0e83"),Object(u["a"])(P,a,o,!1,null,"6ddb49a4",null));t["a"]=E.exports},e9de:function(e,t,n){"use strict";var a=n("81a7"),o=n.n(a);o.a}}]);
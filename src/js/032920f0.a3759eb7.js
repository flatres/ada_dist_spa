(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["032920f0"],{"08e9":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"no-scroll toolbar-page"},[n("q-toolbar",{class:{"text-white bg-toolbar":e.isDark,"text-black bg-white-3":e.isLight},attrs:{dense:"",shrink:"",classx:"text-white shadow-2 rounded-borders narrowx justify"}},[n("q-tabs",{staticClass:"tbp-tabs",attrs:{dense:"",shrink:"","active-color":e.isLight?"#011b48":"primary"},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.elements,function(t){return n("div",{key:t.name},[t.menu?e._e():n("q-tab",{attrs:{label:t.label,name:t.name,icon:t.icon}}),t.menu?n("q-btn",{attrs:{flat:"",size:"sm",label:t.label,icon:t.icon?t.icon:"fal fa-caret-down","text-color":e.isDark?"white":"primary"}},[n("q-menu",{ref:"settingsPopover",refInFor:!0,attrs:{"content-class":"bg-grey-9 text-white","auto-close":""}},[n("q-list",{attrs:{"item-separator":"",link:"","content-class":"bg-primary"}},e._l(t.menu,function(t){return n("q-item",{key:t.name,attrs:{clickable:""},nativeOn:{click:function(n){return e.clickMenu(t)}}},[n("q-item-section",{attrs:{avatar:"",left:"",dark:""}},[n("q-icon",{attrs:{size:"20px",name:t.icon}})],1),n("q-item-section",[n("q-item-label",[e._v(e._s(t.label))])],1)],1)}),1)],1)],1):e._e()],1)}),0),n("q-space"),e._t("side")],2),n("q-tab-panels",{model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.tabPanels,function(t){return n("q-tab-panel",{key:t.name,attrs:{name:t.name}},[n(t.component,{tag:"component",on:{close:e.close}})],1)}),1)],1)},o=[],r=(n("e125"),n("4823"),n("2e73"),n("dde3"),n("76d0"),n("0c1f"),n("c880"),n("8e9e")),s=n.n(r),l=n("9ce4");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u={name:"ComponentPageToolbar",props:{default:null,elements:null},watch:{selectedTab:function(){console.log(":",this.selectedTab)}},data:function(){return{selectedTab:null}},computed:i({},Object(l["e"])("user",["isDark","isLight"]),{tabPanels:function(){var e=[];return this.elements.forEach(function(t){t.menu?t.menu.forEach(function(t){e.push({name:t.name,component:t.component})}):e.push({name:t.name,component:t.component})}),e}}),methods:{close:function(){this.selectedTab=this.default},clickMenu:function(e){e.name&&(this.selectedTab=e.name),e.event&&this.$emit(e.event)}},created:function(){this.selectedTab=this.default}},d=u,f=(n("b0d4"),n("2be6")),m=Object(f["a"])(d,a,o,!1,null,null,null);t["a"]=m.exports},1327:function(e,t,n){"use strict";var a=n("ce70"),o=n.n(a);o.a},"2a8f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("toolbar-page",{attrs:{elements:e.elements}})},o=[],r=n("08e9"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("crud",{ref:"crud",attrs:{data:e.data,api:e.api,columns:e.columns,searchx:"",sortBy:"timestamp"}})],1)},l=[],c=n("d612"),i=n("4778"),u={getFiles:function(e,t){i["a"].get("/exams/admin/files").then(function(t){e(t.data)}).catch(function(e){e()})},getSessions:function(e,t){i["a"].get("/exams/admin/sessions").then(function(t){e(t.data)}).catch(function(e){e()})},getSession:function(e,t,n){i["a"].get("/exams/admin/session/"+n.id).then(function(t){e(t.data)}).catch(function(e){e()})},getSubjects:function(e,t){i["a"].get("/exams/admin/subjects").then(function(t){e(t.data)}).catch(function(e){e()})},deleteAllCaches:function(e,t){i["a"].delete("/exams/admin/caches").then(function(t){e(t.data)}).catch(function(e){e()})},deleteCache:function(e,t,n){i["a"].delete("/exams/admin/cache/"+n).then(function(t){e(t.data)}).catch(function(e){e()})}},d={name:"ComponentExamsAdminFiles",data:function(){return{api:{get:u.getFiles},columns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"cycle",label:"Cycle",field:"intCycle",sortable:!0},{name:"timestamp",label:"Time Stamp",field:"txtImportDateTime",sortable:!0},{name:"file",label:"File",field:"txtFilePath",sortable:!0}]}},computed:{},components:{Crud:c["a"]},created:function(){}},f=d,m=(n("e803"),n("2be6")),b=Object(m["a"])(f,s,l,!1,null,"053a0723",null),p=b.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.consoleProgress<1?n("q-linear-progress",{staticClass:"q-my-sm",attrs:{value:e.consoleProgress,color:"primary",dark:""}}):e._e(),n("crud",{ref:"crud",attrs:{data:e.data,api:e.api,columns:e.columns,searchx:"",sortBy:"scode",indicator:"unknown"}})],1)},g=[],v=(n("e125"),n("4823"),n("2e73"),n("dde3"),n("76d0"),n("0c1f"),n("8e9e")),y=n.n(v),O=n("9ce4");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){y()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var x={name:"ComponentExamsAdminSubjects",data:function(){return{api:{get:u.getSubjects},columns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"scode",label:"code",field:"subjectCode",sortable:!0},{name:"sname",label:"name",field:"subjectName",sortable:!0},{name:"title",label:"title",field:"title",sortable:!0},{name:"level",label:"level",field:"level",sortable:!0},{name:"sboard",label:"board",field:"boardName",sortable:!0},{name:"results",label:"results",field:"resultCount",sortable:!0}]}},computed:C({},Object(O["c"])("sockets",["progress"]),{consoleProgress:function(){return this.progress("Exams.Admin.Subjects")/100}}),components:{Crud:c["a"]},created:function(){}},w=x,P=(n("1327"),Object(m["a"])(w,h,g,!1,null,"064540ec",null)),k=P.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row"},[n("q-btn",{staticClass:"q-mr-lg",attrs:{dense:"",color:"primary","text-color":"black",label:"Fetch All",disabled:e.running},on:{click:e.fetchAll}}),n("q-btn",{attrs:{dense:"",color:"red","text-color":"black",label:"Delete All",disabled:e.running},on:{click:e.deleteAll}})],1),n("crud",{ref:"crud",attrs:{data:e.data,actions:e.actions,api:e.api,columns:e.columns,searchx:"",sortBy:"intFormatYear",indicator:"intActive"},on:{gcse:e.gcse,alevel:e.alevel,both:e.both,deleteBoth:e.deleteBoth}}),e.console?n("div",[n("h1",[e._v(e._s(e.currentYear)+"....")]),n("console-component",{staticStyle:{"min-height":"400px"}})],1):e._e()],1)},D=[],_=n("de53"),E=n("dd14");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){y()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var T={name:"ComponentExamsAdminSessions",data:function(){return{api:{get:u.getSessions},queue:[],currentYear:"",console:!1,running:!1,columns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"year",label:"Year",field:"intFormatYear"},{name:"month",label:"Month",field:"month"},{name:"files",label:"Files",field:"files"},{name:"gcseCount",label:"GCSE Results",field:"gcseCount"},{name:"alevelCount",label:"A Level Results",field:"alevelCount"},{name:"gcseCache",label:"GCSE Cache",color:"red",truncate:!1,sortable:!0,colors:[{label:"cached",color:"green",textColor:"black"},{label:"none",color:"red",textColor:"black"}],field:"gcseCache",type:"badges",align:"left"},{name:"gcsetime",label:"",field:"gcseCacheTime"},{name:"alevelCache",label:"A Level Cache",color:"red",truncate:!1,sortable:!0,colors:[{label:"cached",color:"green",textColor:"black"},{label:"none",color:"red",textColor:"black"}],field:"alevelCache",type:"badges",align:"left"},{name:"aleveltime",label:"",field:"alevelCacheTime"}],actions:[{title:"Run GCSE",event:"gcse",icon:"fal fa-sort-numeric-up"},{title:"Run A Level",event:"alevel",icon:"fal fa-sort-shapes-up"},{title:"Run All",event:"both",icon:"fal fa-share-all"},{title:"Delete Both",event:"deleteBoth",icon:"fal fa-trash"}]}},computed:{},methods:A({},Object(O["b"])("sockets",["clearConsoleLog"]),{deleteBoth:function(e){var t=this;u.deleteCache(function(){t.$refs.crud.get(e.id)},null,e.id)},gcse:function(e){this.queue.push({level:"gcse",sessionID:e.id,year:e.intFormatYear}),this.run()},alevel:function(e){this.queue.push({level:"alevel",sessionID:e.id,year:e.intFormatYear}),this.run()},both:function(e){this.queue.push({level:"alevel",sessionID:e.id,year:e.intFormatYear}),this.queue.push({level:"gcse",sessionID:e.id,year:e.intFormatYear}),this.run()},run:function(){var e=this;if(this.queue.length>0){this.clearConsoleLog(),this.running=!0,this.console=!0;var t=this.queue.pop();this.currentYear=t.year,_["a"].getSession(function(){e.$refs.crud.get(t.sessionID),e.run()},this.run,t)}else this.console=!1,this.running=!1,this.currentYear=""},fetchAll:function(){var e=this,t=this.$refs.crud.data;t.forEach(function(t){e.queue.push({level:"alevel",sessionID:t.id,year:t.intFormatYear})}),this.run()},deleteAll:function(){var e=this;u.deleteAllCaches(function(){e.$refs.crud.get()},function(){e.$refs.crud.get()})}}),components:{Crud:c["a"],ConsoleComponent:E["a"]},created:function(){}},F=T,Y=(n("7259"),Object(m["a"])(F,q,D,!1,null,"f39f0076",null)),$=Y.exports,I={name:"PageExamsAdmin",data:function(){return{elements:[{name:"files",label:"files",component:p},{name:"subjects",label:"subjects",component:k},{name:"sessions",label:"sessions",component:$}]}},components:{toolbarPage:r["a"]}},L=I,B=Object(m["a"])(L,a,o,!1,null,null,null);t["default"]=B.exports},"48d9":function(e,t,n){"use strict";var a=n("d522"),o=n.n(a);o.a},7259:function(e,t,n){"use strict";var a=n("aae1"),o=n.n(a);o.a},aae1:function(e,t,n){},b0d4:function(e,t,n){"use strict";var a=n("b3f7"),o=n.n(a);o.a},b3f7:function(e,t,n){},ce70:function(e,t,n){},d522:function(e,t,n){},dd14:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"console q-ma-md full-height overflow-y:scroll"},[n("p",{staticClass:"q-ma-sm"},[e._v("Console")]),n("ul",e._l(e.consoleLog,function(t){return n("li",{key:t.lineIndex,class:{error:t.isError,indent1:1==t.indent,indent2:2==t.indent,indent3:3==t.indent}},[e._v("\n      "+e._s(t.message)+"\n    ")])}),0)])},o=[],r=(n("e125"),n("4823"),n("2e73"),n("dde3"),n("76d0"),n("0c1f"),n("8e9e")),s=n.n(r),l=n("9ce4");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u={name:"AppConsole",data:function(){return{}},computed:i({},Object(l["c"])("sockets",["consoleLog"]))},d=u,f=(n("48d9"),n("2be6")),m=Object(f["a"])(d,a,o,!1,null,"7a29c78d",null);t["a"]=m.exports},de53:function(e,t,n){"use strict";var a=n("4778");t["a"]={getSessions:function(e,t){a["a"].get("/exams/sessions").then(function(t){e(t.data)}).catch(function(e){e()})},getSession:function(e,t,n){console.log(n),a["a"].get("/exams/"+n.level+"/results/"+n.sessionID).then(function(t){console.log("here",t),e(t.data)}).catch(function(e){console.log("error",e),t(e)})},getSessionCache:function(e,t,n){console.log(n),a["a"].get("/exams/cache/"+n.level+"/results/"+n.sessionID).then(function(t){console.log("here",t),e(t.data)}).catch(function(e){console.log("error",e),t(e)})}}},e803:function(e,t,n){"use strict";var a=n("ee2d"),o=n.n(a);o.a},ee2d:function(e,t,n){}}]);
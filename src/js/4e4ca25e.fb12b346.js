(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4e4ca25e"],{"03b8":function(t,e,s){},"08e9":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"no-scroll"},[s("q-toolbar",{staticClass:"bg-toolbar text-white shadow-2 rounded-borders narrowx justify",attrs:{dense:"",shrink:""}},[s("q-tabs",{attrs:{dense:"",shrink:"","indicator-color":"primary"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},t._l(t.elements,function(e){return s("div",{key:e.name},[e.menu?t._e():s("q-tab",{attrs:{label:e.label,name:e.name}}),e.menu?s("q-btn",{directives:[{name:"hotkey",rawName:"v-hotkey",value:{"shift+a":function(){t.selectedTab="bookings"}},expression:"{'shift+a': () => { selectedTab = 'bookings' }}"}],attrs:{flat:"",label:"Admin",icon:"fal fa-caret-down"},nativeOn:{click:function(s){s.stopPropagation(),t.selectedTab=e.name}}},[s("q-menu",{ref:"settingsPopover",refInFor:!0,attrs:{"content-class":"bg-dark text-white","auto-close":""}},[s("q-list",{attrs:{"item-separator":"",link:"","content-class":"bg-primary"}},t._l(e.menu,function(e){return s("q-item",{key:e.name,attrs:{clickable:""},nativeOn:{click:function(s){t.selectedTab=e.name}}},[s("q-item-section",{attrs:{avatar:"",left:"",dark:""}},[s("q-icon",{attrs:{name:e.icon+" fa-sm"}})],1),s("q-item-section",[s("q-item-label",[t._v(t._s(e.label))])],1)],1)}),1)],1)],1):t._e()],1)}),0),s("q-space"),t._t("side")],2),s("q-tab-panels",{model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},t._l(t.tabPanels,function(e){return s("q-tab-panel",{key:e.name,attrs:{name:e.name}},[s(e.component,{tag:"component",on:{close:function(e){t.selectedTab=null}}})],1)}),1)],1)},n=[],l=(s("c880"),s("2e73"),{name:"ComponentPageToolbar",props:{default:null,elements:null},watch:{selectedTab:function(){console.log(":",this.selectedTab)}},data:function(){return{selectedTab:null}},computed:{tabPanels:function(){var t=[];return this.elements.forEach(function(e){e.menu?e.menu.forEach(function(e){t.push({name:e.name,component:e.component})}):t.push({name:e.name,component:e.component})}),t}},created:function(){this.selectedTab=this.default}}),i=l,o=s("2be6"),c=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=c.exports},"829a":function(t,e,s){},8976:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("toolbar-page",{attrs:{elements:t.elements,default:"students"}})},n=[],l=s("08e9"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("h1",[t._v(" iSAMS Students ")]),s("crud",{ref:"crud",attrs:{dataOverride:t.misStudents,api:t.api,columns:t.columns,settings:t.settings,actions:t.actions,sortBy:"name",rowKey:"id",search:""}})],1),s("div",{staticClass:"col-4"},[s("div",{staticClass:"block border-primary q-ba-sm"},[s("div",{staticClass:"row"},[s("div",{attrs:{clsss:"col flex"}},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"# MIS Students"},model:{value:t.stats.misStudentCount,callback:function(e){t.$set(t.stats,"misStudentCount",e)},expression:"stats.misStudentCount"}})],1),s("div",{staticClass:"col"},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"# ADA Students"},model:{value:t.stats.adaStudentCount,callback:function(e){t.$set(t.stats,"adaStudentCount",e)},expression:"stats.adaStudentCount"}})],1)]),s("q-btn",{staticClass:"full-width q-mt-xl",attrs:{loading:t.loading,percentage:t.syncProgress,"dark-percentagex":"",outline:"",dark:"",color:"primary","icon-rightx":"fal fa-sync fa-xs"},on:{click:t.syncStudents}},[t._v("\n           Sync\n          "),s("span",{attrs:{slot:"loading"},slot:"loading"},[s("q-spinner-gears",{staticClass:"on-left"}),t._v("\n            Computing...\n          ")],1)]),s("console",{staticStyle:{"min-height":"300px"}}),t.syncIsComplete&&!t.loading?s("div",[s("h1",[t._v("Summary")]),s("div",{attrs:{clsss:"row"}},[s("div",{staticClass:"col"},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"New"},model:{value:t.results.new,callback:function(e){t.$set(t.results,"new",e)},expression:"results.new"}})],1)]),s("div",{staticClass:"row full-width"},[s("div",{staticClass:"col"},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"Updated"},model:{value:t.results.updated,callback:function(e){t.$set(t.results,"updated",e)},expression:"results.updated"}})],1)]),s("div",{staticClass:"row full-width"},[s("div",{staticClass:"col"},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"Disabled"},model:{value:t.results.disabled,callback:function(e){t.$set(t.results,"disabled",e)},expression:"results.disabled"}})],1)])]):t._e()],1)])])])},o=[],c=s("b506"),r=s.n(c),d=s("9ce4"),u=s("4778"),f={getMISStudents:function(t){u["a"].get("/admin/sync/misstudents").then(function(e){t(e.data)}).catch(function(t){console.log(t)})},postSyncStudents:function(t){u["a"].post("/admin/sync/students").then(function(e){t(e.data)}).catch(function(t){console.log(t)})},getMISStaff:function(t){u["a"].get("/admin/sync/misstaff").then(function(e){t(e.data)}).catch(function(t){console.log(t)})},postSyncStaff:function(t){u["a"].post("/admin/sync/staff").then(function(e){t(e.data)}).catch(function(t){console.log(t)})}},m=s("d612"),p=s("dd14"),b={name:"ComponentAdminSyncStudentSync",props:{},data:function(){return{id:"0",stats:{misStudentCount:0,adaStudentCount:0},misStudentCount:"",misStudents:[],columns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"lastName",required:!0,label:"Name",align:"left",field:"txtSurname",sortable:!0},{name:"firstName",required:!0,label:"",align:"left",field:"txtForename",sortable:!0},{name:"gender",label:"M/F",field:"txtGender",align:"left",sortable:!0},{name:"house",label:"Hs",field:"txtBoardingHouse",align:"left",sortable:!0}],loading:!1,percentage:100,syncIsComplete:!1,results:[],channel:"lab.crud.basic"}},methods:r()({},Object(d["b"])("sockets",["clearConsoleLog"]),{showMISStudents:function(t){this.misStudents=t.misStudents,this.stats=t.stats},syncStudents:function(){this.clearConsoleLog(),this.loading=!0,f.postSyncStudents(this.syncComplete)},syncComplete:function(t){this.results=t,this.loading=!1,this.syncIsComplete=!0,this.percentage=0}}),computed:r()({},Object(d["c"])("sockets",["progress"]),{syncProgress:function(){return this.progress("Admin/Sync/Students")}}),components:{Crud:m["a"],Console:p["a"]},created:function(){f.getMISStudents(this.showMISStudents)}},g=b,y=(s("f278"),s("2be6")),h=Object(y["a"])(g,i,o,!1,null,"3540a427",null),S=h.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{},[s("h1",[t._v("MIS Staff")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("crud",{ref:"crud",attrs:{dataOverride:t.misStaff,api:t.api,columns:t.columns,settings:t.settings,actions:t.actions,sortBy:"lastName",rowKey:"id",search:"",filterchips:""}})],1),s("div",{staticClass:"col-4"},[s("div",{staticClass:"block border-primary q-ba-sm"},[s("div",{staticClass:"row"},[s("div",{attrs:{clsss:"col flex"}},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"# MIS Staff"},model:{value:t.stats.misStaffCount,callback:function(e){t.$set(t.stats,"misStaffCount",e)},expression:"stats.misStaffCount"}})],1),s("div",{staticClass:"col"},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"# ADA Staff"},model:{value:t.stats.adaStaffCount,callback:function(e){t.$set(t.stats,"adaStaffCount",e)},expression:"stats.adaStaffCount"}})],1)]),s("q-btn",{staticClass:"full-width q-mt-xl",attrs:{loading:t.loading,percentage:t.syncProgress,"dark-percentagex":"",outline:"",dark:"",color:"primary","icon-rightx":"fal fa-sync fa-xs"},on:{click:t.syncStaff}},[t._v("\n           Sync\n          "),s("span",{attrs:{slot:"loading"},slot:"loading"},[s("q-spinner-gears",{staticClass:"on-left"}),t._v("\n            Computing...\n          ")],1)]),s("console",{staticStyle:{"min-height":"300px"}}),t.syncIsComplete&&!t.loading?s("div",[s("h1",[t._v("Summary")]),s("div",{attrs:{clsss:"row"}},[s("div",{staticClass:"col"},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"New"},model:{value:t.results.new,callback:function(e){t.$set(t.results,"new",e)},expression:"results.new"}})],1)]),s("div",{staticClass:"row full-width"},[s("div",{staticClass:"col"},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"Updated"},model:{value:t.results.updated,callback:function(e){t.$set(t.results,"updated",e)},expression:"results.updated"}})],1)]),s("div",{staticClass:"row full-width"},[s("div",{staticClass:"col"},[s("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"",label:"Disabled"},model:{value:t.results.disabled,callback:function(e){t.$set(t.results,"disabled",e)},expression:"results.disabled"}})],1)])]):t._e()],1)])])])},C=[],x={name:"ComponentAdminSyncStaffSync",props:{},data:function(){return{id:"0",stats:{misStaffCount:0,adaStaffCount:0},misStaffCount:"",misStaff:[],columns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!1},{name:"lastName",label:"Surname",align:"left",field:"txtSurname",sortable:!0},{name:"firstName",label:"First Name",align:"left",field:"txtFirstname",sortable:!0},{name:"preName",label:"Pre Name",align:"left",field:"txtPreName",hidden:!0,sortable:!0},{name:"email",label:"Email",field:"txtEmailAddress",align:"left",sortable:!0},{name:"group",label:"Group",field:"intGroupID",align:"left",type:"options",filter:!0,options:[],sortable:!0},{name:"status",label:"Status",field:"txtStatus",align:"left",sortable:!0},{name:"type",label:"Type",field:"txtUserType",align:"left",sortable:!0}],loading:!1,percentage:100,syncIsComplete:!1,results:[]}},methods:r()({},Object(d["b"])("sockets",["clearConsoleLog"]),{showMISStaff:function(t){this.misStaff=t.misStaff,this.columns[5].options=t.groups,this.stats=t.stats},syncStaff:function(){this.clearConsoleLog(),this.loading=!0,f.postSyncStaff(this.syncComplete)},syncComplete:function(t){this.results=t,this.loading=!1,this.syncIsComplete=!0,this.percentage=0}}),computed:r()({},Object(d["c"])("sockets",["progress"]),{syncProgress:function(){return this.progress("Admin/Sync/Staff")}}),components:{Crud:m["a"],Console:p["a"]},created:function(){f.getMISStaff(this.showMISStaff)}},k=x,w=(s("8ba9"),Object(y["a"])(k,v,C,!1,null,"d4511aee",null)),q=w.exports,_={name:"PageAdminSync",data:function(){return{elements:[{name:"students",label:"Students",component:S,shortcut:"s"},{name:"staff",label:"Staff",component:q,shortcut:"t"}]}},components:{toolbarPage:l["a"]},methods:{refresh:function(){}}},I=_,T=Object(y["a"])(I,a,n,!1,null,null,null);e["default"]=T.exports},"8ba9":function(t,e,s){"use strict";var a=s("03b8"),n=s.n(a);n.a},a1e9:function(t,e,s){},d277:function(t,e,s){"use strict";var a=s("a1e9"),n=s.n(a);n.a},dd14:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"console q-ma-md full-height"},[s("p",{staticClass:"q-ma-sm"},[t._v("Console")]),s("ul",t._l(t.consoleLog,function(e){return s("li",{key:e.lineIndex,class:{error:e.isError,indent1:1==e.indent,indent2:2==e.indent,indent3:3==e.indent}},[t._v("\n      "+t._s(e.message)+"\n    ")])}),0)])},n=[],l=s("b506"),i=s.n(l),o=s("9ce4"),c={name:"AppConsole",data:function(){return{}},computed:i()({},Object(o["c"])("sockets",["consoleLog"]))},r=c,d=(s("d277"),s("2be6")),u=Object(d["a"])(r,a,n,!1,null,"99bdb7ea",null);e["a"]=u.exports},f278:function(t,e,s){"use strict";var a=s("829a"),n=s.n(a);n.a}}]);
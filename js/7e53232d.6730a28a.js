(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7e53232d"],{"0470":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"no-scroll"},[e("q-tabs",{staticClass:"narrow",attrs:{color:"dark","underline-color":"primary"}},[e("q-tab",{attrs:{slot:"title",default:"",iconx:"fal fa-sync-alt fa-sm",label:"Students",name:"students"},slot:"title"}),e("q-tab",{attrs:{slot:"title",label:"Staff",exact:""},slot:"title"}),e("q-tab",{attrs:{slot:"title",iconx:"fal fa-user-md fa-sm",label:"Parents",exact:""},slot:"title"}),e("q-tab",{attrs:{slot:"title",iconx:"fal fa-user-md fa-sm",label:"School",exact:""},slot:"title"}),e("q-tab-pane",{attrs:{name:"students"}},[e("studentSync")],1)],1)],1)},n=[];a._withStripped=!0;var l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{},[e("div",{staticClass:"row"},[e("h4",{staticClass:"text-secondary q-my-sm",attrs:{color:"white"}},[t._v("iSAMS Students")]),e("q-btn-toggle",{attrs:{push:"",dark:"","toggle-color":"primary",options:[{label:"Cake",value:"cake"},{label:"Ice cream",value:"ice-cream"}]}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-8"},[e("q-table",{staticClass:"q-pr-lg no-shadow",staticStyle:{"min-widthx":"800px"},attrs:{data:t.misStudents,columns:t.columns,filter:t.filter,"visible-columns":t.visibleColumns,loading:t.loading,separator:t.separator,pagination:t.paginationControl,"row-key":t.id,color:"primary",dark:"",dense:""},on:{"update:pagination":function(s){t.paginationControl=s}},scopedSlots:t._u([{key:"top-left",fn:function(s){return[e("q-search",{staticClass:"col-6 no-margin",attrs:{"hide-underline":"",color:"primary",dark:""},model:{value:t.filter,callback:function(s){t.filter=s},expression:"filter"}})]}},{key:"top-selection",fn:function(t){}},{key:"top-right",fn:function(t){}},{key:"body",fn:function(s){return e("q-tr",{attrs:{props:s}},[e("q-td",{key:"lastName",attrs:{props:s}},[t._v(t._s(s.row.txtSurname))]),e("q-td",{key:"firstName",attrs:{props:s}},[t._v(t._s(s.row.txtForename))]),e("q-td",{key:"gender",attrs:{props:s}},[t._v(t._s(s.row.txtGender))]),e("q-td",{key:"house",attrs:{props:s}},[t._v(t._s(s.row.txtBoardingHouse))])],1)}}])})],1),e("div",{staticClass:"col-4"},[e("div",{staticClass:"block border-primary q-ba-sm"},[e("div",{staticClass:"row"},[e("div",{attrs:{clsss:"col flex"}},[e("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"","stack-label":"# MIS Students"},model:{value:t.stats.misStudentCount,callback:function(s){t.$set(t.stats,"misStudentCount",s)},expression:"stats.misStudentCount"}})],1),e("div",{staticClass:"col"},[e("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"","stack-label":"# ADA Students"},model:{value:t.stats.adaStudentCount,callback:function(s){t.$set(t.stats,"adaStudentCount",s)},expression:"stats.adaStudentCount"}})],1)]),e("q-btn",{staticClass:"full-width q-mt-xl",attrs:{loading:t.loading,percentage:t.syncProgress,color:"primary","icon-right":"fal fa-sync fa-xs"},on:{click:t.syncStudents}},[t._v("\n           Sync\n          "),e("span",{attrs:{slot:"loading"},slot:"loading"},[e("q-spinner-gears",{staticClass:"on-left"}),t._v("\n            Computing...\n          ")],1)]),t.syncIsComplete&&!t.loading?e("div",[e("h4",[t._v("Summary")]),e("div",{attrs:{clsss:"row"}},[e("div",{staticClass:"col"},[e("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"","stack-label":"New"},model:{value:t.results.new,callback:function(s){t.$set(t.results,"new",s)},expression:"results.new"}})],1)]),e("div",{staticClass:"row full-width"},[e("div",{staticClass:"col"},[e("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"","stack-label":"Updated"},model:{value:t.results.updated,callback:function(s){t.$set(t.results,"updated",s)},expression:"results.updated"}})],1)]),e("div",{staticClass:"row full-width"},[e("div",{staticClass:"col"},[e("q-input",{attrs:{type:"text",align:"left",suffix:"",color:"primary",dark:"",readonly:"","stack-label":"Disabled"},model:{value:t.results.disabled,callback:function(s){t.$set(t.results,"disabled",s)},expression:"results.disabled"}})],1)])]):t._e()],1)])])])},o=[];l._withStripped=!0;var i=e("8248"),r=e.n(i),c=e("94ea"),d=e("5516"),u={getMISStudents:function(t){d["a"].get("/admin/sync/misstudents").then(function(s){t(s.data)}).catch(function(t){console.log(t)})},postSyncStudents:function(t){d["a"].post("/admin/sync/students").then(function(s){t(s.data)}).catch(function(t){console.log(t)})}},p={name:"ComponentAdminSyncStudentSync",props:{},data:function(){return{id:"0",stats:{misStudentCount:0,adaStudentCount:0},misStudentCount:"",misStudents:[],selectedRows:[],filter:"",separator:"horizontal",pagination:{page:1},visibleColumns:["lastName","firstName","gender","house"],paginationControl:{rowsPerPage:40,page:1,sortBy:"lastName"},dark:!0,columns:[{name:"lastName",required:!0,label:"Name",align:"left",field:"txtSurname",sortable:!0},{name:"firstName",required:!0,label:"",align:"left",field:"txtForename",sortable:!0},{name:"gender",label:"M/F",field:"txtGender",sortable:!0},{name:"house",label:"Hs",field:"txtBoardingHouse",sortable:!0}],loading:!1,percentage:100,syncIsComplete:!1,results:[]}},methods:r()({},Object(c["b"])("sockets",["clearConsoleLog"]),{showMISStudents:function(t){this.misStudents=t.misStudents,this.stats=t.stats},syncStudents:function(){this.loading=!0,u.postSyncStudents(this.syncComplete)},syncComplete:function(t){this.results=t,this.loading=!1,this.syncIsComplete=!0,this.percentage=0}}),computed:r()({},Object(c["c"])("sockets",["progress"]),{syncProgress:function(){return this.progress("Admin/Sync/Students")}}),components:{},created:function(){u.getMISStudents(this.showMISStudents)}},f=p,m=(e("4751"),e("a6c2")),y=Object(m["a"])(f,l,o,!1,null,"f6306e48",null);y.options.__file="studentSync.vue";var g=y.exports,S={name:"PageAdminSync",components:{studentSync:g}},b=S,v=(e("158f"),Object(m["a"])(b,a,n,!1,null,null,null));v.options.__file="sync.vue";s["default"]=v.exports},"0dc4":function(t,s,e){},"158f":function(t,s,e){"use strict";var a=e("0dc4"),n=e.n(a);n.a},"3a1d":function(t,s,e){},4751:function(t,s,e){"use strict";var a=e("3a1d"),n=e.n(a);n.a}}]);
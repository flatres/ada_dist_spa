(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3a59199a"],{"584d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$q.fullscreen.isCapable?a("q-btn",{staticClass:"no-border q-mr-lg no-shadow text-secondary",class:{glow:t.$q.fullscreen.isActive},attrs:{icon:"fal fa-arrows-alt"},on:{click:function(e){return t.$q.fullscreen.toggle()}}}):t._e(),a("q-btn-dropdown",{staticClass:"no-border text-secondary",staticStyle:{"min-width":"60px"},attrs:{flat:"",round:"",dense:"",icon:"fal fa-user-circle","icon-right":"fas fa-sign-out-alt",align:"left"}},[a("q-list",{attrs:{link:""}},[a("q-item",{attrs:{name:"uiColor"}},[a("q-toggle",{attrs:{color:"primary",label:"Eye Strain"},model:{value:t.darkUI,callback:function(e){t.darkUI=e},expression:"darkUI"}})],1),a("q-item",{attrs:{name:"settings"},nativeOn:{click:function(e){return t.$router.replace("/user")}}},[a("q-item-section",{attrs:{avatar:"",icon:"fal fa-cog",color:"dark"}}),a("q-item-section",[a("q-item-label",{attrs:{label:""}},[t._v("Settings")])],1)],1),a("q-item",{attrs:{name:"logout"},nativeOn:{click:function(e){return t.logout(e)}}},[a("q-item-section",{attrs:{avater:"",color:"dark"}},[a("q-icon",{attrs:{name:"fal fa-lg fa-sign-out-alt"}})],1),a("q-item-section",[a("q-item-label",{attrs:{label:""}},[t._v("Logout")])],1)],1)],1)],1)],1)},n=[],o=(a("ae66"),{name:"ComponentUserOptions",props:{},data:function(){return{}},methods:{logout:function(){var t=this;this.$store.dispatch("user/logout").then(function(e){t.$router.replace("/login")})}},computed:{darkUI:{get:function(){return!this.$store.getters["user/isDark"]},set:function(t){this.$store.dispatch("user/isDark",!t)}}},components:{},created:function(){}}),l=o,r=(a("cd01"),a("2be6")),i=Object(r["a"])(l,s,n,!1,null,"881ef170",null);e["a"]=i.exports},"98f1":function(t,e,a){},c0f5:function(t,e,a){"use strict";var s=a("4778");e["a"]={getStudentNames:function(t,e){s["a"].get("/students/names").then(function(e){t(e.data)}).catch(function(t){console.log(t)})},getStudentList:function(t,e){s["a"].get("/students/list").then(function(e){t(e.data)}).catch(function(t){console.log(t)})}}},cd01:function(t,e,a){"use strict";var s=a("98f1"),n=a.n(s);n.a},dce4:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"no-scroll"},[a("q-toolbar",{attrs:{glossy:"matx"===t.$q.theme,inverted:"iosx"===t.$q.theme}},[a("q-btn",{staticClass:"no-border",attrs:{flat:"",round:"",dense:"",icon:"fal fa-child",color:"primary"}}),a("q-select",{staticClass:"q-ml-sm",staticStyle:{width:"200px","margin-left":"30px","margin-right":"30px"},attrs:{filter:"",options:t.names,"stack-labels":"Select Student",dark:t.isDark},model:{value:t.selectedStudent,callback:function(e){t.selectedStudent=e},expression:"selectedStudent"}}),a("q-toolbar-title",{staticClass:"text-primary"},[a("q-tabs",{attrs:{color:"black","underline-color":"primary"}},[a("q-route-tab",{attrs:{slot:"title",default:"",icon:"fal fa-head-side fa-sm",label:"Profile",to:"/students/profile",exact:""},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"fal fa-list fa-sm",label:"List",to:"/students/list",exact:""},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"fal fa-users fa-sm",label:"Groups",to:"/students/profile",exact:""},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"fal fal fa-pen-alt fa-sm",label:"Reports",to:"/students/profile",exact:""},slot:"title"})],1)],1),a("user-options",{staticClass:"q-ml-lg"})],1),a("router-view")],1)},n=[],o=a("b506"),l=a.n(o),r=a("584d"),i=a("9ce4"),c=a("c0f5"),u={name:"PageStudentsIndex",components:{userOptions:r["a"]},data:function(){return{selectedStudent:null,names:[]}},computed:l()({},Object(i["c"])("user",["getPageAccess","getModuleColor"]),Object(i["e"])("user",["isDark"])),methods:l()({},Object(i["b"])("user",["setPrimaryColor"])),mounted:function(){},created:function(){var t=this;c["a"].getStudentNames(function(e){t.names=e})}},f=u,d=a("2be6"),m=Object(d["a"])(f,s,n,!1,null,null,null);e["default"]=m.exports}}]);
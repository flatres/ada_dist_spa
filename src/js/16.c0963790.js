(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{2962:function(t,e,s){},"5b6e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{staticClass:"primary-layout",staticStyle:{"overflow-y":"hidden"},attrs:{id:"primaryLayout",view:"HHh Lpr lFf"}},[s("q-header",{staticClass:"fixed-top",attrs:{stylex:"max-height:40px"}},[s("q-toolbar",{staticClass:"bg-secondary",staticStyle:{"min-height":"40px","max-height":"40px"},attrs:{id:"top-toolbar"}},[s("img",{staticClass:"q-ml-sm",attrs:{width:"20px",src:"/statics/icons/plain.svg"}}),s("q-space"),s("user-options",{staticClass:"q-ml-lg"})],1)],1),s("q-drawer",{staticClass:"drawer-border",staticStyle:{top:"0px!important"},attrs:{id:"primaryLayoutDrawer",mini:t.miniModeOn,behaviour:"desktop",breakpoint:t.breakpointx,"content-class":"bg-primary","content-style":{overflow:"visible!important",paddingTop:"40px"}},on:{mouseover:t.hideTextProcess,mouseout:t.hideTextProcess},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[s("q-list",{staticClass:"q-mt-sm text-primary",attrs:{"no-border":"",link:"","inset-":"",classx:{hideText:t.hideText}}},[s("q-item",{staticClass:"q-pa-xs q-mb-sm",attrs:{clickable:""},on:{click:function(e){t.miniModeOn=!t.miniModeOn}}},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"menu"}})],1)],1),s("router-link",{attrs:{to:"/",exact:""}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-home"}})],1),s("q-item-section",[t._v("Home")])],1)],1),t.hasModuleAccess("comms")?s("router-link",{attrs:{to:"/",exact:""}},[s("q-item",{staticClass:"q-pa-xs",attrs:{count:"3"}},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{name:"fad fa-envelope"}})],1),s("q-item-section",[t._v("Comms")])],1)],1):t._e(),t.hasModuleAccess("students")?s("router-link",{attrs:{to:"/students",exact:""}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-child"}})],1),s("q-item-section",[t._v("Students")])],1)],1):t._e(),t.hasModuleAccess("smt")?s("router-link",{attrs:{to:"/smt",exact:""}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-cheese-swiss"}})],1),s("q-item-section",[t._v("SMT")])],1)],1):t._e(),t.hasModuleAccess("hm")?s("router-link",{attrs:{to:"/hm",exact:""}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-paw-claws"}})],1),s("q-item-section",[t._v("HM")])],1)],1):t._e(),t.hasModuleAccess("accounts")?s("router-link",{attrs:{to:"/accounts",exact:""}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-credit-card"}})],1),s("q-item-section",[t._v("Accounts")])],1)],1):t._e(),t.hasModuleAccess("beaks")?s("router-link",{attrs:{to:"/",exact:""}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-graduation-cap"}})],1),s("q-item-section",[t._v("Beaks")])],1)],1):t._e(),t.hasModuleAccess("watch")?s("router-link",{staticClass:"bg-black",attrs:{to:"/watch",exact:""}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-eye"}})],1),s("q-item-section",[t._v("Watch")])],1)],1):t._e(),t.hasModuleAccess("bookings")?s("router-link",{staticClass:"bg-black",attrs:{to:"/",exact:""}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-calendar-check"}})],1),s("q-item-section",[t._v("Bookings")])],1)],1):t._e(),t.hasModuleAccess("exams")?s("router-link",{staticClass:"bg-black",attrs:{to:"/exams"}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-university"}})],1),s("q-item-section",[t._v("Exams")])],1)],1):t._e(),t.hasModuleAccess("transport")?s("router-link",{staticClass:"bg-black",attrs:{to:"/transport"}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-center q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-space-shuttle"}})],1),s("q-item-section",[t._v("Transport")])],1)],1):t._e(),t.hasModuleAccess("lab")?s("router-link",{staticClass:"bg-black",attrs:{to:"/lab"}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-left q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-flask"}})],1),t.miniModeOn?t._e():s("q-item-section",[t._v("Lab")])],1)],1):t._e(),t.hasModuleAccess("admin")?s("router-link",{staticClass:"bg-black",attrs:{to:"/admin"}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-left q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-wrench"}})],1),s("q-item-section",[t._v("Admin")])],1)],1):t._e(),t.hasModuleAccess("academic")?s("router-link",{staticClass:"bg-black",attrs:{to:"/academic"}},[s("q-item",{staticClass:"q-pa-xs"},[s("q-item-section",{staticClass:"flex-left q-pl-sm",attrs:{side:""}},[s("q-icon",{attrs:{color:"font-secondary",name:"fad fa-smile"}})],1),s("q-item-section",[t._v("Academic")])],1)],1):t._e()],1)],1),s("q-page-container",{staticClass:"no-scroll bg-toolbar",staticStyle:{"padding-top":"0px","padding-bottom":"0px",heightx:"100vh"}},[s("router-view")],1)],1)},o=[],c=(s("e125"),s("4823"),s("2e73"),s("dde3"),s("76d0"),s("0c1f"),s("ae66"),s("8e9e")),i=s.n(c),r=s("c569"),n=s("9ce4"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-btn",{staticClass:"q-mr-sm",attrs:{round:"",color:t.isDark?"font":"accent",size:"sm",icon:"fad fa-sun",flat:""},on:{click:function(e){t.isDark=!t.isDark}}},[s("q-tooltip",[t._v("\n      Eye strain mode\n    ")])],1),t.$q.fullscreen.isCapable?s("q-btn",{staticClass:"no-border q-mr-sm no-shadow",class:{glow:t.$q.fullscreen.isActive},attrs:{icon:"fad fa-arrows-alt",flat:"",color:t.$q.fullscreen.isActive?"accent":"font",size:"sm",round:""},on:{click:function(e){return t.$q.fullscreen.toggle()}}},[s("q-tooltip",[t._v("\n        Toggle full screen\n      ")])],1):t._e(),s("q-btn",{staticClass:"q-mr-sm",attrs:{round:"",color:"font",size:"sm",icon:"fad fa-bug",flat:""},on:{click:t.bug}},[s("q-tooltip",[t._v("\n      Report a bug\n    ")])],1),s("q-btn",{staticClass:"q-mr-sm",attrs:{round:"",color:"font",size:"sm",icon:"fad fa-sign-out",flat:""},on:{click:t.logout}},[s("q-tooltip",[t._v("\n      Sign out\n    ")])],1),s("q-dialog",{model:{value:t.showBug,callback:function(e){t.showBug=e},expression:"showBug"}},[s("q-card",{staticClass:"bg-tertiary",staticStyle:{width:"700px","max-width":"80vw"}},[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Report Bug / Suggest Feature")])]),s("q-card-section",[s("q-input",{attrs:{filled:"",label:"Subject"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),s("q-input",{staticClass:"q-mt-md",attrs:{filled:"",type:"textarea",label:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),s("q-card-section",[s("p",[t._v(t._s(t.$route.path))])]),s("q-card-actions",{staticClass:"bg-secondary text-gont",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Forget it",outline:"",color:"font"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Send",outline:"",color:"accent"},on:{click:t.send}})],1)],1)],1)],1)},u=[],m=s("4778");function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(Object(s),!0).forEach((function(e){i()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var f={name:"ComponentUserOptions",props:{},data:function(){return{showBug:!1,subject:"",message:""}},methods:{logout:function(){var t=this;this.$store.dispatch("user/logout").then((function(e){t.$router.replace("/login")}))},bug:function(){this.showBug=!0},send:function(){var t=this,e={userId:this.userId,path:this.$route.path,subject:this.subject,message:this.message};m["a"].post("/auth/bug",e).then((function(e){t.message="",t.subject=""})).catch((function(t){console.warn(t)}))}},computed:p({},Object(n["e"])("user",["name","userId"]),{route:function(){return this.$route.path},isDark:{get:function(){return this.$store.getters["user/isDarkMode"]},set:function(t){this.$store.dispatch("user/isDarkMode",t)}}}),components:{},created:function(){console.log(this.$route)}},q=f,h=(s("e40b"),s("2be6")),b=Object(h["a"])(q,l,u,!1,null,"32c79a36",null),g=b.exports;function x(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?x(Object(s),!0).forEach((function(e){i()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var v={name:"LayoutDefault",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop,miniModeOn:!0,hideText:!0,router:this.$router,breakpoint:1}},methods:{openURL:r["a"],hasModuleAccess:function(t){return this.getModuleAccess(t)},hideTextProcess:function(){this.hideText=!this.hideText},go:function(t){this.$router.push(t)}},computed:y({},Object(n["e"])("user",["isDark","isLight"]),{},Object(n["c"])("user",["permissions","getModuleAccess","getModuleColor"]),{},Object(n["c"])("sockets",["isConnected"]),{keymap:function(){return{"ctrl+1":this.toggle,enter:{keydown:this.hide,keyup:this.show}}}}),created:function(){var t=this;this.$store.dispatch("user/tryAutoLogin").then((function(e){!0===e||t.$router.replace("/login")}))},components:{userOptions:g}},k=v,C=(s("7f67"),Object(h["a"])(k,a,o,!1,null,null,null));e["default"]=C.exports},"5fa6":function(t,e,s){},"7f67":function(t,e,s){"use strict";var a=s("2962"),o=s.n(a);o.a},e40b:function(t,e,s){"use strict";var a=s("5fa6"),o=s.n(a);o.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["80d55ca8"],{"0cb4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("module-index",{attrs:{icon:t.icon,module:t.module,routes:t.routes}})},r=[],o=n("ca92"),s={name:"PageAccountsIndex",data:function(){return{icon:"fal fa-credit-card",module:"accounts",routes:[{label:"stats",page:"stats",icon:"fal fa-chart-pie",route:"accounts/stats"}]}},components:{moduleIndex:o["a"]},computed:{},methods:{},created:function(){},mounted:function(){}},i=s,l=n("2be6"),c=Object(l["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},1232:function(t,e,n){},"300f":function(t,e,n){"use strict";var a=n("1232"),r=n.n(a);r.a},"4f09":function(t,e,n){},"584d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$q.fullscreen.isCapable?n("q-btn",{staticClass:"no-border q-mr-lg no-shadow text-white",class:{glow:t.$q.fullscreen.isActive},attrs:{icon:"fal fa-arrows-alt"},on:{click:function(e){return t.$q.fullscreen.toggle()}}}):t._e(),n("q-btn-dropdown",{staticClass:"no-border text-white",staticStyle:{"min-width":"60px"},attrs:{flat:"",round:"",dense:"",icon:"fal fa-user-circle","icon-rightx":"fas fa-sign-out-alt",align:"left","content-class":"bg-grey-9 text-white","content-style":"width:180px"}},[n("q-list",{staticStyle:{"min-width":"160px"},attrs:{link:""}},[n("q-item",{attrs:{name:"bug"},nativeOn:{click:function(e){return t.bug(e)}}},[n("q-item-section",{attrs:{avater:"",color:"dark"}},[n("q-icon",{staticClass:"q-ml-md",attrs:{name:"fal fa-lg fa-bug"}})],1),n("q-item-section",{staticClass:"text-left"},[n("q-item-label",{staticClass:"text-left",attrs:{label:""}},[t._v("Report Bug")])],1)],1),n("q-item",{attrs:{name:"uiColor",clickable:""}},[n("q-toggle",{attrs:{color:"primary",label:"Eye Strain"},model:{value:t.darkUI,callback:function(e){t.darkUI=e},expression:"darkUI"}})],1),n("q-item",{attrs:{name:"logout"},nativeOn:{click:function(e){return t.logout(e)}}},[n("q-item-section",{attrs:{avater:"",color:"dark"}},[n("q-icon",{staticClass:"q-ml-md",attrs:{name:"fal fa-lg fa-sign-out-alt"}})],1),n("q-item-section",[n("q-item-label",{attrs:{label:""}},[t._v("Logout")])],1)],1)],1)],1)],1)},r=[],o=(n("ae66"),{name:"ComponentUserOptions",props:{},data:function(){return{}},methods:{logout:function(){var t=this;this.$store.dispatch("user/logout").then((function(e){t.$router.replace("/login")}))}},computed:{darkUI:{get:function(){return!this.$store.getters["user/isDark"]},set:function(t){this.$store.dispatch("user/isDark",!t)}}},components:{},created:function(){}}),s=o,i=(n("6ad4"),n("2be6")),l=Object(i["a"])(s,a,r,!1,null,"b38bc52a",null);e["a"]=l.exports},"6ad4":function(t,e,n){"use strict";var a=n("4f09"),r=n.n(a);r.a},ca92:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"no-scroll"},[n("q-toolbar",{class:{"bg-mc":t.isLight,"bg-dark":t.isDark}},[n("q-btn",{staticClass:"no-border glow",attrs:{flat:"",round:"",dense:"",icon:t.icon,color:"primary"}}),n("q-tabs",{staticClass:"q-pt-sm q-pl-sm",class:t.isLightx?"secondary-light":"text-secondary",attrs:{"inline-label":"","active-color":t.isLightx?"primary-light":"primary",dense:"",shrink:"",align:"left"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.routes,(function(e,a){return t.getPageAccess(t.module,e.page)?n("q-route-tab",{key:e.name,attrs:{default:1==a,name:e.page,icon:e.icon+" fa-mu",label:e.label,to:e.route,exact:""}}):t._e()})),1),n("q-space"),t.settingsRoute?n("q-btn",{staticClass:"no-shadow",attrs:{icon:t.settingsIcon,"text-color":t.$router.currentRoute.path===t.settingsRoute?"primary":"secondary"},on:{click:function(e){return t.$router.push(t.settingsRoute)}}}):t._e(),t.options.length>0?n("q-select",{staticClass:"no-margin text-secondary q-my-sm",class:{"bg-dark":t.isDark},staticStyle:{"min-width":"250px","max-width":"500px","border-radius":"5px"},attrs:{outlined:"",options:t.options,label:t.label,dense:"","options-dense":"","options-dark":"",dark:"","map-options":"",inverted:"",placeholder:t.placeholder,filter:"","filter-placeholder":"search",color:t.globalInterface?"primary":"warning"},model:{value:t.globalInterface,callback:function(e){t.globalInterface=e},expression:"globalInterface"}}):t._e(),n("user-options",{staticClass:"q-ml-lg"})],1),n("router-view",{class:{"bg-dark":t.isDark,"bg-white light-ui":t.isLight}})],1)},r=[],o=(n("e125"),n("4823"),n("2e73"),n("dde3"),n("76d0"),n("0c1f"),n("8e9e")),s=n.n(o),i=n("584d"),l=n("9ce4");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){s()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"ComponentModuleIndex",props:{settingsRoute:{default:null},settingsIcon:{type:String,default:"fal fa-cogs"},options:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"Select"},label:{type:String,default:"Global"},icon:{type:String,default:"fal fa-bomb"},module:{retured:!0,type:String},routes:{required:!0,type:Array,default:function(){return[{label:"Test",page:"test",icon:"fal fa-bug",route:""}]}},active:null},data:function(){return{currentTab:null}},components:{userOptions:i["a"]},computed:u({},Object(l["e"])("user",["isDark","isLight"]),{},Object(l["c"])("user",["getPageAccess","getModuleColor"]),{globalInterface:{get:function(){return this.active},set:function(t){this.$emit("set",t)}}}),methods:u({},Object(l["b"])("user",["setPrimaryColor"])),mounted:function(){},created:function(){}},f=d,p=(n("300f"),n("2be6")),g=Object(p["a"])(f,a,r,!1,null,"02564d16",null);e["a"]=g.exports}}]);
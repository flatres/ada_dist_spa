(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["da30747c"],{"0cb4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("module-index",{attrs:{icon:t.icon,module:t.module,routes:t.routes}})},o=[],r=a("ca92"),s={name:"PageAccountsIndex",data:function(){return{icon:"fal fa-credit-card",module:"accounts",routes:[{label:"stats",page:"stats",icon:"fal fa-chart-pie",route:"accounts/stats"}]}},components:{moduleIndex:r["a"]},computed:{},methods:{},created:function(){},mounted:function(){}},l=s,i=a("2be6"),c=Object(i["a"])(l,n,o,!1,null,null,null);e["default"]=c.exports},"40b2":function(t,e,a){"use strict";var n=a("61b7"),o=a.n(n);o.a},"584d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$q.fullscreen.isCapable?a("q-btn",{staticClass:"no-border q-mr-lg no-shadow text-white",class:{glow:t.$q.fullscreen.isActive},attrs:{icon:"fal fa-arrows-alt"},on:{click:function(e){return t.$q.fullscreen.toggle()}}}):t._e(),a("q-btn-dropdown",{staticClass:"no-border text-white",staticStyle:{"min-width":"60px"},attrs:{flat:"",round:"",dense:"",icon:"fal fa-user-circle","icon-right":"fas fa-sign-out-alt",align:"left","content-class":"bg-grey-9 text-white"}},[a("q-list",{attrs:{link:""}},[a("q-item",{attrs:{name:"uiColor"}},[a("q-toggle",{attrs:{color:"primary",label:"Eye Strain"},model:{value:t.darkUI,callback:function(e){t.darkUI=e},expression:"darkUI"}})],1),a("q-item",{attrs:{name:"logout"},nativeOn:{click:function(e){return t.logout(e)}}},[a("q-item-section",{attrs:{avater:"",color:"dark"}},[a("q-icon",{staticClass:"q-ml-md",attrs:{name:"fal fa-lg fa-sign-out-alt"}})],1),a("q-item-section",[a("q-item-label",{attrs:{label:""}},[t._v("Logout")])],1)],1)],1)],1)],1)},o=[],r=(a("ae66"),{name:"ComponentUserOptions",props:{},data:function(){return{}},methods:{logout:function(){var t=this;this.$store.dispatch("user/logout").then(function(e){t.$router.replace("/login")})}},computed:{darkUI:{get:function(){return!this.$store.getters["user/isDark"]},set:function(t){this.$store.dispatch("user/isDark",!t)}}},components:{},created:function(){}}),s=r,l=(a("40b2"),a("2be6")),i=Object(l["a"])(s,n,o,!1,null,"661727a0",null);e["a"]=i.exports},"5d11":function(t,e,a){"use strict";var n=a("b426"),o=a.n(n);o.a},"61b7":function(t,e,a){},b426:function(t,e,a){},ca92:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"no-scroll"},[a("q-toolbar",{class:{"bg-mc":t.isLight}},[a("q-btn",{staticClass:"no-border glow",attrs:{flat:"",round:"",dense:"",icon:t.icon,color:"primary"}}),a("q-tabs",{staticClass:"q-pt-sm q-pl-sm",class:t.isLightx?"secondary-light":"text-secondary",attrs:{"inline-label":"","active-color":t.isLightx?"primary-light":"primary",dense:"",shrink:"",align:"left"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.routes,function(e,n){return t.getPageAccess(t.module,e.page)?a("q-route-tab",{key:e.name,attrs:{default:1==n,name:e.page,icon:e.icon+" fa-mu",label:e.label,to:e.route,exact:""}}):t._e()}),1),a("q-space"),t.settingsRoute?a("q-btn",{staticClass:"no-shadow",attrs:{icon:t.settingsIcon,"text-color":t.$router.currentRoute.path===t.settingsRoute?"primary":"secondary"},on:{click:function(e){return t.$router.push(t.settingsRoute)}}}):t._e(),t.options.length>0?a("q-select",{staticClass:"no-margin text-secondary q-my-sm",class:{"bg-dark":t.isDark},staticStyle:{"min-width":"250px","max-width":"500px","border-radius":"5px"},attrs:{outlined:"",options:t.options,label:t.label,dense:"","options-dense":"","options-dark":"",dark:"","map-options":"",inverted:"",placeholder:t.placeholder,filter:"","filter-placeholder":"search",color:t.globalInterface?"primary":"warning"},model:{value:t.globalInterface,callback:function(e){t.globalInterface=e},expression:"globalInterface"}}):t._e(),a("user-options",{staticClass:"q-ml-lg"})],1),a("router-view",{class:{"bg-dark":t.isDark,"bg-white light-ui":t.isLight}})],1)},o=[],r=a("2a99"),s=a.n(r),l=a("584d"),i=a("9ce4"),c={name:"ComponentModuleIndex",props:{settingsRoute:{default:null},settingsIcon:{type:String,default:"fal fa-cogs"},options:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"Select"},label:{type:String,default:"Global"},icon:{type:String,default:"fal fa-bomb"},module:{retured:!0,type:String},routes:{required:!0,type:Array,default:function(){return[{label:"Test",page:"test",icon:"fal fa-bug",route:""}]}},active:null},data:function(){return{currentTab:null}},components:{userOptions:l["a"]},computed:s()({},Object(i["e"])("user",["isDark","isLight"]),{},Object(i["c"])("user",["getPageAccess","getModuleColor"]),{globalInterface:{get:function(){return this.active},set:function(t){this.$emit("set",t)}}}),methods:s()({},Object(i["b"])("user",["setPrimaryColor"])),mounted:function(){},created:function(){}},u=c,d=(a("5d11"),a("2be6")),f=Object(d["a"])(u,n,o,!1,null,"6d279844",null);e["a"]=f.exports}}]);
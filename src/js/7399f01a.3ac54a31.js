(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7399f01a"],{"27c4":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("module-index",{attrs:{icon:t.icon,module:t.module,routes:t.routes,settingsRoute:t.globalSettingsRoute,settingsIcon:t.globalSettingsIcon,options:t.globalOptions,active:t.activeSession},on:{set:t.setActive}})},r=[],s=(n("e125"),n("4823"),n("2e73"),n("dde3"),n("76d0"),n("0c1f"),n("288e"),n("8e9e")),a=n.n(s),i=n("ca92"),c=n("4778"),l=n("452d"),u={getBookings:function(t,e,n){var o=l["a"].getters["transport/activeSession"];c["a"].get("/transport/ext/taxis/bookings/"+o).then(function(e){t(e.data)}).catch(function(t){console.log(t)})},getBooking:function(t,e,n){var o=l["a"].getters["transport/activeSession"];c["a"].get("/transport/ext/taxis/bookings/"+o+"/"+n.id).then(function(e){t(e.data)}).catch(function(t){console.log(t)})},putBooking:function(t,e,n){c["a"].put("/transport/ext/taxis/bookings",n).then(function(e){t(e.data)}).catch(function(t){console.log(t),e()})},postBooking:function(t,e,n){c["a"].post("/transport/ext/taxis/bookings",n).then(function(e){t(e.data)}).catch(function(t){console.log(t),e()})},deleteBooking:function(t,e,n){c["a"].delete("/transport/ext/taxis/bookings/"+n).then(function(e){t(e.data)}).catch(function(t){console.log(t)})}},f=n("9ce4");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach(function(e){a()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var b={name:"PageHMIndex",data:function(){return{icon:"fal fa-paw-claws",module:"hm",routes:[{label:"Home",page:"where",icon:"fal fa-home",route:"hm/where"},{label:"Where",page:"where",icon:"fal fa-crosshairs",route:"hm/where"}],globalSettingsRoute:"/hm/houses",globalSettingsIcon:"fal fa-home",sessions:[],activeSession:null}},components:{moduleIndex:i["a"]},computed:{globalOptions:function(){return this.sessions.map(function(t){return{value:t.TblCoachesExeatsID,label:t.txtDescription,sublabel:"1"===t.boolActive?"ACTIVE":""}})}},methods:g({},Object(f["d"])("hm",["setActiveHouse"]),{setGlobalOptions:function(t){this.sessions=t;var e=this.globalOptions.find(function(t){return"ACTIVE"===t.sublabel});e&&(this.activeSession=e,this.setActiveSession(e.TblCoachesExeatsID))},getGlobalOptions:function(){u.getSessions(this.setGlobalOptions)},setActive:function(t){this.activeSession=t}}),created:function(){this.getGlobalOptions()},mounted:function(){}},d=b,h=n("2be6"),m=Object(h["a"])(d,o,r,!1,null,null,null);e["default"]=m.exports},"40b2":function(t,e,n){"use strict";var o=n("61b7"),r=n.n(o);r.a},"584d":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$q.fullscreen.isCapable?n("q-btn",{staticClass:"no-border q-mr-lg no-shadow text-white",class:{glow:t.$q.fullscreen.isActive},attrs:{icon:"fal fa-arrows-alt"},on:{click:function(e){return t.$q.fullscreen.toggle()}}}):t._e(),n("q-btn-dropdown",{staticClass:"no-border text-white",staticStyle:{"min-width":"60px"},attrs:{flat:"",round:"",dense:"",icon:"fal fa-user-circle","icon-right":"fas fa-sign-out-alt",align:"left","content-class":"bg-grey-9 text-white"}},[n("q-list",{attrs:{link:""}},[n("q-item",{attrs:{name:"uiColor"}},[n("q-toggle",{attrs:{color:"primary",label:"Eye Strain"},model:{value:t.darkUI,callback:function(e){t.darkUI=e},expression:"darkUI"}})],1),n("q-item",{attrs:{name:"logout"},nativeOn:{click:function(e){return t.logout(e)}}},[n("q-item-section",{attrs:{avater:"",color:"dark"}},[n("q-icon",{staticClass:"q-ml-md",attrs:{name:"fal fa-lg fa-sign-out-alt"}})],1),n("q-item-section",[n("q-item-label",{attrs:{label:""}},[t._v("Logout")])],1)],1)],1)],1)],1)},r=[],s=(n("ae66"),{name:"ComponentUserOptions",props:{},data:function(){return{}},methods:{logout:function(){var t=this;this.$store.dispatch("user/logout").then(function(e){t.$router.replace("/login")})}},computed:{darkUI:{get:function(){return!this.$store.getters["user/isDark"]},set:function(t){this.$store.dispatch("user/isDark",!t)}}},components:{},created:function(){}}),a=s,i=(n("40b2"),n("2be6")),c=Object(i["a"])(a,o,r,!1,null,"661727a0",null);e["a"]=c.exports},"5d11":function(t,e,n){"use strict";var o=n("b426"),r=n.n(o);r.a},"61b7":function(t,e,n){},b426:function(t,e,n){},ca92:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"no-scroll"},[n("q-toolbar",{class:{"bg-mc":t.isLight}},[n("q-btn",{staticClass:"no-border glow",attrs:{flat:"",round:"",dense:"",icon:t.icon,color:"primary"}}),n("q-tabs",{staticClass:"q-pt-sm q-pl-sm",class:t.isLightx?"secondary-light":"text-secondary",attrs:{"inline-label":"","active-color":t.isLightx?"primary-light":"primary",dense:"",shrink:"",align:"left"},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.routes,function(e,o){return t.getPageAccess(t.module,e.page)?n("q-route-tab",{key:e.name,attrs:{default:1==o,name:e.page,icon:e.icon+" fa-mu",label:e.label,to:e.route,exact:""}}):t._e()}),1),n("q-space"),t.settingsRoute?n("q-btn",{staticClass:"no-shadow",attrs:{icon:t.settingsIcon,"text-color":t.$router.currentRoute.path===t.settingsRoute?"primary":"secondary"},on:{click:function(e){return t.$router.push(t.settingsRoute)}}}):t._e(),t.options.length>0?n("q-select",{staticClass:"no-margin text-secondary q-my-sm",class:{"bg-dark":t.isDark},staticStyle:{"min-width":"250px","max-width":"500px","border-radius":"5px"},attrs:{outlined:"",options:t.options,label:t.label,dense:"","options-dense":"","options-dark":"",dark:"","map-options":"",inverted:"",placeholder:t.placeholder,filter:"","filter-placeholder":"search",color:t.globalInterface?"primary":"warning"},model:{value:t.globalInterface,callback:function(e){t.globalInterface=e},expression:"globalInterface"}}):t._e(),n("user-options",{staticClass:"q-ml-lg"})],1),n("router-view",{class:{"bg-dark":t.isDark,"bg-white light-ui":t.isLight}})],1)},r=[],s=(n("e125"),n("4823"),n("2e73"),n("dde3"),n("76d0"),n("0c1f"),n("8e9e")),a=n.n(s),i=n("584d"),c=n("9ce4");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach(function(e){a()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var f={name:"ComponentModuleIndex",props:{settingsRoute:{default:null},settingsIcon:{type:String,default:"fal fa-cogs"},options:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"Select"},label:{type:String,default:"Global"},icon:{type:String,default:"fal fa-bomb"},module:{retured:!0,type:String},routes:{required:!0,type:Array,default:function(){return[{label:"Test",page:"test",icon:"fal fa-bug",route:""}]}},active:null},data:function(){return{currentTab:null}},components:{userOptions:i["a"]},computed:u({},Object(c["e"])("user",["isDark","isLight"]),{},Object(c["c"])("user",["getPageAccess","getModuleColor"]),{globalInterface:{get:function(){return this.active},set:function(t){this.$emit("set",t)}}}),methods:u({},Object(c["b"])("user",["setPrimaryColor"])),mounted:function(){},created:function(){}},p=f,g=(n("5d11"),n("2be6")),b=Object(g["a"])(p,o,r,!1,null,"6d279844",null);e["a"]=b.exports}}]);
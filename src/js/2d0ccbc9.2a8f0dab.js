(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0ccbc9"],{"4ece":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("module-index",{attrs:{icon:t.icon,module:t.module,routes:t.routes,settingsRoute:t.globalSettingsRoute,settingsIcon:t.globalSettingsIcon,options:t.globalOptions,active:t.activeSession},on:{set:t.setActive}})},o=[],i=(s("e125"),s("4823"),s("2e73"),s("dde3"),s("76d0"),s("0c1f"),s("288e"),s("8e9e")),c=s.n(i),a=s("ca92"),r=s("9d37"),l=s("9ce4");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){c()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var b={name:"PageTransportIndex",data:function(){return{icon:"fal fa-space-shuttle",module:"transport",routes:[{label:"Taxis",page:"taxis",icon:"fal fa-car-side",route:"/transport/taxis"},{label:"Coaches",page:"coaches",icon:"fal fa-bus",route:"/transport/coaches"},{label:"Accounts",page:"accounts",icon:"fal fa-money",route:"/transport/accounts"}],globalSettingsRoute:"/transport/settings",globalSettingsIcon:"fal fa-cogs",sessions:[],activeSession:null}},components:{moduleIndex:a["a"]},computed:{globalOptions:function(){return this.sessions.map((function(t){return{value:t.id,label:t.description,sublabel:1===t.isActive?"ACTIVE":""}}))}},methods:p({},Object(l["d"])("transport",["setActiveSession"]),{setGlobalOptions:function(t){this.sessions=t;var e=this.globalOptions.find((function(t){return"ACTIVE"===t.sublabel}));e&&(this.activeSession=e,this.setActiveSession(e.value))},getGlobalOptions:function(){r["a"].getSessions(this.setGlobalOptions)},setActive:function(t){this.activeSession=t.value,this.setActiveSession(this.activeSession)}}),created:function(){this.getGlobalOptions(),this.$router.push("/transport/taxis")},mounted:function(){}},f=b,g=s("2be6"),d=Object(g["a"])(f,n,o,!1,null,null,null);e["default"]=d.exports}}]);
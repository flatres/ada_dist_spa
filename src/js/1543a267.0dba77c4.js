(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1543a267"],{"08e9":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"no-scroll toolbar-page"},[a("q-toolbar",{class:{"text-white bg-toolbar":e.isDark,"text-black bg-white-3":e.isLight},attrs:{dense:"",shrink:"",classx:"text-white shadow-2 rounded-borders narrowx justify"}},[a("q-tabs",{staticClass:"tbp-tabs",attrs:{dense:"",shrink:"","active-color":e.isLight?"#011b48":"primary"},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.elements,function(t){return a("div",{key:t.name},[t.menu?e._e():a("q-tab",{attrs:{label:t.label,name:t.name,icon:t.icon}}),t.menu?a("q-btn",{attrs:{flat:"",size:"sm",label:t.label,icon:t.icon?t.icon:"fal fa-caret-down","text-color":e.isDark?"white":"primary"}},[a("q-menu",{ref:"settingsPopover",refInFor:!0,attrs:{"content-class":"bg-grey-9 text-white","auto-close":""}},[a("q-list",{attrs:{"item-separator":"",link:"","content-class":"bg-primary"}},e._l(t.menu,function(t){return a("q-item",{key:t.name,attrs:{clickable:""},nativeOn:{click:function(a){return e.clickMenu(t)}}},[a("q-item-section",{attrs:{avatar:"",left:"",dark:""}},[a("q-icon",{attrs:{size:"20px",name:t.icon}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))])],1)],1)}),1)],1)],1):e._e()],1)}),0),a("q-space"),e._t("side")],2),a("q-tab-panels",{model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.tabPanels,function(t){return a("q-tab-panel",{key:t.name,attrs:{name:t.name}},[a(t.component,{tag:"component",on:{close:e.close}})],1)}),1)],1)},c=[],s=(a("e125"),a("4823"),a("2e73"),a("dde3"),a("76d0"),a("0c1f"),a("c880"),a("8e9e")),o=a.n(s),r=a("9ce4");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){o()(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u={name:"ComponentPageToolbar",props:{default:null,elements:null},watch:{selectedTab:function(){console.log(":",this.selectedTab)}},data:function(){return{selectedTab:null}},computed:i({},Object(r["e"])("user",["isDark","isLight"]),{tabPanels:function(){var e=[];return this.elements.forEach(function(t){t.menu?t.menu.forEach(function(t){e.push({name:t.name,component:t.component})}):e.push({name:t.name,component:t.component})}),e}}),methods:{close:function(){this.selectedTab=this.default},clickMenu:function(e){e.name&&(this.selectedTab=e.name),e.event&&this.$emit(e.event)}},created:function(){this.selectedTab=this.default}},m=u,b=(a("b0d4"),a("2be6")),d=Object(b["a"])(m,n,c,!1,null,null,null);t["a"]=d.exports},"5a6a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("toolbar-page",{attrs:{elements:e.elements,default:"areas"}})},c=[],s=a("08e9"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("crud",{ref:"crud",staticStyle:{max:"height:80vh"},attrs:{api:e.areasApi,columns:e.areaColumns,sortBy:"name",search:"",rowsPerPage:"15"},on:{clickedRow:e.clickedArea}})],1),a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-4"})])},r=[],l=a("d612"),i=a("4778"),u={getAreas:function(e,t,a){i["a"].get("/location/system/areas ").then(function(t){e(t.data)}).catch(function(e){console.log(e)})},getArea:function(e,t,a){i["a"].get("/location/system/areas/"+a).then(function(t){e(t.data)}).catch(function(e){console.log(e)})}},m={name:"ComponentLocationSystemAreas",data:function(){return{areasApi:{get:u.getAreas},areaColumns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"Name",label:"Name",field:"name",type:"string",align:"left"}],areaData:[]}},methods:{clickedArea:function(e){var t=this;u.getArea(function(e){t.areaData=e},null,e),console.log(e)}},computed:{},components:{Crud:l["a"]},created:function(){}},b=m,d=(a("6c93"),a("2be6")),f=Object(d["a"])(b,o,r,!1,null,"38de7668",null),p=f.exports,h={name:"PageDataLocation",data:function(){return{elements:[{name:"areas",label:"areas",component:p,shortcut:"b"},{name:"advanced",label:"advanced",shortcut:"a"},{name:"options",label:"basic",menu:[{name:"basic",label:"Basic",shortcut:"b",icon:"fal fa-child"}]}]}},components:{toolbarPage:s["a"]}},g=h,v=Object(d["a"])(g,n,c,!1,null,null,null);t["default"]=v.exports},"6c93":function(e,t,a){"use strict";var n=a("ed85"),c=a.n(n);c.a},b0d4:function(e,t,a){"use strict";var n=a("b3f7"),c=a.n(n);c.a},b3f7:function(e,t,a){},ed85:function(e,t,a){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5f1b8667"],{"08e9":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"no-scroll toolbar-page"},[a("q-toolbar",{class:{"text-white bg-toolbar":e.isDark,"text-black bg-white-3":e.isLight},attrs:{dense:"",shrink:"",classx:"text-white shadow-2 rounded-borders narrowx justify"}},[a("q-tabs",{staticClass:"tbp-tabs",attrs:{dense:"",shrink:"","active-color":e.isLight?"#011b48":"primary"},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.elements,function(t){return a("div",{key:t.name},[t.menu?e._e():a("q-tab",{attrs:{label:t.label,name:t.name,icon:t.icon}}),t.menu?a("q-btn",{attrs:{flat:"",size:"sm",label:t.label,icon:t.icon?t.icon:"fal fa-caret-down","text-color":e.isDark?"white":"primary"}},[a("q-menu",{ref:"settingsPopover",refInFor:!0,attrs:{"content-class":"bg-grey-9 text-white","auto-close":""}},[a("q-list",{attrs:{"item-separator":"",link:"","content-class":"bg-primary"}},e._l(t.menu,function(t){return a("q-item",{key:t.name,attrs:{clickable:""},nativeOn:{click:function(a){return e.clickMenu(t)}}},[a("q-item-section",{attrs:{avatar:"",left:"",dark:""}},[a("q-icon",{attrs:{size:"20px",name:t.icon}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))])],1)],1)}),1)],1)],1):e._e()],1)}),0),a("q-space"),e._t("side")],2),a("q-tab-panels",{model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.tabPanels,function(t){return a("q-tab-panel",{key:t.name,attrs:{name:t.name}},[a(t.component,{tag:"component",on:{close:e.close}})],1)}),1)],1)},s=[],c=(a("c880"),a("2a99")),o=a.n(c),l=a("9ce4"),i={name:"ComponentPageToolbar",props:{default:null,elements:null},watch:{selectedTab:function(){console.log(":",this.selectedTab)}},data:function(){return{selectedTab:null}},computed:o()({},Object(l["e"])("user",["isDark","isLight"]),{tabPanels:function(){var e=[];return this.elements.forEach(function(t){t.menu?t.menu.forEach(function(t){e.push({name:t.name,component:t.component})}):e.push({name:t.name,component:t.component})}),e}}),methods:{close:function(){this.selectedTab=this.default},clickMenu:function(e){e.name&&(this.selectedTab=e.name),e.event&&this.$emit(e.event)}},created:function(){this.selectedTab=this.default}},r=i,u=(a("b0d4"),a("2be6")),m=Object(u["a"])(r,n,s,!1,null,null,null);t["a"]=m.exports},"7db1":function(e,t,a){"use strict";var n=a("cf65"),s=a.n(n);s.a},b0d4:function(e,t,a){"use strict";var n=a("b3f7"),s=a.n(n);s.a},b3f7:function(e,t,a){},cf65:function(e,t,a){},ea66:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("toolbar-page",{attrs:{elements:e.elements}})},s=[],c=a("08e9"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("crud",{ref:"crud",staticStyle:{max:"height:80vh"},attrs:{api:e.areasApi,columns:e.areaColumns,sortBy:"name",search:"",rowsPerPage:"15"},on:{clickedRow:e.clickedArea}})],1),a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-4"})])},l=[],i=a("d612"),r=a("4778"),u={getAreas:function(e,t,a){r["a"].get("/location/system/areas ").then(function(t){e(t.data)}).catch(function(e){console.log(e)})},getArea:function(e,t,a){r["a"].get("/location/system/areas/"+a).then(function(t){e(t.data)}).catch(function(e){console.log(e)})}},m={name:"ComponentLocationSystemAreas",data:function(){return{areasApi:{get:u.getAreas},areaColumns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"Name",label:"Name",field:"name",type:"string",align:"left"}],areaData:[]}},methods:{clickedArea:function(e){var t=this;u.getArea(function(e){t.areaData=e},null,e),console.log(e)}},computed:{},components:{Crud:i["a"]},created:function(){}},b=m,d=(a("7db1"),a("2be6")),f=Object(d["a"])(b,o,l,!1,null,"3b550fbe",null),p=f.exports,h={name:"PageLocSystem",data:function(){return{elements:[{name:"areas",label:"Areas",component:p,shortcut:"b"}]}},components:{toolbarPage:c["a"]}},g=h,v=Object(d["a"])(g,n,s,!1,null,null,null);t["default"]=v.exports}}]);
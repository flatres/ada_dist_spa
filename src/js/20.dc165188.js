(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{"45ea":function(e,t,a){"use strict";var n=a("cd7e"),i=a.n(n);i.a},"61b4":function(e,t,a){},6577:function(e,t,a){"use strict";var n=a("d56c"),i=a.n(n);i.a},"6a9f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("toolbar-page",{attrs:{elements:e.elements,default:"areas"}})},i=[],o=a("08e9"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("crud",{ref:"crud",staticStyle:{max:"height:80vh"},attrs:{api:e.areasApi,columns:e.areaColumns,sortBy:"name",search:"",rowsPerPage:"1000"},on:{clickedRow:e.clickedArea}})],1),a("div",{staticClass:"col-6"},[a("h1",[e._v(e._s(e.area))]),e.area?a("crud",{ref:"entries",attrs:{columns:e.userColumns,search:"",dataOverride:e.areaData,reverse:""}}):e._e()],1)])},s=[],c=a("d612"),l=a("4778"),d={getTest:function(e,t,a){l["a"].get("/watch/exgarde/test").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getAreas:function(e,t,a){l["a"].get("/watch/exgarde/areas ").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getArea:function(e,t,a){l["a"].get("/watch/exgarde/areas/"+a).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getLocations:function(e,t,a){l["a"].get("/watch/exgarde/locations").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getLocation:function(e,t,a){l["a"].get("/watch/exgarde/locations/"+a).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getLocationByDate:function(e,t,a){var n=a.date;l["a"].get("/watch/exgarde/locations/"+a.id+"/"+n).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getPeople:function(e,t,a){l["a"].get("/watch/exgarde/people").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getPerson:function(e,t,a){l["a"].get("/watch/exgarde/people/"+a).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getPersonByDate:function(e,t,a){var n=a.date;l["a"].get("/watch/exgarde/people/"+a.id+"/"+n).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},u={name:"ComponentLocationSystemAreas",data:function(){return{areasApi:{get:d.getAreas},area:null,areaColumns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"Name",label:"Name",field:"name",type:"string",align:"left"}],userColumns:[{name:"id",field:"id",hidden:!0},{name:"unix",field:"entry_unix",hidden:!0},{name:"name",label:"name",field:"name",type:"string"},{name:"time",field:"entry_timestamp",type:"string"},{name:"type",field:"type",type:"string"},{name:"style",field:"style",type:"string"},{name:"boarding",field:"boarding",type:"string"}],areaData:[]}},methods:{clickedArea:function(e){var t=this;this.area=e,d.getArea((function(e){t.areaData=e,console.log(e)}),null,e),console.log(e)}},computed:{},components:{Crud:c["a"]},created:function(){}},m=u,p=(a("45ea"),a("2be6")),f=a("e81c"),g=a("e279"),h=a.n(g),y=Object(p["a"])(m,r,s,!1,null,"3485e7a9",null),b=y.exports;h()(y,"components",{QDialog:f["a"]});var v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("crud",{ref:"crud",staticStyle:{max:"height:80vh"},attrs:{api:e.locationsApi,columns:e.locationColumns,sortBy:"name",search:"",rowsPerPage:"1000"},on:{clickedRow:e.clickedLocation}})],1),a("div",{staticClass:"col-6"},[a("q-input",{attrs:{filled:"",maskx:"DD-MM-YYYY",dark:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{minimal:"",dark:"",mask:"DD-MM-YYYY"},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)]},proxy:!0}]),model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e.location?a("crud",{ref:"entries",attrs:{columns:e.userColumns,search:"",dataOverride:e.locationData,reverse:""}}):e._e()],1)])},x=[],C={name:"ComponentLocationSystemLocations",data:function(){return{date:null,locationsApi:{get:d.getLocations},location:null,locationColumns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"name",label:"Name",field:"name",type:"string",align:"left"}],userColumns:[{name:"id",field:"id",hidden:!1},{name:"unix",field:"entry_unix",hidden:!0},{name:"name",label:"name",field:"name",type:"string"},{name:"time",field:"entry_timestamp",type:"string"},{name:"type",field:"type",type:"string"},{name:"boarding",field:"boarding",type:"string"}],locationData:[]}},methods:{clickedLocation:function(e){var t=this;this.location=e,this.date?d.getLocationByDate((function(e){t.locationData=e}),null,{id:e,date:this.date}):d.getLocation((function(e){t.locationData=e}),null,e)}},watch:{date:function(){var e=this,t=this.location;d.getLocationByDate((function(t){e.locationData=t}),null,{id:t,date:this.date})}},computed:{},components:{Crud:c["a"]},created:function(){}},P=C,w=(a("6577"),a("bc74")),D=a("34ff"),k=a("8c18"),O=a("88af"),q=Object(p["a"])(P,v,x,!1,null,"71e475b0",null),_=q.exports;h()(q,"components",{QInput:w["a"],QIcon:D["a"],QPopupProxy:k["a"],QDate:O["a"],QDialog:f["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("crud",{ref:"crud",staticStyle:{max:"height:80vh"},attrs:{api:e.peopleApi,columns:e.peopleColumns,sortBy:"name",search:"",rowsPerPage:"1000"},on:{clickedRow:e.clickedPerson}})],1),a("div",{staticClass:"col-6"},[a("q-input",{attrs:{filled:"",maskx:"DD-MM-YYYY",dark:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{minimal:"",dark:"",mask:"DD-MM-YYYY"},on:{input:function(){return e.$refs.qDateProxy.hide()}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)]},proxy:!0}]),model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e.person?a("crud",{ref:"entries",attrs:{columns:e.userColumns,search:"",dataOverride:e.personData,reverse:""}}):e._e()],1)])},j=[],S={name:"ComponentLocationSystemPeople",data:function(){return{date:null,peopleApi:{get:d.getPeople},person:null,peopleColumns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"name",label:"Name",field:"name",type:"string",align:"left"},{name:"type",label:"Type",field:"type",type:"string"},{name:"comment",label:"Comment",field:"comment",type:"string"}],userColumns:[{name:"id",field:"id",hidden:!0},{name:"unix",field:"entry_unix",hidden:!0},{name:"time",field:"entry_timestamp",type:"string"},{name:"location",field:"location",type:"string"}],personData:[]}},methods:{clickedPerson:function(e){var t=this;this.person=e,this.date?d.getPersonByDate((function(e){t.personData=e}),null,{id:e,date:this.date}):d.getPerson((function(e){t.personData=e}),null,e)}},watch:{date:function(){var e=this,t=this.person;d.getPersonByDate((function(t){e.personData=t}),null,{id:t,date:this.date})}},computed:{},components:{Crud:c["a"]},created:function(){}},Y=S,A=(a("d5db"),Object(p["a"])(Y,Q,j,!1,null,"13d7cfc8",null)),B=A.exports;h()(A,"components",{QInput:w["a"],QIcon:D["a"],QPopupProxy:k["a"],QDate:O["a"],QDialog:f["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8"},[a("q-btn",{staticClass:"full-width q-mt-sm",attrs:{loading:e.loading,percentage:e.syncProgress,"dark-percentagex":"",outline:"",dark:"",color:"primary"},on:{click:e.runTest}},[e._v("\n         Run\n        "),a("span",{attrs:{slot:"loading"},slot:"loading"},[a("q-spinner-gears",{staticClass:"on-left"}),e._v("\n          Computing...\n        ")],1)]),a("q-card",{staticClass:"q-mt-md bg-dark"},[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"matched",label:"Matched"}}),a("q-tab",{attrs:{name:"similarity",label:"Similarity Matched"}}),a("q-tab",{attrs:{name:"unmatched",label:"Unmatched"}},[e.unmatched.length>0?a("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(e.unmatched.length))]):e._e()],1)],1)],1)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("q-card",{staticClass:"q-mt-md bg-dark"},[a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"matched"}},[a("crud",{ref:"crud",staticStyle:{max:"height:80vh"},attrs:{dataOverride:e.matched,columns:e.passesColumns,sortBy:"name",search:"",rowsPerPage:"1000"}})],1),a("q-tab-panel",{attrs:{name:"similarity"}},[a("crud",{ref:"crud",staticStyle:{max:"height:80vh"},attrs:{dataOverride:e.similarity,columns:e.passesColumns,sortBy:"name",search:"",rowsPerPage:"1000"}})],1),a("q-tab-panel",{attrs:{name:"unmatched"}},[a("crud",{ref:"crud",staticStyle:{max:"height:80vh"},attrs:{dataOverride:e.unmatched,columns:e.passesColumns,sortBy:"name",search:"",rowsPerPage:"1000"}})],1)],1)],1)],1)])])},E=[],M=(a("e125"),a("4823"),a("2e73"),a("dde3"),a("76d0"),a("0c1f"),a("8e9e")),N=a.n(M),T=a("9ce4");function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){N()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R={name:"Component.Watch.Exgarde.Test",data:function(){return{date:null,tab:"matched",matched:[],similarity:[],unmatched:[],passesColumns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!1},{name:"prename",label:"Pre Name",field:"preName",type:"string",align:"left"},{name:"name",label:"Name",field:"fullName",type:"string",align:"left"},{name:"exgName",label:"Exg Name",field:"exgardeName",type:"string",align:"left"},{name:"exgId",label:"Exg Id",field:"exgardeId",type:"string",align:"left"},{name:"exgCmt",label:"Exg Cmt",field:"exgardeComment",type:"string",align:"left"},{name:"matched",label:"Matched On",field:"matched",type:"string",align:"left"}]}},methods:{runTest:function(){d.getTest(this.loadResults)},loadResults:function(e){this.matched=e.matched.filter((function(e){return"prename"===e.matched||"name"===e.matched})),this.similarity=e.matched.filter((function(e){return"similar"===e.matched})),this.unmatched=e.unmatched}},computed:$($({},Object(T["c"])("sockets",["progress"])),{},{syncProgress:function(){return this.progress("Watch/Exgarde/Test")}}),components:{Crud:c["a"]},created:function(){}},W=R,J=(a("c083"),a("2ef0")),G=a("d1dc"),U=a("ebe6"),z=a("4776"),F=a("dd08"),H=a("f987"),K=a("96f0"),V=a("1411"),X=a("1d98"),Z=Object(p["a"])(W,L,E,!1,null,"60f89e83",null),ee=Z.exports;h()(Z,"components",{QBtn:J["a"],QSpinnerGears:G["a"],QCard:U["a"],QTabs:z["a"],QTab:F["a"],QBadge:H["a"],QSeparator:K["a"],QTabPanels:V["a"],QTabPanel:X["a"]});var te={name:"PageWatchExgarde",data:function(){return{elements:[{name:"areas",label:"Areas",component:b,shortcut:"b"},{name:"locations",label:"Locations",component:_},{name:"people",label:"People",component:B},{name:"match",label:"Match",component:ee}]}},components:{toolbarPage:o["a"]}},ae=te,ne=Object(p["a"])(ae,n,i,!1,null,null,null);t["default"]=ne.exports},ad91:function(e,t,a){},c083:function(e,t,a){"use strict";var n=a("61b4"),i=a.n(n);i.a},cd7e:function(e,t,a){},d56c:function(e,t,a){},d5db:function(e,t,a){"use strict";var n=a("ad91"),i=a.n(n);i.a}}]);
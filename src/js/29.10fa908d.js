(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{"44bc":function(e,t,a){},"4f9b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("toolbar-page",{attrs:{elements:e.elements,default:"access"}})},l=[],s=a("08e9"),r=a("f3c0"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-btn",{staticClass:"full-width q-mb-md",attrs:{row:"",color:"tertiary",label:"refresh",outline:"",dense:""},on:{click:e.refresh}}),a("crud",{ref:"crud",attrs:{api:e.api,columns:e.columns,search:"",sortBy:"timeStamp",reverse:""}})],1)},c=[],i=a("d612"),m=a("c686"),d={name:"Component.Admin.Logs.Access",data:function(){return{api:{get:m["a"].getAccessPages},columns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"time",label:"Time",field:"timeStamp",type:"string",align:"left",sortable:!0},{name:"name",label:"Name",field:"name",type:"string",align:"left",sortable:!0},{name:"module",label:"Module",field:"module",type:"string",align:"left",sortable:!0},{name:"page",label:"Page",field:"page",type:"string",align:"left",sortable:!0}]}},methods:{refresh:function(){this.$refs.crud.get()}},computed:{},components:{Crud:i["a"]},created:function(){}},u=d,f=(a("f3ac"),a("2be6")),b=a("e279"),p=a.n(b),g=a("2ef0"),h=Object(f["a"])(u,o,c,!1,null,"592acaeb",null),w=h.exports;p()(h,"components",{QBtn:g["a"]});var v={name:"Page.Admin.Logs",data:function(){return{elements:[{name:"access",label:"access",component:w},{name:"dashboard",label:"dashboard",component:r["a"],noPadding:!0}]}},components:{toolbarPage:s["a"]},methods:{refresh:function(){}}},y=v,P=Object(f["a"])(y,n,l,!1,null,null,null);t["default"]=P.exports},f3ac:function(e,t,a){"use strict";var n=a("44bc"),l=a.n(n);l.a}}]);
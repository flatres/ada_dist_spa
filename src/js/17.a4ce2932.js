(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"370d":function(e,t,n){"use strict";var a=n("885d"),i=n.n(a);i.a},3953:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("toolbar-page",{attrs:{elements:e.elements}})},i=[],l=n("08e9"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("crud",{ref:"crud",attrs:{data:e.data,api:e.api,columns:e.columns,search:"",sortBy:"lastName"}})],1)},o=[],s=n("d612"),c=n("4778"),f={getPrizes:function(e,t,n){c["a"].get("/academic/prizes").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},u={name:"ComponentJanePrizes",data:function(){return{api:{get:f.getPrizes},columns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"lastName",label:"Last Name",field:"lastName",type:"string",align:"left",filter:!0,sortable:!0},{name:"firstName",label:"First Name",field:"firstName",type:"string",align:"left"},{name:"gender",label:"M/F",field:"gender",type:"string",align:"left"},{name:"names",label:"Parents",field:"txtLabelSalutation",type:"string",align:"left"},{name:"email1",label:"Email 1",field:"email1",type:"string",align:"left"},{name:"email2",label:"Email 2",field:"email2",type:"string",align:"left"},{name:"txtName",label:"Prize",field:"txtName",type:"string",align:"left"},{name:"txtDescription",label:"Description",field:"txtDescription",type:"string",align:"left"}],showForm:!0}},computed:{},components:{Crud:s["a"]},created:function(){}},d=u,p=(n("772d"),n("2be6")),g=n("e279"),m=n.n(g),b=n("e81c"),h=n("34ff"),y=Object(p["a"])(d,r,o,!1,null,"90ac0fb2",null),O=y.exports;m()(y,"components",{QDialog:b["a"],QIcon:h["a"]});var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row"},[n("q-btn",{staticClass:"full-width",staticStyle:{height:"100px"},attrs:{outline:"",loading:e.loading,percentage:e.percentage,color:"accent"},on:{click:e.fetch},scopedSlots:e._u([{key:"loading",fn:function(){return[n("q-spinner-gears",{staticClass:"on-left"}),e._v("\n        Doing my thing...\n      ")]},proxy:!0}])},[e._v("\n      Generate\n      ")])],1),n("div",{staticClass:"row full-width full-height"},[n("console",{staticClass:"full-width full-height",staticStyle:{"min-height":"500px"}})],1)])},w=[],P=(n("e125"),n("4823"),n("2e73"),n("dde3"),n("76d0"),n("0c1f"),n("8e9e")),j=n.n(P),C={getRegistration:function(e,t,n){c["a"].get("/academic/alis/registration").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},x=n("dd14"),D=n("9ce4");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z={name:"ComponentJanePrizes",data:function(){return{api:{get:C.getAlis},loading:!1,percentage:0}},methods:_({},Object(D["b"])("sockets",["clearConsoleLog"]),{fetch:function(){this.clearConsoleLog(),this.loading=!0,C.getRegistration(this.process,this.error)},process:function(e){this.loading=!1,this.$downloadBlob(e.url,e.file)},error:function(){this.loading=!1}}),computed:{},components:{Console:x["a"]},created:function(){}},E=z,S=(n("370d"),n("2ef0")),k=n("d1dc"),L=Object(p["a"])(E,v,w,!1,null,"17846a75",null),J=L.exports;m()(L,"components",{QBtn:S["a"],QSpinnerGears:k["a"]});var Q={name:"PageLabCrud",data:function(){return{elements:[{name:"prizes",label:"prizes",component:O,shortcut:"b"},{name:"alis",label:"alis",component:J,shortcut:"b"}]}},components:{toolbarPage:l["a"]}},$=Q,B=Object(p["a"])($,a,i,!1,null,null,null);t["default"]=B.exports},"772d":function(e,t,n){"use strict";var a=n("c341"),i=n.n(a);i.a},"885d":function(e,t,n){},c341:function(e,t,n){}}]);
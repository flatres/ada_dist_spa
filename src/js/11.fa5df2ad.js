(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"0282":function(e,t,a){},"1d75":function(e,t,a){"use strict";var n=a("4e41"),i=a.n(n);i.a},"370d":function(e,t,a){"use strict";var n=a("885d"),i=a.n(n);i.a},3953:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("toolbar-page",{attrs:{elements:e.elements}})},i=[],l=a("08e9"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("crud",{ref:"crud",attrs:{data:e.data,api:e.api,columns:e.columns,search:"",sortBy:"lastName"}})],1)},r=[],o=a("d612"),c=a("4778"),d={getPrizes:function(e,t,a){c["a"].get("/academic/prizes").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},u={name:"ComponentJanePrizes",data:function(){return{api:{get:d.getPrizes},columns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"lastName",label:"Last Name",field:"lastName",type:"string",align:"left",filter:!0,sortable:!0},{name:"firstName",label:"First Name",field:"firstName",type:"string",align:"left"},{name:"gender",label:"M/F",field:"gender",type:"string",align:"left"},{name:"names",label:"Parents",field:"txtLabelSalutation",type:"string",align:"left"},{name:"email1",label:"Email 1",field:"email1",type:"string",align:"left"},{name:"email2",label:"Email 2",field:"email2",type:"string",align:"left"},{name:"txtName",label:"Prize",field:"txtName",type:"string",align:"left"},{name:"txtDescription",label:"Description",field:"txtDescription",type:"string",align:"left"}],showForm:!0}},computed:{},components:{Crud:o["a"]},created:function(){}},p=u,f=(a("772d"),a("2be6")),m=a("e279"),g=a.n(m),b=a("e81c"),h=a("34ff"),y=Object(f["a"])(p,s,r,!1,null,"90ac0fb2",null),v=y.exports;g()(y,"components",{QDialog:b["a"],QIcon:h["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("q-btn",{staticClass:"full-width",staticStyle:{height:"100px"},attrs:{outline:"",loading:e.loading,percentage:e.percentage,color:"accent"},on:{click:e.fetch},scopedSlots:e._u([{key:"loading",fn:function(){return[a("q-spinner-gears",{staticClass:"on-left"}),e._v("\n        Doing my thing...\n      ")]},proxy:!0}])},[e._v("\n      Generate\n      ")])],1),a("div",{staticClass:"row full-width full-height"},[a("console",{staticClass:"full-width full-height",staticStyle:{"min-height":"500px"}})],1)])},O=[],w=(a("e125"),a("4823"),a("2e73"),a("dde3"),a("76d0"),a("0c1f"),a("8e9e")),j=a.n(w),P={getRegistration:function(e,t,a){c["a"].get("/academic/alis/registration").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},postAlisGCSEUpload:function(e,t,a,n){var i=new FormData;i.append("file",a),c["a"].post("/academic/alis/upload/"+n,i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},_=a("dd14"),S=a("9ce4");function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){j()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D={name:"ComponentJanePrizes",data:function(){return{api:{get:P.getAlis},loading:!1,percentage:0}},methods:E(E({},Object(S["b"])("sockets",["clearConsoleLog"])),{},{fetch:function(){this.clearConsoleLog(),this.loading=!0,P.getRegistration(this.process,this.error)},process:function(e){this.loading=!1,this.$downloadBlob(e.url,e.file)},error:function(){this.loading=!1}}),computed:{},components:{Console:_["a"]},created:function(){}},k=D,U=(a("370d"),a("2ef0")),q=a("d1dc"),A=Object(f["a"])(k,C,O,!1,null,"17846a75",null),F=A.exports;g()(A,"components",{QBtn:U["a"],QSpinnerGears:q["a"]});var $=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("h1",[e._v("GCSE")]),a("input",{ref:"gcse",attrs:{name:"file",type:"file",id:"file"}}),a("q-btn",{attrs:{label:"upload"},on:{click:function(t){return e.handleGCSEUpload()}}})],1),a("div",{staticClass:"row"},[a("h1",[e._v("Test")]),a("input",{ref:"test",attrs:{name:"file",type:"file",id:"file"}}),a("q-btn",{attrs:{label:"upload"},on:{click:function(t){return e.handleTestUpload()}}})],1)])},G=[],Q={name:"ComponentJanePrizes",data:function(){return{gcseSpreadsheet:null,testSpreadsheet:null}},methods:{checkFileType:function(e){return e.filter((function(e){return".xls"===e.type}))},handleGCSEUpload:function(){this.gcseSpreadsheet=this.$refs.gcse.files[0];var e=0;P.postAlisGCSEUpload(this.processAlisGCSEUpload,this.$errorHandler,this.gcseSpreadsheet,e)},handleTestUpload:function(){this.gcseSpreadsheet=this.$refs.test.files[0];var e=1;P.postAlisGCSEUpload(this.processAlisGCSEUpload,this.$errorHandler,this.gcseSpreadsheet,e)}},computed:{},components:{},created:function(){P.get()}},z=Q,M=(a("85b6"),Object(f["a"])(z,$,G,!1,null,"1dafb4de",null)),T=M.exports;g()(M,"components",{QBtn:U["a"]});var N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("h1",[e._v("Midyis")]),a("input",{ref:"midyis",attrs:{name:"file",type:"file",id:"file"}}),a("q-btn",{attrs:{label:"upload"},on:{click:function(t){return e.handleUpload()}}})],1)])},B=[],J={postMidyisUpload:function(e,t,a){var n=new FormData;n.append("file",a),c["a"].post("/academic/midyis/upload",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},L={name:"ComponentJanePrizes",data:function(){return{spreadsheet:null}},methods:{checkFileType:function(e){return e.filter((function(e){return".xls"===e.type}))},handleUpload:function(){this.spreadsheet=this.$refs.midyis.files[0],J.postMidyisUpload(this.process,this.$errorHandler,this.spreadsheet)}},computed:{},components:{},created:function(){J.get()}},H=L,R=(a("45c0"),Object(f["a"])(H,N,B,!1,null,"6ed49c86",null)),I=R.exports;g()(R,"components",{QBtn:U["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("q-btn",{staticClass:"full-width",staticStyle:{height:"50px"},attrs:{outline:"",loading:e.loading,percentage:e.percentage,color:"accent"},on:{click:e.fetch},scopedSlots:e._u([{key:"loading",fn:function(){return[a("q-spinner-gears",{staticClass:"on-left"}),e._v("\n        Doing my thing...\n      ")]},proxy:!0}])},[e._v("\n      Generate\n      ")])],1),e.loading?a("div",{staticClass:"row full-width full-height"},[a("console",{staticClass:"full-width full-height",staticStyle:{"min-height":"500px"}})],1):e._e(),a("br"),!e.loading&&e.data?a("div",[a("span",{staticClass:"q-mt-md"},[e._v(e._s(e.data.date))]),a("q-tabs",{staticClass:"text-accent bg-tertiary q-mt-xs",attrs:{dense:"",align:"left"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"ages",iconx:"mail",label:"Ages"}}),a("q-tab",{attrs:{name:"subjects",iconx:"alarm",label:"Subjects"}})],1),a("q-tab-panels",{staticClass:"q-mt-md",attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"ages"}},[a("crud",{ref:"ages",attrs:{columns:e.ageColumns,dataOverride:e.data.ageCensus,reversex:"",download:""}})],1),a("q-tab-panel",{attrs:{name:"subjects"}},[a("crud",{ref:"ages",attrs:{columns:e.subjectColumns,dataOverride:e.data.subjects,reversex:"",download:""}})],1)],1)],1):e._e()])},V=[],W={getCensus:function(e,t,a){c["a"].get("/academic/census").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}};function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){j()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Z={name:"ComponentJanePrizes",data:function(){return{api:{get:W.getCensus},loading:!1,percentage:0,data:null,tab:"ages",ageColumns:[{name:"id",label:"",field:"id",hidden:!0},{name:"age",label:"Age",field:"age"},{name:"boarderM",label:"Boarder (Male)",field:"boarderM",type:"string"},{name:"boarderF",label:"Boarder (Female)",field:"boarderF",type:"string"},{name:"dayM",label:"Day Pupil (Male)",field:"dayM",type:"string"},{name:"dayF",label:"Day Pupil (Female)",field:"dayF",type:"string"}],subjectColumns:[{name:"id",label:"",field:"id"},{name:"age14",label:"Age 14",field:"a_14"},{name:"age15",label:"Age 15",field:"a_15"},{name:"age16",label:"Age 16",field:"a_16"},{name:"age17",label:"Age 17",field:"a_17"},{name:"age18",label:"Age 18",field:"a_18"}]}},methods:Y(Y({},Object(S["b"])("sockets",["clearConsoleLog"])),{},{fetch:function(){this.clearConsoleLog(),this.loading=!0,W.getCensus(this.process,this.error)},process:function(e){this.loading=!1,this.data=e},error:function(){this.loading=!1}}),computed:{},components:{Console:_["a"],Crud:o["a"]},created:function(){}},ee=Z,te=(a("1d75"),a("4776")),ae=a("dd08"),ne=a("1411"),ie=a("1d98"),le=Object(f["a"])(ee,K,V,!1,null,"6c47e1a0",null),se=le.exports;g()(le,"components",{QBtn:U["a"],QSpinnerGears:q["a"],QTabs:te["a"],QTab:ae["a"],QTabPanels:ne["a"],QTabPanel:ie["a"]});var re={name:"PageLabCrud",data:function(){return{elements:[{name:"prizes",label:"prizes",component:v,shortcut:"b"},{name:"alis",label:"alis",component:F,shortcut:"b"},{name:"alisUpload",label:"Alis Upload",component:T,shortcut:"b"},{name:"midyisUpload",label:"Midyis Upload",component:I,shortcut:"b"},{name:"census",label:"census",component:se,shortcut:"b"}]}},components:{toolbarPage:l["a"]}},oe=re,ce=Object(f["a"])(oe,n,i,!1,null,null,null);t["default"]=ce.exports},"45c0":function(e,t,a){"use strict";var n=a("da10"),i=a.n(n);i.a},"4e41":function(e,t,a){},"772d":function(e,t,a){"use strict";var n=a("c341"),i=a.n(n);i.a},"85b6":function(e,t,a){"use strict";var n=a("0282"),i=a.n(n);i.a},"885d":function(e,t,a){},c341:function(e,t,a){},da10:function(e,t,a){}}]);
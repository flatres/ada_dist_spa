(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["08ea42b4"],{"08e9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"no-scroll toolbar-page"},[n("q-toolbar",{class:{"text-white bg-toolbar":e.isDark,"text-black bg-white-3":e.isLight},attrs:{dense:"",shrink:"",classx:"text-white shadow-2 rounded-borders narrowx justify"}},[e._t("before"),n("q-tabs",{staticClass:"tbp-tabs",attrs:{dense:"",shrink:"","active-color":e.isLight?"#011b48":"primary"},model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.elements,(function(t){return n("div",{key:t.name},[t.menu?e._e():n("q-tab",{attrs:{label:t.label,name:t.name,icon:t.icon}}),t.menu?n("q-btn",{attrs:{flat:"",size:"sm",label:t.label,icon:t.icon?t.icon:"fal fa-caret-down","text-color":e.isDark?"white":"primary"}},[n("q-menu",{ref:"settingsPopover",refInFor:!0,attrs:{"content-class":"bg-grey-9 text-white","auto-close":""}},[n("q-list",{attrs:{"item-separator":"",link:"","content-class":"bg-primary"}},e._l(t.menu,(function(t){return n("q-item",{key:t.name,attrs:{clickable:""},nativeOn:{click:function(n){return e.clickMenu(t)}}},[n("q-item-section",{attrs:{avatar:"",left:"",dark:""}},[n("q-icon",{attrs:{size:"20px",name:t.icon}})],1),n("q-item-section",[n("q-item-label",[e._v(e._s(t.label))])],1)],1)})),1)],1)],1):e._e()],1)})),0),n("q-space"),e._t("side"),e._t("after")],2),n("q-tab-panels",{model:{value:e.selectedTab,callback:function(t){e.selectedTab=t},expression:"selectedTab"}},e._l(e.tabPanels,(function(t){return n("q-tab-panel",{key:t.name,attrs:{name:t.name}},[n(t.component,{tag:"component",on:{close:e.close}})],1)})),1)],1)},a=[],u=(n("e125"),n("4823"),n("2e73"),n("dde3"),n("76d0"),n("0c1f"),n("c880"),n("8e9e")),o=n.n(u),i=n("9ce4");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"ComponentPageToolbar",props:{default:null,elements:null},watch:{selectedTab:function(){console.log(":",this.selectedTab)}},data:function(){return{selectedTab:null}},computed:f({},Object(i["e"])("user",["isDark","isLight"]),{tabPanels:function(){var e=[];return this.elements.forEach((function(t){t.menu?t.menu.forEach((function(t){e.push({name:t.name,component:t.component})})):e.push({name:t.name,component:t.component})})),e}}),methods:{close:function(){this.selectedTab=this.default},clickMenu:function(e){e.name&&(this.selectedTab=e.name),e.event&&this.$emit(e.event)}},created:function(){this.selectedTab=this.default}},d=l,s=(n("b0d4"),n("2be6")),m=Object(s["a"])(d,r,a,!1,null,null,null);t["a"]=m.exports},1394:function(e,t,n){"use strict";var r=n("17a4"),a=n.n(r);a.a},"141e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"and"},(function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.length>0&&t.reduce((function(t,n){return t&&n.apply(e,r)}),!0)}))};t.default=a},"17a4":function(e,t,n){},"1b3c":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=a},"2cbb":function(e,t,n){"use strict";var r=n("c8d6"),a=n.n(r);a.a},"30fa":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+e<=+n&&+t>=+n}))};t.default=a},"4a5e":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,n){return!!(0,r.ref)(e,this,n)||(0,r.req)(t)}))};t.default=a},5358:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,n){return t===(0,r.ref)(e,this,n)}))};t.default=a},5428:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=(0,r.regex)("integer",/^-?[0-9]*$/);t.default=a},"5fc9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"or"},(function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t.length>0&&t.reduce((function(t,n){return t||n.apply(e,r)}),!1)}))};t.default=a},6720:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=(0,r.regex)("numeric",/^[0-9]*$/);t.default=a},"6b68":function(e,t,n){"use strict";(function(e){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},u=r.vuelidate?r.vuelidate.withParams:a;t.withParams=u}).call(this,n("7d15"))},"79a4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=(0,r.withParams)({type:"required"},r.req);t.default=a},"89a2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var r=x(n("a54d")),a=x(n("9a0b")),u=x(n("6720")),o=x(n("30fa")),i=x(n("b408")),c=x(n("ea72")),f=x(n("8f91")),l=x(n("90c2")),d=x(n("d082")),s=x(n("79a4")),m=x(n("da96")),p=x(n("4a5e")),b=x(n("5358")),g=x(n("bf12")),y=x(n("5fc9")),h=x(n("141e")),v=x(n("90e9")),P=x(n("1b3c")),_=x(n("b897")),O=x(n("5428")),j=x(n("e925")),w=q(n("d8f6"));function q(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function x(e){return e&&e.__esModule?e:{default:e}}t.helpers=w},"8f91":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var n="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(u)}))};t.default=a;var u=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"90c2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))};t.default=a},"90e9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(e){return(0,r.withParams)({type:"not"},(function(t,n){return!(0,r.req)(t)||!e.call(this,t,n)}))};t.default=a},"9a0b":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"9de1":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("toolbar-page",{attrs:{elements:e.elements,default:"students"}})},a=[],u=n("08e9"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-tree",{staticClass:"q-mt-lg",attrs:{nodes:e.tree,color:"primary","default-expand-all":"","node-key":"id","label-key":"name",dark:""},scopedSlots:e._u([{key:"default-header",fn:function(t){return n("div",{on:{click:function(n){return e.clickNode(t.node)}}},[n("span",{staticClass:"text-weight-thin no-shadow"},[t.node.newCat||t.node.newTag?e._e():n("q-icon",{staticClass:"q-mt-xs q-mr-xs q-ml-sm",attrs:{name:"fal fa-tag",color:e.nodeColor(t.node)}}),t.node.newCat?n("q-icon",{staticClass:"q-mt-xs q-mr-xs q-ml-sm",attrs:{name:"fal fa-plus",color:e.nodeColor(t.node)}}):e._e(),t.node.newTag?n("q-icon",{staticClass:"q-mt-xs q-mr-xs q-ml-sm",attrs:{name:"fal fa-plus",color:e.nodeColor(t.node)}}):e._e()],1),n("span",[e._v("\n         "+e._s(t.node.name)+"\n       ")])])}}])})],1)},i=[],c=(n("c880"),n("4778")),f={getStudentTagTree:function(e,t,n){c["a"].get("/admin/tags/tree/students/"+n).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getTags:function(e,t,n){c["a"].get("/admin/tags").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getCategories:function(e,t,n){c["a"].get("/admin/tags/cetagories").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getTag:function(e,t,n){c["a"].get("/admin/tags/"+n.id).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},putTag:function(e,t,n){c["a"].put("/admin/tags",n).then((function(t){e(t.data)})).catch((function(e){console.log(e),t()}))},postTag:function(e,t,n){c["a"].post("/admin/tags/",n).then((function(t){e(t.data)})).catch((function(e){console.log(e),t()}))},deleteTag:function(e,t,n){c["a"].delete("/admin/tags/"+n).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},l={name:"AdminTagsStudents",data:function(){return{tree:[],currentNodeId:null}},methods:{process:function(e){this.tree=e.map((function(e){return e.tags.unshift({newTag:!0,name:"",id:"nt_"+e.id}),{id:"c"+e.id,name:e.name,children:e.tags,catId:e.catId}})),this.tree.unshift({newCat:!0,name:"",id:"c0"}),console.log(this.tree)},clickNode:function(e){e.catId&&(this.currentNodeId=e.id,this.currentCatId="c"+e.catId)},nodeColor:function(e){return e.catId?e.id===this.currentNodeId?"primary":"white":e.id===this.currentCatId?"primary":"white"}},computed:{},components:{},created:function(){f.getStudentTagTree(this.process,null,0)}},d=l,s=(n("2cbb"),n("2be6")),m=Object(s["a"])(d,o,i,!1,null,"928b6eb8",null),p=m.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("crud",{ref:"crud",attrs:{data:e.data,api:e.api,columns:e.columns,search:"",canNew:"",canDelete:"",canEdit:"",inlineEdit:""}})],1)},g=[],y=n("d612"),h=n("89a2"),v={name:"ComponentCompanies",data:function(){return{api:{get:f.getTags,getSingle:f.getTag,put:f.putCompanies,post:f.postCompanies,delete:f.deleteCompanies},columns:[{name:"id",label:"id",field:"id",type:"string",align:"left",hidden:!0},{name:"Name",label:"Name",field:"name",type:"string",align:"left",validations:{required:h["required"],minLength:Object(h["minLength"])(4)},editable:!0}],showForm:!0}},computed:{},components:{Crud:y["a"]},created:function(){}},P=v,_=(n("1394"),Object(s["a"])(P,b,g,!1,null,"d1c2763a",null)),O=_.exports,j={name:"PageAdminTags",data:function(){return{elements:[{name:"students",label:"Students",component:p,shortcut:"s"},{name:"staff",label:"Staff",component:O,shortcut:"t"}]}},components:{toolbarPage:u["a"]},methods:{refresh:function(){}}},w=j,q=Object(s["a"])(w,r,a,!1,null,null,null);t["default"]=q.exports},a54d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=(0,r.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},a86c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",API_URL:"/api/v1/public/",SOCKET:"wss://adazmq.marlboroughcollege.org/wss",VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined"}).BUILD?n("6b68").withParams:n("480e").withParams,a=r;t.default=a},b0d4:function(e,t,n){"use strict";var r=n("b3f7"),a=n.n(r);a.a},b3f7:function(e,t,n){},b408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,u=(0,r.regex)("email",a);t.default=u},b897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=a},bf12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,u=(0,r.regex)("url",a);t.default=u},c8d6:function(e,t,n){},d082:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))};t.default=a},d8f6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}}),t.regex=t.ref=t.len=t.req=void 0;var r=a(n("a86c"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var i=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.len=i;var c=function(e,t,n){return"function"===typeof e?e.call(t,n):n[e]};t.ref=c;var f=function(e,t){return(0,r.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=f},da96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,n){return!(0,r.ref)(e,this,n)||(0,r.req)(t)}))};t.default=a},e925:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},ea72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("d8f6"),a=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=a;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1cfb9cfd"],{"08a0":function(t,e,a){},"08e9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"no-scroll toolbar-page"},[a("q-toolbar",{class:{"text-white bg-toolbar":t.isDark,"text-black bg-white-3":t.isLight},attrs:{dense:"",shrink:"",classx:"text-white shadow-2 rounded-borders narrowx justify"}},[a("q-tabs",{staticClass:"tbp-tabs",attrs:{dense:"",shrink:"","active-color":t.isLight?"#011b48":"primary"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},t._l(t.elements,function(e){return a("div",{key:e.name},[e.menu?t._e():a("q-tab",{attrs:{label:e.label,name:e.name,icon:e.icon}}),e.menu?a("q-btn",{directives:[{name:"hotkey",rawName:"v-hotkey",value:{"shift+a":function(){t.selectedTab="bookings"}},expression:"{'shift+a': () => { selectedTab = 'bookings' }}"}],attrs:{flat:"",size:"sm",label:e.label,icon:e.icon?e.icon:"fal fa-caret-down","text-color":t.isDark?"white":"primary"}},[a("q-menu",{ref:"settingsPopover",refInFor:!0,attrs:{"content-class":"bg-grey-9 text-white","auto-close":""}},[a("q-list",{attrs:{"item-separator":"",link:"","content-class":"bg-primary"}},t._l(e.menu,function(e){return a("q-item",{key:e.name,attrs:{clickable:""},nativeOn:{click:function(a){return t.clickMenu(e)}}},[a("q-item-section",{attrs:{avatar:"",left:"",dark:""}},[a("q-icon",{attrs:{size:"20px",name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.label))])],1)],1)}),1)],1)],1):t._e()],1)}),0),a("q-space"),t._t("side")],2),a("q-tab-panels",{model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},t._l(t.tabPanels,function(e){return a("q-tab-panel",{key:e.name,attrs:{name:e.name}},[a(e.component,{tag:"component",on:{close:t.close}})],1)}),1)],1)},n=[],i=(a("c880"),a("c03b")),o=a.n(i),l=a("9ce4"),r={name:"ComponentPageToolbar",props:{default:null,elements:null},watch:{selectedTab:function(){console.log(":",this.selectedTab)}},data:function(){return{selectedTab:null}},computed:o()({},Object(l["e"])("user",["isDark","isLight"]),{tabPanels:function(){var t=[];return this.elements.forEach(function(e){e.menu?e.menu.forEach(function(e){t.push({name:e.name,component:e.component})}):t.push({name:e.name,component:e.component})}),t}}),methods:{close:function(){this.selectedTab=this.default},clickMenu:function(t){t.name&&(this.selectedTab=t.name),t.event&&this.$emit(t.event)}},created:function(){this.selectedTab=this.default}},c=r,f=(a("b0d4"),a("2be6")),d=Object(f["a"])(c,s,n,!1,null,null,null);e["a"]=d.exports},"388f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("toolbar-page",{attrs:{elements:t.elements,default:"pickers"}})},n=[],i=a("08e9"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{},[a("div",{staticClass:"row fit hidden"},[a("hollow1"),a("hollow1"),a("hollow1"),a("hollow1"),a("hollow1")],1),a("q-markup-table",{staticClass:"report",attrs:{dark:""}},[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),a("th",{staticClass:"text-center"},[t._v("Effort")]),a("th",{staticClass:"text-center"},[t._v("Quality of Work")]),a("th",{staticClass:"text-center"},[t._v("Behaviour")]),a("th",{staticClass:"text-left"},[t._v("Comment")])])]),a("tbody",[a("tr",[a("td",{staticClass:"text-left"},[t._v("Steve Vai")]),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("div",{staticClass:"q-pa-md text-white",staticStyle:{"max-width":"300px"}},[a("q-input",{attrs:{dark:"",filled:"",autogrow:"",type:"textarea"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1)])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Brian May")]),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("div",{staticClass:"q-pa-md text-white",staticStyle:{"max-width":"300px"}},[a("q-input",{attrs:{dark:"",filled:"",autogrow:"",type:"textarea"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1)])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Eddie van Halen")]),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("div",{staticClass:"q-pa-md text-white",staticStyle:{"max-width":"300px"}},[a("q-input",{attrs:{dark:"",filled:"",autogrow:"",type:"textarea"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1)])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Mark Knopfler")]),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("div",{staticClass:"q-pa-md text-white",staticStyle:{"max-width":"300px"}},[a("q-input",{attrs:{dark:"",filled:"",autogrow:"",type:"textarea"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1)])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Pat Smear")]),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("div",{staticClass:"q-pa-md text-white",staticStyle:{"max-width":"300px"}},[a("q-input",{attrs:{dark:"",filled:"",autogrow:"",type:"textarea"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1)])]),a("tr",[a("td",{staticClass:"text-left"},[t._v("Tommy Emmanuel")]),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("snowflake1")],1),a("td",{staticClass:"text-center"},[a("div",{staticClass:"q-pa-md text-white",staticStyle:{"max-width":"300px"}},[a("q-input",{attrs:{dark:"",filled:"",autogrow:"",type:"textarea"},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1)])])])])],1)},l=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-mx-md"},[a("svg",{class:t.rotation,staticStyle:{"enable-background":"new 0 0 423.643 423.643"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"73.643px",height:"73.643px",viewBox:"0 0 423.643 443.643","xml:space":"preserve"}},[a("g",[a("g",[a("polygon",{staticClass:"off",staticStyle:{fill:"cyan",stroke:"black"},style:t.style1,attrs:{points:"201.821,127.677 201.821,10.454 6.512,152.36 118.839,187.971   "},on:{click:function(e){return t.click(1)}}}),a("polygon",{staticClass:"off",staticStyle:{fill:"red",stroke:"red","strokex-width":"20px"},attrs:{points:"111.174,206.522 0,171.276 74.85,401.643 143.859,307.124   "},on:{click:function(e){return t.click(2)}}}),a("polygon",{staticClass:"off",staticStyle:{fill:"orange",stroke:"black"},attrs:{points:"160.423,318.354 91.184,413.188 335.969,413.188 264.887,318.354   "},on:{click:function(e){return t.click(3)}}}),a("path",{staticStyle:{fill:"yellow",stroke:"black"},attrs:{d:"M312.469,206.522l-32.178,99.037l69.564,92.809l73.787-227.092L312.469,206.522z M342.744,355.534l-40.225-53.666    l25.793-79.388l64.285-20.381L342.744,355.534z"},on:{click:function(e){return t.click(4)}}}),a("polygon",{staticClass:"off",staticStyle:{fill:"lime",stroke:"black"},attrs:{points:"417.129,152.36 221.82,10.454 221.82,127.677 304.803,187.971   "},on:{click:function(e){return t.click(5)}}}),a("circle",{staticStyle:{fill:"white",stroke:"white"},attrs:{cx:"50%",cy:"50%",r:"10"}})])])])])},c=[],f={name:"ComponentLabReportPickersHollow1",props:{},data:function(){return{on:!0,value:3,style1:"fill:cyan",rotationMultiple:1}},methods:{toggle:function(){console.log("here"),this.on=!this.on},click:function(t){console.log(t,this.rotationMultiple,this.value),this.rotationMultiple=this.rotationMultiple+1,this.value=3-this.rotationMultiple+1}},computed:{rotation:function(){return"rotate"+72*this.rotationMultiple}},components:{},created:function(){}},d=f,u=(a("ad38"),a("2be6")),p=Object(u["a"])(d,r,c,!1,null,"28868394",null),k=p.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-mx-md"},[a("svg",{staticClass:"pentagon",attrs:{width:"73.643px",height:"73.643px",viewbox:"0 0 520 495"}},[a("path",{attrs:{d:"M260.0,10.0 L10.0,191.5 L105.5,475.5 L414.5,475.5 L510.0,191.5 L260.0,10.0 Z"}}),a("line",{attrs:{x1:"260.0",y1:"10.0",x2:"260.0",y2:"272.5"}}),a("line",{attrs:{x1:"10.0",y1:"191.5",x2:"260.0",y2:"272.5"}}),a("line",{attrs:{x1:"105.5",y1:"475.5",x2:"260.0",y2:"272.5"}}),a("line",{attrs:{x1:"414.5",y1:"475.5",x2:"260.0",y2:"272.5"}}),a("line",{attrs:{x1:"510.0",y1:"191.5",x2:"260.0",y2:"272.5"}})])])},x=[],h={name:"ComponentLabReportPickersHollow1",props:{},data:function(){return{on:"false",value:3}},methods:{toggle:function(){console.log("here"),this.on=!this.on}},computed:{rotation:function(){return this.on?"rotate72":""}},components:{},created:function(){}},b=h,w=(a("6f40"),Object(u["a"])(b,m,x,!1,null,"6d79bc16",null)),y=w.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-mx-md"},[a("svg",{attrs:{width:"53.23755",height:"53.31422",viewBox:"0 0 174.23755 159.31422",id:"svg2"}},[a("g",{attrs:{"inkscape:label":"Layer 1","inkscape:groupmode":"layer",id:"layer1",transform:"translate(-190.25534,-15.866058)"}},[a("path",{staticStyle:{fill:"none","fill-opacity":"1",stroke:"#000000","stroke-width":"0.51430947","stroke-linecap":"square","stroke-linejoin":"miter","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1"},attrs:{id:"centre",d:"M -88.127018,210.30114 L -92.080828,247.91913 L -129.07946,255.78344 L -147.99206,223.02585 L -122.68206,194.91624 L -88.127018,210.30114 z",transform:"matrix(0.888133,-0.395418,0.395423,0.888123,287.76966,-144.34998)"}}),a("path",{staticStyle:{fill:"#fce94f","fill-opacity":"1",stroke:"#000000","stroke-width":"0.51430947","stroke-linecap":"square","stroke-linejoin":"miter","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1"},attrs:{"sodipodi:type":"star",id:"top",d:"M -88.127018,210.30114 L -92.080828,247.91913 L -129.07946,255.78344 L -147.99206,223.02585 L -122.68206,194.91624 L -88.127018,210.30114 z",transform:"matrix(0.888133,0.395418,0.395423,-0.888123,287.76966,298.89002)"},on:{click:function(e){return t.click("#fce94f")}}}),a("path",{staticStyle:{fill:"lime","fill-opacity":"1",stroke:"#000000","stroke-width":"0.51430917","stroke-linecap":"square","stroke-linejoin":"miter","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1"},attrs:{"sodipodi:type":"star",id:"top-right",d:"M -88.127018,210.30114 L -92.080828,247.91913 L -129.07946,255.78344 L -147.99206,223.02585 L -122.68206,194.91624 L -88.127018,210.30114 z",transform:"matrix(-0.101618,0.966856,0.966848,0.101626,91.73786,176.07702)"},on:{click:function(e){return t.click("lime")}}}),a("path",{staticStyle:{fill:"orange","fill-opacity":"1",stroke:"#000000","stroke-width":"0.5143093","stroke-linecap":"square","stroke-linejoin":"miter","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1"},attrs:{id:"top left",d:"M -88.127018,210.30114 L -92.080828,247.91913 L -129.07946,255.78344 L -147.99206,223.02585 L -122.68206,194.91624 L -88.127018,210.30114 z",transform:"matrix(0.650512,-0.722475,-0.722464,-0.650514,465.14966,150.40402)"},on:{click:function(e){return t.click("orange")}}}),a("path",{staticStyle:{fill:"cyan","fill-opacity":"1",stroke:"#000000","stroke-width":"0.51430976","stroke-linecap":"square","stroke-linejoin":"miter","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1"},attrs:{id:"bottom-right",d:"M -88.127018,210.30114 L -92.080828,247.91913 L -129.07946,255.78344 L -147.99206,223.02585 L -122.68206,194.91624 L -88.127018,210.30114 z",transform:"matrix(-0.950936,0.202129,0.202119,0.95093,147.96366,-48.31118)"},on:{click:function(e){return t.click("cyan")}}}),a("path",{staticStyle:{fill:"red","fill-opacity":"1",stroke:"#000000","stroke-width":"0.51430976","stroke-linecap":"square","stroke-linejoin":"miter","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1"},attrs:{id:"bottom-left",d:"M -88.127018,210.30114 L -92.080828,247.91913 L -129.07946,255.78344 L -147.99206,223.02585 L -122.68206,194.91624 L -88.127018,210.30114 z",transform:"matrix(0.950936,0.202129,-0.202119,0.95093,400.58266,-48.31118)"},on:{click:function(e){return t.click("red")}}}),a("path",{staticStyle:{"fill-opacity":"0.95","fill-rule":"evenodd",stroke:"none","stroke-width":"1px","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-opacity":"1"},style:t.fill,attrs:{d:"M 149.3186,62.513598 L 227.20358,5.926125 L 305.08936,62.513616 L 275.33966,154.07386 L 179.06866,154.07386 L 149.3186,62.513598 z",id:"path2405",transform:"translate(47.069,14.7564)"}})])])])},g=[],C=(a("d2b6"),{name:"ComponentLabReportPickersHollow1",props:{},data:function(){return{on:"false",value:3,fill:"fill: none"}},methods:{toggle:function(){console.log("here"),this.on=!this.on},click:function(t){console.log("here"),this.fill="fill: "+t}},computed:{rotation:function(){return this.on?"rotate72":""}},components:{},created:function(){}}),L=C,q=(a("6c96"),Object(u["a"])(L,v,g,!1,null,"e41b1052",null)),_=q.exports,S={name:"ComponentLabReportsPickers",props:{},data:function(){return{text1:"",text2:""}},methods:{},computed:{},components:{Hollow1:k,Hollow2:y,Snowflake1:_},created:function(){}},M=S,T=(a("679c"),Object(u["a"])(M,o,l,!1,null,"4c475804",null)),j=T.exports,P={name:"PageLabReports",data:function(){return{elements:[{name:"pickers",label:"Pickers",component:j,shortcut:"p"}]}},components:{toolbarPage:i["a"]}},z=P,E=Object(u["a"])(z,s,n,!1,null,null,null);e["default"]=E.exports},"679c":function(t,e,a){"use strict";var s=a("08a0"),n=a.n(s);n.a},"6c96":function(t,e,a){"use strict";var s=a("fc6e"),n=a.n(s);n.a},"6f40":function(t,e,a){"use strict";var s=a("fb17"),n=a.n(s);n.a},ad38:function(t,e,a){"use strict";var s=a("ce78"),n=a.n(s);n.a},b0d4:function(t,e,a){"use strict";var s=a("b3f7"),n=a.n(s);n.a},b3f7:function(t,e,a){},b9c7:function(t,e,a){"use strict";var s=a("79c1"),n=a("adb3"),i=a("bb64");t.exports=function(t){var e=s(this),a=i(e.length),o=arguments.length,l=n(o>1?arguments[1]:void 0,a),r=o>2?arguments[2]:void 0,c=void 0===r?a:n(r,a);while(c>l)e[l++]=t;return e}},ce78:function(t,e,a){},d2b6:function(t,e,a){var s=a("ef37");s(s.P,"Array",{fill:a("b9c7")}),a("96ba")("fill")},fb17:function(t,e,a){},fc6e:function(t,e,a){}}]);
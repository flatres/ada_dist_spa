(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(n,e,t){n.exports=t("71d8")},"452d":function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"userId",function(){return I}),t.d(r,"name",function(){return w}),t.d(r,"permissions",function(){return x}),t.d(r,"isDark",function(){return y}),t.d(r,"isLight",function(){return P}),t.d(r,"isAuthenticated",function(){return D}),t.d(r,"getModuleAccess",function(){return T}),t.d(r,"getModuleColor",function(){return E}),t.d(r,"getPageAccess",function(){return R});var o={};t.r(o),t.d(o,"authUser",function(){return G}),t.d(o,"clearAuthData",function(){return j}),t.d(o,"isDark",function(){return V}),t.d(o,"role",function(){return _});var a={};t.r(a),t.d(a,"login",function(){return W}),t.d(a,"tryAutoLogin",function(){return q}),t.d(a,"logout",function(){return M}),t.d(a,"isDark",function(){return U}),t.d(a,"setAxiosHeader",function(){return N}),t.d(a,"setPrimaryColor",function(){return z});var s={};t.r(s),t.d(s,"isConnected",function(){return K}),t.d(s,"consoleLog",function(){return X}),t.d(s,"updaterData",function(){return Z}),t.d(s,"updater",function(){return nn}),t.d(s,"progress",function(){return en});var i={};t.r(i),t.d(i,"consoleLog",function(){return rn}),t.d(i,"updater",function(){return on}),t.d(i,"notify",function(){return an}),t.d(i,"progress",function(){return sn}),t.d(i,"clearConsoleLog",function(){return un}),t.d(i,"isConnected",function(){return cn});var u={};t.r(u),t.d(u,"connectSocket",function(){return fn}),t.d(u,"clearConsoleLog",function(){return dn});var c={};t.r(c),t.d(c,"activeSession",function(){return hn}),t.d(c,"coachOutFilter",function(){return bn}),t.d(c,"coachRetFilter",function(){return gn});var l={};t.r(l),t.d(l,"setActiveSession",function(){return vn}),t.d(l,"setCoachOutFilter",function(){return Qn}),t.d(l,"setCoachRetFilter",function(){return Cn});var f={};t.r(f),t.d(f,"activeSession",function(){return Ln}),t.d(f,"resultsGCSE",function(){return In}),t.d(f,"statisticsGCSE",function(){return wn}),t.d(f,"resultsALevel",function(){return xn}),t.d(f,"statisticsALevel",function(){return yn});var d={};t.r(d),t.d(d,"setActiveSession",function(){return Pn}),t.d(d,"setStatisticsGCSE",function(){return Dn}),t.d(d,"setResultsGCSE",function(){return Tn}),t.d(d,"setStatisticsALevel",function(){return En}),t.d(d,"setResultsAlevel",function(){return Rn});var p=t("9869"),m=t("9ce4"),h=t("c005"),b=t.n(h),g=t("fa94"),v=t.n(g),Q={},C=t("fe3b"),S=t("bf1d"),A=t("f1a8"),k={namespaced:!0,state:Q,getters:C,mutations:S,actions:A},L={userId:null,auth:null,firstname:null,lastname:null,permissions:{},roles:[],isDark:!0,isLight:!1},I=function(n){return n.userId},w=function(n){var e={firstname:n.firstname,lastname:n.lastname};return e},x=function(n){return n.permissions},y=function(n){return n.isDark},P=function(n){return n.isLight},D=function(n){return null!==n.auth},T=function(n){return function(e){return!!n.permissions[e]&&n.permissions[e].hasAccess}},E=function(n){return function(e){return n.permissions[e]?n.permissions[e].color:"#4fc08d"}},R=function(n){return function(e,t){if(!n.permissions[e])return!1;var r=n.permissions[e];return!!r.pages[t]&&r.pages[t].hasAccess}},F=(t("288e"),t("3cc3")),O=t.n(F),G=(t("2e73"),t("dde3"),t("76d0"),t("0e20"),function(n,e){n.auth=e.auth,n.userId=e.userId,n.permissions=e.permissions,n.roles=e.roles}),j=function(n){n.auth=null,n.userId=null,n.permissions={},n.roles=[]},V=function(n,e){n.isDark=e,n.isLight=!e},_=function(n,e){var t=e[0].data,r=e[0].roleId;Object.entries(t).forEach(function(e){var o=O()(e,2),a=o[0],s=o[1];if(n.permissions[a]){!0===t[a].hasAccess&&(n.permissions[a].hasAccess=!0,n.permissions[a].fromRoles.find(function(n){return n===r})||n.permissions[a].fromRoles.push(r)),!1===t[a].hasAccess&&1===n.permissions[a].fromRoles.length&&(n.permissions[a].fromRoles=[],n.permissions[a].hasAccess=!1);var i=s.pages;Object.entries(i).forEach(function(e){var t=O()(e,2),o=t[0],s=t[1];n.permissions[a].pages[o]?n.permissions[a].pages[o].fromRoles.find(function(n){return n===r})?1===n.permissions[a].pages[o].fromRoles.length&&p["a"].set(n.permissions[a].pages,o,s):!0===s.hasAccess&&(n.permissions[a].pages[o].hasAccess=!0,n.permissions[a].pages[o].fromRoles.push(r)):p["a"].set(n.permissions[a].pages,o,s)})}else p["a"].set(n.permissions,a,s)})},B=(t("c8a0"),t("4778")),$=t("bc9f"),H=t("134d"),W=function(n,e){var t=n.commit,r=n.dispatch;return console.log(e),new Promise(function(n,o){B["a"].post("/auth/login",{login:e.login,password:e.password}).then(function(e){var o=e.data;t("authUser",{auth:o.auth,userId:o.userId,permissions:o.permissions,roles:o.roles}),$["a"].set("auth",o.auth),$["a"].set("userId",o.userId),$["a"].set("permissions",o.permissions),$["a"].set("roles",o.roles),r("setAxiosHeader",e.data.auth),r("sockets/connectSocket",o.auth,{root:!0}),n(e)}).catch(function(n){o(n)})})},q=function(n){var e=n.commit,t=n.dispatch,r=$["a"].getItem("auth");return null!==r&&(e("authUser",{auth:r,userId:$["a"].getItem("userId"),permissions:$["a"].getItem("permissions"),roles:$["a"].getItem("roles")}),t("setAxiosHeader",r),t("sockets/connectSocket",r,{root:!0}),!0)},M=function(n){var e=n.commit,t=n.dispatch;$["a"].clear(),e("clearAuthData"),t("setAxiosHeader","")},U=function(n,e){var t=n.commit;t("isDark",e)},N=function(n,e){B["a"].defaults.headers.common["Authorization"]=e},z=function(n,e){n.commit;return e===H["a"]},J={namespaced:!0,state:L,getters:r,mutations:o,actions:a},Y={isConnected:!1,consoleLog:[],updaters:{},updaterData:{},progress:{},progressIsComplete:{}},K=(t("0e30"),function(n){return n.isConnected}),X=function(n){return n.consoleLog.slice().reverse()},Z=function(n){return function(e){return n.updaterData[e]}},nn=function(n){return function(e,t){if(!n.updaters[e])return t;var r=n.updaters[e],o=r.key,a=r.data[o],s=t.findIndex(function(n){return n[o]===a});return s>-1&&p["a"].set(t,s,r.data),t}},en=function(n){return function(e){return n.progress[e]?n.progress[e]:0}},tn=(t("ae66"),t("2405")),rn=function(n,e){if(!0===e.replace){for(var t=n.consoleLog.length,r=t-1;r>=0;r--)if(!1===n.consoleLog[r].isError){n.consoleLog[r].message=e.message;break}}else n.consoleLog.push(e)},on=function(n,e){var t=e[0].updaterId;p["a"].set(n.updaters,t,e[0])},an=function(n,e){console.log("NOTIFY",e),tn["a"].create({message:e[0].message,color:"primary",textColor:"black"})},sn=function(n,e){var t=e[0].progressId;p["a"].set(n.progress,t,e[0].progress),p["a"].set(n.progressIsComplete,t,e[0].isComplete)},un=function(n){n.consoleLog=[]},cn=function(n,e){n.isConnected=e},ln=t("0c9c"),fn=function(n,e){var t=n.commit,r=n.rootState;p["a"].use(ln["a"],{debug:!0,url:"wss://adazmq.marlboroughcollege.org/wss",realm:"realm1",onopen:function(n,e){t("isConnected",!0)},onclose:function(n,e){t("isConnected",!1)}}),p["a"].Wamp.subscribe("console_"+e,function(n,e,r){t("consoleLog",n[0])},{acknowledge:!0}).then(function(n){}),p["a"].Wamp.subscribe("updater_"+e,function(n,e,r){t("updater",n)},{acknowledge:!0}).then(function(n){}),p["a"].Wamp.subscribe("progress_"+e,function(n,e,r){t("progress",n)},{acknowledge:!0}).then(function(n){}),p["a"].Wamp.subscribe("notify_"+e,function(n,e,r){t("notify",n)},{acknowledge:!0}).then(function(n){}),r.user.roles.forEach(function(n,e){console.log(n),p["a"].Wamp.subscribe("role_"+n,function(n,e,r){t("user/role",n,{root:!0})},{acknowledge:!0}).then(function(n){})})},dn=function(n){var e=n.commit;e("clearConsoleLog")},pn={namespaced:!0,state:Y,getters:s,mutations:i,actions:u},mn={activeSession:null,activeSessionName:null,coachOutFilter:[],coachRetFilter:[]},hn=function(n){return n.activeSession},bn=function(n){return n.coachOutFilter},gn=function(n){return n.coachRetFilter},vn=function(n,e){n.activeSession=e},Qn=function(n,e){n.coachOutFilter=e},Cn=function(n,e){n.coachRetFilter=e},Sn=t("a8b2"),An={namespaced:!0,state:mn,getters:c,mutations:l,actions:Sn},kn={activeSession:null,resultsGCSE:null,statisticsGCSE:null,resultsALevel:null,statisticsALevel:null},Ln=function(n){return n.activeSession},In=function(n){return n.resultsGCSE},wn=function(n){return n.statisticsGCSE},xn=function(n){return n.resultsALevel},yn=function(n){return n.statisticsALevel},Pn=function(n,e){n.activeSession=e},Dn=function(n,e){n.statisticsGCSE=e},Tn=function(n,e){n.resultsGCSE=e},En=function(n,e){n.statisticsALevel=e},Rn=function(n,e){n.resultsALevel=e},Fn=t("cb00"),On={namespaced:!0,state:kn,getters:f,mutations:d,actions:Fn};p["a"].use(m["a"]),p["a"].use(b.a),p["a"].use(v.a);var Gn=new m["a"].Store({modules:{example:k,user:J,sockets:pn,transport:An,exams:On}});e["a"]=Gn},4778:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var r=t("8206"),o=t.n(r),a=o.a.create({baseURL:"/api/v1/public/"});o.a.defaults.port=80,e["b"]=function(n){var e=n.Vue;e.prototype.$axios=a}},"71d8":function(n,e,t){"use strict";t.r(e);var r=t("93db"),o=t.n(r),a=(t("df26"),t("5965")),s=t.n(a),i=(t("05e4"),t("dc4e"),t("2818"),t("9f83"),t("9869")),u=t("2965"),c=t("c3cf"),l=t("83d2"),f=t("bc4f"),d=t("b4af"),p=t("889e"),m=t("7e42"),h=t("80ff"),b=t("26a8"),g=t("490d"),v=t("eb05"),Q=t("f85a"),C=t("2ef0"),S=t("7caa"),A=t("34ff"),k=t("094b"),L=t("1530"),I=t("19be"),w=t("8edc"),x=t("b693"),y=t("bc74"),P=t("6081"),D=t("4776"),T=t("dd08"),E=t("1411"),R=t("1d98"),F=t("f962c"),O=t("d3a4"),G=t("851c"),j=t("18f0"),V=t("c462"),_=t("41c9"),B=t("b74b"),$=t("3946"),H=t("d200"),W=t("8c18"),q=t("6a2f"),M=t("6799"),U=t("cd4d"),N=t("dfd0"),z=t("9676"),J=t("9cbe"),Y=t("d1dc"),K=t("ec56"),X=t("5840"),Z=t("3aaf"),nn=t("e81c"),en=t("3d3c"),tn=t("6475"),rn=t("b8ed"),on=t("69a4"),an=t("3ec9"),sn=t("4840"),un=t("1139"),cn=t("ebe6"),ln=t("965d"),fn=t("5b32"),dn=t("2be8"),pn=t("58c0"),mn=t("2405"),hn=t("1608"),bn=t("bc9f"),gn=t("a182");i["a"].use(c["a"],{config:{notify:{}},iconSet:u["a"],components:{QMarkupTable:l["a"],QSplitter:f["a"],QLayout:d["a"],QHeader:p["a"],QDrawer:m["a"],QPageContainer:h["a"],QScrollArea:b["a"],QPage:g["a"],QToolbar:v["a"],QToolbarTitle:Q["a"],QBtn:C["a"],QBtnGroup:S["a"],QIcon:A["a"],QList:k["a"],QItem:L["a"],QItemSection:I["a"],QItemLabel:w["a"],QField:x["a"],QInput:y["a"],QBtnDropdown:P["a"],QTabs:D["a"],QTab:T["a"],QTabPanels:E["a"],QTabPanel:R["a"],QSpace:F["a"],QRouteTab:O["a"],QCheckbox:G["a"],QTable:j["a"],QTh:V["a"],QTr:_["a"],QTd:B["a"],QSelect:$["a"],QPopupEdit:H["a"],QPopupProxy:W["a"],QMenu:q["a"],QFab:M["a"],QFabAction:U["a"],QColor:N["a"],QAjaxBar:z["a"],QSpinner:J["a"],QSpinnerGears:Y["a"],QSpinnerAudio:K["a"],QTree:X["a"],QTooltip:Z["a"],QDialog:nn["a"],QToggle:en["a"],QRadio:tn["a"],QDate:rn["a"],QTime:on["a"],QExpansionItem:an["a"],QChip:sn["a"],QBtnToggle:un["a"],QCard:cn["a"],QCardSection:ln["a"],QCardActions:fn["a"]},directives:{Ripple:dn["a"],ClosePopup:pn["a"]},plugins:{Notify:mn["a"],Dialog:hn["a"],LocalStorage:bn["a"],AppFullscreen:gn["a"]}});var vn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view"),t("q-ajax-bar",{attrs:{color:n.barColor}})],1)},Qn=[],Cn=(t("ae66"),t("c03b")),Sn=t.n(Cn),An=t("9ce4"),kn={name:"App",data:function(){return{dark:!1}},methods:{},computed:Sn()({},Object(An["e"])("user",["isDark","isLight"]),Object(An["c"])("sockets",["isConnected"]),{barColor:function(){var n=this.isDark?"primary":"primary-light";return this.isConnected?n:"negative"}}),created:function(){var n=this;this.$store.dispatch("user/tryAutoLogin").then(function(e){!0===e||n.$router.replace("/login")})}},Ln=kn,In=t("2be6"),wn=Object(In["a"])(Ln,vn,Qn,!1,null,null,null),xn=wn.exports,yn=t("452d"),Pn=t("5f2b"),Dn={path:"admin",component:function(){return t.e("7ca460ba").then(t.bind(null,"6f3e"))},children:[{path:"active",component:function(){return t.e("0ce46eb2").then(t.bind(null,"282e"))}},{path:"sync",component:function(){return Promise.all([t.e("7d544128"),t.e("b72ded26")]).then(t.bind(null,"8976"))}},{path:"access",component:function(){return Promise.all([t.e("7d544128"),t.e("a16611a8")]).then(t.bind(null,"e5bb"))}},{path:"tags",component:function(){return Promise.all([t.e("7d544128"),t.e("e73dcd66")]).then(t.bind(null,"9de1"))}}]},Tn={path:"transport",component:function(){return t.e("123fafaf").then(t.bind(null,"4ece"))},children:[{path:"coaches",component:function(){return Promise.all([t.e("7d544128"),t.e("696a2ede")]).then(t.bind(null,"e1b0"))}},{path:"taxis",component:function(){return Promise.all([t.e("7d544128"),t.e("25cd02f0")]).then(t.bind(null,"7697"))}},{path:"sessions",component:function(){return Promise.all([t.e("7d544128"),t.e("85c9c3ba")]).then(t.bind(null,"865b"))}}]},En={path:"students",component:function(){return t.e("62b3c34c").then(t.bind(null,"dce4"))},children:[{path:"profile",component:function(){return t.e("f72c65a4").then(t.bind(null,"bea3"))}},{path:"list",component:function(){return t.e("588e5c54").then(t.bind(null,"9fdc"))}}]},Rn={path:"lab",component:function(){return t.e("7b63921b").then(t.bind(null,"2698"))},children:[{path:"crud",component:function(){return Promise.all([t.e("7d544128"),t.e("5a4f0865")]).then(t.bind(null,"151f"))}},{path:"sockets",component:function(){return Promise.all([t.e("7d544128"),t.e("7ab7a670")]).then(t.bind(null,"0c4f"))}},{path:"reports",component:function(){return t.e("3cfe80a8").then(t.bind(null,"388f"))}}]},Fn={path:"data",component:function(){return t.e("6057e126").then(t.bind(null,"75f6"))},children:[{path:"location",component:function(){return Promise.all([t.e("7d544128"),t.e("6473d526")]).then(t.bind(null,"5a6a"))}}]},On={path:"location",component:function(){return t.e("be90cff4").then(t.bind(null,"a296"))},children:[{path:"system",component:function(){return Promise.all([t.e("7d544128"),t.e("daece1c8")]).then(t.bind(null,"ea66"))}}]},Gn={path:"academic",component:function(){return t.e("1f1411b8").then(t.bind(null,"7b56"))},children:[{path:"jane",component:function(){return Promise.all([t.e("7d544128"),t.e("e358a5b4")]).then(t.bind(null,"0ae4"))}}]},jn={path:"exams",component:function(){return t.e("e015efaa").then(t.bind(null,"4bb3"))},children:[{path:"",component:function(){return t.e("2d0d7a63").then(t.bind(null,"785a"))}},{path:"gcse",component:function(){return Promise.all([t.e("7d544128"),t.e("543bf756")]).then(t.bind(null,"2457"))}}]},Vn=[{path:"/",component:function(){return t.e("ebf8d318").then(t.bind(null,"5b6e"))},children:[{path:"",component:function(){return t.e("3e63435c").then(t.bind(null,"d9b1"))}},{path:"user",component:function(){return t.e("2d221f88").then(t.bind(null,"cd2c"))}},Dn,Tn,En,Rn,On,Gn,Fn,jn]},{path:"/login",name:"login",component:function(){return t.e("12427b1f").then(t.bind(null,"902c"))},children:[{path:"",component:function(){return t.e("48cc6314").then(t.bind(null,"cd02"))}}]},{path:"*",component:function(){return t.e("741b98a7").then(t.bind(null,"2d51"))}}],_n=Vn;i["a"].use(Pn["a"]);var Bn=new Pn["a"]({mode:"history",base:"/",scrollBehavior:function(){return{y:0}},routes:_n}),$n=Bn,Hn=function(){var n="function"===typeof yn["a"]?Object(yn["a"])({Vue:i["a"]}):yn["a"],e="function"===typeof $n?$n({Vue:i["a"],store:n}):$n;n.$router=e;var t={el:"#q-app",router:e,store:n,render:function(n){return n(xn)}};return{app:t,store:n,router:e}},Wn=t("4778"),qn=function(n){var e=n.router;n.store,n.Vue;e.beforeEach(function(n,e,t){t()})},Mn=(t("014e"),t("e9b0"),function(n){n.app,n.router,n.Vue}),Un=t("5871"),Nn=t.n(Un),zn=function(n){n.app,n.router;var e=n.Vue;e.use(Nn.a)},Jn=t("fa94"),Yn=t.n(Jn),Kn=function(n){var e=n.Vue;e.use(Yn.a)},Xn=(t("2e73"),t("dde3"),t("76d0"),t("e285"),t("cd05"),t("7f3a")),Zn=t.n(Xn),ne={methods:{$parseOptions:function(n,e){var t=Zn()(new Set(n.map(function(n){return n[e]})));return t.map(function(n){return{label:n,value:n}})}}};i["a"].mixin(ne);var ee=Hn(),te=ee.app,re=ee.store,oe=ee.router;function ae(){return se.apply(this,arguments)}function se(){return se=s()(o.a.mark(function n(){var e,t;return o.a.wrap(function(n){while(1)switch(n.prev=n.next){case 0:e=[Wn["b"],qn,Mn,zn,Kn,void 0],t=0;case 2:if(!(t<e.length)){n.next=20;break}if("function"===typeof e[t]){n.next=5;break}return n.abrupt("continue",17);case 5:return n.prev=5,n.next=8,e[t]({app:te,router:oe,store:re,Vue:i["a"],ssrContext:null});case 8:n.next=17;break;case 10:if(n.prev=10,n.t0=n["catch"](5),!n.t0||!n.t0.url){n.next=15;break}return window.location.href=n.t0.url,n.abrupt("return");case 15:return console.error("[Quasar] boot error:",n.t0),n.abrupt("return");case 17:t++,n.next=2;break;case 20:new i["a"](te);case 21:case"end":return n.stop()}},n,null,[[5,10]])})),se.apply(this,arguments)}ae()},"9f83":function(n,e,t){},a8b2:function(n,e){},bf1d:function(n,e){},cb00:function(n,e){},f1a8:function(n,e){},fe3b:function(n,e){}},[[0,"runtime","vendor"]]]);
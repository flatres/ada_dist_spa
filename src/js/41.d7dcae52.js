(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{e4b7:function(e,t,a){},f0d1:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.getGlobalSubject?a("div",[a("div",{staticClass:"full-width bg-secondary",staticStyle:{height:"1px"}}),a("toolbar-page",{staticClass:"t-bar",attrs:{elements:e.elements,default:"wyap"},scopedSlots:e._u([{key:"before",fn:function(){return[a("year-bar",{staticClass:"yb-border",attrs:{exams:""}})]},proxy:!0}],null,!1,311916022)})],1):e._e()},r=[],o=(a("e125"),a("4823"),a("2e73"),a("76d0"),a("7f3a")),n=a.n(o),c=a("8e9e"),i=a.n(c),l=a("9ce4"),d=a("aba1"),u=a("89cf"),h=a("08e9"),b=a("9489"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("loading",{attrs:{loading:e.loading,channel:"hod.metrics.history"}}),e.loading?e._e():a("history-table",{key:e.componentKey,attrs:{history:e.subject.history,grades:e.subject.grades,bands:e.subject.bands,bandedHistory:e.subject.bandedHistory}}),e.loading?e._e():a("history-stack",{key:e.componentKey,ref:"stack",attrs:{id:"1",profile:e.subject.stackedHistory,grades:e.subject.grades}})],1)},y=[],f=a("47783"),p=a("452d"),m={getClassMetrics(e,t,a){var s=p["a"].getters["user/getGlobalSubject"];f["a"].get("/hod/"+s.id+"/metrics/class/"+a).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getYearMLO(e,t,a,s,r){var o=p["a"].getters["user/getGlobalSubject"];f["a"].get("/hod/"+o.id+"/metrics/year/"+a+"/MLO/"+s,{cancelToken:r}).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getYearMetrics(e,t,a,s,r){var o=p["a"].getters["user/getGlobalSubject"];f["a"].get("/hod/"+o.id+"/metrics/year/"+a+"/metrics/"+s,{cancelToken:r}).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getYearMetricsSpreadsheet(e,t,a,s,r){var o=p["a"].getters["user/getGlobalSubject"];f["a"].get("/hod/"+o.id+"/metrics/year/"+a+"/metrics/"+s+"/spreadsheet",{cancelToken:r}).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))},getExamHistory(e,t,a,s){var r=p["a"].getters["user/getGlobalSubject"];f["a"].get("/hod/"+r.id+"/metrics/year/"+a+"/history/"+s).then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},v=a("10ac"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"row"},[a("q-btn-toggle",{staticClass:"col q-ml-xs",attrs:{spread:"","no-caps":"",dense:"",outline:"","toggle-color":"tertiary",color:"secondary","text-color":"font-secondary","toggle-text-color":"accent",options:e.styles,year:"full-width"},model:{value:e.style,callback:function(t){e.style=t},expression:"style"}}),a("q-btn-toggle",{staticClass:"col q-ml-xs",attrs:{outline:"",spread:"","no-caps":"",dense:"","toggle-color":"tertiary",color:"secondary","text-color":"font-secondary","toggle-text-color":"accent",options:e.modes,year:"full-width"},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}})],1),"linear"===e.style?a("q-markup-table",{staticClass:"q-mt-xs q-my-md",attrs:{dense:"",flat:"",bordered:""}},[a("thead",{staticClass:"q-mb-md"},[a("tr",{staticClass:"bg-tertiary"},[a("th",{staticClass:"text-right"},[e._v(e._s("percentage"===e.mode?"%":"Abs"))]),e._l(e.grades,(function(t){return a("th",{key:t.grade},[e._v("\n          "+e._s(t.grade)+"\n          "),"GCSE Avg"===t.grade?a("q-icon",{attrs:{size:"xs",color:"font",name:"fad fa-question-circle"}},[a("q-tooltip",{attrs:{"content-class":"bg-tertiary"}},[e._v("\n              The average GCSE grades of the pupils taking the subject in a given year.\n            ")])],1):e._e()],1)})),a("th")],2)]),a("tbody",e._l(e.history,(function(t){return a("tr",{key:t.year},[a("td",{staticClass:"text-right"},[e._v(e._s(t.year))]),e._l(e.grades,(function(s){return a("td",{key:s.grade,staticClass:"text-center"},[e._v("\n          "+e._s(e.getGrade(s.grade,t))+"\n        ")])})),a("td")],2)})),0)]):e._e(),"banded"===e.style?a("q-markup-table",{staticClass:"q-mt-xs q-my-md",attrs:{dense:"",flat:"",bordered:""}},[a("thead",{staticClass:"q-mb-md"},[a("tr",{staticClass:"bg-tertiary"},[a("th",{staticClass:"text-right"},[e._v(e._s("percentage"===e.mode?"%":"Abs"))]),e._l(e.bands,(function(t){return a("th",{key:t},[e._v("\n          "+e._s(t)+"\n          "),"GCSE Avg"===t?a("q-icon",{attrs:{size:"xs",color:"font",name:"fad fa-question-circle"}},[a("q-tooltip",{attrs:{"content-class":"bg-tertiary"}},[e._v("\n              The average GCSE grades of the pupils taking the subject in a given year.\n            ")])],1):e._e()],1)})),a("th")],2)]),a("tbody",e._l(e.bandedHistory,(function(t){return a("tr",{key:t.year},[a("td",{staticClass:"text-right"},[e._v(e._s(t.year))]),e._l(e.bands,(function(s){return a("td",{key:s.bands,staticClass:"text-center"},[e._v("\n          "+e._s(e.getBandData(s,t))+"\n        ")])})),a("td",["Avg Last 3 Yrs"===t.year?a("q-icon",{attrs:{size:"xs",color:"font",name:"fad fa-question-circle"}},[a("q-tooltip",{attrs:{"content-class":"bg-tertiary"}},[e._v("\n              Last 3 (if available) year's grades are treated as a single cohort with the final absolute values divided by 3.\n            ")])],1):e._e()],1)],2)})),0)]):e._e()],1)},x=[],j=(a("4fb0"),{name:"HOD.Metrics.MLO.ProfileTable",props:{history:{type:Array,required:!0},bandedHistory:{type:Array,required:!0},grades:{type:Array,required:!0},bands:{type:Array,required:!0},title:{tyle:String,default:""}},data(){return{mode:"percentage",modes:[{value:"percentage",label:"Percentage"},{value:"absolute",label:"Absolute"}],style:"banded",styles:[{value:"banded",label:"Banded"},{value:"linear",label:"Linear"}]}},computed:{ordered(){return parseInt(this.profile[0])<7?this.profile.split().reverse():this.profile}},methods:{getGrade(e,t){var a=t.results.find((function(t){return t.grade===e}));return a?"absolute"===this.mode||"GCSE Avg"===e?a.count:a.pct:"-"},getBandData(e,t){var a=t.results.find((function(t){return t.band===e}));if(!a)return"-";var s="absolute"===this.mode?a.abs:a.pct;return 0===s?"":s}},watch:{},components:{},created(){}}),_=j,O=a("2be6"),S=a("6dd6"),w=a("2e0b"),C=a("34ff"),q=a("3aaf"),A=a("e279"),D=a.n(A),G=Object(O["a"])(_,k,x,!1,null,"5191f8cd",null),M=G.exports;D()(G,"components",{QBtnToggle:S["a"],QMarkupTable:w["a"],QIcon:C["a"],QTooltip:q["a"]});var $=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{ref:"stacked",staticStyle:{height:"200px"}})])},E=[],H=(a("c880"),a("915b")),P=a("3099"),Y=a("3903");H["f"](Y["a"]);var W={name:"HOD.Metrics.MLO.HistoryStack",props:{profile:{type:Array,required:!0},grades:{type:Array,required:!0},title:{tyle:String,default:""}},data(){return{stacked:null,chart:null}},methods:{createStacked(){var e=H["c"](this.$refs.stacked,P["l"]);this.stacked=e,e.hiddenState.properties.opacity=0,e.colors.step=4,e.padding(10,10,10,10);var t=e.xAxes.push(new P["a"]);t.dataFields.category="year",t.renderer.grid.template.location=0,t.renderer.minGridDistance=50;var a=e.yAxes.push(new P["k"]);a.min=0,a.max=100,a.strictMinMax=!0,a.calculateTotals=!0,a.renderer.minWidth=50,e.data=this.stackData()},addStackSeries(e,t){var a=e.series.push(new P["c"]);a.sequencedInterpolation=!0,a.columns.template.width=H["e"](80),a.columns.template.tooltipText="[bold]{name}[/][font-size:14px]: {valueY.totalPercent.formatNumber('#.00')}%",a.name=t,a.dataFields.categoryX="year",a.dataFields.valueY=t,a.dataFields.valueYShow="totalPercent",a.dataItems.template.locations.categoryX=.5,a.stacked=!0,a.tooltip.pointerOrientation="vertical";var s=this.getColor(t);a.fill=H["b"](s)},getColor(e){var t="";switch(e){case"9":case"D1":t="#FF00FF";break;case"D2":case"A*":case"8":t="#9900ff";break;case"D3":case"A":case"7":t="#0000ff";break;case"M1":case"B":case"6":t="#4a86e8";break;case"M2":case"C":case"5":t="#00ffff";break;case"M3":case"D":case"4":t="#00ff00";break;case"P1":case"E":case"3":t="#ffff00";break;case"P2":case"2":t="#ff9900";break;case"U":t="#ff0000";break;default:t="#980000"}return t},stackData(){var e=this;return this.grades.forEach((function(t){Number.isInteger(t.grade)||e.stacked.colors.reset(),"GCSE Avg"!==t.grade&&e.addStackSeries(e.stacked,t.grade)})),this.profile}},computed:{},watch:{},components:{},created(){},mounted(){this.createStacked()},beforeDestroy(){this.stacked.dispose()}},T=W,L=Object(O["a"])(T,$,E,!1,null,"5e19ad04",null),F=L.exports,B=a("8206"),I=a.n(B),z={name:"HOD.Data.MLO",props:{},data(){return{year:null,exam:null,subject:null,students:[],maxMLOCount:4,splitter:60,loading:!0,request:null,componentKey:1}},methods:{process(e){e.year===this.year&&e.id===this.subject.id&&e.examId===this.exam&&(this.componentKey++,this.students=e.students,this.maxMLOCount=e.maxMLOCount,this.subject=e,this.loading=!1)},getHistory(){this.loading=!0,this.request&&this.request.cancel(),this.request=I.a.CancelToken.source(),this.year=this.$store.getters["hod/activeYear"],this.exam=this.$store.getters["hod/activeExam"],this.subject=this.$store.getters["user/getGlobalSubject"],m.getExamHistory(this.process,this.$errorFunction,this.year,this.exam,this.request)}},computed:{},watch:{},components:{HistoryTable:M,HistoryStack:F,Loading:v["a"]},created(){var e=this;this.subject=this.$store.getters["user/getGlobalSubject"],this.getHistory(),this.subWatch=this.$store.watch((function(){return e.$store.getters["user/getGlobalSubject"]}),this.getHistory),this.yearWatch=this.$store.watch((function(){return e.$store.getters["hod/activeYear"]}),this.getHistory),this.examWatch=this.$store.watch((function(){return e.$store.getters["hod/activeExam"]}),this.getHistory)},beforeDestroy(){this.subWatch(),this.yearWatch(),this.examWatch()}},K=z,Q=(a("f1e9"),Object(O["a"])(K,g,y,!1,null,"7c11e2db",null)),J=Q.exports;function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U={name:"Page.HOD.Metrics",data(){return{elements_:[{name:"wyap",label:"wyap",component:b["a"],tooltip:"Whole Year Assessment Point"}]}},computed:X(X(X({},Object(l["c"])("user",["getGlobalSubject"])),Object(l["c"])("hod",["activeYear"])),{},{elements(){var e=[{name:"history",label:"history",component:J}];return e=[],11===this.activeYear||13===this.activeYear?[].concat(n()(this.elements_),n()(e)):this.elements_}}),methods:X({},Object(l["d"])("hod",["setActiveYear"])),components:{toolbarPage:h["a"],YearBar:d["a"],ExamBar:u["a"]},created(){var e=this;this.setActiveYear(13),this.subjectWatch=this.$store.watch((function(){return e.$store.getters["user/getGlobalSubject"]}),this.setClass),this.yearWatch=this.$store.watch((function(){return e.$store.getters["hod/activeYear"]}),this.setClass)},beforeDestroy(){this.subjectWatch&&this.subjectWatch(),this.yearWatch&&this.yearWatch()}},R=U,V=Object(O["a"])(R,s,r,!1,null,null,null);t["default"]=V.exports},f1e9:function(e,t,a){"use strict";var s=a("e4b7"),r=a.n(s);r.a}}]);
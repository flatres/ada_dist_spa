(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"4f9b":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("toolbar-page",{attrs:{elements:e.elements,default:"dashboard"}})},a=[],i=s("08e9"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-8 q-mr-lg"},[s("q-scroll-area",{staticStyle:{height:"80vh"}},[s("div",{staticClass:"q-pa-md"},[s("q-markup-table",{staticClass:"text-white no-shadow",attrs:{dense:""}},[s("tbody",e._l(e.logs.slice().reverse(),(function(t){return s("tr",{key:t.id,class:e.logColor(t),staticStyle:{border:"none"}},[s("td",{staticClass:"text-left text-grey",staticStyle:{width:"150px","border-bottom-width":"0px","font-size":"12px"}},[e._v(e._s(t.time))]),s("td",{staticClass:"text-left",staticStyle:{"border-bottom-width":"0px","font-size":"12px"}},[e._v(e._s(t.message))])])})),0)])],1)])],1),s("div",{staticClass:"col"},[s("p",{staticClass:"text-primary text-h5"},[e._v("CPU")]),s("div",{staticClass:"row full-width"},e._l(e.resources.cores,(function(t){return s("q-circular-progress",{key:t.id,staticClass:"q-ma-md text-primary",attrs:{"show-value":"","font-size":"10px",indeterminate:e.indeterminate,value:100-t.idle,size:"100px",color:"primary","track-color":"grey-8"}},[e._v("\n      "+e._s(100-t.idle)+"%\n      ")])})),1),s("div",{staticClass:"full-width text-center"},[s("q-circular-progress",{staticClass:"q-ma-md text-primary",attrs:{"show-value":"","font-size":"31px",indeterminate:e.indeterminate,value:100-e.resources.cpuIdle,size:"200px",color:"primary","track-color":"grey-8"}},[e._v("\n      "+e._s(100-e.resources.cpuIdle)+"%\n      ")]),s("div",{ref:"cpuhistory",staticClass:"full-width",attrs:{id:"cpuhistory"}})],1),s("p",{staticClass:"q-mt-md text-primary text-h5"},[e._v("MEMORY")]),s("div",{staticClass:"full-width text-center"},[s("q-circular-progress",{staticClass:"q-ma-md text-primary",attrs:{"show-value":"","font-size":"31px",indeterminate:e.indeterminate,value:e.memPercentage,size:"200px",color:"primary","track-color":"grey-8"}},[e._v("\n     "+e._s(e.memPercentage)+"%\n     ")]),s("div",{ref:"memhistory",staticClass:"full-width",attrs:{id:"cpuhistory"}})],1)])])},l=[],n=s("4778"),c={getLogs:function(e,t,s){n["a"].get("/admin/logs").then((function(t){e(t.data)})).catch((function(e){console.log(e)}))}},d=s("915b"),u=s("3099"),p=s("d610");d["f"](p["a"]);var h={name:"Admin.Logs.Dashboard",data:function(){return{logs:[],resources:{cpuIdle:0},indeterminate:!0,cpuHistory:[],cpuHistoryChart:null,memHistory:[],memHistoryChart:null,interval:1e3,graphMinutes:1}},computed:{memPercentage:function(){return 0===this.resources.memTotal?0:100*(this.resources.memTotal-this.resources.memFree)/this.resources.memTotal}},methods:{fetchLogs:function(){c.getLogs(this.processLog)},processLog:function(e){this.logs=e.messages,this.resources=e.resources,this.indeterminate=!1;var t=Date.parse(e.time),s={date:t,value:100-this.resources.cpuIdle},r={date:t,value:this.memPercentage};if(this.cpuHistoryChart){var a=60*this.graphMinutes/(this.interval/1e3),i=this.cpuHistory.length>a?1:0;this.cpuHistoryChart.addData(s,i),this.memHistoryChart.addData(r,i)}else this.cpuHistory.push(s),this.memHistory.push(r),this.createCpuSpark(),this.createMemSpark()},logColor:function(e){switch(e.level){case"CRITICAL":return"text-white bg-red";default:return"text-white"}},createCpuSpark:function(){this.cpuHistoryChart&&this.cpuHistoryChart.dispose();var e=d["c"](this.$refs.cpuhistory,u["l"]);e.data=this.cpuHistory,e.padding(0,0,0,0);var t=e.xAxes.push(new u["d"]);t.renderer.grid.template.disabled=!0,t.renderer.labels.template.disabled=!0,t.startLocation=.5,t.endLocation=.7,t.cursorTooltipEnabled=!1;var s=e.yAxes.push(new u["k"]);s.min=0,s.renderer.grid.template.disabled=!0,s.renderer.baseGrid.disabled=!0,s.renderer.labels.template.disabled=!0,s.cursorTooltipEnabled=!1,e.cursor=new u["m"],e.cursor.lineY.disabled=!0;var r=e.series.push(new u["g"]);r.tooltipText="{date}: [bold]{value}",r.dataFields.dateX="date",r.dataFields.valueY="value",r.tensionX=.8,r.strokeWidth=2;var a=r.bullets.push(new u["b"]);a.circle.opacity=0,a.circle.propertyFields.opacity="opacity",a.circle.radius=3,this.cpuHistoryChart=e},createMemSpark:function(){this.memHistoryChart&&this.memHistoryChart.dispose();var e=d["c"](this.$refs.memhistory,u["l"]);e.data=this.memHistory,e.padding(0,0,0,0);var t=e.xAxes.push(new u["d"]);t.renderer.grid.template.disabled=!0,t.renderer.labels.template.disabled=!0,t.startLocation=.5,t.endLocation=.7,t.cursorTooltipEnabled=!1;var s=e.yAxes.push(new u["k"]);s.min=0,s.renderer.grid.template.disabled=!0,s.renderer.baseGrid.disabled=!0,s.renderer.labels.template.disabled=!0,s.cursorTooltipEnabled=!1,e.cursor=new u["m"],e.cursor.lineY.disabled=!0;var r=e.series.push(new u["g"]);r.tooltipText="{date}: [bold]{value}",r.dataFields.dateX="date",r.dataFields.valueY="value",r.tensionX=.8,r.strokeWidth=2;var a=r.bullets.push(new u["b"]);a.circle.opacity=0,a.circle.propertyFields.opacity="opacity",a.circle.radius=3,this.memHistoryChart=e}},components:{},mounted:function(){},created:function(){this.fetchLogs(),this.interval=setInterval(function(){this.fetchLogs()}.bind(this),this.interval)},beforeDestroy:function(){clearInterval(this.interval)}},m=h,v=(s("b7a8e"),s("2be6")),b=Object(v["a"])(m,o,l,!1,null,"00a7862c",null),y=b.exports,f={name:"Page.Admin.Logs",data:function(){return{elements:[{name:"dashboard",label:"dashboard",component:y}]}},components:{toolbarPage:i["a"]},methods:{refresh:function(){}}},g=f,x=Object(v["a"])(g,r,a,!1,null,null,null);t["default"]=x.exports},b7a8e:function(e,t,s){"use strict";var r=s("ed69"),a=s.n(r);a.a},ed69:function(e,t,s){}}]);
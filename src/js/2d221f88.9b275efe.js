(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d221f88"],{cd2c:function(r,e,t){"use strict";t.r(e);var o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("q-page",{staticClass:"flex flex-center"},[t("q-color",{staticStyle:{"max-width":"200px"},attrs:{dark:""},on:{input:r.setColour},model:{value:r.primaryColour,callback:function(e){r.primaryColour=e},expression:"primaryColour"}})],1)},a=[],l=t("134d"),i={name:"PageUserSettings",data:function(){return{primaryColour:""}},methods:{setColour:function(r){l["a"].setBrand("primary",this.primaryColour),document.getElementById("primaryLayout").style.borderColor=this.primaryColour,document.querySelector("aside#primaryLayoutDrawer").style.borderLeftColor=this.primaryColour}},created:function(){this.primaryColour=l["a"].getBrand("primary")}},n=i,u=t("2be6"),s=Object(u["a"])(n,o,a,!1,null,null,null);e["default"]=s.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cce9120"],{"0744":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[0==t.doneLists.length?e("h2",[t._v("还未有完成的任务")]):e("div",[e("h2",[t._v("已完成的任务列表")]),e("div",{staticClass:"doneLists"},t._l(t.doneLists,(function(t,s){return e("doneList",{key:s,attrs:{list:t}})})),1)])])},n=[],c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"DoneList"},[e("div",{staticClass:"describe"},[t._v(t._s(t.list.message))]),e("div",{staticClass:"ptime"},[t._v("耗费时间："+t._s(t.time))]),e("div",{staticClass:"ctime"},[t._v("创建时间："+t._s(t.list.date))])])},a=[],o={name:"doneList",props:{list:Object},computed:{time:function(){switch(this.list.standard){case"seconds":return this.list.time+"s";case"minutes":return this.list.time+"min";case"hours":return this.list.time+"h"}}}},l=o,u=(e("820a"),e("2877")),r=Object(u["a"])(l,c,a,!1,null,null,null),d=r.exports,m={name:"doneLists",data:function(){return{doneLists:this.$store.state.doneLists}},components:{doneList:d}},h=m,v=(e("470b"),Object(u["a"])(h,i,n,!1,null,null,null));s["default"]=v.exports},2161:function(t,s,e){},"470b":function(t,s,e){"use strict";e("90d0")},"820a":function(t,s,e){"use strict";e("2161")},"90d0":function(t,s,e){}}]);
//# sourceMappingURL=chunk-2cce9120.c68d3d07.js.map
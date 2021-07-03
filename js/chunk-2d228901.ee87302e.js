(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[e.isLoading?r("Spinner"):r("form",{on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.name,expression:"profile.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.profile.name},on:{input:function(t){t.target.composing||e.$set(e.profile,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),e.profile.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.profile.image,width:"200",height:"200"}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中":"submit")+" ")])])],1)},n=[],i=r("1da1"),s=r("5530"),o=(r("96cf"),r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("2375")),c=r("2f62"),u=r("4cce"),l=r("2fa3"),m={name:"UserEdit",components:{Spinner:o["a"]},data:function(){return{profile:{id:-1,name:"",image:""},isProcessing:!1,isLoading:!0}},created:function(){var e=this.$route.params.id;this.fetchUser(e)},beforeRouteUpdate:function(e,t,r){var a=e.params.id;this.currentUser.id!==a&&this.$router.push({name:"not-found"}),r()},computed:Object(s["a"])({},Object(c["b"])(["currentUser"])),methods:{fetchUser:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,c,m,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].get({userId:e});case 3:if(a=r.sent,n=a.data,i=a.statusText,"OK"===i){r.next=8;break}throw new Error;case 8:o=n.profile,c=o.id,m=o.name,p=o.image,t.profile=Object(s["a"])(Object(s["a"])({},t.profile),{},{id:c,name:m,image:p}),t.isLoading=!1,r.next=18;break;case 14:r.prev=14,r.t0=r["catch"](0),t.isLoading=!1,l["a"].fire({icon:"error",title:"無法取得資料，請稍後再試。"});case 18:case"end":return r.stop()}}),r,null,[[0,14]])})))()},handleSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,a=e.target,n=new FormData(a),r.next=6,u["a"].update({userId:t.currentUser.id,formData:n});case 6:if(i=r.sent,s=i.data,"success"===s.status){r.next=10;break}throw new Error(s.message);case 10:t.$router.push({name:"user",params:{id:t.currentUser.id}}),r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),t.isProcessing=!1,l["a"].fire({icon:"error",title:"無法修改資料，請稍後再試。"});case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()},handleFileChange:function(e){var t=e.target.files;0===t.length&&(this.profile.image="");var r=window.URL.createObjectURL(t[0]);this.profile.image=r}}},p=m,d=r("2877"),f=Object(d["a"])(p,a,n,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d228901.ee87302e.js.map
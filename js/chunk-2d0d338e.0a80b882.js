(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d338e"],{"5c9c":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container py-5"},[t("form",{staticClass:"w-100",on:{submit:function(a){return a.preventDefault(),a.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),t("div",{staticClass:"form-label-group mb-2"},[t("label",{attrs:{for:"name"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",autofocus:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-2"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}})]),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password"},domProps:{value:e.passwordCheck},on:{input:function(a){a.target.composing||(e.passwordCheck=a.target.value)}}})]),t("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit"}},[e._v(" Submit ")]),t("div",{staticClass:"text-center mb-3"},[t("p",[t("router-link",{attrs:{to:"/signin"}},[e._v(" Sign In ")])],1)]),t("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v(" © 2017-2018 ")])])])},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"text-center mb-4"},[t("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v(" Sign Up ")])])}],n=t("1da1"),o=(t("96cf"),t("b0c0"),t("7696")),i=t("2fa3"),l={data:function(){return{name:"",email:"",password:"",passwordCheck:""}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.name){a.next=4;break}return i["a"].fire({icon:"warning",title:"請輸入姓名"}),a.abrupt("return");case 4:if(e.email){a.next=7;break}return i["a"].fire({icon:"warning",title:"請輸入信箱"}),a.abrupt("return");case 7:if(e.password){a.next=10;break}return i["a"].fire({icon:"warning",title:"請輸入密碼"}),a.abrupt("return");case 10:if(e.passwordCheck){a.next=13;break}return i["a"].fire({icon:"warning",title:"請確認密碼"}),a.abrupt("return");case 13:if(e.password===e.passwordCheck){a.next=16;break}return i["a"].fire({icon:"warning",title:"請確認密碼與確認密碼是否相同"}),a.abrupt("return");case 16:return a.next=18,o["a"].signUp({name:e.name,email:e.email,password:e.password,passwordCheck:e.passwordCheck});case 18:if(t=a.sent,r=t.data,console.log(r),"error"!==r.status){a.next=23;break}throw new Error(r.message);case 23:e.$router.push({name:"sign-in"}),a.next=29;break;case 26:a.prev=26,a.t0=a["catch"](0),i["a"].fire({icon:"error",title:"註冊失敗，請稍後再試。"});case 29:case"end":return a.stop()}}),a,null,[[0,26]])})))()}}},c=l,m=t("2877"),p=Object(m["a"])(c,r,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d338e.0a80b882.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ff2e65a"],{"01e4":function(t,e,r){"use strict";r("e7ee")},5942:function(t,e,r){},8496:function(t,e,r){},"8fdb":function(t,e,r){"use strict";r("8496")},"9d81":function(t,e,r){"use strict";r("5942")},ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[t.isLoading?r("Spinner"):[r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComment}}),r("CreateComment",{attrs:{restaurantId:t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})]],2)},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),r("4de4"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v(" Dashboard ")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{disabled:t.isProcessing,type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{disabled:t.isProcessing,type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{disabled:t.isProcessing,type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.deleteLiked(t.restaurant.id)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{disabled:t.isProcessing,type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addLiked(t.restaurant.id)}}},[t._v(" Like ")])],1)])}),c=[],u=r("2708"),d=r("4cce"),l=r("2fa3"),m={props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}},methods:{addFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,d["a"].addFavorite({restaurantId:t});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!0}),e.isProcessing=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),e.isProcessing=!1,l["a"].fire({icon:"error",title:"無法加成最愛，請稍後再試。"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()},deleteFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,d["a"].deleteFavorite({restaurantId:t});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!1}),e.isProcessing=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),e.isProcessing=!1,l["a"].fire({icon:"error",title:"無法移除最愛，請稍後再試。"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()},addLiked:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,d["a"].addLiked({restaurantId:t});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!0}),e.isProcessing=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),e.isProcessing=!1,l["a"].fire({icon:"error",title:"無法按讚，請稍後再試。"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()},deleteLiked:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,d["a"].deleteLiked({restaurantId:t});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!1}),e.isProcessing=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),e.isProcessing=!1,l["a"].fire({icon:"error",title:"無法移除讚，請稍後再試。"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()}},mixins:[u["a"]]},p=m,b=(r("9d81"),r("2877")),f=Object(b["a"])(p,o,c,!1,null,"c84c21ac",null),v=f.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v(" 所有評論： ")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{disabled:t.isProcessing,type:"button"},on:{click:function(r){return r.preventDefault(),r.stopPropagation(),t.handleDeleteButtonClick(e.id)}}},[t._v(" "+t._s(t.isProcessing?"處理中":"Delete")+" ")]):t._e(),r("h3",[r("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v(" "+t._s(e.User.name)+" ")])],1),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),r("hr")])}))],2)},h=[],k=r("2f62"),x={create:function(t){var e=t.restaurantId,r=t.text;return l["b"].post("/comments",{restaurantId:e,text:r})},delete:function(t){var e=t.commentId;return l["b"].delete("/comments/".concat(e))}},w={name:"RestaurantComments",props:{restaurantComments:{type:Array,required:!0}},data:function(){return{isProcessing:!1}},computed:Object(i["a"])({},Object(k["b"])(["currentUser"])),methods:{handleDeleteButtonClick:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,x.delete({commentId:t});case 4:if(a=r.sent,n=a.data,console.log("data",n),"success"===n.status){r.next=9;break}throw new Error(n.message);case 9:e.$emit("after-delete-comment",t),e.isProcessing=!1,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),e.isProcessing=!1,l["a"].fire({icon:"error",title:"無法刪除留言，請稍後再試。"});case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()}},mixins:[u["b"]]},C=w,_=(r("01e4"),Object(b["a"])(C,g,h,!1,null,"50043377",null)),y=_.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{disabled:t.isProcessing,type:"submit"}},[t._v(" "+t._s(t.isProcessing?"處理中":"submit")+" ")])])])},O=[],j=(r("a9e3"),{name:"CreateComment",props:{restaurantId:{type:Number,required:!0}},data:function(){return{text:"",isProcessing:!1}},methods:{handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.isProcessing=!0,t.text){e.next=6;break}return l["a"].fire({icon:"warning",title:"您尚未填寫評論唷！"}),t.isProcessing=!1,e.abrupt("return");case 6:return e.next=8,x.create({restaurantId:t.restaurantId,text:t.text});case 8:if(r=e.sent,a=r.data,"success"===a.status){e.next=12;break}throw new Error(a.message);case 12:t.$emit("after-create-comment",{commentId:a.commentId,restaurantId:t.restaurantId,text:t.text}),t.text="",t.isProcessing=!1,e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](0),t.isProcessing=!1,l["a"].fire({icon:"error",title:"新增評論失敗，請稍後再試。"});case 21:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}}),R=j,I=(r("8fdb"),Object(b["a"])(R,P,O,!1,null,"28ec5b6f",null)),L=I.exports,D=r("2375"),F=r("c4c3"),S={name:"Restaurant",components:{RestaurantDetail:v,RestaurantComments:y,CreateComment:L,Spinner:D["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},computed:Object(i["a"])({},Object(k["b"])(["currentUser"])),methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,o,c,u,d,m,p,b,f,v,g,h;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,F["a"].getRestaurant({restaurantId:t});case 3:a=r.sent,n=a.data,s=n.restaurant,o=n.isFavorited,c=n.isLiked,u=s.id,d=s.name,m=s.Category,p=s.image,b=s.opening_hours,f=s.tel,v=s.address,g=s.description,h=s.Comments,e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{id:u,name:d,categoryName:m?m.name:"未分類",image:p,openingHours:b,tel:f,address:v,description:g,isFavorited:o,isLiked:c}),e.restaurantComments=h,e.isLoading=!1,r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),e.isLoading=!1,l["a"].fire({icon:"error",title:"無法取得餐廳詳細資料，請稍後再試。"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},afterDeleteComment:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},afterCreateComment:function(t){console.log("payload",t);var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:a,createdAt:new Date})}}},E=S,U=Object(b["a"])(E,a,n,!1,null,null,null);e["default"]=U.exports},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("5135"),o=r("861d"),c=r("9bf2").f,u=r("e893"),d=s.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(m,d);var p=m.prototype=d.prototype;p.constructor=m;var b=p.toString,f="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=b.call(t);if(i(l,t))return"";var r=f?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}},e7ee:function(t,e,r){}}]);
//# sourceMappingURL=chunk-9ff2e65a.bc487f9c.js.map
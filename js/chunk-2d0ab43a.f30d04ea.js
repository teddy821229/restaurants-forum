(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"album py-5 bg-light"},[t.isLoading?r("Spinner"):r("div",{staticClass:"container"},[r("UserProfileCard",{attrs:{profile:t.profile,"initial-is-followed":t.isFollowed,comments:t.commentAdjust},on:{"after-add-following":t.afterAddFollowing,"after-cancel-following":t.afterCancelFollowing}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("UserFollowingsCard",{attrs:{followings:t.followings}}),r("br"),r("UserFollowersCard",{attrs:{followers:t.followers}})],1),r("div",{staticClass:"col-md-8"},[r("UserCommentsCard",{attrs:{comments:t.commentAdjust}}),r("br"),r("UserFavoritedRestaurantCard",{attrs:{favoritedRestaurants:t.favoritedRestaurants}})],1)])],1)],1)},a=[],i=r("1da1"),n=r("5530"),o=(r("96cf"),r("4de4"),r("b0c0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("img",{attrs:{src:t._f("emptyImage")(t.profile.image),width:"300px",height:"300px"}})]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.profile.name))]),r("p",{staticClass:"card-text"},[t._v(" "+t._s(t.profile.email)+" ")]),r("ul",{staticClass:"list-unstyled list-inline"},[r("li",[r("strong",[t._v(t._s(t.comments.length))]),t._v(" 已評論餐廳")]),r("li",[r("strong",[t._v(t._s(t.profile.favoritedRestaurantLength))]),t._v(" 收藏的餐廳")]),r("li",[r("strong",[t._v(t._s(t.profile.followingsLength))]),t._v(" followings (追蹤者)")]),r("li",[r("strong",[t._v(t._s(t.profile.followersLength))]),t._v(" followers (追隨者)")])]),t.profile.id===t.currentUser.id?[r("router-link",{attrs:{to:{name:"user-edit",params:{id:t.profile.id}}}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(" edit ")])])]:[t.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{disabled:t.isProcessing,type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.cancelFollowing(t.profile)}}},[t._v("取消追蹤")]):r("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isProcessing,type:"button"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.addFollowing(t.profile)}}},[t._v("追蹤")])]],2)])])])}),l=[],c=r("2708"),d=r("2f62"),u=r("4cce"),f=r("2fa3"),m={name:"UserProfileCard",props:{profile:{type:Object,required:!0},initialIsFollowed:{type:Boolean,required:!0},comments:{type:Array,required:!0}},data:function(){return{isFollowed:this.initialIsFollowed,isProcessing:!1}},watch:{initialIsFollowed:function(t){this.isFollowed=t}},computed:Object(n["a"])({},Object(d["b"])(["currentUser"])),methods:{addFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,u["a"].addFollowing({userId:t.id});case 4:if(s=r.sent,a=s.data,"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:e.$emit("after-add-following",e.currentUser),e.isProcessing=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),e.isProcessing=!1,f["a"].fire({icon:"error",title:"無法追蹤用戶，請稍後再試。"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()},cancelFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,u["a"].deleteFollowing({userId:t.id});case 4:if(s=r.sent,a=s.data,"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:e.$emit("after-cancel-following",e.currentUser),e.isProcessing=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),e.isProcessing=!1,f["a"].fire({icon:"error",title:"無法取消追蹤該用戶，請稍後再試。"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()}},mixins:[c["a"]]},g=m,p=r("2877"),w=Object(p["a"])(g,o,l,!1,null,null,null),v=w.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.followings.length))]),t._v(" followings (追蹤者) ")]),r("div",{staticClass:"card-body"},t._l(t.followings,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(e.image),width:"60",height:"60"}})])})),1)])},b=[],_={props:{followings:{type:Array,required:!0}},mixins:[c["a"]]},C=_,y=Object(p["a"])(C,h,b,!1,null,null,null),F=y.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.followers.length))]),t._v(" followers (追隨者) ")]),r("div",{staticClass:"card-body"},t._l(t.followers,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(e.image),width:"60",height:"60"}})])})),1)])},R=[],k={props:{followers:{type:Array,required:!0}},mixins:[c["a"]]},U=k,j=Object(p["a"])(U,x,R,!1,null,null,null),O=j.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.comments.length))]),t._v(" 已評論餐廳 ")]),r("div",{staticClass:"card-body"},t._l(t.comments,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"restaurant",params:{id:e.RestaurantId||0}}}},[e.Restaurant?r("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(e.Restaurant.image),width:"60",height:"60"}}):t._e()])})),1)])},P=[],I={props:{comments:{type:Array,required:!0}},mixins:[c["a"]]},A=I,E=Object(p["a"])(A,L,P,!1,null,null,null),$=E.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.favoritedRestaurants.length))]),t._v(" 收藏的餐廳 ")]),r("div",{staticClass:"card-body"},t._l(t.favoritedRestaurants,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"restaurant",params:{id:e.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(e.image),width:"60",height:"60"}})])})),1)])},D=[],J={props:{favoritedRestaurants:{type:Array,ruquired:!0}},mixins:[c["a"]]},S=J,B=Object(p["a"])(S,q,D,!1,null,null,null),K=B.exports,T=r("2375"),z={name:"User",components:{UserProfileCard:v,UserFollowingsCard:F,UserFollowersCard:O,UserCommentsCard:$,UserFavoritedRestaurantCard:K,Spinner:T["a"]},data:function(){return{profile:{id:0,name:"",email:"",image:"",favoritedRestaurantLength:0,followingsLength:0,followersLength:0},followings:[],followers:[],comments:[],favoritedRestaurants:[],isFollowed:!1,isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchUser(t)},beforeRouteUpdate:function(t,e,r){var s=t.params.id;this.fetchUser(s),r()},computed:Object(n["a"])(Object(n["a"])({},Object(d["b"])(["currentUser"])),{},{commentAdjust:function(){return this.comments.filter((function(t){return t.Restaurant}))}}),methods:{fetchUser:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a,i,o,l,c,d,m,g,p,w,v,h;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].get({userId:t});case 3:if(s=r.sent,a=s.data,i=s.statusText,"OK"===i){r.next=8;break}throw new Error;case 8:o=a.profile,l=a.isFollowed,c=o.id,d=o.name,m=o.email,g=o.image,p=o.Followings,w=o.Followers,v=o.Comments,h=o.FavoritedRestaurants,e.profile=Object(n["a"])(Object(n["a"])({},e.profile),{},{id:c,name:d,email:m,image:g,favoritedRestaurantLength:h.length,followingsLength:p.length,followersLength:w.length}),e.followings=p,e.followers=w,e.comments=v,e.favoritedRestaurants=h,e.isFollowed=l,e.isLoading=!1,r.next=23;break;case 19:r.prev=19,r.t0=r["catch"](0),e.isLoading=!1,f["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試。"});case 23:case"end":return r.stop()}}),r,null,[[0,19]])})))()},afterAddFollowing:function(t){this.followers.push(t),this.isFollowed=!0,this.profile.followersLength+=1},afterCancelFollowing:function(t){this.followers=this.followers.filter((function(e){return e.id!==t.id})),this.isFollowed=!1,this.profile.followersLength-=1}}},G=z,H=Object(p["a"])(G,s,a,!1,null,null,null);e["default"]=H.exports}}]);
//# sourceMappingURL=chunk-2d0ab43a.f30d04ea.js.map
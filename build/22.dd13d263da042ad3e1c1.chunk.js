webpackJsonp([22],{"./app/containers/IndexPage/constants.js":function(e,n,r){"use strict";r.d(n,"b",function(){return t}),r.d(n,"a",function(){return s}),r.d(n,"c",function(){return a}),r.d(n,"d",function(){return u}),r.d(n,"e",function(){return o});var t="newspeller/IndexPage/CHANGE_USERNAME",s="newspeller/IndexPage/USER_REGISTER",a="newspeller/IndexPage/USER_REGISTER_SUCCESS",u="newspeller/IndexPage/USER_REGISTER_ERROR",o="newspeller/IndexPage/FORM_MISSING_FIELDS_ERROR"},"./app/containers/IndexPage/reducer.js":function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r("./node_modules/immutable/dist/immutable.js"),s=(r.n(t),r("./app/containers/IndexPage/constants.js")),a=r.i(t.fromJS)({token:"",username:"",loading:!1,error:!1}),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments[1];switch(n.type){case s.a:return e.set("loading",!0);case s.e:return e.set("error","errorRequiredFields").set("loading",!1);case s.d:return e.set("error","errorUserExists").set("loading",!1);case s.c:return e.set("loading",!1).set("currentUser",n.user.email).set("token",n.user.token);case s.b:return e.set("username",n.name).set("error",!1);default:return e}};n.default=u}});
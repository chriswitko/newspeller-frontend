webpackJsonp([21],{"./app/containers/PasswordPage/constants.js":function(e,r,s){"use strict";s.d(r,"a",function(){return n}),s.d(r,"b",function(){return t}),s.d(r,"c",function(){return a}),s.d(r,"d",function(){return o}),s.d(r,"e",function(){return u}),s.d(r,"f",function(){return d}),s.d(r,"g",function(){return c});var n="newspeller/PasswordPage/CHANGE_USERNAME",t="newspeller/PasswordPage/CHANGE_PASSWORD",a="newspeller/PasswordPage/RESET_PASSWORD",o="newspeller/PasswordPage/RESET_PASSWORD_SUCCESS",u="newspeller/PasswordPage/SAVE_PASSWORD",d="newspeller/PasswordPage/SAVE_PASSWORD_SUCCESS",c="newspeller/PasswordPage/REPORT_ERROR"},"./app/containers/PasswordPage/reducer.js":function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=s("./node_modules/immutable/dist/immutable.js"),t=(s.n(n),s("./app/containers/PasswordPage/constants.js")),a=s.i(n.fromJS)({username:"",password:"",reset:!1,updated:!1,error:!1,loading:!1}),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments[1];switch(r.type){case t.g:return e.set("error",r.err);case t.f:return e.set("updated",!0).set("error","");case t.d:return e.set("reset",!0).set("error","");case t.a:return e.set("username",r.name).set("error","");case t.b:return e.set("password",r.password).set("error","");default:return e}};r.default=o}});
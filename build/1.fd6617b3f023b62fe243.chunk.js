webpackJsonp([1],{"./app/containers/HomePage/constants.js":function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a="boilerplate/Home/CHANGE_USERNAME",r="boilerplate/Home/CHANGE_PASSWORD"},"./app/containers/HomePage/reducer.js":function(e,t,n){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case s.a:return window.localStorage.setItem("currentUser",t.name),e.set("username",t.name);case s.b:return e.set("password",t.password);default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/immutable/dist/immutable.js"),s=(n.n(r),n("./app/containers/HomePage/constants.js")),o=n.i(r.fromJS)({username:"",password:"",repos:[]});t.default=a}});
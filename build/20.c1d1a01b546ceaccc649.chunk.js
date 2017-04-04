webpackJsonp([20],{"./app/containers/SettingsPage/constants.js":function(e,t,n){"use strict";n.d(t,"k",function(){return r}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return a}),n.d(t,"l",function(){return u}),n.d(t,"i",function(){return o}),n.d(t,"j",function(){return i}),n.d(t,"m",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return g}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return f}),n.d(t,"d",function(){return p}),n.d(t,"v",function(){return S}),n.d(t,"t",function(){return _}),n.d(t,"u",function(){return E}),n.d(t,"q",function(){return D}),n.d(t,"r",function(){return A}),n.d(t,"s",function(){return y}),n.d(t,"p",function(){return R}),n.d(t,"n",function(){return m}),n.d(t,"o",function(){return w}),n.d(t,"a",function(){return h}),n.d(t,"w",function(){return O}),n.d(t,"x",function(){return I}),n.d(t,"y",function(){return P});var r="newspellers/SettingsPage/REMOVE_DAY",s="newspellers/SettingsPage/REMOVE_DAY_SUCCESS",a="newspellers/SettingsPage/REMOVE_DAY_ERROR",u="newspellers/SettingsPage/ADD_DAY",o="newspellers/SettingsPage/ADD_DAY_SUCCESS",i="newspellers/SettingsPage/ADD_DAY_ERROR",c="newspellers/SettingsPage/REMOVE_HOUR",l="newspellers/SettingsPage/REMOVE_HOUR_SUCCESS",g="newspellers/SettingsPage/REMOVE_HOUR_ERROR",d="newspellers/SettingsPage/ADD_HOUR",f="newspellers/SettingsPage/ADD_HOUR_SUCCESS",p="newspellers/SettingsPage/ADD_HOUR_ERROR",S="newspellers/SettingsPage/CHANGE_LANGUAGE",_="newspellers/SettingsPage/CHANGE_LANGUAGE_SUCCESS",E="newspellers/SettingsPage/CHANGE_LANGUAGE_ERROR",D="newspellers/SettingsPage/REMOVE_ACCOUNT",A="newspellers/SettingsPage/REMOVE_ACCOUNT_SUCCESS",y="newspellers/SettingsPage/REMOVE_ACCOUNT_ERROR",R="newspellers/SettingsPage/UPDATE_TIMEZONE",m="newspellers/SettingsPage/UPDATE_TIMEZONE_SUCCESS",w="newspellers/SettingsPage/UPDATE_TIMEZONE_ERROR",h="newspellers/SettingsPage/CHANGE_TIME",O="newspellers/SettingsPage/LOAD_USER_DATA",I="newspellers/SettingsPage/LOAD_USER_DATA_SUCCESS",P="newspellers/SettingsPage/LOAD_USER_DATA_ERROR"},"./app/containers/SettingsPage/reducer.js":function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1],n=function(){switch(t.type){case u.w:return{v:e.set("loading",!0).set("error",!1).setIn(["userData","repositories"],!1)};case u.x:var n=[];return t.data.subscriptions.map(function(e){n.push({code:e.channel.code+"_"+e.topic.code,name:e.channel.name+" / "+e.topic.name,channelName:e.channel.name,sectionName:e.topic.name,description:e.topic.description,url:e.topic.url,facebook_id:e.channel.facebook_id,twitter_id:e.channel.twitter_id,icon:e.channel.icon,language:e.channel.language.toUpperCase(),is_subscribed:e.topic.is_subscribed})}),{v:e.setIn(["userData","subscriptions"],n).setIn(["userData","language"],t.data.language).setIn(["userData","email"],t.data.email).setIn(["userData","days"],t.data.days).setIn(["userData","hours"],t.data.hours).setIn(["userData","nextAt"],t.data.nextAt).setIn(["userData","timezone"],t.data.timezone).setIn(["userData","confirmed_at"],t.data.confirmed_at).set("loading",!1).set("currentUser",t.data.username)};case u.y:return{v:e.set("error",t.error).set("loading",!1)};case u.b:return e.getIn(["userData","hours"]).includes(t.hour)?{v:e}:{v:e.setIn(["userData","hours"],[].concat(r(e.getIn(["userData","hours"])),[t.hour]).sort(function(e,t){return l(e)-l(t)}))};case u.c:return{v:e.setIn(["userData","hours"],e.getIn(["userData","hours"]))};case u.i:return{v:e.setIn(["userData","days"],e.getIn(["userData","days"]))};case u.e:return{v:e.setIn(["userData","hours"],e.getIn(["userData","hours"]))};case u.m:return{v:e.setIn(["userData","hours"],e.getIn(["userData","hours"]).filter(function(e){return e!==t.hour}))};case u.l:return{v:e.setIn(["userData","days"],[].concat(r(e.getIn(["userData","days"])),[t.day]))};case u.k:return{v:e.setIn(["userData","days"],e.getIn(["userData","days"]).filter(function(e){return e!==t.day}))};case u.n:return{v:e.setIn(["userData","timezone"],t.timezone)};case u.t:return{v:e.setIn(["userData","language"],t.locale)};case u.r:return window.localStorage.setItem("currentUser",""),window.localStorage.setItem("token",""),window.location.href="/signin",{v:e.set("token",!1)};default:return{v:e}}}();if("object"===("undefined"==typeof n?"undefined":o(n)))return n.v}Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/immutable/dist/immutable.js"),u=(n.n(a),n("./app/containers/SettingsPage/constants.js")),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){var n=[],r=!0,s=!1,a=void 0;try{for(var u,o=e[Symbol.iterator]();!(r=(u=o.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){s=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(s)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=n.i(a.fromJS)({resent:!1,reset:!1,loading:!1,error:!1,currentUser:!1,token:!1,channels:[],userData:{language:"en",nextAt:"",timezone:"Europe/London",email:"",groupBy:"channels",subscriptions:!1,repositories:!1,days:!1,hours:!1,confirmed_at:!1}}),l=function(e){var t=e.split(":"),n=i(t,2),r=n[0],s=n[1];return 60*r+s};t.default=s}});
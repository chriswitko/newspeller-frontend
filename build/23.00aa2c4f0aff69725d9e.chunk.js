webpackJsonp([23],{"./app/containers/ChannelsPage/constants.js":function(e,n,t){"use strict";t.d(n,"b",function(){return s}),t.d(n,"c",function(){return r}),t.d(n,"d",function(){return a}),t.d(n,"e",function(){return o}),t.d(n,"f",function(){return l}),t.d(n,"g",function(){return c}),t.d(n,"h",function(){return i}),t.d(n,"i",function(){return u}),t.d(n,"j",function(){return d}),t.d(n,"n",function(){return p}),t.d(n,"o",function(){return C}),t.d(n,"p",function(){return f}),t.d(n,"k",function(){return g}),t.d(n,"l",function(){return _}),t.d(n,"m",function(){return h}),t.d(n,"a",function(){return E});var s="newspellers/ChannelsPage/USER_RESEND_ACTIVATION",r="newspellers/ChannelsPage/USER_RESEND_ACTIVATION_SUCCESS",a="newspellers/ChannelsPage/USER_RESEND_ACTIVATION_ERROR",o="newspellers/ChannelsPage/ADD_TOPIC",l="newspellers/ChannelsPage/ADD_TOPIC_SUCCESS",c="newspellers/ChannelsPage/ADD_TOPIC_ERROR",i="newspellers/ChannelsPage/REMOVE_TOPIC",u="newspellers/ChannelsPage/REMOVE_TOPIC_SUCCESS",d="newspellers/ChannelsPage/REMOVE_TOPIC_ERROR",p="newspeller/ChannelsPage/LOAD_FEEDS",C="newspeller/ChannelsPage/LOAD_FEEDS_SUCCESS",f="newspeller/ChannelsPage/LOAD_FEEDS_ERROR",g="newspeller/ChannelsPage/LOAD_USER_DATA",_="newspeller/ChannelsPage/LOAD_USER_DATA_SUCCESS",h="newspeller/ChannelsPage/LOAD_USER_DATA_ERROR",E="newspeller/ChannelsPage/FILTER_CHANNELS"},"./app/containers/ChannelsPage/reducer.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t("./node_modules/immutable/dist/immutable.js"),r=(t.n(s),t("./app/containers/ChannelsPage/constants.js")),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=t.i(s.fromJS)({selectedCategory:"news",displayedChannels:[],resent:!1,reset:!1,loading:!1,error:!1,currentUser:!1,token:!1,channels:[],language:"en",nextAt:"",timezone:"Europe/London",email:"",groupBy:"channels",subscriptions:!1,days:!1,hours:!1,confirmedAt:!1}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments[1],t=function(){switch(n.type){case r.a:return{v:e.set("selectedCategory",n.code).setIn(["displayedChannels"],e.getIn(["channels"]).filter(function(e){return e.sectionCategory===n.code}))};case r.c:return{v:e.set("resent",!0)};case r.n:return{v:e.set("loading",!0).set("error",!1).setIn(["channels"],!1)};case r.o:var t=[];return n.data.channels.map(function(e){e.sections.map(function(n){return t.push({code:e.code+"_"+n.code,name:e.name+" / "+n.name,channelCode:e.code,channelName:e.name,sectionName:n.name,sectionCategory:n.category,description:n.description,facebook_id:e.facebook_id,twitter_id:e.twitter_id,url:n.url,icon:e.icon,language:e.language.toUpperCase(),is_subscribed:n.is_subscribed})})}),{v:e.setIn(["channels"],t).setIn(["displayedChannels"],t.filter(function(n){return n.sectionCategory===e.get("selectedCategory")})).set("confirmedAt",n.data.subscriptions.confirmed_at).set("loading",!1)};case r.p:return{v:e.set("error",n.error).set("loading",!1)};case r.e:case r.f:return{v:e.setIn(["displayedChannels"],e.getIn(["displayedChannels"]).map(function(e){return e.code===n.topic.code?Object.assign({},e,{is_subscribed:!0}):e}))};case r.h:case r.i:return{v:e.setIn(["displayedChannels"],e.getIn(["displayedChannels"]).map(function(e){return e.code===n.topic.code?Object.assign({},e,{is_subscribed:!1}):e}))};default:return{v:e}}}();if("object"===("undefined"==typeof t?"undefined":a(t)))return t.v};n.default=l}});
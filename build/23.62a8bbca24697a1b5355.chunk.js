webpackJsonp([23],{"./app/containers/ChannelsPage/constants.js":function(e,n,s){"use strict";s.d(n,"e",function(){return t}),s.d(n,"f",function(){return r}),s.d(n,"g",function(){return a}),s.d(n,"h",function(){return l}),s.d(n,"i",function(){return c}),s.d(n,"j",function(){return o}),s.d(n,"k",function(){return i}),s.d(n,"l",function(){return u}),s.d(n,"m",function(){return d}),s.d(n,"q",function(){return C}),s.d(n,"r",function(){return p}),s.d(n,"s",function(){return g}),s.d(n,"n",function(){return h}),s.d(n,"o",function(){return _}),s.d(n,"p",function(){return E}),s.d(n,"d",function(){return f}),s.d(n,"a",function(){return S}),s.d(n,"b",function(){return P}),s.d(n,"c",function(){return R});var t="newspellers/ChannelsPage/USER_RESEND_ACTIVATION",r="newspellers/ChannelsPage/USER_RESEND_ACTIVATION_SUCCESS",a="newspellers/ChannelsPage/USER_RESEND_ACTIVATION_ERROR",l="newspellers/ChannelsPage/ADD_TOPIC",c="newspellers/ChannelsPage/ADD_TOPIC_SUCCESS",o="newspellers/ChannelsPage/ADD_TOPIC_ERROR",i="newspellers/ChannelsPage/REMOVE_TOPIC",u="newspellers/ChannelsPage/REMOVE_TOPIC_SUCCESS",d="newspellers/ChannelsPage/REMOVE_TOPIC_ERROR",C="newspeller/ChannelsPage/LOAD_FEEDS",p="newspeller/ChannelsPage/LOAD_FEEDS_SUCCESS",g="newspeller/ChannelsPage/LOAD_FEEDS_ERROR",h="newspeller/ChannelsPage/LOAD_USER_DATA",_="newspeller/ChannelsPage/LOAD_USER_DATA_SUCCESS",E="newspeller/ChannelsPage/LOAD_USER_DATA_ERROR",f="newspeller/ChannelsPage/FILTER_CHANNELS",S="newspeller/ChannelsPage/ACCEPT_CUSTOM_SCHEDULE",P="newspeller/ChannelsPage/ACCEPT_CUSTOM_SCHEDULE_SUCCESS",R="newspeller/ChannelsPage/ACCEPT_CUSTOM_SCHEDULE_ERROR"},"./app/containers/ChannelsPage/reducer.js":function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=s("./node_modules/immutable/dist/immutable.js"),r=(s.n(t),s("./app/containers/ChannelsPage/constants.js")),a=s.i(t.fromJS)({selectedCategory:"news",displayedChannels:[],displayedTopics:[],resent:!1,reset:!1,loading:!1,error:!1,currentUser:!1,token:!1,channels:[],language:"en",nextAt:"",timezone:"Europe/London",email:"",groupBy:"channels",subscriptions:!1,days:!1,hours:!1,confirmedAt:!1,hasCustomSchedule:!1}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments[1];switch(n.type){case r.b:return e.set("hasCustomSchedule",!0);case r.d:return e.set("selectedCategory",n.code).setIn(["displayedChannels"],e.getIn(["channels"]||[]).filter(function(e){return e.sectionCategory===n.code&&"channel"===e.channelCategory})).setIn(["displayedTopics"],e.getIn(["channels"]||[]).filter(function(e){return e.sectionCategory===n.code&&"topic"===e.channelCategory}));case r.f:return e.set("resent",!0);case r.q:return e.set("loading",!0).set("error",!1).setIn(["channels"],!1);case r.r:var s=[];return n.data.channels.map(function(e){e.sections.map(function(n){return s.push({code:e.code+"_"+n.code,name:e.name+" / "+n.name,channelCategory:e.category,channelCode:e.code,channelName:e.name,sectionName:n.name,sectionCategory:n.category,description:n.description,facebook_id:e.facebook_id,twitter_id:e.twitter_id,url:n.url,icon:e.icon,language:e.language.toUpperCase(),is_subscribed:n.is_subscribed})})}),e.setIn(["channels"],s).setIn(["displayedChannels"],s.filter(function(n){return n.sectionCategory===e.get("selectedCategory")&&"channel"===n.channelCategory})).setIn(["displayedTopics"],s.filter(function(n){return n.sectionCategory===e.get("selectedCategory")&&"topic"===n.channelCategory})).set("confirmedAt",n.data.subscriptions.confirmed_at).set("hasCustomSchedule",n.data.subscriptions.has_custom_schedule).set("loading",!1);case r.s:return e.set("error",n.error).set("loading",!1);case r.h:case r.i:return e.setIn(["displayedChannels"],e.getIn(["displayedChannels"]).map(function(e){return e.code===n.topic.code?Object.assign({},e,{is_subscribed:!0}):e}));case r.k:case r.l:return e.setIn(["displayedChannels"],e.getIn(["displayedChannels"]).map(function(e){return e.code===n.topic.code?Object.assign({},e,{is_subscribed:!1}):e}));default:return e}};n.default=l}});
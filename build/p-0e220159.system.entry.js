System.register(["./p-5f21797b.system.js","./p-29e17fb0.system.js"],(function(t){"use strict";var e,n,s;return{setters:[function(t){e=t.r;n=t.h},function(t){s=t.g}],execute:function(){var i=t("app_bookings",function(){function t(t){e(this,t);this.bookings=[]}t.prototype.render=function(){return n("div",{class:"guest-info-wrapper"},this.bookings.map((function(t){return n("div",{class:"guest-info"},n("h4",null,t.guestName+" "+t.guestLastName+" ("+t.roomName+")"),n("p",null,s(t.checkInTime)+"-"+s(t.checkOutTime)))})))};return t}())}}}));
System.register([],(function(e){"use strict";return{execute:function(){e({a:r,b:s,c:m,d:o,e:c,g:u,t:i});var t=e("T","access_token");var n=e("E","00000000-0000-0000-0000-000000000000");var a=e("m",["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექტ","ოქტ","ნოემ","დეკ"]);function r(e,t){if(t===void 0){t=null}e=new Date(e);var n=e.getDate();var a=e.getMonth()+1;var r=e.getFullYear();var u=n<10?"0"+n:n;var c=a<10?"0"+a:a;t=t||"-";return""+u+t+c+t+r}function u(e){e=new Date(e);return c(e)+" "+o(e)}function c(e){e=new Date(e);return""+e.getDate()}function o(e){e=new Date(e);return""+a[e.getMonth()]}function i(e){return e.split("/").reverse().join("/")}function s(){var e=new Date;e.setDate(e.getDate()+1);return e}function v(e){var t=new Date(e);t.setDate(t.getDate()+1);return t}function m(e,t){var a=t?t.name:"";var r=t?t.seatsCount:2;var u=t?t.price:0;var c=new Date(i(e));return{id:n,seatsCount:r,guestName:"",guestLastName:"",phone:"",email:"",amount:u,roomName:a,checkInTime:c,checkOutTime:v(c),status:0,comment:"",checkedIn:false}}}}}));
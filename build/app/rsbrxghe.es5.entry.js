/*! Built with http://stenciljs.com */
var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,i)}c((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}};App.loadBundle("rsbrxghe",["exports","./chunk-87bbc5cc.js"],function(n,r){var o=window.App.h,s=function(){function n(){}return n.prototype.componentDidLoad=function(){r.AnalyticsService.send("app","view change password",r.AuthService.getUser().sub)},n.prototype.changePassword=function(){return e(this,void 0,void 0,function(){var e,n;return t(this,function(t){switch(t.label){case 0:return t.trys.push([0,5,,6]),this.hasPasswordLengthError=(this.newPassword||"").length<6,this.hasDoesNotMatchError=this.newPassword!==this.confirmPassword,this.hasPasswordLengthError||this.hasDoesNotMatchError?[2]:(this.loading=!0,[4,fetch(r.environment().API_BASE_URL+"/account/changepassword",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+r.AuthService.getAccessToken()},body:JSON.stringify({oldPassword:this.currentPassword,newPassword:this.newPassword,confirmPassword:this.confirmPassword})})]);case 1:return(e=t.sent()).ok?[4,e.json()]:[3,3];case 2:if(!(n=t.sent()).access_token)throw"invalid login attempt";return r.AuthService.login(n.access_token),r.AnalyticsService.send("app","password changed",r.AuthService.getUser().sub),this.onLogin.emit(),[3,4];case 3:throw"Failed to process your request";case 4:return[3,6];case 5:return t.sent(),this.hasFailed=!0,[3,6];case 6:return this.loading=!1,[2]}})})},n.prototype.render=function(){var n=this;return o("div",{class:"loginwrapper"},o("div",{class:"alert alert-warning text-center"},"გთხოვთ შეცვალოთ პაროლი"),this.hasFailed?o("div",{class:"alert alert-danger text-center"},o("strong",null," დაფიქსირდა შეცდომა. ")):"",o("div",{class:"loader-wrapper"},this.loading?o("app-loader",null):""),o("input",{type:"password",class:"form-control",placeholder:"ახალი პაროლი",onKeyDown:function(r){return e(n,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return 13!==r.keyCode?[3,2]:[4,this.changePassword()];case 1:return e=t.sent(),[3,3];case 2:e=function(){},t.label=3;case 3:return[2,e]}})})},value:this.newPassword,onInput:function(e){return n.newPassword=e.target.value}}),this.hasPasswordLengthError?o("p",{class:"text-error"},"პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო"):"",o("br",null),o("input",{type:"password",class:"form-control",placeholder:"გაიმეორეთ პაროლი",onKeyDown:function(r){return e(n,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return 13!==r.keyCode?[3,2]:[4,this.changePassword()];case 1:return e=t.sent(),[3,3];case 2:e=function(){},t.label=3;case 3:return[2,e]}})})},value:this.confirmPassword,onInput:function(e){return n.confirmPassword=e.target.value}}),this.hasDoesNotMatchError?o("p",{class:"text-error"},"პაროლი არ ემთხვევა"):"",o("br",null),o("a",{onClick:function(){return e(n,void 0,void 0,function(){return t(this,function(e){switch(e.label){case 0:return[4,this.changePassword()];case 1:return[2,e.sent()]}})})},class:"btn btn-primary loginbutton"},"დადასტურება"))},Object.defineProperty(n,"is",{get:function(){return"app-change-password"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{confirmPassword:{state:!0},currentPassword:{type:String,attr:"current-password"},hasDoesNotMatchError:{state:!0},hasFailed:{state:!0},hasPasswordLengthError:{state:!0},loading:{state:!0},newPassword:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"onLogin",method:"onLogin",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".loginwrapper{width:270px;margin:150px auto 0}.loginbutton{width:100%;border-radius:15px!important}.text-error{color:red}"},enumerable:!0,configurable:!0}),n}(),a=function(){function e(){this.hasFailed=!1,this.loading=!1}return e.prototype.componentDidLoad=function(){r.AnalyticsService.send("app","view login")},e.prototype.login=function(){var e=this;this.hasFailed=!1,this.loading=!0,fetch(r.environment().API_BASE_URL+"/account/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({Username:this.username,Password:this.password})}).then(function(e){if(401===e.status)throw"invalid login attempt";return e.json()}).then(function(t){if(!t.access_token)throw"invalid login attempt";r.AuthService.login(t.access_token),e.shouldChangePassword=!r.AuthService.getUser().passwordChanged,e.loading=!1,e.shouldChangePassword||e.onLogin.emit()}).catch(function(t){console.log("error: ",t),e.hasFailed=!0,e.loading=!1,e.password=""})},e.prototype.render=function(){var e=this;return this.shouldChangePassword?o("app-change-password",{currentPassword:this.password}):o("div",{class:"loginwrapper"},this.hasFailed?o("div",{class:"alert alert-danger"},o("strong",null," არასწორი მომხმარებელი / პაროლი. ")):"",o("div",{class:"loader-wrapper"},this.loading?o("app-loader",null):""),o("input",{type:"text",class:"form-control",placeholder:"მომხმარებელი",value:this.username,onInput:function(t){return e.username=t.target.value}}),o("br",null),o("input",{type:"password",class:"form-control",placeholder:"პაროლი",onKeyDown:function(t){return 13===t.keyCode?e.login():function(){}},value:this.password,onInput:function(t){return e.password=t.target.value}}),o("br",null),o("a",{onClick:function(){return e.login()},class:"btn btn-primary loginbutton"},"ავტორიზაცია"))},Object.defineProperty(e,"is",{get:function(){return"app-login"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{hasFailed:{state:!0},loading:{state:!0},password:{state:!0},shouldChangePassword:{state:!0},username:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onLogin",method:"onLogin",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".loginwrapper{width:270px;margin:150px auto 0}.loginbutton{width:100%;border-radius:15px!important}"},enumerable:!0,configurable:!0}),e}();n.AppChangePassword=s,n.AppLogin=a,Object.defineProperty(n,"__esModule",{value:!0})});
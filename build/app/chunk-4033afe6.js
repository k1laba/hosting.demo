/*! Built with http://stenciljs.com */
const{h:t}=window.App,e="access_token",a="00000000-0000-0000-0000-000000000000",n=["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექტ","ოქტ","ნოემ","დეკ"];function s(t,e){var a=(t=new Date(t)).getDate(),n=t.getMonth()+1;return`${a<10?"0"+a:a}${e=e||"-"}${n<10?"0"+n:n}${e}${t.getFullYear()}`}function o(t){return`${r(t=new Date(t))} ${c(t)}`}function r(t){return`${(t=new Date(t)).getDate()}`}function c(t){return t=new Date(t),`${n[t.getMonth()]}`}function i(t){return t.split("/").reverse().join("/")}function u(){let t=new Date;return t.setDate(t.getDate()+1),t}function g(t,e){let n=e?e.name:"",s=e?e.seatsCount:2;const o=e?e.price:0,r=new Date(i(t));return{id:a,seatsCount:s,guestName:"",guestLastName:"",phone:"",email:"",amount:o,roomName:n,checkInTime:r,checkOutTime:function(t){let e=new Date(r);return e.setDate(e.getDate()+1),e}(),status:0,comment:"",checkedIn:!1}}class l{static isLoggedIn(){return!!localStorage.getItem(e)&&1e3*this.getPayload().exp>Date.now()}static login(t){localStorage.setItem(e,t)}static logout(){localStorage.removeItem(e)}static getUser(){return this.getPayload()}static getAccessToken(){return localStorage.getItem(e)}static getPayload(){var t=localStorage.getItem(e).split(".")[1];return t=atob(t),JSON.parse(t)}}const w=()=>window.config;class m{static send(t,e,a){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"viewApp",category:t,action:e,userId:a||""})}}export{a,e as b,o as c,i as d,s as e,u as f,n as g,g as h,c as i,r as j,l as k,w as l,m};
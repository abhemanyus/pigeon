(this.webpackJsonppigeon=this.webpackJsonppigeon||[]).push([[0],{24:function(e,t,n){},27:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(14),i=n.n(a),s=(n(24),n(10)),o=(n(25),n(26),n(27),n(9)),u=(n(36),n(29),n(15)),j=n(13),d=n.n(j),b=n(16),l=n(17),h=(n(32),n(4));var p=function(e){var t=e.auth;return t.currentUser&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return t.signOut()},children:"Sign Out"})})},f=n(18),O=n.n(f),m=n(19);var v=function(e){var t=e.message,n=t.uid,r=t.text,c=t.createdAt,a=n===e.user?"sent":"recieved";return Object(h.jsxs)("div",{className:"message ".concat(a),children:[Object(h.jsx)(m.a,{children:r||"Loading..."}),Object(h.jsx)("footer",{children:O()(c.toDate()).fromNow()})]})};var g=function(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(h.jsx)("div",{className:"Box",children:Object(h.jsxs)("form",{onSubmit:function(t){e.sendMessage(t,c),a(""),e.scroller()},autoComplete:"off",children:[Object(h.jsx)("label",{htmlFor:"message",children:"Write message"}),Object(h.jsx)("input",{type:"text",name:"message",id:"message",value:c,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:Object(h.jsx)("i",{className:"material-icons",children:"add"})})]})})};var x=function(e){var t=e.firestore.collection("messages"),n=t.orderBy("createdAt").limit(25),c=Object(l.a)(n,{idField:"id"}),a=Object(s.a)(c,1)[0],i=function(){var n=Object(b.a)(d.a.mark((function n(r,c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.next=3,t.add({createdAt:new Date,text:c,uid:e.auth.currentUser.uid});case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),o=Object(r.useRef)();return Object(h.jsxs)("div",{className:"Room",children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)("h1",{children:"Chat Room"}),Object(h.jsx)(p,{auth:e.auth})]}),Object(h.jsx)("section",{children:a&&a.map((function(t){return Object(h.jsx)(v,{message:t,user:e.auth.currentUser.uid},t.id)}))}),Object(h.jsx)(g,{sendMessage:i,scroller:function(){return o.current.scrollIntoView({behavior:"smooth"})}}),Object(h.jsx)("div",{ref:o})]})};var I=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){var t=new e.provider;e.auth.signInWithPopup(t)},children:"Sign in with Google"})})};o.a.initializeApp({apiKey:"AIzaSyAqNIXThnlV_JE4GmuZItVHoeHSQt1R8Bk",authDomain:"pigeon-850cb.firebaseapp.com",projectId:"pigeon-850cb",storageBucket:"pigeon-850cb.appspot.com",messagingSenderId:"94819366470",appId:"1:94819366470:web:4715a99ba23047446a3c47",measurementId:"G-SLGV1J17V3"});var w=o.a.auth();w.setPersistence(o.a.auth.Auth.Persistence.LOCAL);var A=o.a.firestore();A.enablePersistence();var S=function(){var e=Object(u.a)(w),t=Object(s.a)(e,1)[0];return Object(h.jsx)("div",{className:"App",children:t?Object(h.jsx)(x,{auth:w,firestore:A,firebase:o.a}):Object(h.jsx)(I,{provider:o.a.auth.GoogleAuthProvider,auth:w})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),C()}},[[35,1,2]]]);
//# sourceMappingURL=main.35b82f9c.chunk.js.map
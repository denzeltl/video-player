(this["webpackJsonpvideo-player"]=this["webpackJsonpvideo-player"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var o=a(0),c=a.n(o),n=a(2),r=a.n(n),s=(a(9),a(3));var i=function(e){return c.a.createElement("div",null,c.a.createElement("video",{controls:!0,autostart:!0,autoPlay:!0,muted:!0,src:e.src}))};var l=function(e){return c.a.createElement("form",{onClick:function(t){var a=t.target.value;e.chooseVideo(a)}},c.a.createElement("input",{type:"radio",name:"src",value:"fast"})," fast",c.a.createElement("input",{type:"radio",name:"src",value:"slow"})," slow",c.a.createElement("input",{type:"radio",name:"src",value:"cute"})," cute",c.a.createElement("input",{type:"radio",name:"src",value:"eek"})," eek")},u={fast:"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",slow:"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",cute:"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",eek:"https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"};var m=function(){var e=Object(o.useState)({src:u.fast}),t=Object(s.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",null,c.a.createElement("h1",null,"Video Player"),c.a.createElement(l,{chooseVideo:function(e){n({src:u[e]})}}),c.a.createElement(i,{src:a.src}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.5daf0040.chunk.js.map
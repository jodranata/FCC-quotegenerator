(this.webpackJsonp7_quotegenerator=this.webpackJsonp7_quotegenerator||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(16),r=a.n(c),l=a(3),s=a(17),u=a.n(s),i=a(18),m=a(19);a(45);var d=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),d=s[0],b=s[1],p=Object(n.useState)(""),h=Object(l.a)(p,2),E=h[0],f=h[1],v=function(){b(!0),u.a.get("https://api.quotable.io/random").then((function(e){c(e.data),b(!1)})).catch((function(e){return c(e)}));for(var e=[];e.length<3;){var t=Math.floor(255*Math.random());e.push(t)}f("rgb(".concat(e[0],", ").concat(e[1],", ").concat(e[2],")"))};document.body.style.backgroundColor=E,document.body.style.color=E;var g=encodeURIComponent('"'.concat(a.content,'". ').concat(a.author)),q="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(g);return Object(n.useEffect)((function(){v()}),[]),o.a.createElement("div",{className:"app-container"},o.a.createElement("div",{className:"quote-box",id:"quote-box"},o.a.createElement("div",{className:"quote-text"},o.a.createElement("div",{className:"curtain",style:{backgroundColor:d?"rgb(27, 27, 27)":"transparent",transition:"background 0.3s ease-in"}}),o.a.createElement("p",{className:"text",id:"text"},a.content),o.a.createElement("p",{className:"author",id:"author"},a.author)),o.a.createElement("div",{className:"button-action"},o.a.createElement("a",{href:q,id:"tweet-quote",style:{color:E}},o.a.createElement(i.a,{icon:m.a})),o.a.createElement("button",{className:"new-quote",id:"new-quote",onClick:v,style:{color:E},type:"button"},"New Quote"))),o.a.createElement("div",{className:"footer"},o.a.createElement("p",null,"Created By Jodi Pranata"),o.a.createElement("p",null," Jan 2020 ")))};r.a.render(o.a.createElement(d,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0c9c440f.chunk.js.map
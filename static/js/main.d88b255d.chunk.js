(this["webpackJsonpignat-hw"]=this["webpackJsonpignat-hw"]||[]).push([[0],[,,,function(e,t,n){e.exports={message:"Message_message__2J62Z",dialog:"Message_dialog__1fOgi",avatar:"Message_avatar__3kNfX",time:"Message_time__3bvsb",name:"Message_name__qYIqi",mess:"Message_mess__P1SJJ"}},,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3pyik",errorInput:"SuperInputText_errorInput__1PBro",error:"SuperInputText_error__25qrT"}},function(e,t,n){e.exports={blue:"HW4_blue__2Rqzq",column:"HW4_column__2Numc",testSpanError:"HW4_testSpanError__M2SmR"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__THRq5",error:"Greeting_error__2oy_X"}},function(e,t,n){e.exports={default:"SuperButton_default__3-PWO",red:"SuperButton_red__1X3c2"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2VZ30",spanClassName:"SuperCheckbox_spanClassName__1cFm1"}},,function(e,t,n){e.exports={App:"App_App__31mgm"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(14),s=n.n(c),o=(n(21),n(15)),i=n.n(o),l=n(3),j=n.n(l),u=n(0);var d=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:j.a.message,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:j.a.avatar,src:e.avatar,alt:"avatar"})}),Object(u.jsxs)("div",{className:j.a.dialog,children:[Object(u.jsx)("span",{className:j.a.name,children:e.name}),Object(u.jsx)("span",{className:j.a.mess,children:e.message}),Object(u.jsx)("span",{className:j.a.time,children:e.time})]})]})})},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",m="some text",O="22:00";var x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(d,{avatar:b,name:h,message:m,time:O}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},p=n(2);var f=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:e.affair.name}),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]},e.affair._id)})})};var _=function(e){var t=e.data.map((function(t){return Object(u.jsx)(f,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var v=function(){var e=Object(a.useState)(g),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(p.a)(c,2),o=s[0],i=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(_,{data:l,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},C=n(16),k=n(11),N=n.n(k),S=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onKeyPressHandler,o=""===t.trim()?N.a.error:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onKeyPress:function(e){return s(e)},onChange:function(e){return n(e)},className:o}),Object(u.jsx)("span",{children:r}),Object(u.jsx)("button",{className:N.a.someClass,onClick:a,children:"add"}),Object(u.jsx)("span",{children:c})]})},y=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(p.a)(r,2),s=c[0],o=c[1],i=Object(a.useState)(""),l=Object(p.a)(i,2),j=l[0],d=l[1],b=function(){""!==s.trim()?(alert("Hello ".concat(s," !")),n(s),o("")):(d("Name is required!!!"),o(""))},h=t.length;return Object(u.jsx)(S,{name:s,setNameCallback:function(e){o(e.currentTarget.value),d("")},addUser:b,error:j,totalUsers:h,onKeyPressHandler:function(e){13===e.charCode&&(b(),o(""))}})},w=n(25);var T=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(y,{users:n,addUserCallback:function(e){r([].concat(Object(C.a)(n),[{_id:Object(w.a)(),name:e}]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},A=n(4),I=n(5),P=n(8),E=n.n(P),H=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(E.a.error," ").concat(o||""),j="".concat(c?E.a.errorInput:E.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(A.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},i)),c&&Object(u.jsx)("span",{className:l,children:c})]})},M=n(9),q=n.n(M),F=n(12),W=n.n(F),B=function(e){var t=e.red,n=e.className,a=Object(I.a)(e,["red","className"]),r="".concat(t?W.a.red:W.a.default," ").concat(n);return Object(u.jsx)("button",Object(A.a)({className:r},a))},J=n(13),K=n.n(J),U=function(e){e.type,e.onChange;var t=e.onChangeChecked,n=e.className,a=(e.spanClassName,e.children),r=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(K.a.checkbox," ").concat(n||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(A.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:c},r)),a&&Object(u.jsx)("span",{className:K.a.spanClassName,children:a})]})};var X=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(a.useState)(!1),i=Object(p.a)(o,2),l=i[0],j=i[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:q.a.column,children:[Object(u.jsx)(H,{value:n,onChangeText:r,onEnter:s,error:c,spanClassName:q.a.testSpanError}),Object(u.jsx)(H,{className:q.a.blue}),Object(u.jsx)(B,{children:"default"}),Object(u.jsx)(B,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(B,{disabled:!0,children:"disabled"}),Object(u.jsx)(U,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(U,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var R=function(){return Object(u.jsxs)("div",{className:i.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(x,{}),Object(u.jsx)(v,{}),Object(u.jsx)(T,{}),Object(u.jsx)(X,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.d88b255d.chunk.js.map
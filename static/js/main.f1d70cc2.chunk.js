(this.webpackJsonptima=this.webpackJsonptima||[]).push([[0],{11:function(e,t,n){e.exports={message:"Message_message__12qpI",dialog:"Message_dialog__1gFGF",avatar:"Message_avatar__3bFmW",time:"Message_time__16dHY",name:"Message_name__FsYnQ",mess:"Message_mess__suJ47"}},19:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__frrQO",errorInput:"SuperInputText_errorInput__3e8Ot",error:"SuperInputText_error__3kAWa"}},20:function(e,t,n){e.exports={blue:"HW4_blue__1Vi3v",column:"HW4_column__1Xp_-",testSpanError:"HW4_testSpanError__14R2i"}},24:function(e,t,n){e.exports={someClass:"Greeting_someClass__3LDwR",error:"Greeting_error__2bHfU"}},25:function(e,t,n){e.exports={default:"SuperButton_default__2rnyS",red:"SuperButton_red__3EGAm"}},26:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1JKcq",spanClassName:"SuperCheckbox_spanClassName__3JgxR"}},27:function(e,t,n){e.exports={dark:"HW12_dark__3geAh","dark-text":"HW12_dark-text__2W-x9",red:"HW12_red__R0OSA","red-text":"HW12_red-text__1rPZw",some:"HW12_some__28s0y","some-text":"HW12_some-text__1Wvza"}},39:function(e,t,n){e.exports={App:"App_App__1DuCE"}},40:function(e,t,n){e.exports={item:"span_item__3BuwW"}},41:function(e,t,n){e.exports={range:"SuperRange_range__3zQn7"}},50:function(e,t,n){},51:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(17),s=n.n(a),i=n(10),o=(n(50),n(39)),j=n.n(o),l=n(12),u=(n(51),n(0));var b=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)(l.b,{to:"/pre-junior",children:" Pre Junior "})," "]}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/junior",children:"Junior "})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/junior-plus",children:"Junior-Plus"})})]})},d=n(2),O=n(11),h=n.n(O);var x=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:h.a.message,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:h.a.avatar,src:e.avatar,alt:"avatar"})}),Object(u.jsxs)("div",{className:h.a.dialog,children:[Object(u.jsx)("span",{className:h.a.name,children:e.name}),Object(u.jsx)("span",{className:h.a.mess,children:e.message}),Object(u.jsx)("span",{className:h.a.time,children:e.time})]})]})})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",v="some text",f="22:00";var g=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(x,{avatar:m,name:p,message:v,time:f}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},_=n(3);var C=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:e.affair.name}),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]},e.affair._id)})})};var k=function(e){var t=e.data.map((function(t){return Object(u.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(c.useState)(y),t=Object(_.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(_.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(k,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},S=n(18),w=n(24),E=n.n(w),A=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s=e.onKeyPressHandler,i=""===t.trim()?E.a.error:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onKeyPress:function(e){return s(e)},onChange:function(e){return n(e)},className:i}),Object(u.jsx)("span",{children:r}),Object(u.jsx)("button",{className:E.a.someClass,onClick:c,children:"add"}),Object(u.jsx)("span",{children:a})]})},H=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(_.a)(r,2),s=a[0],i=a[1],o=Object(c.useState)(""),j=Object(_.a)(o,2),l=j[0],b=j[1],d=function(){""!==s.trim()?(alert("Hello ".concat(s," !")),n(s),i("")):(b("Name is required!!!"),i(""))},O=t.length;return Object(u.jsx)(A,{name:s,setNameCallback:function(e){i(e.currentTarget.value),b("")},addUser:d,error:l,totalUsers:O,onKeyPressHandler:function(e){13===e.charCode&&(d(),i(""))}})},T=n(80);var F=function(){var e=Object(c.useState)([]),t=Object(_.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(H,{users:n,addUserCallback:function(e){r([].concat(Object(S.a)(n),[{_id:Object(T.a)(),name:e}]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},I=n(4),W=n(7),P=n(19),R=n.n(P),J=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],L=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,J),j="".concat(R.a.error," ").concat(i||""),l="".concat(a?R.a.errorInput:R.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:l},o)),a&&Object(u.jsx)("span",{className:j,children:a})]})},M=n(20),D=n.n(M),B=n(25),G=n.n(B),U=["red","className"],K=function(e){var t=e.red,n=e.className,c=Object(W.a)(e,U),r="".concat(t?G.a.red:G.a.default," ").concat(n);return Object(u.jsx)("button",Object(I.a)({className:r},c))},q=n(26),z=n.n(q),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],X=function(e){e.type,e.onChange;var t=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),r=Object(W.a)(e,Q),a="".concat(z.a.checkbox," ").concat(n||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:a},r)),c&&Object(u.jsx)("span",{className:z.a.spanClassName,children:c})]})};var Y=function(){var e=Object(c.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(_.a)(i,2),j=o[0],l=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:D.a.column,children:[Object(u.jsx)(L,{value:n,onChangeText:r,onEnter:s,error:a,spanClassName:D.a.testSpanError}),Object(u.jsx)(L,{className:D.a.blue}),Object(u.jsx)(K,{children:"default"}),Object(u.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(K,{disabled:!0,children:"disabled"}),Object(u.jsx)(X,{checked:j,onChangeChecked:l,children:"some text "}),Object(u.jsx)(X,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},Z=n(40),V=n.n(Z),$=["autoFocus","onBlur","onEnter","spanProps"],ee=["children","onDoubleClick","className"],te=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(W.a)(e,$),s=Object(c.useState)(!1),i=Object(_.a)(s,2),o=i[0],j=i[1],l=r||{},b=l.children,d=l.onDoubleClick,O=l.className,h=Object(W.a)(l,ee),x="".concat(V.a.item," ").concat(O);return Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)(L,Object(I.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!0),n&&n()}},a)):Object(u.jsx)("span",Object(I.a)(Object(I.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:b||a.value}))})};function ne(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}ne("test",{x:"A",y:1});!function(e,t){var n=t,c=localStorage.getItem(e);null!==c&&(n=JSON.parse(c))}("test",{x:"",y:0});var ce=function(){var e=Object(c.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsx)("div",{children:Object(u.jsx)(te,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(u.jsx)(K,{onClick:function(){ne("editable-span-value",n)},children:"save"}),Object(u.jsx)(K,{onClick:function(){var e="",t=localStorage.getItem("editable-span-value");null!==t&&(e=JSON.parse(t)),r(e)},children:"restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var re=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{}),Object(u.jsx)(N,{}),Object(u.jsx)(F,{}),Object(u.jsx)(Y,{}),Object(u.jsx)(ce,{})]})};var ae=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},se=["options","onChange","onChangeOption"],ie=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),c=Object(W.a)(e,se),r=t?t.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)})):[];return Object(u.jsx)("select",Object(I.a)(Object(I.a)({onChange:function(e){n&&n(e.currentTarget.value)},value:c.value,name:"select"},c),{},{children:r}))},oe=["type","name","options","value","onChange","onChangeOption"],je=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=(e.onChange,e.onChangeOption),a=Object(W.a)(e,oe),s=function(e){r&&r(e.target.value)},i=n?n.map((function(e,n){return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(I.a)({type:"radio",name:t,checked:e===c,value:e,onChange:s},a)),e]},t+"-"+n)})):[];return Object(u.jsx)(u.Fragment,{children:i})},le=["x","y","z"];var ue=function(){var e=Object(c.useState)(le[1]),t=Object(_.a)(e,2),n=t[0],r=t[1];return window.state=n,Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 7",Object(u.jsx)("div",{children:Object(u.jsx)(ie,{options:le,value:n,onChangeOption:r})}),Object(u.jsx)("div",{children:Object(u.jsx)(je,{name:"radio",options:le,value:n,onChangeOption:r})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},be=function(e,t){switch(t.type){case"sort":var n=Object(S.a)(e),c=function(e,t){return e.name>t.name?1:-1};return"up"===t.payload?n.sort(c):"down"===t.payload?n.sort(c).reverse():e;case"check":return e.filter((function(e){return e.age>18}));default:return e}},de=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Oe=function(){var e=Object(c.useState)(de),t=Object(_.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(u.jsxs)("div",{children:[e.name,", ",e.age]},e._id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 8",a,Object(u.jsxs)("div",{style:{marginTop:"10px"},children:[Object(u.jsx)(K,{onClick:function(){return r(be(de,{type:"sort",payload:"up"}))},style:{marginRight:"5px"},children:"sort up"}),Object(u.jsx)(K,{onClick:function(){return r(be(de,{type:"sort",payload:"down"}))},style:{marginRight:"5px"},children:" sort down "}),Object(u.jsx)(K,{onClick:function(){return r(be(de,{type:"check",payload:18}))},children:"check 18"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var he=function(){var e=Object(c.useState)(0),t=Object(_.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(new Date),s=Object(_.a)(a,2),i=s[0],o=s[1],j=Object(c.useState)(!1),l=Object(_.a)(j,2),b=l[0],d=l[1],O=i.toLocaleTimeString(),h=i.toLocaleDateString();return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:O}),b&&Object(u.jsx)("div",{children:h}),Object(u.jsx)(K,{onClick:function(){var e=window.setInterval((function(){o(new Date)}),1e3);r(e)},children:"start"}),Object(u.jsx)(K,{onClick:function(){clearInterval(n)},children:"stop"})]})};var xe=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 9",Object(u.jsx)(he,{}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},me={isLoading:!1},pe=function(e){return{type:"LOADING",payload:{isloading:e}}};var ve=function(){var e=Object(i.c)((function(e){return e.loading})),t=Object(i.b)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 10",e.isLoading?Object(u.jsx)("div",{children:"\u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441ss \u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0443, \u043d\u0435 \u043a\u0440\u0443\u0442\u0438\u0442\u044c\u0441\u044f \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f...."}):Object(u.jsx)("div",{children:Object(u.jsx)(K,{onClick:function(){t(pe(!0)),setTimeout((function(){t(pe(!1))}),1e3),console.log("loading...")},children:"set loading..."})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},fe=n(41),ge=n.n(fe),_e=["type","onChange","onChangeRange","className"],Ce=function(e){e.type;var t=e.onChange,n=e.onChangeRange,c=e.className,r=Object(W.a)(e,_e),a="".concat(ge.a.range," ").concat(c||"");return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",Object(I.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:a},r))})},ke=function(e){e.onChangeRange,e.value;return Object(u.jsx)(u.Fragment,{children:"DoubleRange"})};var ye=function(){var e=Object(c.useState)(0),t=Object(_.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(100),s=Object(_.a)(a,2),i=s[0];return s[1],Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 11",Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[" ",n]}),Object(u.jsx)(Ce,{value:n,multiple:!0,onChangeRange:function(e){return r(e)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:n}),Object(u.jsx)(ke,{value:[n,i]}),Object(u.jsx)("span",{children:i})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},Ne=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(ue,{}),Object(u.jsx)(Oe,{}),Object(u.jsx)(xe,{}),Object(u.jsx)(ve,{}),Object(u.jsx)(ye,{})]})},Se={theme:"some"},we=n(27),Ee=n.n(we),Ae=["dark","red","some"];var He=function(){var e=Object(i.c)((function(e){return e.theme})).theme,t=Object(i.b)();return Object(u.jsxs)("div",{className:Ee.a[e],children:[Object(u.jsx)("hr",{}),Object(u.jsx)("span",{className:Ee.a[e+"-text"],children:"homeworks 12"}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{children:Object(u.jsx)(ie,{options:Ae,value:e,onChangeOption:function(e){console.log(e),t(function(e){return{type:"CHANGE_THEME",payload:{theme:e}}}(e))}})})]})},Te=n(42),Fe=n.n(Te).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/auth/test"}),Ie=function(e){return Fe.post("",{success:e})},We=function(){var e=Object(c.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(_.a)(a,2),i=s[0],o=s[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:"homeworks: 13"})}),Object(u.jsx)("button",{onClick:function(){Ie(i).then((function(e){return r(e.data.info)})).catch((function(e){return r(e.message)}))},children:"Submit"}),Object(u.jsx)("input",{type:"checkbox",checked:i,onChange:function(e){o(e.currentTarget.checked)}}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("hr",{})]})},Pe=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(He,{}),Object(u.jsx)("div",{children:Object(u.jsx)(We,{})})]})},Re="/pre-junior",Je="/junior",Le="/junior-plus";var Me=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/",element:Object(u.jsx)(re,{})}),Object(u.jsx)(d.a,{path:Re,element:Object(u.jsx)(re,{})}),Object(u.jsx)(d.a,{path:Je,element:Object(u.jsx)(Ne,{})}),Object(u.jsx)(d.a,{path:Le,element:Object(u.jsx)(Pe,{})}),"// add routes",Object(u.jsx)(d.a,{path:"*",element:Object(u.jsx)(ae,{})})]})})};var De=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(Me,{})]})})};var Be=function(){return Object(u.jsxs)("div",{className:j.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(De,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=n(28),Ue=Object(Ge.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;return"LOADING"===t.type?t.payload.isloading?Object(I.a)(Object(I.a)({},e),{},{isLoading:!0}):Object(I.a)(Object(I.a)({},e),{},{isLoading:!1}):e},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;return"CHANGE_THEME"===t.type?Object(I.a)(Object(I.a)({},e),{},{theme:t.payload.theme}):e}}),Ke=Object(Ge.b)(Ue),qe=Ke;window.store=Ke,s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{store:qe,children:Object(u.jsx)(Be,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.f1d70cc2.chunk.js.map
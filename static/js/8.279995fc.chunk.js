(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{1071:function(e,a,t){},1078:function(e,a,t){"use strict";var n=t(83),r=t(0),l=t.n(r),i=(t(1071),t(303)),c=t.n(i),m=t(76),s=t.n(m),o=t(1047),u=t(1218),d=t(1040),E=t(1082),g=t(1083),f=t(102),y=t(126),h=t(1228),p=(t(1090),o.a.TextArea),b=u.a.RangePicker;function v(e){return e&&e<c()().endOf("day")}a.a=function(){var e=Object(r.useState)(""),a=Object(n.a)(e,2),t=a[0],i=a[1],c=Object(r.useState)(""),m=Object(n.a)(c,2),u=m[0],_=m[1],O=Object(r.useState)(""),x=Object(n.a)(O,2),j=x[0],S=x[1],I=Object(r.useState)(""),R=Object(n.a)(I,2),C=R[0],k=R[1],w=Object(r.useState)(""),N=Object(n.a)(w,2),z=N[0],M=N[1],F=Object(r.useState)(null),A=Object(n.a)(F,2),P=A[0],T=A[1],V=Object(r.useState)(null),D=Object(n.a)(V,2),H=D[0],B=D[1],q=d.a.useForm(),L=Object(n.a)(q,1)[0];return l.a.createElement(d.a,{onFinish:function(){if(!t||!u||!j||!C||!P||!H||!z)return alert("Fill all Fields");var e={name:t,email:u,phone:j,destination:C,message:z,date:P,hikers:H};s.a.post("/api/message/uploadMessage",e).then((function(e){e.data.success?alert("message Sent"):alert("failed to Send message")})),L.resetFields()},form:L},l.a.createElement(E.a,{gutter:16},l.a.createElement(g.a,{xs:24,lg:12},l.a.createElement(d.a.Item,{name:"name",label:l.a.createElement("span",null,"Name\xa0",l.a.createElement(f.a,{title:"What do you want us to call you?"},l.a.createElement(h.a,null))),rules:[{required:!0,message:"Please input your name!",whitespace:!0}]},l.a.createElement(o.a,{onChange:function(e){i(e.currentTarget.value)},value:t}))),l.a.createElement(g.a,{xs:24,lg:12},l.a.createElement(d.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},l.a.createElement(o.a,{onChange:function(e){_(e.currentTarget.value)},value:u}))),l.a.createElement(g.a,{xs:24,lg:12}," ",l.a.createElement(d.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"},{min:11,message:"Must be minimum of 11 numbers."},{max:11,message:"Must be maximum of 11 numbers."}]},l.a.createElement(o.a,{onChange:function(e){S(e.currentTarget.value)},value:j}))),l.a.createElement(g.a,{xs:24,lg:12},l.a.createElement(d.a.Item,{name:"destination",label:l.a.createElement("span",null,"Destination\xa0",l.a.createElement(f.a,{title:"which mountain you would like to climb?"},l.a.createElement(h.a,null))),rules:[{required:!0,message:"Please input your Destination!"}]},l.a.createElement(o.a,{onChange:function(e){k(e.currentTarget.value)},value:C}))),l.a.createElement(g.a,{xs:24,lg:12},l.a.createElement(d.a.Item,{name:"hiker",label:l.a.createElement("span",null,"Number of Hikers\xa0",l.a.createElement(f.a,{title:"how many are you in the group?"},l.a.createElement(h.a,null))),rules:[{required:!0,message:"Please state how many you are?",whitespace:!0}]},l.a.createElement(o.a,{type:"number",min:1,onChange:function(e){B(e.currentTarget.value)},value:H}))),l.a.createElement(g.a,{xs:24,lg:12},l.a.createElement(d.a.Item,{name:"date",label:l.a.createElement("span",null,"Date\xa0"),rules:[{required:!0,message:"Please input the Date!"}]},l.a.createElement(b,{bordered:!0,allowClear:!0,onSelect:P,onChange:T,disabledDate:v}))),l.a.createElement(g.a,{span:24}," ",l.a.createElement(d.a.Item,{name:"message",label:"Message",rules:[{required:!0,message:"Please input your message!"},{min:20,message:"message must be minimum of 20 characters."},{max:200,message:"message must be maximum of 200 characters."}]},l.a.createElement(p,{onChange:function(e){M(e.currentTarget.value)},value:z}))),l.a.createElement(y.a,{type:"primary",htmlType:"submit",size:"large",style:{margin:"auto",width:"200px"}},"Submit")))}},1084:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(1213);a.a=function(e){return r.a.createElement("div",null,r.a.createElement(l.a,e,e.images.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("img",{style:{width:"100%",minHeight:"250px",minWidth:"300px"},src:"http://localhost:5000/".concat(e),alt:"productImage"}))}))))}},1085:function(e,a,t){"use strict";var n=t(1072),r=t(83),l=t(0),i=t.n(l),c=t(1219),m=t(1049),s=c.a.Panel;a.a=function(e){var a=Object(l.useState)([]),t=Object(r.a)(a,2),o=t[0],u=t[1];return i.a.createElement("div",null,i.a.createElement(c.a,{defaultActiveKey:["0"]},i.a.createElement(s,{header:"".concat(e.name),key:"1"},e.list&&e.list.map((function(a,t){return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement("div",{className:"filter"}," ",i.a.createElement(m.a,{onChange:function(){return function(a){var t=o.indexOf(a),r=Object(n.a)(o);-1===t?r.push(a):r.splice(t,1),u(r),e.handleFilters(r)}(a._id)},type:"checkbox",checked:-1!==o.indexOf(a._id)}),"\xa0\xa0",i.a.createElement("span",null,a.name)))})))))}},1086:function(e,a,t){"use strict";var n=t(83),r=t(0),l=t.n(r),i=t(1219),c=t(1220),m=i.a.Panel;a.a=function(e){var a=Object(r.useState)("0"),t=Object(n.a)(a,2),s=t[0],o=t[1];return l.a.createElement("div",null,l.a.createElement(i.a,{defaultActiveKey:["0"]},l.a.createElement(m,{header:"".concat(e.name),key:"1"},l.a.createElement(c.a.Group,{onChange:function(a){o(a.target.value),e.handleFilters(a.target.value)},value:s},e.list&&e.list.map((function(e){return l.a.createElement("div",{className:"filter",key:e._id}," ",l.a.createElement(c.a,{key:e._id,value:"".concat(e._id)},e.name))}))))))}},1087:function(e,a,t){"use strict";var n=t(83),r=t(0),l=t.n(r),i=t(1047).a.Search;a.a=function(e){var a=Object(r.useState)(""),t=Object(n.a)(a,2),c=t[0],m=t[1];return l.a.createElement("div",null,l.a.createElement(i,{size:"large",value:c,onChange:function(a){m(a.currentTarget.value),e.refreshFunction(a.currentTarget.value)},allowClear:!0,placeholder:"Search By Typing...",enterButton:"Search"}))}},1088:function(e,a,t){"use strict";t.d(a,"d",(function(){return i})),t.d(a,"e",(function(){return n})),t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return l})),t.d(a,"c",(function(){return c})),t.d(a,"f",(function(){return m}));var n=[{_id:1,name:"Region I \u2013 Ilocos Region"},{_id:2,name:"Region II \u2013 Cagayan Valley"},{_id:3,name:"Region III \u2013 Central Luzon"},{_id:4,name:"Region IV\u2011A \u2013 CALABARZON"},{_id:5,name:"MIMAROPA Region"},{_id:6,name:"Region V \u2013 Bicol Region"},{_id:7,name:"Region VI \u2013 Western Visayas"},{_id:8,name:"Region VII \u2013 Central Visayas"},{_id:9,name:"Region VIII \u2013 Eastern Visayas"},{_id:10,name:"Region IX \u2013 Zamboanga Peninsula"},{_id:11,name:"Region X \u2013 Northern Mindanao"},{_id:12,name:"Region XI \u2013 Davao Region"},{_id:13,name:"Region XII \u2013 SOCCSKSARGEN"},{_id:14,name:"Region XIII \u2013 Caraga"},{_id:15,name:"NCR \u2013 National Capital Region"},{_id:16,name:"CAR \u2013 Cordillera Administrative Region"},{_id:17,name:"ARMM \u2013 Autonomous Region in Muslim Mindanao"}],r=[{_id:1,name:"very easy (1/10)"},{_id:2,name:"very easy (2/10)"},{_id:3,name:"easy (3/10)"},{_id:4,name:"easy (4/10)"},{_id:5,name:"moderate (5/10)"},{_id:6,name:"moderate (6/10)"},{_id:7,name:"challenging (7/10)"},{_id:8,name:"challenging (8/10)"},{_id:9,name:"extreme  (9/10)"},{_id:10,name:"extreme  (10/10)"}],l=[{_id:1,name:"1 day"},{_id:2,name:"2 days"},{_id:3,name:"3 days"},{_id:4,name:"4 days"},{_id:5,name:"5 days"},{_id:6,name:"6 days"},{_id:7,name:"7 days"},{_id:8,name:"8 days"},{_id:9,name:"9 days"},{_id:10,name:"10 days"}],i=[{_id:0,name:"Any",array:[]},{_id:1,name:"\u20b10 to \u20b11000",array:[0,1e3]},{_id:2,name:"\u20b11000 to \u20b12500",array:[1e3,2500]},{_id:3,name:"\u20b12500 to 5000",array:[2500,5e3]},{_id:4,name:"\u20b15000 to \u20b110000",array:[5e3,1e4]},{_id:5,name:"More than \u20b110000",array:[1e4,15e5]}],c=[{_id:0,name:"Any",array:[]},{_id:1,name:"0m to 500m",array:[0,500]},{_id:2,name:"500m to 1000m",array:[500,1e3]},{_id:3,name:"1000m to 1500m",array:[1e3,1500]},{_id:4,name:"2000m to 2500m",array:[2e3,2500]},{_id:5,name:"2500m to 3000m",array:[2500,3e3]},{_id:6,name:"3000m and above",array:[3e3,15e5]}],m=[{_id:0,name:"Any",array:[]},{_id:1,name:"0m to 500m",array:[0,500]},{_id:2,name:"500m to 1000m",array:[500,1e3]},{_id:3,name:"1000m to 1500m",array:[1e3,1500]},{_id:4,name:"2000m to 2500m",array:[2e3,2500]},{_id:5,name:"2500m to 3000m",array:[2500,3e3]},{_id:6,name:"3000m and above",array:[3e3,15e5]}]},1089:function(e,a,t){"use strict";var n=t(83),r=t(0),l=t.n(r),i=t(126),c=t(1044),m=t(1078);a.a=function(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),t=a[0],s=a[1];return l.a.createElement("div",null,l.a.createElement(i.a,{size:"large",shape:"round",type:"primary",style:{marginBottom:"2rem"},onClick:function(){return s(!0)}},"Request Private Hike")," ",l.a.createElement(c.a,{className:"PrivateTripsModal",title:"Come and contact us!",centered:!0,visible:t,onOk:function(){return s(!1)},onCancel:function(){return s(!1)}},l.a.createElement(m.a,null)))}},1138:function(e,a,t){},1223:function(e,a,t){"use strict";t.r(a);var n=t(304),r=t(73),l=t(1072),i=t(83),c=t(0),m=t.n(c),s=t(76),o=t.n(s),u=t(1227),d=t(1083),E=t(1082),g=t(126),f=t(1041),y=t(1084),h=t(1085),p=t(1086),b=t(1087),v=t(1088),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8s0 .1.1.1a36.18 36.18 0 015.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8 0 0 0 .1-.1.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7zM620 539v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8v.1a36.18 36.18 0 015.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8v.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7z"}}]},name:"control",theme:"outlined"},O=t(27),x=function(e,a){return c.createElement(O.a,Object.assign({},e,{ref:a,icon:_}))};x.displayName="ControlOutlined";var j=c.forwardRef(x),S=(t(1138),t(78)),I=(t(134),t(1089)),R=t(49);u.a.Meta;a.default=function e(){Object(S.c)((function(e){return e.user}));var a,t=Object(c.useState)([]),s=Object(i.a)(t,2),u=s[0],_=s[1],O=Object(c.useState)(0),x=Object(i.a)(O,2),C=x[0],k=x[1],w=Object(c.useState)(6),N=Object(i.a)(w,2),z=N[0],M=(N[1],Object(c.useState)()),F=Object(i.a)(M,2),A=F[0],P=F[1],T=Object(c.useState)(""),V=Object(i.a)(T,2),D=V[0],H=V[1],B=Object(c.useState)({regions:[],difficulty:[],duration:[],price:[],elevation:[],totalelevation:[]}),q=Object(i.a)(B,2),L=q[0],X=q[1],W=(Object(S.b)(),Object(c.useState)(!1)),K=Object(i.a)(W,2),G=K[0],Y=K[1];Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.innerHeight+window.scrollY>=document.body.scrollHeight?Y(!0):Y(!1)})),function(){window.removeEventListener("scroll",e,!0)}}),[]),Object(c.useEffect)((function(){J({skip:C,limit:z})}),[]);var J=function(e){o.a.post("/api/product/getProducts",e).then((function(a){a.data.success?(e.loadMore?_([].concat(Object(l.a)(u),Object(l.a)(a.data.products))):_(a.data.products),P(a.data.postSize)):alert("Failed to fectch product datas")}))},Z=u.map((function(e,a){e._id;function t(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return m.a.createElement(d.a,{xs:24,key:a},m.a.createElement(E.a,{style:{marginBottom:"1rem",border:"1px solid #ddd",boxShadow:"0 0 10px rgba(0,0,0,0.4)"}},m.a.createElement(d.a,{xs:24,sm:0,style:{padding:"0 1rem"}},m.a.createElement("h2",{className:"xs_title"},e.title)),m.a.createElement(d.a,{xs:24,sm:12,md:8},m.a.createElement(y.a,{draggable:!0,autoplay:!0,autoplaySpeed:5e3,speed:1e3,images:e.images})),m.a.createElement(d.a,{xs:0,sm:12,md:16,style:{padding:"1rem"}},m.a.createElement(E.a,null,m.a.createElement(d.a,{xs:24,md:12}," ",m.a.createElement("h2",null,e.title),m.a.createElement("b",null,e.location),m.a.createElement("br",null),m.a.createElement(d.a,{xs:0,md:24},m.a.createElement("br",null),m.a.createElement("h4",null,"Duration: ",e.duration," day(s)"),m.a.createElement("h4",null,"Difficulty: ",e.difficulty,"/10"),m.a.createElement("h4",null,"Elevation: ",t("".concat(e.elevation))," meters"),m.a.createElement("h4",null,"Climbing Height: ",t("".concat(e.totalelevation))," ","meters"))),m.a.createElement(d.a,{className:"resultsDetails__right",xs:24,md:12}," ",m.a.createElement("div",null," ",m.a.createElement(d.a,{xs:0,md:24}," ",m.a.createElement(I.a,null))),m.a.createElement("div",{style:{transform:"translateY(20px)"}},m.a.createElement("h3",null,"NOW"," ",m.a.createElement("span",{style:{fontSize:"2rem"}}," ","\u20b1",t("".concat(e.price))," "),"p.p"),m.a.createElement(g.a,{size:"large",type:"default",shape:"round"},m.a.createElement(R.b,{to:"/product/".concat(e._id)},"LEARN MORE")))))),m.a.createElement(d.a,{xs:24,sm:0}," ",m.a.createElement("div",{className:"xs_avail"}," ",m.a.createElement(g.a,{size:"middle",type:"primary"},m.a.createElement(R.b,{to:"/product/".concat(e._id)},m.a.createElement("h3",null,"LEARN MORE"))),m.a.createElement("span",{style:{fontSize:"1.5rem",marginLeft:"auto"}},"\u20b1",e.price)))))})),$=function(e,a){var t=Object(r.a)({},L);if(t[a]=e,"price"===a){var n=function(e){var a=v.d,t=[];for(var n in a)a[n]._id===parseInt(e,10)&&(t=a[n].array);return console.log("array",t),t}(e);t[a]=n}else if("elevation"===a){var l=function(e){var a=v.c,t=[];for(var n in a)a[n]._id===parseInt(e,10)&&(t=a[n].array);return console.log("array",t),t}(e);t[a]=l}else if("totalelevation"===a){var i=function(e){var a=v.f,t=[];for(var n in a)a[n]._id===parseInt(e,10)&&(t=a[n].array);return console.log("array",t),t}(e);t[a]=i}console.log(t),function(e){J({skip:0,limit:z,filters:e}),k(0)}(t),X(t)},Q=function(e){var a={skip:0,limit:z,filters:L,searchTerm:e};k(0),H(e),J(a)},U=m.a.createElement(E.a,{gutter:[16,16]},m.a.createElement(d.a,{xs:24},m.a.createElement(h.a,{name:"Regions",list:v.e,handleFilters:function(e){return $(e,"regions")}})),m.a.createElement(d.a,{xs:24},m.a.createElement(h.a,{name:"Difficulty",list:v.a,handleFilters:function(e){return $(e,"difficulty")}})),m.a.createElement(d.a,{xs:24},m.a.createElement(h.a,{name:"Duration",list:v.b,handleFilters:function(e){return $(e,"duration")}})),m.a.createElement(d.a,{xs:24},m.a.createElement(p.a,{name:"Price",list:v.d,handleFilters:function(e){return $(e,"price")}})),m.a.createElement(d.a,{xs:24},m.a.createElement(p.a,{name:"Elevation",list:v.c,handleFilters:function(e){return $(e,"elevation")}})),m.a.createElement(d.a,{xs:24},m.a.createElement(p.a,{name:"Climbing Height",list:v.f,handleFilters:function(e){return $(e,"totalelevation")}}))),ee=Object(c.useState)(!1),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1];return m.a.createElement("div",null,m.a.createElement("div",{className:"searchshowcase"},m.a.createElement("h1",null,"HIKING DESTINATIONS")),m.a.createElement("section",{className:"spikes"}),m.a.createElement(E.a,{gutter:16,style:{maxWidth:"1200px",margin:"auto",marginBottom:"1rem",minHeight:"100vh"}},m.a.createElement(d.a,{xs:24,lg:0,style:(a={background:"#fff",height:"fit-content",marginBottom:"2rem",borderRadius:"3px",position:"-webkit-sticky"},Object(n.a)(a,"position","sticky"),Object(n.a)(a,"top","0"),Object(n.a)(a,"zIndex","1"),Object(n.a)(a,"padding","0.5rem "),a)},m.a.createElement(E.a,{align:"middle",className:"filterXS"},m.a.createElement(d.a,{xs:24,sm:12,style:{margin:"0.5rem auto "}}," ",m.a.createElement(b.a,{refreshFunction:Q})),m.a.createElement(d.a,{xs:24,sm:12}," ",m.a.createElement(g.a,{size:"large",type:"primary",onClick:function(){ne(!0)},style:{width:"100%",fontSize:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center"}},m.a.createElement(j,null)," Filter"),m.a.createElement(f.a,{title:"Filter your Results",placement:"right",closable:!0,onClose:function(){ne(!1)},visible:te},U)))),m.a.createElement(d.a,{xs:0,md:0,lg:6,style:{height:"fit-content",border:"1px solid #ddd",boxShadow:"0 0 10px rgba(0,0,0,0.4)"}},m.a.createElement("h2",null,"Filter your Results"),m.a.createElement(b.a,{refreshFunction:Q}),m.a.createElement("br",null),U),m.a.createElement(d.a,{md:24,lg:18},0===u.length?m.a.createElement("div",null,m.a.createElement("h2",null,"No post yet...")):m.a.createElement("div",null,Z),m.a.createElement("br",null),m.a.createElement("br",null),A>=z&&m.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},m.a.createElement(g.a,{className:"".concat(G&&"add"),type:"primary",onClick:function(){var e=C+z;J({skip:e,limit:z,loadMore:!0,filters:L,searchTerm:D}),k(e)},style:{position:"fixed",bottom:"300px",visibility:"hidden",transition:"0.3s ease-out",transform:"translateY(20px)",opacity:"0"}},"Load More")))))}}}]);
//# sourceMappingURL=8.279995fc.chunk.js.map
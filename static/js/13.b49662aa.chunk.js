(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{1147:function(e,a,t){},1148:function(e,a,t){},1224:function(e,a,t){"use strict";t.r(a);var l=t(83),n=t(0),r=t.n(n),c=t(1042),u=t(1047),i=t(1040),o=t(126),m=t(1072),s=t(1212),v=t(1229),g=t(76),d=t.n(g);t(1147);var y=function(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),c=t[0],u=t[1];return r.a.createElement("div",{className:"dropzoneContainer"},r.a.createElement(s.a,{onDrop:function(a){var t=new FormData;t.append("file",a[0]),d.a.post("/api/product/uploadImage",t,{header:{"content-type":"multipart/form-data"}}).then((function(a){a.data.success?(u([].concat(Object(m.a)(c),[a.data.image])),e.refreshFunction([].concat(Object(m.a)(c),[a.data.image]))):alert("Failed to save the Image to Server")}))},multiple:!1,maxSize:8e8},(function(e){var a=e.getRootProps,t=e.getInputProps;return r.a.createElement("div",Object.assign({className:"dropzone"},a()),r.a.createElement("input",t()),r.a.createElement(v.a,{style:{fontSize:"3rem"}}),r.a.createElement("h3",null,"Upload Image/s"),r.a.createElement("p",null,"( .jpg and .png",r.a.createElement("br",null)," extensions only)"))})),r.a.createElement("div",{style:{display:"flex",maxWidth:"300px",height:"240px",margin:"auto",overflowX:"scroll"}},c.map((function(a,t){return r.a.createElement("div",{className:"uploadImageContainer",onClick:function(){return function(a){var t=c.indexOf(a),l=Object(m.a)(c);l.splice(t,1),u(l),e.refreshFunction(l)}(a)}},r.a.createElement("img",{className:"uploadImage",src:"http://localhost:5000/".concat(a),alt:"productImg-".concat(t)}),r.a.createElement("h3",{className:"delete"},"Click to Delete"))}))))},p=(t(1148),t(304),t(1094)),b=t(1096),E=t.n(b);t(1097);Object(p.registerPlugin)(E.a);var f=t(1149),k=t.n(f),h=t(1150),O=t.n(h),j=t(1151),I=t.n(j),C=t(1152),R=t.n(C),S=t(1153),F=t.n(S);t(1154),t(1095);Object(p.registerPlugin)(k.a,O.a,E.a,I.a,R.a,F.a);var T=c.a.Title,x=u.a.TextArea,A=[{key:1,value:"Region I \u2013 Ilocos Region"},{key:2,value:"Region II \u2013 Cagayan Valley"},{key:3,value:"Region III \u2013 Central Luzon"},{key:4,value:"Region IV\u2011A \u2013 CALABARZON"},{key:5,value:"MIMAROPA Region"},{key:6,value:"Region V \u2013 Bicol Region"},{key:7,value:"Region VI \u2013 Western Visayas"},{key:8,value:"Region VII \u2013 Central Visayas"},{key:9,value:"Region VIII \u2013 Eastern Visayas"},{key:10,value:"Region IX \u2013 Zamboanga Peninsula"},{key:11,value:"Region X \u2013 Northern Mindanao"},{key:12,value:"Region XI \u2013 Davao Region"},{key:13,value:"Region XII \u2013 SOCCSKSARGEN"},{key:14,value:"Region XIII \u2013 Caraga"},{key:15,value:"NCR \u2013 National Capital Region"},{key:16,value:"CAR \u2013 Cordillera Administra..."},{key:17,value:"ARMM \u2013 Autonomous Region in..."}],P=[{key:1,value:"very easy (1/10)"},{key:2,value:"very easy (2/10)"},{key:3,value:"easy (3/10)"},{key:4,value:"easy (4/10)"},{key:5,value:"moderate (5/10)"},{key:6,value:"moderate (6/10)"},{key:7,value:"challenging (7/10)"},{key:8,value:"challenging (8/10)"},{key:9,value:"extreme  (9/10)"},{key:10,value:"extreme  (10/10)"}],D=[{key:1,value:"1 day"},{key:2,value:"2 days"},{key:3,value:"3 days"},{key:4,value:"4 days"},{key:5,value:"5 days"},{key:6,value:"6 days"},{key:7,value:"7 days"},{key:8,value:"8 days"},{key:9,value:"9 days"},{key:10,value:"10 days"}];a.default=function(e){var a=Object(n.useState)(""),t=Object(l.a)(a,2),c=t[0],m=t[1],s=Object(n.useState)(""),v=Object(l.a)(s,2),g=v[0],b=v[1],E=Object(n.useState)(""),f=Object(l.a)(E,2),k=f[0],h=f[1],O=Object(n.useState)(""),j=Object(l.a)(O,2),I=j[0],C=j[1],R=Object(n.useState)(""),S=Object(l.a)(R,2),F=S[0],N=S[1],V=Object(n.useState)(""),w=Object(l.a)(V,2),M=w[0],X=w[1],z=Object(n.useState)(0),B=Object(l.a)(z,2),L=B[0],U=B[1],W=Object(n.useState)(0),G=Object(l.a)(W,2),J=G[0],Z=G[1],K=Object(n.useState)(0),_=Object(l.a)(K,2),q=_[0],H=_[1],Q=Object(n.useState)(1),Y=Object(l.a)(Q,2),$=Y[0],ee=Y[1],ae=Object(n.useState)(1),te=Object(l.a)(ae,2),le=te[0],ne=te[1],re=Object(n.useState)(1),ce=Object(l.a)(re,2),ue=ce[0],ie=ce[1],oe=Object(n.useState)([]),me=Object(l.a)(oe,2),se=me[0],ve=me[1],ge=Object(n.useState)([]),de=Object(l.a)(ge,2),ye=de[0],pe=de[1];console.log(ye);var be=function(a){if(a.preventDefault(),!c||!g||!k||!I||!F||!M||!L||!J||!q||!$||!le||!ue||!se)return alert("Fill all Fields");var t={writer:e.user.userData._id,title:c,description:k,details:I,tobring:F,itinerary:M,price:L,elevation:J,totalelevation:q,images:se,regions:$,difficulty:le,duration:ue,location:g,img:ye};d.a.post("/api/product/uploadProduct",t).then((function(a){a.data.success?(alert("Product Updloaded"),e.history.push("/")):alert("failed to  upload product")}))};return r.a.createElement("div",{className:"UploadProductPage",style:{maxWidth:"700px",margin:"100px auto",background:"#fff",padding:"1rem"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(T,{level:2}),r.a.createElement("h2",null,"Upload Travel Product")),r.a.createElement(i.a,{onSubmit:be,style:{textAlign:"center"}},r.a.createElement(y,{refreshFunction:function(e){console.log(e),ve(e)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement(u.a,{id:"title",onChange:function(e){m(e.currentTarget.value)},value:c}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.FilePond,{type:"file",files:ye,onupdatefiles:pe,allowMultiple:!0,maxFiles:3,dropOnPage:!0,dropValidation:!0,acceptedFileTypes:"image/jpeg, image/png",name:"img",labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"location"},"Location"),r.a.createElement(u.a,{id:"location",onChange:function(e){b(e.currentTarget.value)},value:g}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"price"},"Package Rate (\u20b1)"),r.a.createElement(u.a,{id:"price",onChange:function(e){U(e.currentTarget.value)},value:L,type:"number"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"elevation"},"Elevation (MASL)"),r.a.createElement(u.a,{id:"elevation",onChange:function(e){Z(e.currentTarget.value)},value:J,type:"number"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"totalElevation"},"Total Elevation Gain (meters)"),r.a.createElement(u.a,{id:"totalElevation",onChange:function(e){H(e.currentTarget.value)},value:q,type:"number"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement(x,{id:"description",onChange:function(e){h(e.currentTarget.value)},value:k}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"details"},"Important Details"),r.a.createElement(x,{id:"details",onChange:function(e){C(e.currentTarget.value)},value:I}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"itinerary"},"Detailed Itinerary"),r.a.createElement(x,{id:"itinerary",onChange:function(e){X(e.currentTarget.value)},value:M}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"tobring"},"Things to Bring"),r.a.createElement(x,{id:"tobring",onChange:function(e){N(e.currentTarget.value)},value:F}),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},r.a.createElement("select",{onChange:function(e){ee(e.currentTarget.value)}},A.map((function(e){return r.a.createElement("option",{key:e.key,value:e.key},e.value)}))),r.a.createElement("select",{onChange:function(e){ne(e.currentTarget.value)}},P.map((function(e){return r.a.createElement("option",{key:e.key,value:e.key},e.value)}))),r.a.createElement("select",{onChange:function(e){ie(e.currentTarget.value)}},D.map((function(e){return r.a.createElement("option",{key:e.key,value:e.key},e.value)})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.a,{type:"primary",onClick:be},"Submit")))}}}]);
//# sourceMappingURL=13.b49662aa.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[868],{7868:function(n,e,o){o.r(e),o.d(e,{default:function(){return S}});var t,r,i,a,s,f,d,l,p,c,u,x,b,h=o(9434),m=o(8064),g=function(n){return n.phonebook.contacts.items},Z=function(n){return n.phonebook.filter},v=function(n){return n.phonebook.contacts.isLoading},y=o(168),j=o(6444),k=j.ZP.div(t||(t=(0,y.Z)(["\n    width: 770px;\n    background-color: #f49d08;\n    margin: 0 auto;\n    padding: 15px;\n"]))),w=j.ZP.span(r||(r=(0,y.Z)(["\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    font-weight: 600;\n    display: block;\n    text-align: left;\n    padding-top: 10px;\n"]))),P=j.ZP.input(i||(i=(0,y.Z)(["\n    font-family: 'Roboto', sans-serif;\n    font-size: 22px;\n    width: 300px;\n    height: 35px;\n    border-radius: 10px;\n    outline: none;\n    border: none;\n    box-shadow: 2px 2px 7px 0px #1f1d1d;\n    :focus {\n        border: 2px solid #55bb55;\n    }\n"]))),z=j.ZP.button(a||(a=(0,y.Z)(["\n    font-family: 'Roboto', sans-serif;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    display: block;\n    padding: 15px 20px;\n    margin-top: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 10px;\n    background-color: #1f1d1d;\n    color: #ffffff;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    :hover {\n        background-color: #ff6600;\n        color: #000000;\n        box-shadow: 0px 0px 7px 2px #000000;\n    }\n"]))),C=o(3329),R=function(){var n=(0,h.v9)(g),e=(0,h.I0)();return(0,C.jsx)(k,{children:(0,C.jsxs)("form",{onSubmit:function(o){o.preventDefault();var t=o.target.elements,r=t.name,i=t.number;n.find((function(n){return n.name.toLowerCase()===r.value.toLowerCase()}))?alert("".concat(r.value," is already in contacts")):e((0,m.uK)({name:r.value,number:i.value})),r.value="",i.value=""},children:[(0,C.jsx)(w,{children:"Name"}),(0,C.jsx)(P,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,C.jsx)(w,{children:"Number"}),(0,C.jsx)(P,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,C.jsx)(z,{type:"submit",children:"Add contact"})]})})},A=o(2791),L=j.ZP.ul(s||(s=(0,y.Z)(["\n    list-style-type: '\u260e';\n    color: #ffffff;\n"]))),_=j.ZP.li(f||(f=(0,y.Z)(["\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    padding: 10px;\n"]))),F=j.ZP.button(d||(d=(0,y.Z)(["\n    font-family: 'Roboto', sans-serif;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n    display: inline-block;\n    padding: 10px 15px;\n    margin-left: 15px;\n    border-radius: 10px;\n    background-color: #ff6600;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    position: absolute;\n    right: 25px;\n    :hover {\n        background-color: #fe1101;\n    }\n"]))),I=o(8070),K=function(){var n=(0,h.v9)(g),e=(0,h.v9)(Z),o=(0,h.v9)(v),t=(0,h.I0)();(0,A.useEffect)((function(){t((0,m.K2)())}),[t]);var r=n.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,C.jsxs)(C.Fragment,{children:[o&&(0,C.jsx)(I.a,{}),(null===r||void 0===r?void 0:r.length)>0&&(0,C.jsx)(L,{children:r.map((function(n){var e=n.id,o=n.name,r=n.number;return(0,C.jsxs)(_,{children:[o,": ",r,(0,C.jsx)(F,{type:"button",onClick:function(){return function(n){return t((0,m.GK)(n))}(e)},children:"Delete"})]},e)}))})]})},N=o(2200),q=j.ZP.div(l||(l=(0,y.Z)(["\n    padding-left: 15px;\n"]))),D=j.ZP.p(p||(p=(0,y.Z)(["\n    font-family: 'Roboto', sans-serif;\n    font-size: 18px;\n    color: #ff6600;\n"]))),B=j.ZP.input(c||(c=(0,y.Z)(["\n    font-family: 'Roboto', sans-serif;\n    font-size: 22px;\n    width: 200px;\n    height: 35px;\n    border-radius: 10px;\n    outline: none;\n    border: none;\n    :focus {\n        border: 2px solid #55bb55;\n    }\n"]))),E=function(){var n=(0,h.I0)();return(0,C.jsxs)(q,{children:[(0,C.jsx)(D,{children:"Find contacts by name"}),(0,C.jsx)(B,{onChange:function(e){n((0,N.W)(e.currentTarget.value.toLowerCase()))},type:"text"})]})},G=j.ZP.div(u||(u=(0,y.Z)(["\n    width: 800px;\n    background-color: #1f1d1d;\n    margin: 50px auto;\n    border-radius: 10px;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    position: relative;\n    box-shadow: 0px 0px 20px 10px #ff6600;\n"]))),J=j.ZP.h1(x||(x=(0,y.Z)(["\n    font-family: 'Roboto', sans-serif;\n    font-size: 36px;\n    text-align: center;\n    color: #ffffff;\n"]))),M=j.ZP.h2(b||(b=(0,y.Z)(["\n    font-family: 'Roboto', sans-serif;\n    font-size: 32px;\n    text-align: center;\n    color: #ffffff;\n"])));function S(){return(0,C.jsxs)(G,{children:[(0,C.jsx)(J,{children:"Phonebook"}),(0,C.jsx)(R,{}),(0,C.jsx)(M,{children:"Contacts"}),(0,C.jsx)(E,{}),(0,C.jsx)(K,{})]})}}}]);
//# sourceMappingURL=868.5609898d.chunk.js.map
(this.webpackJsonpsanta=this.webpackJsonpsanta||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),i=t.n(c),r=(t(12),t(1)),s=t(2),o=t(4),m=t(3),u=(t(13),t(14),t(15),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Wrapper"},l.a.createElement("div",{className:"canvas"}),l.a.createElement("div",{className:"text_remote"},l.a.createElement("div",{className:"intro"},"\uc548\ub155\ud558\uc138\uc694, \uc6f9 \uac1c\ubc1c\uc790\ub97c \uafc8\uafb8\ub294 ",l.a.createElement("span",null,"\uc655\ucc2c\uc6c5"),"\uc785\ub2c8\ub2e4."),l.a.createElement("div",{className:"remote"},l.a.createElement("span",null,"View my Work"))),l.a.createElement("div",{className:"nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"HOME")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"ABOUT")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"PROJECT")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"CONTACT")))))}}]),t}(n.Component)),d=(t(16),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"skill",value:function(){this.props.selected_skill}},{key:"render",value:function(){this.skill();var e=this.props.selected_skill,a="skillTab",t="skillTab",n="skillTab";return 1==e?a+=" front":2==e?t+=" back":3==e&&(n+=" ect"),l.a.createElement("div",{className:"skillSet"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{id:"1",className:a,href:"/",onClick:function(e){e.preventDefault(),console.log(this),this.props.onChangePage("1")}.bind(this)},"Front Skill")),l.a.createElement("li",null,l.a.createElement("a",{id:"2",className:t,href:"/",onClick:function(e){e.preventDefault(),this.props.onChangePage("2")}.bind(this)},"BackEnd Skill")),l.a.createElement("li",null,l.a.createElement("a",{id:"3",className:n,href:"/",onClick:function(e){e.preventDefault(),this.props.onChangePage("3")}.bind(this)},"etc"))))}}]),t}(n.Component)),h=(t(17),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){for(var e=[],a=this.props.data,t=this.props.selected_skill,n=0;n<a.length;)t==a[n].id&&e.push(l.a.createElement("li",null,l.a.createElement("div",{className:"".concat(a[n].skill," skillbox")}))),n+=1;return l.a.createElement("div",{className:"About"},l.a.createElement("div",{className:"About_header"},l.a.createElement("span",null,"About")),l.a.createElement("div",{className:"header_bar"}),l.a.createElement(d,{onChangePage:function(e){this.props.onChangePage(e)}.bind(this),selected_skill:t}),l.a.createElement("div",{className:"skillWrap"},l.a.createElement("ul",{className:"skillUl"},e)))}}]),t}(n.Component)),E=(t(18),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Project"},l.a.createElement("div",{className:"Project_header"},l.a.createElement("span",null,"Project")),l.a.createElement("div",{className:"header_bar"}),l.a.createElement("div",{className:"gall-nav"}),l.a.createElement("div",{className:"gallery"},l.a.createElement("div",{className:"projectTab"},"ALL"),l.a.createElement("div",{className:"projectTab"},"HOGALL"),l.a.createElement("div",{className:"projectTab"},"PICKMATCH"),l.a.createElement("div",{className:"projectTab"},"\uc5ec\ud589\uc815\ubcf4")))}}]),t}(n.Component)),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={skill:"front",selected_skill:1,skillContens:[{id:1,skill:"HTML",name:"HTML"},{id:1,skill:"CSS",name:"CSS"},{id:1,skill:"JS",name:"JS"},{id:1,skill:"JQ",name:"JQ"},{id:1,skill:"REACT",name:"REACT"},{id:2,skill:"JAVA",name:"JAVA"},{id:2,skill:"ORACLE",name:"ORACLE"},{id:3,skill:"SPRING",name:"SPRING"},{id:3,skill:"WINDOW",name:"WINDOW"}]},n}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement(h,{data:this.state.skillContens,selected_skill:this.state.selected_skill,onChangePage:function(e){this.setState({selected_skill:e})}.bind(this)}),l.a.createElement(E,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.db47a3ab.chunk.js.map
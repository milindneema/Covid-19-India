(this["webpackJsonpcovid-19-india"]=this["webpackJsonpcovid-19-india"]||[]).push([[0],{34:function(e,t,a){e.exports=a(56)},40:function(e,t,a){},41:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),c=a.n(l),i=(a(39),a(40),a(10)),s=a(17),o=(a(41),a(12)),m=a.n(o),d=a(21),u=a(13),h=a(14),f=a(16),E=a(15),p=a(68),v=a(57),y=a(65),g=a(62),w=a(69),b=a(63),x=a(64),N=a(61),j=a(66),D=a(76),k=a(58),C=a(59),W=a(60),O=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).size=window.innerWidth<=769?"sm":"lg",n.style=window.innerWidth<=769?{width:"80%",left:"8%"}:{width:"75%"},n.state={loading:!0,district:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,n,r=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/v2/state_district_wise.json");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,null!==(n=a.filter((function(e){return r.props.stateDistrict===e.state}))[0])&&void 0!==n){e.next=12;break}return this.setState({loading:!1}),e.abrupt("return",null);case 12:return n.districtData.sort((function(e,t){return t.confirmed-e.confirmed})),this.setState({district:n,loading:!1}),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.loading?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(v.a,{color:"primary",style:{width:"5rem",height:"5rem"}})):null!==this.state.district&&void 0!==this.state.district?r.a.createElement(D.a,{isOpen:this.props.modal,toggle:this.props.toggle(),size:this.size,style:this.style,centered:!0},r.a.createElement(k.a,null,"District Wise Data"),r.a.createElement(C.a,{style:{padding:"0.1rem"}},r.a.createElement(W.a,{size:"sm",responsive:!0,borderless:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("h4",null,r.a.createElement(N.a,{color:"dark"},"District"))),r.a.createElement("th",null,r.a.createElement("h4",null,r.a.createElement(N.a,{color:"dark"},window.innerWidth<=769?window.innerWidth<=375?"Cfd":"Cnfmd":"Confirmed"))),r.a.createElement("th",null,r.a.createElement("h4",null,r.a.createElement(N.a,{color:"dark"},"Today"))))),r.a.createElement("tbody",null,this.state.district.districtData.map((function(t,a){return r.a.createElement("tr",{key:a},e.tableData(t.district,"secoundary"),e.tableData(t.confirmed,"primary"),e.tableData(t.delta.confirmed,"danger"))})))))):r.a.createElement("div",null))}},{key:"tableData",value:function(e,t){return r.a.createElement("td",null,r.a.createElement("h5",null,r.a.createElement(N.a,{color:t},e)))}}]),a}(n.Component);function S(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var z=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleState=function(e){if(null===n.state.stateindex||n.state.stateindex!==e||n.state.stateindex===e){var t=n.props.total.statewise[e].state;n.toggle(),n.setState({stateData:t,stateindex:e})}else n.setState({stateData:null,stateindex:null})},n.toggle=function(){return n.state.modal?n.setState({modal:!1}):n.setState({modal:!0})},n.state={stateindex:null,stateData:null,modal:!1},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.total.statewise.map((function(t,a){if("Total"!==t.state){var n="0"!==t.confirmed?100:0,l=t.active/t.confirmed*100,c=t.recovered/t.confirmed*100,i=t.deaths/t.confirmed*100;return r.a.createElement(g.a,{key:a,xs:"12",sm:"12",md:"6",lg:"4"},r.a.createElement(b.a,{body:!0,outline:!0,color:"primary",className:"shadow m-3 bg-dark rounded",onClick:function(){e.handleState(a)}},r.a.createElement(x.a,{className:"text-primary font-weight-bold"},r.a.createElement("h4",null,t.state," \xa0\xa0",r.a.createElement(N.a,{pill:!0,color:"primary"},"\u2191 ",S(t.deltaconfirmed)))),r.a.createElement("div",null,e.ProgressBar("Confirmed ",t.confirmed,n,""),e.ProgressBar("Recovered",t.recovered,c,"success"),e.ProgressBar("Active",t.active,l,"warning"),e.ProgressBar("Deaths",t.deaths,i,"danger"),r.a.createElement("p",{className:"text-white mt-2"},"*Click the card to see district data"))),e.state.stateindex===a?r.a.createElement(O,{stateDistrict:e.state.stateData,modal:e.state.modal,toggle:function(){return e.toggle}}):r.a.createElement("div",null))}return r.a.createElement("div",{key:t.state})}));return r.a.createElement(y.a,null,t)}},{key:"ProgressBar",value:function(e,t,a,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-center text-white font-weight-bold"},e,": ",S(t)),r.a.createElement(j.a,{style:{height:"22px",backgroundColor:"grey"},color:n,value:a||0},a?a.toFixed(1):0," %"))}}]),a}(n.Component),B=a(67);function R(e,t,a,n,l){return r.a.createElement(g.a,{xs:"12",sm:"6",md:"6",lg:"3"},r.a.createElement(b.a,{body:!0,outline:!0,color:n,className:" shadow m-3 bg-dark rounded"},r.a.createElement("h5",null,r.a.createElement(x.a,{className:"".concat(l," font-weight-bold")},e," \xa0 \xa0 \xa0 \xa0",t?r.a.createElement(N.a,{pill:!0,color:n},"\u2191",S(t)):null)),r.a.createElement("h4",null,r.a.createElement(B.a,{className:"".concat(l," float-left font-weight-bold")},S(a)))))}var A=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={loading:!0,total:null,states:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({total:a.statewise[0],states:a,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0,className:"m-2 mb-5 justify-content-center"},this.state.loading?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(v.a,{color:"primary",style:{width:"5rem",height:"5rem"}})):r.a.createElement("div",{className:"m-2 mb-5 justify-content-center"},r.a.createElement(y.a,{className:"d-flex justify-content-center"},r.a.createElement(g.a,{className:"col-5 col-md-4 offset-md-2 "},r.a.createElement(i.b,{to:"/"},r.a.createElement(w.a,{color:"primary",style:{padding:".4em 2em"}},"India"))),r.a.createElement(g.a,{className:"col-5 col-md-4 offset-md-2"},r.a.createElement(i.b,{to:"/world"},r.a.createElement(w.a,{outline:!0,color:"primary",style:{padding:".4em 2em"}},"World")))),r.a.createElement(y.a,null,R("Confirmed",this.state.total.deltaconfirmed,this.state.total.confirmed,"primary","text-primary"),R("Active",this.state.total.deltarecovered,this.state.total.active,"info","text-info"),R("Recovered",this.state.total.deltarecovered,this.state.total.recovered,"success","text-success"),R("Deaths",this.state.total.deltadeaths,this.state.total.deaths,"danger","text-danger")),r.a.createElement("h2",{className:"d-flex justify-content-center text-white"},"States",r.a.createElement("span",{style:{marginLeft:"10px"}},this.state.total.lastupdatedtime)),r.a.createElement(z,{total:this.state.states})))}}]),a}(n.Component),T=(a(55),a(33)),I=a(70),L=a(71),M=a(72),P=a(73),_=a(74),F=a(75),J=function(){var e=Object(n.useState)(!1),t=Object(T.a)(e,2),a=t[0],l=t[1];return r.a.createElement(I.a,{light:!0,radius:"10px",color:"primary",className:"mb-2",expand:"md"},r.a.createElement(L.a,{href:"/",className:"font-weight-bold"},"Covid-19-India"),r.a.createElement(M.a,{onClick:function(){return l(!a)}}),r.a.createElement(P.a,{isOpen:a,navbar:!0},r.a.createElement(_.a,{className:"mr-auto",navbar:!0},r.a.createElement(F.a,null,r.a.createElement(i.c,{className:"NavLink",to:"/india"},"India")),r.a.createElement(F.a,null,r.a.createElement(i.c,{className:"NavLink",to:"/world"},"World")))))},V=function(){return r.a.createElement("footer",{className:"bg-dark text-light p-2 text-center"},r.a.createElement("p",null,"Developed by: ",r.a.createElement("a",{href:"https://github.com/milindneema"},"Milind Neema")),r.a.createElement("p",null,"Contact information:",r.a.createElement("a",{href:"https://www.instagram.com/milind_neema/"},r.a.createElement("span",{className:"fab fa-instagram p-1",style:{fontSize:"30px",color:"lightblue"}})),r.a.createElement("a",{href:"https://github.com/milindneema"},r.a.createElement("span",{className:"fab fa-github p-1",style:{fontSize:"30px",color:"lightblue"}})),r.a.createElement("a",{href:"https://www.linkedin.com/in/milind-neema-214ab3131/"},r.a.createElement("span",{className:"fab fa-linkedin p-1",style:{fontSize:"30px",color:"lightblue"}})),r.a.createElement("a",{href:"mailto:milindneema15@gmail.com"},r.a.createElement("span",{className:"fas fa-envelope p-1",style:{fontSize:"30px",color:"lightblue"}}))))},H=function(e){var t=e.CountryData.map((function(e){return r.a.createElement("tr",{key:e.country},r.a.createElement("td",null,e.country),r.a.createElement("td",null,S(e.cases),r.a.createElement("br",null),r.a.createElement(N.a,{className:".todayData",pill:!0,color:"danger"},"\u2191 ",S(e.todayCases))),r.a.createElement("td",null,S(e.active)),r.a.createElement("td",null,S(e.recovered)),r.a.createElement("td",null,S(e.deaths)))}));return r.a.createElement(y.a,null,r.a.createElement(g.a,{xs:"12",md:"6"},r.a.createElement(W.a,{className:"table",responsive:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"20%"}},window.innerWidth<=769?window.innerWidth<=576?"CN":"CONTRY":"Country Name"),r.a.createElement("th",{style:{width:"20%"}},window.innerWidth<=769?window.innerWidth<=576?"Cfd":"Cnfmd":"Confirmed"),r.a.createElement("th",{style:{width:"20%"}},window.innerWidth<=769?window.innerWidth<=576?"AT":"ATV":"Active"),r.a.createElement("th",{style:{width:"20%"}},window.innerWidth<=769?window.innerWidth<=576?"RCD":"RECVD":"Recovered"),r.a.createElement("th",{style:{width:"20%"}},window.innerWidth<=769?window.innerWidth<=576?"D":"DTH":"Deaths"))),r.a.createElement("tbody",null,t))))},Y=function(e){Object(f.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={loading:!0,World:null,CountryData:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t,a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v2/all");case 2:return t=e.sent,e.next=5,fetch("https://corona.lmao.ninja/v2/countries?sort=cases");case 5:return a=e.sent,e.next=8,t.json();case 8:return n=e.sent,e.next=11,a.json();case 11:r=e.sent,this.setState({World:n,CountryData:r,loading:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0,className:"m-2 mb-5 justify-content-center"},this.state.loading?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(v.a,{color:"primary",style:{width:"5rem",height:"5rem"}})):r.a.createElement("div",null,r.a.createElement(y.a,{className:"d-flex justify-content-center"},r.a.createElement(g.a,{className:"col-5 col-md-4 offset-md-2"},r.a.createElement(i.b,{to:"/"},r.a.createElement(w.a,{outline:!0,color:"primary",style:{padding:".4em 2.5em"}},"India"))),r.a.createElement(g.a,{className:"col-5 col-md-4 offset-md-2"},r.a.createElement(i.b,{to:"/world"},r.a.createElement(w.a,{color:"primary",style:{padding:".4em 2.5em"}},"World")))),r.a.createElement(y.a,null,R("Confirmed",this.state.World.todayCases,this.state.World.cases,"primary","text-primary"),R("Active",null,this.state.World.active,"warning","text-warning"),R("Recovered",null,this.state.World.recovered,"success","text-success"),R("Deaths",this.state.World.todayDeaths,this.state.World.deaths,"danger","text-danger")),r.a.createElement("h5",{className:"d-flex justify-content-center text-white"},"Country",r.a.createElement("span",{style:{marginLeft:"10px"}},"(",new Date(this.state.World.updated).toLocaleString()),")"),r.a.createElement(H,{CountryData:this.state.CountryData})))}}]),a}(n.Component);var q=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"bg-dark"},r.a.createElement(J,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/india",component:function(){return r.a.createElement(A,null)}}),r.a.createElement(s.b,{path:"/world",component:function(){return r.a.createElement(Y,null)}}),r.a.createElement(s.a,{to:"/india"})),r.a.createElement(V,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c37161cd.chunk.js.map
(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),s=n.n(o),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))}),i=(n(13),n(2)),h=n(3),l=n(5),b=n(4),d=n(0),j=function(e){var t=e.name,n=e.email,r=e.id;return Object(d.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"Robo"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){e.searchfield;var t=e.searchchange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{type:"search",placeholder:"Search Robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t})})},O=(n(15),function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid #000",height:"960px"},children:e.children})}),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Oooooooooops!"}):this.props.children}}]),n}(r.Component),g=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(f,{searchchange:this.onSearchChange}),Object(d.jsx)(O,{children:Object(d.jsx)(p,{children:Object(d.jsx)(u,{robots:r})})})]}):Object(d.jsx)("h1",{className:"tc f1",children:"Loading"})}}]),n}(r.Component);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.76e4a7d3.chunk.js.map
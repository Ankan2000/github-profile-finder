(this["webpackJsonpgithub-profile-finder"]=this["webpackJsonpgithub-profile-finder"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),o=a(1),i=a(2),u=a(4),l=a(3),h=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:this.props.user.avatar_url,className:"card-image",width:"100%",height:"100%",alt:"no avatar found for this profile"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"card-title"},this.props.user.login)))}}]),a}(n.Component),m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).searchUser=function(e){if(""===e)return n.state.userList;var t=new RegExp("^".concat(e),"gi");return n.state.userList.filter((function(e){return t.test(e.login)}))},n.loadAllUsers=function(){fetch("https://api.github.com/users?client_id=".concat("409c6363966a67f6971a","&client_secret=").concat("ab0202e7f54611d68838e120c962e5ddfdecf6fb"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){n.setState({userList:e}),0===n.state.suggestion.length&&n.setState({suggestion:e})})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){n.setState({searchText:e.target.value}),setTimeout((function(){n.setState({suggestion:n.searchUser(n.state.searchText)})}),50)},n.state={searchText:"",suggestion:[],userList:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.loadAllUsers()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("form",{className:"form-group"},r.a.createElement("input",{className:"form-control mt-2",type:"text",placeholder:"search users",value:this.state.searchText,onChange:this.handleChange,autoFocus:!0}))),this.state.suggestion.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-4 col-md-3  mb-3"},r.a.createElement(h,{user:e}))}))))}}]),a}(r.a.Component);c.a.render(r.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.e4064801.chunk.js.map
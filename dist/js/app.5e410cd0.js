(function(t){function e(e){for(var i,o,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0b0f":function(t,e,n){"use strict";var i=n("63bc"),s=n.n(i);s.a},"165f":function(t,e,n){},"411a":function(t,e,n){},4210:function(t,e,n){"use strict";var i=n("165f"),s=n.n(i);s.a},4930:function(t,e,n){},"4b73":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Menu"),n("router-view")],1)},a=[],o={name:"App",mounted:function(){this.$store.commit("loadEpisodes")}},r=o,l=(n("5c0b"),n("2877")),c=Object(l["a"])(r,s,a,!1,null,null,null),u=c.exports,p=n("5f5b"),d=n("b1e0"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{staticClass:"menu",attrs:{toggleable:"lg",type:"dark",sticky:!t.isMobileDevice()}},[n("b-navbar-brand",{attrs:{to:"#"}},[t._v("Deteconan")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",{staticClass:"link",attrs:{to:"/"}},[n("b-icon",{attrs:{icon:"house"}}),n("span",{staticClass:"ml-2"},[t._v("épisodes")])],1),n("b-nav-item",{staticClass:"link",attrs:{to:"/upload"}},[n("b-icon",{attrs:{icon:"cloud-upload"}}),n("span",{staticClass:"ml-2"},[t._v("upload")])],1)],1)],1)],1)},v=[],h={name:"Menu",methods:{reach:function(t){this.$router.push(t)}}},b=h,m=(n("cad7"),Object(l["a"])(b,f,v,!1,null,"4d0df19c",null)),g=m.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-relative"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),n("b-embed",{attrs:{src:t.url,aspect:"16by9",type:"iframe",allowfullscreen:""}})],1)},w=[],_=(n("b0c0"),{name:"VideoPlayer",props:{id:{type:String,required:!0},name:{type:String,required:!0}},computed:{url:function(){return"https://drive.google.com/file/d/"+this.id+"/preview"},title:function(){return"Détective Conan épisode "+this.name+" VOSTFR"}}}),x=_,C=(n("4210"),Object(l["a"])(x,y,w,!1,null,"24195fa2",null)),k=C.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"file-drop",on:{click:t.handleFileInput}},[n("div",{staticClass:"py-2"},[t.value?n("div",[n("b-icon",{staticClass:"icon",attrs:{icon:"file-earmark-text"}}),n("div",{staticClass:"text"},[t._v(t._s(t.value.name))])],1):n("div",[n("b-icon",{staticClass:"icon",attrs:{icon:"file-plus"}}),n("div",{staticClass:"text"},[t._v("Add a file")])],1)]),n("b-form-file",{ref:"file-input",staticStyle:{visibility:"hidden",position:"absolute"},attrs:{accept:t.fileType},on:{input:function(e){return t.$emit("input",e)}}})],1)},$=[],j={name:"FileDrop",props:{value:{required:!0},fileType:{type:String,default:"*"}},methods:{handleFileInput:function(){this.$refs["file-input"].$refs.input.click()}}},E=j,S=(n("9427"),Object(l["a"])(E,O,$,!1,null,"94d20198",null)),M=S.exports,P=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("div",{staticStyle:{width:"300px",margin:"auto"}},[n("b-img",{staticClass:"img-thumbnail my-3",attrs:{src:"https://images7.alphacoders.com/482/thumb-1920-482681.jpg"}}),n("file-drop",{staticClass:"mb-3",attrs:{"file-type":".json"},on:{input:t.parse},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),n("b-input",{attrs:{type:"password",placeholder:"Password",trim:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("form",{staticClass:"my-4",on:{submit:function(e){return e.preventDefault(),t.upload(e)}}},[n("b-button",{staticClass:"upload-btn",attrs:{type:"submit",variant:"primary",disabled:!t.flux||t.loading}},[t.loading?n("b-spinner"):n("b-icon",{attrs:{icon:"cloud-upload"}})],1)],1),t.file?n("div",{staticClass:"pb-3"},[n("b-list-group",{staticClass:"text-left"},t._l(t.flux,(function(e){return n("b-list-group-item",{key:e.src,staticClass:"d-flex text-white"},[n("span",{staticClass:"filename"},[t._v(t._s(e.ep))]),n("a",{staticClass:"source text-white",attrs:{href:"#"},on:{click:function(n){return t.reach(e.src)}}},[t._v(t._s(e.src))])])})),1)],1):t._e()])},D=[],F=(n("d3b7"),n("bc3a")),I={data:function(){return{file:null,flux:null,loading:!1,jwToken:null,drive:null,interval:null,password:""}},mounted:function(){var t=this;this.updateUploading(),this.interval=setInterval((function(){t.updateUploading()}),1e4)},methods:{parse:function(){var t=this;if(this.file){var e=new FileReader;e.onload=function(e){var n=e.target.result;t.flux=JSON.parse(n)},e.readAsText(this.file)}},upload:function(){var t=this;this.flux&&F["post"]("https://deteconan.herokuapp.com/api/drive/upload",{flux:this.flux,password:this.password}).then((function(t){console.log(t)})).catch((function(t){console.error(t.response.data)})).finally((function(){t.updateUploading()}))},list:function(){F["get"]("https://deteconan.herokuapp.com/api/drive/list").then((function(t){console.log(t)})).catch((function(t){console.log(t.response.data)}))},reach:function(t){window.open(t)},updateUploading:function(){var t=this;F["get"]("https://deteconan.herokuapp.com/api/drive/uploading").then((function(e){t.loading=e.data})).catch((function(e){t.loading=!1,console.log(e)}))}}},U=I,q=(n("0b0f"),Object(l["a"])(U,T,D,!1,null,"178a33e0",null)),A=q.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.episodes?n("b-container",{staticClass:"content px-0 pt-4 shadow"},[n("div",{staticClass:"content-box"},[n("video-player",{staticClass:"py-3",attrs:{id:t.currentEpisode.id,name:t.currentEpisode.name}}),n("div",{staticClass:"pr-2 pr-lg-0 float-right"},[n("span",{staticClass:"text-white",staticStyle:{"font-size":"15pt"}},[t._v("Choisir épisode : ")]),n("b-select",{staticClass:"episode-chooser",on:{input:function(e){return t.$store.commit("setEpisode",t.currentEpisode.name)}},model:{value:t.$store.state.episode,callback:function(e){t.$set(t.$store.state,"episode",e)},expression:"$store.state.episode"}},t._l(t.episodes,(function(e){return n("option",{key:e.name},[t._v(" "+t._s(e.name)+" ")])})),0)],1)],1)]):t._e()},R=[],V=(n("4de4"),n("25f0"),{name:"Episodes",computed:{currentEpisode:function(){var t=this;return this.episodes.filter((function(e){return e.name===t.$store.getters.currentEpisode.toString()})).pop()},episodes:function(){return this.$store.getters.episodes}}}),z=V,N=(n("f777"),Object(l["a"])(z,J,R,!1,null,"2cc1c98b",null)),W=N.exports;i["default"].use(P["a"]);var B=new P["a"]({mode:"history",routes:[{path:"/upload",name:"upload",component:A},{path:"/",name:"episodes",component:W}]}),G=n("2f62"),H=n("bfa9");i["default"].use(G["a"]);var K=new H["a"]({storage:window.localStorage}),L=new G["a"].Store({state:{episode:1,episodes:[]},getters:{currentEpisode:function(t){return t.episode},episodes:function(t){return t.episodes}},mutations:{setEpisode:function(t,e){t.episode=e},loadEpisodes:function(t){F["get"]("https://deteconan.herokuapp.com/api/drive/list").then((function(e){t.episodes=e.data.sort((function(t,e){return parseInt(t.name)-parseInt(e.name)}))})).catch((function(t){console.log(t)}))}},plugins:[K.plugin]});i["default"].mixin({methods:{isMobileDevice:function(){return window.innerWidth<=1e3}}});n("411a");i["default"].config.productionTip=!1,i["default"].use(p["a"]),i["default"].use(d["a"]),i["default"].component("Menu",g),i["default"].component("video-player",k),i["default"].component("file-drop",M),new i["default"]({router:B,store:L,render:function(t){return t(u)}}).$mount("#app")},5983:function(t,e,n){},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"63bc":function(t,e,n){},9427:function(t,e,n){"use strict";var i=n("4b73"),s=n.n(i);s.a},"9c0c":function(t,e,n){},cad7:function(t,e,n){"use strict";var i=n("5983"),s=n.n(i);s.a},f777:function(t,e,n){"use strict";var i=n("4930"),s=n.n(i);s.a}});
//# sourceMappingURL=app.5e410cd0.js.map
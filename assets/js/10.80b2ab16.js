(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{344:function(t,s,n){"use strict";n(26),n(97);s.a={methods:{formatCode:function(t){return t.replace(/^ {8}/gm,"").trim()}}}},345:function(t,s,n){"use strict";var a=n(4),c=n(15),o=n(16),i=n(76),l=n(74),r=n(6),e=n(98).f,v=n(99).f,d=n(9).f,p=n(100).trim,u=a.Number,C=u,f=u.prototype,_="Number"==o(n(75)(f)),h="trim"in String.prototype,g=function(t){var s=l(t,!1);if("string"==typeof s&&s.length>2){var n,a,c,o=(s=h?s.trim():p(s,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(s.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+s}for(var i,r=s.slice(2),e=0,v=r.length;e<v;e++)if((i=r.charCodeAt(e))<48||i>c)return NaN;return parseInt(r,a)}}return+s};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var s=arguments.length<1?0:t,n=this;return n instanceof u&&(_?r((function(){f.valueOf.call(n)})):"Number"!=o(n))?i(new C(g(s)),n,u):g(s)};for(var w,m=n(8)?e(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;m.length>b;b++)c(C,w=m[b])&&!c(u,w)&&d(u,w,v(C,w));u.prototype=f,f.constructor=u,n(12)(a,"Number",u)}},350:function(t,s,n){},351:function(t,s,n){},356:function(t,s,n){"use strict";var a=n(350);n.n(a).a},357:function(t,s,n){"use strict";var a=n(3),c=n(77)(!0);a(a.P,"Array",{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n(101)("includes")},358:function(t,s,n){"use strict";var a=n(3),c=n(359);a(a.P+a.F*n(360)("includes"),"String",{includes:function(t){return!!~c(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},359:function(t,s,n){var a=n(78),c=n(17);t.exports=function(t,s,n){if(a(s))throw TypeError("String#"+n+" doesn't accept regex!");return String(c(t))}},360:function(t,s,n){var a=n(2)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(n){try{return s[a]=!1,!"/./"[t](s)}catch(t){}}return!0}},361:function(t,s,n){"use strict";var a=n(351);n.n(a).a},362:function(t,s,n){"use strict";var a=n(10),c=(n(345),n(357),n(358),n(20),n(11),n(21),n(27),function(t){var s=Object.keys(t),n=!0;return s.forEach((function(t){["span","offset"].includes(t)||(n=!1)})),n}),o={name:"takiUICol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:c},narrowPc:{type:Object,validator:c},pc:{type:Object,validator:c},widePc:{type:Object,validator:c}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(s).concat(t.span)),t.offset&&n.push("offset-".concat(s).concat(t.offset)),n}},computed:{colClass:function(){var t=this.span,s=this.offset,n=this.ipad,c=this.narrowPc,o=this.pc,i=this.widePc,l=this.createClasses;return Object(a.a)(l({span:t,offset:s})).concat(Object(a.a)(l(n,"ipad-")),Object(a.a)(l(c,"narrow-pc-")),Object(a.a)(l(o,"pc-")),Object(a.a)(l(i,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},i=(n(361),n(1)),l=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"e07145b4",null);s.a=l.exports},363:function(t,s,n){"use strict";n(11),n(20),n(54),n(345);var a={name:"takiUIRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(s){s.gutter=t.gutter}))}},c=(n(356),n(1)),o=Object(c.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"fe12aef2",null);s.a=o.exports},379:function(t,s,n){},421:function(t,s,n){"use strict";var a=n(379);n.n(a).a},456:function(t,s,n){"use strict";n.r(s);var a=n(344),c=n(363),o=n(362),i={components:{"t-row":c.a,"t-col":o.a},mixins:[a.a],data:function(){return{normalCode:'\n        <t-row class="tRow">\n          <t-col span="8">\n            <div class="tCol">8</div>\n          </t-col>\n          <t-col span="8">\n            <div class="tCol">8</div>\n          </t-col>\n          <t-col span="8">\n            <div class="tCol">8</div>\n          </t-col>\n        </t-row>\n        <t-row class="tRow">\n          <t-col span="6">\n            <div class="tCol">6</div>\n          </t-col>\n          <t-col span="6">\n            <div class="tCol">6</div>\n          </t-col>\n          <t-col span="6">\n            <div class="tCol">6</div>\n          </t-col>\n          <t-col span="6">\n            <div class="tCol">6</div>\n          </t-col>\n        </t-row>\n        <t-row class="tRow">\n          <t-col span="4">\n            <div class="tCol">4</div>\n          </t-col>\n          <t-col span="4">\n            <div class="tCol">4</div>\n          </t-col>\n          <t-col span="4">\n            <div class="tCol">4</div>\n          </t-col>\n          <t-col span="4">\n            <div class="tCol">4</div>\n          </t-col>\n          <t-col span="4">\n            <div class="tCol">4</div>\n          </t-col>\n          <t-col span="4">\n            <div class="tCol">4</div>\n          </t-col>\n        </t-row>\n        <t-row class="tRow">\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n          <t-col span="2">\n            <div class="tCol">2</div>\n          </t-col>\n        </t-row>\n      '}}},l=(n(421),n(1)),r=Object(l.a)(i,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticStyle:{"padding-top":"8px"}},[n("h2",[t._v("24网格")]),t._v(" "),t._m(0),t._v(" "),n("section",{staticClass:"normalDemo"},[n("t-row",{staticClass:"tRow"},[n("t-col",{attrs:{span:"8"}},[n("div",{staticClass:"tCol"},[t._v("8")])]),t._v(" "),n("t-col",{attrs:{span:"8"}},[n("div",{staticClass:"tCol"},[t._v("8")])]),t._v(" "),n("t-col",{attrs:{span:"8"}},[n("div",{staticClass:"tCol"},[t._v("8")])])],1),t._v(" "),n("t-row",{staticClass:"tRow"},[n("t-col",{attrs:{span:"6"}},[n("div",{staticClass:"tCol"},[t._v("6")])]),t._v(" "),n("t-col",{attrs:{span:"6"}},[n("div",{staticClass:"tCol"},[t._v("6")])]),t._v(" "),n("t-col",{attrs:{span:"6"}},[n("div",{staticClass:"tCol"},[t._v("6")])]),t._v(" "),n("t-col",{attrs:{span:"6"}},[n("div",{staticClass:"tCol"},[t._v("6")])])],1),t._v(" "),n("t-row",{staticClass:"tRow"},[n("t-col",{attrs:{span:"4"}},[n("div",{staticClass:"tCol"},[t._v("4")])]),t._v(" "),n("t-col",{attrs:{span:"4"}},[n("div",{staticClass:"tCol"},[t._v("4")])]),t._v(" "),n("t-col",{attrs:{span:"4"}},[n("div",{staticClass:"tCol"},[t._v("4")])]),t._v(" "),n("t-col",{attrs:{span:"4"}},[n("div",{staticClass:"tCol"},[t._v("4")])]),t._v(" "),n("t-col",{attrs:{span:"4"}},[n("div",{staticClass:"tCol"},[t._v("4")])]),t._v(" "),n("t-col",{attrs:{span:"4"}},[n("div",{staticClass:"tCol"},[t._v("4")])])],1),t._v(" "),n("t-row",{staticClass:"tRow"},[n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])]),t._v(" "),n("t-col",{attrs:{span:"2"}},[n("div",{staticClass:"tCol"},[t._v("2")])])],1)],1),t._v(" "),t._m(1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.formatCode(t.normalCode)))])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"6791ffda",null);s.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{342:function(t,e,a){},343:function(t,e,a){},344:function(t,e,a){"use strict";a(26),a(97);e.a={methods:{formatCode:function(t){return t.replace(/^ {8}/gm,"").trim()}}}},345:function(t,e,a){"use strict";var s=a(4),n=a(15),i=a(16),c=a(76),o=a(74),r=a(6),l=a(98).f,v=a(99).f,d=a(9).f,_=a(100).trim,u=s.Number,h=u,m=u.prototype,b="Number"==i(a(75)(m)),p="trim"in String.prototype,f=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var a,s,n,i=(e=p?e.trim():_(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+e}for(var c,r=e.slice(2),l=0,v=r.length;l<v;l++)if((c=r.charCodeAt(l))<48||c>n)return NaN;return parseInt(r,s)}}return+e};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof u&&(b?r((function(){m.valueOf.call(a)})):"Number"!=i(a))?c(new h(f(e)),a,u):f(e)};for(var g,y=a(8)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)n(h,g=y[C])&&!n(u,g)&&d(u,g,v(h,g));u.prototype=m,m.constructor=u,a(12)(s,"Number",u)}},346:function(t,e,a){"use strict";a(54);!function(t){var e,a,s,n,i,c,o,r='<svg><symbol id="i-error" viewBox="0 0 1024 1024"><path d="M512 26.54814777C245.0014811 26.54814777 26.54814777 245.0014811 26.54814777 512s218.45333333 485.45185223 485.45185223 485.45185223 485.45185223-218.45333333 485.45185223-485.45185223S778.9985189 26.54814777 512 26.54814777z m48.54518557 728.17777778h-97.09037114v-97.09037h97.09037114v97.09037z m0-194.18073998h-97.09037114V269.27407445h97.09037114v291.27111112z"  ></path></symbol><symbol id="i-info" viewBox="0 0 1024 1024"><path d="M512 26.54814777c-268.21214777 0-485.45185223 217.23970333-485.45185223 485.45185223s217.23970333 485.45185223 485.45185223 485.45185223 485.45185223-217.23970333 485.45185223-485.45185223-217.23970333-485.45185223-485.45185223-485.45185223zM560.54518557 754.72592555l-97.09037 0 0-291.27111112 97.09037 0 0 291.27111112zM560.54518557 366.36444445l-97.09037 0 0-97.09037 97.09037 0 0 97.09037z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M832.68125 749.825c2.86875 0 5.5125-2.8125 5.5125-5.85 0-3.0375-2.64375-5.79375-5.5125-5.79375-2.86875 0-5.5125 2.8125-5.5125 5.79375 0 3.0375 2.64375 5.85 5.5125 5.85zM709.15625 884.6c2.025 2.1375 4.89375 3.375 7.70625 3.375a10.6875 10.6875 0 0 0 7.7625-3.375 12.09375 12.09375 0 0 0 0-16.3125 10.74375 10.74375 0 0 0-7.7625-3.375 10.6875 10.6875 0 0 0-7.70625 3.375 12.0375 12.0375 0 0 0 0 16.3125z m-161.71875 72.3375c3.0375 3.20625 7.3125 5.0625 11.5875 5.0625a16.14375 16.14375 0 0 0 11.5875-5.0625 18.1125 18.1125 0 0 0 0-24.58125 16.14375 16.14375 0 0 0-11.5875-5.11875 16.14375 16.14375 0 0 0-11.5875 5.0625 18.1125 18.1125 0 0 0 0 24.6375z m-174.31875-5.0625c4.05 4.21875 9.73125 6.75 15.46875 6.75a21.4875 21.4875 0 0 0 15.4125-6.75 24.13125 24.13125 0 0 0 0-32.7375 21.4875 21.4875 0 0 0-15.4125-6.75 21.4875 21.4875 0 0 0-15.46875 6.75 24.1875 24.1875 0 0 0 0 32.68125z m-154.40625-80.71875c5.0625 5.34375 12.15 8.4375 19.29375 8.4375a26.8875 26.8875 0 0 0 19.35-8.4375 30.20625 30.20625 0 0 0 0-40.95 26.8875 26.8875 0 0 0-19.35-8.4375 26.8875 26.8875 0 0 0-19.29375 8.4375 30.20625 30.20625 0 0 0 0 40.95zM112.23125 731.09375c6.075 6.46875 14.625 10.2375 23.175 10.2375a32.2875 32.2875 0 0 0 23.23125-10.18125 36.28125 36.28125 0 0 0 0-49.1625 32.2875 32.2875 0 0 0-23.23125-10.18125 32.34375 32.34375 0 0 0-23.175 10.125 36.28125 36.28125 0 0 0 0 49.21875zM73.19375 558.29375a37.6875 37.6875 0 0 0 27.05625 11.8125 37.6875 37.6875 0 0 0 27.05625-11.8125 42.3 42.3 0 0 0 0-57.31875 37.6875 37.6875 0 0 0-27-11.8125 37.6875 37.6875 0 0 0-27.1125 11.8125 42.3 42.3 0 0 0 0 57.31875zM108.18125 386.5625a43.03125 43.03125 0 0 0 30.9375 13.5 43.03125 43.03125 0 0 0 30.9375-13.5 48.31875 48.31875 0 0 0 0-65.53125 43.03125 43.03125 0 0 0-30.9375-13.55625 43.03125 43.03125 0 0 0-30.9375 13.55625 48.31875 48.31875 0 0 0 0 65.53125z m101.75625-137.8125c9.1125 9.675 21.9375 15.3 34.875 15.3 12.825 0 25.65-5.625 34.7625-15.3a54.39375 54.39375 0 0 0 0-73.6875 48.43125 48.43125 0 0 0-34.81875-15.3c-12.88125 0-25.70625 5.625-34.81875 15.3a54.39375 54.39375 0 0 0 0 73.6875z m148.55625-77.0625c10.125 10.6875 24.35625 16.93125 38.64375 16.93125 14.2875 0 28.51875-6.1875 38.64375-16.93125a60.35625 60.35625 0 0 0 0-81.9 53.83125 53.83125 0 0 0-38.64375-16.93125 53.83125 53.83125 0 0 0-38.64375 16.93125 60.4125 60.4125 0 0 0 0 81.9z m166.66875-0.95625c11.1375 11.8125 26.83125 18.675 42.58125 18.675s31.3875-6.8625 42.525-18.675a66.43125 66.43125 0 0 0 0-90.05625A59.23125 59.23125 0 0 0 567.6875 62c-15.75 0-31.44375 6.8625-42.58125 18.675a66.43125 66.43125 0 0 0 0 90.05625zM677.9375 246.8375c12.15 12.825 29.25 20.30625 46.35 20.30625 17.2125 0 34.3125-7.48125 46.40625-20.30625a72.45 72.45 0 0 0 0-98.2125 64.575 64.575 0 0 0-46.40625-20.3625c-17.15625 0-34.2 7.48125-46.35 20.3625a72.45 72.45 0 0 0 0 98.2125z m109.0125 139.33125c13.1625 13.95 31.66875 22.05 50.2875 22.05 18.5625 0 37.125-8.1 50.23125-22.05a78.525 78.525 0 0 0 0-106.425 69.975 69.975 0 0 0-50.23125-22.05c-18.61875 0-37.125 8.1-50.2875 22.05a78.525 78.525 0 0 0 0 106.425z m44.325 179.325c14.175 15.01875 34.0875 23.7375 54.16875 23.7375 20.025 0 39.9375-8.71875 54.1125-23.7375a84.6 84.6 0 0 0 0-114.6375 75.375 75.375 0 0 0-54.1125-23.79375c-20.08125 0-39.9375 8.775-54.16875 23.79375a84.54375 84.54375 0 0 0 0 114.6375z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M625.574 511.76L325.76 811.574 368.187 854l321.026-321.026c11.716-11.716 11.716-30.711 0-42.427L368.187 169.521l-42.427 42.426L625.574 511.76z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M398.426 512.24L698.24 212.426 655.813 170 334.787 491.026c-11.716 11.716-11.716 30.711 0 42.427l321.026 321.026 42.427-42.426L398.426 512.24z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M512 697.6c102.4 0 182.4-83.2 182.4-185.6 0-102.4-83.2-185.6-182.4-185.6-102.4 0-182.4 83.2-182.4 185.6 0 102.4 83.2 185.6 182.4 185.6z m0-51.2c-73.6 0-134.4-60.8-134.4-134.4 0-73.6 60.8-134.4 134.4-134.4 73.6 0 134.4 60.8 134.4 134.4 0 73.6-60.8 134.4-134.4 134.4z"  ></path><path d="M249.015 843.179c35.2 28.8 73.6 51.2 112 67.2 41.6-38.4 96-60.8 150.4-60.8 57.6 0 108.8 22.4 150.4 60.8 41.6-16 80-38.4 112-67.2-12.8-54.4-3.2-112 22.4-163.2 28.8-48 73.6-86.4 128-102.4 3.2-22.4 6.4-44.8 6.4-67.2 0-22.4-3.2-44.8-6.4-67.2-54.4-16-99.2-54.4-128-102.4-28.8-48-35.2-108.8-22.4-163.2-35.2-28.8-73.6-51.2-112-67.2-41.6 38.4-92.8 60.8-150.4 60.8-54.4 0-108.8-22.4-150.4-60.8-41.6 16-80 38.4-112 67.2 12.8 54.4 3.2 112-22.4 163.2-28.8 48-73.6 86.4-128 102.4-3.2 22.4-6.4 44.8-6.4 67.2 0 22.4 3.2 44.8 6.4 67.2 54.4 16 99.2 54.4 128 102.4 25.6 51.2 35.2 108.8 22.4 163.2m112 115.2c-54.4-19.2-105.6-48-150.4-89.6-6.4-6.4-9.6-16-6.4-22.4 16-48 9.6-99.2-16-140.8-25.6-44.8-64-73.6-112-83.2-9.6-3.2-16-9.6-16-19.2-6.4-28.8-9.6-60.8-9.6-89.6 0-28.8 3.2-57.6 9.6-89.6 3.2-9.6 9.6-16 16-19.2 48-12.8 89.6-41.6 112-83.2 25.6-44.8 28.8-92.8 16-140.8-3.2-9.6 0-19.2 6.4-22.4 44.8-38.4 96-67.2 150.4-89.6 9.6-3.2 16 0 22.4 6.4 35.2 35.2 80 57.6 128 57.6s96-19.2 128-57.6c6.4-6.4 16-9.6 22.4-6.4 54.4 19.2 105.6 48 150.4 89.6 6.4 6.4 9.6 16 6.4 22.4-16 48-9.6 99.2 16 140.8 25.6 44.8 64 73.6 112 83.2 9.6 3.2 16 9.6 16 19.2 6.4 28.8 9.6 60.8 9.6 89.6 0 28.8-3.2 57.6-9.6 89.6-3.2 9.6-9.6 16-16 19.2-48 12.8-89.6 41.6-112 83.2-25.6 44.8-28.8 92.8-16 140.8 3.2 9.6 0 19.2-6.4 22.4-44.8 38.4-96 67.2-150.4 89.6-9.6 3.2-16 0-22.4-6.4-35.2-35.2-80-57.6-128-57.6s-96 19.2-128 57.6c-3.2 3.2-9.6 6.4-16 6.4h-6.4z"  ></path></symbol><symbol id="i-thumbs-up" viewBox="0 0 1024 1024"><path d="M995.46 434.45a82.52 82.52 0 0 0-66.84-33.58H630c19.44-82 58.71-276.28 14.81-350.77-10.51-17.79-25.59-29.56-43.63-34.1-32.2-8.11-62.63-3.82-88.05 12.29-50.45 31.9-65 98.17-66.73 107.12C426.93 271.8 302.11 377 271.69 400.87h-93a27.76 27.76 0 0 0-27.78 27.78v555.54a27.76 27.76 0 0 0 27.75 27.81H754a138 138 0 0 0 133-99l121.44-404.86a82.57 82.57 0 0 0-12.98-73.69z m-40.26 57.73L833.76 897A82.82 82.82 0 0 1 754 956.41H206.44v-500h69.44c0.74 0 1.35-0.36 2.08-0.42a27.36 27.36 0 0 0 19.24-4.76c7.3-5.21 178.73-129.47 203.93-306.42 2.58-12.83 15.73-53.14 41.69-69.58 12.64-7.95 27.32-9.68 44.89-5.34 1.36 0.35 5 1.27 9.22 8.41 31.14 52.84-1.46 238.55-29.32 343.17a26.34 26.34 0 0 0-0.22 3.54 26 26 0 0 0-0.73 3.62c0 0.68 0.34 1.25 0.39 1.93a26.64 26.64 0 0 0 1.11 5.47 24.29 24.29 0 0 0 12.26 16 26.54 26.54 0 0 0 5.17 2.56c0.61 0.21 1.06 0.67 1.69 0.84a27.39 27.39 0 0 0 7.11 0.94h334.23a27.75 27.75 0 0 1 26.58 35.75zM39.78 400.87A27.76 27.76 0 0 0 12 428.65v555.54a27.78 27.78 0 0 0 55.55 0V428.65a27.76 27.76 0 0 0-27.77-27.78z"  ></path></symbol><symbol id="i-down" viewBox="0 0 1024 1024"><path d="M949 325L539.1 721.7c-14.9 14.5-39.1 14.5-54 0L75.2 325c-14.9-14.4-14.9-37.9 0-52.3 14.9-14.4 39.1-14.4 54 0l382.9 370.6L895 272.7c14.9-14.4 39.1-14.4 54 0 14.9 14.4 14.9 37.9 0 52.3z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M489.6 790.4c3.2 3.2 6.4 6.4 9.6 6.4 3.2 0 6.4 3.2 12.8 3.2 3.2 0 9.6 0 12.8-3.2 3.2-3.2 6.4-3.2 9.6-6.4l272-272c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L544 691.2V96c0-19.2-12.8-32-32-32s-32 12.8-32 32v595.2l-217.6-217.6c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l272 272z"  ></path><path d="M960 576c-19.2 0-32 12.8-32 32v256c0 19.2-12.8 32-32 32H128c-19.2 0-32-12.8-32-32v-256c0-19.2-12.8-32-32-32s-32 12.8-32 32v256c0 54.4 41.6 96 96 96h768c54.4 0 96-41.6 96-96v-256c0-19.2-12.8-32-32-32z"  ></path></symbol></svg>';if((e=document.getElementsByTagName("script"))[e.length-1].getAttribute("data-injectcss")&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}function l(){c||(c=!0,n())}a=function(){var t,e,a,s,n,i=document.createElement("div");i.innerHTML=r,r=null,(t=i.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",e=t,(a=document.body).firstChild?(s=e,(n=a.firstChild).parentNode.insertBefore(s,n)):a.appendChild(e))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(a,0):(s=function(){document.removeEventListener("DOMContentLoaded",s,!1),a()},document.addEventListener("DOMContentLoaded",s,!1)):document.attachEvent&&(n=a,i=t.document,c=!1,(o=function(){try{i.documentElement.doScroll("left")}catch(t){return void setTimeout(o,50)}l()})(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,l())})}(window);var s={name:"takiUIIcon",props:["name"]},n=(a(347),a(1)),i=Object(n.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"g-icon"},[e("use",{attrs:{"xlink:href":"#i-"+this.name}})])}),[],!1,null,"74288ba1",null);e.a=i.exports},347:function(t,e,a){"use strict";var s=a(342);a.n(s).a},348:function(t,e,a){"use strict";var s=a(343);a.n(s).a},349:function(t,e,a){"use strict";var s={name:"takiUIButton",components:{"g-icon":a(346).a},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validate:function(t){return"left"===t||"right"===t}}}},n=(a(348),a(1)),i=Object(n.a)(s,(function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("button",{staticClass:"g-button",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?s("g-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?s("g-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):e._e(),e._v(" "),s("div",{staticClass:"g-button-content"},[e._t("default")],2)],1)}),[],!1,null,"f35b477e",null);e.a=i.exports},391:function(t,e,a){},392:function(t,e,a){},393:function(t,e,a){},394:function(t,e,a){},395:function(t,e,a){},396:function(t,e,a){},433:function(t,e,a){"use strict";var s=a(391);a.n(s).a},434:function(t,e,a){"use strict";var s=a(392);a.n(s).a},435:function(t,e,a){"use strict";var s=a(393);a.n(s).a},436:function(t,e,a){"use strict";var s=a(394);a.n(s).a},437:function(t,e,a){"use strict";var s=a(395);a.n(s).a},438:function(t,e,a){"use strict";var s=a(396);a.n(s).a},446:function(t,e,a){"use strict";a.r(e);var s=a(344),n=a(349),i=(a(55),a(11),a(20),a(54),a(0)),c={name:"takiUITabs",props:{selected:{type:String,required:!0},direction:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].indexOf(t)>=0}}},data:function(){return{eventBus:new i.a}},provide:function(){return{eventBus:this.eventBus}},methods:{checkChildren:function(){0===this.$children.length&&console&&console.warn&&console.warn("tabs must be have tabs-head & tabs-body")},selectTab:function(){var t=this;this.$children.forEach((function(e){"takiUITabsHead"===e.$options.name&&e.$children.forEach((function(e){"takiUITabsItem"===e.$options.name&&e.$props.name===t.selected&&t.eventBus.$emit("update:selected",t.selected,e)}))}))}},mounted:function(){this.checkChildren(),this.selectTab()}},o=(a(433),a(1)),r=Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tabs"},[this._t("default")],2)}),[],!1,null,null,null).exports,l={name:"takiUITabsBody",inject:["eventBus"],created:function(){}},v=(a(434),Object(o.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tabs-body"},[this._t("default")],2)}),[],!1,null,null,null).exports),d={name:"takiUITabsHead",inject:["eventBus"],methods:{updateLinePosition:function(t){var e=t.$el.getBoundingClientRect(),a=e.width,s=e.left,n=this.$refs.tabsHead.getBoundingClientRect().left;this.$refs.line.style.width="".concat(a,"px"),this.$refs.line.style.left="".concat(s-n,"px")}},mounted:function(){var t=this;this.eventBus.$on("update:selected",(function(e,a){t.updateLinePosition(a)}))}},_=(a(435),Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"tabsHead",staticClass:"tabs-head"},[this._t("default"),this._v(" "),e("div",{ref:"line",staticClass:"line"}),this._v(" "),e("div",{staticClass:"actions-wrapper"},[this._t("actions")],2)],2)}),[],!1,null,"c239f990",null).exports),u=(a(345),{name:"takiUITabsItem",inject:["eventBus"],data:function(){return{active:!1}},props:{disabled:{type:Boolean,default:!1},name:{type:[String,Number],required:!0}},computed:{classes:function(){return{active:this.active,disabled:this.disabled}}},methods:{onClick:function(){this.disabled||(this.eventBus&&this.eventBus.$emit("update:selected",this.name,this),this.$emit("click",this))}},created:function(){var t=this;this.eventBus&&this.eventBus.$on("update:selected",(function(e){t.active=e===t.name}))}}),h=(a(436),Object(o.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tabs-item",class:this.classes,attrs:{"data-name":this.name},on:{click:this.onClick}},[this._t("default")],2)}),[],!1,null,"51d37227",null).exports),m={name:"takiUITabsPane",inject:["eventBus"],data:function(){return{active:!1}},props:{name:{type:[String,Number],required:!0}},computed:{classes:function(){return{active:this.active}}},created:function(){var t=this;this.eventBus.$on("update:selected",(function(e){t.active=e===t.name}))}},b=(a(437),Object(o.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return this.active?e("div",{staticClass:"tabs-pane",class:this.classes},[this._t("default")],2):this._e()}),[],!1,null,"687c058f",null).exports),p={components:{"t-button":n.a,"t-tabs":r,"t-tabs-body":v,"t-tabs-head":_,"t-tabs-item":h,"t-tabs-pane":b},mixins:[s.a],data:function(){return{selected:"1",tabsCode:'\n        <t-tabs :selected="selected">\n          <t-tabs-head>\n            <t-tabs-item name="1">Tab 1</t-tabs-item>\n            <t-tabs-item name="2">Tab 2</t-tabs-item>\n            <t-tabs-item name="3">Tab 3</t-tabs-item>\n          </t-tabs-head>\n          <t-tabs-body>\n            <t-tabs-pane name="1">\n              <p>天街小雨润如酥，</p>\n              <p>草色遥看近却无。</p>\n            </t-tabs-pane>\n            <t-tabs-pane name="2">\n              <p>最是一年春好处，</p>\n              <p>绝胜烟柳满皇都。</p>\n            </t-tabs-pane>\n                  <p>韩愈</p>\n              <p>《初春小雨》</p>\n            </t-tabs-pane>\n          </t-tabs-body>\n        </t-tabs>\n      ',disabledTabsCode:'\n        <t-tabs :selected="selected">\n          <t-tabs-head>\n            <t-tabs-item name="1">Tab 1</t-tabs-item>\n            <t-tabs-item name="2">Tab 2</t-tabs-item>\n            <t-tabs-item name="3" disabled>Tab 3</t-tabs-item>\n          </t-tabs-head>\n          <t-tabs-body>\n            <t-tabs-pane name="1">\n              <p>绿树浓阴夏日长，</p>\n              <p>楼台倒影入池塘。</p>\n            </t-tabs-pane>\n            <t-tabs-pane name="2">\n              <p>水晶帘动微风起，</p>\n              <p>满架蔷薇一院香。</p>\n            </t-tabs-pane>\n            <t-tabs-pane name="3">\n              <p>唐·高骈</p>\n              <p>《山亭夏日》</p>\n            </t-tabs-pane>\n          </t-tabs-body>\n        </t-tabs>\n      ',jsCode:"\n        data() {\n          return {\n            selected: '1',\n            // ...\n          }\n        }\n      "}}},f=(a(438),Object(o.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-top":"8px"}},[a("h2",[t._v("简单用法")]),t._v(" "),a("section",[t._m(0),t._v(" "),a("t-tabs",{attrs:{selected:t.selected}},[a("t-tabs-head",[a("t-tabs-item",{attrs:{name:"1"}},[t._v("Tab 1")]),t._v(" "),a("t-tabs-item",{attrs:{name:"2"}},[t._v("Tab 2")]),t._v(" "),a("t-tabs-item",{attrs:{name:"3"}},[t._v("Tab 3")])],1),t._v(" "),a("t-tabs-body",[a("t-tabs-pane",{attrs:{name:"1"}},[a("p",[t._v("天街小雨润如酥，")]),t._v(" "),a("p",[t._v("草色遥看近却无。")])]),t._v(" "),a("t-tabs-pane",{attrs:{name:"2"}},[a("p",[t._v("最是一年春好处，")]),t._v(" "),a("p",[t._v("绝胜烟柳满皇都。")])]),t._v(" "),a("t-tabs-pane",{attrs:{name:"3"}},[a("p",[t._v("韩愈")]),t._v(" "),a("p",[t._v("《初春小雨》")])])],1)],1),t._v(" "),t._m(1),t._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",[a("code",{staticClass:"html"},[t._v(t._s(t.formatCode(t.tabsCode)))])])]),t._v(" "),t._m(2),t._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",[a("code",{staticClass:"js"},[t._v(t._s(t.formatCode(t.jsCode)))])])])],1),t._v(" "),a("section",[a("h2",[t._v("禁止选项卡")]),t._v(" "),t._m(3),t._v(" "),a("t-tabs",{attrs:{selected:t.selected}},[a("t-tabs-head",[a("t-tabs-item",{attrs:{name:"1"}},[t._v("Tab 1")]),t._v(" "),a("t-tabs-item",{attrs:{name:"2"}},[t._v("Tab 2")]),t._v(" "),a("t-tabs-item",{attrs:{name:"3",disabled:""}},[t._v("Tab 3")])],1),t._v(" "),a("t-tabs-body",[a("t-tabs-pane",{attrs:{name:"1"}},[a("p",[t._v("绿树浓阴夏日长，")]),t._v(" "),a("p",[t._v("楼台倒影入池塘。")])]),t._v(" "),a("t-tabs-pane",{attrs:{name:"2"}},[a("p",[t._v("水晶帘动微风起，")]),t._v(" "),a("p",[t._v("满架蔷薇一院香。")])]),t._v(" "),a("t-tabs-pane",{attrs:{name:"3"}},[a("p",[t._v("唐·高骈")]),t._v(" "),a("p",[t._v("《山亭夏日》")])])],1)],1),t._v(" "),t._m(4),t._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",[a("code",{staticClass:"html"},[t._v(t._s(t.formatCode(t.disabledTabsCode)))])])]),t._v(" "),t._m(5),t._v(" "),a("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("pre",[a("code",{staticClass:"js"},[t._v(t._s(t.formatCode(t.jsCode)))])])])],1),t._v(" "),t._m(6)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("HTML代码")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("JS代码")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("HTML代码")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("JS代码")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h2",[t._v("Attributes - 属性")]),t._v(" "),a("p",{staticClass:"des"},[a("span",{staticClass:"code"},[t._v("Tabs")]),t._v("\n      组件依赖于子组件\n      "),a("span",{staticClass:"code"},[t._v("TabsHead")]),t._v(" "),a("span",{staticClass:"code"},[t._v("TabsItem")]),t._v(" "),a("span",{staticClass:"code"},[t._v("TabsBody")]),t._v(" "),a("span",{staticClass:"code"},[t._v("TabsPane")])]),t._v(" "),a("h3",[t._v("Tabs")]),t._v(" "),a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticClass:"des"},[t._v("说明")]),t._v(" "),a("th",{staticClass:"type"},[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("selected")]),t._v(" "),a("td",{staticClass:"des"},[t._v("必要属性：当前选中标签")]),t._v(" "),a("td",{staticClass:"type"},[t._v("String | Number")]),t._v(" "),a("td",[t._v("——")]),t._v(" "),a("td",[t._v("——")])])])])]),t._v(" "),a("h3",[t._v("TabsItem")]),t._v(" "),a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticClass:"des"},[t._v("说明")]),t._v(" "),a("th",{staticClass:"type"},[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",{staticClass:"des"},[t._v("必要属性：唯一标识符。")]),t._v(" "),a("td",{staticClass:"type"},[t._v("String | Number")]),t._v(" "),a("td",[t._v("——")]),t._v(" "),a("td",[t._v("——")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",{staticClass:"des"},[t._v("禁用当前Tab")]),t._v(" "),a("td",{staticClass:"type"},[t._v("Boolean")]),t._v(" "),a("td",[t._v("——")]),t._v(" "),a("td",[t._v("false")])])])])]),t._v(" "),a("h3",[t._v("TabsPane")]),t._v(" "),a("div",{staticClass:"attr"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticClass:"des"},[t._v("说明")]),t._v(" "),a("th",{staticClass:"type"},[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",{staticClass:"des"},[t._v("必要属性：唯一标识符；\n            "),a("p",[t._v("需与 TabsItem 一一对应")])]),t._v(" "),a("td",{staticClass:"type"},[t._v("String | Number")]),t._v(" "),a("td",[t._v("——")]),t._v(" "),a("td",[t._v("——")])])])])])])}],!1,null,"6e650c36",null));e.default=f.exports}}]);
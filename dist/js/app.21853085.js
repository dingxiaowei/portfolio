(function(t){function s(s){for(var i,r,c=s[0],o=s[1],l=s[2],f=0,p=[];f<c.length;f++)r=c[f],e[r]&&p.push(e[r][0]),e[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(s);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,s=0;s<a.length;s++){for(var n=a[s],i=!0,c=1;c<n.length;c++){var o=n[c];0!==e[o]&&(i=!1)}i&&(a.splice(s--,1),t=r(r.s=n[0]))}return t}var i={},e={1:0},a=[];function r(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,s,n){r.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:n})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=o;a.push([6,0]),n()})({0:function(t,s){},6:function(t,s,n){t.exports=n("Vtdi")},"G4v+":function(t,s,n){},Hl4k:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAADjUlEQVRIDbWV21LTUBSGe0iT9BRpAUFBBXHUcRxuuPbG9/BFfDMvvXX0xvE0CgxKYQDTAz0kaXrAb3eH3U3aYnU0k8msZK/9r3/9a62d5POXrxL/50rND3sxvJjfGU/jGm+FZRgjBqkkzoPhhfqeHH2ZhTATmv0gOjlz2bHytlGwMxKiHfROG74fDuvtLj7XoE+BlhvWlnJbq876UjZvGZaZ1ql1w0Gl6p02goOzDgH0Jd2OQ4ObszOP1x3uctGSrrVW1+8OsLNWWkbaulVcX8zdW85/OjzfO2mhkg4q7Th02bGf3l14tFaEqWS3f9JGBBQQ0KYQfWUhC+iSY3HvPCgj1/uD+iT6FeisaSjcI9eD0aHrhf1Bvz+UmtZHfKQU0pMkyK8T9Ce5j6GRAifEhS8KvPnmAiG5xGrFRyR+u1slG7aAfn+1gA0b3TPqa3CRgjTRF9x3uzWFK4WbfPphnzJWXJ8ldKfmdBQ4yjOChsjGTSGf0Nf10QERlNMsA+57J0232SXRxaJJp+qeAppQrK0s2Dx5xRtGemr6hphdb/e+/+xACFpMgL4asSagnRG4UKAZ9Lx070mbIlPDTrfPEq2iaxJB01X0LMtBT/TvX1+mMR6uCFphdYJBEP4BOkUSXT8aKHUYSLQIGhHkct5O21fHWkWdaqRTSRBlxsRAH+UWQcNUSlEqmIgzZw0lChLT2tiIThJqr4DmxQt6SEGhcYIFXOasJPXHn9aikrDWd421pudYxunJnRs0ogquEpw0YEDDMcBwqrdDGlH3iaABYvwYFtmhjBbnie431YYBI06icOIUi03DmDXjp0aLk4/DoVSIRoA09Zsw8L1dzm5vlBhxXuUA62rwcUwN4sc1n9OOcnOS7GyVEZFgpKnXnT3oy6kgz1UE5Mzhv0O1YhqOodnDxdnIE7kZ3O1NcXAzn9VWSIn4TjC6ky5CBEBRT1ZennwwExCXVxya7vl63ARIJcufjDCX/gkQsUGELDpwKrEqZZE/TOWZ3nz2Qr0oo+X3j6p+oxMGvaHo1USiNxiaRopy+QI0/FxpfvzR+FI5P/fCrGU4uYy8yU8Nc5y1Qqfc0OemVUqFDFKwRDZQa3rhKJzwpa/4e2FAXHB/mHj94UzqPhNa7BtdxPDcKw2rl4sYSmKgmTs2SYffQytXGWnqE3Sy2Xfa/ENUq8wFPRUu9rHWDLjhq3L6Z9AKUYX8BWHuLfRPOWmnAAAAAElFTkSuQmCC"},Vtdi:function(t,s,n){"use strict";n.r(s);n("VRzm");var i=n("Kw5r"),e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[n("Header"),n("navigation"),n("StockList",{attrs:{"stocks-list":t.stocksList}})],1)},a=[],r=(n("9d8Q"),function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"more"},[n("span",[t._v("···")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"skins"},[n("span",{staticClass:"up"}),t._m(1)])])])}),c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"search"},[i("div",[i("img",{attrs:{src:n("Hl4k")}}),t._v("点击搜索股票/板块")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("分组管理")]),n("li",[t._v("黑色皮肤")])])}],o={name:"Header",data:function(){return{isShow:!1}},props:{}},l=o,u=(n("yo1V"),n("KHd+")),f=Object(u["a"])(l,r,c,!1,null,"19ef6b0c",null),p=f.exports,v=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"group"},[n("ul",[n("li",{class:{show:t.isActive,hide:t.hasError}},[t._v("全部")]),n("li",[t._v("沪深")]),n("li",[t._v("港股")]),n("li",[t._v("美股")]),n("li",[t._v("场外基金")]),n("li",[t._v("自定义")])])])},h=[],d={name:"navigation",data:function(){return{isActive:!0,hasError:!1}},props:{}},m=d,A=(n("fxJQ"),Object(u["a"])(m,v,h,!1,null,"9c3abf02",null)),_=A.exports,w=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"codeList"},[t._m(0),n("div",[n("ul",{staticClass:"allLists"},t._l(t.list,function(s,i){return n("li",{key:i,staticClass:"lists"},[n("div",{staticClass:"stocksName"},[t._v(t._s(s.name)),n("p",[t._v(t._s(s.code))])]),n("div",{staticClass:"stocksPrice"},[t._v(t._s(s.newPrice))]),n("div",{staticClass:"stocksPercent"},[n("span",{class:[s.colorState]},[t._v(t._s(s.limitPrice))])])])}))])])},g=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("ul",{staticClass:"menu"},[n("li",{staticClass:"edit"},[t._v("编辑")]),n("li",{staticClass:"new"},[t._v("最新价"),n("div",[n("span",{staticClass:"up"}),n("span",{staticClass:"down"})])]),n("li",{staticClass:"limit"},[t._v("涨跌幅"),n("div",[n("span",{staticClass:"up"}),n("span",{staticClass:"down"})])])])])}],x=(n("rGqo"),n("pIFo"),n("KKXr"),{name:"stockList",data:function(){return{list:[]}},methods:{},props:["stocks-list"],created:function(){if(this.stockList&&this.stockList.length){var t="http://web.sqt.gtimg.cn/q=".concat(this.stocksList.join(",")),s=function(t){return(""+t).replace(/[;\s]+$/,"").split(";").map(function(t){var s={},n=(""+t.split('="')[1]).split("~");return["X1","名字","代码","当前价格","昨收","今开","成交量","外盘","内盘","买一","买一量","买二","买二量","买三","买三量","买四","买四量","买五","买五量","卖一","卖一量","卖二","卖二量","卖三","卖三量","卖四","卖四量","卖五","卖五量","最近逐笔成交","时间","涨跌","涨跌%","最高","最低","价格/成交量/成交额","成交量","成交额","换手率","市盈率","X2","最高","最低","振幅","流通市值","总市值","市净率","涨停价","跌停价"].forEach(function(t){s[t]=n.shift()||""}),s["最近逐笔成交"]=(""+s["最近逐笔成交"]).split("|"),s})};this.$http.get(t).then(function(t){var n=s(t.body);this.list=n.map(function(t){var s={name:t["名字"],code:t["代码"],newPrice:t["当前价格"],limitPrice:t["涨跌%"]+"%"},n=parseFloat(t["涨跌%"]);return s.colorState=n>0?"red":n<0?"green":"grey",s})})}}}),C=x,k=(n("ms7Z"),Object(u["a"])(C,w,g,!1,null,"c4a63166",null)),E=k.exports,O={name:"app",components:{Header:p,navigation:_,StockList:E},data:function(){return{stocksList:["sh000001","sz300001","sh600180","sz000729","sz000001","sz300540","sh600150","sz002053"]}},created:function(){}},b=O,j=(n("ZL7j"),Object(u["a"])(b,e,a,!1,null,null,null)),U=j.exports,G=n("KN3F");i["a"].use(G["a"]),i["a"].config.productionTip=!0,new i["a"]({render:function(t){return t(U)}}).$mount("#app")},YaqC:function(t,s,n){},ZL7j:function(t,s,n){"use strict";var i=n("bP1M"),e=n.n(i);e.a},bP1M:function(t,s,n){},fxJQ:function(t,s,n){"use strict";var i=n("sRkE"),e=n.n(i);e.a},ms7Z:function(t,s,n){"use strict";var i=n("YaqC"),e=n.n(i);e.a},sRkE:function(t,s,n){},yo1V:function(t,s,n){"use strict";var i=n("G4v+"),e=n.n(i);e.a}});
//# sourceMappingURL=app.21853085.js.map
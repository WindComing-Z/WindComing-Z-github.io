"use strict";(self["webpackChunkpreject_"]=self["webpackChunkpreject_"]||[]).push([[9740,2600],{2600:function(t,a,s){s.r(a),s.d(a,{default:function(){return n}});var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"clearfix selector"},[a("div",{staticClass:"type-wrap logo"},[a("div",{staticClass:"fl key brand"},[t._v("品牌")]),a("div",{staticClass:"value logos"},[a("ul",{staticClass:"logo-list"},t._l(t.trademarkList,(function(s){return a("li",{key:s.tmId,on:{click:function(a){return t.setTMinfo(`${s.tmId}:${s.tmName}`)}}},[t._v(" "+t._s(s.tmName)+" ")])})),0)]),t._m(0)]),t._l(t.attrsList,(function(s){return a("div",{key:s.attrId,staticClass:"type-wrap"},[a("div",{staticClass:"fl key"},[t._v(t._s(s.attrName))]),a("div",{staticClass:"fl value"},[a("ul",{staticClass:"type-list"},t._l(s.attrValueList,(function(r){return a("li",{key:r,on:{click:function(a){return t.setAttr(`${s.attrId}:${r}:${s.attrName}`)}}},[a("a",[t._v(t._s(r))])])})),0)]),a("div",{staticClass:"fl ext"})])}))],2)},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"ext"},[a("a",{staticClass:"sui-btn",attrs:{href:"javascript:void(0);"}},[t._v("多选")]),a("a",{attrs:{href:"javascript:void(0);"}},[t._v("更多")])])}],i={name:"SearchSelector",props:["attrsList","trademarkList"],methods:{setTMinfo(t){this.$emit("setTM",t)},setAttr(t){this.$emit("setAttr",t)}}},c=i,o=s(1001),l=(0,o.Z)(c,r,e,!1,null,"e9ceec02",null),n=l.exports},9740:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var r=function(){var t=this,a=t._self._c;return a("div",[a("TypeNav"),a("div",{staticClass:"main"},[a("div",{staticClass:"py-container"},[a("div",{staticClass:"bread"},[t._m(0),a("ul",{staticClass:"fl sui-tag"},[t.searchParams.categoryName?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchParams.categoryName)),a("i",{on:{click:function(a){return t.clearQuery()}}},[t._v("×")])]):t._e(),t.searchParams.keyword?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchParams.keyword)),a("i",{on:{click:function(a){return t.clearParams()}}},[t._v("×")])]):t._e(),t.searchParams.trademark?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchParams.trademark.split(":")[1])),a("i",{on:{click:function(a){return t.cleartrademark()}}},[t._v("×")])]):t._e(),t._l(t.searchParams.props,(function(s,r){return a("li",{key:s,staticClass:"with-x"},[t._v(" "+t._s(s.split(":")[1])),a("i",{on:{click:function(a){return t.clearPropsItem(r)}}},[t._v("×")])])}))],2)]),a("SearchSelector",{attrs:{attrsList:t.showList.attrsList,trademarkList:t.showList.trademarkList},on:{setTM:t.setTM,setAttr:t.setAttr}}),a("div",{staticClass:"details clearfix"},[a("div",{staticClass:"sui-navbar"},[a("div",{staticClass:"navbar-inner filter"},[a("ul",{staticClass:"sui-nav"},[a("li",{class:"1"===t.ordertype?"active":""},[a("a",{on:{click:function(a){return t.changeOrder("1")}}},[t._v("综合 "),a("i",{staticClass:"iconfont",class:"1"===t.ordertype&&"asc"===t.orderSort?" icon-up":"icon-down"})])]),a("li",{class:"2"===t.ordertype?"active":""},[a("a",{on:{click:function(a){return t.changeOrder("2")}}},[t._v("价格 "),a("i",{staticClass:"iconfont",class:"2"===t.ordertype&&"asc"===t.orderSort?" icon-up":"icon-down"})])])])])]),a("div",{staticClass:"goods-list"},[a("ul",{staticClass:"yui3-g"},t._l(t.showList.goodsList,(function(s){return a("li",{key:s.id,staticClass:"yui3-u-1-5"},[a("div",{staticClass:"list-wrap"},[a("div",{staticClass:"p-img"},[a("router-link",{attrs:{to:{name:"detail",params:{skuid:s.id}}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.defaultImg,expression:"goods.defaultImg"}]})])],1),a("div",{staticClass:"price"},[a("strong",[a("em",[t._v("¥")]),a("i",[t._v(t._s(s.price))])])]),a("div",{staticClass:"attr"},[a("a",{attrs:{target:"_blank",href:"item.html",title:"促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"},domProps:{innerHTML:t._s(s.title)}})]),t._m(1,!0),t._m(2,!0)])])})),0)]),a("Pagination",{attrs:{pageNo:t.searchParams.pageNo,totalPages:t.totalPages,showPageCount:t.showPageCount},on:{changePageNo:t.changePageNo}})],1)],1)])],1)},e=[function(){var t=this,a=t._self._c;return a("ul",{staticClass:"fl sui-breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("全部结果")])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"commit"},[a("i",{staticClass:"command"},[t._v("已有"),a("span",[t._v("2000")]),t._v("人评价")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"operate"},[a("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[t._v("加入购物车")]),a("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[t._v("收藏")])])}],i=(s(7658),s(2600)),c=s(7877),o={name:"Search",mounted(){this.getList()},data(){return{searchParams:{category1Id:null,category2Id:null,category3Id:null,categoryName:"",keyword:"",order:"1:desc",pageNo:1,pageSize:5,props:[],trademark:""},showList:[],index:1,showPageCount:3,totalPages:0}},components:{SearchSelector:i["default"]},computed:{orderSort(){return this.searchParams.order.split(":")[1]},ordertype(){return this.searchParams.order.split(":")[0]}},watch:{$route:{deep:!0,immediate:!0,handler(){this.replaceParams()}},searchParams:{deep:!0,handler(){this.getList()}},index:{handler(t){this.searchParams.pageNo=t}}},methods:{async getList(){try{let t=await(0,c.getSearchList)(this.searchParams);this.showList=t,this.totalPages=t.totalPages}catch(t){console.log(t.message)}},replaceParams(){const{category1Id:t,category2Id:a,category3Id:s,categoryName:r}=this.$route.query,{keyword:e}=this.$route.params;this.searchParams={...this.searchParams,category1Id:t,category2Id:a,category3Id:s,categoryName:r,keyword:e}},setTM(t){this.searchParams.trademark=t},setAttr(t){this.searchParams.props.includes(t)||this.searchParams.props.push(t)},changeOrder(t){if(t===this.ordertype){let t="asc"===this.orderSort?"desc":"asc";this.searchParams.order=this.ordertype+":"+t}else this.searchParams.order=t+":desc"},changePageNo(t){this.searchParams.pageNo=t},clearQuery(){this.$router.push({name:"search",query:{},params:this.$route.params})},clearParams(){this.$router.push({name:"search",params:{},query:this.$route.query}),this.$bus.$emit("clearKeyword")},cleartrademark(){this.searchParams.trademark=""},clearPropsItem(t){this.searchParams.props.splice(t,1)}}},l=o,n=s(1001),d=(0,n.Z)(l,r,e,!1,null,"01c54cfc",null),u=d.exports}}]);
//# sourceMappingURL=9740.89e4bc8b.js.map
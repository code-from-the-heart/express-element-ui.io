(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["nhccommon"],{"18fc":function(e,t,a){},"2ea2":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("section",{staticClass:"nhc-page-module"},[a("nhc-sys-error",{attrs:{btnName:"返回首页",ckFn:e.gotoHome}})],1)])},l=[],o={name:"404Test",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{gotoHome:function(){console.log("go home")}},filters:{}},c=o,i=a("2877"),s=Object(i["a"])(c,n,l,!1,null,"5a6b90b2",null);t["default"]=s.exports},"3b8c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("section",{staticClass:"nhc-page-module"},[a("nhc-sys-tips",[a("p",[e._v("系统异常...")])]),a("nhc-sys-tips",{attrs:{tipsType:"no-content"}},[a("p",[e._v("暂无数据...")])])],1)])},l=[],o={name:"sys-tips",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{},filters:{}},c=o,i=a("2877"),s=Object(i["a"])(c,n,l,!1,null,"3a79399a",null);t["default"]=s.exports},"4fd7":function(e,t,a){"use strict";var n=a("18fc"),l=a.n(n);l.a},"5f7d":function(e,t,a){"use strict";var n=a("b6f6"),l=a.n(n);l.a},"9cca":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"home-wrapper"},[a("section",{staticClass:"home-wrapper--nav"},[a("section",{staticClass:"section"},[a("p",[e._v("svg demo")]),a("nhc-svg-icon",{attrs:{className:"svg-demo-class","icon-name":"brain-logo"}})],1),a("section",{staticClass:"section"},[a("span",{staticClass:"demo",on:{click:function(t){e.dialogVisible=!0}}},[e._v("点击弹窗，测试移动指令")])])]),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"提示",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("span",[e._v("这是一段信息")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},l=[],o={name:"home",components:{},props:{},data:function(){return{dialogVisible:!1}},computed:{},watch:{},created:function(){},methods:{handleClick:function(e){this.$router.push({path:e.src})}},filters:{}},c=o,i=(a("5f7d"),a("2877")),s=Object(i["a"])(c,n,l,!1,null,"6596b69e",null);t["default"]=s.exports},b6f6:function(e,t,a){},fe9d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("section",{staticClass:"search nhc-page-module"},[a("nhc-search",{ref:"searchForm",attrs:{"search-list":e.searchConfig},on:{search:e.handleSearch,reset:e.handleResetClick}})],1),a("section",{staticClass:"nhc-table-list nhc-page-module"},[a("nhc-table",{attrs:{"table-data":e.list,"table-config":e.tableConfig,"col-configs":e.colConfigs,"table-loading":e.loading},on:{select:e.handleSelect}},[a("el-table-column",{attrs:{slot:"opts",label:"操作",minWidth:"250",fixed:"right"},slot:"opts",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{staticClass:"nhc-table__btn",attrs:{type:"text",size:"small",disabled:!(0===n.createStatus||1===n.createStatus)},on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),a("el-button",{staticClass:"nhc-table__btn",attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleGoDetail(n)}}},[e._v("查看")]),a("el-button",{staticClass:"nhc-table__btn",attrs:{type:"text",size:"small",disabled:!(1===n.createStatus)},on:{click:function(t){return e.handleRest(n)}}},[e._v("重置密码")]),a("el-button",{staticClass:"nhc-table__btn",attrs:{type:"text",size:"small",loading:n.loading,disabled:!(1===n.createStatus||2===n.createStatus)},on:{click:function(t){return e.handleDelete(n)}}},[e._v("删除")])]}}])})],1),a("nhc-pagination",{attrs:{"current-page":e.form.page+1,"page-size":e.form.size,total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1),a("nhc-buttom-bar",[a("el-button",{attrs:{type:"primary",size:"small"}},[e._v("提交")]),a("el-button",{attrs:{size:"small"}},[e._v("返回")])],1)],1)},l=[],o=(a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),{props:{colConfig:Object,default:function(e){return{}}},template:'\n    <el-table-column :label="colConfig.label" show-overflow-tooltip v-bind="colConfig">\n      <span slot-scope="{ row }" :style="setStatusColor(row[\'createStatus\'])">\n        {{setStatusStr(row[\'createStatus\'])}}\n      </span>\n    </el-table-column>\n  ',methods:{setStatusColor:function(e){var t=new Map([[0,"color:#1AD0E1;"],[1,"color:#48BD0F;"],[2,"color:#FF7374;"],["default","color:#606266;"]]);return t.get(e)||t.get("default")},setStatusStr:function(e){var t=new Map([[0,"开通中"],[1,"已开通"],[2,"开通失败"],["default","--"]]);return t.get(e)||t.get("default")}}}),c={props:{colConfig:Object,default:function(e){return{}}},template:'\n  <el-table-column :label="colConfig.label" show-overflow-tooltip v-bind="colConfig">\n      <span style="color: #1877f1;cursor: pointer;" slot-scope="{ row }" @click="gotoChildSys(row)">\n        {{ row[\'accessUrl\'] }}\n      </span>\n    </el-table-column>',methods:{gotoChildSys:function(e){var t=e.accessUrl;window.open(t,"_blank")}}},i={name:"nhcTableDemo",components:{},props:{},data:function(){return{searchConfig:[{label:"委办局",name:"deptName",attrs:{filterable:!0,placeholder:"请输入关键词进行搜索",clearable:!0},options:[{label:"广州",value:0},{label:"深圳",value:1},{label:"上海",value:2},{label:"北京",value:3},{label:"广州市天河区棠下",value:4}],component:"select",value:0},{label:"负责人",name:"principal",attrs:{type:"text",placeholder:" 请输入关键词进行搜索",clearable:!0},component:"input",value:"nhc"},{label:"部门名称",name:"depName",attrs:{type:"text",placeholder:" 请输入关键词进行搜索",clearable:!0},component:"input"},{label:"部门编码",name:"depCode",attrs:{type:"text",placeholder:" 请输入关键词进行搜索",clearable:!0},component:"input"},{label:"日期",name:"createTime",attrs:{align:"right",type:"date",placeholder:"请选择日期",clearable:!0},component:"date-picker",value:"2020-04-05"},{label:"格式化日期",name:"createTime1",attrs:{align:"right",type:"date",placeholder:"请选择日期",clearable:!0,format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},component:"date-picker",value:""},{label:"快捷键日期",name:"createTime2",attrs:{align:"right",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:!0,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","picker-options":this.pickerOptions()},component:"date-picker",value:""},{label:"日期范围",name:"createTimeDaterange",attrs:{align:"right",type:"daterange",placeholder:"请选择日期",clearable:!0},component:"date-picker"},{label:"年级",name:"radioName",attrs:{align:"right"},component:"radio"}],form:{page:0,size:20},total:20,list:[{deptName:"政法委",principalName:"纳海川",principalPhone:"12345678911",managerAccount:"acc",accessUrl:"https://www.baidu.com/",createTime:"2020-05-21",createStatus:0}],loading:!1}},computed:{tableConfig:function(){return{"cell-class-name":"nhc-table-wrapper"}},colConfigs:function(){return[{label:"序号",type:"selection",minWidth:50},{label:"序号",type:"index",minWidth:50},{label:"委办局",prop:"deptName",minWidth:200},{label:"负责人",prop:"principalName",minWidth:80},{label:"联系电话",prop:"principalPhone",minWidth:110},{label:"管理账号",prop:"managerAccount",minWidth:90},{label:"访问地址",prop:"accessUrl",minWidth:260,component:c},{label:"接入时间",prop:"createTime",minWidth:160},{label:"状态",prop:"createStatus",minWidth:80,component:o},{slot:"opts"}]}},watch:{},created:function(){},mounted:function(){},methods:{init:function(){},handleSelect:function(e,t){console.log(e)},pickerOptions:function(){return{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}},handleEdit:function(){console.log("编辑")},handleGoDetail:function(){console.log("详情")},handleRest:function(){console.log("重置")},handleDelete:function(){console.log("删除")},handleSearch:function(e){this.form=Object.assign({},this.form,e),console.log(this.form)},handleResetClick:function(e){console.log(this.form)},handleSizeChange:function(e){this.form.size=e,this.form.page=0,this.init()},handleCurrentChange:function(e){this.form.page=e-1,this.init()}},filters:{}},s=i,r=(a("4fd7"),a("2877")),u=Object(r["a"])(s,n,l,!1,null,"9ad6b166",null);t["default"]=u.exports}}]);
var id = T.p("examTestId");

/*var examItem = Vue.extend({
    name: 'exam-item',
    props: {
    	item:{},
	},
    template: [
			'<div class="layui-colla-item">',
				'<h2 class="layui-colla-title">',
					'题目标题：{{item.title}}' ,
					'<div style="float: right; width: 300px" >' ,
						'<div class="layui-col-xs4">',
							'题目分数:{{item.score}}',
						'</div>',
						'<div class="layui-col-xs8">',
							'<span style="padding-left: 40px" v-if="item.status==1" class="glyphicon glyphicon-ok" aria-hidden="true">&nbsp;&nbsp;正确</span>',
							'<span style="padding-left: 40px" v-if="item.status==0" class="glyphicon glyphicon-remove" aria-hidden="true">&nbsp;&nbsp;错误</span>',
							'<span style="padding-left: 40px" v-if="item.status!=0&&item.status!=1" aria-hidden="true">&nbsp;&nbsp;未提交</span>',
						'</div>',
					'</div>',
				'</h2>',
				'<div class="layui-colla-content">',
					'<div v-html="item.context"></div>',
				'</div>',
			'</div>',
	].join('')
});*/
var examItem = Vue.extend({
    name: 'exam-item',
    props: {
        item:{},
    },
    template: [
        '<div class="panel panel-danger" v-if="item.status == 0 ">',
			'<div class="panel-heading">' ,
				'题目标题：{{item.title}}' ,
				'<div style="float: right; width: 300px" >' ,
					'<div class="layui-col-xs4">',
						'题目分数:{{item.score}}',
					'</div>',
					'<div class="layui-col-xs8">',
						'<span style="padding-left: 40px" v-if="item.status == 0 " class="glyphicon glyphicon-remove" >&nbsp;&nbsp;错误</span>',
					'</div>',
				'</div>',
			'</div>',
			'<div class="panel-body">',
            	'<div v-html="item.context"></div>',
			'</div>',
        '</div>',
        '<div class="panel panel-success" v-else-if="item.status == 1 ">',
			'<div class="panel-heading">',
				'题目标题：{{item.title}}',
			'<div style="float: right; width: 300px" >' ,
				'<div class="layui-col-xs4">',
					'题目分数:{{item.score}}',
				'</div>',
				'<div class="layui-col-xs8">',
					'<span style="padding-left: 40px" v-if="item.status == 1 " class="glyphicon glyphicon-ok" >&nbsp;&nbsp;正确</span>',
				'</div>',
			'</div>',
        '</div>',
        '<div class="panel-body">',
			'<div v-html="item.context"></div>',
        		'<div v-html="item.context"></div>',
			'</div>',
        '</div>',
        '<div class="panel panel-default" v-else-if="item.status == 2 " >',
			'<div class="panel-heading">' ,
				'题目标题：{{item.title}}',
				'<div style="float: right; width: 300px" >' ,
					'<div class="layui-col-xs4">',
						'题目分数:{{item.score}}',
					'</div>',
					'<div class="layui-col-xs8">',
						'<span style="padding-left: 40px" v-if="item.status == 2 "  >&nbsp;&nbsp;未提交</span>',
					'</div>',
				'</div>',
			'</div>',
			'<div class="panel-body">',
            	'<div v-html="item.context"></div>',
			'</div>',
        '</div>'
    ].join('')
});

//注册试卷题目组件
Vue.component('examItem',examItem);

var vm = new Vue({
	el:'#rrapp',
	data:{
		title:'',
		examList:[],
	},
	created: function() {
		if(id != null){
			this.getInfo(id)
		}
    },
	methods: {
		getInfo: function(id){
			$.get("../examtest/exam_test_list?id="+id, function(r){
                vm.examList = r.list;
            });
		},
		back: function (event) {
			history.go(-1);
		}
	}
});
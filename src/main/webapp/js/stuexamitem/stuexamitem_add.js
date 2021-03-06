var id = T.p("id");
var vm = new Vue({
	el:'#rrapp',
	data:{
		title:"新增",
		stuExamItem:{}
	},
	created: function() {
		if(id != null){
			this.title = "修改";
			this.getInfo(id)
		}
    },
	methods: {
		getInfo: function(id){
			$.get("../stuexamitem/info/"+id, function(r){
                vm.stuExamItem = r.stuExamItem;
            });
		},
		saveOrUpdate: function (event) {
			var url = vm.stuExamItem.id == null ? "../stuexamitem/save" : "../stuexamitem/update";
			$.ajax({
				type: "POST",
			    url: url,
			    data: JSON.stringify(vm.stuExamItem),
			    success: function(r){
			    	if(r.code === 0){
						alert('操作成功', function(index){
							vm.back();
						});
					}else{
						alert(r.msg);
					}
				}
			});
		},
		back: function (event) {
			history.go(-1);
		}
	}
});
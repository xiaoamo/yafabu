define(['router','css!modules/Carrental/Carrental.css'],function(app,css){
	//自定义一个服务;
	app.factory('carhide',function () {
		return {
			carBottom:function () {
				$("#tabbar").hide();
			}
		}
	});
	return app.controller('CarrentalController',['$scope','carhide',function($scope,carhide){
		carhide.carBottom();
		$scope.Carrentalfanhui=function(){
			window.location.href = window.location.href.split('#')[0]+'#/home';
			$("#tabbar").show();
		}
	}])
})
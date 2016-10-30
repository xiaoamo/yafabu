define(['router','css!modules/home/home.css','swiper'], function (app,css,swiper) {
	 //angular会自动根据controller函数的参数名，导入相应的服务
	  return app.controller('HomeController',['$scope','$http', '$timeout','scroll',function ($scope,$http,$timeout,scroll) {
	  	$scope.info = '首页内容';
//	  	$http.get('data/home.json').success(function(res){
//      	$scope.data = res;
//		});
	  }]);
	  
	  
});

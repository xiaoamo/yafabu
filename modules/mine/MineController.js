define(['router','css!modules/mine/mine.css','css!modules/mine/iconfonts.css'],function(app,css){
	 return app.controller('MineController',['$scope',function($scope){
	 		$scope.gomine=function(){
	 			$('.mine_erji').fadeOut(300);
	 			$('.mine_more').fadeOut(300);
	 			$('#tabbar').show();
	 		}
	 		$scope.goerji=function(){
	 			$('.mine_erji').fadeIn(350);
	 			$('#tabbar').hide();
	 			
	 		}
	 		$scope.gomore=function(){
	 			$('.mine_more').fadeIn(350);
	 			$('#tabbar').hide();
	 		}
	 }])
})

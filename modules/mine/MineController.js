define(['router','css!modules/mine/mine.css','css!modules/mine/iconfonts.css'],function(app,css){
	 return app.controller('MineController',['$scope',function($scope){
	 		$scope.gomine=function(){
	 			$('.mine_erji').slideUp(400);
	 			$('.mine_more').slideUp(400);
	 			$('.mine_fukuang').slideUp(400);
	 			$('.mine_world').slideUp(400);
	 			$('.mine_chuxing').slideUp(400);
	 			$('.mine_supplement').slideUp(400);
	 			$('.mine_Customer').slideUp(400);
	 			$('.mine_footprint').slideUp(400);
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
	 		$scope.gofukuang=function(){
	 			$('.mine_fukuang').fadeIn(350);
	 			$('#tabbar').hide();
	 		}
	 		$scope.goworld=function(){
	 			$('.mine_world').fadeIn(350);
	 			$('#tabbar').hide();
	 		}
	 		$scope.gochuxing=function(){
	 			$('.mine_chuxing').show();
	 			$('#tabbar').hide();
	 		}
	 		$scope.gosupplement=function(){
	 			$('.mine_supplement').show();
	 			$('#tabbar').hide();
	 		}
	 		$scope.goCustomer=function(){
	 			$('.mine_supplement').show();
	 			$('#tabbar').hide();
	 		}
	 		$scope.gofootprint=function(){
	 			$('.mine_footprint').show();
	 		};
	 		$scope.emmmm=function(){
	 			$('.emmmm').remove();
	 		}
	 		
	 }])
})

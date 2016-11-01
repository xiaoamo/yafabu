define(['router','css!modules/place/place.css'],function(app,css){	
	 //自定义一个服务;
	app.factory('placecss',function () {
		return {
			placeStyle:function () {
				$('.place_left>li').on('click',function () {
					$(this).css('color','#00B081');
					$(this).siblings().css('color','#474B4C');
				})
			}
		}
	});
	 
	 
	return app.controller('placeController',['$scope','$http','placecss',function($scope,$http,placecss){
	 	$http.get('data/Destination.json').success(function(res){
	 		$scope.dataplace=res.data;
	 	});
	 	//为了复用，传参，拼接请求路径
		$scope.tab = function(kind) {
			var str = 'data/placeData/' + kind + '.json'
			$http.get(str).success(function(res) {
				$scope.data1 = res;
			});
		};
	 	$scope.tab('01');
	 	placecss.placeStyle();
	 	
	 	//点击切换搜索
	 	$scope.changesearch=function(){
	 		$('.place_search').css('margin-top','-6.5rem')
	 		setTimeout(function(){
	 			$('.placehide').show();
	 		},200)
	 	}
	 	$scope.chengein=function(){
	 		$('.place_search').css('margin-top','0')
	 		$('.placehide').hide();
	 	}
	 	
	 	
	 }])
})
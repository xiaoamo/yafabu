define(['router','css!modules/home/home.css','swiper'], function (app,css,swiper) {
	//自定义一个服务;
	app.factory('scroll',function () {
		return {
			scrollToBottom:function () {
				$(window).on('scroll',function () {
					if(document.body.scrollTop > 40){
						$('.home_top').css('background','url(img/homebg.jpg)');
					}else{
						$('.home_top').css('background',' rgba(0, 0, 200, 0)');
					}
				})
			}
		}
	});
    return app.controller('HomeController',['$scope','$http', '$timeout','scroll',function ($scope,$http,$timeout,scroll) {
        $scope.info = '首页内容';
        $http.get('data/home.json').success(function(res){
        	$scope.datanav = res.data.bar;
        	$scope.datapromo=res.data.promo;
        	$scope.dataGars=res.data.gears;
        	$scope.hotTopic=res.data.hot_topic;
		});
		 $http.get('data/like_1.json').success(function(res){
		 	$scope.love=res.data
		 });
        //使用swiper插件需要使用angular的定时器
		$timeout(function(){
			$scope.swiper =  new Swiper(".swiper-container",{
        		loop : true,
        		pagination: '.swiper-pagination',
        		autoplay:2000,
        		autoplayDisableOnInteraction:false
        	});
		},0)
		scroll.scrollToBottom();
	}])
});


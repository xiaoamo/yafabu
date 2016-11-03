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
		//点击跳转
		$scope.Jumptocar=function(x){
			var i = $scope.datanav.indexOf(x);
			if(i==7){
				window.location.href = window.location.href.split('#')[0]+'#/Carrental';	
			}else if(i==3){
				window.location.href = window.location.href.split('#')[0]+'#/citycard';	
			}else if(i==2){
				window.location.href = window.location.href.split('#')[0]+'#/cityfun';	
			}else if(i==6){
				window.location.href = window.location.href.split('#')[0]+'#/citywalk';	
			}
		}
		
		//跳转搜索页面
		$scope.searchGo=function(){
			$('#homesearch').show();
			$('#home').slideUp(1000);
		}
		$scope.searchOut=function(){
			$('#homesearch').slideUp(500);
			$('#home').show();
		}
		//查看更多跳转
		$scope.hometocitywalk=function(){
			window.location.href = window.location.href.split('#')[0]+'#/citywalk';	
			$('#tabbar').hide();
		}
		
		
		
	}])
});


define(['router','css!modules/citycard/citycard.css','swiper'],function(app,css,swiper){
	//自定义一个服务;
	app.factory('cardhide',function () {
		return {
			carBottom:function () {
				$("#tabbar").hide();
			}
		}
	});
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
	return app.controller('citycardController',['$scope','cardhide','$timeout','scroll',function($scope,cardhide,$timeout,scroll){
		cardhide.carBottom();
		$scope.Cardfanhui=function(){
			window.location.href = window.location.href.split('#')[0]+'#/home';
			$("#tabbar").show();
		}
		
		//签证轮播图
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
})
define(['router','css!modules/cityfun/cityfun.css'],function(app,css){
	app.service("funService",["$http",function($http){
		this.get=function(){
			return $http.get("data/cityfun.json");
		};
	}]);
	app.factory("cityFun",[function(){
		return {
			bannerAnimation:function(){
				var num=0;
				function animateBanner(){
					num++;
					$(".cityFun .funBanner ul").animate({
						left: -num*25+"rem"
					},300,"linear",function(){
						if(num==5){
							num=0;
							$(".cityFun .funBanner ul").css({
								left: 0
							});
						}
						$(".cityFun .funBanner .point div").css({
							opacity: 0.5
						});
						$(".cityFun .funBanner .point div").eq(num).css({
							opacity: 1
						});
					});
				}
				var time1=setInterval(animateBanner,2500);
				$(".cityFun .funBanner ul").on("swipeLeft",function(){
					clearInterval(time1);
					num++;
					$(this).animate({
						left: -num*25+"rem"
					},300,"linear",function(){
						if(num==5){
							num=0;
							$(this).css({
								left: 0
							});
						}
						$(".cityFun .funBanner .point div").css({
							opacity: 0.5
						});
						$(".cityFun .funBanner .point div").eq(num).css({
							opacity: 1
						});
					});
					time1=setInterval(animateBanner,2500);
				});
				$(".cityFun .funBanner ul").on("swipeRight",function(){
					clearInterval(time1);
					num--;
					if(num==-1){
						num=4;
						$(this).css({
							left: -125+"rem"
						});
					}
					$(this).animate({
						left: -num*25+"rem"
					},300,"linear",function(){
						$(".cityFun .funBanner .point div").css({
							opacity: 0.5
						});
						$(".cityFun .funBanner .point div").eq(num).css({
							opacity: 1
						});
					});
					time1=setInterval(animateBanner,2500);
				});
			}
		};
	}]);
	return app.controller('cityfunController',["$scope","funService","cityFun",function($scope,funService,cityFun){
		$scope.flag=true;
		$scope.index=0;
		funService.get().success(function(res){
			//轮播图的数据
			$scope.bannerData=res.data.head_slide.slide_data;
			//轮播图第一张图片
			$scope.bannerData1=res.data.head_slide.slide_data[0].cover;
			//地区分类的数据
			$scope.typeData=res.data.bar;
			//出行必备的数据
			$scope.tripData=res.data.gears;
			//内容列表的数据
			$scope.listData=res.data.blocks;
			//无缝轮播的实现函数
			cityFun.bannerAnimation();
			$scope.flags=[];
			for(var i=0;i<$scope.typeData.length;i++){
				$scope.flags.push("true");
			}
			$scope.num=0;
			$scope.bered=function(i){
				$scope.num=i;
			};
		});
		$scope.searchFun=function(){
			$scope.flag=!$scope.flag;
			$scope.flag?$(".cityFun").css("overflow",""):$(".cityFun").css("overflow","hidden");
		};
		$scope.click11 = function(obj){
			var i = $scope.typeData.indexOf(obj);
			$(".cityFun .funType .district .title .titleName").css("color","#182021");
			$('.cityFun .funType .district .title').eq(i).find(".titleName").css("color","#42cb94");
			$(".cityFun .funType .district .title .bottom").hide();
			$('.cityFun .funType .district .title').eq(i).find(".bottom").show();
			$(".cityFun .funType .district .title .country").hide();
			$('.cityFun .funType .district .title').eq(i).find(".country").show();
		};
		$scope.price=function(obj){
			var num=Math.ceil(obj.list_price*parseFloat(obj.lastminute_des)/10);
			return num;
		};
		$scope.gohome=function(){
			window.location.href = window.location.href.split('#')[0]+'#/home';
			$("#tabbar").show();
		}
		
	}]);
});


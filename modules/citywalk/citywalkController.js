define(['router','css!modules/citywalk/citywalk.css'],function(app,css){
	app.service("plateTypeService",["$http",function($http){
		this.get=function(){
			return $http.get("data/plateType.json");
		};
	}]);
	app.service("cityWalkListService",["$http",function($http){
		this.get=function(){
			return $http.get("data/cityWalkList.json");
		};
	}]);
	return app.controller("citywalkController",["$scope","plateTypeService","cityWalkListService",function ($scope,plateTypeService,cityWalkListService){
		$scope.searchFun=function(){
			$(".cityWalk .cityWalkHead input").css("left","1.4rem");
			$(".cityWalk .cityWalkHead span").css("left","8rem");
			$(".cityWalk .cityWalkHead i").hide();
			$(".cityWalk .cityWalkHead p").show();
			$(".cityWalk .cityWalkHead .empty").show();
		};
		$scope.emptyFun=function(){
			$(".cityWalk .cityWalkHead input").css("left","");
			$(".cityWalk .cityWalkHead span").css("left","");
			$(".cityWalk .cityWalkHead i").show();
			$(".cityWalk .cityWalkHead p").hide();
			$(".cityWalk .cityWalkHead .empty").hide();
		};
		$scope.flag1=true;
		$scope.flag2=true;
		$scope.hideorshow1=function(){
			if($scope.flag2){
				$scope.flag1=!$scope.flag1;
			}else{
				$scope.flag2=true;
			}
		};
		$scope.hideorshow2=function(){
			if($scope.flag1){
				$scope.flag2=!$scope.flag2;
			}else{
				$scope.flag1=true;
			}
		};
		plateTypeService.get().success(function(res){
			$scope.plateTypeData=res.mintype;
			$scope.plataTypeTitleName=res.alltype;
		});
		cityWalkListService.get().success(function(res){
			$scope.cityWalkListData=res;
		});
		$scope.pStyleArr=["true","false","false","false"];
		$scope.order="";
		$scope.clickLi=function(num){
			switch(num){
				case 1:$scope.order="";$scope.pStyleArr=["true","false","false","false"];break;
				case 2:$scope.order="-soldCount";$scope.pStyleArr=["false","true","false","false"];break;
				case 3:$scope.order="newPrice";$scope.pStyleArr=["false","false","true","false"];break;
				case 4:$scope.order="-newPrice";$scope.pStyleArr=["false","false","false","true"];break;
				default:break;
			};
			$scope.flag2=true;
		};
		
		$scope.gohome1=function(){
			window.location.href = window.location.href.split('#')[0]+'#/home';
			$("#tabbar").show();
		}
		
	}])
})
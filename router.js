define(['angular', 'angular-route'], function (angular){
	var app = angular.module('webapp',['ngRoute',"me-lazyload"]);
	
	 app.config(['$routeProvider', '$controllerProvider',
	 	function($routeProvider, $controllerProvider){
	 		$routeProvider.
	 		 	when('/home' , {
	 		 		templateUrl: 'modules/home/home.html',
	 		 		controller: 'HomeController'
	 		 	}).
	 		 	when('/order', {
                    templateUrl: 'modules/place/place.html',
                    controller: 'placeController'
                }).
                when('/mine', {
                    templateUrl: 'modules/mine/mine.html',
                    controller: 'MineController'
                }).
                when('/cityfun', {
                    templateUrl: 'modules/cityfun/cityfun.html',
                    controller: 'cityfunController'
                }).
                when('/citywalk', {
                    templateUrl: 'modules/citywalk/citywalk.html',
                    controller: 'citywalkController'
                }).
                when('/Carrental', {
                    templateUrl: 'modules/Carrental/Carrental.html',
                    controller: 'CarrentalController'
                }).
                when('/citycard', {
                    templateUrl: 'modules/citycard/citycard.html',
                    controller: 'citycardController'
                }).
                when('/searchAll', {
                    templateUrl: 'modules/searchAll/searchAll.html',
                    controller: 'searchAllController'
                }).
                
               otherwise({
                    redirectTo: '/home'
                }); 	
		}]);
		
	return app;
});
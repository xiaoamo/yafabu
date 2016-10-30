define(['angular', 'angular-route'], function (angular){
	var app = angular.module('webapp', [
        'ngRoute'
    ]);
	
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
               otherwise({
                    redirectTo: '/home'
                }); 	
		}]);
		
	return app;
});

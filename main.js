require.config({
	paths: {
		jquery:'./libs/jquery-2.2.3',
		angular: './libs/angular.min',
		'angular-route': './libs/angular-route',
		router:'./router',
		css:"./libs/css",
		iscroll:'./libs/iscroll-add-slideDown-slideUp',
		index:"./js/controllers/index",
		zepto:'./libs/zepto',
		HomeController:"modules/home/HomeController",
		cityfunController:"modules/cityfun/cityfunController",
		citywalkController:"modules/citywalk/citywalkController",
		MineController:"modules/mine/MineController",
		placeController:"modules/place/placeController",
		jqueryFly:"./libs/jquery.fly",
		swiper:"./libs/swiper-3.3.1.min",
		"me-lazyload":"./libs/me-lazyload"
	},
	 shim: {
	 	angular: {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'angular-route'
        },
        jqueryFly: {
            deps: ['jquery']
        },
        swiper:{
        	deps:['jquery'],
        	exports: 'swiper'
        },
        "me-lazyload":{
        	deps:['angular'],
        	exports: 'me-lazyload'
        }
	 }
});

require(['jquery','swiper','angular','index',"me-lazyload",'router','HomeController','cityfunController','citywalkController','MineController','placeController'],function(jquery,swiper,angular,index,meLazyload){
	index.index();
	angular.bootstrap(document, ['webapp']);
})
//配置文件无法更改  ！！！！！
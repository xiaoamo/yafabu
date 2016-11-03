/*
 * Created by Administrator on 2016/10/28.
 */
define(['jquery','zepto'],function ($,zepto) {
    setTimeout(function () {
        $('#mask-image').fadeOut(700);
    },3000);
    function index() {
        $("#tabbar ul li").on("tap",function () {
            $("#tabbar ul li a .icon").attr("id","");
            $(this).find(".icon").attr("id","icon");
        });
        document.documentElement.style.fontSize = window.innerWidth/25 + "px";
        $(window).on("resize",function () {
            document.documentElement.style.fontSize = window.innerWidth/25 + "px";
        });
    }
    return {
        index:index
    }
    
    //预加载
    function loading(arr,callBack){
		var arr1 = [];
		//把所有传进来的图片的地址变成img对象
		for (var i = 0; i < arr.length; i++) {
			var imgObj = new Image();
			imgObj.src = arr[i];
			arr1.push(imgObj);
		}
		
		var count = 0;
		//当所有图片加在完成之后就可以回调
		for (var j = 0; j < arr1.length; j++) {
			console.log(arr1[j]);
			arr1[j].onload = function(){
				count++;
				if (count == arr1.length) {
					callBack();
					arr1 = [];
				}
			}
		}
	}

    
    
    
});

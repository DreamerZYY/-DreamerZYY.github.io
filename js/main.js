// JavaScript Document
function hAndW(){
		var liH=$(".title ul li").height();
		var titleH=$(".title").height();
		$(".title ul li").css("lineHeight",titleH+"px");
		$(".left").css("lineHeight",titleH+"px");
}
function getData(){
	var city=encodeURI("北京");
	jQuery.support.cors=true;
	$.ajax({
		url:"http://www.wisepeak.com:8888/getWeatherByCity.aspx?City="+city+"&UserName=whq&PassWord=123456&action=getWeather&random="+Math.random(999),
		dataType:"json",
		type:"GET",
		cache:false,
		crossDomain: true, 
		async:false,
		success: function(data){
			//alert("aaa");
			var rel=data.result;
			var imgs = rel.img;
            imgs = "http://www.wisepeak.com:8888/icon/blue/" + imgs + ".png";//blue---> orange  //天气图片(蓝色、橙色);
			var pm=rel.aqi.ipm2_5;
			var quantity=rel.aqi.quality;
			var temp=rel.temp;
			var city=rel.city;
			var weather=rel.weather;
			var temphigh=rel.temphigh;
			var templow=rel.templow;
			$(".bottom img").attr("src",imgs);
			$(".status").html("<span>"+weather+templow+"℃~"+temphigh+"℃</span>");
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown);
		}
	});
}
function alertPic(){
	$(".wechatCode img").mouseover(function(){
		//$(".code").css("display","block");
		$(".code").fadeIn(1000);
	});
	$(".wechatCode img").mouseout(function(){
		//$(".code").css("display","none");
		$(".code").fadeOut();
	})
}

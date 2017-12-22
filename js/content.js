// JavaScript Document
function showContent(){
	var a=window.location.href;
	var urlArr=a.split("#");
	var urlNum=urlArr[1];
	for(var i=0;i<$("li").length;i++){
		$(".contentName li").eq(i).css("display","none");
		if($("li").eq(i).attr("id")==urlNum){
			$("li").eq(i).css("display","block");
		}
	}
}
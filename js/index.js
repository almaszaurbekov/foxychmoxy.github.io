let c = new homeController(sections);

$(document).ready(function(){
	$(".menu-burger").click(function (){
		if($(this).attr("data-toggle") == 0){
			$(".menu").fadeToggle();
			$(this).attr("data-toggle", 1);
		} else{
			$(".menu").fadeToggle();
			$(this).attr("data-toggle", 0);
		}
	});

	$(".mbtn").hover(function(){
		var color = $(this).css('color');
		$(".yy").css("background", color);
	}, function(){
		var color = $(this).css('color');
		$(".yy").css("background", "#E1E2E2");
	});
});


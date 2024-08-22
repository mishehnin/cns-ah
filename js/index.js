(function(){

})();

$(function(){

	new FadeAdver({
		btns : $(".banner .btns span"),
		divs : $(".banner .pics li"),
		speed : 5000
	});

	if($(".hr_mar li").length>=5){
		new TextSlider({
			"outer" : $(".hr_mar"),
			"inner" : $(".hr_mar ul"),
			direction : "top"
		});
	}

	if($(".ad_slider1 li").length>=4){
		new TextSlider({
			"outer" : $(".ad_slider1"),
			"inner" : $(".ad_slider1 ul"),
			direction : "left"
		});
	}

	if($(".ad_slider2 li").length>=4){
		new TextSlider({
			"outer" : $(".ad_slider2"),
			"inner" : $(".ad_slider2 ul"),
			direction : "left"
		});
	}

	$('.hspe_slider ul').carouFredSel({
			auto : {				
					timeoutDuration: 5000
				},
			direction : "left",
			prev : ".hspe_slider .pre",
			next : ".hspe_slider .next",
			scroll: 1
		});

});	
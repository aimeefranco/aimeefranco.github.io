$(document).ready (function(){

	var covertext = $('.covertext').offset().top;
	var height = $('.covertext').outerHeight();

	console.log(covertext);

	$(window).scroll(function(e){
		var distance = (height/1.75) - $(window).scrollTop();
		var opacity = distance / 200;
			$('.covertext').stop().fadeTo(100, opacity);
	});
	
});

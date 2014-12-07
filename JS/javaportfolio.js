$(document).ready (function(){

	$('.photoset-grid').photosetGrid({
    	width: '75%',
    	gutter: '5px',
    });

	var covertext = $('.covertext').offset().top;
	var height = $('#titleblock').outerHeight();

	console.log(covertext);

	$(window).scroll(function(){
		var distance = height - $(window).scrollTop();
		var opacity = distance / 250;
			$('.covertext').stop().fadeTo(100, opacity);
	

		if ($(window).scrollTop() > height){
			$('#empty').css({
				'display':'block',
				'position':'fixed'
			});
		}

		else {
				$('#empty').css({
				'display':'none'
				});
			}
		
	});
});

				/*if ($(window).scrollTop() > $('.covertext').outerHeight()+265){
			$('#empty').css({
				'display':'block'
			});
		}
		else{
			$('#empty').css({
			'display':'none'
			});

		animate({opacity : 1.0}, 'fast', function(e) {
			$(window).scrollTop() 
		})
		}*/

$('#importThing').data("spy", "scroll")

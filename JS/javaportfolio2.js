var covertext, 
    height, 
    navheight;

$(document).ready (function(){
	
	calcHeights();
	navAppear();


	$('.photoset-grid').photosetGrid({
    	width: '75%',
    	gutter: '5px',
    });

	console.log(covertext);
	console.log(navheight);

	$(window).resize(function(){
		calcHeights();
		navAppear();
	});

	$(window).scroll(function(){
		var distance = height - $(window).scrollTop();
		var opacity = distance / 250;
			$('.covertext').stop().fadeTo(100, opacity);
	
		navAppear();	
	});
});

function calcHeights()
{
	covertext = $('.covertext').offset().top;
	height = $('#titleblock').outerHeight();
	navheight = $('#empty').outerHeight();
}

function navAppear(){
	if ($(window).scrollTop() > (height - navheight)){
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
}
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

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

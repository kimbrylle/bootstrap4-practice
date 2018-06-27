;(function(window, document, $, undefined) {

	'use strict';
	$('.work-slide .row').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		draggable: false,
		infinite: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.slick-prev').text('<');
	$('.slick-next').text('>');

	$(window).resize(function(){
		$('.slick-prev').text('<');
		$('.slick-next').text('>');
	});

	$(".back-to-top").click(function() {
		$('html,body').animate({ scrollTop: $("#header").offset().top},
		'slow');
	});

})(window, document, jQuery);
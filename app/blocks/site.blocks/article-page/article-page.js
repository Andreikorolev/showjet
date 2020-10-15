// $(window).scroll(function(){
// 	var windowScrollTop = $(window).scrollTop();
// 	if (windowScrollTop > 250 && windowScrollTop < ($('.article').height() + $(".article").offset().top) - $(".header").height() - $(".article__soc-buttons").height()) {
// 		$(".article__soc-buttons").addClass('fixed');
// 	} else {
// 		$(".article__soc-buttons").removeClass('fixed');
// 	}
// });
var articlePageTiles = new Swiper('.article-page__tiles-slider', {
	direction: 'horizontal',
	speed: 1000,
	// slidesPerView: 5,
	// slidesPerGroup: 5,
	slidesOffsetAfter: 10,
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
		1280: {
			slidesPerView: 5,
			slidesPerGroup: 5,
		},
		1920: {
			slidesPerView: 5,
			slidesPerGroup: 5,
		}
	},
});
var searchSlider = new Swiper('.search-page__slider', {
	direction: 'horizontal',
	speed: 1000,
	slidesPerView: 5,
	slidesPerGroup: 5,
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
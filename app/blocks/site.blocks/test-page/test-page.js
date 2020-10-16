var testSLider = new Swiper('.tiles-list__slider', {
	direction: 'horizontal',
	speed: 1000,
	slidesPerView: 5,
	slidesPerGroup: 5,
	slidesOffsetAfter: 10,
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

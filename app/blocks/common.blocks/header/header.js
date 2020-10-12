$('.nav__menu a').each(function () {
	if (this.href == location.href) $(this).addClass('active');
});

$(window).scroll(function(){
	if ($(window).scrollTop() > 86) {
		$(".header").addClass('fixed');
	} else {
		$(".header").removeClass('fixed');
	}
});
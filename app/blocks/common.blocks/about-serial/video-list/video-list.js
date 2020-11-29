var seasonNumber = $(".video-list__season-wrap").length;

$(".video-list__season-wrap").each(function(index) {
	var sliderName = 'slider-' + (index + 1);
	var targetEl = '#season-' + (index + 1);

	var sliderName = new Swiper(targetEl, {
	  direction: 'horizontal',
	  speed: 1000,
	  slidesPerView: 5,
	  slidesPerGroup: 5,
	  navigation: {
	    prevEl: '.slider-button-prev',
	    nextEl: '.slider-button-next',
	  },
	});	
});

$(".video-list__season-navitaion-item").click(function(){
	$(".video-list__season-navitaion-item").each(function() {
		$(this).removeClass("active");
	});
	$(".video-list__season-wrap").addClass('hide');

	$(this).addClass("active");
	var targetTab = $(this).attr("data-target");
	$("#" + targetTab).removeClass('hide');
});

$(window).on('load', function() {
	$(".video-list__season-wrap").addClass('hide');
	var targetTab = $(".video-list__season-navitaion-item.active").attr("data-target");
	$("#" + targetTab).removeClass('hide');	
});
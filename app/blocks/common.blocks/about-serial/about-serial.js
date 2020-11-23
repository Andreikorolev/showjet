$(".about-serial__navigation-item").click(function(){
	$( ".about-serial__navigation-item" ).each(function() {
		$(this).removeClass("active");
	});
	$(".about-serial__tab").hide();

	$(this).addClass("active");
	var targetTab = $(this).attr("data-target");
	$("#" + targetTab).show();
});

$(".actors-creators__item").on('click', function(){
	$(".actors-creators__person").addClass("active");
	$(".actors-creators__wrap").hide();
});

$(".actors-creators__person-back-button").on('click', function(){
	$(".actors-creators__person").removeClass("active");
	$(".actors-creators__wrap").show();
});

function scaleAboutSerialInfoWrap() {
	var body = document.querySelector('body');
	var infoWrapHeight = $('.about-serial__info-wrap').height();
	var trailerHeight = $('.about-serial__trailer').height();
	body.style.setProperty('--about-serial-left-wrap-scale', (trailerHeight / infoWrapHeight));
}

$(window).on('load', function() {
	var windowWidth = window.innerWidth;
	if (windowWidth >= 2500) {
		scaleAboutSerialInfoWrap();
	}
});
$(window).resize(function() {
	var windowWidth = window.innerWidth;
	if (windowWidth >= 2500) {
		scaleAboutSerialInfoWrap();
	}
});
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
	console.log('click');
	$(".actors-creators__person").addClass("active");
	$(".actors-creators__wrap").hide();
});

$(".actors-creators__person-back-button").on('click', function(){
	console.log('click');
	$(".actors-creators__person").removeClass("active");
	$(".actors-creators__wrap").show();
});
$(".news-page__navigation-item").click(function(){
	$( ".news-page__navigation-item" ).each(function() {
		$(this).removeClass("active");
	});
	$(".news-page__tab").removeClass('active-tab');

	$(this).addClass("active");
	var targetTab = $(this).attr("data-target");
	$("#" + targetTab).addClass('active-tab');
});
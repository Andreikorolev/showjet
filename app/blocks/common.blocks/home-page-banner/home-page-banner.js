if ($(".home-page-banner").length){
	//banner mute button handler
	var bannerVideoID = $(".home-page-banner").find('video').attr('id');
	var bannerPlayer = videojs(bannerVideoID);

	var bannerMuteButton = $(".home-page-banner").find('.home-page-banner__sound-button');


	// handler if other player is play
	setInterval(function (){
		if (!isVideoPlay && $(window).scrollTop() < 300) {
			bannerPlayer.play();
		} else {
			bannerPlayer.pause();
		}

		if (isVideoMuted) {
			bannerMuteButton.removeClass("home-page-banner__sound-button_on");
		} else {
			bannerMuteButton.addClass("home-page-banner__sound-button_on");
		}
	},500);

	// scroll handler
	if ($('.home-page-banner').length) {
		var bannerHeight = $('.home-page-banner').height();
		$(window).scroll(function(){
			console.log($(window).scrollTop());
			var windowScrollTop = $(window).scrollTop();
			if (windowScrollTop > 300 ) {
				bannerPlayer.pause();
				console.log('hidden');
			} else {
				bannerPlayer.play();
				console.log('visible');
			}
		});
	}


	bannerMuteButton.on('click', function(){
		isVideoMuted ? bannerMuteButton.addClass("home-page-banner__sound-button_on") : bannerMuteButton.removeClass("home-page-banner__sound-button_on");
		bannerPlayer.muted(!isVideoMuted);
		bannerPlayer.volume(1);
		isVideoMuted = !isVideoMuted;
	});
};
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
			var windowScrollTop = $(window).scrollTop();
			if (windowScrollTop > 300 ) {
				bannerPlayer.pause();
				$(".home-page-banner__tiles-cover").hide();
			} else {
				bannerPlayer.play();
				$(".home-page-banner__tiles-cover").show();
			}

			if (windowScrollTop > 150 ) {
				$(".home-page-banner__tiles-cover").hide();
			} else {
				$(".home-page-banner__tiles-cover").show();
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
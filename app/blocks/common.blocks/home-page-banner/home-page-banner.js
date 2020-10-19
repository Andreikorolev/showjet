if ($(".home-page-banner").length){
	//banner mute button handler
	var bannerVideoID = $(".home-page-banner").find('video').attr('id');
	var bannerPlayer = videojs(bannerVideoID);

	var bannerMuteButton = $(".home-page-banner").find('.home-page-banner__sound-button');
	bannerMuteButton.removeClass("home-page-banner__sound-button_on");
	var bannerVideoMute = true;

	bannerMuteButton.on('click', function(){
		bannerVideoMute ? bannerMuteButton.addClass("home-page-banner__sound-button_on") : bannerMuteButton.removeClass("home-page-banner__sound-button_on");
		bannerPlayer.muted(!bannerVideoMute);
		bannerPlayer.volume(1);
		bannerVideoMute = !bannerVideoMute;
	});
};
if ($(".single-serial-tile").length){
	//banner mute button handler
	var singleSerialTileVideoID = $(".single-serial-tile").find('video').attr('id');
	var singleSerialTilePlayer = videojs(singleSerialTileVideoID);
	var singleSerialTileMuteButton = $(".single-serial-tile").find('.single-serial-tile__sound-button');

	// handler if other player is play
	setInterval(function (){
		var windowScrollTop = $(window).scrollTop();
		var windowHeihght = $(window).height();
		var elementOffset = $(".single-serial-tile").offset();
		var elementHeight = $(".single-serial-tile").outerHeight();
		var isElementVisible = ((windowScrollTop + windowHeihght - (elementHeight / 1.5)) > elementOffset.top) && (windowScrollTop < (elementOffset.top + (elementHeight / 3)));

		if (!isVideoPlay && isElementVisible) {
			$(".single-serial-tile").find(".single-serial-tile__trailer-poster").fadeOut(1000);
			singleSerialTilePlayer.play();
		} else {
			$(".single-serial-tile").find(".single-serial-tile__trailer-poster").fadeIn(100).show();
			singleSerialTilePlayer.pause();
		}

		if (isVideoMuted) {
			singleSerialTileMuteButton.removeClass("single-serial-tile__sound-button_on");
			singleSerialTilePlayer.muted(isVideoMuted);
		} else {
			singleSerialTileMuteButton.addClass("single-serial-tile__sound-button_on");
			singleSerialTilePlayer.muted(isVideoMuted);
		}
	},500);

	singleSerialTileMuteButton.unbind("click").on('click', function(){
		isVideoMuted ? singleSerialTileMuteButton.addClass("single-serial-tile__sound-button_on") : singleSerialTileMuteButton.removeClass("single-serial-tile__sound-button_on");
		singleSerialTilePlayer.muted(!isVideoMuted);
		singleSerialTilePlayer.volume(1);
		isVideoMuted = !isVideoMuted;
	});
};

function scaleSingleSerialTileDescription() {
	var body = document.querySelector('body');
	var descriptionHeight = $('.single-serial-tile__description').height();
	var trailerHeight = $('.single-serial-tile__trailer').height();
	body.style.setProperty('--single-serila-tile-description-scale', (trailerHeight / descriptionHeight) - 0.1);
}

$(window).on('load', function() {
	var windowWidth = window.innerWidth;
	if (windowWidth >= 2500) {
		scaleSingleSerialTileDescription();
	}
});
$(window).resize(function() {
	var windowWidth = window.innerWidth;
	if (windowWidth >= 2500) {
		scaleSingleSerialTileDescription();
	}
});
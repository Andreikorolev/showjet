$( ".tile" ).each(function() {
	var progress = $(this).data("progress");
	$(this).find(".tile__progress-bar").width(progress + '%');
});

$(".tile.tile-info").hover(
	function(){
		// variable for use it inside timer's function
		var targetTile = $(this);
		// set timer
		timer = setTimeout(function() {
			// find video id
			var videoID = targetTile.find('video').attr('id');
			// init videojs with this ID
			var player = videojs(videoID);
			// pass src and typ into video player
			player.src({ type: 'application/x-mpegURL', src: $(targetTile).data("videourl") });
			// start the player
			player.play();

			//mute button handler
			var muteButton = targetTile.find('.tile__sound-button');
			muteButton.removeClass("tile__sound-button_on");
			var videoMute = true;
			muteButton.on('click', function(){
				videoMute ? muteButton.addClass("tile__sound-button_on") : muteButton.removeClass("tile__sound-button_on");
				player.muted(!videoMute);
				videoMute = !videoMute;
          		player.volume(1);
			});
			// end mute button handler

			// mouse move handler
			tileInfoWrap = targetTile.find(".tile__info-wrap");
			setTimeout(function() {
				tileInfoWrap.addClass("hide");
			}, 1500)
			var mouseTimer;
			document.onmousemove = function() {
				tileInfoWrap.removeClass("hide");
				clearTimeout(mouseTimer);
				mouseTimer = setTimeout(function() {
					tileInfoWrap.addClass("hide");
				}, 1500)
			};
			// end mouse move handler
		}, 1000);
	}, function() {
		// reset timer
		clearTimeout(timer);
		var videoID = $(this).find('video').attr('id');
		var player = videojs(videoID);
		player.reset();
	}
);

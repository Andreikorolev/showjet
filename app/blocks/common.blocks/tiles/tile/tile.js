$( ".tile" ).each(function() {
	var progress = $(this).data("progress");
	$(this).find(".tile__progress-bar").width(progress + '%');
});

$(".tile.tile-info").hover(
	function(){
		var targetTile = $(this);

		// set timer
		timer = setTimeout(function() {
			targetTile.find(".tile__bg").hide();
			var videoID = targetTile.find('video').attr('id');
			var player = videojs(videoID);
			player.src({ type: 'application/x-mpegURL', src: $(targetTile).data("videourl") });
			player.play();
			isVideoPlay = true;

			//mute button handler
			var muteButton = targetTile.find('.tile__sound-button');
			if (isVideoMuted) {
				muteButton.removeClass("tile__sound-button_on");
			} else {
				player.muted(isVideoMuted);
				muteButton.addClass("tile__sound-button_on");
			}

			// handler for video end
			player.on('ended', function() {
				targetTile.find(".tile__bg").show();
			});

			// var videoMute = true;
			muteButton.on('click', function(){
				isVideoMuted ? muteButton.addClass("tile__sound-button_on") : muteButton.removeClass("tile__sound-button_on");
				player.muted(!isVideoMuted);
				isVideoMuted = !isVideoMuted;
          		player.volume(1);
			});
			// end mute button handler

			// mouse move handler
			tileInfoWrap = targetTile.find(".tile__info-wrap");
			setTimeout(function() {
				tileInfoWrap.addClass("hide");
			}, 3000)
			var mouseTimer;
			document.onmousemove = function() {
				tileInfoWrap.removeClass("hide");
				clearTimeout(mouseTimer);
				mouseTimer = setTimeout(function() {
					tileInfoWrap.addClass("hide");
				}, 3000)
			};
			// end mouse move handler
		}, 1000);
	}, function() {
		// reset timer
		clearTimeout(timer);
		var videoID = $(this).find('video').attr('id');
		var player = videojs(videoID);
		player.reset();
		isVideoPlay = false;
		$(this).find(".tile__bg").show();
	}
);
$( ".tile" ).each(function() {
	var progress = $(this).data("progress");
	$(this).find(".tile__progress-bar").width(progress + '%');
});

$(".tile.tile-info").hover(
	function(){
		var targetTile = $(this);
		var targetTileIndex = targetTile.index();
		var lengthOfParent = targetTile.parent().children().length;

		timerAddClass = setTimeout(function(){
			if (targetTileIndex != 0 && targetTileIndex != (lengthOfParent - 1)) {
				targetTile.parent().addClass('hovered-child');
			} else if (targetTileIndex != 0 && targetTileIndex === (lengthOfParent - 1)) {
				targetTile.parent().addClass('hovered-last-child');
			}
		}, 500);

		// set timer
		timer = setTimeout(function() {
			targetTile.find(".tile__bg").hide();
			var videoID = targetTile.find('video').attr('id');
			var player = videojs(videoID);
			player.src({ type: 'application/x-mpegURL', src: $(targetTile).data("videourl") });
			player.play();
			isVideoPlay = true;

			var muteButton = targetTile.find('.tile__sound-button');
			if (isVideoMuted) {
				muteButton.removeClass("tile__sound-button_on");
				player.muted(isVideoMuted);
			} else {
				muteButton.addClass("tile__sound-button_on");
				player.muted(isVideoMuted);
			}

			// handler for video end
			player.on('ended', function() {
				targetTile.find(".tile__bg").show();
			});

			//mute button handler
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
		$(this).parent().removeClass('hovered-child');
		$(this).parent().removeClass('hovered-last-child');
		clearTimeout(timerAddClass);
		// reset timer
		clearTimeout(timer);
		var videoID = $(this).find('video').attr('id');
		var player = videojs(videoID);
		player.reset();
		isVideoPlay = false;
		$(this).find(".tile__bg").show();
	}
);
// https://codepen.io/imasdk/pen/qoZZgG

$( ".tile" ).each(function() {
	var progress = $(this).data("progress");
	$(this).find(".tile__progress-bar").width(progress + '%');
});

var delay=1000, setTimeoutConst;
$('.img').on('hover', function() {
	setTimeoutConst = setTimeout(function() {
    // do something
}, delay);
}, function() {
	clearTimeout(setTimeoutConst);
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

			// mouse move handler
			setTimeout(function() {
				tileInfoWrap.hide();
			}, 1500)
			tileInfoWrap = targetTile.find(".tile__info-wrap");
			var mouseTimer;
			document.onmousemove = function() {
				tileInfoWrap.show();
				clearTimeout(mouseTimer);
				mouseTimer = setTimeout(function() {
					tileInfoWrap.hide();
				}, 1500)
			};
		}, 1000);
	}, function() {
		// reset timer
		clearTimeout(timer);
		var videoID = $(this).find('video').attr('id');
		var player = videojs(videoID);
		player.reset();
	}
	);

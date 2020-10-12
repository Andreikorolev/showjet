// https://codepen.io/imasdk/pen/qoZZgG

$( ".tile" ).each(function() {
	var progress = $(this).data("progress");
	$(this).find(".tile__progress-bar").width(progress + '%');
});

$(".tile.innerInfo").hover(
	function(){
		var videoID = $(this).find('video').attr('id');
		var player = videojs(videoID);
		player.src({ type: 'application/x-mpegURL', src: $(this).data("videourl") });
		player.play();
		// player.muted(false);

		// $(this).mousemove(function() {
		// 	var tileElementHidden = false;
		// 	var timerHidden;
		// 	var activeTile = $(this).find(".tile__info-block");
		// 	activeTile.show();

		// 	if (!tileElementHidden) {
		// 		tileElementHidden = false;
		// 		activeTile.show();
		// 		// console.log('show');
		// 		clearTimeout(timerHidden);
		// 		timerHidden = setTimeout(function() {
		// 			activeTile.hide();
		// 			// console.log('hide');
		// 			tileElementHidden = true;
		// 		}, 2000);
		// 	}
		// });

		var isVolumeMuted = player.muted();

		$(this).find('.tile__sound-button').click(function(){
			console.log('sound button click');
			var player = videojs('video1_html5_api');
			$(".tile__video").attr('muted', false);
			player.muted(false);
			var isVolumeMuted = player.muted();
			console.log(isVolumeMuted);
		});

	}, function() {
		var videoID = $(this).find('video').attr('id');
		var player = videojs(videoID);
		player.reset();
		player.muted(true);
	}
);
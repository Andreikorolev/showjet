$(".tile").each(function () {
  var progress = $(this).data("progress");
  $(this)
    .find(".tile__progress-bar")
    .width(progress + "%");
});

$(".tile.tile-info").hover(
  function () {
    var targetTile = $(this);
    // set timer

    timer = setTimeout(function () {
      var videoID = targetTile.find("video").attr("id");
      var player = videojs(videoID);
      targetTile.find(".tile__bg").addClass("hide");
      player.src({
        type: "application/x-mpegURL",
        src: $(targetTile).data("videourl"),
      });
      player.play();
      isVideoPlay = true;

      var muteButton = targetTile.find(".tile__sound-button");
      if (isVideoMuted) {
        muteButton.removeClass("tile__sound-button_on");
        player.muted(isVideoMuted);
      } else {
        muteButton.addClass("tile__sound-button_on");
        player.muted(isVideoMuted);
      }

      // handler for video end
      player.on("ended", function () {
        targetTile.find(".tile__bg").removeClass("hide");
      });

      //mute button handler
      muteButton.unbind("click").on("click", function () {
        isVideoMuted
          ? muteButton.addClass("tile__sound-button_on")
          : muteButton.removeClass("tile__sound-button_on");
        player.muted(!isVideoMuted);
        isVideoMuted = !isVideoMuted;
        player.volume(1);
      });
      // end mute button handler

      // mouse move handler
      tileInfoWrap = targetTile.find(".tile__info-wrap");
      setTimeout(function () {
        tileInfoWrap.addClass("hide");
        targetTile.addClass("covered-hide");
      }, 2000);
      var mouseTimer;
      document.onmousemove = function () {
        tileInfoWrap.removeClass("hide");
        targetTile.removeClass("covered-hide");
        clearTimeout(mouseTimer);
        mouseTimer = setTimeout(function () {
          tileInfoWrap.addClass("hide");
          targetTile.addClass("covered-hide");
        }, 2000);
      };
      // end mouse move handler
    }, 1000);
  },
  function () {
    clearTimeout(timerAddClass);
    // reset timer
    clearTimeout(timer);
    var videoID = $(this).find("video").attr("id");
    var player = videojs(videoID);
    player.reset();
    isVideoPlay = false;
    $(this).find(".tile__bg").removeClass("hide");
  }
);

$(".tile").hover(
  function () {
    var targetTile = $(this);

    var targetTileWidth = targetTile.width();
    var targetTileOffset = targetTile.offset();
    var windowWidth = window.innerWidth;

    var isTileRightEdge =
      windowWidth - targetTileOffset.left < targetTileWidth * 1.5;
    var isTileLeftEdge = targetTileOffset.left < targetTileWidth / 2;

    timerAddClass = setTimeout(function () {
      if (isTileRightEdge) {
        targetTile.parent().addClass("hovered-last-child");
      } else if (isTileLeftEdge) {
        return 0;
      } else if (!isTileLeftEdge && !isTileRightEdge) {
        targetTile.parent().addClass("hovered-child");
      }
    }, 500);
  },
  function () {
    $(this).parent().removeClass("hovered-child");
    $(this).parent().removeClass("hovered-last-child");
    clearTimeout(timerAddClass);
  }
);

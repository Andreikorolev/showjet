function resizeCollectionTile() {
  var body = document.querySelector("body");
  var windowWidth = window.innerWidth;
  var collectionTile = $(".collection-tile");
  var collectionWrapperWidth = collectionTile.parent().width();

  //width of gap between tiles row
  var gapWidth = windowWidth * 0.042;

  var collectionAngleOffset =
    Math.sin((11 * Math.PI) / 180) * (collectionWrapperWidth / 4 / 1.8);
  var collectionTileWidth =
    (collectionWrapperWidth + (collectionAngleOffset - 3) * 3) / 4;
  var collectionTileHeight = collectionWrapperWidth / 4 / 1.8;

  var collectionHoverOffset =
    ((collectionTileWidth * 1.4 - collectionTileWidth) / 2) * 0.71;

  var collectionTileHoverHeight =
    collectionWrapperWidth / 4 / 1.8 + gapWidth * 1.22;
  var collectionTileHoverAngleOffset =
    Math.sin((11 * Math.PI) / 180) * collectionTileHoverHeight;
  var collectionTileHoverWidth =
    ((collectionWrapperWidth + (collectionTileHoverAngleOffset - 3) * (4 - 1)) /
      4) *
    (collectionTileHoverHeight / collectionTileHeight);

  body.style.setProperty(
    "--collection-angle-offset",
    collectionAngleOffset + "px"
  );
  body.style.setProperty("--collection-tile-width", collectionTileWidth + "px");
  body.style.setProperty(
    "--collection-tile-height",
    collectionTileHeight + "px"
  );
  body.style.setProperty(
    "--collection-margin-right",
    -(collectionAngleOffset - 3) + "px"
  );

  body.style.setProperty(
    "--collection-tile-hover-width",
    collectionTileHoverWidth + "px"
  );
  body.style.setProperty(
    "--collection-tile-hover-height",
    collectionTileHoverHeight + "px"
  );
  body.style.setProperty(
    "--collection-tile-hover-angle-offset",
    collectionHoverOffset + "px"
  );
  body.style.setProperty(
    "--collection-tile-hover-top-offset",
    -((collectionTileHoverHeight - collectionTileHeight) / 2) + "px"
  );
}

$(window).on("load", function () {
  resizeCollectionTile();
});

$(window).resize(function () {
  resizeCollectionTile();
});

$(".collection-tile").hover(
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

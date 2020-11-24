// function for resizing md, lg, xl tiles 
function resizeTile(tileSize, numberOfTiles) {
	// swithc (tileSize) {
	// 	case 'sm':
	// 		return nuambreOfTiles = 2;
	// }
	var body = document.querySelector('body');
	var windowWidth = window.innerWidth;
	var tile = $('.tile__' + tileSize);
	var wrapperWidth = tile.parent().width();

	var tileHeight = (wrapperWidth / numberOfTiles) / 1.8;
	var angleOffset = Math.sin((11*Math.PI)/180) * tileHeight;
	var tileWidth = (wrapperWidth + (( angleOffset - 3 )  * (numberOfTiles -1))) / numberOfTiles;

	//width of gap between tiles row
	var gapWidth = windowWidth * 0.042;

	var tileHoverHeight = ((wrapperWidth / numberOfTiles) / 1.8) + (gapWidth * 1.22);
	var hoverAngleOffset = Math.sin((11*Math.PI)/180) * tileHoverHeight;
	var tileHoverWidth = ((wrapperWidth + ((hoverAngleOffset - 3) * (numberOfTiles -1))) / numberOfTiles) * (tileHoverHeight / tileHeight);

    body.style.setProperty('--' + tileSize + '-tile-width', tileWidth + 'px');
    body.style.setProperty('--' + tileSize + '-tile-height', tileHeight + 'px');
    body.style.setProperty('--' + tileSize + '-angle-offset', angleOffset + 'px');
    body.style.setProperty('--' + tileSize + '-margin-right', -(angleOffset - 3) + 'px');

    body.style.setProperty('--' + tileSize + '-tile-hover-width', tileHoverWidth + 'px');
    body.style.setProperty('--' + tileSize + '-tile-hover-height', tileHoverHeight + 'px');
    body.style.setProperty('--' + tileSize + '-hover-angle-offset', hoverAngleOffset + 'px');
    body.style.setProperty('--' + tileSize + '-tile-hover-top-offset', -((tileHoverHeight - tileHeight) / 2) + 'px');
};

// function for resizing sm tiles 
function resizeSMTile() {
	var windowWidth = window.innerWidth;
	if (windowWidth >= 1920) {
		var numberOfTiles = 6;
	} else if (windowWidth < 1920 && windowWidth >= 1280) {
		numberOfTiles = 5;
	} else if (windowWidth < 1280 && windowWidth >= 1024) {
		numberOfTiles = 4;
	}

	var body = document.querySelector('body');
	var windowWidth = window.innerWidth;
	var tile = $('.tile__sm');
	var wrapperWidth = tile.parent().width();

	var tileHeight = (wrapperWidth / numberOfTiles) / 1.8;
	var angleOffset = Math.sin((11*Math.PI)/180) * tileHeight;
	var tileWidth = (wrapperWidth + (( angleOffset - 3 )  * (numberOfTiles -1))) / numberOfTiles;

	//width of gap between tiles row
	var gapWidth = windowWidth * 0.042;

	var tileHoverHeight = ((wrapperWidth / numberOfTiles) / 1.8) + (gapWidth * 1.22);
	var hoverAngleOffset = Math.sin((11*Math.PI)/180) * tileHoverHeight;
	var tileHoverWidth = ((wrapperWidth + ((hoverAngleOffset - 3) * (numberOfTiles -1))) / numberOfTiles) * (tileHoverHeight / tileHeight);

    body.style.setProperty('--sm-tile-width', tileWidth + 'px');
    body.style.setProperty('--sm-tile-height', tileHeight + 'px');
    body.style.setProperty('--sm-angle-offset', angleOffset + 'px');
    body.style.setProperty('--sm-margin-right', -(angleOffset - 3) + 'px');

    body.style.setProperty('--sm-tile-hover-width', tileHoverWidth + 'px');
    body.style.setProperty('--sm-tile-hover-height', tileHoverHeight + 'px');
    body.style.setProperty('--sm-hover-angle-offset', hoverAngleOffset + 'px');
    body.style.setProperty('--sm-tile-hover-top-offset', -((tileHoverHeight - tileHeight) / 2) + 'px');
};


$(window).on('load', function() {
	resizeSMTile();
 	resizeTile('md', 4);
 	resizeTile('lg', 3);
 	resizeTile('xl', 2);
});



$(window).resize(function() {
	resizeSMTile();
	resizeTile('md', 4);
	resizeTile('lg', 3);
	resizeTile('xl', 2);
});
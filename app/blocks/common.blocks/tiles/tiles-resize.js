// function for resizing md, lg, xl tiles 
function resizeTile(tileSize, numberOfTiles) {
	var body = document.querySelector('body');
	var windowWidth = window.innerWidth;
	var tile = $('.tile__' + tileSize);
	var wrapperWidth = tile.parent().width();
	// console.log(wrapperWidth);

	var tileHeight = (wrapperWidth / numberOfTiles) / 1.8;
	var angleOffset = Math.sin((11*Math.PI)/180) * tileHeight;
	var tileWidth = (wrapperWidth + (( angleOffset - 3 )  * (numberOfTiles -1))) / numberOfTiles;

	//width of gap between tiles row
	var gapWidth = windowWidth * 0.05;

	var tileHoverHeight = ((wrapperWidth / numberOfTiles) / 1.8) + (gapWidth * 2);
	var hoverAngleOffset = Math.sin((11*Math.PI)/180) * tileHoverHeight;
	var tileHoverWidth = ((wrapperWidth + ((hoverAngleOffset - 3) * (numberOfTiles -1))) / numberOfTiles) * (tileHoverHeight / tileHeight);
	var tileLastHoverOffset = tileHoverWidth - tileWidth;

    body.style.setProperty('--' + tileSize + '-tile-width', tileWidth + 'px');
    body.style.setProperty('--' + tileSize + '-tile-height', tileHeight + 'px');
    body.style.setProperty('--' + tileSize + '-angle-offset', angleOffset + 'px');
    body.style.setProperty('--' + tileSize + '-margin-right', -(angleOffset - 3) + 'px');

    body.style.setProperty('--' + tileSize + '-tile-hover-width', tileHoverWidth + 'px');
    body.style.setProperty('--' + tileSize + '-tile-hover-height', tileHoverHeight + 'px');
    body.style.setProperty('--' + tileSize + '-hover-angle-offset', hoverAngleOffset + 'px');
    body.style.setProperty('--' + tileSize + '-tile-hover-top-offset', -((tileHoverHeight - tileHeight) / 2) + 'px');
    body.style.setProperty('--' + tileSize + '-tile-last-hover-offset', -tileLastHoverOffset + 'px');
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
	var tile = $('.tile__sm');
	var wrapperWidth = tile.parent().width();

	var angleOffset = Math.sin((11*Math.PI)/180) * ( ( wrapperWidth / numberOfTiles ) / 1.8 );
	var tileWidth = (wrapperWidth + (( angleOffset - 3 )  * (numberOfTiles -1))) / numberOfTiles;
	var tileHeight = (wrapperWidth / numberOfTiles) / 1.8;

	var hoverAngleOffset = Math.sin((11*Math.PI)/180) * ( (( wrapperWidth / numberOfTiles ) / 1.8 ) * 1.65 );
	var tileHoverWidth = ((wrapperWidth + ((hoverAngleOffset - 3) * (numberOfTiles -1))) / numberOfTiles) * 1.65;
	var tileHoverHeight = ((wrapperWidth / numberOfTiles) / 1.8 ) * 1.65;
	var infoOffset = hoverAngleOffset + 20;
	var tileLastHoverOffset = tileHoverWidth - tileWidth - 10;

    body.style.setProperty('--sm-tile-width', tileWidth + 'px');
    body.style.setProperty('--sm-tile-height', tileHeight + 'px');
    body.style.setProperty('--sm-tiles-wrapper-height', tileHeight + 'px');
    body.style.setProperty('--sm-tile-hover-top-offset', -((tileHoverHeight - tileHeight) / 2) + 'px');
    body.style.setProperty('--sm-angle-offset', angleOffset + 'px');
    body.style.setProperty('--sm-margin-right', -(angleOffset - 3) + 'px');

	body.style.setProperty('--sm-tile-hover-width', tileHoverWidth + 'px');
	body.style.setProperty('--sm-tile-hover-height', tileHoverHeight + 'px');
	body.style.setProperty('--sm-hover-angle-offset', hoverAngleOffset + 'px');
    body.style.setProperty('--sm-info-offset', infoOffset + 'px');
    body.style.setProperty('--sm-tile-last-hover-offset', -tileLastHoverOffset + 'px');
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
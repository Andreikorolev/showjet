// function for resizing md, lg, xl tiles 
function resizeTile(tileSize, numberOfTiles) {
	var body = document.querySelector('body');
	var tile = $('.tile__' + tileSize);
	var wrapperWidth = tile.parent().width();

	var angleOffset = Math.sin((11*Math.PI)/180) * ( ( wrapperWidth / numberOfTiles ) / 1.8 );
	var tileWidth = (wrapperWidth + (( angleOffset - 3 )  * (numberOfTiles -1))) / numberOfTiles;
	var tileHeight = (wrapperWidth / numberOfTiles) / 1.8;
	var infoOffset = angleOffset + 20;

    body.style.setProperty('--' + tileSize + '-tile-width', tileWidth + 'px');
    body.style.setProperty('--' + tileSize + '-tile-height', tileHeight + 'px');
    body.style.setProperty('--' + tileSize + '-angle-offset', angleOffset + 'px');
    body.style.setProperty('--' + tileSize + '-margin-right', -(angleOffset - 3) + 'px');
    body.style.setProperty('--' + tileSize + '-info-offset', infoOffset + 'px');
};


$(window).on('load', function() {
 	resizeTile('md', 4);
 	resizeTile('lg', 3);
 	resizeTile('xl', 2);
});



$( window ).resize(function() {
	resizeTile('md', 4);
	resizeTile('lg', 3);
	resizeTile('xl', 2);
});
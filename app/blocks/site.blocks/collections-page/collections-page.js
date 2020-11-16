$(window).on('load', function() {
	var body = document.querySelector('body');
	var collectionTile = $('.collection-tile');
	var collectionWrapperWidth = collectionTile.parent().width();

	var collectionAngleOffset = Math.sin((11*Math.PI)/180) * ( ( collectionWrapperWidth / 4 ) / 1.8 );
	var collectionTileWidth = ( collectionWrapperWidth + (( collectionAngleOffset - 3 )  * 3 )) / 4;
	var collectionTileHeight = ( collectionWrapperWidth / 4 ) / 1.8;

	var collectionHoverOffset = (((collectionTileWidth * 1.4) - collectionTileWidth) / 2) * 0.71;

	body.style.setProperty('--collection-angle-offset', collectionAngleOffset + 'px');
	body.style.setProperty('--collection-tile-width', collectionTileWidth + 'px');
	body.style.setProperty('--collection-tile-height', collectionTileHeight + 'px');
	body.style.setProperty('--collection-margin-right', -(collectionAngleOffset - 3) + 'px');

    body.style.setProperty('--collection-hover-offset', collectionHoverOffset + 'px');
});



$( window ).resize(function() {
	var body = document.querySelector('body');
	var collectionTile = $('.collection-tile');
	var collectionWrapperWidth = collectionTile.parent().width();

	var collectionAngleOffset = Math.sin((11*Math.PI)/180) * ( ( collectionWrapperWidth / 4 ) / 1.8 );
	var collectionTileWidth = ( collectionWrapperWidth + (( collectionAngleOffset - 3 )  * 3 )) / 4;
	var collectionTileHeight = ( collectionWrapperWidth / 4 ) / 1.8;

	var collectionHoverOffset = (((collectionTileWidth * 1.4) - collectionTileWidth) / 2) * 0.71;

	body.style.setProperty('--collection-angle-offset', collectionAngleOffset + 'px');
	body.style.setProperty('--collection-tile-width', collectionTileWidth + 'px');
	body.style.setProperty('--collection-tile-height', collectionTileHeight + 'px');
	body.style.setProperty('--collection-margin-right', -(collectionAngleOffset - 3) + 'px');

    body.style.setProperty('--collection-hover-offset', collectionHoverOffset + 'px');
});
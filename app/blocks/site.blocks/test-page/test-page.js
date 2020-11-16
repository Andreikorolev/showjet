$(window).on('load', function() {
    var tileWrapper = document.querySelector('.testTile__wrap');
	var tile = $('.testTile');
	var wrapperWidth = tile.parent().width();

	var angleOffset = Math.sin((11*Math.PI)/180) * ( ( wrapperWidth / 6 ) / 1.8 );
	var tileWidth = ( wrapperWidth + (( angleOffset - 3 )  * 5 )) / 6;
	var tileHeight = ( wrapperWidth / 6 ) / 1.8;

	var angleHoverOffset = Math.sin((11*Math.PI)/180) * ( (( wrapperWidth / 6 ) / 1.8 ) * 1.65 );
	var tileHoverWidth = ((wrapperWidth + ((angleHoverOffset - 3) * 5)) / 6) * 1.65;
	var tileHoverHeight = (( wrapperWidth / 6 ) / 1.8 ) * 1.65;

    tileWrapper.style.setProperty('--tile-width', tileWidth + 'px');
    tileWrapper.style.setProperty('--tile-height', tileHeight + 'px');
    tileWrapper.style.setProperty('--angle-offset', angleOffset + 'px');
    tileWrapper.style.setProperty('--margin-right', -(angleOffset - 3) + 'px');

    tileWrapper.style.setProperty('--tile-hover-width', tileHoverWidth + 'px');
    tileWrapper.style.setProperty('--tile-hover-height', tileHoverHeight + 'px');
    tileWrapper.style.setProperty('--angle-hover-offset', angleHoverOffset + 'px');
});



$( window ).resize(function() {
    var tileWrapper = document.querySelector('.testTile__wrap');
	var tile = $('.testTile');
	var wrapperWidth = tile.parent().width();

	var angleOffset = Math.sin((11*Math.PI)/180) * ( ( wrapperWidth / 6 ) / 1.8 );
	var tileWidth = ( wrapperWidth + (( angleOffset - 3 )  * 5 )) / 6;
	var tileHeight = ( wrapperWidth / 6 ) / 1.8;

	var angleHoverOffset = Math.sin((11*Math.PI)/180) * ( (( wrapperWidth / 6 ) / 1.8 ) * 1.65 );
	var tileHoverWidth = ((wrapperWidth + ((angleHoverOffset - 3) * 5)) / 6) * 1.65;
	var tileHoverHeight = (( wrapperWidth / 6 ) / 1.8 ) * 1.65;

    tileWrapper.style.setProperty('--tile-width', tileWidth + 'px');
    tileWrapper.style.setProperty('--tile-height', tileHeight + 'px');
    tileWrapper.style.setProperty('--angle-offset', angleOffset + 'px');
    tileWrapper.style.setProperty('--margin-right', -(angleOffset - 3) + 'px');

    tileWrapper.style.setProperty('--tile-hover-width', tileHoverWidth + 'px');
    tileWrapper.style.setProperty('--tile-hover-height', tileHoverHeight + 'px');
    tileWrapper.style.setProperty('--angle-hover-offset', angleHoverOffset + 'px');
});
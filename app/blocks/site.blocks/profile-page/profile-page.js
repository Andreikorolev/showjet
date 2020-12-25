$('.profile-page__setting-button-item_stat').on('click', function(){
	$('.profile-page__wrap').hide();
	$('.profile-page__stat').addClass('open');
});

$('.stat__back-button').on('click', function(){
	$('.profile-page__wrap').show();
	$('.profile-page__stat').removeClass('open');
});

$('.profile-page__setting-button-item_history').on('click', function(){
	$('.delete-popup-history').show();
});
$('.profile-page__setting-button-item_mine').on('click', function(){
	$('.delete-popup-mine').show();
});
$('.profile-page__setting-button-item_trouble').on('click', function(){
	$('.trouble-popup-wrap').show();
});
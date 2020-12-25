if ($('.stat__chart').length) {
	var chartData = $('.stat__chart').data("chart").split(',').map(function(item){return +item});
	var parentHeight = $('.stat__chart').parent().height();
	var maxValue = Math.ceil(Math.max.apply(null, chartData));
	$('.stat__grid-max span').text(maxValue);
	var midValue = maxValue / 2;
	$('.stat__grid-mid span').text(midValue);
	var heightRatio = parentHeight / maxValue;

	var weekDays = {
		0: 'воск',
		1: 'понед',
		2: 'втор',
		3: 'сред',
		4: 'четв',
		5: 'пятн',
		6: 'субб',
		7: 'воск',
		8: 'понед',
		9: 'втор',
		10: 'сред',
		11: 'четв',
		12: 'пятн',
		13: 'субб',
	}
	var currentWeelDay = new Date().getDay();
	var i = 1;
	chartData.map(function(item) {
		var itemHeight = item * heightRatio;
		if (i != 7){
			$('.stat__chart').append('<div class="stat__chart-element" style="height:' + itemHeight + 'px;"><span>' + weekDays[currentWeelDay + i] + '</span></div>');
		} else {
			$('.stat__chart').append('<div class="stat__chart-element" style="height:' + itemHeight + 'px;"><span>сегодня</span></div>');
		}
		i++
	});
}
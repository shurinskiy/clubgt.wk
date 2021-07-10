(() => {

	let $items = $('.events__items.events__items_homepage').find('.events__item');

	if($items.length > 4) {
		$('.events__items').after("<span class='events__more'>all events</span>");
	}

	$('.events').on('click', '.events__more', function() {
		$(this)
			.prev('.events__items')
			.find('.events__item')
			.fadeIn()
			.end().end()
			.remove();
	});

})();

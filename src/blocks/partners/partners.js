(() => {

	let $items = $('.partners__items').find('.partners__item');

	if($items.length > 4) {
		$('.partners__items').after("<span class='partners__more'>all partners</span>");

		$items.each(function(index) {
			if(index > 3)
				$(this).hide();
		});
	}

	$('.partners').on('click', '.partners__more', function() {
		$(this)
			.prev('.partners__items')
			.find('.partners__item')
			.fadeIn()
			.end().end()
			.remove();
	});

})();

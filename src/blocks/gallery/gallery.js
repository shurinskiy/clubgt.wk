(() => {

	const $items = $('.gallery__items');
	const total = $items.find('.gallery__item').length;
	const $counter_block = $('.gallery__counter');
	const $current = $counter_block.find('span:first-child');
	let width = $items.width();
	
	$counter_block.find('span:last-child').text(total);
	$current.text(1);
	
	$items.on('scroll', function(e) {
		if($items.css('display') == 'flex') {
			$current.text(total - Math.floor((width * total - $items.scrollLeft() - (width / 3)) / width));
		}
	});

	$(window).on('resize', function(e) {
		width = $items.width();
	});

})();

(() => {
	let $menu = $('.header__menu');
	let $toggle = $('.header__menu-toggle');

	$toggle.on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass('opened');
		$menu.toggleClass('opened');
	});

	$(window).on('click', function(e) {
		if($menu.hasClass('opened') && !e.target.closest('.header__menu')) {
			e.preventDefault();
			$toggle.toggleClass('opened');
			$menu.toggleClass('opened');
		}
	});

	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		var $element = $($(this).attr('href'));
	
		$("html, body").animate({ scrollTop: $element.offset().top }, "slow");
	});

})();

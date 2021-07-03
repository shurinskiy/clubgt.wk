(() => {

	$('a[data-modal]').on('click', function(e) {
		e.preventDefault();
		let $self = $(this);

		$($self.data('modal')).modal({
			fadeDuration: 250,
			modalClass: `modal ${$self.data('class')}`
		});
	});

})();
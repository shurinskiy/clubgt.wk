(() => {

	$(".footer__up-btn").on('click', function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	
})();

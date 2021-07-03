import Swiper, { Navigation, Pagination } from 'swiper/core';
Swiper.use([Navigation, Pagination]);

(() => {
	const swiper = new Swiper('.hero__slider', {
		direction: 'vertical',
		allowTouchMove: false,
		simulateTouch: false,
		wrapperClass: 'hero__slider-wrapper',
		slideClass: 'hero__slide',
		slideActiveClass: 'hero__slide_active',
		pagination: {
			el: '.hero__slider-navi',
			clickable: true,
			bulletClass: 'hero__slider-dot',
			bulletActiveClass: 'hero__slider-dot_active'
		},
	  
	});

})();

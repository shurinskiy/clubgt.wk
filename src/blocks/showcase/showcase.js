import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom'

(() => {
	lightGallery(document.getElementById('showcase__items'), {
		plugins: [lgZoom]
	});

})();

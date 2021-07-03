import "../blocks/header/header.js";
import "../blocks/hero/hero.js";
import "../blocks/events/events.js";
import "../blocks/partners/partners.js";
import "../blocks/gallery/gallery.js";
import "../blocks/footer/footer.js";
import "../blocks/modal/modal.js";
import "../blocks/showcase/showcase.js";



/* Polyfills */
(function(e) {
	e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
	e.closest = e.closest || function closest(selector) {
		if (!this) return null;
		if (this.matches(selector)) return this;
		if (!this.parentElement) {return null}
			else return this.parentElement.closest(selector)
		};
}(Element.prototype));

(function(e) {
	var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
	!matches ? (e.matches = e.matchesSelector = function matches(selector) {
		var matches = document.querySelectorAll(selector);
		var th = this;
		return Array.prototype.some.call(matches, function(e) {
			return e === th;
		});
	}) : (e.matches = e.matchesSelector = matches);
})(Element.prototype);
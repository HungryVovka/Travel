/* ================= MOBILE NAV ========================= */

const mobNavButton = document.querySelector('.mobile-nav-button');
const mobNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobNav = document.querySelector('.mobile-nav');

mobNavButton.addEventListener('click', function () {
	mobNavIcon.classList.toggle('active');
	mobNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});

/* =================== SLIDER =========================== */

var dots = 3;
var sliderElem = document.querySelector('.slider');
var dotElems = sliderElem.querySelectorAll('.slider__dot');
var indicatorElem = sliderElem.querySelector('.slider__indicator');

Array.prototype.forEach.call(dotElems, (dotElem) => {
	dotElem.addEventListener('click', (e) => {
		var currentPos = parseInt(sliderElem.getAttribute('data-pos'));
		var newPos = parseInt(dotElem.getAttribute('data-pos'));
		var newDirection = (newPos > currentPos ? 'right' : 'left');
		var currentDirection = (newPos < currentPos ? 'right' : 'left');
		indicatorElem.classList.remove(`slider__indicator--${currentDirection}`);
		indicatorElem.classList.add(`slider__indicator--${newDirection}`);
		sliderElem.setAttribute('data-pos', newPos);
	})
})
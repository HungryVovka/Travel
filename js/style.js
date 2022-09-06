/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no-scroll');
});

/* =================== SLIDER =========================== */
let dots          = 3;
let sliderElem    = document.querySelector('.slider')
let dotElems      = sliderElem.querySelectorAll('.slider__dot')
let indicatorElem = sliderElem.querySelector('.slider__indicator')

Array.prototype.forEach.call(dotElems, (dotElem) => {
		
	dotElem.addEventListener('click', (e) => {

		let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
		let newPos     = parseInt(dotElem.getAttribute('data-pos'))

		let newDirection     = (newPos > currentPos ? 'right' : 'left')
		let currentDirection = (newPos < currentPos ? 'right' : 'left')

		indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
		indicatorElem.classList.add(`slider__indicator--${ newDirection }`)		
		sliderElem.setAttribute('data-pos', newPos)
		
	})
	
})
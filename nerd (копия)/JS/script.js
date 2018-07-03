window.addEventListener('DOMContentLoaded', () => {

// slider
	let slideIndex = 1;
	let slides = document.querySelectorAll('.slider-block');
	let dotsWrap = document.querySelector('.slider-dots');
	let dot = document.querySelectorAll('.slider-dots__item');

	showSlids(slideIndex);

	function showSlids(a) {
		if (a > slides.length) {
			slideIndex = 1;
		} else if (a < 1) {
			slideIndex = slides.length;
		};

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
			dot[i].classList.remove('slider-dots__item-active');
		};

		slides[slideIndex - 1].style.display = 'flex';
		dot[slideIndex - 1].classList.add('slider-dots__item-active');
	};

	function automationSlide() {
		showSlids(slideIndex += 1);
	};

	function currentSlide(a) {
		showSlids(slideIndex = a);
	};

	dotsWrap.addEventListener('click', (e) => {
		for (let i = 0; i < dot.length + 1; i++) {
			if (e.target.classList.contains('slider-dots__item') && e.target == dot[i - 1]) {
				currentSlide(i);
			};
		};
	});

	let getNextSlide = setInterval(automationSlide, 5000);

// form
	let mapBlockBtn = document.querySelector('.map-block__btn');
	let form = document.querySelector('.map-form');
	let formClose = document.querySelector('.map-form__close');

	mapBlockBtn.addEventListener('click', () => {
		form.style.display = 'flex';
	});

	formClose.addEventListener('click', () => {
		form.style.display = 'none';
	});

});
// Slider
(function() {
    const slides = document.querySelectorAll('.slider-block--results');
    const dotsWrap = document.querySelector('.slider-dots--results');
    const dots = document.querySelectorAll('.slider-dots__elem--results');
    const leftArrow = document.querySelector('.slider-btn__left--results');
    const rightArrow = document.querySelector('.slider-btn__right--results');

    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(x) {
        if (x > slides.length) {
            slideIndex = 1;
        } else if (x < 1) {
            slideIndex = slides.length;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            dots[i].classList.remove('slider-dots__elem--active');
        };

        slides[slideIndex - 1].style.display = 'flex';
        dots[slideIndex - 1].classList.add('slider-dots__elem--active');
    };

    function nextSlide() {
        showSlides(slideIndex += 1)
    };

    function prevSlide() {
        showSlides(setInterval = slideIndex += -1);
    }

    function currentSlide(x) {
        showSlides(slideIndex = x)
    };

    dotsWrap.addEventListener('click', (e) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('slider-dots__elem') && e.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);

    let autoShowSlides = setInterval(nextSlide, 4000);
  })();

//   slider 2
(function() {
    const slides = document.querySelectorAll('.slider-block--answers');
    const dotsWrap = document.querySelector('.slider-dots--answers');
    const dots = document.querySelectorAll('.slider-dots__elem--answers');
    const leftArrow = document.querySelector('.slider-btn__left--answers');
    const rightArrow = document.querySelector('.slider-btn__right--answers');

    let slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(x) {
        if (x > slides.length) {
            slideIndex = 1;
        } else if (x < 1) {
            slideIndex = slides.length;
        };

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            dots[i].classList.remove('slider-dots__elem--active');
        };

        slides[slideIndex - 1].style.display = 'flex';
        dots[slideIndex - 1].classList.add('slider-dots__elem--active');
    };

    function nextSlide() {
        showSlides(slideIndex += 1)
    };

    function prevSlide() {
        showSlides(setInterval = slideIndex += -1);
    }

    function currentSlide(x) {
        showSlides(slideIndex = x)
    };

    dotsWrap.addEventListener('click', (e) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (e.target.classList.contains('slider-dots__elem') && e.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);

    let autoShowSlides = setInterval(nextSlide, 4000);
  })();
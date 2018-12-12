// Menu
window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu-list');
    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    const link3 = document.getElementById('link3');
    const link4 = document.getElementById('link4');
    const link5 = document.getElementById('link5');
    const link6 = document.getElementById('link6');
    const link7 = document.getElementById('link7');
    const link8 = document.getElementById('link8');
    const link9 = document.getElementById('link9');
    const link10 = document.getElementById('link10');
    const link11 = document.getElementById('link11');
    const link12 = document.getElementById('link12');
    const link13 = document.getElementById('link13');
    const link14 = document.getElementById('link14');
    const link15 = document.getElementById('link15');
    const link16 = document.getElementById('link16');
    const link17 = document.getElementById('link17');
    const link18 = document.getElementById('link18');
    const link19 = document.getElementById('link19');
    const link20 = document.getElementById('link20');
    const link21 = document.getElementById('link21');
    const link22 = document.getElementById('link22');

    const height = window.pageYOffset;

    if (height >= 700) {
        menu.classList.add('sticky-menu');

    } else if (height < 700 & menu.classList.contains('sticky-menu')) {
        menu.classList.remove('sticky-menu');
    }

// animate menu
    if (height > 0 & height < 700) {
        link1.classList.add('link-active');
        link2.classList.remove('link-active');

    } else if (height > 700 & height < 1900) {
        link2.classList.add('link-active');
        link1.classList.remove('link-active');
        link3.classList.remove('link-active');

    } else if (height > 1900 & height < 2842) {
        link3.classList.add('link-active');
        link2.classList.remove('link-active');
        link4.classList.remove('link-active');

    } else if (height > 2842 & height < 3280) {
        link4.classList.add('link-active');
        link3.classList.remove('link-active');
        link5.classList.remove('link-active');

    } else if (height > 3280 & height < 4210) {
        link5.classList.add('link-active');
        link4.classList.remove('link-active');
        link6.classList.remove('link-active');
    
    } else if (height > 4210 & height < 6650) {
        link6.classList.add('link-active');
        link5.classList.remove('link-active');
        link7.classList.remove('link-active');

    } else if (height > 6650 & height < 9188) {
        link7.classList.add('link-active');
        link6.classList.remove('link-active');
        link8.classList.remove('link-active');

    } else if (height > 9188 & height < 11526) {
        link8.classList.add('link-active');
        link7.classList.remove('link-active');
        link9.classList.remove('link-active');

    } else if (height > 11526 & height < 13864) {
        link9.classList.add('link-active');
        link8.classList.remove('link-active');
        link10.classList.remove('link-active');

    } else if (height > 13864 & height < 16102) {
        link10.classList.add('link-active');
        link9.classList.remove('link-active');
        link11.classList.remove('link-active');

    } else if (height > 16102 & height < 18490) {
        link11.classList.add('link-active');
        link10.classList.remove('link-active');
        link12.classList.remove('link-active');

    } else if (height > 18490 & height < 20850) {
        link12.classList.add('link-active');
        link11.classList.remove('link-active');
        link13.classList.remove('link-active');

    } else if (height > 20850 & height < 23188) {
        link13.classList.add('link-active');
        link12.classList.remove('link-active');
        link14.classList.remove('link-active');

    } else if (height > 23188 & height < 25426) {
        link14.classList.add('link-active');
        link13.classList.remove('link-active');
        link15.classList.remove('link-active');

    } else if (height > 25426 & height < 27764) {
        link15.classList.add('link-active');
        link14.classList.remove('link-active');
        link16.classList.remove('link-active');

    } else if (height > 27764 & height < 29902) {
        link16.classList.add('link-active');
        link15.classList.remove('link-active');
        link17.classList.remove('link-active');

    } else if (height > 30102 & height < 32440) {
        link17.classList.add('link-active');
        link16.classList.remove('link-active');
        link18.classList.remove('link-active');

    } else if (height > 32440 & height < 34800) {
        link18.classList.add('link-active');
        link17.classList.remove('link-active');
        link19.classList.remove('link-active');

    } else if (height > 34800 & height < 37200) {
        link19.classList.add('link-active');
        link18.classList.remove('link-active');
        link20.classList.remove('link-active');

    } else if (height > 37200 & height < 38500) {
        link20.classList.add('link-active');
        link19.classList.remove('link-active');
        link21.classList.remove('link-active');

    } else if (height > 38500 & height < 40188) {
        link21.classList.add('link-active');
        link20.classList.remove('link-active');
        link22.classList.remove('link-active');
    } else if (height > 40188 & height < 40694) {
        link22.classList.add('link-active');
        link21.classList.remove('link-active');
    } else if (height > 40188 & height < 40694) {
        link22.classList.remove('link-active');
    }

});

// scroll
document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    const speedAnimate = 0.4;

    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function(event) {
            event.preventDefault();

            const scroll = window.pageYOffset;
            const hash = this.href.replace(/[^#]*(.*)/, '$1');
            const indent = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;
            // Magic
            requestAnimationFrame(step);
            function step(time) {
                (start === null) ? start = time : null;
                const progress = time - start;
                const calculation = (indent < 0 ? Math.max(scroll - progress/speedAnimate, scroll + indent) : 
                                    Math.min(scroll + progress/speedAnimate, scroll + indent));
                window.scrollTo(0, calculation);

                if (calculation != scroll + indent) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash
                }
            }
        }, false)
    }
});

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const listItem = document.querySelectorAll('.list-item');
    const listContent = document.querySelectorAll('.list-content');
    const icons = document.querySelectorAll('.list-item__icon');

    listItem.forEach((item,i,array) => {
        listItem[i].addEventListener('click', () => {
            let height = window.getComputedStyle(listContent[i], null).getPropertyValue('max-height');
            let transform = window.getComputedStyle(icons[i], null).getPropertyValue('transform');
            if (height === '0px') {
                listContent[i].style.maxHeight = '2000px';
            } else {
                listContent[i].style.maxHeight = '0px';
            }
            icons[i].style.transform = (transform === 'none') ? 'rotate(-180deg)' : 'none';
        })
    });
});

// info
window.addEventListener('scroll', () => {
    const infoList = document.querySelector('.info-navigation');

    if (window.pageYOffset >= 220 && window.innerWidth >= 1100) {
        infoList.classList.add('info-navigation--sticky')
    } else if (window.pageYOffset < 220 && infoList.classList.contains('info-navigation--sticky')) {
        infoList.classList.remove('info-navigation--sticky')
    }
});
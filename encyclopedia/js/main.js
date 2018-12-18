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
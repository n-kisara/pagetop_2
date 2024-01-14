'use strict';

const pageTop = document.getElementById('pageTop');
pageTop.addEventListener('click',pageUp);

function pageUp() {
    window.scrollTo ({
         top:0,
        behavior:"smooth"       
    });
}

window.addEventListener('scroll',scrollEvent);

function scrollEvent() {
    if(window.pageYOffset < 100) {
        pageTop.style.display = 'none';
    } else if (window.pageYOffset > 100) {
        pageTop.style.display = 'block';
    }
}
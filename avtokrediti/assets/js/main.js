'use strict';
//left & right banner element
let pageContentHeight = document.querySelector('.page-content').offsetHeight,
    footerHeight = document.querySelector('.footer-container').offsetHeight,
    leftBanner = document.querySelector('.left-element-ad'),
    rightBanner = document.querySelector('.right-element-ad');

let fullHeight = document.querySelector('.body_inner').offsetHeight,
    possibleScroll = fullHeight - window.innerHeight;

window.addEventListener('scroll', function() {
    let newScroll = window.scrollY;
    if (newScroll >= fullHeight - pageContentHeight - footerHeight && newScroll < possibleScroll - footerHeight) {
        leftBanner.style.position = "fixed";
        leftBanner.style.top = "0";
        rightBanner.style.position = "fixed";
        rightBanner.style.top = "0";
    } else if (newScroll >= possibleScroll - footerHeight){
        leftBanner.style.top = possibleScroll - newScroll - footerHeight + "px";
        rightBanner.style.top = possibleScroll - newScroll - footerHeight + "px";
    } else {
        leftBanner.style.position = "absolute";
        rightBanner.style.position = "absolute";
    }
})
//hamburger menu
let navbar = document.querySelector(".nav-menu");
let hamburg = document.querySelector(".hamburger-menu");

hamburg.addEventListener('click', () => {
    navbar.classList.toggle('change');
})
window.addEventListener('mouseup', (e) => {
    if(e.target != navbar) {
        navbar.classList.remove('change');
    }
})

//select
let select_make = document.querySelector(".homepage-mini-filter .q_make #q_make");
let select_model = document.querySelector(".homepage-mini-filter .q_model");
select_model.style.display = "none";
select_make.addEventListener('change', function () {
    select_model.style.display = "block";
})
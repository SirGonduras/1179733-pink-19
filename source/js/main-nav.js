var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var pageHeader = document.querySelector('.page-header');
var mainStart = document.querySelector('.main-start');
var indexTagline = document.querySelector('.main-start__index-tagline');
var wrapper = document.querySelector('.main-start__wrapper');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

    pageHeader.classList.remove('page-header--nav-closed');
    mainStart.classList.remove('main-start--nav-closed');
    indexTagline.classList.remove('main-start__index-tagline--nav-closed');
    wrapper.classList.remove('main-start__wrapper--nav-closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

    pageHeader.classList.add('page-header--nav-closed');
    mainStart.classList.add('main-start--nav-closed');
    indexTagline.classList.add('main-start__index-tagline--nav-closed');
    wrapper.classList.add('main-start__wrapper--nav-closed');
  }
});

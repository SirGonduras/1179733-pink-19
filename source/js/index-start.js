var navMain = document.querySelector('.main-nav');

var mainStart = document.querySelector('.main-start');
var indexTagline = document.querySelector('.main-start__index-tagline');
var wrapper = document.querySelector('.main-start__wrapper');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    mainStart.classList.add('main-start--nav-closed');
    indexTagline.classList.add('main-start__index-tagline--nav-closed');
    wrapper.classList.add('main-start__wrapper--nav-closed');

  } else {
    pageHeader.classList.remove('page-header--nav-closed');
    mainStart.classList.remove('main-start--nav-closed');
    indexTagline.classList.remove('main-start__index-tagline--nav-closed');
    wrapper.classList.remove('main-start__wrapper--nav-closed');
  }
});

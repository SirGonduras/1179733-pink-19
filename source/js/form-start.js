var navMain = document.querySelector('.main-nav');
var formTagline = document.querySelector('.form-start__tagline');
var formStart = document.querySelector('.form-start');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    formTagline.classList.add('form-start__tagline--nav-closed');
    formStart.classList.add('form-start--nav-closed');
  } else {
    formTagline.classList.remove('form-start__tagline--nav-closed');
    formStart.classList.remove('form-start--nav-closed');
  }
});

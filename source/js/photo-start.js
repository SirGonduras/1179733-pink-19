var navMain = document.querySelector('.main-nav');
var photoTagline = document.querySelector('.photo-start__tagline');
var photoStart = document.querySelector('.photo-start');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    photoTagline.classList.add('photo-start__tagline--nav-closed');
    photoStart.classList.add('photo-start--nav-closed');
  } else {
    photoTagline.classList.remove('photo-start__tagline--nav-closed');
    photoStart.classList.remove('photo-start--nav-closed');
  }
});

const hamburger = document.querySelector('.header__hamburger');
const contentNavigation = document.querySelector('.header__content');
const backgroundMenu = document.querySelector('.header__background');

if (hamburger) {
  hamburger.addEventListener("click", function(e) {
    document.body.classList.toggle('body__no-scroll');
    hamburger.classList.toggle('header__hamburger-active');
    contentNavigation.classList.toggle('header__content-active');
    backgroundMenu.classList.toggle('header__background-active');
  });
};

const navigationItems = document.querySelectorAll('.navigation__link');

if (navigationItems) {  
  navigationItems.forEach(navigationItem => {
    navigationItem.addEventListener('click', function(e) {
      document.body.classList.remove('body__no-scroll');
      hamburger.classList.remove('header__hamburger-active');
      contentNavigation.classList.remove('header__content-active');        
      backgroundMenu.classList.remove('header__background-active');
    })
  });
};

if (backgroundMenu) {
  backgroundMenu.addEventListener("click", function(e) {
    document.body.classList.remove('body__no-scroll');
    hamburger.classList.remove('header__hamburger-active');
    contentNavigation.classList.remove('header__content-active');        
    backgroundMenu.classList.remove('header__background-active');
  })
};

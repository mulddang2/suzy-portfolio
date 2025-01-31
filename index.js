// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
);
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active');
  } else {
    smallMenu.classList.add('header__sm-menu--active');
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  } else {
    headerHamMenuBtn.classList.add('d-none');
    headerHamMenuCloseBtn.classList.remove('d-none');
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
}

// ---
const headerLogoContainer = document.querySelector('.header__logo-container');

headerLogoContainer.addEventListener('click', () => {
  location.href = 'index.html';
});

window.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop;
  const topButton = document.getElementById('topButton');
  const homeButton = document.getElementById('homeButton');

  if (scrollTop > 200) {
    topButton.style.display = 'block';
    homeButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
    homeButton.style.display = 'none';
  }
});

const topButton = document.getElementById('topButton');
topButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const homeButton = document.getElementById('homeButton');
homeButton.addEventListener('click', function() {
  window.location.href = 'https://mulddang2.github.io/suzy-portfolio'; 
});

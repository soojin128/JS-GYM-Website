const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
  duration: .6,
  opacity:0,
  y: -150,
  stagger: .3
});

gsap.from('.animate-services', {
  scrollTrigger:'.animate-services',
  duration: .5,
  opacity:1,
  x: -150,
  stagger: .12
});

gsap.from('.animate-img', {
  scrollTrigger:'.animate-img',
  duration: 1.2,
  opacity:0,
  x: -200
});

gsap.from('.animate-membership', {
  scrollTrigger:'.animate-membership',
  duration: 1,
  opacity:0,
  y: -150,
  stagger: .3,
  delay:.5
});

gsap.from('.animate-card', {
  scrollTrigger:'.animate-card',
  duration: 1,
  opacity:0,
  y: -150,
  stagger: .1,
  delay:.2
});

gsap.from('.animate-team', {
  scrollTrigger:'.animate-team',
  duration: 1,
  opacity:0,
  y: -150,
  stagger: .3,
  delay:.2
});

gsap.from('.animate-email', {
  scrollTrigger:'.animate-email',
  duration: .8,
  opacity:0,
  y: -150,
  stagger: .25,
  delay:.6
});
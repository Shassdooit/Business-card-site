gsap.from('.hero__title', {opacity: 0, duration: 2,});
gsap.from('.hero__title', {y: 50, duration: 1.5, ease: "expo"});
gsap.from('.hero__descr', {opacity: 0, delay: .5, duration: 2.5,});
gsap.from('.hero__btn', {opacity: 0, duration: 2,});
gsap.from('.hero__btn', {y: 30, duration: 1.5, ease: "expo"});
gsap.from('.img-1', {opacity: 0, scale: .9, delay: .8, duration: .5,});
gsap.from('.img-2', {opacity: 0, scale: .9, delay: 1, duration: .5,});
gsap.from('.img-3', {opacity: 0, scale: .9, delay: 1.2, duration: .5,});
gsap.from('.photos__author', {opacity: 0, delay: 1.2, duration: 1.5,});

let tl = gsap.timeline({paused: true})
tl.fromTo('.menu', {display: "none", y: 200, opacity: 0},
{display: "block", y: 0, opacity: 1, duration: .5,}, '-=.4')
tl.fromTo('.menu__top', {display: "none", y: -50, opacity: 0},
{display: "block", y: 0, opacity: 1, duration: .3,}, '-=.7')
tl.from('.nav__list', {delay: .4, opacity: 0, y: 25, duration: .4,}, '-=.5')
tl.from('.social, .menu__right, .sub-menu', {delay: .7, y: 25, opacity: 0, duration: .5,}, '-=.7')


let open = document.querySelector('.burger')
let close = document.querySelector('.close')

open.addEventListener("click", () => tl.play  ())
close.addEventListener("click", () => tl.reverse ())

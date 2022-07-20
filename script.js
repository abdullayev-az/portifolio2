$('.hamburger').click(function(){
    $('.offcanvass').css({'opacity':'1','transform':'translateX(0)'});
});
$('.hamburger-close').click(function(){
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
});



$('.home').mouseover(function(){
   $('.home-img').css({'transform':'translate(-20%, 0%)'});
   $('.hover-img').css({'opacity':'0.8',});
});
$('.home').mouseout(function(){
    $('.home-img').css({'transform':'translate(-100%, -100%)'});
    $('.hover-img').css({'opacity':'1','background':'transparent',});
 });

 $('nav ul li').mouseover(function(){
   $('.cursor').css({'transform':' scale(4)'});
});
$('.hello').mouseover(function(){
   $('.cursor').css({'transform':' scale(4)'});
});
$('nav ul li').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.hello').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});




 TweenMax.from(".logo", 2, {
    opacity: 0,
    y: -50,
    delay: 1.8,
    ease: Expo.easeInOut
 })

 TweenMax.staggerFrom(".ul1 li", 2, {
    opacity: 0,
    x: -150,
    delay: 2,
    ease: Power3.easeInOut
 }, 0.51)

 TweenMax.staggerFrom(".ul2 li", 2, {
    opacity: 0,
    x: 150,
    delay: 2,
    ease: Power3.easeInOut
 }, 0.51)

 TweenMax.from(".hello", 2, {
   opacity: 0,
   x: -150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.01)

TweenMax.from(".auto-text", 2, {
   opacity: 0,
   x: 50,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.61)

TweenMax.from(".text", 2, {
   opacity: 0,
   x: 150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.01)

TweenMax.from(".scale", 4, {
   opacity: 0,
   x: 150,
   delay: 4,
   ease: Power3.easeInOut
}, 0.4)

TweenMax.from(".contact-icon img", 2, {
   opacity: 0,
   y: 50,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.2)

TweenMax.staggerFrom(".hamburger", 2, {
   opacity: 0,
   y: -50,
   x: -50,
   delay: 3,
   ease: Power3.easeInOut
}, 0.2)

TweenMax.to(".homepage-menu", 2, {
   width: "100%",
   ease: Expo.easeInOut
}, 0.2)

var typed = new Typed(".auto-text", {
   strings: ["Front-end Developer", "Web Developer", "Web Designer"],
   typeSpeed: 100,
   backSpeed: 100,
   loop: true
})

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
   cursor.style.left = e.pageX + 'px';
   cursor.style.top = e.pageY + 'px';
});

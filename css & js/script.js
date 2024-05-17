const burgerBtn = document.querySelector('.link__burger');
const burgerIcon = document.querySelector('.link__icon-burger');
const burgerMenu = document.querySelector('.nav__burger');

burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active');
    burgerIcon.classList.toggle('link__icon-burger_active');
    document.body.classList.toggle('overflow');
});

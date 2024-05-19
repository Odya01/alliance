const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.nav__burger');

burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active');
    document.body.classList.toggle('overflow');
});

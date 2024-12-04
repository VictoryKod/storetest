const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

/* Отслеживаем клик, если клик совершился */
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
});

let burger = document.querySelector('.fa-bars');
let menu = document.querySelector('.menu-left');

burger.addEventListener('click', () => {
    menu.classList.toggle("active");
}, false)


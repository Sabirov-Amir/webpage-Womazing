
//-----------------------------------------------------------------------------------------------------------------------------------------

// Menu burger on JavaScript
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
if (headerBurger) {
    headerBurger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock') // запрещаем скролить при открытом меню* 
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
}

// * document.body.classList.toggle('lock') // в css в body пишем overflow: hidden;

//-----------------------------------------------------------------------------------------------------------------------------------------
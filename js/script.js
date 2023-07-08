
//-----------------------------------------------------------------------------------------------------------------------------------------

// Menu burger on JavaScript
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const headerCall = document.querySelector('.header__call');

if (headerBurger) {
    headerBurger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock') // Prohibit scroll if menu is open* 
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
}
// * document.body.classList.toggle('lock') // in css for body.lock write 'overflow: hidden'

// При клике на иконку, вызывающую popup, закрывается меню бургер + лочится скролл благодаря коду в popup.js
if (headerCall) {
    headerCall.addEventListener("click", function(e) {
        headerBurger.classList.remove('active');
        headerMenu.classList.remove('active');
    });
}

//-----------------------------------------------------------------------------------------------------------------------------------------

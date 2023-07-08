
//-----------------------------------------------------------------------------------------------------------------------------------------
    
// Smooth scroll on JavaScript #1
const pageNavigation = document.querySelectorAll('.navigation[data-goto]');
if (pageNavigation.length > 0) {
    pageNavigation.forEach(pageNav => {
        pageNav.addEventListener("click", onPageNavClick);
    });

    function onPageNavClick(e) {
        const pageNav = e.target;
        if (pageNav.dataset.goto && document.querySelector(pageNav.dataset.goto)) {
            const gotoBlock = document.querySelector(pageNav.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('.header').offsetHeight;

            // Closing menu when click on link (inside menu)* 
            if(headerMenu.classList.contains('active')){
                document.body.classList.remove('lock') // Prohibit scroll when menu is open
                headerBurger.classList.remove('active');
                headerMenu.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// * Closing menu when click on link (inside menu) - 3 strings after 'if' took from 'Menu burger on JavaScript'

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

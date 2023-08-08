
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
if (headerBurger) {
    headerBurger.addEventListener("click", function(e) {
        document.body.classList.toggle('lock') // Prohibit scroll if menu is open* 
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
}
// * In css for body.lock need write 'overflow: hidden'

// При клике на иконку, вызывающую popup, закрывается меню бургер + лочится скролл благодаря коду в popup.js
const headerCall = document.querySelector('.header__call'); 
if (headerCall) {
    headerCall.addEventListener("click", function(e) {
        headerBurger.classList.remove('active');
        headerMenu.classList.remove('active');
    });
}

// При клике на контент(.close-menu) закрывается меню бургер
const closeMenu = document.querySelector('.close-menu');
if (closeMenu) {
    closeMenu.addEventListener("click", function(e) {
        document.body.classList.remove('lock')
        headerBurger.classList.remove('active');
        headerMenu.classList.remove('active');
    });
} 

//-----------------------------------------------------------------------------------------------------------------------------------------

// Tabs

// Находим наши табы и контент к ним
const tabsItem = document.querySelectorAll('.main__tabs-item');
const tabsContent = document.querySelectorAll('.main__tabs-content');

// Перебираем все табы (аргумент item - перебираемый таб) и ... 
tabsItem.forEach(item => item.addEventListener('click', event => {
	
	// Получаем значение кликнутого дата атрибута 
	const tabsItemTarget = event.target.getAttribute('data-tab'); 

	// При клике мы будем убирать класс 'active' у кого он есть
	tabsItem.forEach(element => element.classList.remove('tabs-item-active'));

	// При клике мы будем добавлять класс 'hidden' у кого его нет
	tabsContent.forEach(element => element.classList.add('tabs-content-hidden'));

	// Добавляем на нажатый таб класс 'active' (для css)
	item.classList.add('tabs-item-active');	

	// Благодаря нажатию на конкретный таб, мы находим связанный с ним контент(по дата атрибуту),
	// который требуется открыть, и убираем у него класс 'hidden'
	document.getElementById(tabsItemTarget).classList.remove('tabs-content-hidden');

}));

// Таб + контент по умолчанию
document.querySelector('[data-tab="tab-1"]').classList.add('tabs-item-active');
document.querySelector('#tab-1').classList.remove('tabs-content-hidden');

/* P.S. Принцип работы кода: Нам нужно понять как связать нажатый нами таб (item) с нужным контентом:
Мы будем нажимать по какому-то табу, брать у него значение дата атрибута (а оно у нас совпадает с id контента)
и таким образом находить нужный контент */

//-----------------------------------------------------------------------------------------------------------------------------------------

// Show which blocks when click 
// const headerMenuActive = document.querySelector('.header__menu.active');
// document.addEventListener('click', (e) => {
//        const click = e.composedPath();
//        console.log(click);
// })
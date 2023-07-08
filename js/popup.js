
const popupLinks = document.querySelectorAll('.popup-link'); 
const body = document.querySelector('body'); 
const lockPadding = document.querySelectorAll('.lock-padding'); 
 
let unlock = true; 
 
const timeout = 300; 
 
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault(); 
        });
    }
}
 
// Added .close-popup - click to element whith this class - popup is closing
const popupCloseIcon = document.querySelectorAll('.close-popup'); 
if (popupCloseIcon.length > 0) { 
    for (let index = 0; index < popupCloseIcon.length; index++) { 
        const el = popupCloseIcon[index]; 
        el.addEventListener('click', function (e) { 
            popupClose(el.closest('.popup')); 
            e.preventDefault(); 
        }); 
    } 
} 

// Open popup
function popupOpen(curentPopup) { 
    if (curentPopup && unlock) { 
        const popupActive = document.querySelector('.popup.open'); 
        if (popupActive) { 
            popupClose(popupActive, false); 
        } else { 
            bodyLock(); // Scroll block
        } 
        curentPopup.classList.add('open'); 
        curentPopup.addEventListener("click", function (e) { 
            if (!e.target.closest('.popup__content')) { 
                popupClose(e.target.closest('.popup')); 
            } 
        }); 
    } 
} 

// Close popup
function popupClose(popupActive, doUnlock = true) { 
    if (unlock) { 
        popupActive.classList.remove('open'); 
        if (doUnlock) { 
            bodyUnlock(); 
        } 
    } 
} 
 
// Blocking scroll
function bodyLock() { 
    // Высчитываем ширину полоски скролла и вычитаем её, чтобы контент не дергался
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'; 
  
    if (lockPadding.length > 0) { 
        for (let index = 0; index < lockPadding.length; index++) { 
            const el = lockPadding[index]; 
            el.style.paddingRight = lockPaddingValue; 
        } 
    } 
    body.style.paddingRight = lockPaddingValue; 
    body.classList.add('lock'); 
 
    unlock = false; 
    setTimeout(function () { 
        unlock = true; 
    }, timeout); 
} 

// Unblocking scroll
function bodyUnlock () { 
    setTimeout(function () { 
        if (lockPadding.length > 0) { 
            for (let index = 0; index < lockPadding.length; index++) { 
            const el = lockPadding[index]; 
            el.style.paddingRight = '0px'; 
            } 
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock'); 
    }, timeout);
      
    unlock = false; 
    setTimeout(function () { 
        unlock = true; 
    }, timeout);       
}

// Closing popup if Escape click 
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});
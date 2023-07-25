
// Swiper .about
const swiperAbout = new Swiper('.about__slider-text', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Speed
    speed: 600,

    // Number of slide for view
    slidesPerView: 1,

    // Cursor for grab
    grabCursor: true,

    // Effect 
    effect: 'slider', // 'slider', 'fade', 'flip', 'cube', 'cards',

    // First slide, which we see
    initialSlide: 1,

});

//-----------------------------------------------------------------------------------------------------------------------------------------

// Swiper .team 
const swiperTeam = new Swiper('.team__slider', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation buttons
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Speed
  speed: 600,

  // Number of slide for view
  slidesPerView: 1,

  // Cursor for grab
  grabCursor: true,

  // Effect 
  effect: 'slider', // 'slider', 'fade', 'flip', 'cube', 'cards',

  // First slide, which we see
  initialSlide: 1,

});

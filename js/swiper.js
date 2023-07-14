
// Инициализируем свайпер
const swiper = new Swiper('.about__slider-text', {

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
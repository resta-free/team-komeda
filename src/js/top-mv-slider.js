jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  let mvSlider = new Swiper('.js-top-mv-slider', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  });
  

});
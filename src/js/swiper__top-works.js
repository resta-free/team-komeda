jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  const swiper__topWorks = new Swiper('.js-topWorks-slider', {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});
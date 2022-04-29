jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  const swiper__topWorks = new Swiper('.swiper__top-works', {
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  
//サムネイル
var thumbs = new Swiper ('.thumbnail-swiper', {
  breakpoints: {
    768: {
      slidesPerView: 8,
      spaceBetween: 8,
      centeredSlides: false,
    }
  },
    slidesPerView: 2.13,
    spaceBetween: 24,
    centeredSlides: true,
    loopedSlides: 8, 
  // freeMode: true,
  // watchSlidesVisibility: true,
  // watchSlidesProgress: true,
  loop: true,
  slideToClickedSlide: true,
});

//メイン
var slider = new Swiper ('.gallery-swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 8, 
  // thumbs: {
  //   swiper: thumbs
  // },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
slider.controller.control = thumbs;
thumbs.controller.control = slider;

});
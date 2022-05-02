jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  //メイン
  var slider = new Swiper ('.gallery-swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 8, //スライドの枚数と同じ値を指定
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

//サムネイル
var thumbs = new Swiper ('.thumbnail-swiper', {
  slidesPerView: 2.13,
  loop: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  spaceBetween: 24,
  breakpoints: {
    768: {
      loop: true,
      slideToClickedSlide: true,
      slidesPerView: 8,
      spaceBetween: 8,
      centeredSlides: false,
    },
  }
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;
});

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.js-to-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.header').css('background', 'rgba(17,17,17,0.5)');
    }
  });

  // スクロールでMV過ぎるとヘッダー背景色変更
  $(function () {
    $(window).on("scroll", function () {
      const sliderHeight = $(".p-mv").height();
      if (sliderHeight - 30 < $(this).scrollTop()) {
        $(".js-header").addClass("headerColorScroll");
      } else {
        $(".js-header").removeClass("headerColorScroll");
      }
    });
  });


  //ドロワーメニュー
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      $('.js-drawer-menu').fadeOut();
      $(this).removeClass('is-open');
    } else {
      $('.js-drawer-menu').fadeIn();
      $(this).addClass('is-open');
    }
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
    

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



$(function () {
  // 헤더 스크롤
  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();

      if (st > 100) {
        $('#header').addClass('fixed');
      } else {
        $('#header').removeClass('fixed');
      }
    })
    .trigger('scroll');

  // 언어선택버튼
  $('#header .btn_wrap .lang_wrap').on('click', function (e) {
    e.preventDefault();

    $('#header .btn_wrap .lang_wrap .btn_lang .icon_arrow').toggleClass('on');
  });

  $('#header .btn_wrap .lang_wrap .btn_lang').on('click', function (e) {
    e.preventDefault();

    $('#header .btn_wrap .lang_wrap .lang').slideToggle(300);
  });

  // 모바일 메뉴
  // 열기
  $('#header .btn_open').on('click', function (e) {
    e.preventDefault();

    $('#header').addClass('on');
    $('#header .m_gnb_area').addClass('on');
    $('#header .dimmed').show();
    $(this).hide();
  });

  // 닫기
  $('#header .btn_colse, #header .dimmed').on('click', function () {
    $('#header').removeClass('on');
    $('#header .m_gnb_area').removeClass('on');
    $('#header .dimmed').hide();
    $('#header .btn_open').show();
  });

  // 모바일 아코디언메뉴(gnb)
  $('#header .m_gnb>li>a').on('click', function (e) {
    e.preventDefault();

    if (!$(this).next().is(':visible')) {
      $(this).parent().addClass('on').siblings().removeClass('on');
      $(this).next().slideDown().parent().siblings().find('.depth02').slideUp();
    } else {
      $(this).parent().removeClass('on');
      $(this).next().slideUp();
    }
  });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    speed: 800,
    effect: 'fade',
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
  });

  // 메인 에코 슬라이더
  var ecoSlider = new Swiper('.eco_slider', {
    loop: true,
    speed: 800,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // 메인 히스토리 슬라이더
  var historySlider = new Swiper('.main_history .history_slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    // 슬라이드 투명도 조절
    watchSlidesVisibility: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.main_history .swiper-scrollbar',
    },
    // 컬럼 갯수 변경
    // 1200이하
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // 767이하
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  // 메인 미디어 유튜브 모달
  // 열기
  $('.main_media .media_wrap .media_big, .main_media .media_wrap .media_list .media').on('click', function (e) {
    e.preventDefault();

    var id = $(this).data('id');
    var mediaTit = $(this).find('.media_tit').text();

    $('.main_youtube_modal').addClass('on');
    $('.main_media .dimmed').show();
    $('.main_media_tit').text(mediaTit);
    $('.main_media_video').attr('src', 'https://www.youtube.com/embed/' + id + '?loop=1&autoplay=1&mute=1&playlist=' + id);
  });

  // 닫기
  $('.main_youtube_modal .btn_close, .main_media .dimmed').on('click', function (e) {
    e.preventDefault();

    $('.main_youtube_modal').removeClass('on');
    $('.main_media .dimmed').hide();
    $('.main_media_video').attr('src', '');
  });

  // 메인 비지니스
  $('.main_business .tab_menu li').on('click', function (e) {
    e.preventDefault();

    $(this).addClass('active').siblings().removeClass('active');
  });

  // 푸터 패밀리 버튼
  $('#footer .btn_family').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
    $('#footer .family_wrap').stop().slideToggle();
  });
});

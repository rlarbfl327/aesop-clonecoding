$(document).ready(function () {

  // ----- 스와이퍼 슬라이드 -----

  /* #best_section 슬라이드 */
  new Swiper("#best_swiper", {
    loop: true,
    slidesPerView: 'auto',
    speed: 700,
    centeredSlides: true,
    // 자동 슬라이드
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // 네비게이션
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 페이지네이션
    pagination: {
      el: ".best_pager",
      type: "progressbar",
    },
    breakpoints: {
      768: {
        centeredSlides: false,
        spaceBetween: 33,
      }
    }
  });

  /* #perfum_section 슬라이드 */
  new Swiper("#home_swiper", {
    loop: true,
    slidesPerView: 'auto',
    speed: 700,
    centeredSlides: true,
    // 자동 슬라이드
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    // 네비게이션
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 페이지네이션
    pagination: {
      el: ".home_pager",
      type: "progressbar",
    },
    breakpoints: {
      768: {
        centeredSlides: false,
        spaceBetween: 33,
      }
    }
  });

  // ----- 네비게이션 -----

  // 해상도가 줄어들 때마다 사이즈 변경
  $(window).resize(function () {

    // 해상도가 1080 이상일 때
    if (window.innerWidth > 1080) {

      // 네비게이션 마우스 오버시 버튼 등장
      $(".swiper").mouseover(function () {
        $(".swiper-button-next").css({ "transform": "translateX(0)" });
        $(".swiper-button-prev").css({ "transform": "translateX(0)" });
      });

      // 네비게이션 마우스가 떠나면 버튼 퇴장
      $(".swiper").mouseout(function () {
        $(".swiper-button-next").css({ "transform": "translateX(50px)" });
        $(".swiper-button-prev").css({ "transform": "translateX(-50px)" });
      });
    }
    // 이하
    else {

      // 마우스 이벤트 제거
      $(".swiper").off("moseover");
      $(".swiper").off("mouseout");
    }
  }).resize();

});
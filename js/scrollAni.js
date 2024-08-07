$(document).ready(function () {

  let aromaAni = () => {

    let scrollTop = $(window).scrollTop();
    let aromaOffset = $("#aroma_section").offset().top;
    let woodOffset = $("#wood_section").offset().top;

    // 스크롤 값이 아로마 영역 - 200한 값 이상
    if (scrollTop > aromaOffset - 200) {
      $(".aroma_wrap").addClass("animate");
    }

    // 스크롤 값이 우드 영역 - 200한 값 이상
    if (scrollTop > woodOffset - 200) {
      $(".wood_wrap").addClass("animate");
    }
  }

  $(window).on("scroll", aromaAni);
});
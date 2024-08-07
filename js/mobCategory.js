$(document).ready(function () {

  /* ----- 모바일 카테고리 열기, 닫기 ----- */

  $(".category_m").click(function () {

    // 열기 버튼
    $(".category_box").toggleClass("open");

    // 닫기 버튼
    $(this).toggleClass("close");

    // 닫기 버튼 컬러 변경
    $(".category_m span").toggleClass("active");
  });

  /* ----- 모바일 카테고리 리스트 아코디언 ----- */

  $(".sub_title").click(function () {

    let btn = $(this);
    let sub = btn.siblings(".menu");

    // 슬라이드 되며 리스트 서브 메뉴 등장
    $(".menu").not(sub).slideUp();
    sub.slideToggle();

    // 클릭시 리스트 타이들 폰트 굵게, 언더라인
    $(".sub_title").not(btn).removeClass("active");
    btn.toggleClass("active");

    // 리스트 화살표 회전
    let list = btn.parent();

    $(".sub_m").not(list).removeClass("arrow_action");
    list.toggleClass("arrow_action");
  });

});
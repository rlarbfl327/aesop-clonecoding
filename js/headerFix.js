$(document).ready(function () {

  let headerTop = $("#header_inner").offset().top;

  // 해상도가 줄어들 때마다 사이즈 변경
  $(window).resize(function () {

    // 해상도가 760 이상일 때
    if (window.innerWidth > 760) {

      // 처음 렌더링시 스크롤 하지 않아도 포지션 유지
      if (headerTop == 0) {
        $("#header_inner").css({ "position": "relative" });
      }
    }
    
    // 이하
    else {

      // 처음 렌더링시 스크롤 하지 않아도 포지션 유지
      if (headerTop == 0) {
        $("#header_inner").css({ "position": "absolute" });
      }
    }
  }).resize();


  // 헤더 고정 함수
  let fix = () => {

    let ScrollTop = $(window).scrollTop();
    let mainHeight = $("main").height();

    // 해상도가 줄어들 때마다 사이즈 변경
    $(window).resize(function () {

      // 해상도가 760 이상일 때
      if (window.innerWidth > 760) {

        // 메인의 height보다 스크롤 값 이상
        if (ScrollTop > mainHeight) {
          $("#header_inner").css({ "position": "fixed" });
        }
        // 이하
        else {
          $("#header_inner").css({ "position": "relative" });
        }
      }

      // 이하
      else {

        // 메인의 height보다 스크롤 값 이상
        if (ScrollTop > mainHeight) {
          $("#header_inner").css({ "position": "fixed" });
          $("#header_inner").css({ "background": "#2d2b2b" });
        }
        // 이하
        else {
          $("#header_inner").css({ "position": "absolute" });
          $("#header_inner").css({ "background": "transparent" });
        }
      }
    }).resize();
  };

  // 이벤트 호출
  $(window).on("scroll", fix);

});
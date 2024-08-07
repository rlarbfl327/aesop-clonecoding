$(document).ready(function() {

  let mapBtn = $(".store_tab li .map_btn"),
      maps = $(".map_bg > div > iframe"),
      bg = $(".map_bg");
  
  // 팝업 닫기
  $(".close_btn").click(function() {
    bg.hide();
  });

  // 지도 보기 버튼 클릭시 지도 팝업 등장
  mapBtn.click(function() {
    let idx = $(this).parents().index();
    bg.show();
    maps.hide();
    maps.eq(idx).show();
  });

  // 초기값
  bg.hide();

});
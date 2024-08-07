$(document).ready(function () {
  let tabs = $(".store_tab li"),
      storeImg = $(".store_img img");

  tabs.click(function() {
    let idx = $(this).index();

    tabs.removeClass("active");
    tabs.eq(idx).addClass("active");

    tabs.children(".map_btn").removeClass("active");
    tabs.children(".map_btn").eq(idx).addClass("active");

    storeImg.hide();
    storeImg.eq(idx).show();
  });
});
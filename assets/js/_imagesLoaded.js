// 圖片延遲載入
$(function(){
  imagesLoaded("body", function() {
    $("#preloader").fadeOut(1000);
  });
});

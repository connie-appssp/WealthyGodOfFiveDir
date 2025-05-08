$(document).ready(function(){
  // 載入共用樣板
  // $("#header-placeholder").load("../../templet/nav.html");
  // $("#loading-placeholder").load("../../templet/loading.html");
  // $("#footer-top-placeholder").load("../../templet/footer-top-bg.html");
  // $("#footer-placeholder").load("../../templet/footer.html");

// 選單
var navigation = new Navigation(document.getElementById("navigation"));

// 圖片延遲載入
// $(function () {
//     imagesLoaded('body', function () {
//       $("#loading-placeholder").fadeOut(300)
//     })
// });

// 選單
var navScroll = $(".navbar-scroll");
var clicktotop = navScroll.offset().top;

  $(window).on("scroll",function(){
    
    var navTop = $(window).scrollTop();
    
    if( clicktotop < navTop ){
      navScroll.addClass("fixed-top navbar-scroll-top");
      
    }else{
      navScroll.removeClass("fixed-top navbar-scroll-top").addClass("");
    }
    
  });
  $(function () {
    const $sidebarMenu = $("#sidebarMenu");
  
    // 切換選單顯示方式根據視窗大小
    function toggleMenu() {
      if ($(window).width() >= 768) {
        $sidebarMenu.find("ul").show();
        $sidebarMenu.find("select").remove();
      } else {
        $sidebarMenu.find("ul").hide();
        if (!$sidebarMenu.find("select").length) createSelectMenu();
      }
    }
  
    // 創建下拉選單
    function createSelectMenu() {
      const $select = $("<select/>", { class: "form-select" }).appendTo(
        $sidebarMenu
      );
      const $optgroup = $("<optgroup/>", { label: "Menu Items" }).appendTo(
        $select
      );
  
      $sidebarMenu.find(".list-group-item").each(function () {
        const $anchor = $(this).find("a");
        $("<option/>", {
          value: $anchor.attr("href"),
          text: $anchor.text()
        }).appendTo($optgroup);
      });
      $select.on("change", function () {
        window.location.href = $(this).val();
      });
    }
  
    // 初始化和事件綁定
    toggleMenu();
    $(window).on("resize", toggleMenu);
  });

  $('.lamp-checkbox').change(function() {
    // 根據 data-target 屬性找到對應的輸入框
    let targetInput = $(this).data('target');
    $('#' + targetInput).prop('disabled', !$(this).is(':checked'));
  });


  var modalBody = $("#modalBody");
var saveButton = $("#saveChanges");
var checkbox = $("#exampleCheck1");

// 打開 Modal 當點擊 Label
$("#openModal").on("click", function () {
  $("#exampleModal").modal("show");
});

// 檢查滾動是否到底部，啟用 Save changes 按鈕
modalBody.on("scroll", function () {
  if (
    modalBody[0].scrollHeight - modalBody.scrollTop() <=
    modalBody.outerHeight()
  ) {
    saveButton.prop("disabled", false);
  }
});

// 點擊 Save changes 按鈕後關閉 Modal 並勾選 checkbox
saveButton.on("click", function () {
  $("#privacyPolicy").modal("hide");
  checkbox.prop("checked", true);
});

});
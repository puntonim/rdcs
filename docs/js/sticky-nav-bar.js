/* Fix Mainnav on Top of Page */
var $mainnav = $("#primary-nav"),
  $quicknav = $(".quickicons"),
  $mainbar = $(".main-header-bar"), // stickyTop = $mainnav.offset().top+50;
  // stickyTop = $mainnav.offset().top + $('.main-header-bar').height();
  stickyTop = $mainnav.offset().top;

enquire.register("only screen and (max-width: 900px)", {
  match: function () {
    $("body").addClass("mobile");
    resetNavi();
  },
  unmatch: function () {
    $("body").removeClass("mobile");
    $(".primary-nav").removeClass("active");
    $("body").removeClass("body-nav-open");
    fixNavi(stickyTop);
  },
});

function fixNavi(navTop) {
  if (!$("body").hasClass("mobile")) {
    if ($(window).scrollTop() >= navTop) {
      $mainbar.addClass("resized");
      $mainnav.addClass("fixed");
      $quicknav.addClass("translated");
    } else {
      $mainbar.removeClass("resized");
      $mainnav.removeClass("fixed");
      $quicknav.removeClass("translated");
    }
  } else {
    /* do nothing! */
  }
}

function resetNavi() {
  $mainbar.removeClass("resized");
  $mainnav.removeClass("fixed");
  $quicknav.removeClass("translated");
}

$(window).on("scroll", function () {
  fixNavi(stickyTop);
});

$(window).on("resize", function () {
  setTimeout(function () {
    resetNavi();
    stickyTop = $mainnav.offset().top;
    fixNavi(stickyTop);
  }, 100);

  // timer = setTimeout(function(){
  //   $.stellar('refresh');
  // }, 1000);
});

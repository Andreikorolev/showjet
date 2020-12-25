if ($(".article-page__article").length) {
  $(window).scroll(function () {
    var windowScrollTop = $(window).scrollTop();
    var socButtonsOffset = $(".article__img-soc-wrap").offset();
    var socButtonsHeight = $(".article__soc-buttons").height();
    var headerHeight = $(".header").height();
    if (windowScrollTop > socButtonsOffset.top - headerHeight) {
      $(".article__soc-buttons").addClass("fixed");
      $(".article__soc-buttons").removeClass("bottom-sticky");
    } else {
      $(".article__soc-buttons").removeClass("fixed");
      $(".article__soc-buttons").removeClass("bottom-sticky");
    }
  });
}
var articlePageTiles = new Swiper(".article-page__tiles-slider", {
  direction: "horizontal",
  speed: 1000,
  // slidesPerView: 5,
  // slidesPerGroup: 5,
  slidesOffsetAfter: 10,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1280: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
    1920: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },
  },
});

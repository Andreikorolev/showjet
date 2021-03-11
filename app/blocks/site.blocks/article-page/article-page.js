if ($(".article-page__article").length) {
  var headerHeight = $(".header").height();
  $(window).scroll(function () {
    var imgSocWrap = $(".article__img-soc-wrap")[0].getBoundingClientRect();
    var socButtons = $(".article__soc-buttons")[0].getBoundingClientRect();
    var article = $(".article")[0].getBoundingClientRect();

    if (headerHeight >= imgSocWrap.top) {
      if (article.top + article.height < socButtons.height + 106) {
        $(".article__soc-buttons").removeClass("fixed-top");
        $(".article__soc-buttons").css({
          top: article.height - socButtons.height + "px",
        });
        $(".article__img-soc-wrap").addClass("static");
      } else {
        $(".article__soc-buttons").addClass("fixed-top");
        $(".article__img-soc-wrap").removeClass("static");
        $(".article__soc-buttons").css({
          top: ``,
        });
      }
    } else {
      $(".article__soc-buttons").removeClass("fixed-top");
      $(".article__img-soc-wrap").removeClass("static");
    }
  });
}
var articlePageTiles = new Swiper(".article-page__tiles-slider", {
  direction: "horizontal",
  speed: 1000,
  // slidesPerView: 5,
  // slidesPerGroup: 5,
  // slidesOffsetAfter: 10,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: "auto",
      slidesPerGroup: 4,
    },
    1280: {
      slidesPerView: "auto",
      slidesPerGroup: 5,
    },
    1920: {
      slidesPerView: "auto",
      slidesPerGroup: 6,
    },
  },
});

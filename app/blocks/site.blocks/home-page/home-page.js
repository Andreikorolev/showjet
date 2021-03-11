var homePageRecommendedSerials = new Swiper(
  ".home-page__recommended-serials-slider",
  {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: "auto",
    slidesPerGroup: 6,
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
  }
);

var homePageContinueWatching = new Swiper(
  ".home-page__continue-watching-slider",
  {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: "auto",
    slidesPerGroup: 5,
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
        slidesPerGroup: 5,
      },
    },
  }
);

var homePageWatchingNowSerial = new Swiper(".home-page__watching-now-slider", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: "auto",
  slidesPerGroup: 5,
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
      slidesPerGroup: 5,
    },
  },
});

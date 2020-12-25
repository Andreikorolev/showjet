var homePageRecommendedSerials = new Swiper(
  ".home-page__recommended-serials-slider",
  {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: 6,
    slidesPerGroup: 6,
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
        slidesPerView: 6,
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
    slidesPerView: 5,
    slidesPerGroup: 5,
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
  }
);

var homePageWatchingNowSerial = new Swiper(".home-page__watching-now-slider", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 5,
  slidesPerGroup: 5,
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

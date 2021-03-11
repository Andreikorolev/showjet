var serialsPageSlider = new Swiper(".serials-page__slider", {
  breakpoints: {
    1024: {
      speed: 1000,
      direction: "horizontal",
      slidesPerView: "auto",
      slidesPerGroup: 4,
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
    },
    1280: {
      slidesPerView: "auto",
      slidesPerGroup: 5,
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
    },
    1920: {
      loop: false,
      slidesPerView: "auto",
      slidesPerGroup: 6,
      navigation: {
        nextEl: null,
        prevEl: null,
      },
      // slidesOffsetAfter: 0,
    },
  },
});

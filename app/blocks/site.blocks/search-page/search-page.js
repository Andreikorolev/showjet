var searchSlider = new Swiper(".search-page__slider", {
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

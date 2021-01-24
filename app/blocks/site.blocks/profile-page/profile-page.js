$(".profile-page__setting-button-item_stat").on("click", function () {
  $(".profile-page__wrap").hide();
  $(".profile-page__stat").addClass("open");
});

$(".stat__back-button").on("click", function () {
  $(".profile-page__wrap").show();
  $(".profile-page__stat").removeClass("open");
});

$(".device__delete").on("click", function () {
  $(".delete-popup-device-delete").show();
  $("body").addClass("noscroll");
});

$(".profile-page__setting-button-item_history").on("click", function () {
  $(".delete-popup-history").show();
  $("body").addClass("noscroll");
});

$(".profile-page__setting-button-item_mine").on("click", function () {
  $(".delete-popup-mine").show();
  $("body").addClass("noscroll");
});

$(".profile-page__setting-button-item_trouble").on("click", function () {
  $(".trouble-popup-wrap").show();
  $("body").addClass("noscroll");
});

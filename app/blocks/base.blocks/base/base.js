$(".light-page").parent("body").addClass("light");

// global variables for video player
var isVideoPlay = false;
var isVideoMuted = true;

//hadle focus/unfocus on browser tab
function hiddenBrowserTab() {
  isVideoPlay = true;
}
function visibleBrowserTab() {
  isVideoPlay = false;
}

if (/*@cc_on!@*/ false) {
  // check for Internet Explorer
  document.onfocusin = visibleBrowserTab;
  document.onfocusout = hiddenBrowserTab;
} else {
  window.onfocus = visibleBrowserTab;
  window.onblur = hiddenBrowserTab;
}

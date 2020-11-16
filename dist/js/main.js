$(".light-page").parent("body").addClass("light");

// global variables for video player
var isVideoPlay = false;
var isVideoMuted = true;
var aboutSerialSlider = new Swiper('.video-list__tiles-wrap', {
  direction: 'horizontal',
  speed: 1000,
  slidesPerView: 5,
  slidesPerGroup: 5,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
});


// function for resizing md, lg, xl tiles 
function resizeTile(tileSize, numberOfTiles) {
	var body = document.querySelector('body');
	var tile = $('.tile__' + tileSize);
	var wrapperWidth = tile.parent().width();

	var angleOffset = Math.sin((11*Math.PI)/180) * ( ( wrapperWidth / numberOfTiles ) / 1.8 );
	var tileWidth = (wrapperWidth + (( angleOffset - 3 )  * (numberOfTiles -1))) / numberOfTiles;
	var tileHeight = (wrapperWidth / numberOfTiles) / 1.8;
	var infoOffset = angleOffset + 20;

    body.style.setProperty('--' + tileSize + '-tile-width', tileWidth + 'px');
    body.style.setProperty('--' + tileSize + '-tile-height', tileHeight + 'px');
    body.style.setProperty('--' + tileSize + '-angle-offset', angleOffset + 'px');
    body.style.setProperty('--' + tileSize + '-margin-right', -(angleOffset - 3) + 'px');
    body.style.setProperty('--' + tileSize + '-info-offset', infoOffset + 'px');
};


$(window).on('load', function() {
 	resizeTile('md', 4);
 	resizeTile('lg', 3);
 	resizeTile('xl', 2);
});



$( window ).resize(function() {
	resizeTile('md', 4);
	resizeTile('lg', 3);
	resizeTile('xl', 2);
});
$( ".tile" ).each(function() {
	var progress = $(this).data("progress");
	$(this).find(".tile__progress-bar").width(progress + '%');
});

$(".tile.tile-info").hover(
	function(){
		var targetTile = $(this);
		// set timer
		timer = setTimeout(function() {
			targetTile.find(".tile__bg").hide();
			var videoID = targetTile.find('video').attr('id');
			var player = videojs(videoID);
			player.src({ type: 'application/x-mpegURL', src: $(targetTile).data("videourl") });
			player.play();
			isVideoPlay = true;

			var muteButton = targetTile.find('.tile__sound-button');
			if (isVideoMuted) {
				muteButton.removeClass("tile__sound-button_on");
				player.muted(isVideoMuted);
			} else {
				muteButton.addClass("tile__sound-button_on");
				player.muted(isVideoMuted);
			}

			// handler for video end
			player.on('ended', function() {
				targetTile.find(".tile__bg").show();
			});

			//mute button handler
			muteButton.on('click', function(){
				isVideoMuted ? muteButton.addClass("tile__sound-button_on") : muteButton.removeClass("tile__sound-button_on");
				player.muted(!isVideoMuted);
				isVideoMuted = !isVideoMuted;
          		player.volume(1);
			});
			// end mute button handler

			// mouse move handler
			tileInfoWrap = targetTile.find(".tile__info-wrap");
			setTimeout(function() {
				tileInfoWrap.addClass("hide");
			}, 3000)
			var mouseTimer;
			document.onmousemove = function() {
				tileInfoWrap.removeClass("hide");
				clearTimeout(mouseTimer);
				mouseTimer = setTimeout(function() {
					tileInfoWrap.addClass("hide");
				}, 3000)
			};
			// end mouse move handler
		}, 1000);
	}, function() {
		// reset timer
		clearTimeout(timer);
		var videoID = $(this).find('video').attr('id');
		var player = videojs(videoID);
		player.reset();
		isVideoPlay = false;
		$(this).find(".tile__bg").show();
	}
);
$(".about-serial__navigation-item").click(function(){
	$( ".about-serial__navigation-item" ).each(function() {
		$(this).removeClass("active");
	});
	$(".about-serial__tab").hide();

	$(this).addClass("active");
	var targetTab = $(this).attr("data-target");
	$("#" + targetTab).show();
});

$(".actors-creators__item").on('click', function(){
	console.log('click');
	$(".actors-creators__person").addClass("active");
	$(".actors-creators__wrap").hide();
});

$(".actors-creators__person-back-button").on('click', function(){
	console.log('click');
	$(".actors-creators__person").removeClass("active");
	$(".actors-creators__wrap").show();
});
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "filter": */
x = document.getElementsByClassName("filter");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "filter__selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "filter__items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.setAttribute("class", "filter__item");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("filter__item_selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].classList.remove("filter__item_selected");
            }
            this.classList.add("filter__item_selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("filter__items");
  y = document.getElementsByClassName("filter__selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
$('.nav__menu a').each(function () {
	if (this.href == location.href) $(this).addClass('active');
});

$(window).scroll(function(){
	if ($(window).scrollTop() > 86) {
		$(".header").addClass('fixed');
	} else {
		$(".header").removeClass('fixed');
	}
});
if ($(".home-page-banner").length){
	//banner mute button handler
	var bannerVideoID = $(".home-page-banner").find('video').attr('id');
	var bannerPlayer = videojs(bannerVideoID);
	var bannerMuteButton = $(".home-page-banner").find('.home-page-banner__sound-button');


	// handler if other player is play
	setInterval(function (){
		if (!isVideoPlay && $(window).scrollTop() < 300) {
			bannerPlayer.play();
		} else {
			bannerPlayer.pause();
		}

		if (isVideoMuted) {
			bannerMuteButton.removeClass("home-page-banner__sound-button_on");
			bannerPlayer.muted(isVideoMuted);
		} else {
			bannerMuteButton.addClass("home-page-banner__sound-button_on");
			bannerPlayer.muted(isVideoMuted);
		}
	},500);

	// scroll handler
	if ($('.home-page-banner').length) {
		var bannerHeight = $('.home-page-banner').height();
		$(window).scroll(function(){
			var windowScrollTop = $(window).scrollTop();
			if (windowScrollTop > 300 ) {
				bannerPlayer.pause();
				$(".home-page-banner__tiles-cover").hide();
			} else {
				bannerPlayer.play();
				$(".home-page-banner__tiles-cover").show();
			}

			if (windowScrollTop > 150 ) {
				$(".home-page-banner__tiles-cover").hide();
			} else {
				$(".home-page-banner__tiles-cover").show();
			}			
		});
	}


	bannerMuteButton.on('click', function(){
		isVideoMuted ? bannerMuteButton.addClass("home-page-banner__sound-button_on") : bannerMuteButton.removeClass("home-page-banner__sound-button_on");
		bannerPlayer.muted(!isVideoMuted);
		bannerPlayer.volume(1);
		isVideoMuted = !isVideoMuted;
	});
};
if ($('.article-page__article').length) {
	$(window).scroll(function(){
		var windowScrollTop = $(window).scrollTop();
		if (windowScrollTop > 250 && windowScrollTop < ($('.article').height() + $(".article").offset().top) - $(".header").height() - $(".article__soc-buttons").height()) {
			$(".article__soc-buttons").addClass('fixed');
		} else {
			$(".article__soc-buttons").removeClass('fixed');
		}
	});
}
var articlePageTiles = new Swiper('.article-page__tiles-slider', {
	direction: 'horizontal',
	speed: 1000,
	// slidesPerView: 5,
	// slidesPerGroup: 5,
	slidesOffsetAfter: 10,
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
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
		}
	},
});
$(window).on('load', function() {
	var body = document.querySelector('body');
	var collectionTile = $('.collection-tile');
	var collectionWrapperWidth = collectionTile.parent().width();

	var collectionAngleOffset = Math.sin((11*Math.PI)/180) * ( ( collectionWrapperWidth / 4 ) / 1.8 );
	var collectionTileWidth = ( collectionWrapperWidth + (( collectionAngleOffset - 3 )  * 3 )) / 4;
	var collectionTileHeight = ( collectionWrapperWidth / 4 ) / 1.8;

	var collectionHoverOffset = (((collectionTileWidth * 1.4) - collectionTileWidth) / 2) * 0.71;

	body.style.setProperty('--collection-angle-offset', collectionAngleOffset + 'px');
	body.style.setProperty('--collection-tile-width', collectionTileWidth + 'px');
	body.style.setProperty('--collection-tile-height', collectionTileHeight + 'px');
	body.style.setProperty('--collection-margin-right', -(collectionAngleOffset - 3) + 'px');

    body.style.setProperty('--collection-hover-offset', collectionHoverOffset + 'px');
});



$( window ).resize(function() {
	var body = document.querySelector('body');
	var collectionTile = $('.collection-tile');
	var collectionWrapperWidth = collectionTile.parent().width();

	var collectionAngleOffset = Math.sin((11*Math.PI)/180) * ( ( collectionWrapperWidth / 4 ) / 1.8 );
	var collectionTileWidth = ( collectionWrapperWidth + (( collectionAngleOffset - 3 )  * 3 )) / 4;
	var collectionTileHeight = ( collectionWrapperWidth / 4 ) / 1.8;

	var collectionHoverOffset = (((collectionTileWidth * 1.4) - collectionTileWidth) / 2) * 0.71;

	body.style.setProperty('--collection-angle-offset', collectionAngleOffset + 'px');
	body.style.setProperty('--collection-tile-width', collectionTileWidth + 'px');
	body.style.setProperty('--collection-tile-height', collectionTileHeight + 'px');
	body.style.setProperty('--collection-margin-right', -(collectionAngleOffset - 3) + 'px');

    body.style.setProperty('--collection-hover-offset', collectionHoverOffset + 'px');
});
var homePageRecommendedSerials = new Swiper('.home-page__recommended-serials-slider', {
	direction: 'horizontal',
	speed: 1000,
	slidesPerView: 5,
	slidesPerGroup: 5,
	slidesOffsetAfter: 10,
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
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
		}
	},
});

var homePageContinueWatching = new Swiper('.home-page__continue-watching-slider', {
	direction: 'horizontal',
	speed: 1000,
	slidesPerView: 5,
	slidesPerGroup: 5,
	slidesOffsetAfter: 10,
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
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
		}
	},
});


var homePageWatchingNowSerial = new Swiper('.home-page__watching-now-slider', {
	direction: 'horizontal',
	speed: 1000,
	slidesPerView: 5,
	slidesPerGroup: 5,
	slidesOffsetAfter: 10,
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
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
		}
	},
});
$(".news-page__navigation-item").click(function(){
	$( ".news-page__navigation-item" ).each(function() {
		$(this).removeClass("active");
	});
	$(".news-page__tab").removeClass('active-tab');

	$(this).addClass("active");
	var targetTab = $(this).attr("data-target");
	$("#" + targetTab).addClass('active-tab');
});
var searchSlider = new Swiper('.search-page__slider', {
	direction: 'horizontal',
	speed: 1000,
	slidesPerView: 5,
	slidesPerGroup: 5,
	slidesOffsetAfter: 10,
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
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
		}
	},
});
// $(window).on('load', function() {
//     var tileWrapper = document.querySelector('.testTile__wrap');
// 	var tile = $('.testTile');
// 	var wrapperWidth = tile.parent().width();

// 	var angleOffset = Math.sin((11*Math.PI)/180) * ( ( wrapperWidth / 6 ) / 1.8 );
// 	var tileWidth = ( wrapperWidth + (( angleOffset - 3 )  * 5 )) / 6;
// 	var tileHeight = ( wrapperWidth / 6 ) / 1.8;

// 	var angleHoverOffset = Math.sin((11*Math.PI)/180) * ( (( wrapperWidth / 6 ) / 1.8 ) * 1.65 );
// 	var tileHoverWidth = ((wrapperWidth + ((angleHoverOffset - 3) * 5)) / 6) * 1.65;
// 	var tileHoverHeight = (( wrapperWidth / 6 ) / 1.8 ) * 1.65;

//     tileWrapper.style.setProperty('--tile-width', tileWidth + 'px');
//     tileWrapper.style.setProperty('--tile-height', tileHeight + 'px');
//     tileWrapper.style.setProperty('--angle-offset', angleOffset + 'px');
//     tileWrapper.style.setProperty('--margin-right', -(angleOffset - 3) + 'px');

//     tileWrapper.style.setProperty('--tile-hover-width', tileHoverWidth + 'px');
//     tileWrapper.style.setProperty('--tile-hover-height', tileHoverHeight + 'px');
//     tileWrapper.style.setProperty('--angle-hover-offset', angleHoverOffset + 'px');
// });



// $( window ).resize(function() {
//     var tileWrapper = document.querySelector('.testTile__wrap');
// 	var tile = $('.testTile');
// 	var wrapperWidth = tile.parent().width();

// 	var angleOffset = Math.sin((11*Math.PI)/180) * ( ( wrapperWidth / 6 ) / 1.8 );
// 	var tileWidth = ( wrapperWidth + (( angleOffset - 3 )  * 5 )) / 6;
// 	var tileHeight = ( wrapperWidth / 6 ) / 1.8;

// 	var angleHoverOffset = Math.sin((11*Math.PI)/180) * ( (( wrapperWidth / 6 ) / 1.8 ) * 1.65 );
// 	var tileHoverWidth = ((wrapperWidth + ((angleHoverOffset - 3) * 5)) / 6) * 1.65;
// 	var tileHoverHeight = (( wrapperWidth / 6 ) / 1.8 ) * 1.65;

//     tileWrapper.style.setProperty('--tile-width', tileWidth + 'px');
//     tileWrapper.style.setProperty('--tile-height', tileHeight + 'px');
//     tileWrapper.style.setProperty('--angle-offset', angleOffset + 'px');
//     tileWrapper.style.setProperty('--margin-right', -(angleOffset - 3) + 'px');

//     tileWrapper.style.setProperty('--tile-hover-width', tileHoverWidth + 'px');
//     tileWrapper.style.setProperty('--tile-hover-height', tileHoverHeight + 'px');
//     tileWrapper.style.setProperty('--angle-hover-offset', angleHoverOffset + 'px');
// });
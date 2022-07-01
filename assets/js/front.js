/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$(function () {
  sliderHomepage()
  sliders()
})

/* slider homepage */
function sliderHomepage () {
  if ($('#slider').length) {
    // var owl = $('#slider')

    $('#slider').owlCarousel({
      autoPlay: 3000,
      items: 4,
      itemsDesktopSmall: [900, 3],
      itemsTablet: [600, 3],
      itemsMobile: [500, 2]
    })
  }
}

/* sliders */
function sliders () {
  if ($('.owl-carousel').length) {
    $('.customers').owlCarousel({
      items: 4,
      itemsDesktopSmall: [990, 4],
      itemsTablet: [768, 2],
      itemsMobile: [480, 1]
    })

    $('.testimonials').owlCarousel({
      items: 4,
      itemsDesktopSmall: [990, 3],
      itemsTablet: [768, 2],
      itemsMobile: [480, 1]
    })

    $('.project').owlCarousel({
      navigation: true, // Show next and prev buttons
      navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      slideSpeed: 300,
      paginationSpeed: 400,
      autoPlay: true,
      stopOnHover: true,
      singleItem: true,
      afterInit: '',
      lazyLoad: true
    })

    $('.homepage').owlCarousel({
      navigation: false, // Show next and prev buttons
      navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      slideSpeed: 2000,
      paginationSpeed: 1000,
      autoPlay: true,
      stopOnHover: true,
      singleItem: true,
      lazyLoad: false,
      addClassActive: true,
      afterInit: function () {
        // animationsSlider()
      },
      afterMove: function () {
        // animationsSlider()
      }
    })
  }
}

function animationsSlider () {
  var delayTimeSlider = 400

  $('.owl-item:not(.active) [data-animate-always]').each(function () {
    $(this).removeClass('animated')
    $(this).removeClass($(this).data('animate-always'))
    $(this).stop(true, true, true).css({opacity: 0})
  })

  $('.owl-item.active [data-animate-always]').each(function () {
    delayTimeSlider += 500

    $(this).delay(delayTimeSlider).queue(function () {
      $(this).addClass('animated')
      $(this).addClass($(this).data('animate-always'))

      console.log($(this).data('animate-always'))
    })
  })
}

/* Equal height */
/* Stolen from https://dev.to/dhruvangg/equal-height-in-vanilla-javascript-49ch */
function setHeight(el, val) {
  if (typeof val === "function") val = val();
  if (typeof val === "string") el.style.height = val;
  else el.style.height = val + "px";
}

var equalheight = function(container){
  var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;

  Array.from(document.querySelectorAll(container)).forEach((el,i) => {
    el.style.height = "auto";
    topPostion = el.offsetTop;
    if(currentRowStart != topPostion){
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        setHeight(rowDivs[currentDiv], currentTallest)
      }
      rowDivs.length = 0;
      currentRowStart = topPostion;
      currentTallest = parseFloat(getComputedStyle(el, null).height.replace("px", ""))
      rowDivs.push(el);
    } else {
      rowDivs.push(el);
      currentTallest = (currentTallest < parseFloat(getComputedStyle(el, null).height.replace("px", ""))) ? (parseFloat(getComputedStyle(el, null).height.replace("px", ""))) : (currentTallest);
    }
    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
      setHeight(rowDivs[currentDiv], currentTallest)
    }
  })
}

window.addEventListener("load", function(){
  equalheight('.same-height-always')
})
window.addEventListener("resize", function(){
  setTimeout(function(){
    equalheight('.same-height-always')
  })
})

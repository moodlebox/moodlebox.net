/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$(function () {
  menuSliding()
})

/* menu sliding */
function menuSliding () {
  $('.dropdown').on('show.bs.dropdown', function () {
    if ($(window).width() > 750) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown()
    } else {
      $(this).find('.dropdown-menu').first().stop(true, true).show()
    }
  })

  $('.dropdown').on('hide.bs.dropdown', function () {
    if ($(window).width() > 750) {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp()
    } else {
      $(this).find('.dropdown-menu').first().stop(true, true).hide()
    }
  })
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

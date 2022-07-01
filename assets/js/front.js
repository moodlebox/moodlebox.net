/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "animationsSlider" }] */

$(function () {
  sliderHomepage()
  sliders()
})

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

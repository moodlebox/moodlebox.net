/* MoodleBox web site specific Javascript code */
jQuery(document).ready(function (e) {
//
  /* Make dropdown link work correctly when clicked */
  $('.dropdown-toggle').click(function (e) {
    if ($(document).width() > 750) {
      e.preventDefault()
      var url = $(this).attr('href')
      if (url !== '#') {
        window.location.href = url
      }
    }
  })

  /* Make dropdown open on hover and close when leaving */
  $('.dropdown').hover(function (e) {
    if ($(document).width() > 750) {
      $(this).children('a').addClass('open')
    }
  }, function (e) {
    if ($(document).width() > 750) {
      $(this).removeClass('open')
      $(this).children('a').blur()
      $(this).children('a').removeClass('open')
    }
  })

  /* Donation form */
  $("input[name='radio-donation-level']:radio").change(function () {
    var parentForm = $(this).parents('form')
    parentForm.find('.give-default-level, .give-radio-input').removeClass('give-default-level')
    $(this).addClass('give-default-level')
    if ($.isNumeric($(this).val())) {
      parentForm.find('.give-text-input').val($(this).val())
    } else {
      parentForm.find('.give-text-input').focus()
    }
  })
  $("input[name='amount']#give-amount").focus(function () {
    var parentForm = $(this).parents('form')
    parentForm.find('.give-default-level, .give-radio-input').removeClass('give-default-level')
    parentForm.find('.give-radio-input').prop('checked', false)
    parentForm.find('.give-radio-input.give-radio-level-custom').prop('checked', true)
  })

  /* Knowledge base */
  $('#kb-container').find('.kb-show-all-articles').on('click', function () {
    var kbElems = $(this).parent('ul').find('li')
    $(this).toggleClass('active')
    if ($(this).hasClass('active')) {
      $(this).find('.kb-show-text').addClass('kb-hidden-elem')
      $(this).find('.kb-hide-text').removeClass('kb-hidden-elem')
    } else {
      $(this).find('.kb-show-text').removeClass('kb-hidden-elem')
      $(this).find('.kb-hide-text').addClass('kb-hidden-elem')
    }
    kbElems.each(function () {
      if ($(this).hasClass('kb-hidden-elem')) {
        $(this).removeClass('kb-hidden-elem')
        $(this).addClass('visible')
      } else {
        $(this).hasClass('visible') && ($(this).removeClass('visible'), $(this).addClass('kb-hidden-elem'))
      }
    })
  })
//
})

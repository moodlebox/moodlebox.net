/* MoodleBox web site specific Javascript code */

/* Make dropdown link work correctly when clicked */
const dropDownToggles = document.querySelectorAll('.dropdown-toggle')
for (const dropDown of dropDownToggles) {
  dropDown.addEventListener('click', function (e) {
    if (document.body.clientWidth > 750) {
      e.preventDefault()
      var url = this.getAttribute('href')
      if (url !== '#') {
        window.location.href = url
      }
    }
  })
}

/* Make dropdown open on hover and close when leaving */
const dropDowns = document.querySelectorAll('.dropdown')
for (const dropDown of dropDowns) {
  dropDown.addEventListener('mouseover', function (e) {
    if (document.body.clientWidth > 750) {
      this.querySelector('a').classList.add('open')
    }
  }),
  dropDown.addEventListener('mouseout', function (e) {
    if (document.body.clientWidth > 750) {
      this.classList.remove('open')
      this.querySelector('a').blur()
      this.querySelector('a').classList.remove('open')
    }
  })
}

/* Utility function */
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

/* Donation form */
const radioButtons = document.querySelectorAll("input[name='radio-donation-level']")
for (const radioButton of radioButtons) {
  radioButton.addEventListener('change', function (e) {
    const parentFormElements = this.form.querySelectorAll('.give-default-level, .give-radio-input')
    for (const elem of parentFormElements) {
      elem.classList.remove('give-default-level')
    }
    this.classList.add('give-default-level')
    if (isNumeric(this.value)) {
      this.form.querySelector('.give-text-input').value = this.value
    } else {
      this.form.querySelector('.give-text-input').focus()
    }
  })
}

const giveAmount = document.querySelector("input[name='amount']#give-amount")
if (giveAmount) {
  giveAmount.addEventListener('focus', function (e) {
      const parentFormElements = this.form.querySelectorAll('.give-default-level, .give-radio-input')
      for (const elem of parentFormElements) {
        elem.classList.remove('give-default-level')
        elem.checked = false
      }
      this.form.querySelector('.give-radio-input.give-radio-level-custom').checked = true
  })
}

const kbContainer = document.querySelector("#kb-container")
if (kbContainer) {
  const showAllArticlesLinks = kbContainer.querySelectorAll('.kb-show-all-articles')
  for (const link of showAllArticlesLinks) {
    link.addEventListener('click', function (e) {
      this.classList.toggle('active')
      if (this.classList.contains('active')) {
        this.querySelector('.kb-show-text').classList.add('kb-hidden-elem')
        this.querySelector('.kb-hide-text').classList.remove('kb-hidden-elem')
      } else {
        this.querySelector('.kb-show-text').classList.remove('kb-hidden-elem')
        this.querySelector('.kb-hide-text').classList.add('kb-hidden-elem')
      }

      const kbElems = this.closest('ul').querySelectorAll('li')
      for (const elem of kbElems) {
        //console.log(elem)
        if (elem.classList.contains('kb-hidden-elem')) {
          elem.classList.remove('kb-hidden-elem')
          elem.classList.add('kb-originally-hidden-elem')
        } else {
          if (elem.classList.contains('kb-originally-hidden-elem')) {
            elem.classList.add('kb-hidden-elem')
            elem.classList.remove('kb-originally-hidden-elem')
          }
        }
      }
    })
  }
}

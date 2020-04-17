/* MoodleBox contact form javascript code */
jQuery(document).ready(function (e) {
  $(function () {
    $('#contact').find('input,select,textarea').jqBootstrapValidation({
      preventSubmit: true,
      submitError: function ($form, event, errors) {
      },
      submitSuccess: function ($form, e) {
        e.preventDefault()
        var submitButton = $('input[type=submit]', $form)
        $.ajax({
          type: 'POST',
          // Set real action URL
          url: 'https://hooks.zapier.com/hooks/catch/2849143/8rav6j/',
          data: $form.serialize(),
          beforeSend: function (xhr, opts) {
            if ($('#_email', $form).val()) {
              xhr.abort()
            } else {
              submitButton.prop('value', 'Please Wait...')
              submitButton.prop('disabled', 'disabled')
            }
          }
        }).done(function (data) {
          submitButton.prop('value', 'Thank you, we\x27ll get back to you shortly.')
          submitButton.prop('disabled', false)
        })
      },
      filter: function () {
        return $(this).is(':visible')
      }
    })
  })
})

$('#name').focus(function () {
  $('#success').html('')
})

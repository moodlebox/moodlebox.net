/* MoodleBox contact form javascript code */
document.addEventListener("DOMContentLoaded", function(e) {

  var form = document.getElementById("contact")

  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const submitButton = document.querySelector("input[type=submit]")
    // data.forEach((value, key) => console.log(value, key));
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", event => {
      // console.log(event.target.responseText);
      submitButton.value = "Thank you, we'll get back to you shortly.";
      submitButton.disabled = false;
    });
    xhr.addEventListener("error", event => {
      console.log(event);
    });
    if (document.getElementById("_email").value) {
      console.log("gotcha");
      xhr.abort()
    } else {
      submitButton.value = "Please Wait...";
      submitButton.disabled = true;
      // Set real action URL
      xhr.open("POST", "https://hooks.zapier.com/hooks/catch/2849143/8rav6j/");
      xhr.send(data);
    }
  });

})

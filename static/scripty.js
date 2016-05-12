
var greet = function (event_details) {

    var container = document.getElementById("sign-form-container");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    container.innerHTML = "<p>" + name + " you're the coolest, a form will be sent to " + email + "</p>";


    var tagline = document.getElementById("tagline");
    var taglinebis = document.getElementById("taglinebis");
    var purple = "#5D58CC";
    tagline.style.color = purple;
    taglinebis.style.color = purple;


    event_details.preventDefault();

};

var form = document.getElementById("signup-form");
form.addEventListener("submit", greet);

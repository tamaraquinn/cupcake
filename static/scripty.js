
var greet = function (event_details) {

    var container = document.getElementById("sign-form-container");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    container.innerHTML = "<h4>" + name + " you're the coolest, our newsletter will be sent to " + email + " every month!" + "</h4>";


    var tagline = document.getElementById("tagline");
    var taglinebis = document.getElementById("taglinebis");
    var purple = "#5D58CC";
    tagline.style.color = purple;
    taglinebis.style.color = purple;


    event_details.preventDefault();

};

var form = document.getElementById("signup-form");
form.addEventListener("submit", greet);

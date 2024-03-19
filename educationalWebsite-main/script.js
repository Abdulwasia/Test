let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}

// For Slider
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Call showSlides every 2 seconds
setInterval(showSlides, 2000);


// For login

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// For SignUp

function validateForm() {
  // Get the form elements
  var name = document.getElementById("name");
  var number = document.getElementById("number");
  var email = document.getElementById("email");
  var psw = document.getElementById("psw");
  var psw_repeat = document.getElementById("psw-repeat");

  // Define the validation patterns
  var name_pattern = /^[\u0621-\u064A\s]+$/; // Arabic text and spaces only
  var number_pattern = /^7\d{8}$/; // 9 digits starting with 7
  var email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // email format

  // Define the error messages
  var name_error = "Name must be in Arabic and not contain symbols or numbers";
  var number_error = "Number must be 9 digits starting with 7 and not contain texts or symbols";
  var email_error = "Email must be in the known format, which is the presence of the @ sign and the presence of .com, .org, or .net";
  var psw_error = "Passwords do not match";

  // Define a variable to store the validation status
  var valid = true;

  // Check each input element and set its custom validity message if invalid
  if (!name_pattern.test(name.value)) {
    name.setCustomValidity(name_error);
    valid = false;
  } else {
    name.setCustomValidity("");
  }

  if (!number_pattern.test(number.value)) {
    number.setCustomValidity(number_error);
    valid = false;
  } else {
    number.setCustomValidity("");
  }

  if (!email_pattern.test(email.value)) {
    email.setCustomValidity(email_error);
    valid = false;
  } else {
    email.setCustomValidity("");
  }

  if (psw.value != psw_repeat.value) {
    psw.setCustomValidity(psw_error);
    psw_repeat.setCustomValidity(psw_error);
    valid = false;
  } else {
    psw.setCustomValidity("");
    psw_repeat.setCustomValidity("");
  }

  // Return the validation status
  return valid;
}

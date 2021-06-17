ishandel = false;
function onDarkMode(evt) {
  ishandel = !ishandel;
  var body = document.body;
  if (ishandel) {
    body.classList.add("darkmode");
  } else {
    body.classList.remove("darkmode");
  }
}
var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");
  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 1000);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");
for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}

var bubblybuttonoutline = document.getElementsByClassName(
  "bubbly-button-outline"
);
for (var i = 0; i < bubblybuttonoutline.length; i++) {
  bubblybuttonoutline[i].addEventListener("click", animateButton, false);
}

function addClass(elem) {
  // get all 'a' elements
  var a = document.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    a[i].classList.remove("active");
    a[i].classList.remove("fw-bold");
  }
  elem.classList.add("active");
  elem.classList.add("fw-bold");
}

isOpen = false;
function btnOpenhambuger() {
  isOpen = !isOpen;
  var body = document.body;
  if (isOpen) {
    body.classList.add("navbarBody");
    document.getElementById("navbarHome").classList.add("navbarHome");
    document.getElementById("navbarHome").classList.add("animate__fadeInRight");
    document.getElementById("navbarHome").classList.remove("d-none");
  } else {
    document
      .getElementById("navbarHome")
      .classList.remove("animate__fadeInRight");
    body.classList.remove("navbarBody");
    document.getElementById("navbarHome").classList.add("d-none");
    document.getElementById("navbarHome").classList.remove("navbarHome");
  }
}

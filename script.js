var img = document.getElementById("blinking-image");

var interval = window.setInterval(function () {
  if (img.style.visibility == "hidden") {
    img.style.visibility = "visible";
  } else {
    img.style.visibility = "hidden";
  }
}, 300);

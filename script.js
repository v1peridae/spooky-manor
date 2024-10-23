var img = document.getElementById("blinking-image");

var interval = window.setInterval(function () {
  if (img.style.visibility == "hidden") {
    img.style.visibility = "visible";
  } else {
    img.style.visibility = "hidden";
  }
}, 300);

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-btn");
  const blurWrapper = document.getElementById("blur-wrapper");

  popup.style.display = "flex";
  blurWrapper.classList.add("blur-background");
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    blurWrapper.classList.remove("blur-background");
  });
});

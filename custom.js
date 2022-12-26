body = document.getElementsByTagName("body")[0];
btnTour = document.getElementsByClassName("btn-tour")[0];
btnTour.addEventListener("click", function () {
  if (body.style.paddingRight != "0px") {
    body.style.paddingRight = "0px";
  }
});

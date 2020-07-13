var sliderLink1 = document.querySelector(".js-control-prev");
var sliderLink2 = document.querySelector(".js-control-next");
var slider1 = document.querySelector(".promo-slider-1");
var slider2 = document.querySelector(".promo-slider-2");
var toggler1 = document.querySelector(".js-toggler-1");
var toggler2 = document.querySelector(".js-toggler-2");


sliderLink1.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider1.classList.add("slide-show");
  slider2.classList.remove("slide-show");
  toggler1.classList.add("slider-toggler-active");
  toggler2.classList.remove("slider-toggler-active");

});

sliderLink2.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider2.classList.add("slide-show");
  slider1.classList.remove("slide-show");
  toggler2.classList.add("slider-toggler-active");
  toggler1.classList.remove("slider-toggler-active");

});

var shippingLink = document.querySelector(".js-shipping");
var garantyLink = document.querySelector(".js-garanty");
var creditLink = document.querySelector(".js-credit");
var shipping = document.querySelector(".service-slide-shipping");
var garanty = document.querySelector(".service-slide-garanty");
var credit = document.querySelector(".service-slide-credit");

shippingLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  shipping.classList.add("service-slide-show");
  garanty.classList.remove("service-slide-show");
  credit.classList.remove("service-slide-show");

});

garantyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  shipping.classList.remove("service-slide-show");
  garanty.classList.add("service-slide-show");
  credit.classList.remove("service-slide-show");

});

creditLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  shipping.classList.remove("service-slide-show");
  garanty.classList.remove("service-slide-show");
  credit.classList.add("service-slide-show");

});
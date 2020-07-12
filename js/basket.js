var basketLink = document.querySelector(".btn-card-buy");
var basketPopup = document.querySelector(".modal-basket");
var basketClose = basketPopup.querySelector(".modal-close");
  
basketLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.add("modal-show");
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (basketPopup.classList.contains("modal-show")) {
      basketPopup.classList.remove("modal-show");
    }
  }
});
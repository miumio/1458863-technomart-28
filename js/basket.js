var basketLinks = document.querySelectorAll(".btn-card-buy");
for (var i = 0; i < basketLinks.length; i++) {
    basketLinks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.add("modal-show");
    });
}

var basketPopup = document.querySelector(".modal-basket");
var basketClose = basketPopup.querySelector(".modal-close");

basketClose.addEventListener("click", function () {
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function () {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      basketPopup.classList.remove("modal-show");
    }
  }
});
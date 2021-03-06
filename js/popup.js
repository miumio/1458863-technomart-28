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

var feedbackLink = document.querySelector(".js-feedback");
var feedbackPopup = document.querySelector(".modal-feedback");
var modalClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".modal-feedback-form");
var userName = feedbackPopup.querySelector("#name");
var userEmail = feedbackPopup.querySelector("#email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  }

  userName.focus();

});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

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

var basketLinks = document.querySelectorAll(".btn-card-buy");
for (var i = 0; i < basketLinks.length; i++) {
    basketLinks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.add("modal-show");
    });
}

var basketPopup = document.querySelector(".modal-basket");
var basketClose = basketPopup.querySelector(".modal-close");
var goShop = basketPopup.querySelector(".js-close");

basketClose.addEventListener("click", function () {
  basketPopup.classList.remove("modal-show");
});

goShop.addEventListener("click", function () {
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function () {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      basketPopup.classList.remove("modal-show");
    }
  }
});

var mapLink = document.querySelector(".map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");
  
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
'use strict';

// open burger menu

var navButton = document.querySelector(".main-header__button");
var menu = document.querySelector(".nav");
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 1023) {
  menu.classList.add("visually-hidden");
  navButton.classList.remove('visually-hidden');
} else {
  menu.classList.remove("visually-hidden");
  navButton.classList.add('visually-hidden');
}

window.addEventListener("resize", function() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 1023) {
    menu.classList.remove("visually-hidden");
    navButton.classList.add('visually-hidden');
  } else {
    menu.classList.add("visually-hidden");
    navButton.classList.remove('visually-hidden');
  }
}, false);

navButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle('visually-hidden');
  navButton.classList.toggle('main-header__button--active');
});


// show / close popup

var btnBuy = document.querySelectorAll('.btn-buy');
var feedbackPopup = document.querySelector('.feedback');
var closePopupBtn = document.querySelector('.feedback__btn');
var overlay = document.querySelector(".overlay");
var ESC = 27;

var form = document.querySelector('.form');

function openPopup(event) {
  event.preventDefault();
  overlay.classList.remove('visually-hidden');
  feedbackPopup.classList.remove('visually-hidden');
}

for (var i = 0; i < btnBuy.length; i++) {
  btnBuy[i].addEventListener('click', openPopup);
}

document.addEventListener('keydown', function (event) {

  if (event.keyCode === ESC) {
    feedbackPopup.classList.add('visually-hidden');
    overlay.classList.add('visually-hidden');
    successMessage.classList.add('visually-hidden');
  }
})


closePopupBtn.addEventListener('click', function(event) {
  event.preventDefault();
  feedbackPopup.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
});

var forms = document.querySelectorAll('.form');
var sendButton = form.querySelector('.form__btn');
var successMessage = document.querySelector('.success-message');
var closeMessageBtn = document.querySelector('.success-message__btn');

closeMessageBtn.addEventListener('click', function(event) {
  event.preventDefault();
  successMessage.classList.add('visually-hidden');
  overlay.classList.add('visually-hidden');
});

// show success message after submit data

function showSuccessMessage(event) {
  event.preventDefault();
  feedbackPopup.classList.add('visually-hidden');
  overlay.classList.remove('visually-hidden');
  successMessage.classList.remove('visually-hidden');
}

for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', showSuccessMessage);
}

overlay.addEventListener('click', function (event) {

  if (event.target !== feedbackPopup || event.target !== successMessage) {
    feedbackPopup.classList.add('visually-hidden');
    overlay.classList.add('visually-hidden');
    successMessage.classList.add('visually-hidden');
  }
})

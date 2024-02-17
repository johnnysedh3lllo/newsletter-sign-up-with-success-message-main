"use strict";

const form = document.querySelector(".form");
const emailInput = document.getElementById("mail");
const emailError = document.querySelector(".error-message");

const formBtn = document.querySelector(".btn--form");
const dismissBtn = document.querySelector(".btn--dismiss");

const signUpCard = document.querySelector(".card--sign-up");
const successCard = document.querySelector(".card--success");

function showError() {
  if (emailInput.validity.valueMissing || emailInput.validity.typeMismatch) {
    emailError.textContent = "Valid email required";
    emailInput.classList.add("error");
  }
}

function clearError() {
  emailError.textContent = "";
  emailInput.classList.remove("error");
}

emailInput.addEventListener("input", function () {
  emailInput.validity.valid ? clearError() : showError();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!emailInput.validity.valid) {
    showError();
  } else {
    signUpCard.classList.add("no-display");

    successCard.classList.remove("fade");
  }
});

dismissBtn.addEventListener("click", function () {
  successCard.classList.add("fade");

  setTimeout(() => {
    signUpCard.classList.remove("no-display");
  }, 500);
});

document.body.addEventListener("click", function (event) {
  if (event) {
    clearError();
  }
});

const email = document.getElementById("mail");
const emailError = document.getElementById("email-error");
email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showError();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter an email address";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Email must be of format yourname@domain.com";
  }
  if (country.validity.valueMissing) {
    countryError.textContent = "Please enter a country";
  } else if (country.validity.patternMismatch) {
    countryError.textContent = "Country may not include numbers";
  }
  if (zipCode.validity.valueMissing) {
    zipCodeError.textContent = "Please enter a valid Zip Code";
  } else if (zipCode.validity.patternMismatch) {
    zipCodeError.textContent =
      "Zip Code must be 5 digits with optional dash followed by four digits";
  }
  if (passwordConfirm.validity.valueMissing || passwordConfirm.value !== password.value) {
    passwordError.textContent = "Passwords do not match";
  }


}

const country = document.getElementById("country");
const countryError = document.getElementById("country-error");
country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
  } else {
    showError();
  }
});

const zipCode = document.getElementById("zip");
const zipCodeError = document.getElementById("zc-error");
zipCode.addEventListener("input", (event) => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = "";
  } else {
    showError();
  }
});

const password = document.getElementById("pw");
const passwordConfirm = document.getElementById("pw-confirm");
const passwordError = document.getElementById("password-error");
passwordConfirm.addEventListener("input", (event) => {
  if (passwordConfirm.value == password.value) {
    passwordError.textContent = "";
  } else {

    showError();
  }
});

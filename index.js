const gebi = (id) => {
  return document.getElementById(id);
};

const show = (element) => {
  element.classList.remove("hide");
};
const hide = (element) => {
  element.classList.add("hide");
};
const makeVisible = (element) => {
  element.classList.remove("hidden");
};
const makeInvisible = (element) => {
  element.classList.add("hidden");
};
const showRecommendationIcon = (element) => {
  element.setAttribute("data-recommendation", "true");
};
const hideRecommendationIcon = (element) => {
  element.removeAttribute("data-recommendation");
};
const makePasswordPatternError = (element) => {
  element.classList.remove("inuit-form__password-patterns-text--success");
  element.classList.add("inuit-form__password-patterns-text--error");
};
const makePasswordPatternSuccess = (element) => {
  element.classList.add("inuit-form__password-patterns-text--success");
  element.classList.remove("inuit-form__password-patterns-text--error");
};

const emailInput = gebi("email");
const emailErrorText = gebi("email-error-text");
emailInput.addEventListener("blur", () => {
  if (emailInput.value.trim()) {
    if (!emailInput.validity.valid) makeVisible(emailErrorText);
  }
});
emailInput.addEventListener("focus", () => {
  makeInvisible(emailErrorText);
});

const phoneInput = gebi("phone");
const phoneRecommendationText = gebi("phone-recommendation");
const phoneInfoText = gebi("phone-info-text");
const phoneVerifyTextMsg = gebi("phone-verify-text-msg");
const phoneErrorText = gebi("phone-error-text");
phoneInput.addEventListener("blur", () => {
  if (!phoneInput.value.trim()) {
    showRecommendationIcon(phoneInput);
    show(phoneRecommendationText);
    hide(phoneInfoText);
    hide(phoneVerifyTextMsg);
  } else {
    hideRecommendationIcon(phoneInput);
    hide(phoneRecommendationText);
    if (phoneInput.validity.valid) show(phoneInfoText);
    else {
      hide(phoneInfoText);
      makeVisible(phoneErrorText);
    }
  }
});
phoneInput.addEventListener("focus", () => {
  hide(phoneRecommendationText);
  show(phoneInfoText);
  show(phoneVerifyTextMsg);
  makeInvisible(phoneErrorText);
});

const passwordInput = gebi("password");
const confirmPassword = gebi("confirm-password");
const passwordPatterns = gebi("password-patterns");
passwordInput.addEventListener("focus", () => {
  show(confirmPassword);
  show(passwordPatterns);
});
const passwordPatternTooShort = gebi("password-patterns-tooShort");
const passwordPatternUpperLower = gebi("password-patterns-upper-lower");
const passwordPatternNumber = gebi("password-patterns-number");
const passwordPatternSymbol = gebi("password-patterns-symbol");
passwordInput.addEventListener("blur", () => {
  show(passwordPatterns);
  if (!passwordInput.value.trim()) {
    const texts = passwordPatterns.querySelectorAll(
      ".inuit-form__password-patterns-text"
    );
    texts.forEach((el) => {
      makePasswordPatternError(el);
    });
  } else {
    if (passwordInput.validity.tooShort) {
      makePasswordPatternError(passwordPatternTooShort);
    } else {
      makePasswordPatternSuccess(passwordPatternTooShort);
    }
    // Just validate error for the rest of the patterns
    makePasswordPatternError(passwordPatternUpperLower);
    makePasswordPatternError(passwordPatternNumber);
    makePasswordPatternError(passwordPatternSymbol);
  }
});

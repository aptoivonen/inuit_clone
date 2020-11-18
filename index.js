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

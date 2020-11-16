const phoneInput = document.getElementById("phone");
const phoneRecommendationText = document.getElementById("phone-recommendation");
const phoneInfoText = document.getElementById("phone-info-text");
const phoneVerifyTextMsg = document.getElementById("phone-verify-text-msg");
phoneInput.addEventListener("blur", () => {
  if (!phoneInput.value.trim()) {
    phoneInput.setAttribute("data-recommendation", "true");
    phoneRecommendationText.classList.remove("hide");
    phoneInfoText.classList.add("hide");
    phoneVerifyTextMsg.classList.add("hide");
  } else {
    phoneInput.removeAttribute("data-recommendation");
    phoneRecommendationText.classList.add("hide");
    phoneInfoText.classList.remove("hide");
  }
});
phoneInput.addEventListener("focus", () => {
  phoneRecommendationText.classList.add("hide");
  phoneInfoText.classList.remove("hide");
  phoneVerifyTextMsg.classList.remove("hide");
});

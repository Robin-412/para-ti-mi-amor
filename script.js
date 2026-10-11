const arrow = document.querySelector(".arrow");
const impactMessage = document.querySelector("#impact-message");
const shootButton = document.querySelector("#shoot-button");
const status = document.querySelector("#animation-status");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let impactTimeout;

function revealImpact() {
  impactMessage.classList.add("visible");
  status.textContent = "¡TE AMO!";
}

function shootArrow() {
  clearTimeout(impactTimeout);
  impactMessage.classList.remove("visible");

  if (reducedMotion.matches) {
    revealImpact();
    return;
  }

  status.textContent = "Ahí va mi flecha, directo a tu corazón...";
  arrow.classList.remove("shooting");
  void arrow.getBoundingClientRect();
  arrow.classList.add("shooting");
  impactTimeout = setTimeout(revealImpact, 350);
}

shootButton.addEventListener("click", shootArrow);

if (arrow.classList.contains("shooting") && !reducedMotion.matches) {
  impactTimeout = setTimeout(revealImpact, 350);
}

var currentValue = 0;
var slideTargets = 0;

if (typeof document !== "undefined") {
  var slideTargets = document.querySelectorAll("[data-slide]");
  var buttons = document.querySelectorAll('[data-action="showNext"]');
}

console.log(slideTargets);
function correctValue(value) {
  if (value >= slideTargets.length) {
    return (currentValue = 0);
  } else if (value < 0) {
    return (currentValue = slideTargets.length - 1);
  } else {
    return value;
  }
}

function showAny(value) {
  slideTargets[correctValue(value)].classList.remove("d-none");
}

function hideAny(value) {
  slideTargets[correctValue(value)].classList.add("d-none");
}

function handleTestimonials() {
  showAny(currentValue);

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      hideAny(currentValue);
      currentValue += parseInt(event.currentTarget.dataset.changeBy);
      showAny(currentValue);
    });
  });
}

handleTestimonials();

// Mobile Menu

function handleMobileMenu() {
  var menuTrigger = document.querySelector(
    '[data-action="click->marketing--mobile#toggleMenu"]'
  );
  var mobileMenu = document.querySelector(
    '[data-marketing--mobile-target="menu"]'
  );
  menuTrigger.addEventListener("click", (event) => {
    mobileMenu.classList.toggle("d-md-block");
  });
}

handleMobileMenu();
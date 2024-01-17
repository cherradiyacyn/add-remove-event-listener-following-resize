// selectors
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const mql = window.matchMedia("(min-width: 640px)");

// functions
function initMobileFirst() {
  toggle.classList.add("show");
  menu.classList.add("hide");
}

// handlers
function handleMenuDisplay() {
  if (menu.classList.contains("hide")) {
    menu.classList.replace("hide", "show");
  } else {
    menu.classList.replace("show", "hide");
  }
}

function handleMedia() {
  if (mql.matches) {
    toggle.classList.replace("show", "hide");
    menu.classList.replace("hide", "show");

    toggle.removeEventListener("click", handleMenuDisplay);
    menu.removeEventListener("click", handleMenuDisplay);
    console.log("eventListener is removed");
  } else {
    toggle.classList.replace("hide", "show");
    menu.classList.replace("show", "hide");

    toggle.addEventListener("click", handleMenuDisplay);
    menu.addEventListener("click", handleMenuDisplay);
    console.log("eventListener is added");
  }
}

// addEventListener
mql.addEventListener("change", handleMedia);

// onLoad
initMobileFirst();
handleMedia();

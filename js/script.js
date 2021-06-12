const menuToggler = document.querySelector("#menu-toggler");
const fadeElements = document.querySelectorAll(".has-fade");
const header = document.querySelector(".header");
const body = document.querySelector("body");

menuToggler.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    fadeElements.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
    body.classList.remove("noscroll");
  } else {
    header.classList.add("open");
    fadeElements.forEach((element) => {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
    body.classList.add("noscroll");
  }
});

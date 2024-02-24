/*-----LOADER-----*/
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//Previosly selected topic (if user selected)

const selectedTheme = localStorage.getItem("selected-theme");

const selectedIcon = localStorage.getItem("selected-icon");

//We obtain the current theme that the interface has validating the dark-theme class

function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? "dark" : "light";
}
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

//We validate if the user previosly chose the topic
if (selectedTheme) {
  //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

//Activate/ deactivate the theme manually with the button

themeButton.addEventListener("click", () => {
  //Add or remove the dark / icon theme

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //We save the theme and the current icon that the user chose

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "400",
  });
  sr.reveal(".contact_content", { delay: 400 });
  sr.reveal(".contact_form", { delay: 500 });
  sr.reveal(".ri-moon-line");
  sr.reveal(".navbar");
  sr.reveal(".profile_content", { delay: 500 });
  sr.reveal(".profile__social", { delay: 700 });
  sr.reveal(".tech", { delay: 800 });
  sr.reveal(".profile", { delay: 450 });
});
/*======SCROLL TO TOP====== */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling behavior
  });
}
/*  COSTUM CURSOR */

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

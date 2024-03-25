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
  sr.reveal(".form");
  sr.reveal(".profile_content", { delay: 500 });
  sr.reveal(".profile__social", { delay: 700 });
  sr.reveal(".tech", { delay: 800 });
  sr.reveal(".profile", { delay: 450 });
});

/*  COSTUM CURSOR */

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

// Form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact_form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name_input");
    const email = document.getElementById("email_input");
    const phone = document.getElementById("telephone_input");
    const message = document.getElementById("message_input");

    const bodyMessage = `Full name: ${name.value}<br> Email: ${email.value}<br> Phone: ${phone.value} <br> Message: ${message.value}`;
    const subject = "Contact Form | Portfolio";

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "xhyliqiidren@gmail.com",
      Password: "B7DD7E015E477F864445C3ADB186B536334B",
      To: "xhyliqiidren@gmail.com",
      From: "xhyliqiidren@gmail.com",
      Subject: subject,
      Body: bodyMessage,
    }).then((message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Faleminderit!",
          text: "Do te ju kontaktoje se shpejti.",
          icon: "success",
        });
        form.reset();
      }
    });
  });
});

/* SCROLL TO TOP */
(function ($) {
  "use strict";

  $(document).ready(function () {
    "use strict";

    // Scroll back to top
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 550;

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });

    $(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);


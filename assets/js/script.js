'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

document.addEventListener("DOMContentLoaded", () => {
  const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

  if (formOpenBtn) {
    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
  }

  if (formCloseBtn) {
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"));
  }

  pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
      const getPwInput = icon.parentElement.querySelector("input");
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("uil-eye-slash", "uil-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("uil-eye", "uil-eye-slash");
      }
    });
  });

  if (signupBtn) {
    signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formContainer.classList.add("active");
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formContainer.classList.remove("active");
    });
  }
});

// Function to open the booking form popup
function openBookingFormPopup() {
  document.getElementById("bookingFormPopup").style.display = "block";
}

// Function to close the booking form popup
function closeBookingFormPopup() {
  document.getElementById("bookingFormPopup").style.display = "none";
}

// Event listener to close the form when clicking outside of it
window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("bookingFormPopup")) {
      closeBookingFormPopup();
  }
});


  document.querySelector("#reservationForm").addEventListener("submit", function(event){
      event.preventDefault(); // Prevent form from submitting

      // Basic validation
      var fullName = document.querySelector("#fullName").value;
      var placeNumber = document.querySelector("#placeNumber").value;
      var email = document.querySelector("#email").value;
      var phone = document.querySelector("#phone").value;

      if(fullName && placeNumber && email && phone) {
          document.querySelector("#userName").innerText = fullName;
          document.querySelector("#numberOfPeople").innerText = placeNumber;
          document.querySelector("#userEmail").innerText = email;

          document.querySelector("#bookingFormPopup").style.display = 'none';
          document.querySelector(".popup").classList.add("active");
      } else {
          alert("Please fill in all fields.");
      }
  });

  document.querySelector(".popup .close-btn").addEventListener("click", function(){
      document.querySelector(".popup").classList.remove("active");
  });

  function closeBookingFormPopup() {
      document.getElementById('bookingFormPopup').style.display = 'none';
  }

  function closePopup() {
      document.querySelector(".popup").classList.remove("active");
  }


  document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.nav-tabs li a');
    var tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        e.preventDefault();

        tabs.forEach(function (tab) {
          tab.parentElement.classList.remove('active');
        });

        tabPanes.forEach(function (pane) {
          pane.classList.remove('active');
        });

        tab.parentElement.classList.add('active');
        document.querySelector(tab.getAttribute('href')).classList.add('active');
      });
    });
  });


  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }, 
    autoplay: {
    delay: 3000, 
     disableOnInteraction: false, 
    },
  });

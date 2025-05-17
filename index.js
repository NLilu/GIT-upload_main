// -------------------------------------------------------------------|||||||navigation code|||||||||||||||----------------------------------------------------------------------------
//
//
//

// ------------------------------------------------------------------------------Dropdown menu and arrow transformation ------------------------------
const dropdown = document.getElementById("myDropdown");
const button = document.querySelector(".dropbtn");
const flip = document.querySelector(".arrow");

button.addEventListener("click", function () {
  const isShown = dropdown.classList.toggle("show");
  if (isShown) {
    button.style.color = "red";
  } else {
    button.style.color = "";
  }
});

button.addEventListener("click", function () {
  flip.classList.toggle("transform");
});

//  ----------------------------------------------------------------------------Close the dropdown if the user clicks outside of it-----------------------
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//-------------------------------------------------------------------------------Burger menu-----------------------------------------------------------------------
const burger = document.querySelector(".burger__menu");
const navigation = document.querySelector(".navbar__list");

burger.addEventListener("click", function () {
  navigation.classList.toggle("active");
});

//
//
//
//
// -------------------------------------------------------------------------|||||||carousel code|||||||||-----------------------------------------------------------------------
let slideIndex = 1;
slideShow(slideIndex);

function plusSlides(n) {
  slideShow((slideIndex += n));
}

function slideShow(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  let currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block";

  let numberDisplay = currentSlide.querySelector(".slideNumb");
  if (numberDisplay) {
    numberDisplay.textContent = `${slideIndex}/${slides.length}`;
  }
}

//--------------------------------------------date generator-------------
const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();

const formattedDate = `${day}.${month}.${year}`;

const dateSpans = document.querySelectorAll(".date");
dateSpans.forEach((span) => {
  span.textContent = formattedDate;
});

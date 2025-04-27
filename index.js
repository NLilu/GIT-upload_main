// -------------------------------------------------------------------|||||||navigation code|||||||||||||||----------------------------------------------------------------------------
//
//
//

// ------------------------------------------------------------------------------dropdown menu and arrow transformation ------------------------------
const dropdown = document.getElementById("myDropdown");
const button = document.querySelector(".dropbtn");
const flip = document.querySelector(".arrow");

button.addEventListener("click", function () {
  dropdown.classList.toggle("show");
});

button.addEventListener("click", function () {
  flip.classList.toggle("transform");
});

//  ----------------------------------------------------------------------------Closes the dropdown if the user clicks outside of it-----------------------
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//-------------------------------------------------------------------------------burger menu-----------------------------------------------------------------------
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
  slides[slideIndex - 1].style.display = "block";
  document.getElementById("slideNumb").innerText =
    slideIndex + "/" + slides.length;
}

const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();

const formattedDate = `${day}.${month}.${year}`;

const dateSpans = document.querySelectorAll(".date");
dateSpans.forEach((span) => {
  span.textContent = formattedDate;
});

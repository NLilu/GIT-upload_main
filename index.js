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

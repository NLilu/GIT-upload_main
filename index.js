// navigation code  -----------------------------------------------------------------------------------
// dropdown menu
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//  Close the dropdown if the user clicks outside of it------------------------------------------------
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

//dropdown button arrow toggle-------------------------------------------------------------------------
function rotate() {
  document.querySelector(".arrow").classList.toggle("transform");
}

// burger menu-----------------------------------------------------------------------------------------
const burger = document.querySelector(".burger__menu");
const navigation = document.querySelector(".navbar__list");

burger.addEventListener("click", function () {
  navigation.classList.toggle("active");
});

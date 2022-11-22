// When the user scrolls the page, execute responsiveFunction
window.onscroll = function() {stickyFunction()};

// Get the navbar
var navbar = document.getElementById("topNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveFunction() {

  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else if (x.className === "topnav sticky") {
    x.className += " responsive";
  }
  else {
    x.className = "topnav sticky";
  }
}

/*  $('#download').click(function(){ closeMenu(); return false; });
  $('#LearnMore').click(function(){ closeMenu(); return false; });
  $('#GetStarted').click(function(){ closeMenu(); return false; });
 Removes the "responsive" class from topnav when the user clicks on a menu link */
function closeMenu() {
  var x = document.getElementById("topNav");


  if (x.className === "topnav") {
    x.className += " responsive";
  } else if (x.className === "topnav sticky") {
    x.className += " responsive";
  }
  else {
    x.className = "topnav sticky";
  }

  if (y.innerHTML === "Download") {


  }

}

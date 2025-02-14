// NAVBAAR JS
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling Down
    navbar.style.top = "-80px"; // Adjust based on navbar height
  } else {
    // Scrolling Up
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

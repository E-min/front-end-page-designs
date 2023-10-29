const collapseButton = document.getElementById("collapse");
const header = document.getElementById("header");
const headerLogo = document.querySelector(".header__logo");
const navItems = document.querySelector(".header__nav");

window.addEventListener("resize", () => {
  if (window.innerWidth > 650) {
    if (!collapseButton.classList.contains("collapsed")) {
        headerLogo.style.transform = "translateX(0)";
        navItems.style.transform = "translateX(0)";
    }
  } else {
    if (!collapseButton.classList.contains("collapsed")) {
        headerLogo.style.transform = "translateX(-200px)";
        navItems.style.transform = "translateX(-200px)";
      }
  }
});

collapseButton.addEventListener("click", () => {
  collapseButton.classList.toggle("collapsed");
  console.log("object");
  if (collapseButton.classList.contains("collapsed")) {
    header.style.maxHeight = "300px";
    headerLogo.style.transform = "translateX(0)";
    navItems.style.transform = "translateX(0)";
  } else {
    header.style.maxHeight = "59px";
    headerLogo.style.transform = "translateX(-200px)";
    navItems.style.transform = "translateX(-200px)";
  }
});
import pageTransition from "./pageTransition.js";
import hamburgerNavigation from "./hamburgerNavigation.js";

const pos = document.documentElement;
const headerInformationContainer = document.getElementById(
  "headerInformationContainer"
);
const circle = document.getElementById("designedHeader");
const aboutBtn = document.getElementById("aboutBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");
const hamburgerNavigationBtn = document.getElementById("hamburgerNavigation");
const mobileNavigationModal = document.getElementById("mobileNavigationModal");
const mobileNavigationCloseBtn = document.getElementById(
  "mobileNavigationCloseBtn"
);

hamburgerNavigation(
  hamburgerNavigationBtn,
  mobileNavigationModal,
  mobileNavigationCloseBtn
);
pageTransition(aboutBtn, "about.html", circle);
pageTransition(projectsBtn, "projects.html", circle);
pageTransition(contactBtn, "contact.html", circle);

circle.style.clipPath = "circle(60px at var(--x) var(--y))";

function isTabletOrMobile() {
  if (window.innerWidth <= 1024) {
    pos = null;
  }
}

isTabletOrMobile();

pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--x", e.clientX + "px");
  pos.style.setProperty("--y", e.clientY + "px");
});

headerInformationContainer.addEventListener("mouseover", (e) => {
  circle.style.transition = "0.7s ease-out";
  circle.style.clipPath = "circle(1500px at var(--x) var(--y))";
});

headerInformationContainer.addEventListener("mouseleave", (e) => {
  circle.style.transition = "0.1s ease";
  circle.style.clipPath = "circle(60px at var(--x) var(--y))";
});

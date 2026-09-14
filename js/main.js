const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");
const mobileClose = document.getElementById("mobileClose");

function openMenu() {
  mobileNav.classList.add("open");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  mobileNav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

if (menuButton) {
  menuButton.addEventListener("click", openMenu);
}

if (mobileClose) {
  mobileClose.addEventListener("click", closeMenu);
}

if (mobileNav) {
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

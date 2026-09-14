const menuButton = document.getElementById("mobile-menu-button");
const mobileNav = document.getElementById("mobile-nav");

if (menuButton && mobileNav) {

  const menuText = menuButton.querySelector("span");

  function openMenu() {
    mobileNav.classList.add("open");
    document.body.classList.add("menu-open");

    menuButton.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");

    menuText.textContent = "SULGE";
  }

  function closeMenu() {
    mobileNav.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuButton.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");

    menuText.textContent = "MENÜÜ";
  }

  menuButton.addEventListener("click", () => {

    const isOpen = mobileNav.classList.contains("open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }

  });


  mobileNav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {
      closeMenu();
    });

  });


  window.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
      closeMenu();
    }

  });

}

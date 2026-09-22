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
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (contactForm && formSuccess) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "SAADAN...";

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        contactForm.reset();
        contactForm.hidden = true;
        formSuccess.hidden = false;
      } else {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        alert("Sõnumi saatmine ebaõnnestus. Palun proovi uuesti.");
      }
    } catch (error) {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
      alert("Sõnumi saatmine ebaõnnestus. Palun proovi uuesti.");
    }
  });
}

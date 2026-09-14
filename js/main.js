const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("open");

  menuButton.textContent =
    mobileMenu.classList.contains("open")
      ? "Sulge"
      : "Menüü";

});


mobileMenu.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

    menuButton.textContent = "Menüü";

  });

});


const revealElements =
  document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  {
    threshold: 0.1
  }

);


revealElements.forEach(element => {

  observer.observe(element);

});

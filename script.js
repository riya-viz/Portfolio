// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.textContent = open ? "close" : "menu";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "menu";
  });
});

// Highlight the section you're on + show the back-to-top button
const sections = document.querySelectorAll("main section");
const links = document.querySelectorAll(".nav-links a");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
  topBtn.classList.toggle("show", window.scrollY > 500);
});

topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Fade sections in as they come on screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
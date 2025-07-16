console.log("Tools page loaded");

// Load navbar
fetch("components/html/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar-placeholder").innerHTML = html;

    const path = window.location.pathname;
    document.querySelectorAll(".nav-links a").forEach(link => {
      if (path.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  });

// Modal logic for multiple images
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Select all tool screenshots
const images = document.querySelectorAll(".tool-screenshot");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Close modal on close button or outside click
if (closeBtn) {
  closeBtn.onclick = () => (modal.style.display = "none");
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

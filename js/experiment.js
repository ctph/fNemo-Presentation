console.log("Experiments page loaded");

// Dynamically load navbar from components/html
fetch("./components/html/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar-placeholder").innerHTML = html;

    // Highlight current nav link based on page
    const path = window.location.pathname;
    document.querySelectorAll(".nav-links a").forEach(link => {
      if (path.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  })
  .catch(err => console.error("Failed to load navbar:", err));

/* === Optional: Modal overlay for images (if you want) === */
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

const images = document.querySelectorAll(".model-banner");
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

if (closeBtn) {
  closeBtn.onclick = () => (modal.style.display = "none");
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

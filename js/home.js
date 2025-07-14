console.log("Home page loaded!");

document.querySelectorAll('.arrow-button').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`${btn.textContent} clicked`);
  });
});

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

    // Home-specific logo override
    if (path.includes("index.html") || path.endsWith("/")) {
      const logo = document.querySelector(".navbar .logo");
      if (logo) logo.textContent = "fNemo Webserver";
    }
  });

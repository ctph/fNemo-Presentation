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

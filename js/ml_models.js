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

document.addEventListener("DOMContentLoaded", () => {
  const likeCount = document.getElementById("likeCount");
  const likesModal = document.getElementById("likesModal");
  const likeButton = document.getElementById("likeButton");
  const likesModalTitle = document.getElementById("likesModalTitle");

  let liked = false;
  let modalOpen = false;
  let count = parseInt(likeCount.textContent);

  likeButton.addEventListener("click", () => {
    liked = !liked;
    likeButton.classList.toggle("liked", liked);
    count += liked ? 1 : -1;
    likeCount.textContent = count;
    if (likesModalTitle) likesModalTitle.textContent = `${count} Likes`;
  });

  likeCount.addEventListener("click", () => {
    modalOpen = !modalOpen;
    likesModal.style.display = modalOpen ? "block" : "none";
  });

  document.querySelector(".close-likes-modal")?.addEventListener("click", () => {
    likesModal.style.display = "none";
    modalOpen = false;
  });
});

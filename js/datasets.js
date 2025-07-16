// Modal logic
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const img = document.querySelector(".tool-screenshot");
const closeBtn = document.querySelector(".close");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

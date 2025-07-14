console.log("Home page loaded!");

document.querySelectorAll('.arrow-button').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`${btn.textContent} clicked`);
  });
});

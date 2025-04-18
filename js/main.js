const button = document.getElementById("top-menu-button");
const nav = document.getElementById("top-menu-list");

console.log(nav)

button.addEventListener("click", () => {
  nav.classList.toggle("show");
});
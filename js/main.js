const button = document.getElementById("top-menu-button");
const nav = document.getElementById("top-menu-list");
const sidebar = document.getElementById("sidebar");
const language = document.getElementById("language")
let mql = window.matchMedia("(max-width: 768px)");

mql.addEventListener("change", () =>{
  console.log(mql)
    if (mql.matches){
    language.size = "2"
    } else {
      language.size = "1"
    }
})

button.addEventListener("click", () => {
  nav.classList.toggle("show");
  sidebar.classList.toggle("show")

  if (mql.matches){
    language.size = "2"
    } else {
      language.size = "1"
    }
});



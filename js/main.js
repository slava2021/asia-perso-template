const button = document.getElementById("top-menu-button");
const topMenu = document.getElementById("top-menu")
const nav = document.getElementById("top-menu-container");
const language = document.getElementById("language")
let mql = window.matchMedia("(max-width: 768px)");
const mail = document.querySelectorAll('.button')


button.addEventListener("click", () => {
  nav.classList.toggle("show");
  topMenu.classList.toggle("menu-silver")
});

mail.forEach((item)=>{
  item.addEventListener("click", () => {
    // console.log("cliked")
    const addressee = `procurements@asiaperso.kg`;
    const subject = `Обратная связь`;
    const message = `Введите текст Вашего обращения`;
    location.href = `mailto:${addressee}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  })
})



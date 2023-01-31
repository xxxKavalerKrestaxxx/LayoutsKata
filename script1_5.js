let container = document.querySelector(".list");
let buttons = document.querySelector(".button_open");
buttons.onclick = function () {
  container.classList.toggle("full");
  if (buttons.textContent == "Показать все") {
    buttons.textContent = "Скрыть";
  } else {
    buttons.textContent = "Показать все";
  }
};

window.addEventListener("resize", (e) => {
  let windowX = document.documentElement.clientWidth;
  if (windowX > 320 && windowX < 768) {
    let swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: "auto",
      spaceBetween: 16,
    });
  }
});

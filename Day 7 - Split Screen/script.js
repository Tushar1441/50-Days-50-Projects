const ps = document.querySelector(".ps");
const xbox = document.querySelector(".xbox");

ps.addEventListener("mouseenter", () => {
  ps.classList.remove("show");
  ps.classList.remove("notshow");
  ps.classList.add("show");
  xbox.classList.add("notshow");
});

xbox.addEventListener("mouseenter", () => {
  xbox.classList.remove("show");
  xbox.classList.remove("notshow");
  xbox.classList.add("show");
  ps.classList.add("notshow");
});

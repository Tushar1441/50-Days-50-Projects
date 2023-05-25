const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonY = e.target.offsetTop;
    const buttonX = e.target.offsetLeft;

    const innerX = x - buttonX;
    const innerY = y - buttonY;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = innerY + "px";
    circle.style.left = innerX + "px";

    button.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});

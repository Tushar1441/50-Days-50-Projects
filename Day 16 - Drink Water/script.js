const cups = document.querySelectorAll(".cup-small");
const remained = document.getElementById("remained");
const span = document.getElementById("liters");
const percentage = document.getElementById("percentage");

cups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    highlightCup(index);
    const filled = document.querySelectorAll(".cup-small.full");

    if (filled.length === 0) {
      percentage.style.visibility = "hidden";
      percentage.style.height = "0";
    }

    percentage.style.visibility = "visible";

    updateHeight();
    updateText();
  });
});

function highlightCup(index) {
  if (
    cups[index].classList.contains("full") &&
    !cups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  cups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}

function updateHeight() {
  const filled = document.querySelectorAll(".cup-small.full");
  const percent = (filled.length / cups.length) * 330;

  percentage.style.height = `${percent}px`;
  remained.style.height = `${330 - percent}px`;
}

function updateText() {
  const filled = document.querySelectorAll(".cup-small.full");

  if (filled.length === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = "0";
  }
  const percent = (filled.length / cups.length) * 100;
  span.innerHTML = `${2 * (1 - percent / 100)}L `;
  percentage.innerHTML = `${percent} %`;
}


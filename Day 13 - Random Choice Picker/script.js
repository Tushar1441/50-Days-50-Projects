const textarea = document.getElementById("textarea");
const choicesEl = document.getElementById("choices");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  CreateChoices(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function CreateChoices(input) {
  const choices = input
    .split(",")
    .filter((choice) => choice.trim() !== "")
    .map((choice) => choice.trim());

  choicesEl.innerHTML = "";

  choices.forEach((choice) => {
    const choiceEl = document.createElement("span");
    choiceEl.classList.add("choice");
    choiceEl.innerHTML = choice;
    choicesEl.appendChild(choiceEl);
  });
}

function randomSelect() {
  const interval = setInterval(() => {
    const randomChoice = pickRandomChoice();

    activeChoice(randomChoice);

    setTimeout(() => {
      inactiveChoice(randomChoice);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomChoice = pickRandomChoice();

      activeChoice(randomChoice);
    }, 100);
  }, 3000);
}

function pickRandomChoice() {
  const choices = document.querySelectorAll(".choice");
  return choices[Math.floor(Math.random() * choices.length)];
}

function activeChoice(choice) {
  choice.classList.add("active");
}

function inactiveChoice(choice) {
  choice.classList.remove("active");
}

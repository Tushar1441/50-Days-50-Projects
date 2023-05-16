const JokeElement = document.getElementById("joke");
const btn = document.getElementById("btn");
const sound =  document.getElementById('applause');


btn.addEventListener("click", generateJoke);

generateJoke();

async  function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };


// ---------------------------------------------------------
  // Using .then() method

  // fetch("https://icanhazdadjoke.com", config)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     JokeElement.innerHTML = data.joke;
  //   });

// ---------------------------------------------------------



// ---------------------------------------------------------
// Using Aysnc await method

  const response = await fetch("https://icanhazdadjoke.com", config);

  const data = await response.json();

  JokeElement.innerHTML = data.joke;
  applause.pause();
  applause.currentTime = 0;
  applause.play();

// ---------------------------------------------------------

}

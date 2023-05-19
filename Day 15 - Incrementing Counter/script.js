const counters = document.querySelectorAll(".counter");

incrementCounter();

function incrementCounter() {
  counters.forEach((counter) => {
    const maxval = counter.dataset.target;
    let value = 0;
    const interval = setInterval(() => {
      value+= Math.floor(0.01*maxval);
      counter.innerHTML = value;
      if (counter.innerHTML == maxval) {
        clearInterval(interval);
      }
    }, 10);
    
  });
}

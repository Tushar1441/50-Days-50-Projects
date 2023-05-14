const loadingtext = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load=0;

let x = setInterval(loading,30)

function loading(){
  load++;

  if(load === 100){
    clearInterval(x);
  }
  console.log(load);
  loadingtext.innerHTML = `${load}%`
  loadingtext.style.opacity = (1-load/100);
  
  
  bg.style.filter =  `blur(${0.3*(100 - load)}px)`;// loadingtext.style.opacity = (1-load/100)
}

var circles = document.querySelectorAll('.circle');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let progress = document.getElementById('progress');

let activeCircleCount = 1;


next.addEventListener('click' , () =>{
  activeCircleCount++

  if(activeCircleCount > circles.length){
    activeCircleCount = circles.length;
  }

  update();  
})

prev.addEventListener('click' , () =>{
  activeCircleCount--
  
  if(activeCircleCount < 1){
    activeCircleCount = 1;
  }
  
  update();  
})

function update(){

  circles.forEach((circle,idx) => {
    if(idx < activeCircleCount){
      circle.classList.add('active');
    }else{
      circle.classList.remove('active');
    }

    const actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length -1)/(circles.length -1)*100 + '%'

  })


  if( activeCircleCount === circles.length ){
    next.disabled = true;

  } else if (activeCircleCount === 1) {
    prev.disabled = true;

  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}


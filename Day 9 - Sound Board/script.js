const sounds = ['applause' , 'boo' , 'tada' , 'wrong' , 'gasp' ,'victory' ,]


function stopSongs(){
  sounds.forEach(sound => {
    const audio = document.getElementById(sound)
    audio.pause()

    audio.currentTime = 0 ;

  })
}



sounds.forEach((sound) =>{
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerHTML = sound  
  
  btn.addEventListener('click',() =>{
    stopSongs();
    document.getElementById(sound).play();
  })
  
  document.getElementById('buttons').appendChild(btn);
})
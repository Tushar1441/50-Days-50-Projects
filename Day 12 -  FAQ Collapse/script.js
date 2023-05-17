const btns = document.querySelectorAll('.btn')

btns.forEach(btn =>{
  btn.addEventListener('click', () =>{
    btn.parentElement.classList.toggle('active')
  })
})
const btn = document.getElementById('btn');
const search = document.querySelector('.search')
const input = document.querySelector('.search-input')
const classes = search.classList;


btn.addEventListener('click', () =>{
  classes.toggle("active")
  search-input.focus();
});

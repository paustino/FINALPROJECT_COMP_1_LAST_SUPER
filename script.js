let btnClean = document.querySelector('button');
let intFields = document.querySelectorAll('input, textarea');

btnClean.addEventListener('click', ()=>{
  intFields.forEach(field => field.value = '');
});

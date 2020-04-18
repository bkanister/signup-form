let button = document.querySelector('.submit-btn');
let labels = document.querySelectorAll('label');
let errorIcons = document.querySelectorAll('.error-icon');
let inputs = document.querySelectorAll('.input-field');

button.addEventListener('click', function checkFields(e) {
  e.preventDefault();
  let name = document.querySelector('#name');
if (name.value === '' || name.value.length < 3) {
  labels[0].style.visibility = 'visible';
  errorIcons[0].style.visibility = 'visible';
  inputs[0].classList.add('wrong-input');
}
let lastName = document.querySelector('#last-name');
if (lastName.value === '' || lastName.value.length < 3) {
  labels[1].style.visibility = 'visible';
  errorIcons[1].style.visibility = 'visible';
  inputs[1].classList.add('wrong-input');
}
let email = document.querySelector('#email');
if (email.value === '' || !validateEmail()) {
  labels[2].style.visibility = 'visible';
  errorIcons[2].style.visibility = 'visible';
  inputs[2].classList.add('wrong-input');
}
let password = document.querySelector('#password')
if (password.value === '' || password.value.length < 3) {
  labels[3].style.visibility = 'visible';
  errorIcons[3].style.visibility = 'visible';
  inputs[3].classList.add('wrong-input');
}
button.classList.add('submit-btn__inactive');
})

function validateEmail() {
  let email = document.querySelector('#email').value;
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return (pattern.test(email));
}

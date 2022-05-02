const inputText = document.querySelector('input#name-input');
const userName = document.querySelector('span#name-output');


const updateValue = event => {
  userName.textContent = event.target.value 
  ? event.target.value
  : 'Anonymous';
};

inputText.addEventListener('input', updateValue);

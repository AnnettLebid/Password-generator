const numbers = [1,2,3,4,5,6,7,8,9,0];
const lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialChars = ['!', '@', '#', '$', '%', '&', '*']

document.getElementById('param-1').oninput = function() {  
  document.getElementById('password-length').innerHTML = this.value;
}

document.getElementById('generator').onclick = generatePass;
document.querySelector("#copy").addEventListener("click", copy);

const compareRandom = (a,b) => Math.random() - 0.5;

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min +1);
  rand  = Math.round(rand);
  return rand;
}

function copy (){
  const textarea = document.createElement('textarea'); 
  let passCopy = document.querySelector("#out").innerText;
  console.log(passCopy)

  if(!passCopy) { return; }

  textarea.value = passCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();  
}

generatePass();

function generatePass() {
  let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  if (checkboxes.length === 0) { 
    document.getElementById('out').innerHTML = ''; 
    return; 
  }

  let result = [];
  if(document.getElementById('param-2').checked){
    result = [...result, ...numbers];
  }
  if(document.getElementById('param-3').checked){
    result = [...result, ...lowerCaseChars];
  }
  if(document.getElementById('param-4').checked){
    result = [...result, ...upperCaseChars];
  }
  if(document.getElementById('param-5').checked){
    result = [...result, ...specialChars];
  }

  document.getElementById('out').innerHTML = ''; 
    let password = '';
    let passwordLength = parseInt(document.getElementById('param-1').value);
  
    for (let i = 0; i < passwordLength; i++){
      password += result[randomInteger(0, result.length - 1)];
    }  
    document.getElementById('out').innerHTML += password; 
}



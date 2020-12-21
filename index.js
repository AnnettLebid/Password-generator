const numbersArr = [1,2,3,4,5,6,7,8,9,0];
const lowerCaseCharArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['!', '@', '#', '$', '%', '&', '*']

document.getElementById('param-1').oninput = function() {  
  document.getElementById('password-length').innerHTML = this.value;
}

document.getElementById('generator').onclick = generatePass;

const compareRandom = (a,b) => Math.random() - 0.5;

const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min +1);
  rand  = Math.round(rand);
  return rand;
}

generatePass();

function generatePass() {
  let result = [];
  if(document.getElementById('param-2').checked){
    result = [...result, ...numbersArr];
  }
  if(document.getElementById('param-3').checked){
    result = [...result, ...lowerCaseCharArr];
  }
  if(document.getElementById('param-4').checked){
    result = [...result, ...upperCaseChar];
  }
  if(document.getElementById('param-5').checked){
    result = [...result, ...specialCharacters];
  }

  document.getElementById('out').innerHTML = '';
  for (let j = 0; j < 6; j++) {
    let password = '';
    let passwordLength = parseInt(document.getElementById('param-1').value);
  
    for (let i = 0; i < passwordLength; i++){
      password += result[randomInteger(0, result.length - 1)];
    }  
    document.getElementById('out').innerHTML += `<p>${password}</p>`;
  }
}



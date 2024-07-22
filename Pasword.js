const result = document.getElementById("result");
function generatePasword( Length,inculdeLoweCase,inculdeUpperCase,inuculdeSymbols){

const lowerCaseChars = "abcdefghijlkmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+=";

let allowedChars = "";
let password = "";

allowedChars += inculdeLoweCase ? lowerCaseChars : "";
allowedChars += inculdeUpperCase ? upperCaseChars : "";
allowedChars += inculdeNumbers ? numberChars : "";
allowedChars += inuculdeSymbols ? symbolChars : "";


if(Length <= 0){
    return `(Password length must be at least 1)`;
}

if(allowedChars.length === 0){
    return `(At least 1 set charcter needs to be selected)`;
}

for(let i = 0;i<passwordLength;i++){
    const rnadomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[rnadomIndex];
}

//console.log(allowedChars);
return password;
}
const passwordLength = 12;
const inculdeLoweCase = true;
const inculdeUpperCase = true;
const inculdeNumbers = true;
const inuculdeSymbols = true;

const password = generatePasword(passwordLength,inculdeLoweCase,inculdeUpperCase,inculdeNumbers,inuculdeSymbols);

console.log(`genrete paswword : ${password}`);
result.textContent =`Random Password : ${password}`;
// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword() {

var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r", "s", "t", "u", "w", "x", "y", "z"];

var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specChars = ["!", "@", "#", "$", "%", "?", "&", "*"];

var passwordCharArr = [];
var passwordLength = "";
let passwordResults = "";


passwordLength = prompt ("Pick Between 8 and 128 Characters");
if (passwordLength <= 7 || passwordLength >= 129) {
  return
}

alert("Your secure password is " + passwordLength + " Characters Long");
confirmLowerChars = confirm ("Do you want lower case characters?");

  confirmUpperChars = confirm ("Would you like upper case letter?");

  confirmNums = confirm ("Do you want to use numbers?");

  confirmSpecChars = confirm ("Do you want to use special characters?");

  if (confirmLowerChars === false && confirmUpperChars === false && confirmNums === false && confirmSpecChars === false) {
    return "You must pick at least one!";
  }

  if (confirmLowerChars) {
    passwordCharArr = passwordCharArr.concat(lowerChars);
  }

  if (confirmUpperChars) {
    passwordCharArr = passwordCharArr.concat(upperChars);
  }

  if (confirmNums) {
    passwordCharArr = passwordCharArr.concat(nums);
  }

  if (confirmSpecChars) {
    passwordCharArr = passwordCharArr.concat(specChars);
  }

for (i = 0; i < passwordLength; i++) {
  passwordResults = passwordResults + passwordCharArr[Math.floor(Math.random() * [passwordCharArr.length])];
}

  console.log(passwordResults)
  return passwordResults;


  return "generated password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

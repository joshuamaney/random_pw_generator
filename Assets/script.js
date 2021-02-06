// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for computer to choose from
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "{", "]", "}", ";", ":", ",", "<", ".", ">", "?"];

var upperCaseIndex = Math.floor(Math.random() * upperCaseOptions.length);
var userChoiceUpper = upperCaseOptions[upperCaseIndex];
console.log(userChoiceUpper);

var lowerCaseIndex = Math.floor(Math.random() * lowerCaseOptions.length);
var userChoiceLower = lowerCaseOptions[lowerCaseIndex];
console.log(userChoiceLower);

var numberIndex = Math.floor(Math.random() * numberOptions.length);
var userChoiceNumber = numberOptions[numberIndex];
console.log(userChoiceNumber);

var specialCharIndex = Math.floor(Math.random() * specialCharOptions.length);
var userChoiceSpecialChar = specialCharOptions[specialCharIndex];
console.log(userChoiceSpecialChar);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

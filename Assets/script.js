// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of options for computer to choose from
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "{", "]", "}", ";", ":", ",", "<", ".", ">", "?"];

generatePassword()

function generatePassword() {
// user selection
var choiceLength = window.prompt("choose a password length between 8-128 characters");
var userChoiceLength = choiceLength;
console.log(userChoiceLength);

if (userChoiceLength >= 8 && userChoiceLength <= 128) {

  var upperChoice = window.confirm("Would you like to include upper case letters?");
  // Random choice from arrays
  var upperCaseIndex = Math.floor(Math.random() * upperCaseOptions.length);
  var userChoiceUpper = upperCaseOptions[upperCaseIndex];
  console.log(userChoiceUpper);

  var lowerChoice = window.confirm("Would you like to include lower case letters?");
  var lowerCaseIndex = Math.floor(Math.random() * lowerCaseOptions.length);
  var userChoiceLower = lowerCaseOptions[lowerCaseIndex];
  console.log(userChoiceLower);

  var numberChoice = window.confirm("Would you like to include numbers?");
  var numberIndex = Math.floor(Math.random() * numberOptions.length);
  var userChoiceNumber = numberOptions[numberIndex];
  console.log(userChoiceNumber);

  var specialCharChoice = window.confirm("Would you like to include special characters?");
  var specialCharIndex = Math.floor(Math.random() * specialCharOptions.length);
  var userChoiceSpecialChar = specialCharOptions[specialCharIndex];
  console.log(userChoiceSpecialChar);

} else {
  var invalidLength = window.confirm("You must choose a password length between 8 and 128 characters");

  if (invalidLength) {
    generatePassword();
  }

}
}
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

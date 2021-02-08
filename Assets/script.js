// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword() {


// Array of options for computer to choose from
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "{", "]", "}", ";", ":", ",", "<", ".", ">", "?"];


// Empty arrays

var resultArray = [];
var choiceArray = [];

// user selection
var choiceLength = window.prompt("choose a password length between 8-128 characters");
 if (choiceLength >= 8 && choiceLength <= 128) {
  var upperChoice = window.confirm("Would you like to include upper case letters?");
  var lowerChoice = window.confirm("Would you like to include lower case letters?");
  var numberChoice = window.confirm("Would you like to include numbers?");
  var specialCharChoice = window.confirm("Would you like to include special characters?");

    if (upperChoice) {
      resultArray = resultArray.concat(uppercaseArray);
    }

    if (lowerChoice) {
      resultArray = resultArray.concat(lowercaseArray);
    }

    if (numberChoice) {
      resultArray = resultArray.concat(numberArray);
    }

    if (specialCharChoice) {
      resultArray = resultArray.concat(specialCharArray);
    } 

    if (!upperChoice && !lowerChoice && !numberChoice && !specialCharChoice) {
      window.alert("You must select at least one option");
      generatePassword();
    }

    for (var i = 0; i < choiceLength; i++) {
      choiceArray.push (resultArray[Math.floor(Math.random() * resultArray.length)])
    }
    return choiceArray.join("");

  } else {
    window.alert("Invalid selection. You must choose a length between 8 and 128 characters");
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

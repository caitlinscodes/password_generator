// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberChars = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChars = [ "!", "@", "#", "$", "%", "&", "*", "+", "=", "?"]



// Provided by instructor
function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?");
  console.log(allowUppercase);
}

// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.
function askAboutLowercase(){
  allowLowercase = confirm("Are lower case characters allowed?");
  console.log(allowLowercase);
}

function askAboutNumbers(){
  allowNumbers = confirm("Are numbers allowed?");
  console.log(allowNumbers);
}

function askAboutSpecial(){
  allowSpecials = confirm("Are special characters allowed?");
  console.log(allowSpecials);
}

function askPasswordCharacterCount(){
  passwordCharacterCount = prompt("How many characters are allowed?");
  console.log(passwordCharacterCount);
}

function chooseRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.
  // HINT: You may want to look into merging arrays together
function generatePassword(){
  for (let index = 0; index < array.length; index++) {
  var finalResult = [];
  // Pulled from in class assignment
  var randomString = "";
  var stringLength = askPasswordCharacterCount;
  for( z=1; z=stringLength; z++){

    var randomUppercase = Math.floor(Math.random() * uppercaseChars.length);
    var uppercase = uppercaseChars[randomUppercase];
    console.log(uppercase);

    var randomLowercase = Math.floor(Math.random() * lowercaseChars.length);
    var lowercase = lowercaseChars[randomLowercase];
    console.log(lowercase);

    var randomNumber = Math.floor(Math.random() * numberChars.length);
    var number = numberChars[randomNumber];
    console.log(number);

    var randomSpecial = Math.floor(Math.random() * specialChars.length);
    var special = specialChars[randomSpecial];
    console.log(special);

    randomString += uppercase += lowercase += number += special;
  }
    
  }  
  
  return finalResult;
}

// Write password to the #password input
function writePassword() {
  askAboutUppercase();
  askAboutLowercase();
  askAboutNumbers();
  askAboutSpecial();
  askPasswordCharacterCount();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
var characterCount = [1,2,3,4,5,6,7,8,9,10]


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
  passwordCharacterCount = prompt("How many characters are allowed? (up to 10)");
  console.log(passwordCharacterCount);
}

function character_length(){
  return Math.floor(passwordCharacterCount);
}

// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.
  // HINT: You may want to look into merging arrays together
function generatePassword(itemsInArray){
  var finalResult = [];
  for (let index = 0; index<=itemsInArray; index++) {
  // Pulled from in class assignment
  var randomString = "";
  var stringLength = character_length();
  for( z=1; z<=stringLength; z++){
    if (allowUppercase === true){
    var randomUppercase = Math.floor(Math.random() * uppercaseChars.length);
    var uppercase = uppercaseChars[randomUppercase];
    randomString += uppercase;
    }
  }
  for (y=1; y<=stringLength; y++){
    if (allowLowerCase === true){
    var randomLowercase = Math.floor(Math.random() * lowercaseChars.length);
    var lowercase = lowercaseChars[randomLowercase];
    randomString += lowercase;
    }
  }
  for (x=1; x<=stringLength; x++){
    if (allowNumbers === true){
    var randomNumber = Math.floor(Math.random() * numberChars.length);
    var number = numberChars[randomNumber];
    randomString += number;
    }
  }
  for (w=1; w<=stringLength; w++){
    if (allowSpecials === true){
    var randomSpecial = Math.floor(Math.random() * specialChars.length);
    var special = specialChars[randomSpecial];
    randomString += special;
    }
  }
  finalResult.push(randomString);
  }
  console.log(finalResult)
  return finalResult; 
  }  

// Write password to the #password input
function writePassword() {
  askAboutUppercase(true, false);
 
  askAboutLowercase(true, false);
 
  askAboutNumbers(true, false);

  askAboutSpecial(true, false);

  askPasswordCharacterCount(passwordCharacterCount);


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

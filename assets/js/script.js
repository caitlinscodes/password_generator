// Global Variables
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

// Repeat for other criteria; for the number of characters, use a prompt statement.
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

function chooseRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

// Once all the criteria are determined, this function will generate the password.
function generatePassword(itemsInArray){
  var randomString = [];
  var stringLength = character_length();
  var uppercase = "";
  var lowercase = "";
  var number = "";
  var special = "";
          if (allowUppercase === true){
          var randomUppercase = chooseRandomNumber(0, 25);
          uppercase = uppercaseChars[randomUppercase];
          console.log(uppercase);
          randomString.push(uppercase);
          } else {
            console.log('no uppercase')
          }
        
          if (allowLowerCase === true){
          var randomLowercase = chooseRandomNumber(0, 25);
          lowercase = lowercaseChars[randomLowercase];
          randomString.push(lowercase);
          } else {
            console.log('no lowercase')
          }
        
          if (allowNumbers === true){
          var randomNumber = chooseRandomNumber(0, 8);
          number = numberChars[randomNumber];
          randomString.push(number);
          } else {
            console.log('no number')
          }
        
          if (allowSpecials === true){
          var randomSpecial = chooseRandomNumber(0, 9);
          special = specialChars[randomSpecial];
          randomString.push(special);
          } else {
            console.log('no special')
          }
        
      
      var finalResult = randomString;

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

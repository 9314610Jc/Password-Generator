// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = prompt("how long do you want your password to be from 8-128 characters?")
//input must be > 7 < 129
if (passLength < 8 || passLength > 128){
    alert('Must be 8-128 Characters!')
    var passLength = prompt("how long do you want your password to be from 8-128 characters?") 
}else{
};
var charTypes = [
    'Special',
    'UPPERCASE',
    'lowercase',
    'Numeric'
];

var completeCharSet = [
    '!@#$%^&*-?',
    'QWERTYUIOPASDFGHJKLZXCVBNM',
    'qwertyuiopasdfghjklzxcvbnm',
    '0123456789'
];
console.log(completeCharSet);

var charTypeChoices = [];
var charChoiceArray = [];
var charSet = [];
//ask user what character you want
for( var i = 0; i < charTypes.length; i++){
    charTypeChoices.push(confirm('Do you want ' + charTypes[i] + ' characters in your password?'));
};

console.log(passLength, charTypeChoices);
//pushes users criteria into available array set
function charSt(item, index){
    if (item == true){
        charSet.push(completeCharSet[index]);
         }
};
//runs function charSt for each of the criteria
charTypeChoices.forEach(charSt);
console.log(charSet);
//picks random string then picks random char in string and returns into char choice arrays
function charChoice(){
    let stringChoice = charSet[Math.floor(Math.random()* charSet.length)];
    let charChoice = stringChoice.charAt(Math.floor(Math.random()* stringChoice.length));
    return charChoiceArray.push(charChoice);
};
//
function generatePassword(){
//clears array 
    charChoiceArray = [];
// runs charChoice function for as long as desired password length
    for (var j = 0; j < passLength;j++){
        charChoice();
    }
//turns every char choice in array into single string
    return charChoiceArray.join('');
};


function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


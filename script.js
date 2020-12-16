// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = prompt("how long do you want your password to be from 8-128 characters?")
if (prompt < 8 || prompt > 128){
    alert('Must be 8-128 Characters!')
    
}
var charTypes = [
    'Special',
    'UPPERCASE',
    'lowercase',
    'Numeric'
];
var charChoiceArray = [];
var completeCharSet = [
    '!@#$%^&*-?',
    'QWERTYUIOPASDFGHJKLZXCVBNM',
    'qwertyuiopasdfghjklzxcvbnm',
    '0123456789'
];
console.log(completeCharSet);

var charTypeChoices = [];
var charSet = [];

for( var i = 0; i < charTypes.length; i++){
    charTypeChoices.push(confirm('Do you want ' + charTypes[i] + ' characters in your password?'));
};

console.log(passLength, charTypeChoices);

function charSt(item, index){
    if (item == true){
        charSet.push(completeCharSet[index]);
         }
};

charTypeChoices.forEach(charSt);
console.log(charSet);

function charChoice(){
    let arrayChoice = charSet[Math.floor(Math.random()* charSet.length)];
    let charChoice = arrayChoice.charAt(Math.floor(Math.random()* arrayChoice.length));
    return charChoiceArray.push(charChoice);
};

function generatePassword(){
    charChoiceArray = [];

    for (var j = 0; j < passLength;j++){
        charChoice();
    }
    return charChoiceArray.join('');
};


function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


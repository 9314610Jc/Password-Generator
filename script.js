// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passLength = prompt("how long do you want your password to be from 8-128 characters?")
var charTypes = [
    'Special',
    'UPPERCASE',
    'lowercase',
    'Numeric'
];
var charTypeChoices = [];
for( var i = 0; i < charTypes.length; i++){
    charTypeChoices.push(confirm('Do you want ' + charTypes[i] + ' characters in your password?'));
};
var completeCharSet = [
    '!@#$%^&*-?',
    'QWERTYUIOPASDFGHJKLZXCVBNM',
    'qwertyuiopasdfghjklzxcvbnm',
    '0123456789'
];



var charSet = [];

//var pcChoice = Math.floor((Math.random()* (charSet.length + 1))); 
//var pcChoice2 = Math.floor((Math.random() * charSet[pcChoice]));


//var charChoice = charSet[pcChoice].charAt(pcChoice2);


var charChoiceArray = [];
console.log(passLength, charTypeChoices);

function pcChoice(){
    var pcChoice = Math.floor((Math.random()* (charSet.length + 1))); 
    console.log(pcChoice)
    return pcChoice
};
function pcChoice2(){
    var pcChoice2 = Math.floor((Math.random() * charSet[pcChoice()]));
    console.log(pcChoice2)
    return pcChoice2
};
function charChoice(){
    var charChoice = charSet[pcChoice()].charAt(pcChoice2());
    console.log(charChoice)
    return charChoice 
    
};

function generatePassword(passLength, ...charTypeChoices){
//var charSet = [];
// loop will run for as long as pass length
    for(var z = 0; z < passLength + 1; z++){
//   for(var y = 0; y < charTypeChoices.length; i++){
        if (charTypeChoices === true){
                charSet.push(completeCharSet[z]);
                console.log(charSet);
             }
            pcChoice();
            pcChoice2();
            charChoice();
            return charChoiceArray.push(charChoice());
            
//pick random charset in array
//  var pcChoice = Math.floor((Math.random()* (charSet.length + 1))); 
// var charChoice = charSet[pcChoice].charAt(pcChoice2);
        };
        
        var charString = charChoiceArray.toString();
        console.log(charString); 
    
    };



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

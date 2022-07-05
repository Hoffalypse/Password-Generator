// Define Global Variables
var generateBtn = document.querySelector("#generate");
var numbers = ("0123456789");
var specialChars = ( "~`!@#$%^&()-_+={}[]|/?.<>");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

//user must hit "generate Password" before prompts appear  
document.addEventListener("click", writePassword);

// concatinate the strings based on user selection
function writePassword() {
  do {  
    var numberChoice = prompt("Would you like to use Number Characters?" + "\n" + "Choose Y or N");
        if (numberChoice === "Y") {
            var totalString = numbers;
        }
          else {
            var totalString = "";
          }
      
    var specialChoice = prompt("Would you like to use Special Characters?" + "\n" + "Choose Y or N");
        if(specialChoice === "Y") {
            totalString = totalString.concat(specialChars);
        }

    var lowerChoice = prompt("Would you like to use Lower Case Letters?" + "\n" + "Choose Y or N");
        if(lowerChoice === "Y") {
            totalString = totalString.concat(lowerCase);
        }

    var upperChoice = prompt("Would you like to use Upper Case Letters?" + "\n" + "Choose Y or N");
        if(upperChoice === "Y") {
            totalString = totalString.concat(upperCase);
        }

        if (totalString === ""){
          alert("You must choose at least one character type, try again");
        }
      }
  while(totalString === "");
    
      //define password length
    do {
      var howMany = prompt("How many Characters would you like the Password to be?" + "\n" + "Choose from 8-128");
        if (howMany > 7 && howMany < 129){
          var goodLength = howMany;   
        }
          else {
             alert("Incorrect Value Try again");
             
          }
      }
    while(howMany < 8 || howMany >128);
    
      //math for random character selection   
       var passArray = [];
     for (var i = 0; i < goodLength; i++) {     
         var generatePass = totalString[Math.floor(Math.random() * totalString.length)];
       
         passArray.push(generatePass);
      }      
    
      //Turn array returned into string
      var password = passArray.join("");
      
      //add password to box 
      var passwordText = document.querySelector("#password");
       passwordText.value = password;
    
    }
  






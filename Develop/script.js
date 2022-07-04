// Define Global Variables
var generateBtn = document.querySelector("#generate");
var numbers = ("0"+"1"+"2"+"3"+"4"+"5"+"6"+"7"+"8"+"9");
var specialChars = ( "~"+"`"+"!"+"@"+"#"+"$"+"%"+"^"+"&"+"*"+"("+")"+"-"+"_"+"+"+"="+"{"+"}"+"["+"]"+"|"+"/"+"?"+"."+"<"+">");
var lowerCase = ("a"+"b"+"c"+"d"+"e"+"f"+"g"+"h"+"i"+"j"+"k"+"l"+"m"+"n"+"o"+"p"+"q"+"r"+"s"+"t"+"u"+"v"+"w"+"x"+"y"+"z");
var upperCase = ("A"+"B"+"C"+"D"+"E"+"F"+"G"+"H"+"I"+"J"+"K"+"L"+"M"+"N"+"O"+"P"+"Q"+"R"+"S"+"T"+"U"+"V"+"W"+"X"+"Y"+"Z");

//user must hit "generate Password" before prompts appear  
document.addEventListener("click", writePassword);

// concatinate the strings based on user selection
function writePassword() {
    var numberChoice = prompt("Would you like to use Numbers? Y/N");
        if (numberChoice === "Y") {
            var totalString = numbers;
        }
          else {
            var totalString = "";
          }
      
    var specialChoice = prompt("Would you like to use Special Characters? Y/N");
        if(specialChoice === "Y") {
            totalString = totalString.concat(specialChars);
        }

    var lowerChoice = prompt("Would you like to use Lower Case Letters? Y/N");
        if(lowerChoice === "Y") {
            totalString = totalString.concat(lowerCase);
        }

    var upperChoice = prompt("Would you like to use Upper Case Letters? Y/N");
        if(upperChoice === "Y") {
            totalString = totalString.concat(upperCase);
        }
      
        
}
  





// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

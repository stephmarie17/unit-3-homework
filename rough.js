// On page load, dialog box asks user:
// What password strength do you want to generate? Please enter: Good or Strong
// Depending on strength selected, code will:
//      1. Randomize numbers
//      2. Randomize letters
//      3. If needed, randomize special characters
//      4. Generate a string of the length associated with the three options
//      5. Auto-fill the text area box
// BONUS: code the copy to clipboard button

// Variables
var complexity, valuesUppercaseTrue, valuesLowercaseTrue, valuesNumericTrue, valuesSpecialTrue, i, copyPassword, passwordDOM, uppercasePassword;

var password = "";

// Arrays to pull from using charAt and Math.random
var valuesUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var valuesLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var valuesNumeric = [1,2,3,4,5,6,7,8,9];
var valuesSpecial = ['!','@','#','$','%','^','&','*','?'];

function generatePassowrd() {
    var complexity = prompt('What is your desired password length? Enter a number between 8-128');
    var valuesUppercaseTrue = prompt('Would you like uppercase characters? Enter Y or N');
    if (valuesUpperCaseTrue = Y); {
        for (var i = 0; i <=complexity; i++) {
            password = password + valuesUppercase.charAt(Math.floor(Math.random() * Math.floor(valuesUppercase.length - 1)));
        }
        return;
    }

    if (valuesLowerCaseTrue = Y)
    var valuesLowercaseTrue = prompt('Would you like lowercase characters? Enter Y or N');
    var valuesNumericTrue = prompt('Would you like numbers? Enter Y or N');
    var valuesSpecialTrue = prompt('Would you like special characters? Enter Y or N');
}
    // if valuesUppercaseTrue = true;
    // for(var i = 0; i <=complexity; i++) {
    //     var uppercasePassword = password + valuesUppercase.charAt(Math.floor(Math.random() * Math.floor(valuesUppercase.length - 1)));
    // } 
    // if valuesLowercaseTrue = true;
    // for(var i = 0; i <=complexity; i++) {
    //     var lowercasePassword = password + valuesLowercase.charAt(Math.floor(Math.random() * Math.floor(valuesLowercase.length - 1)));
    // } 
    // if valuesNumericTrue = true;
    // for(var i = 0; i <=complexity; i++) {
    //     var valuesNumericTrue = password + valuesNumeric.charAt(Math.floor(Math.random() * Math.floor(valuesNumeric.length - 1)));
    // }

function writePassword() {
    // Function to write the password to the text area
}



// Function to be called on click)
document.querySelector('.btn-generate').addEventListener('click', function() {
    generatePassword();
    // // Request for desired password length
    // var complexity = prompt('What is your desired password length? Enter a number between 8-128');
    // for(var i = 1; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    var passwordDOM = document.querySelector('#generated-password');
    // Style for generated password
    passwordDOM.textContent = password;
    passwordDOM.style.color = 'black';
    passwordDOM.style.fontSize = '24px';
});

// Function to code copy to clipboard button
document.querySelector('.btn-clipboard').addEventListener('click', function(){
    copyPassword = document.getElementById('generated-password');
    document.execCommand("copy");
    alert("Password copied!");
    });

/***
 * Current errors:
 * generate password does not replace password if button is clicked, it keeps adding on to the first one --> loop issue?
 * would like to build in something that prevents a user from entering a number outside of the specified parameters for complexity
 * copy to clipboard function still not functioning
 * 
 * CHANGES TO MAKE
 * Create VALUES for length, uppercase, lowercase, special, numeric
 * Use IF/ELSE to determine how the for loop will access each array and generate the password
 */
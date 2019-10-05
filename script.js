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
var complexity, values, i, copyPassword, passwordDOM;

var password = "";

// Request for desired password length
var complexity = prompt('What is your desired password length? Enter a number between 8-26');
// console.log(complexity);

// String to pull from using charAt and Math.random
var values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*?';

// Function to be called on click
document.querySelector('.btn-generate').addEventListener('click', function() {
    for(var i = 1; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    var passwordDOM = document.querySelector('.generated-password');
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
 */
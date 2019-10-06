// Declare global variables

var criteriaLength, criteriaAlphaUc, criteriaAlphaLc, criteriaAlphaMix, criteriaNumbers, criteriaSpecial, criteriaNumSecMix, criteriaAlphaUcNumbers, criteriaAlphaLcNumbers, criteriaAlphaNumMix, criteriaAlphaNumSpecMix, password, copyPassword, passwordDOM;

// Declare function/s
function criteriaPassword() {
    var criteriaLength = prompt('What is your desired password length? Enter a number between 8-128');
        console.log(criteriaLength);
        // if(criteriaLength < 8 || criteriaLength > 128)
        // {
        //     alert('Password must be between 8-128 characters.')
        // } 
    var criteriaAlphaUc = prompt('Would you like uppercase letters? Y/N');
        console.log(criteriaAlphaUc);
    var criteriaAlphaLc = prompt('Would you like lowercase letters? Y/N');
        console.log(criteriaAlphaLc);
    var criteriaNumbers = prompt('Would you like numbers? Y/N');
        console.log(criteriaNumbers);
    var criteriaSpecial = prompt('Would you like special characters? Y/N');
        console.log(criteriaSpecial);
}

function generatePassword(criteriaLength, criteriaAlphaUc, criteriaAlphaLc, criteriaNumbers, criteriaSpecial) {

var password = "";

// Value variables
var valuesAlphaUc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var valuesAlphaLc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var valuesAlphaMix = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var valuesNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var valuesSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var valuesNumSpecMix = [1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "?"];

var valuesAlphaUcNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 1, 2, 3, 4, 5, 6, 7, 8, 9];
var valuesAlphaLcNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9];
var valuesAlphaNumMix = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9];
var valuesAlphaNumSpecMix = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "?"];

for(var i = 0; i <= criteriaLength; i++) {
    if(criteriaAlphaUc== 'Y') {
        password = password + valuesAlphaUc.charAt(Math.floor(Math.random() * Math.floor(valuesAlphaUc.length - 1)));
    }
    else if(criteriaAlphaLc== 'Y') {
        password = password + valuesAlphaLc.charAt(Math.floor(Math.random() * Math.floor(valuesAlphaLc.length - 1)));
    }
    else if(criteriaAlphaLc== 'Y' && criteriaAlphaUc== 'Y') {
        password = password + valuesAlphaMix.charAt(Math.floor(Math.random() * Math.floor(valuesAlphaMix.length - 1)));
    }
    else if(criteriaAlphaUc== 'Y' && criteriaNumbers== 'Y') {
        password = password + valuesAlphaUcNumbers.charAt(Math.floor(Math.random() * Math.floor(valuesAlphaUcNumbers.length - 1)));
    }
    else if(criteriaAlphaLc== 'Y' && criteriaNumbers== 'Y') {
        password = password + valuesAlphaLcNumbers.charAt(Math.floor(Math.random() * Math.floor(valuesAlphaLcNumbers.length - 1)));
    }
    else if(criteriaAlphaLc== 'Y' && criteriaAlphaUc=='Y' && criteriaNumbers== 'Y') {
        password = password + valuesAlphaNumMix.charAt(Math.floor(Math.random() * Math.floor(valuesAlphaNumMix.length - 1)));
    }
    else if(criteriaAlphaLc== 'Y' && criteriaAlphaUc== 'Y' && criteriaNumbers== 'Y' && criteriaSpecial== 'Y') {
        password = password + valuesAlphaNumSpecMix.charAt(Math.floor(Math.random() * Math.floor(valuesAlphaNumSpecMix.length - 1)));
    }
    else if(criteriaNumbers== 'Y') {
        password = password + valuesNumbers.charAt(Math.floor(Math.random() * Math.floor(valuesNumbers.length - 1)));
    }
    else if(criteriaSpecial== 'Y') {
        password = password + valuesSpecial.charAt(Math.floor(Math.random() * Math.floor(valuesSpecial.length - 1)));
    }
    else if(criteriaNumbers== 'Y' && criteriaSpecial== 'Y') {
        password = password + valuesNumSpecMix.charAt(Math.floor(Math.random() * Math.floor(valuesNumSpecMix.length - 1)));
    }
    
    console.log(password);
    return password;

    }

    var passwordDOM = document.querySelector('#generated-password');

    // Style for generated password

    passwordDOM.textContent = password;
    passwordDOM.style.color = 'black';
    passwordDOM.style.fontSize = '24px';
}   

function copyPassword() {
    copyPassword = document.getElementById('generated-password');
    document.execCommand("copy");
    alert("Password copied!");
}

// Call function/s

document.querySelector('.btn-generate').addEventListener('click', function() {
    criteriaPassword();
    generatePassword();
});

document.querySelector('.btn-clipboard').addEventListener('click', function() {
    copyPassword();
});

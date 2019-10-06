// Declare global variables

var criteriaLength, criteriaAlphaUc, criteriaAlphaLc, criteriaAlphaMix, criteriaNumbers, criteriaSpecial, criteriaNumSecMix, criteriaAlphaUcNumbers, criteriaAlphaLcNumbers, criteriaAlphaNumMix, criteriaAlphaNumSpecMix, copyPassword, passwordDOM;

// Declare function/s
function criteriaPassword() {
    var criteriaLength = prompt('What is your desired password length? Enter a number between 8-128');
        console.log(criteriaLength);
    var criteriaAlphaUc = prompt('Would you like uppercase letters? Y/N');
        console.log(criteriaAlphaUc);
    var criteriaAlphaLc = prompt('Would you like lowercase letters? Y/N');
        console.log(criteriaAlphaLc);
    var criteriaNumbers = prompt('Would you like numbers? Y/N');
        console.log(criteriaNumbers);
    var criteriaSpecial = prompt('Would you like special characters? Y/N');
        console.log(criteriaSpecial);
}

function generatePassword() {
var password = "";
// Value variables
var valuesAlphaUc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var valuesAlphaLc = 'abcdefghijklmnopqrstuvwxyz';
var valuesAlphaMix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

var valuesNumbers = 123456789;
var valuesSpecial = '!@#$%^&*?';
var valuesNumSpecMix = '123456789!@#$%^&*?'

var valuesAlphaUcNumbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
var valuesAlphaLcNumbers = 'abcdefghijklmnopqrstuvwxyz123456789';
var valuesAlphaNumMix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
var valuesAlphaNumSpecMix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*?';

for (var i=0; i <= criteriaLength; i++) {
    if (criteriaAlphaUc== 'Y') {
        password += valuesAlphaUc.charAt(Math.floor(Math.random() * valuesAlphaUc.length - 1));
    }
    else if (criteriaAlphaLc== 'Y') {
        password += valuesAlphaLc.charAt(Math.floor(Math.random() * valuesAlphaLc.length - 1));
    }
    else if (criteriaAlphaLc== 'Y' && criteriaAlphaUc== 'Y') {
        password += valuesAlphaMix.charAt(Math.floor(Math.random() * valuesAlphaMix.length - 1));
    }
    else if (criteriaAlphaUc== 'Y' && criteriaNumbers== 'Y') {
        password += valuesAlphaUcNumbers.charAt(Math.floor(Math.random() * valuesAlphaUcNumbers.length - 1));
    }
    else if (criteriaAlphaLc== 'Y' && criteriaNumbers== 'Y') {
        password += valuesAlphaLcNumbers.charAt(Math.floor(Math.random() * valuesAlphaLcNumbers.length - 1));
    }
    else if (criteriaAlphaLc== 'Y' && criteriaAlphaUc=='Y' && criteriaNumbers== 'Y') {
        password += valuesAlphaNumMix.charAt(Math.floor(Math.random() * valuesAlphaNumMix.length - 1));
    }
    else if (criteriaAlphaLc== 'Y' && criteriaAlphaUc== 'Y' && criteriaNumbers== 'Y' && criteriaSpecial== 'Y') {
        password += valuesAlphaNumSpecMix.charAt(Math.floor(Math.random() * valuesAlphaNumSpecMix.length - 1));
    }
    else if (criteriaNumbers== 'Y') {
        password += valuesNumbers.charAt(Math.floor(Math.random() * valuesNumbers.length - 1));
    }
    else if (criteriaSpecial== 'Y') {
        password += valuesSpecial.charAt(Math.floor(Math.random() * valuesSpecial.length - 1));
    }
    else if (criteriaNumbers== 'Y' && criteriaSpecial== 'Y') {
        password += valuesNumSpecMix.charAt(Math.floor(Math.random() * valuesNumSpecMix.length - 1));
    }
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

document.querySelector('.btn-generate').addEventListener('click', function(event) {
    event.preventDefault();
    criteriaPassword();
    generatePassword();
});

document.querySelector('.btn-clipboard').addEventListener('click', function() {
    copyPassword();
});

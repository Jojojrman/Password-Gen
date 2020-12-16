// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var specialCr = confirm("Special Characters?");
  var specialNr = confirm("Numbers?");
  var specialCp = confirm("Capitol letters?");

  console.log(specialCr);
  console.log(specialNr);
  console.log(specialCp);

  var length = prompt("How Long of a password? 8-128");
  if (length < "8" || length > "128") {
    length = prompt("Please pick a number between 8 and 128");
  }

  var special1 = "!#$%&'()*+";
  var special2 = "0123456789";
  var special3 = "QRSTUVWXYZ";
  var charset = "abcdefghij";

  if (specialCr === true) {
    charset = charset+special1;
  } 
  if (specialNr === true) {
    charset = charset+special2;
  }
  if (specialCp === true) {
    charset = charset+special3;
  }
  if (specialCr === false && specialNr === false && specialCp === false) {
    charset = "abcdefghijklmnopqrstuvwxyz";
  }

  console.log(charset);
  var retVal = "";

  for (var i = 0, n = charset.length; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
    var num = Math.floor(Math.random() * upper) + 1; 
    return num;
  }
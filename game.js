//Create lettered array for computer.

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//Create variables to identify with index
var numberGuesses = document.getElementById("numGuesses");
var letterGuesses = document.getElementById("ltrGuess");
var winsCounted = document.getElementById("winCounter");
var lossesCounted = document.getElementById("lossCounter");

//Create var for win, loss, number of guesses, and letters guessed
var wins = 0;
var losses = 0;
var numGuesses = 10;
var ltrGuess = [];


//apply function event for key response
document.onkeyup = function(event) {

   var playerGuess = event.key;

   //use math random with variables assigned to array 
   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   //assign players options to array
   var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z",];
   
//create if statements to assign array choice to player
  if (options.indexOf(playerGuess) > -1) {

    //if statements for possible scenerios of action
      if (playerGuess === computerGuess) {
          wins++;
          numGuesses = 10;
          ltrGuess = [];
      }

      if (playerGuess != computerGuess) {
          numGuesses --;
          ltrGuess.push(playerGuess);

      }

      if (numGuesses === 0) {

      numGuesses = 10;
      losses ++;
      ltrguess = [];

//unable to confirm how to end random player generated letter choice unless correct answer is identified

      
  }

  numberGuesses.textContent= "number of guesses: " + numGuesses;
  letterGuesses.textContent= "letter: " + ltrGuess;
  winsCounted.textContent= "Wins: " + wins;
  lossesCounted.textContent= "Losses" + losses;

  


  
  }
};
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
  if (Math.abs(userGuess - targetNumber < computerGuess - targetNumber) || userGuess === computerGuess) {
    return true
  } else if (Math.abs(userGuess - targetNumber > computerGuess - targetNumber)) {
    return false
  } 
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1
  } else if (winner === 'computer') {
    computerScore += 1
  }
}

function advanceRound() {
  currentRoundNumber += 1
}

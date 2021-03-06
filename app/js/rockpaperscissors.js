////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // if (move != null) {
    //   return move;
    // }
    // else {
    //   return getInput();
    // }
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // if (move == null) {
    //   return move;
    // }
    // else {
    //   return randomPlay();
    // }
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    playerMove = getPlayerMove();
    computerMove = getComputerMove();

    if (playerMove === computerMove) {
        winner = "TIE";
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors')
          || (playerMove === 'paper' && computerMove === 'rock')
          || (playerMove === 'scissors' && computerMove === 'paper')) {
        winner = "YOU";
    }
    else {
        winner = "MACHINE";
    }

    console.log("HUMAN: " + playerMove);
    console.log("MACHINE: " + computerMove);
    console.log(winner + " wins.");

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var newWinner = getWinner();

    while ((playerWins < 5) || (computerWins < 5)) {
      if (newWinner === "YOU") {
        playerWins += 1;
      }
      else if (newWinner === "MACHINE") {
        computerWins += 1;
      }
    }

    console.log("Human: " + playerWins);
    console.log("Machine: " + computerWins);

    return [playerWins, computerWins];
}

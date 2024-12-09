// get references to buttons, score elements, status, and player boxes
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const gameStatus = document.querySelector('.game-status');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const player1Box = document.querySelector('.player-1-box');
const player2Box = document.querySelector('.player-2-box');

//  the initial score of the player and the computer 
let playerScore = 0;
let computerScore = 0;

// choices array
const choices = ['rock', 'paper', 'scissors'];

// Function to generate a random choice for the computer
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function to reset the game
function resetGame(winner) {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = `Player Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    gameStatus.textContent = `Previous Winner: ${winner}`;
    player1Box.innerHTML = '';
    player2Box.innerHTML = '';
}

// function to play one set of the game
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    // this displays the image of the choice of each player
    player1Box.innerHTML = `<img src="pictures/${playerChoice}.png" alt="${playerChoice}" class="box-1-image">`;
    player2Box.innerHTML = `<img src="pictures/${computerChoice}.png" alt="${computerChoice}" class="box-2-image">`;

    // this is the condition to check who won the rock paper scissors
    if (playerChoice === computerChoice) {
        gameStatus.textContent = "It's a Tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        gameStatus.textContent = "You Win!";
        playerScore++;
        playerScoreElement.textContent = `Player Score: ${playerScore}`;
    } else {
        gameStatus.textContent = "You Lose!";
        computerScore++;
        computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    }

    // this checks if player or computer reached a score of 10
    if (playerScore === 10) {
        gameStatus.textContent = "Congratulations! You Won the Game!";
        resetGame('Player');
    } else if (computerScore === 10) {
        gameStatus.textContent = "Game Over! The Computer Won!";
        resetGame('Computer');
    }
}

// event listener for each of the button
rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

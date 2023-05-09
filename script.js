let playerScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Round ${round}: It's a tie!`);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        console.log(`Round ${round}: You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
        console.log(`Round ${round}: You lost! ${computerSelection} beats ${playerSelection}`);
    }
    round++;
}
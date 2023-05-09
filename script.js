let playerScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
// console.log(getComputerChoice());


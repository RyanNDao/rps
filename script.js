function getComputerChoice(){
    let getChoice = () => {
        let randNum = Math.floor(Math.random()*3)+1;
        if (randNum === 1){
            return 'rock';
        } else if (randNum === 2){
            return 'paper';
        } else if (randNum === 3){
            return 'scissors';
        };
    };
    return getChoice();
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'paper'){
        if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock'){
            return `You won, ${playerSelection} beats ${computerSelection}!`;
        } else if (playerSelection === computerSelection){
            return `Draw! Both players picked ${playerSelection}.`;
        } else {
            return `You lost, ${playerSelection} loses to ${computerSelection}!`;
        }
    } else {
        return 'Invalid input';
    }
    
}

function resetGame(){
    playerWins = 0;
    playerLosses = 0;
    gameOver = false;
    gameMessage.textContent = 'The game has been restarted! Click any button to begin!'
}
    
function gameLogic(){
    if (gameOver){
        return
    }
    let results = playRound(this.textContent,getComputerChoice());
    if (results.includes('won')){
        playerWins += 1;
    } else if (results.includes('lost')){
        playerLosses += 1;
    }
    if (playerWins === 5 || playerLosses === 5){
        gameOver = true;
        winCondition(playerWins,playerLosses);
    } else {
        gameMessage.textContent = `${results} You currently have ${playerWins} wins and ${playerLosses} losses.`
    }
}

function winCondition(playerWins, playerLosses){
    if (playerWins > playerLosses){
        gameMessage.textContent = `You won the game! You had ${playerWins} wins and ${playerLosses} losses.`;
    } else if (playerWins < playerLosses){
        gameMessage.textContent = `You lost the game! You had ${playerWins} wins and ${playerLosses} losses.`;
    } else {
        console.log(`The game was a draw. You had ${playerWins} wins and ${playerLosses} losses.`);
    }
}

// rockButton = document.querySelector('.rock')


let playerWins = 0;
let playerLosses = 0;
let gameOver = false;

gameButtons = document.querySelectorAll('.game-button');
gameMessage = document.querySelector('.game-message');
playAgainButton = document.querySelector('.play-again')
gameButtons.forEach((button) => {
    button.addEventListener('click', gameLogic);
})
playAgainButton.addEventListener('click',resetGame);
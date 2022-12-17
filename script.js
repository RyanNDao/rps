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
            return `Draw! Both players picked ${playerSelection}`;
        } else {
            return `You lost, ${playerSelection} loses to ${computerSelection}!`;
        }
    } else {
        return 'Invalid input';
    }
    
}

function game(){
    let playerWins = 0;
    let playerLosses = 0;
    for (let i=0; i<5; i++){
        let playerSelection = prompt('Input move');
        let results = playRound(playerSelection, getComputerChoice());
        if (results.includes('won')){
            playerWins++;
        } else if (results.includes('lost')){
            playerLosses++;
        }
        console.log(results);
    }
    if (playerWins > playerLosses){
        console.log(`You won the game! You had ${playerWins} wins and ${playerLosses} losses.`);
    } else if (playerWins < playerLosses){
        console.log(`You lost the game! You had ${playerWins} wins and ${playerLosses} losses.`);
    } else {
        console.log(`The game was a draw. You had ${playerWins} wins and ${playerLosses} losses.`);
    }
}
function getComputerChoice() {
    const shapes = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);
    return shapes[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return 'Wrong Input!';
    }

    if (playerSelection == computerSelection) {
        return 'A Tie! Start over';
    } else {
        if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') {
                return 'You Won! Rock beats Scissors';
            } else {
                return 'You Lose! Paper beats Rock'
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                return 'You Won! Paper beats Rock'
            } else {
                return 'You Lose! Scissors beats Paper'
            }
        } else {
            if (computerSelection == 'paper') {
                return 'You Won! Scissors beats Paper';
            } else {
                return 'You Lose! Rock beats Scissors';
            }
        }
    }
}
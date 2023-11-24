function getComputerChoice() {
    const shapes = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);
    return shapes[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection != 'rock'
        && playerSelection != 'paper'
        && playerSelection != 'scissors') {
        return 'Wrong Input!';
    }

    if (playerSelection == computerSelection) {
        return 'A Tie! Try over';
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
                return 'You Lose! Scissors beat Paper'
            }
        } else {
            if (computerSelection == 'paper') {
                return 'You Won! Scissors beat Paper';
            } else {
                return 'You Lose! Rock beats Scissors';
            }
        }
    }
}

function playGame() {
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    let result;

    while (round <= 5) {
        const playerSelection = prompt(`Round: ${round}
        Enter a shape (rock, paper, scissors)`);
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        console.log(round);

        if (roundResult.includes('Tie') || roundResult == 'Wrong Input!') {
            round = round;
            alert(`Round: ${round}
            ${roundResult}`);
            console.log(roundResult);
        } else {
            if (roundResult.includes('Won')) {
                playerScore++;
            } else {
                computerScore++;
            }
            
            alert(`Round: ${round}
            ${roundResult}`);
            console.log(roundResult);
            console.log(`You: ${playerScore} | Computer: ${computerScore}`);

            round++;
        }
    }

    if (playerScore > computerScore) {
        result = 'You\'re a WINNER! You\'ve crushed the Machine';
    } else {
        result = 'GAME OVER! Better luck next time';
    }

    alert(`${result}
    You: ${playerScore} | Computer: ${computerScore}`);
    console.log(result);
}

playGame();
function getComputerChoice() {
    const shapes = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);
    return shapes[index];
}

function playRound(e) {
    const playerSelection = e.target.textContent.toLowerCase();
    const computerSelection = getComputerChoice();

    
    if (playerSelection != 'rock'
        && playerSelection != 'paper'
        && playerSelection != 'scissors') {
        console.log('Wrong Input!');
        return 'Wrong Input!';
    }

    if (playerSelection == computerSelection) {
        console.log('A Tie! Try over');
        return 'A Tie! Try over';
    } else {
        if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') {
                console.log('You Won! Rock beats Scissors');
                return 'You Won! Rock beats Scissors';
            } else {
                console.log('You Lose! Paper beats Rock');
                return 'You Lose! Paper beats Rock';
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                console.log('You Won! Paper beats Rock');
                return 'You Won! Paper beats Rock';
            } else {
                console.log('You Lose! Scissors beat Paper');
                return 'You Lose! Scissors beat Paper';
            }
        } else {
            if (computerSelection == 'paper') {
                console.log('You Won! Scissors beat Paper');
                return 'You Won! Scissors beat Paper';
            } else {
                console.log('You Lose! Rock beats Scissors');
                return 'You Lose! Rock beats Scissors';
            }
        }
    }
}

// function playGame() {
//     let round = 1;
//     let playerScore = 0;
//     let computerScore = 0;
//     let result;

//     while (round <= 5) {
//         const playerSelection = prompt(`Round: ${round}
//         Enter a shape (rock, paper, scissors)`);
//         const computerSelection = getComputerChoice();
//         const roundResult = playRound(playerSelection, computerSelection);

//         console.log(round);

//         if (roundResult.includes('Tie') || roundResult == 'Wrong Input!') {
//             round = round;
//             console.log(roundResult);
//         } else {
//             if (roundResult.includes('Won')) {
//                 playerScore++;
//             } else {
//                 computerScore++;
//             }
            
            
//             console.log(roundResult);
//             console.log(`You: ${playerScore} | Computer: ${computerScore}`);

//             round++;
//         }
//     }

//     if (playerScore > computerScore) {
//         result = 'You\'re a WINNER! You\'ve crushed the Machine';
//     } else {
//         result = 'GAME OVER! Better luck next time';
//     }

//     console.log(result);
// }

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', e => {
    playRound(e);
}));
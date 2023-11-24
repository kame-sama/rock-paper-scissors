function getComputerChoice() {
    const shapes = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);
    return shapes[index];
}

function playRound(playerSelection, computerSelection) {
    
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
                return 'You Lose! Paper beats Rock';
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                return 'You Won! Paper beats Rock';
            } else {
                return 'You Lose! Scissors beat Paper';
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

function playGame(e) {

    if (round <= 5) {
        const playerSelection = e.target.id || e.target.parentElement.id;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        roundText.textContent = round;
        console.log(round);

        if (roundResult.includes('Tie') || roundResult == 'Wrong Input!') {
            round = round;
            roundText.textContent = `Round: ${round}`;
            resultText.textContent = roundResult;
        } else {
            if (roundResult.includes('Won')) {
                playerScore++;
            } else {
                computerScore++;
            }
            
            roundText.textContent = `Round: ${round}`;
            resultText.textContent = roundResult;
            playerScoreText.textContent = `You: ${playerScore}`;
            computerScoreText.textContent = `Computer: ${computerScore}`;

            if (round == 5) {
                if (playerScore > computerScore) {
                    result = 'You\'re a total WINNER!';
                } else {
                    result = 'GAME OVER! Better luck next time';
                }
            
                resultText.textContent = result;

                const images = document.querySelectorAll('button > img');
                images.forEach(img => img.setAttribute('src', './images/reload.png'));
                console.log(result);
                buttons.forEach(button => 
                    button.addEventListener('click', playNewGame));
            }

            round++;
        }
    }
}

function playNewGame() {
    round = 1;
    playerScore = 0;
    computerScore = 0;

    roundText.textContent = 'Round: 0';
    playerScoreText.textContent = 'You: ??';
    computerScoreText.textContent = 'Computer: ??';
    resultText.textContent = '???';

    const images = document.querySelectorAll('button > img');

    images[0].setAttribute('src', './images/rock.png');
    images[1].setAttribute('src', './images/paper.png');
    images[2].setAttribute('src', './images/scissors.png');

    buttons.forEach(btn => btn.removeEventListener('click', playNewGame));
}

function changeColor() {
    resultText.style.color = colors[colorIndex]
    colorIndex++;
    if (colorIndex == colors.length) colorIndex = 0;
}

const colors = [
    'aqua',
    'goldenrod',
    'darkorchid',
    'royalblue',
    'chartreuse',
    'crimson'
];

let colorIndex = 0;

const buttons = document.querySelectorAll('button');
let round = 1;
let playerScore = 0;
let computerScore = 0;
let result;

const roundText = document.querySelector('.round');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const resultText = document.querySelector('.result');

buttons.forEach(button => button.addEventListener('click', e => {
    playGame(e);
}));

buttons.forEach(button => button.addEventListener('click', changeColor));
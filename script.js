// complete the logic of game inside this function

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;



    // function to 
    const playGame = () =>{
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn,  scissorBtn];
        const computerOption = ['rock', 'paper', 'scissors']

        // function to start playing game 
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                
                const movesLeft = document.querySelector('.movesLeft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[choiceNumber];

                // function to check who wins
                winner(this.innerText, computerChoice)

                // calling game over function after 10 moves

                if(moves === 10) {
                    gameOver(playerOptions, movesLeft)
                }
            })
        })
    }
    
    // function to decide winner

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Tie'
        }
        else if(player === 'rock') {
            if (computer =='paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won'
                playerScore++
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player === 'scissors'){
            if (computer === 'rock') {
                result.textContent = 'Computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper') {
            if(computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won'
                playerScore++

                playerScoreBoard.textContent = playerScore;
            }
        }

    }

    // function to run when game is over
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none'
        })

        chooseMove.innerText = 'Game Over !!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You won the game'
            result.style.color = '#308d46'
        }
        else if(playerScore < computerScore) {
            result.style.fomt = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.font = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    // calling the playGame funtion inside game
    playGame();

        
}

// calling the game function
game();
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const resetButton = document.getElementById("resetButton");

let playerScore = 0;
let computerScore = 0;
const winningScore = 2;  // Best of three (first to 2 wins)

function Game(playerChoice) {
    if (playerScore === winningScore || computerScore === winningScore) {
        return; // Stop the game if someone has already won
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }

        if (result === "You Win!") {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    if (playerScore != winningScore || computerScore !== winningScore) {
    resultDisplay.textContent = result;
    }
    scoreDisplay.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;

    if (playerScore === winningScore || computerScore === winningScore) {
        resultDisplay.textContent = playerScore === winningScore ? "  You won the match! 🎉" : " Computer won the match!😢 Try Again!";
        resetButton.style.display = "block"; // Show reset button
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";
    resultDisplay.textContent = "";
    scoreDisplay.textContent = "Score: Player 0 - 0 Computer";
    resetButton.style.display = "none";
}

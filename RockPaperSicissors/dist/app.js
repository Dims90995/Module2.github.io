var choices = ["rock", "paper", "scissors"];
var playerDisplay = document.getElementById("playerDisplay");
var computerDisplay = document.getElementById("computerDisplay");
var resultDisplay = document.getElementById("resultDisplay");
var playerScoreDisplay = document.getElementById("playerScoreDisplay");
var computerScoreDisplay = document.getElementById("computerScoreDisplay");
var playerScore = 0;
var computerScore = 0;
function playGame(playerChoice) {
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var result = "";
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }
    playerDisplay.textContent = "PLAYER: " + playerChoice;
    computerDisplay.textContent = "Computer: " + computerChoice;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore.toString();
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore.toString();
            break;
    }
}

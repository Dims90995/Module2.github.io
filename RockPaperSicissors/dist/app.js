var choices = ["rock", "paper", "scissors"];
var playerDisplay = document.getElementById("playerDisplay");
var computerDisplay = document.getElementById("computerDisplay");
var resultDisplay = document.getElementById("resultDisplay");
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
        case "You win!":
            resultDisplay.classList.add("greenText");
            break;
        case "You lose!":
            resultDisplay.classList.add("redText");
            break;
        default:
            resultDisplay.style.color = "black";
    }
}

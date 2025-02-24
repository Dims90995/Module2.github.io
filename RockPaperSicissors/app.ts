

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay") as HTMLDivElement;
const computerDisplay = document.getElementById("computerDisplay") as HTMLDivElement;
const resultDisplay = document.getElementById("resultDisplay") as HTMLDivElement;
const playerScoreDisplay = document.getElementById("playerScore") as HTMLDivElement;
const computerScoreDisplay = document.getElementById("computerScore") as HTMLDivElement;
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

const computerChoice = choices[Math.floor(Math.random() * 3)];
let result = "";

if(playerChoice === computerChoice){
    result = "It's a tie!";
}
else{
    switch(playerChoice){
        case "rock":
            result = (computerChoice === "scissors") ?  "You win!" :  "You lose!";
            break;
            case "paper":
                result = (computerChoice === "rock") ?  "You win!" :  "You lose!";
                break;
                case "scissors":
                    result = (computerChoice === "paper") ?  "You win!" :  "You lose!";
                    break;
    }
}

playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;
resultDisplay.textContent = result;

resultDisplay.classList.remove("greenText", "redText");

switch(result){
    case "You win!":
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore.toString();
        break;
        case "You lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore.toString();
            break;
            default:
                resultDisplay.style.color = "black";
}

}

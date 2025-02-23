const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText") as HTMLHeadingElement;
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    if (restartBtn) {
        restartBtn.addEventListener("click", restartGame);
    }
    if (statusText) {
        statusText.textContent = `${currentPlayer}'s turn`;
    }
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
 currentPlayer = (currentPlayer === "X") ? "O" : "X";
 statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
 let roundWon = false;
    for(let i = 0; i < winConditions.length; i++){
        const winCondition = winConditions[i];
        const a = options[winCondition[0]];
        const b = options[winCondition[1]];
        const c = options[winCondition[2]];
    
        if(a === "" || b === "" || c === ""){
            continue;
        }
    
        if(a === b && b === c){
            roundWon = true;
            break;
        }
    }
}
function restartGame(){

}
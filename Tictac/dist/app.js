var cells = document.querySelectorAll(".cell");
var statusText = document.querySelector("#statusText");
var restartBtn = document.querySelector("#restartBtn");
var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var options = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var running = false;
initializeGame();
function initializeGame() {
    cells.forEach(function (cell) { return cell.addEventListener("click", cellClicked); });
    if (restartBtn) {
        restartBtn.addEventListener("click", restartGame);
    }
    if (statusText) {
        statusText.textContent = currentPlayer + "'s turn";
    }
    running = true;
}
function cellClicked() {
    var cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    statusText.textContent = currentPlayer + "'s turn";
}
function checkWinner() {
    var roundWon = false;
    for (var i = 0; i < winConditions.length; i++) {
        var winCondition = winConditions[i];
        var cellA = options[winCondition[0]];
        var cellB = options[winCondition[1]];
        var cellC = options[winCondition[2]];
        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = currentPlayer + " wins!";
        running = false;
    }
    else if (options.includes("") == false) {
        statusText.textContent = "Draw!";
        running = false;
    }
    else {
        changePlayer();
    }
}
function restartGame() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = currentPlayer + "'s turn";
    cells.forEach(function (cell) { return cell.textContent = ""; });
    running = true;
}

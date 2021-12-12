











const statusDisplay = document.querySelector('.game-status');
let currentPlayer = 'X'
let gameActive = true

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's player ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();

// links gameboard individual ids into gameboard array
let gameBoard = []


// Places marker on clicked box if empty and updates the box's class to correct marker 
const cells = document.querySelectorAll(".box").forEach(box => box.addEventListener('click', turn));
function turn(clickedBoxEvent) {
    const clickedBox = clickedBoxEvent.target;
    function handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }
        handleCellPlayed(clickedCell, clickedCellIndex);
    }
    function handlePlayerChange() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.innerHTML = currentPlayerTurn();
    }
    if (!clickedBox.classList.contains("o") || !clickedBox.classList.contains("x")) {
        clickedBox.classList.add(currentPlayer.toLowerCase());
        clickedBox.textContent = currentPlayer
    };
    handlePlayerChange();

};

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

// removes marker class and clears board when restart btn is clicked 
const resetBtn = document.querySelector("#restartButton").addEventListener('click', function () {
    const getClassNames = document.getElementById('board');
    const allClasses = getClassNames.children;
    for (let i = 0; i < allClasses.length; i++) {
        allClasses[i].textContent = ""
        if (allClasses[i].classList.contains('x')) {
            allClasses[i].classList.remove("x")
        } else {
            if (allClasses[i].classList.contains('o')) {
                allClasses[i].classList.remove("o")
            }
        }
    }
    return { getClassNames, allClasses }

});



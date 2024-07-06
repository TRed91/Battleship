import './style.css';
const Player = require('./playerGenerator');

let playerOne = new Player();
let playerTwo = new Player();

let muteListeners = false;

const DOMbody = document.querySelector('body');

const gameInterface = document.createElement('div');

const newBoardBtn = document.createElement('button');
const startGameBtn = document.createElement('button');
newBoardBtn.innerHTML = 'New Random Board';
startGameBtn.innerHTML = 'Start Game';

const gameField = document.createElement('div');
gameField.className = 'game-field'

const p1Board = document.createElement('div');
p1Board.className = 'p1-board board'
const p2Board = document.createElement('div');
p2Board.className = 'p2-board board'

DOMbody.appendChild(gameInterface);
DOMbody.appendChild(gameField);
gameInterface.appendChild(newBoardBtn);
gameInterface.appendChild(startGameBtn);
gameField.appendChild(p1Board);
gameField.appendChild(p2Board);

const p1Fields = [];
const p2Fields = [];

startGameBtn.addEventListener('click', newGame);

newBoardBtn.addEventListener('click', () => {
    initializePlayers();
    drawBoards();
})

initializePlayers();
drawBoards();

function initializePlayers(){
    //initalize Player 1
    playerOne = new Player();
    playerOne.gameboard.placeShips(2);
    playerOne.gameboard.placeShips(2);
    playerOne.gameboard.placeShips(2);
    playerOne.gameboard.placeShips(2);
    playerOne.gameboard.placeShips(3);
    playerOne.gameboard.placeShips(3);
    playerOne.gameboard.placeShips(3);
    playerOne.gameboard.placeShips(4);
    playerOne.gameboard.placeShips(4);
    playerOne.gameboard.placeShips(5);

    //initalize Player 2
    playerTwo = new Player();
    playerTwo.gameboard.placeShips(2);
    playerTwo.gameboard.placeShips(2);
    playerTwo.gameboard.placeShips(2);
    playerTwo.gameboard.placeShips(2);
    playerTwo.gameboard.placeShips(3);
    playerTwo.gameboard.placeShips(3);
    playerTwo.gameboard.placeShips(3);
    playerTwo.gameboard.placeShips(4);
    playerTwo.gameboard.placeShips(4);
    playerTwo.gameboard.placeShips(5);
}

function getShipCoords(player){
    const shipList = player.gameboard.getShipList();
    const shipsCoords = shipList.reduce((acc, curr) => {
        return acc.concat(curr.coords)
    }, []);
    const newCoordList = Array.from(new Set(shipsCoords.map(JSON.stringify)), JSON.parse);
    const stringCoords = newCoordList.map(arr => {
        return `${arr[0]}${arr[1]}`;
    })
    return stringCoords;
}

function newGame() {
    startGameBtn.disabled = true;
    newBoardBtn.disabled = true;

    const boardListeners = document.querySelectorAll('.p2-field');
    boardListeners.forEach(field => {
        field.addEventListener('click', () => {
            if (!muteListeners){
                const classArr = field.getAttribute('class').split(" ");
                const coord = classArr[2].split("");
                const num = parseInt(coord[coord.length-2]);
                const alpha = parseInt(coord[coord.length-1]);
                const attack = playerTwo.gameboard.receiveAttack(num, alpha);
                field.setAttribute('hit', 'true');
                if (attack === 'Game Over') 
                    showGameover('Player One');
                else
                    playerTwoTurn();
            }
        })
    })
}

function playerTwoTurn() {
    let hitField = true
    let p2num = 0;
    let p2alpha = 0;
    let attackedField;

    // Repeate until field is selected that isn't already hit
    while (hitField){
        p2num = Math.floor(Math.random() * 10);
        p2alpha = Math.floor(Math.random() * 10);
        const coord = `c-${p2num}${p2alpha}`;
        attackedField = document.querySelector(".p1-field." + coord);
        if (attackedField.getAttribute('hit') === 'false')
            hitField = false;
    }

    attackedField.setAttribute('hit', 'true');
    const p2attack = playerOne.gameboard.receiveAttack(p2num, p2alpha);
    if (p2attack === 'Game Over')
        showGameover('Player Two')
    else
        return;
}

function drawBoards() {
    // Clear Board
    while (p1Board.firstChild) {
        p1Board.removeChild(p1Board.firstChild)
    }
    while (p2Board.firstChild) {
        p2Board.removeChild(p2Board.firstChild)
    }

    for (let i = 0; i < 10; i++) {
        const p1row = document.createElement('div')
        const p2row = document.createElement('div')
        for (let j = 0; j < 10; j++) {
            const compareCoords = `${i}${j}`

            // Draw Player One Field
            const newP1Field = document.createElement('div');
            
            if (getShipCoords(playerOne).includes(compareCoords))
                newP1Field.className = `ship p1-ship c-${i}${j} p1-field`;
            else
                newP1Field.className = `field p1-field c-${i}${j}`;

            newP1Field.setAttribute('hit', 'false');
            p1row.appendChild(newP1Field);
            p1Fields.push(newP1Field);

            // Draw Player Two Field
            const newP2Field = document.createElement('div');

            if (getShipCoords(playerTwo).includes(compareCoords))
                newP2Field.className = `ship p2-ship c-${i}${j} p2-field`;
            else
                newP2Field.className = `field p2-field c-${i}${j}`;

            newP2Field.setAttribute('hit', 'false');
            p2row.appendChild(newP2Field);
            p2Fields.push(newP2Field);
        }
        p1Board.appendChild(p1row);
        p2Board.appendChild(p2row);
    }
}

function showGameover(winner){
    // disable field inputs
    muteListeners = true;

    const winnerMessageBox = document.createElement('div');
    winnerMessageBox.className = 'winner-box';
    const winnerMessageText = document.createElement('h3');
    winnerMessageText.className = 'winner-text'
    const winnerMessageButton = document.createElement('button');
    winnerMessageButton.className = 'winner-button';

    winnerMessageText.innerHTML = `Game Over</br>${winner} won the game!`;
    winnerMessageButton.innerHTML = 'New Game';
    winnerMessageButton.className = 'winner-btn'

    winnerMessageBox.appendChild(winnerMessageText);
    winnerMessageBox.appendChild(winnerMessageButton);
    
    DOMbody.appendChild(winnerMessageBox);

    winnerMessageButton.addEventListener('click', () => {
        
        startGameBtn.disabled = false;
        newBoardBtn.disabled = false;

        initializePlayers();
        drawBoards();

        DOMbody.removeChild(DOMbody.lastChild);

        muteListeners = false;
    })
}
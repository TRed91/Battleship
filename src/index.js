import './style.css';
const Player = require('./playerGenerator');

const playerOne = new Player();
const playerTwo = new Player();

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

for (let i = 0; i < 10; i++) {
    const p1row = document.createElement('div')
    const p2row = document.createElement('div')
    for (let j = 0; j < 10; j++) {
        const newP1Field = document.createElement('div');
        newP1Field.className = `field p1-field ${i},${j}`;
        p1row.appendChild(newP1Field);
        p1Fields.push(newP1Field);

        const newP2Field = document.createElement('div');
        newP2Field.className = `field p2-field ${i},${j}`;
        p2row.appendChild(newP2Field);
        p2Fields.push(newP2Field);
    }
    p1Board.appendChild(p1row);
    p2Board.appendChild(p2row);
}



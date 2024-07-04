import './style.css';
const Player = require('./playerGenerator');


const DOMbody = document.querySelector('body');

const gameInterface = document.createElement('div');

const newBoardBtn = document.createElement('button');
const startGameBtn = document.createElement('button');
newBoardBtn.innerHTML = 'New Random Board';
startGameBtn.innerHTML = 'Start Game';

DOMbody.appendChild(gameInterface);
gameInterface.appendChild(newBoardBtn);
gameInterface.appendChild(startGameBtn);

const player1board = document.createElement('div');


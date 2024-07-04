const Gameboard = require('./gameboardGenerator')

class Player{
    constructor(){
        this.gameboard = new Gameboard();
    }
}


module.exports = Player;

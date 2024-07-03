const Ship = require('./shipGeneraor');

class Field {
    constructor(alpha, num){
        this.coords = [alpha ,num]
    }

    isField = true;

    gotHit = false;

    receivedHit(){
        this.gotHit = true;
    }
}

class Gameboard {
    constructor(){
        this.board = Gameboard.generateBoard();
    }

    static generateBoard() {
        let rows = []; //nums
        for (let i = 0; i < 10; i++){

            let cols = []; //alphas
            for (let j = 0; j < 10; j++){
                cols.push(new Field(i, j));
            }

            rows.push(cols);

        }
        return rows;
    }

    placeShips(val){
        const ship2 = new Ship(2, [[0,0], [0, 1]]);

        this.board[0][0] = ship2;
        this.board[0][1] = ship2;

        let placedShip = false;
        while (!placedShip){
            // generate Ship
            const ship = new Ship(val, null);
            
            // determine angle of ship
            let angle = "";
            if (Math.floor(Math.random() * 2) === 0){
                angle = 'vertical'
            } else {
                angle = 'horizontal'
            }
            // Get starting Coords
            let numCoord = Math.floor(Math.random() * 10);
            let alphaCoord = Math.floor(Math.random() * 10);
            ship.coords = [[numCoord, alphaCoord]];
            for (let i = 1; i < ship.length; i++){
                if (angle === "horizontal")
                    ship.coords.push([numCoord + i, alphaCoord]);
                else 
                    ship.coords.push([numCoord, alphaCoord + i])
            }

            // check for collission with border or other ship
            let collission = false;
            ship.coords.forEach(coord => {
                if (coord[0] <= 9 && coord[1] <= 9) {
                    if(!this.board[coord[0]][coord[1]].hasOwnProperty('isField'))
                        collission = true;
                } else {
                    collission =  true;
                }
            });

            // place ship
            if (!collission){
                if (angle === 'horizontal') {
                    ship.coords.forEach(coord => {
                        this.board[coord[0]][coord[1]] = ship;
                    })
                    placedShip = true;
                }
                if (angle === 'vertical') {
                    ship.coords.forEach(coord => {
                        this.board[coord[0]][coord[1]] = ship;
                    })
                    placedShip = true;
                } 
                
            }
        }
    }

    receiveAttack(num, alpha){
        const hitField = this.board[num][alpha];
        if (hitField.hasOwnProperty('isField'))
            hitField.receivedHit();
        else
            hitField.hit();
    }
}

module.exports = Gameboard;
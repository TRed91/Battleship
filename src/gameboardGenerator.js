const Ship = require('./shipGeneraor');

class Field
{
    constructor(alpha, num){
        this.coords = [alpha ,num]
    }

    isField = true;

    gotHit = false;

    receivedHit(){
        this.gotHit = true;
    }
}

class Gameboard{
    constructor(){
        this.board = Gameboard.generateBoard();
    }

    static generateBoard() {
        let rows = []; //nums
        for (let i = 0; i < 10; i++){

            let cols = []; //alphas
            for (let j = 0; j < 10; j++){
                let alpha = "";
                switch (j){
                    case 0:
                        alpha = "A";
                        break;
                    case 1:
                        alpha = "B";
                        break;
                    case 2:
                        alpha = "C";
                        break;
                    case 3:
                        alpha = "D";
                        break;
                    case 4:
                        alpha = "E";
                        break;
                    case 5:
                        alpha = "F";
                        break;
                    case 6:
                        alpha = "G";
                        break;
                    case 7:
                        alpha = "H";
                        break;
                    case 8:
                        alpha = "I";
                        break;
                    case 9:
                        alpha = "J";
                        break;
                }

                cols.push(new Field(i + 1, alpha));
            }

            rows.push(cols);

        }
        return rows;
    }

    placeShips(){
        const ship2 = new Ship(2, [[1,"A"], [1, "B"]]);
        this.board[0][0] = ship2;
        this.board[0][1] = ship2;
    }

    receiveAttack(num, alpha){
        switch (alpha){
            case "A": alpha = 0; break;
            case "B": alpha = 1; break;
            case "C": alpha = 2; break;
            case "D": alpha = 3; break;
            case "E": alpha = 4; break;
            case "F": alpha = 5; break;
            case "G": alpha = 6; break;
            case "H": alpha = 7; break;
            case "I": alpha = 8; break;
            case "J": alpha = 9; break;
        }
        
        const hitField = this.board[num - 1][alpha];
        if (hitField.hasOwnProperty('isField'))
            hitField.receivedHit();
        else
            hitField.hit();
    }
}

module.exports = Gameboard;
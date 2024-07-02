const Ship = require('./shipGeneraor');

class Field
{
    constructor(alpha, num){
        this.name = [alpha ,num]
    }

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

    #getField(num, alpha){
        for (let field of this.board[num - 1]){
            if (field.name[1] === alpha) return field;
        }
    }

    receiveAttack(num, alpha){
        const hitField = this.#getField(num, alpha);
        hitField.receivedHit();
    }
}

module.exports = Gameboard;
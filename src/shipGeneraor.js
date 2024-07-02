class Ship{
    constructor(length){
        this.length = length;
    }
    hit = 0;
    sunk = false;
}

const ship = new Ship(3);

module.exports = Ship;
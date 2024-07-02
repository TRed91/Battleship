class Ship{
    constructor(length, coords){
        this.length = length;
        this.coords = coords;
        }

    hits = 0;
    sunk = false;
    
    hit(){
        this.hits += 1;
    }
    isSunk(){
        if (this.hits === this.length) this.sunk = true;
    }
}

module.exports = Ship;
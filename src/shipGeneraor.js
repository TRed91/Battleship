class Ship{
    constructor(length){
        this.length = length;
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
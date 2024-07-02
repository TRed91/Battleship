const Ship = require('./shipGeneraor');

test('check ship', () => {
    const ship = new Ship(2, [[1,"A"], [1, "B"]]);
    expect(ship).toEqual({
        length: 2,
        coords: [[1,"A"], [1, "B"]],
        hits: 0,
        sunk: false, 
    })
});

test('hit ship without sinking', () => {
    const ship = new Ship(2, [[1,"A"], [1, "B"]]);
    ship.hit();
    ship.isSunk();
    expect(ship.hits).toBe(1);
    expect(ship.sunk).toBe(false);
})

test('hit and sink ship', () => {
    const ship = new Ship(2, [[1,"A"], [1, "B"]]);
    ship.hit()
    ship.hit()
    expect(ship.hits).toBe(2);
    ship.isSunk()
    expect(ship.sunk).toBe(true);
});
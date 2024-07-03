const Ship = require('./shipGeneraor');

test('check ship', () => {
    const ship = new Ship(2, [[0, 0], [0, 1]]);
    expect(ship).toEqual({
        length: 2,
        coords: [[0, 0], [0, 1]],
        hits: 0,
        sunk: false, 
    })
});

test('hit ship without sinking', () => {
    const ship = new Ship(2, [[0, 0], [0, 1]]);
    ship.hit();
    ship.isSunk();
    expect(ship.hits).toBe(1);
    expect(ship.sunk).toBe(false);
})

test('hit and sink ship', () => {
    const ship = new Ship(2, [[0, 0], [0, 1]]);
    ship.hit()
    ship.hit()
    expect(ship.hits).toBe(2);
    ship.isSunk()
    expect(ship.sunk).toBe(true);
});
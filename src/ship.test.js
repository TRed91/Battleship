const Ship = require('./shipGeneraor');

test('check ship', () => {
    expect(new Ship(3)).toEqual({
        length: 3,
        hits: 0,
        sunk: false,
    })
});

test('hit ship without sinking', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.isSunk();
    expect(ship.hits).toBe(1);
    expect(ship.sunk).toBe(false);
})

test('hit and sink ship', () => {
    const ship = new Ship(2);
    ship.hit()
    ship.hit()
    expect(ship.hits).toBe(2);
    ship.isSunk()
    expect(ship.sunk).toBe(true);
});
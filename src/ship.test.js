const Ship = require('./shipGeneraor');

test('check ship', () => {
    expect(new Ship(3)).toEqual({
        length: 3,
        hit: 0,
        sunk: false,
    })
});
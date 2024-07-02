const Gameboard = require('./gameboardGenerator');

test('check gameboard field 1A', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[0][0]).toEqual({
        coords: [1, "A"],
        gotHit: false,
        isField: true,
    })
});

test('check gameboard field 10J', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[9][9]).toEqual({
        coords: [10, "J"],
        gotHit: false,
        isField: true,
    })
});

test('receive hit at 3D', () => {
    const gameboard = new Gameboard();
    gameboard.board[2][3].receivedHit();
    expect(gameboard.board[2][3].gotHit).toBe(true)
});

test('attack field 4D', () => {
    const gameboard = new Gameboard();
    gameboard.receiveAttack(4, "D")
    expect(gameboard.board[3][3]).toEqual({
        coords: [4, "D"],
        gotHit: true,
        isField: true,
    })
});

test('check if ship is at 1A',() => {
    const gameboard = new Gameboard();
    gameboard.placeShips();
    expect(gameboard.board[0][0]).toEqual({
        coords: [[1,"A"], [1, "B"]],
        length: 2,
        hits: 0,
        sunk: false,
    })
    expect(gameboard.board[0][1]).toEqual({
        coords: [[1,"A"], [1, "B"]],
        length: 2,
        hits: 0,
        sunk: false,
    })
});

test('hit ship 1A, then check value on both positions', () => {
    const gameboard = new Gameboard();
    gameboard.placeShips();
    gameboard.board[0][0].hit();
    expect(gameboard.board[0][0].hits).toBe(1)
    expect(gameboard.board[0][1].hits).toBe(1)
});

test('receive attack method on 1A', () => {
    const gameboard = new Gameboard();
    gameboard.placeShips();
    gameboard.receiveAttack(1, "A");
    expect(gameboard.board[0][0].hits).toBe(1)
});
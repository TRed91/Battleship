const Gameboard = require('./gameboardGenerator');

test('check gameboard field 1A', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[0][0]).toEqual({
        name: [1, "A"],
        gotHit: false,
    })
});

test('check gameboard field 10J', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[9][9]).toEqual({
        name: [10, "J"],
        gotHit: false,
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
        name: [4, "D"],
        gotHit: true,
    })
});
const Gameboard = require('./gameboardGenerator');

test('check gameboard field 1A', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[0][0]).toEqual({
        coords: [0, 0],
        gotHit: false,
        isField: true,
    })
});

test('check gameboard field 10J', () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[9][9]).toEqual({
        coords: [9, 9],
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
    gameboard.receiveAttack(3, 3)
    expect(gameboard.board[3][3]).toEqual({
        coords: [3, 3],
        gotHit: true,
        isField: true,
    })
});

test('check if ship is at 1A',() => {
    const gameboard = new Gameboard();
    gameboard.placeShips();
    expect(gameboard.board[0][0]).toEqual({
        coords: [[0, 0], [0, 1]],
        length: 2,
        hits: 0,
        sunk: false,
    })
    expect(gameboard.board[0][1]).toEqual({
        coords: [[0, 0], [0, 1]],
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
    gameboard.receiveAttack(0, 0);
    expect(gameboard.board[0][0].hits).toBe(1)
});

test('game over when all ships are sunk', () => {
    const gameboard = new Gameboard();
    gameboard.placeShips(3);
    gameboard.placeShips(2);
    gameboard.placeShips(4);
    gameboard.placeShips(5);
    gameboard.board.forEach(row => {
        row.forEach(field => {
            if(!field.hasOwnProperty('isField'))
                field.sunk = true;
        })
    })
    expect(gameboard.receiveAttack(1, 3)).toBe("Game Over")
})
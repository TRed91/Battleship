const Player = require('./playerGenerator');

test('get Player board', () => {
    const playerOne = new Player();
    expect(playerOne.gameboard.board[0][0]).toEqual({
        coords: [0, 0],
        gotHit: false,
        isField: true,
    })
})
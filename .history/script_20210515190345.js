

const gameboard = (() => {
    
    var grids = [0, 0, 0,
                 0, 0, 0,
                 0, 0, 0];

    const renderBoard = () => {

        for (let i = 0; i < 9; i++) {
            console.log(i);
        }

    }


    return [renderBoard];


})();

// console.log(1);

// for (let i = 0; i < 9; i++) {
//     console.log(i);
// }
gameboard.renderBoard();

const player = (sign) => {

}

const player1 = player('O');
const player2 = player('X');
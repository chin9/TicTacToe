

const gameboard = (() => {
    
    // 0: blank; 'O': circle; 'X': cross
    var grids = [0, 0, 0,
                 0, 0, 0,
                 0, 0, 0];

    function renderBoard() {

        for (let i = 0; i < 9; i++) {
            const grid = document.getElementById(`${i}`);
            if (grids[i] == 'O') {
                grid.textContent = 'O'; 
            } else if (grids[i] == 'X') {
                grid.textContent = 'X'; 
            } else {
                grid.textContent = '';
            }

        }

    };


    return {renderBoard};


})();

const player = (sign) => {
    var marking = sign;

    return {marking};
}

const player1 = player('O');
const player2 = player('X');


const grids = [...document.getElementsByClassName('grid')];

grids.forEach(grid => {
    const sqr = document.getElementById(`${grid.id}`);
    sqr.addEventListener('click', addMarking());
})

// var keepPlaying = true;

// while (keepPlaying) {
//     // gameboard.renderBoard();
// }





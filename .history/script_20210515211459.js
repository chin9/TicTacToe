

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

    function add(id, sign) {
        grids[id] = sign;
    }


    return {renderBoard, add};


})();

const player = (sign) => {
    var marking = sign;

    return {marking};
}

const player1 = player('O');
const player2 = player('X');

var activePlayer = player1;

function addMarking(id) {
    const sign = activePlayer.marking;
    console.log(id);
    gameboard.add(id, sign);
    gameboard.renderBoard;
}

const grids = [...document.getElementsByClassName('grid')];

grids.forEach(grid => {
    const sqr = document.getElementById(`${grid.id}`);
    sqr.addEventListener('click', addMarking(grid.id));
})

// var keepPlaying = true;

// while (keepPlaying) {
//     // gameboard.renderBoard();
// }




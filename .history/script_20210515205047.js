

const gameboard = (() => {
    
    var grids = [0, 0, 0,
                 0, 'X', 0,
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


gameboard.renderBoard();

const player = (sign) => {

}

const player1 = player('O');
const player2 = player('X');
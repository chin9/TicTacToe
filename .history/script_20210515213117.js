
//GAMEBOARD
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

    function get(id) {
        return grids[id];
    }


    return {renderBoard, add};


})();



//PLAYER
const player = (sign) => {
    var marking = sign;

    return {marking};
}

const player1 = player('O');
const player2 = player('X');

var activePlayer = player1;

//DISPLAY CONTROLLER
const displayController = (() => {
    
    const display = document.getElementById('status');
    

})();

//ADDS MARKING TO BOARD
function addMarking(event) {
    const sign = activePlayer.marking;
    const targetElement = event.target || event.srcElement;

    if (gameboard.get(targetElement.id) == 0) {
        gameboard.add(targetElement.id, sign);
        gameboard.renderBoard();  
    }


}

const grids = [...document.getElementsByClassName('grid')];

grids.forEach(grid => {
    const sqr = document.getElementById(`${grid.id}`);
    sqr.addEventListener('click', function(event) {
        addMarking(event);
    }
)
})

// var keepPlaying = true;

// while (keepPlaying) {
//     // gameboard.renderBoard();
// }





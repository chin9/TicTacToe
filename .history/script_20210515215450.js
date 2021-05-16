
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

    function check() {
        
        if (((grids[0] == 'O')&&(grids[1] == 'O')&&(grids[2] == 'O')) ||
            ((grids[3] == 'O')&&(grids[4] == 'O')&&(grids[5] == 'O')) ||
            ((grids[6] == 'O')&&(grids[7] == 'O')&&(grids[8] == 'O')) ||
            ((grids[0] == 'O')&&(grids[3] == 'O')&&(grids[6] == 'O')) ||
            ((grids[1] == 'O')&&(grids[4] == 'O')&&(grids[7] == 'O')) ||
            ((grids[2] == 'O')&&(grids[5] == 'O')&&(grids[8] == 'O')) ||
            ((grids[0] == 'O')&&(grids[4] == 'O')&&(grids[8] == 'O')) ||
            ((grids[2] == 'O')&&(grids[4] == 'O')&&(grids[6] == 'O'))
        ) {
            return 1; //player 1 wins
        } else if (
            ((grids[0] == 'X')&&(grids[1] == 'X')&&(grids[2] == 'X')) ||
            ((grids[3] == 'X')&&(grids[4] == 'X')&&(grids[5] == 'X')) ||
            ((grids[6] == 'X')&&(grids[7] == 'X')&&(grids[8] == 'X')) ||
            ((grids[0] == 'X')&&(grids[3] == 'X')&&(grids[6] == 'X')) ||
            ((grids[1] == 'X')&&(grids[4] == 'X')&&(grids[7] == 'X')) ||
            ((grids[2] == 'X')&&(grids[5] == 'X')&&(grids[8] == 'X')) ||
            ((grids[0] == 'X')&&(grids[4] == 'X')&&(grids[8] == 'X')) ||
            ((grids[2] == 'X')&&(grids[4] == 'X')&&(grids[6] == 'X'))
        ) {
            return 2; // player 2 wins
        } else if (
            (grids[0] == 'O' || grids[0] == 'X') &&
            (grids[1] == 'O' || grids[1] == 'X') &&
            (grids[2] == 'O' || grids[2] == 'X') &&
            (grids[3] == 'O' || grids[3] == 'X') &&
            (grids[4] == 'O' || grids[4] == 'X') &&
            (grids[5] == 'O' || grids[5] == 'X') &&
            (grids[6] == 'O' || grids[6] == 'X') &&
            (grids[7] == 'O' || grids[7] == 'X') &&
            (grids[8] == 'O' || grids[8] == 'X')
        ) {
            return 3; // tie
        } else {
            return 0; //continue
        }

        
    }


    return {renderBoard, add, get, check};


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

    function changeMessage() {
        if (activePlayer == player1) {
        display.textContent = 'Player 1\'s turn';
        } else {
        display.textContent = 'Player 2\'s turn';
        }  
    }

    return {changeMessage};

})();

//ADDS MARKING TO BOARD
function addMarking(event) {
    const sign = activePlayer.marking;
    const targetElement = event.target || event.srcElement;

    if (gameboard.get(targetElement.id) == 0) {
        gameboard.add(targetElement.id, sign);
        gameboard.renderBoard();

        //CHECK WINNER
        const check = gameboard.check();

        if(check == 1) {
            console.log('Player 1 wins');
        } else if (check == 2) {
            console.log('Player 2 wins');
        } else if (check == 0) {
            console.log('Tie');
        } else {
            //CHANGE ACTIVE PLAYER
            if (activePlayer == player1) {
                activePlayer = player2;
            } else {
                activePlayer = player1;
            }

            displayController.changeMessage();           
        }

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
    
// }





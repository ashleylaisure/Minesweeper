
// Creating board -----------------------------------------------------------
const gameGrid = document.querySelector('#grid');


let rows = 10;
let columns = 10;

let bombs = 10;

const gridArray = [];



for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        // create a div element for each square
        const gridSquare = document.createElement('div');

        // set an class for all divs
        gridSquare.classList.add('square')
        // set the div elements's id to its location in the grid
        gridSquare.id = `${i}${j}`

        // add each square to grid
        gameGrid.appendChild(gridSquare);
        // gridSquare.textContent = gridSquare.id

        // put it into an array????
        // make an array of all the squares
        gridArray.push(`${i}${j}`);

        
    }
};

console.log(gameGrid);

console.log(gridArray);


// ---------------------------------------------------------------------------
// Right click on squares to mark with flags

// let bombs = 10;

const flagCountdown = document.querySelector('.bomb-counter')
console.dir(flagCountdown);

flagCountdown.textContent = bombs;

// rightClick call back function
const rightClick = (event) => {
    // prevent the default menu from appearing
    event.preventDefault();
    if (event.target.textContent === '') {
        // change textContent to flag
        event.target.textContent = '🚩'
        // decrease flag counter
        
        // when there are 0 flags left
        if (bombs >= 0) {
            bombs = bombs - 1;
            flagCountdown.textContent = bombs;
        } if (bombs < 0 && event.target.textContent === '🚩') {
            event.target.textContent = ''
            bombs++;
            flagCountdown.textContent = bombs;
        } else if (bombs < 0 ) {
            // gameGrid.removeEventListener("contextmenu", rightClick);
            return
        }
    } else if (event.target.textContent === '🚩'){
        event.target.textContent = ''
        bombs++;
        flagCountdown.textContent = bombs;
    }

};

// add right click event listener for the gameGrid with callback function
gameGrid.addEventListener("contextmenu", rightClick);

// Randomly select where Bombs are located ----------------------------------------------------
const bombLocations = [];

for (let i = 0; i < bombs; i++) {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);

// console.log(`row: ${row}`);
// console.log(`column: ${column}`);

    bombLocations.push(`${row}${column}`);
};

console.log(bombLocations);
    

// need to give bombLocations an additional class of bomblocation

// ---------------------------------------------------------------------------
// Right click on squares

// rightClick call back function
const leftClick = (event) => {
    console.log(event.target.id);

    if (bombLocations.includes(event.target.id)) {
        
        // event.target.classList.add('bombClicked');
        // event.target.textContent = '💣';

        console.log('theres a bomb here');

        findAllBombs();

        // stopTimer();

    } else {
        console.log('no bomb here');

        let emptySquare 
    }

};

// add right click event listener for the gameGrid with callback function
gameGrid.addEventListener("click", leftClick);

// findAllBombs -------------------------------------------

function findAllBombs() {
    
    bombLocations.forEach(id => {
        const bombSquares = document.getElementById(id);

        bombSquares.classList.add('bombClicked');
        bombSquares.textContent  = '💣';
    });
}

// .numClicked
// .emptySquare


// reset button -----------------------------------------

const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', function() {
    location.reload();
});



// timer ---------------------------------------------------

const firstClick = document.querySelector('#grid')

function startTimer() {
    console.log('startTimer');


    const timerSec = setInterval(() => {
        const timer = document.querySelector('.timer');

        timer.textContent++;

    }, 1000);

    firstClick.removeEventListener('click', startTimer);
};

// function stopTimer() {
//     clearInterval(setInterval);
// };

firstClick.addEventListener('click', startTimer);

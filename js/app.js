// Creating board ------------------------------------
const gameGrid = document.querySelector('#grid');
console.dir(gameGrid);

let rows = 8;
let columns = 9;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        // create a div element for each square
        const gridSquare = document.createElement('div');

        // set an class for all divs
        gridSquare.classList.add('square')
        // set the div elements's id to its location in the grid
        gridSquare.id = `${i} - ${j}`

        // add each square to grid
        gameGrid.appendChild(gridSquare);

        // gridSquare.textContent = gridSquare.id
    }
}
// Bombs & Flags

let bombs = 10;

const flagCountdown = document.querySelector('.bomb-counter')
console.dir(flagCountdown)

flagCountdown.textContent = bombs;

// rightClick call back function
const rightClick = (event) => {
    // prevent the default menu from appearing
    event.preventDefault();
    if (event.target.textContent === '') {
        // change textContent to flag
        event.target.textContent = '🚩'
        // decrease flag counter
        bombs = bombs - 1;
        flagCountdown.textContent = bombs;
    } else if (event.target.textContent === '🚩'){
        event.target.textContent = ''
        bombs++;
        flagCountdown.textContent = bombs;
    }

    
};


// add right click event listener for the gameGrid with callback function
gameGrid.addEventListener("contextmenu", rightClick);

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
        gridSquare.classList.add('squareUnClicked')
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

// Locate the bombs ----------------------------------------------------
const bombLocations = [];

for (let i = 0; i < bombs; i++) {
    let row = Math.floor(Math.random() * 11);
    let column = Math.floor(Math.random() * 11);

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
    // I need to check if the event.target.id = bombLocations vlaue
        // then game over


};

// add right click event listener for the gameGrid with callback function
gameGrid.addEventListener("click", leftClick);


// .bombClicked
// .numClicked
// .emptySquare
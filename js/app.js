
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

    if (bombLocations.includes(`${row}${column}`)) {
        
        bombs++;

        continue;
    } 
    
    bombLocations.push(`${row}${column}`);

};

console.log(bombLocations);

// ---------------------------------------------------------------------------
// Left click on squares 

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

        let rowNum = parseInt(event.target.id[0]);

        let columnNum = parseInt(event.target.id[1]);

        // console.log(event.target.id[0]);
        console.log(rowNum);
        console.log(typeof rowNum)
        // console.log(event.target.id[1]);
        console.log(columnNum);
        console.log(typeof columnNum)

        whatsAroundMe(rowNum, columnNum);

        const thisIsMe = document.getElementById(event.target.id);
        console.dir(thisIsMe);
        
        let num = findmyNum();

        if (num > 0) {
            thisIsMe.classList.add('numClicked');
            thisIsMe.textContent = `${num}`

        } else if (num === 0 ) {
            thisIsMe.classList.add('emptySquare');
        } 
        

};

// add right click event listener for the gameGrid with callback function
gameGrid.addEventListener("click", leftClick);

// findAllBombs -------------------------------------------

function findAllBombs() {
    
    bombLocations.forEach((id) => {
        const bombSquares = document.getElementById(id);

        bombSquares.classList.add('bombClicked');
        bombSquares.textContent  = '💣';
    });
}

// .numClicked
// .emptySquare

// find what's around the square that has been clicked -------


function whatsAroundMe(row, column) {
    const aroundMe = [];

    // the square is on the top row 
    if ( row === 0 || row === 9 || column === 0 || column === 9 ) {
        return;

    } else {
        
    

        // TOP
        console.log(row-1, column-1)
        console.log(row-1, column)
        console.log(row-1, column+1)
    
        // bottom
        console.log(row+1, column-1)
        console.log(row+1, column)
        console.log(row+1, column+1)
    
        // to the left
        console.log(row, column-1)
    
        // to the right
        console.log(row, column+1)
    
    
        let topLeft = `${row-1}${column-1}`
        let topCenter = `${row-1}${column}`
        let topRight = `${row-1}${column+1}`
    
        let bottomLeft = `${row+1}${column-1}`
        let bottomCenter = `${row+1}${column}`
        let bottomRight = `${row+1}${column+1}`
    
        let leftCenter = `${row}${column-1}`
        let rightCenter = `${row}${column+1}`
    
        aroundMe.push(topLeft)
        aroundMe.push(topCenter)
        aroundMe.push(topRight)
        aroundMe.push(bottomLeft)
        aroundMe.push(bottomCenter)
        aroundMe.push(bottomRight)
        aroundMe.push(leftCenter)
        aroundMe.push(rightCenter)
    
        console.log(aroundMe)
    }
    // check whats aroundMe for bombLocations

    findmyNum(aroundMe);
    
};

function findmyNum(array){
    let myNumber = 0;

    for (i of array) {
        if (bombLocations.includes(i)) {
            myNumber++;
        }
    }

    console.log(myNumber);

    return myNumber;

};


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
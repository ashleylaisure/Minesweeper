// Creating the board -----------------------------------------------------------
const gameGrid = document.querySelector('#grid');

let rows = 10;
let columns = 10;

const gridArray = [];
const didIWin = [];

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        // create a div element for each square
        const gridSquare = document.createElement('div');

        // set an class for all divs equal to square
        gridSquare.classList.add('square')
        // set the div elements's id to its location in the grid
        gridSquare.id = `${i}${j}`

        // add each square to grid
        gameGrid.appendChild(gridSquare);

        // make an array of all the squares
        gridArray.push(`${i}${j}`);
    }
};



// Randomly select where the Bombs are located ----------------------------------------------------------
const bombLocations = [];

let numberbombs = 15

for (let i = 0; i < numberbombs; i++) {
    // randomly select a whole number between 0 and 9 for each row and column
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);

    // If the bombLocation has been already used - cylce back through the for loop
    if (bombLocations.includes(`${row}${column}`)) {
        numberbombs++;
        continue;
    } 

    // add all bombLocations to the bomb array
    bombLocations.push(`${row}${column}`);

};



// Right Click function and Flag behavior------------------------------------------------------
let bombs = 15;

const myFlags = [];

const flagCountdown = document.querySelector('.bomb-counter')
flagCountdown.textContent = bombs;

// rightClick call back function
const rightClick = (event) => {

    // prevent the default menu from appearing
    event.preventDefault();

        // the user will not be able to put a flag down on a numbered square, empty square, or on the border of the grid
        if (event.target.classList.contains('numClicked') || event.target.classList.contains('emptySquare') || event.target.id === 'grid')  {
            return;
        } 
        
        // If there is already a flag and the user right clicks on it, the flag will be removed
        else if (event.target.classList.contains('flagSquare') ) {
            event.target.classList.remove('flagSquare')
            event.target.textContent = ""
        
            myFlags.splice(myFlags.indexOf(event.target.id), 1);
            
            updateCountdown();

        } 
        // Putting the flag on a square (can not put more flags down than there are bombs)
        else if (myFlags.length < 15) {

            event.target.classList.add('flagSquare')
            event.target.textContent = "🚩"

            myFlags.push(event.target.id)
            
            updateCountdown();

            // If the last square on the board is a bomb and I put a flag down - I win
            if ( didIWin.length + myFlags.length === 100) {

                gameGrid.removeEventListener('click', leftClick);
                gameGrid.removeEventListener("contextmenu", rightClick);

                stopTimer();
    
                const winner = document.querySelector('h1')
                winner.textContent = "YOU'RE A MINESSEEPER! 🥳"
            } else {
                return;
            }
        } 

        else {
            return;
        }
};

// The bomb counter will respond to the amount of flags used
function updateCountdown() {
    const flags = document.querySelectorAll('.flagSquare');

    const flagsUsed = flags.length;

    flagCountdown.textContent = bombs - flagsUsed
};


// add right click event listener for the gameGrid with callback function
gameGrid.addEventListener("contextmenu", rightClick);



// Left Click Function--------------------------------------------------------------------------- 

const leftClick = (event) => {
    

    // If there is a flag on the square - user is unable to click on it
    if (event.target.classList.contains('flagSquare') )  {
        return;
    } 
    
    // If the square is a bomb - User loses 
    else if (bombLocations.includes(event.target.id)) {
        
        // when a bomb has been selected all bombs will revel themselves 
        findAllBombs();

        gameGrid.removeEventListener('click', leftClick);
        gameGrid.removeEventListener("contextmenu", rightClick);
        
        stopTimer();

        const loser = document.querySelector('h1')
        loser.textContent = "BETTER LUCK NEXT TIME 😵‍💫";



    } else {

        // turn the location into a number that can be used in whatsAroundMe function 
        let rowNum = parseInt(event.target.id[0]);
        let columnNum = parseInt(event.target.id[1]);

        // Run a function that checks the surrounding 8 squares to see if there is a bomb
        whatsAroundMe(rowNum, columnNum);

        // When the last square is selected (and its not a flag or a bomb) - user wins
        if ( didIWin.length + myFlags.length === 100) {
            gameGrid.removeEventListener('click', leftClick);
            gameGrid.removeEventListener("contextmenu", rightClick);
        
            stopTimer();

            const winner = document.querySelector('h1')
            winner.textContent = "YOU'RE A MINESSEEPER! 🥳"
            
        } else {
            return;
        }
    
    } 
        

};

// add right click event listener for the gameGrid with callback function
gameGrid.addEventListener("click", leftClick);

// findAllBombs when user selects a bomb

function findAllBombs() {
    
    bombLocations.forEach((id) => {
        const bombSquares = document.getElementById(id);

        bombSquares.classList.add('bombClicked');
        bombSquares.textContent  = '💣';
    });
}


// whatsAroundMe Recursion loop -----------------------------------------------------

// First Identify if there are bombs in the 8 squares surrounding me
function whatsAroundMe(row, column) {
    const aroundMe = [];

    // Identify my position on the board
    const mySquare = document.getElementById(`${row}${column}`);

    // Am I on a border?? (cannot manipulate locations with numbers off the board)
    if ( row < 0 || row >= 10 || column < 0 || column >= 10  ){
        return;
    //  if the surrounding square has already been revealed - stop
    } else if ( mySquare.classList.contains('numClicked') || mySquare.classList.contains('emptySquare') ) {
        return;
    } else {

    let topLeft = `${row-1}${column-1}`
    let topCenter = `${row-1}${column}`
    let topRight = `${row-1}${column+1}`

    let bottomLeft = `${row+1}${column-1}`
    let bottomCenter = `${row+1}${column}`
    let bottomRight = `${row+1}${column+1}`

    let leftCenter = `${row}${column-1}`
    let rightCenter = `${row}${column+1}`

    // make an array of the 8 squares around me
    aroundMe.push(topLeft)
    aroundMe.push(topCenter)
    aroundMe.push(topRight)
    aroundMe.push(bottomLeft)
    aroundMe.push(bottomCenter)
    aroundMe.push(bottomRight)
    aroundMe.push(leftCenter)
    aroundMe.push(rightCenter)
    
    // WHATS my NUMBER??
        let myNumber = 0;
        // check to see if any numbers in my aroundME array are also in the bombLocations array
        // if so add to myNumber
        for (i of aroundMe) {
            if(bombLocations.includes(i)) {
                myNumber++;
            }
        }

    // Assign me
        // When the number is greater than 0 - the number should appear
        if (myNumber >= 1) {
            mySquare.classList.add('numClicked')
            mySquare.textContent = myNumber

            didIWin.push(`${row}${column}`)

            return; 
        // If the square's number is 0 - call the function again until all surround squares have a number
        } if (myNumber === 0) {
            mySquare.classList.add('emptySquare')

            didIWin.push(`${row}${column}`)

            // run the function for all 8 squares surrounding me 
            // whatsAroundMe(row, column)

            // TOP
            whatsAroundMe(row-1, column-1);
            whatsAroundMe(row-1, column);
            whatsAroundMe(row-1, column+1);

            // bottom
            whatsAroundMe(row+1, column-1);
            whatsAroundMe(row+1, column);
            whatsAroundMe(row+1, column+1);

            // to the left
            whatsAroundMe(row, column-1);

            // to the right
            whatsAroundMe(row, column+1);

    }
    }
};



// reset button -----------------------------------------------------------------------

const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', function() {
    location.reload();
});



// timer -----------------------------------------------------------------------------
const firstClick = document.querySelector('#grid')

// start the timer after the first click on the grid and then remove the eventListener
function startTimer() {
    timerSec = setInterval(() => {
        const timer = document.querySelector('.timer');

        timer.textContent++;

    }, 1000);

    firstClick.removeEventListener('click', startTimer);
};

firstClick.addEventListener('click', startTimer);

// function to stop the timer
function stopTimer() {
    clearInterval(timerSec);
};


// instructions Pop Up Functions-----------------------------------------------------------------------------
const instructions = document.querySelector('.instuctionsButton')
const popUp = document.querySelector('.popUp')

instructions.addEventListener('click', function() {
    popUp.style.display = 'flex';
});

const closeInstructions = document.querySelector('.close')

closeInstructions.addEventListener('click', function(){
    popUp.style.display = 'none';
});



/* console log Graveyard ------------------------------------------------------------


Creating the board -----------------------------------------------------------
create a div element for each square
    set an class for all divs equal to square
    set an class for all divs equal to square
    set the div elements's id to its location in the grid
    add each square to grid

console.log(gameGrid);
console.log(gridArray);
console.log(didIWin);


Randomly select where Bombs are located ----------------------------------------------------------
randomly select a whole number between 0 and 9 for each row and column
If the bombLocation has been already used - cylce back through the for loop
add all bombLocations to the bomb array

console.log(bombLocations);


Right Click function and Flag behavior------------------------------------------------------
rightClick call back function
    prevent the default menu from appearing
    the user will not be able to put a flag down on a numbered square, empty square, or on the border of the grid
    If there is already a flag and the user right clicks on it, the flag will be removed
    Putting the flag on a square (can not put more flags down than there are bombs)
        If the last square on the board is a bomb and I put a flag down - I win
The bomb counter will respond to the amount of flags used
Add right click event listener for the gameGrid with callback function

console.dir(flagCountdown);
console.log(myFlags);
console.log(myFlags);
console.log(flagsUsed);


Left Click Function--------------------------------------------------------------------------- 
If there is a flag on the square - user is unable to click on it
If the square is a bomb - User loses 
    when a bomb has been selected all bombs will revel themselves 
    turn the location into a number that can be used in whatsAroundMe function 
    Run a function that checks the surrounding 8 squares to see if there is a bomb
        When the last square is selected (and its not a flag or a bomb) - user wins
add right click event listener for the gameGrid with callback function
findAllBombs when user selects a bomb

console.log(event.target.id);
console.log('theres a bomb here');
console.log(event.target.id[0]);
console.log(rowNum);
console.log(typeof rowNum)
console.log(event.target.id[1]);
console.log('no bomb here');
console.log(columnNum);
console.log(typeof columnNum)


whatsAroundMe Recursion loop -----------------------------------------------------
First Identify if there are bombs in the 8 squares surrounding me
    Identify my position on the board
    Am I on a  border?? (cannot manipulate locations with numbers off the board)
    if the surrounding square has already been revealed - stop

console.dir(mySquare);
TOP 3
console.log(row-1, column-1)
console.log(row-1, column)
console.log(row-1, column+1)
bottom 3
console.log(row+1, column-1)
console.log(row+1, column)
console.log(row+1, column+1)
to the left
console.log(row, column-1)
to the right
console.log(row, column+1)

make an array of the 8 squares around me
WHATS my NUMBER??
    check to see if any numbers in my aroundME array are also in the bombLocations array
    if so add to myNumber
Assign me
    When the number is greater than 0 - the number should appear
    If the square's number is 0 - call the function again until all surround squares have a number
Run the function for all 8 squares surrounding me - whatsAroundMe(row, column)

console.log(aroundMe)
console.log(myNumber)
console.log(didIWin)
console.log(didIWin)


reset button -----------------------------------------------------------------------


timer -----------------------------------------------------------------------------
start the timer after the first click on the grid and then remove the eventListener
function to stop the timer

console.log('startTimer');
console.log('stopTimer');


instructions Pop Up Functions-----------------------------------------------------------------------------

*/
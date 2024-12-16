
// Creating board -----------------------------------------------------------
const gameGrid = document.querySelector('#grid');


let rows = 10;
let columns = 10;

let bombs = 15;

const gridArray = [];
const myFlags = [];
const didIWin = [];

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

console.log(didIWin)


// ---------------------------------------------------------------------------
// Right click on squares to mark with flags

const flagCountdown = document.querySelector('.bomb-counter')
console.dir(flagCountdown);

flagCountdown.textContent = bombs;

// rightClick call back function
const rightClick = (event) => {
    // prevent the default menu from appearing
    event.preventDefault();

    
        if (event.target.classList.contains('numClicked') || event.target.classList.contains('emptySquare') || event.target.id === 'grid')  {
            return;
        } 
        
        else if (event.target.classList.contains('flagSquare') ) {
            event.target.classList.remove('flagSquare')
            event.target.textContent = ""
        
            myFlags.splice(myFlags.indexOf(event.target.id), 1);
            console.log(myFlags)
            
            updateCountdown();

        } 
        else if (myFlags.length < 15) {

            event.target.classList.add('flagSquare')
            event.target.textContent = "🚩"

            myFlags.push(event.target.id)
            console.log(myFlags);

            updateCountdown();
            if ( didIWin.length + myFlags.length === 100) {
                gameGrid.removeEventListener('click', leftClick);
                gameGrid.removeEventListener("contextmenu", rightClick);
            
                stopTimer();
    
                const winner = document.querySelector('h1')
                winner.textContent = "YOU'RE A MINESSEEPER! 🥳"
                // window.alert("Congradulations you are a Minesweeper!")
            } else {
                return;
            }
        } 

        else {
            return;
        }
};

function updateCountdown() {
    const flags = document.querySelectorAll('.flagSquare');

    const flagsUsed = flags.length;

    console.log(flagsUsed);

    flagCountdown.textContent = bombs - flagsUsed
};



// add right click event listener for the gameGrid with callback function
gameGrid.addEventListener("contextmenu", rightClick);

// Randomly select where Bombs are located ----------------------------------------------------
const bombLocations = [];

let numberbombs = 15

for (let i = 0; i < numberbombs; i++) {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);

    if (bombLocations.includes(`${row}${column}`)) {
        
        numberbombs++;

        continue;
    } 
    
    bombLocations.push(`${row}${column}`);

};

console.log(bombLocations);

// ---------------------------------------------------------------------------
// Left click on squares 

const leftClick = (event) => {
    console.log(event.target.id);

    if (event.target.classList.contains('flagSquare') )  {
        return;
    } 
    
    else if (bombLocations.includes(event.target.id)) {
        
        // event.target.classList.add('bombClicked');
        // event.target.textContent = '💣';

        console.log('theres a bomb here');

        findAllBombs();

        gameGrid.removeEventListener('click', leftClick);
        gameGrid.removeEventListener("contextmenu", rightClick);
        
        stopTimer();

        const loser = document.querySelector('h1')
        loser.textContent = "BETTER LUCK NEXT TIME 😵‍💫";

        // window.alert("Better Luck Next Time!")


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

        // const thisIsMe = document.getElementById(event.target.id);
        // console.dir(thisIsMe);

        if ( didIWin.length + myFlags.length === 100) {
            gameGrid.removeEventListener('click', leftClick);
            gameGrid.removeEventListener("contextmenu", rightClick);
        
            stopTimer();

            const winner = document.querySelector('h1')
            winner.textContent = "YOU'RE A MINESSEEPER! 🥳"
            // window.alert("Congradulations you are a Minesweeper!")
        } else {
            return;
        }

    
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



// find what's around the square that has been clicked -------


function whatsAroundMe(row, column) {
    const aroundMe = [];

    

    // who am I???
    const mySquare = document.getElementById(`${row}${column}`);
    console.dir(mySquare);


    
    if ( row < 0 || row >= 10 || column < 0 || column >= 10  ){
        return;
    } else if ( mySquare.classList.contains('numClicked') || mySquare.classList.contains('emptySquare') ) {
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
    
    // WHATS my NUMBER??????-----------------------------------------

        let myNumber = 0;

        for (i of aroundMe) {
            if(bombLocations.includes(i)) {
                myNumber++;
            }
        }

        console.log(myNumber)

    // Asign me

        if (myNumber >= 1) {
            mySquare.classList.add('numClicked')
            mySquare.textContent = myNumber

            didIWin.push(`${row}${column}`)
            console.log(didIWin)

            return; 

        } if (myNumber === 0) {
            mySquare.classList.add('emptySquare')

            didIWin.push(`${row}${column}`)
            console.log(didIWin)

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


// reset button -----------------------------------------

const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', function() {
    location.reload();
});

// timer ---------------------------------------------------

const firstClick = document.querySelector('#grid')

function startTimer() {
    console.log('startTimer');


    timerSec = setInterval(() => {
        const timer = document.querySelector('.timer');

        timer.textContent++;

    }, 1000);

    firstClick.removeEventListener('click', startTimer);
};

firstClick.addEventListener('click', startTimer);

function stopTimer() {
    console.log('stopTimer');

    clearInterval(timerSec);
};
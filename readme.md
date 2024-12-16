# Minesweeper

#### Minesweeper is a logic-based game where the goal is to reveal all the squares on the board without triggering any hidden mines.

<img src="https://cdn.mos.cms.futurecdn.net/f873f2282e16faeebdb4a09e2f3cef32.jpg" alt="original minesweeper game"/>

<img src="https://i.ibb.co/0VzBdgG/Screenshot-2024-12-16-143411.png" alt="Developed minesweeper game"/>

<!-- <img src="https://drive.google.com/file/d/1aThglqg1Ax_ZpQL3qhFWtlBVPEZtE913/view?usp=drive_link" style="width:100vw; height:100vh" alt="Text describing your video"/> -->

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1039776548?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Minesweeper"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

## Description
Minesweeper is a game where mines are hidden in a grid of squares. The object of the game is to clear the board without selecting a mine. Each square is designated a number that represents the amount of mines located in the 8 squares surrounding it. Using this information the user must navigate around the board placing down flags (with a right-click) where they think mines are located. The user wins when all squares have either been flagged or opened. 

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [Project Next Steps](#nextsteps)
* [Deployed App](#deployment)
* [About the Author](#author)

## <a name="technologiesused"></a>Technologies Used
* JavaScript
* HTML
* CSS


## Features
* Mines counter - reflects the number of mines hidden on the board, reduces as the mines have been flagged 
* Emoji - reset button 
* Timer - counting time spent on the game
* Right Click - placing a flag on the square
* Left Click - revealing the square 


## Wireframe Images
<img src="https://i.ibb.co/sgrXXhF/Screenshot-2024-12-09-195540.png">

## Notion Planning
* https://www.notion.so/Minesweeper-158133426c96816a9f9cf23fb9071e41?pvs=4

## <a name="design"></a>Design
* For the design of my Minesweeper, I decided to divert from the traditional gray colorway and went with a blue/green look.


## <a name="nextsteps"></a>Project Next Steps
#### List of Future Features
* Allow the user to select the difficulty level - changing the board size and amount of mines 
* Create a leaderboard to record the time the game was completed

## <a name="deployment"></a>Deployed Link
[Github Pages]([https://ashleylaisure.github.io/Minessweeper/])

* You can view the repository:
[Github.com](https://github.com/ashleylaisure/Minessweeper)
* If unable to view please go live locally through VS Code

## <a name="author"></a>About The Author
After countless hours mastering Minesweeper as a teenager, I discovered my passion for problem-solving and creativity. This led me to the exciting challenge of developing my own version of the classic game. Whether I’m diving into code or exploring new ideas, I’m driven by a love for innovation and the joy of creating experiences that others can enjoy.
    
## Works Cited:
*https://stackoverflow.com/questions/24093290/what-does-the-question-mark-mean-in-javascript/24093304
*https://www.w3schools.com/jquery/jquery_ref_events.asp
*Understanding “this” in JQUERY: 
* 	the this object doesn't change. It is the owner of the function. It is, in most cases like this, simply a node and you can reference all of its properties like this.className. (think of it as you would a node or whatnot that you get with document.getElementById). It is just the "owner" of the function. Therefore, you are just passing the this object to jQuery's $(). Conclusion: If you want to use jQuery functions for the current node, use $(this). But if you want to access the objects own properties (e.g. .name, className, .id), use simply this.
- https://stackoverflow.com/questions/8469635/jquery-when-to-use-this-and-when-to-use-this

* A constructor: A constructor in Java is a block of code similar to a method that's called when an instance of an object is created. Here are the key differences between aconstructor and a method: A constructor doesn't have a return type. ... Unlike methods, constructorsare not considered members of a class.
- https://www.w3schools.com/java/java_constructors.asp
<!-- Title -->
# 🕹️ Minesweeper

<!-- Subtitle -->
#### A modern take on the classic logic-based puzzle game — clear the board without triggering hidden mines!

<!-- badges/ Icons https://simpleicons.org/-->
<!-- ### 🚀 Tech Stack -->

<img src="https://img.shields.io/badge/-HTML5-black?style=for-the-badge&logoColor=white&logo=html5&color=E34F26" alt="html5" />

<img src="https://img.shields.io/badge/-CSS-black?style=for-the-badge&logoColor=white&logo=css&color=663399" alt="css" />

<img src="https://img.shields.io/badge/-javascript-black?style=for-the-badge&logoColor=white&logo=javascript&color=F7DF1E" alt="JavaScript" />

<img src="https://img.shields.io/badge/-githubpages-black?style=for-the-badge&logoColor=white&logo=github&color=181717" alt="github pages" />


<!-- images of app (inc. logo  homepage etc.)-->
## 🎮 Gameplay Preview
Original Minesweeper (inspiration):
<img src="https://cdn.mos.cms.futurecdn.net/f873f2282e16faeebdb4a09e2f3cef32.jpg" alt="Original Minesweeper" width="400"/>

My version (developed with HTML, CSS, and JavaScript):
<img src="https://i.ibb.co/0VzBdgG/Screenshot-2024-12-16-143411.png" alt="Developed minesweeper game" width="400"/>

<!-- ## 🌐 Demo video?

Here is a live demo of CarePulse in action: [CarePulse Demo](https://carepulse-demo.com)

![CarePulse Demo](https://carepulse-demo.com/demo-screenshot.png) -->

## 📖 Description

Minesweeper is a grid-based puzzle game where some squares hide mines. The objective is simple: clear the entire board without clicking on a mine.

Each revealed square shows a number that indicates how many mines are hidden in the 8 surrounding cells. Players must use logic to avoid danger, placing 🚩 flags where they suspect mines are hidden. Victory comes when every safe square is uncovered or all mines are flagged.

## 📚 Table of Contents
* 🛠  [Technologies Used](#technologiesused)
* ✨ [Features](#features)
* 📋 [Planning](#planning)
* 🎨 [Design](#design)
* ✅ [Next Steps](#nextsteps)
* 🌍 [Deployment](#deployment)
* 👋 [Author](#author)
* 📜 [Attributions](#attributions)

## <a name="technologiesused"></a>🛠 Technologies Used
* HTML5
* CSS3 (Flexbox & Grid for layout)
* JavaScript (DOM manipulation, recursion, timer)


## <a name="features"></a>✨Features
Here are the key features of Minesweeper:

- **💣  Mines counter**
    Reflects the number of mines hidden on the board, and decreases as mines are identified.

- **😍  reset button**
    Quickly restart with a fresh randomized board.

- **⏲   Timer**
    Tracks how long each game lasts.

- **🚩 Flag**
    Right-click to mark suspected mines.

- **🔢 Open Square**
    Left-click to reveal safe cells

- **🌊 Flood Reveal**
    Automatically uncover emapty areas when a zero cell is clicked

## <a name="planning"></a>📋 Planning
###### View my Notion planning board [↗](https://www.notion.so/Minesweeper-158133426c96816a9f9cf23fb9071e41?pvs=4)

## <a name="design"></a>🎨 Design
For the design of my Minesweeper, I decided to divert from the traditional gray colorway and went with a blue/green look.

### Wireframe Image
<img src="https://i.ibb.co/sgrXXhF/Screenshot-2024-12-09-195540.png" width="400"/>


## <a name="nextsteps"></a>✅ Project Next Steps
Here’s a list of ongoing tasks and planned features for the project:

- [ ] Difficulty levels (easy/medium/hard) with different board sizes & mine counts.
- [ ] Global leaderboard to record and compare completion times.


## <a name="deployment"></a>🌍 Deployed Link
[🎯 Play the Game (GitHub Pages)](https://ashleylaisure.github.io/Minesweeper/)

[📂 View the Repository](https://github.com/ashleylaisure/Minesweeper)


## <a name="author"></a>👋 Author
Hi, I’m Ashley Laisure 👋

After countless hours mastering Minesweeper as a teenager, I rediscovered the thrill of its logic and challenge through coding. Rebuilding this game let me merge my love of problem-solving with my creativity for design. Whether writing code or imagining new features, I enjoy creating projects that are fun, interactive, and rewarding to play.
    
## <a name="attributions"></a>📜 Attributions
This project uses recursion for the flood-fill mechanic (revealing multiple squares when no surrounding mines are detected). Helpful resources included:

- [Recursion in JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- [FreeCodeCamp – Recursion Guide](https://www.freecodecamp.org/news/recursion-in-javascript/)

Additional resources: 

* [FreeCodeCamp - Set timeout](https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/)
* [MDN setInterval](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
* [JS Timer Functions](https://www.google.com/search?q=interval+timer+in+javascript&sca_esv=59d83465afa8625f&sxsrf=ADLYWILHo3AG_2Ti4M81b_keZUm22PeT-g%3A1734394247417&ei=h8FgZ8-OGaCe5NoPtO622QE&oq=interval+timer+in+jav&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWludGVydmFsIHRpbWVyIGluIGphdioCCAAyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjWGlDJAVjdDXABeAGQAQCYAVOgAZIEqgEBN7gBAcgBAPgBAZgCCKACrQTCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICChAAGIAEGEMYigXCAgUQABiABMICChAAGIAEGBQYhwLCAgcQABiABBgKmAMAiAYBkAYKkgcBOKAH5TA&sclient=gws-wiz-serp)

* [YouTube – Event Listener Modal Tutorial](https://www.youtube.com/watch?v=gLWIYk0Sd38)

Emoji references: [Unicode.org](https://unicode.org/emoji/charts/full-emoji-list.html)
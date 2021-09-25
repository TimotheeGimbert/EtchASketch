///////////////
// VARIABLES //
///////////////

let boxesPerLine = 16;


///////////////
// FUNCTIONS //
///////////////

function setGrid(n) {
    for (let i = 1; i <= n; i++) { // 16 initial lines
        const line = document.createElement('section'); // lines are sections
        for (let i = 1; i <= n; i++) { // 16 initial boxes
            const div = document.createElement('div'); // boxes are divs
            line.appendChild(div);
        }
        container.appendChild(line);
    }
}

function newGrid() {
    const initialGridWidth = 16*document.querySelector('section > div').offsetWidth;
    const boxesPerLine = prompt("How many boxes per line for the new grid?");
    const newBoxWidth = initialGridWidth / boxesPerLine;
    return newBoxWidth
}


///////////////
// EXECUTION //
///////////////

const container = document.querySelector('#container');
setGrid(boxesPerLine);

let boxes = document.querySelectorAll('section > div');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.cssText = "background-color: black;";
    });
});

let clearButton = document.querySelector('button');
clearButton.addEventListener('click', () => {
    boxes.forEach(box => {
        box.style.cssText = "background-color: white;";
    });
});
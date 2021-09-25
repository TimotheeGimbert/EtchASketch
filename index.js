///////////////
// VARIABLES //
///////////////

let lineDensity = 16;


///////////////
// FUNCTIONS //
///////////////

function setGrid(n) {
    // creates a grid of n*n divs
    for (let i = 1; i <= n; i++) {
        const line = document.createElement('section'); // grid lines are sections
        for (let i = 1; i <= n; i++) {
            const div = document.createElement('div'); // grid elements are divs
            line.appendChild(div);
        }
        container.appendChild(line);
    }
}

function getLineWidth() {
    // calculates the width of the current grid, and returns it
    const width = lineDensity * document.querySelector('section > div').offsetWidth;
    return width;
}

function getNewDensity() {
    // prompts for the number of boxes per line for the new grid, and returns it
    const newDensity = prompt("How many boxes per line for the new grid?");
    return newDensity;
}

function getNewBoxWidth() {
    // calculate the new box width based on the new density, and returns it
    const newBoxWidth = getLineWidth() / getNewDensity();
    return newBoxWidth;
}


///////////////
// EXECUTION //
///////////////

const container = document.querySelector('#container');
setGrid(lineDensity);

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
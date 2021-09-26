const container = document.getElementById('container');
const clearButton = document.getElementById('clearButton');
const gridButton = document.getElementById('gridButton');

function getBoxWidth(n) { // calculates box width depending on the number of boxes per line, and returns it
    const containerSize = container.offsetWidth;
    const boxSize = containerSize / n;
    return boxSize;
}

function createGrid(n) { // creates n rows of n boxes
    let size = getBoxWidth(n) + "px";
    for (let i = 1; i <= n; i++) {
        let row = document.createElement('section');
        row.classList.add("row");
        for (let j = 1; j <= n; j++) {
            let box = document.createElement('div');
            box.classList.add("box");
            box.style.width = size;
            box.style.height = size;
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function colorGrid() { // eventListener that colors boxes in black when hovered
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
        });
    });
}

function askGridDensity() { // prompts the user to choose new grid density, and returns it
    let newGridDensity = prompt("How many boxes per line for the new grid?");
    return newGridDensity;
}

//////////
// MAIN //
//////////

createGrid(16);
colorGrid();

clearButton.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
});

gridButton.addEventListener('click', () => {
    while (container.firstChild) container.removeChild(container.firstChild);
    let newGridDensity = askGridDensity();
    createGrid(newGridDensity);
    colorGrid();
});
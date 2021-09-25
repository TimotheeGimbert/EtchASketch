let boxPerLine = 16;
const container = document.querySelector('#container');
const clearButton = document.querySelector('#clearButton');

function createGrid(n) {
    for (let i = 1; i <= n; i++) {
        const line = document.createElement('section'); 
        for (let i = 1; i <= n; i++) {
            const div = document.createElement('div');
            line.appendChild(div);
        }
        container.appendChild(line);
    }
}


createGrid(boxPerLine);

let boxes = document.querySelectorAll('#container div');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
    });
});


clearButton.addEventListener('click', () => {
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
});
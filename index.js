const container = document.getElementById('container');
const clearButton = document.getElementById('clearButton');

function getBoxWidth(n) {
    const containerSize = container.offsetWidth;
    const boxSize = containerSize / n;
    return boxSize;
}

function createGrid(n) {
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


createGrid(16);

let boxes = document.querySelectorAll('.box');
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

gridButton.addEventListener('click', () => {
    container.forEach(child => {
        container.removeChild(child);
    });
});
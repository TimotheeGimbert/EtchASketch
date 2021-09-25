const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) { // 16 lines in the grid
    const line = document.createElement('section'); // lines are sections
    for (let i = 1; i <= 16; i++) { // 16 boxes in each line of the grid
        const div = document.createElement('div'); // boxes are divs
        line.appendChild(div);
    }
    container.appendChild(line);
}

const boxes = document.querySelectorAll('section > div');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.cssText = "background-color: black;";
    });
});


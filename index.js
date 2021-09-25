
function setLine() {
    // Create a line composed of 16 divs
    const line = document.createElement('section'); // creates a line <section>   
    for (let i = 1; i <= 16; i++) {
        const div = document.createElement('div'); // creates a <div>
        line.appendChild(div); // adds 16 divs to the line
    }
    container.appendChild(line); // adds the line to #container
}

// creates 16 lines 
for (let i = 1; i <= 16; i++) {
    setLine();
}








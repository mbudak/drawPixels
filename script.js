// elements
var btn_AddRow = document.getElementById('add-row');
var pixelTable = document.getElementById('pixelTable');
var currentColor = document.getElementById('currentColor');
var drawByMouseOn = document.getElementById('drawByMouseOn');

// Events 
btn_AddRow.addEventListener('click', makeRow);

function colorize() {
    this.setAttribute('class', currentColor.value);    
}

function colorizeByMouse() {
    if (drawByMouseOn.checked) {
        this.setAttribute('class', currentColor.value);   
    }
    
}

function makeRow(colCount) {
    let row = pixelTable.insertRow(0);
    for (let i = 0; i < colCount; i++) {
        let cell = row.insertCell(0);
        cell.addEventListener('click', colorize);
        cell.addEventListener('mouseover', colorizeByMouse);       
    }
}

// add a matrix
function AddTable(row, col) {
    for (let i = 0; i < 20; i++) {
        makeRow(20);
    }
}


// Ready to Run
if (true) {
    // add a 20x20 matrix
    AddTable(20, 20);
}
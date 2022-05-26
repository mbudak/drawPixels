// buttons
var btn_AddRow = document.getElementById('add-row');
var btn_FillAll = document.getElementById('fillAll');
var btn_FillWhites = document.getElementById('fillWhites');
var btn_clearAll = document.getElementById('clearAll');

// other elements
var pixelTable = document.getElementById('pixelTable');
var currentColor = document.getElementById('currentColor');
var drawByMouseOn = document.getElementById('drawByMouseOn');


// Add Events to Elements
btn_AddRow.addEventListener('click', makeRow(20));
btn_FillAll.addEventListener('click', fillAll);
btn_FillWhites.addEventListener('click', fillWhites);
btn_clearAll.addEventListener('click', clearAll);


// Event Functions
function colorize() {
    this.setAttribute('class', currentColor.value);    
}

function colorizeByMouse() {
    if (drawByMouseOn.checked) {
        this.setAttribute('class', currentColor.value);   
    }    
}

function fillAll() {
    var tdList = document.querySelectorAll("#pixelTable td");
    tdList.forEach(element => {
        element.setAttribute('class', currentColor.value);
    });
}

function fillWhites() {
    var tdList = document.querySelectorAll("#pixelTable td");
    tdList.forEach(element => {
        if (element.classList.contains("white")) {
            element.setAttribute('class', currentColor.value);
        }
    });
}

function clearAll() {
    var tdList = document.querySelectorAll("#pixelTable td");
    tdList.forEach(element => {
        element.setAttribute('class', 'white');
    });
}


/* Table Functions */
function makeRow(colCount) {
    let row = pixelTable.insertRow(0);
    for (let i = 0; i < colCount; i++) {
        let cell = row.insertCell(0);
        cell.setAttribute('class', "white"); // Default class
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
/* End of Table Functions */

// Ready to Run
if (true) {
    // add a 20x20 matrix
    AddTable(20, 20);
}
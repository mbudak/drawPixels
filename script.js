// defaults
var rows = 20;
var cols = 20;

// buttons
var btn_AddRow = document.getElementById('add-row');
var btn_FillAll = document.getElementById('fillAll');
var btn_FillWhites = document.getElementById('fillWhites');
var btn_clearAll = document.getElementById('clearAll');

// other elements
var pixelTable = document.getElementById('pixelTable');
var currentColor = document.getElementById('currentColor');
var drawByMouseOn = document.getElementById('drawByMouseOn');
var numberOfRows = document.getElementById('rows');
var numberOfColumns = document.getElementById('cols');


// Add Events to Elements
btn_AddRow.addEventListener('click', makeRow(20));
btn_FillAll.addEventListener('click', fillAll);
btn_FillWhites.addEventListener('click', fillWhites);
btn_clearAll.addEventListener('click', clearAll);
numberOfRows.addEventListener('change', changeRows);
numberOfColumns.addEventListener('change', changeColumns);


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

function changeRows() {
    if (numberOfRows.value < rows) {
        rows--;
        document.getElementById("pixelTable").deleteRow(rows-1);
    } else {
        rows++;
        makeRow(cols);
    }
}
function changeColumns() {
    console.log('columns', numberOfColumns.value);
}

/* Table Functions */
function makeRow(colCount) {
    let row = pixelTable.insertRow(0);
    // we dont want zero based index
    for (let i = 1; i <= colCount; i++) {
        let cell = row.insertCell(0);
        cell.setAttribute('class', "white"); // Default class
        cell.addEventListener('click', colorize);
        cell.addEventListener('mouseover', colorizeByMouse);       
    }
}

// add a matrix
function AddTable(row, col) {
    // we dont want zero based index
    for (let i = 1; i < row; i++) {
        makeRow(col);
    }
}
/* End of Table Functions */

// Ready to Run
if (true) {
    // add a 20x20 matrix
    AddTable(rows, cols);
}
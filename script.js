// defaults
var rows = 20;
var cols = 20;
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'brown'];

// buttons
var btn_FillAll = document.getElementById('fillAll');
var btn_FillWhites = document.getElementById('fillWhites');
var btn_clearAll = document.getElementById('clearAll');

// other elements
var pixelTable = document.getElementById('pixelTable');
var currentColor = document.getElementById('currentColor');
var drawByMouseOn = document.getElementById('drawByMouseOn');
var numberOfRows = document.getElementById('rows');
var numberOfColumns = document.getElementById('cols');
var partyMode = document.getElementById('partyMode');

// Add Events to Elements

btn_FillAll.addEventListener('click', fillAll);
btn_FillWhites.addEventListener('click', fillWhites);
btn_clearAll.addEventListener('click', clearAll);
numberOfRows.addEventListener('change', changeRows);
numberOfColumns.addEventListener('change', changeColumns);
partyMode.addEventListener('change', checkPartyMode);


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
    // decrease
    if (numberOfRows.value < rows) {
        document.getElementById('pixelTable').deleteRow(rows-1);
        rows--;
    } else { // or increase
        rows++;
        makeRow(cols);
    }
}

// Add or Remove columns are little bit tricky
// we need to scan all rows and add or remove cells
function changeColumns() {
    if (numberOfColumns.value < cols) {
        var rowList = document.getElementById('pixelTable').rows;
        for (var i = 0; i < rowList.length; i++) {
            rowList[i].deleteCell(-1);
        }
        cols--; //change default cols
    } else {
        var rowList = document.getElementById('pixelTable').rows;
        for (var i = 0; i < rowList.length; i++) {
            rowList[i].insertCell(0);
        }
        cols++; //change default cols
    }

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
    for (let i = 1; i <= row; i++) {
        makeRow(col);
    }
}
/* End of Table Functions */


function generateRandom(min, max) {
    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}


function doParty() {
    timex = setTimeout(function(){
        let x = generateRandom(0, cols);
        let y = generateRandom(0, rows);
        let pixelColor = colors[Math.floor(Math.random() * colors.length)];

        pixelTable.rows[x].cells[y].setAttribute('class', pixelColor);

        doParty();
    }, 50);
}

function checkPartyMode(){
    if (partyMode.checked) {
        doParty();
    } else {
        console.log('party finished')
        clearTimeout(timex);
    }
  }



// Ready to Run
if (true) {
    // add a 20x20 matrix
    AddTable(rows, cols);
}
const CODES = {
    A: 65,
    Z: 90
}

function createCell(el) {
    return `
    <div class="cell" contenteditable> ${el} </div>
    `
}

function createCol(el) {
    return `
    <div class="column">${el}</div>
    `
}

function createRow (content, numRow ){


    return `
    <div class="row">
      <div class="row-info">${numRow? numRow: numRow = ''}</div>
            <div class="row-data">${content} </div>
    </div>

    `
}

function toChar(_, index){
    return String.fromCharCode(CODES.A + index)
}

export function createTable (rowsCount = 25) {
    const colsCount = CODES.Z - CODES.A + 1 
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(createCol) 
        .join('')

    const cleanCols = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('')

    const rows = []
    
    rows.push(createRow(cols))

    for (let row = 0; row < rowsCount; row++) {
        rows.push(createRow(cleanCols, row + 1))
    }

    return rows.join('')
}
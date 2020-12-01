const CODES = {
    A: 65,
    Z: 90
}

function createCell(_, col) {
    return `
    <div class="cell" contenteditable data-col = "${col}"></div>
    `
}

function createCol(el, index) {
    return `
    <div class="column" data-type = "resizable" data-col = "${index}">
    ${el}
    <div class = "col-resize" data-resize = "col"></div>
     </div>
    `
}

function createRow(content, numRow) {
    const resize = numRow ? '<div class = "row-resize" data-resize = "row"></div>' : ' '

    return `
    <div class="row" data-type = "resizable">
      <div class="row-info" >
         ${numRow ? numRow : numRow = ''}
         ${resize}
      </div>
            <div class="row-data">${content} </div>
    </div>

    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 25) {
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
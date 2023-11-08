const puzzle = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 2, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
let row = 4;
let col = 3;
let value = puzzle[row][col];
/* 
 [5, 0, 0, 6, 0, 9, 0, 0, 8],
    [1, 0, 9, 0, 0, 0, 7, 0, 0],
    [0, 7, 0, 0, 0, 3, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 9, 5, 4],
    [0, 5, 0, 0, 7, 0, 0, 0, 0],
    [2, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 5],
    [0, 6, 0, 0, 0, 0, 4, 1, 7]

*/

console.log(puzzle.length);
console.log(puzzle[0].length);

function checkCorrectness() {
    if(checkRow() && checkCol() && checkBox())
        return true;
    
    return false;
}

function checkBox() {
    let startRow, endRow, startCol, endCol;
    startRow = row - (row % 3);
    endRow = startRow + 2;
    startCol = col - (col % 3);
    endCol = startCol + 2;
    // console.log(startRow, endRow, startCol, endCol, value);

    for (let i = startRow; i <= endRow; i++) {
        for (let j = startCol; j <= endCol; j++) {
            const element = puzzle[i][j];
            // console.log(element);
            if(value === element && (j !== col || i !== row))
                return false;
        }
    }
    
    return true;
}

function checkRow(){
    for (let index = 0; index < puzzle[row].length; index++) {
        const element = puzzle[row][index];
        if(value === element && (index !== col))
            return false;
    }
    return true;
}

function checkCol(){
    for (let index = 0; index < puzzle[col].length; index++) {
        const element = puzzle[index][col];
        if(value === element && index !== row)
            return false;
    }
    return true;
}

console.log(checkCorrectness());
// console.log(puzzle[row].indexOf(12));
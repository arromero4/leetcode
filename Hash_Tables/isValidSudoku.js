//36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 

// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

var isValidSudoku = function(board) {
  let n =board.length
  let subGridN = 3
  
    //check rows
    for(let row = 0; row < n; row++){
      const numbersInRows = new Set()
      for(let column = 0; column < n;  column++){
          if(board[row][column] !== '.' && numbersInRows.has(board[row][column])){
              return false
          }
          numbersInRows.add(board[row][column])
      }
      //(console.log(numbersInRows)
  }
      //check columns 
    for(let column = 0; column < n; column++){
        const numbersInColumn = new Set()
        for(let row = 0; row < n; row++){
            if(board[row][column] !== '.' && numbersInColumn.has(board[row][column] )){
                return false
            }
            numbersInColumn.add(board[row][column])
        }
        console.log(numbersInColumn)
    }

    // Check subgrids
    for(let row=0; row < n; row+=subGridN){
      for(let column=0; column < n; column+=subGridN){
          const numbersInSubGrid = new Set()
          for(let subGridRow = row; subGridRow < row + subGridN; subGridRow++){
              for(let subGridColumn = column; subGridColumn < column + subGridN; subGridColumn++){
                  if(board[subGridRow][subGridColumn] !== '.' && numbersInSubGrid.has(board[subGridRow][subGridColumn])){
                      return false
                  }
                  numbersInSubGrid.add(board[subGridRow][subGridColumn])
              }
              
          }
      }
  }
  return true
  
};

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
// Output: true

console.log(isValidSudoku(board))
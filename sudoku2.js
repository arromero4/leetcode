// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

// Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

// Example

// For

// grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
//         ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
//         ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
//         ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
//         ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
//         ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
//         ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
// the output should be
// solution(grid) = true;

// For

// grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
//         ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
//         ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
//         ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
//         ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
//         ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
//         ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
//         ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
//         ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
// the output should be
// solution(grid) = false.

// The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.array.char grid

// A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

// [output] boolean

// Return true if grid represents a valid Sudoku puzzle, otherwise return false.

function solution(grid) {
  let n = grid.length
  let subGridN = 3
  
  //check rows
  for(let row = 0; row < n; row++){
      const numbers = new Set()
      for(let column = 0; column < n;column++){
          if(grid[row][column] !== '.' && numbers.has(grid[row][column])){
              return false
          }
          
          numbers.add(grid[row][column])
      }
  }
  
  //check columns
   for(let column = 0; column < n; column++){
      const numbers = new Set()
      for(let row = 0; row < n;row++){
          if(grid[row][column] !== '.' && numbers.has(grid[row][column])){
              return false
          }
          
          numbers.add(grid[row][column])
      }
  }
  
   // Check subgrids
  for(let row = 0; row < n; row+=subGridN){
      for(let column = 0; column < n; column+=subGridN){
          const numbers = new Set()
          for(let subGridRow = row; subGridRow < row +subGridN; subGridRow++){
              for(let subGridColumn = column; subGridColumn < column + subGridN; subGridColumn++){
                  if(grid[subGridRow][subGridColumn] !== '.' && numbers.has(grid[subGridRow][subGridColumn])){
                      return false
                  }
                  numbers.add(grid[subGridRow][subGridColumn])
              }
          }
      }
  }
  return true
 }
 
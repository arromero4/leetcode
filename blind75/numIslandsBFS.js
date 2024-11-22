
// Code


// Testcase
// Testcase
// Test Result
// 200. Number of Islands
// Medium
// Topics
// Companies
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.0


/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const ROWS = grid.length, COLS = grid[0].length;
    let islands = 0;

    const bfs = (r,c) => {
      const q = new Queue()
      q.push([r, c]);
      grid[r][c] = '0';

      while(!q.isEmpty()) {
        const [row, col] = q.pop();
        for(const [dr, dc] of directions){
          const nr = row + dr, nc = col + dc;
          if(nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && grid[nr][nc] === '1'){
            q.push([nr, nc]);
            grid[nr][nc] = '0';
          }
        }
      }
    }

    for(let r = 0; r < ROWS; r++) {
      for(let c = 0; c < COLS; c++) {
        if(grid[r][c] == '1') {
          bfs(r,c)
          islands += 1;
        }
      }
    }
    return islands;
};
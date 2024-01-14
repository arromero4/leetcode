// 498. Diagonal Traverse
// Solved
// Medium
// Topics
// Companies
// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

 

// Example 1:


// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]
// Example 2:

// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// -105 <= mat[i][j] <= 105
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if(mat.length === 1 ) return mat.flat()
    
    let row = mat.length;
    let col = mat[0].length;
    
    let res = Array.from(Array(row+col-1), () => new Array().fill([]));
    
    for(let i=0; i<row;i++){
        for(let j=0;j<col;j++){
            if((i+j) % 2 === 0){
                res[i+j].unshift(mat[i][j]);
            }else{
                res[i+j].push(mat[i][j]);
            }
        }
    }
    return res.flat();
};
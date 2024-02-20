// 118. Pascal's Triangle
// Easy
// Topics
// Companies
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]]

    for (let i = 1; i < numRows; i++) {
        let temp = [0].concat(res[res.length - 1], [0]);
        let row = []

       for (let j = 0; j < temp.length - 1; j++) {
            row.push(temp[j] + temp[j + 1])
        }

        res.push(row);
    }
    return res;
};

let numRows = 5
console.log(generate(numRows))
// 119. Pascal's Triangle II
// Easy
// Topics
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33
 

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1];

    for (let i = 0; i < rowIndex; i++) {
        let nextRow = new Array(res.length + 1).fill(0);
        for (let j = 0; j < res.length; j++) {
            console.log(res.length)
            nextRow[j] += res[j];//2
            nextRow[j + 1] += res[j];//2
        }
        res = nextRow;
    }
    return res;
};

let rowIndex = 3
console.log(getRow(rowIndex));
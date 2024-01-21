// 67. Add Binary
// Solved
// Easy
// Topics
// Companies
// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = "";
    let carry = 0;
    let a1 = a.split('').reverse().join('');
    let b1 = b.split('').reverse().join('');
    
    for (let i = 0; i < Math.max(a1.length, b1.length); i++) {
        let digitA = i < a1.length ? parseInt(a1[i]) : 0;  // Parse the character to get the numeric value
        let digitB = i < b1.length ? parseInt(b1[i]) : 0; 
        let total = digitA + digitB + carry;
        let char = total % 2;
        console.log(char);
        res = char + res
        carry = Math.floor(total / 2);
        
    }
    if(carry) res =  "1".concat(res)
    return res
 

};
a = "11", b = "1"
addBinary(a, b)
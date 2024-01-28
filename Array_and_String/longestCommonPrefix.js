// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //prefix
    let prefix = '' 
    if(strs.length === 0) return prefix
    // loop through characters (char, index)
    for(let i=0;i<strs[0].length;i++){
        const character = strs[0][i]
        console.log("character",character)
        for(let j=0;j < strs.length;j++){
            console.log(`strs[${j}][${i}]`, strs[j][i] )
            if(strs[j][i] != character) return prefix
        }
        prefix = prefix + character
    }
    return prefix
    //     loop through strs(str)
    //        if str[index] != char
    //           return prefix
    //     prefix = prefix + char
    // return prefix
};

strs = ["flower","flow","flight"]
longestCommonPrefix(strs)
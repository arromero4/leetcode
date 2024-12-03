// 242. Valid Anagram
// Solved
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an 
// anagram
//  of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  let hashS = new Set()
  let hashT = new Set()
  for(let i = 0; i < s.length; i++){
    hashS[s[i]] = (hashS[s[i]] || 0) + 1
    hashT[t[i]] = (hashT[t[i]] || 0) + 1
  }
  console.log(hashS)
  console.log(hashT)
  for(let key in hashS){
    if(hashS[key] !== hashT[key]){
      return false
    }
  }
  return true
}
let s = "rat"
let t = "car"

console.log(isAnagram(s, t))
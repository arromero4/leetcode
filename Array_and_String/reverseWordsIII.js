// 557. Reverse Words in a String III
// Easy
// Topics
// Companies
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let chars = Array.from(s);
    let l = 0

    for (var r = 0; r < chars.length; r++) {
        if(chars[r] === ' ' || r == chars.length - 1) {
            let temp_l = l
            let temp_r = r - 1

            if(r == chars.length - 1){
                temp_r = r
            }

            while(temp_l < temp_r){
                [chars[temp_l], chars[temp_r]] = [chars[temp_r], chars[temp_l]]
                temp_l++
                temp_r--

            }
            
            l = r + 1
            console.log(l)
        }
    }

    return chars.join('')
};

let s = "Let's take LeetCode contest"
console.log(reverseWords(s));
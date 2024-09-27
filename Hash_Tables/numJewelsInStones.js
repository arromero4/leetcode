// # 771. Jewels and Stones
// # Solved
// # Easy
// # Topics
// # Companies
// # Hint
// # You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// # Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// # Example 1:

// # Input: jewels = "aA", stones = "aAAbbbb"
// # Output: 3
// # Example 2:

// # Input: jewels = "z", stones = "ZZ"
// # Output: 0
 

// # Constraints:

// # 1 <= jewels.length, stones.length <= 50
// # jewels and stones consist of only English letters.
// # All the characters of jewels are unique.

// /**
//  * @param {string} jewels
//  * @param {string} stones
//  * @return {number}
//  */
var numJewelsInStones = function(jewels, stones) {
    let mapJewels =  new Map()
    let mapStones =  new Map()
    let count = 0    
    for(let jewel of jewels){
        mapJewels.set(jewel, (mapJewels.get(jewel) || 0) + 1)
    }

    for(let stone of stones){
        mapStones.set(stone, (mapStones.get(stone) || 0) + 1)
    }

    for(let [key, value] of mapStones.entries()){
        if(mapJewels.has(key)) count += value
    }
    return count

};
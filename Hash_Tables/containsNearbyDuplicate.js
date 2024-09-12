// 219. Contains Duplicate II
// Solved
// Easy
// Topics
// Companies
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105


var containsNearbyDuplicate = function(nums, k) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {// 0 1 2 3

    if(nums[i] in map) {//si el valor está en el map - 1 1
      //verificamos si i - map[nums[i]] es menor o igual que k
      if(i - map[nums[i]] <= k) {  //3-2 <= 1
        return true
      }
    }
    map[nums[i]] = i //si no está, lo añadimos al map - 1:2, 0:1, 
    console.log(map)
  }
  return false
}

// Input: 
let nums = [1,0,1,1], k = 1
console.log(containsNearbyDuplicate(nums, k))
// Output: true
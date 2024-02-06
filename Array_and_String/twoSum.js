// 1. Two Sum
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


//Para un arreglo no ordenado (Two Sum clásico):
var twoSum = function(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        hash[val] = i;
    }
    for (let i = 0; i < nums.length; i++){
        const potencialKey = target - nums[i];
        if(hash[potencialKey] && hash[potencialKey] !== i){
            return [i, hash[potencialKey]]
        }
    }
};

//Para un arreglo ordenado (Two Sum II):
var twoSum = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum === target) {
            return [i + 1, j + 1]; // Ajuste para índices basados en 1, si es necesario
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
};

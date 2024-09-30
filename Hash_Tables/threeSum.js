// 15. 3Sum
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = [];
    
  // Sort the array numerically
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
      let a = nums[i];
      
      // Skip duplicate elements
      if (i > 0 && a === nums[i - 1]) {
          continue;
      }
      
      let l = i + 1;
      let r = nums.length - 1;

      while (l < r) {
          let threeSum = a + nums[l] + nums[r];
          
          if (threeSum > 0) {
              r--;  // Move the right pointer to the left
          } else if (threeSum < 0) {
              l++;  // Move the left pointer to the right
          } else {
              res.push([a, nums[l], nums[r]]);
              l++;
              
              // Skip duplicate elements on the left pointer
              while (nums[l] === nums[l - 1] && l < r) {
                  l++;
              }
          }
      }
  }
  
  return res;
  
};
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))
// 18. 4Sum
// Solved
// Medium
// Topics
// Companies
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */
var fourSum = function(nums, target) {
  nums.sort((a,b) => a-b)
  console.log(nums)
  let res = []
  let quad = []

  
 const kSum = (k, start, target) => {
  if(k !== 2){
    for (let i = start; i < nums.length - k + 1; i++) {
      if(i  > start && nums[i] == nums[i - 1]){
        continue
      }
      quad.push(nums[i])
      kSum(k - 1, i + 1, target - nums[i])
      quad.pop()
    }
    return
  }

  //base case two sum II
  let l = start
  let r = nums.length - 1
  while (l < r) {
    if(nums[l] + nums[r] < target){
      l += 1
    }else if(nums[l] + nums[r] > target){
      r -= 1
    }else{
      res.push([...quad, nums[l], nums[r]])
      l += 1
      while (l < r && nums[l] === nums[l-1]) {
        l += 1
      }
    }
  }
 
}

  kSum(4, 0, target)
  return res

};


// Example 1:

let nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum(nums, target))
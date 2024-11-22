// 238. Product of Array Except Self
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

//Solucion 1 con prefix y suffix como arreglos
// var productExceptSelf = function(nums) {
//   let n = nums.length
//     let res = new Array(n)
//     let pref = new Array(n)
//     let suff = new Array(n)

//     pref[0] = 1
//     suff[n-1] = 1

//     for(let i = 1; i < n; i++){
//         pref[i] = nums[i - 1] * pref[i -1]
//     }
//     console.log(pref)
//     for(let i = n - 2; i >= 0; i--){
//         suff[i] = nums[i+1] * suff[i+1]
//     }
//     console.log(suff)
//     for(let i=0; i < n; i++){
//         res[i] = pref[i] * suff[i]
//     }
//     return res
// };

//solucion 2 con un solo arreglo res

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
      let n = nums.length
      let res = new Array(n).fill(1)

      for(let i = 1;  i < n; i++){
          res[i] = res[i-1] * nums[i-1]
      }

      let postfix = 1
      for(let i = n -1; i >= 0; i--){
          res[i] = res[i] * postfix//6 24 48 
          postfix = postfix * nums[i]
      }

      return res
  }
}
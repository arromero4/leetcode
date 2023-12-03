/**
 * 1480. Running Sum of 1d Array
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
 * 
 */


//time complexity = O(n)
//space complexity = O(1)
var runningSum = function(nums) {
  //create a new array
  let sumArray = []
  //check if array is empty
  if (nums.length == 0) return [];
  
  //this position is always the same
  let currentSum = nums[0];

  //add first element to the new array
  sumArray.push(currentSum);

  //loop, we are going to start from the second position 
  //because we already have the first element
  //then we have to sum every element in the array
  //and push to the new array we create 
  for (var i = 1; i < nums.length; i++){
      currentSum = currentSum + nums[i];
      sumArray.push(currentSum);
  }

  return sumArray


}

nums = [1,2,3,4]
nums = [1,1,1,1,1]
nums = [3,1,2,10,1]
console.log(runningSum(nums))

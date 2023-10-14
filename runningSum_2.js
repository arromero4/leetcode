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

//SOLUTION 1
var runningSum = function(nums) {
    //this line checks to make sure we're not working with an empty array and returns if nums is empty
      if(nums.length==0) return [];
    //we then create an array to hold our output. I called mine sumArray
      const sumArray = [];
    //We start by getting the first item in our array since we're sure the array is not empty. 
      let currentSum = nums[0];
    //The first item will always remain the same for all solutions so we add it as the first item of our output array sumArray
      sumArray.push(currentSum)
    //We loop through the remaining array (starting at index 1), storing the sums in the currentSum variable 
    //and adding it to the sumArray
      for(let i = 1; i<nums.length; i++){
          currentSum+=nums[i]
          sumArray.push(currentSum)
      }
    //Finally, we return sumArray.
      return sumArray;
  };
  
  
  //SOLUTION 2
  // second solution uses the same nums array as output instead of creating a new array
  var runningSum = function(nums) {
      let currentSum=0;
      for(let i=0;i<nums.length;i++){
          currentSum=currentSum+nums[i];
          nums[i]=currentSum;
      }
      return nums;
  };
  
  //SOLUTION 3
  // this solutions uses javascript's inbuilt array.map instead of a for loop
  var runningSum = function(nums) {
      let currentSum = 0
      return nums.map((num) => currentSum += num)
  };
/**
 * 
 * 
Code

Testcase
Testcase
Result

977. Squares of a Sorted Array
Solved
Easy
Topics
Companies
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//time complexity O(n)
//space complexity O(n)
var sortedSquares = function(nums) {
      /**
    two pointers technique
    1. create a pointer to compare every item on the left and right using length
        both required to start backwards
    2. Create a variable to store the position required to start backwards
    3. Create new Array 
    4. while left is less than or equal to right 
        - if nums[left]**2 > nums[right]**2
            new array result[position] = nums[left]**2
            position - 1
            left + 1
        -else
            new array result[position] = nums[right]**2
            position -1
            right - 1
    5. return results
     */
    let leftIdx = 0;
    let rigthIdx = nums.length - 1;
    let position =  nums.length - 1;
    let results = [];

    while(leftIdx <= rigthIdx){
        if(nums[leftIdx]**2 > nums[rigthIdx]**2 ){
            results[position] = nums[leftIdx]**2
            position--
            leftIdx++
        }else{
            results[position] = nums[rigthIdx]**2
            position--
            rigthIdx--
        }
    }
    return results
};
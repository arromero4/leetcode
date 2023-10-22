/**
 * 
 * 
977. Squares of a Sorted Array
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

void main() {
  List<int> nums = [-4, -1, 0, 3, 10];
  print(sortedSquares(nums));
}

List<int> sortedSquares(List<int> nums) {
//time complexity O(n)
//space complexity O(n)

  int leftIdx = 0;
  int rigthIdx = nums.length - 1;
  int position = nums.length - 1;
  List<int>? results = List<int>.filled(nums.length, 0);

  while (leftIdx <= rigthIdx) {
    if (nums[leftIdx] * nums[leftIdx] > nums[rigthIdx] * nums[rigthIdx]) {
      results[position] = nums[leftIdx] * nums[leftIdx];
      position--;
      leftIdx++;
    } else {
      results[position] = nums[rigthIdx] * nums[rigthIdx];
      position--;
      rigthIdx--;
    }
  }
  return results;
}

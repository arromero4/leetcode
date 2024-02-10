// 209. Minimum Size Subarray Sum
// Medium
// Topics
// Companies
// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

import 'dart:math';

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
void main() {
  int target = 7;
  List<int> nums = [2, 3, 1, 2, 4, 3];
  minSubArrayLen(target, nums);
}

int minSubArrayLen(int target, List<int> nums) {
  int left = 0;
  int total = 0;
  int res = double.infinity.toInt();

  for (var right = 0; right < nums.length; right++) {
    total += nums[right];
    while (total >= target) {
      res = min(right - left + 1, res);
      total -= nums[left];
      left += 1;
    }
  }
  return res == double.infinity.toInt() ? 0 : res;
}

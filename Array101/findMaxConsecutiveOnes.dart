/**
 * 
 * Max Consecutive Ones

Solution
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 */
import 'dart:math';

void main() {
  List<int> nums = [1, 1, 0, 1, 1, 1];
  print(findMaxConsecutiveOnes(nums));
}

int? findMaxConsecutiveOnes(List<int> nums) {
  int current = 0;
  int largest = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      current++;
    } else {
      current = 0;
    }
    largest = max(current, largest);
  }

  return largest;
}

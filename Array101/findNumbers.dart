/**
 *  Find Numbers with Even Number of Digits

Solution
Given an array nums of integers, return how many of them contain an even number of digits.

 

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
 

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 105
 * 
 */

void main() {
  List<int> nums = [12, 345, 2, 6, 7896];
  print(findNumbers(nums));
}

int findNumbers(List<int> nums) {
  /*
1. Go through nums 
2. Convert to String to count characters
3. count every even number of digits
4.return total of even numbers
    */
  int count = 0;
  for (int num in nums) {
    if (num.toString().length % 2 == 0) {
      count++;
    }
  }
  return count;
}

// 349. Intersection of Two Arrays
// Easy
// Topics
// Companies
// Given two integer arrays nums1 and nums2, return an array of their
// intersection
// . Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

class Solution {
  List<int> intersection(List<int> nums1, List<int> nums2) {
    Set<int> seen = Set<int>.from(nums1);
    List<int> res = [];

    for (int n in nums2) {
      if (seen.contains(n)) {
        res.add(n);
        seen.remove(n);
      }
    }
    return res;
  }
}

void main() {
  Solution solution = new Solution();
  List<int> nums1 = [1, 2, 2, 1];
  List<int> nums2 = [2, 2];
  List<int> result = solution.intersection(nums1, nums2);
  print(result);
}

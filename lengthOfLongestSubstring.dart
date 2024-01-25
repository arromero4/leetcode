// 3. Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// Companies
// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */

void main() {
  String s = "abcabcbb";
  print(lengthOfLongestSubstring(s));
}

int lengthOfLongestSubstring(String s) {
  int max = 0;
  int windowStart = 0;
  Map<String, int> soFar = {};
  for (int windowEnd = 0; windowEnd < s.length; windowEnd++) {
    String rightChar = s[windowEnd];
    soFar[rightChar] = (soFar[rightChar] ?? 0) + 1;
    while (soFar[rightChar]! > 1) {
      String leftChar = s[windowStart];
      if (soFar[leftChar]! > 1) {
        soFar[leftChar] = soFar[leftChar]! - 1;
      } else {
        soFar.remove(leftChar);
      }
      windowStart++;
    }
    max = (windowEnd - windowStart + 1) > max
        ? (windowEnd - windowStart + 1)
        : max;
  }
  return max;
}

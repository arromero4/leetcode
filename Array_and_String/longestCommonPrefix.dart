// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

void main() {
  List<String> strs = ["flower", "flow", "flight"];
  print(longestCommonPrefix(strs));
}

String longestCommonPrefix(List<String> strs) {
  String prefix = "";
  if (strs.length == 0) {
    return prefix;
  }
  for (var i = 0; i < strs[0].length; i++) {
    String character = strs[0][i];
    for (var j = 0; j < strs.length; j++) {
      if (strs[j][i] != character) {
        return prefix;
      }
    }
    prefix = prefix + character;
  }
  return prefix;
}

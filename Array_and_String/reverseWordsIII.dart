// 557. Reverse Words in a String III
// Easy
// Topics
// Companies
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */

void main() {
  String s = "Let's take LeetCode contest";
  print(reverseWords(s));
}

String reverseWords(String s) {
  List<String> chars = s.split('');
  int left = 0;

  for (int right = 0; right < chars.length; right++) {
    if (chars[right] == ' ' || right == chars.length - 1) {
      int temp_l = left;
      int temp_r = right - 1;

      if (right == chars.length - 1) {
        temp_r = right;
      }

      while (temp_l < temp_r) {
        String temp = chars[temp_l];
        chars[temp_l] = chars[temp_r];
        chars[temp_r] = temp;
        temp_l++;
        temp_r--;
      }

      left = right + 1;
    }
  }
  return chars.join('');
}

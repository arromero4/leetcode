// 67. Add Binary
// Solved
// Easy
// Topics
// Companies
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
void main() {
  // String a = "1010";
  // String b = "1011";
  // print(addBinary(a, b));
  print((0 / 2).floor());
}

// String addBinary(String a, String b) {
//   String res = "";
//   int carry = 0;
//   List<String> a1 = a.split('').reversed.toList();
//   List<String> b1 = b.split('').reversed.toList();

//   for (int i = 0; i < max(a1.length, b1.length); i++) {
//     int digitA = i < a1.length ? int.parse(a1[i]) : 0;
//     int digitB = i < b1.length ? int.parse(b1[i]) : 0;
//     int total = digitA + digitB + carry;
//     int char = total % 2;
//     res = "$char$res";
//     carry = (total / 2).floor();
//   }
//   if (carry != 0) {
//     res = "1$res";
//   }
//   return res;
// }

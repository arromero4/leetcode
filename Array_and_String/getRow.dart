// 119. Pascal's Triangle II
// Easy
// Topics
// Companies
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

// Constraints:

// 0 <= rowIndex <= 33

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

void main() {
  int rowIndex = 3;
  getRow(rowIndex);
}

List<int> getRow(int rowIndex) {
  List<int> result = [1];
  for (var i = 0; i < rowIndex; i++) {
    List<int> nextRow = List.filled(result.length + 1, 0);
    for (var j = 0; j < result.length; j++) {
      nextRow[j] += result[j];
      nextRow[j + 1] += result[j];
    }
    result = nextRow;
  }
  return result;
}

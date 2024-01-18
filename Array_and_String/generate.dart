// 118. Pascal's Triangle
// Easy
// Topics
// Companies
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

void main() {
  int numRows = 5;
  print(generate(numRows));
}

List<List<int>> generate(int numRows) {
  List<List<int>> result = [
    [1]
  ];

  for (int i = 1; i < numRows; i++) {
    List<int> temp = [0, ...result[result.length - 1], 0];
    List<int> row = [];

    for (int j = 0; j < temp.length - 1; j++) {
      row.add(temp[j] + temp[j + 1]);
    }
    result.add(row);
  }
  return result;
}

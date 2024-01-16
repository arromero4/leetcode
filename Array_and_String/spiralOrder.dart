// 54. Spiral Matrix
// Medium
// Topics
// Companies
// Hint
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
void main() {
  List<List<int>> matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  print(spiralOrder(matrix));
}

List<int> spiralOrder(List<List<int>> matrix) {
  int top = 0;
  int left = 0;
  int bottom = matrix.length - 1;
  int right = matrix[0].length - 1;
  List<int> result = [];
  int size = matrix.length * matrix[0].length;

  while (result.length < size) {
    for (int i = left; i <= right && result.length < size; i++) {
      result.add(matrix[top][i]);
    }
    top++;

    for (int i = top; i <= bottom && result.length < size; i++) {
      result.add(matrix[i][right]);
    }
    right--;

    for (int i = right; i >= left && result.length < size; i--) {
      result.add(matrix[bottom][i]);
    }
    bottom--;

    for (int i = bottom; i >= top && result.length < size; i--) {
      result.add(matrix[i][left]);
    }
    left++;
  }
  return result;
}

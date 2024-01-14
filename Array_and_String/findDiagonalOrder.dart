// 498. Diagonal Traverse
// Solved
// Medium
// Topics
// Companies
// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

// Example 1:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]
// Example 2:

// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// -105 <= mat[i][j] <= 105
import 'dart:collection';

/**
 * @param {number[][]} mat
 * @return {number[]}
 */

void main() {
  List<List<int>> mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  print(findDiagonalOrder(mat));
}

List<Object> findDiagonalOrder(List<List<int>> mat) {
  //List<int> flat = mat.expand((i) => i).toList();
  if (mat.length == 1) return mat.expand((i) => i).toList();
  int row = mat.length;
  int col = mat[0].length;

  List<List<int>> res = List.generate(row + col - 1, (index) => []);

  for (int i = 0; i < row; i++) {
    for (int j = 0; j < col; j++) {
      if ((i + j) % 2 == 0) {
        res[i + j].insert(0, mat[i][j]);
      } else {
        res[i + j].add(mat[i][j]);
      }
    }
  }

  return res.expand((i) => i).toList();
}

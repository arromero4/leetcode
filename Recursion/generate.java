// 118. Pascal's Triangle
// Solved
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

class Solution {
  public List<List<Integer>> generate(int numRows) {
      List<List<Integer>> res = new ArrayList<>();

      //add the first row
      res.add(new ArrayList<>());
      res.get(0).add(1);

      //generate subsequent rows
      for(int i = 1; i < numRows; i++){
          List<Integer> prevRow = res.get(res.size() - 1);
          List<Integer> row = new ArrayList<>();

          //add the first element of each row
          row.add(1);

          //generate elements in between
          for(int j = 1; j < prevRow.size(); j++){
              row.add(prevRow.get(j-1) + prevRow.get(j));
          }

          //add the last element of each row
          row.add(1);

          //add the row to the result list
          res.add(row);
      }
      return res;
  }
}
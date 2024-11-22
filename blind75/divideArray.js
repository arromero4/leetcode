// Optimizing Box Weigths
// An Amazon Fulfillment Associate has a set of items that need to be
// packed into two boxes. Given an integer array of the item.
// Weigths(arr) to be packed, divide the item Weigths into two subsets, A and B, for packing into the
// Associated boxes, while respecting the following condintions:

// * the intersection of A and B is null
// * the union A and B is equal to the original array
// * the number of elements in subset A is minimal
// * the sum of A's weights is greater than the sum of B's weights

// Return the subset A in increasing order where the sum of A's weights
// is greater than the sum of B's weights. if more than one subset A exists,
// return the one with the maximal total weight

// n = 5
// arr = [3,7,5,6,2]
// the 2 subsets in arr that satisfy the conditions for A [5,7] and [6,7]:
// A is minimal (size 2) --> why size 2?
// SumA = (5+7) = 12 > SumB = (2+3+6) = 11
// SumA = (6+7) = 13 > SumB = (2+3+5) = 10
// the intersection of A and B is null and their union is equal to arr
// the subset A where the sum of tis weigth is maximal is [6,7]
function divideArray(arr) {
  // Step 1: Sort the array in descending order
  arr.sort((a, b) => b - a);

  // Step 2: Calculate the total sum of the array
  let totalSum = arr.reduce((acc, num) => acc + num, 0);

  // Step 3: Initialize variables for subset A and B
  let A = [];
  let B = [];
  let sumA = 0;

  // Step 4: Loop through the array and add elements to A until its sum exceeds half of totalSum
  for (let num of arr) {
      if (sumA <= totalSum / 2) {
          A.push(num);
          sumA += num;
      } else {
          B.push(num);
      }
  }

  // Step 5: Sort A to ensure it is lexicographically smaller if there are multiple valid subsets
  

  // Step 6: Return the subset A (since we want the maximal weight for A)
  return A.sort((a, b) => a - b);;
}

// Example usage:
const arr = [3, 7, 5, 6, 2];
const result = divideArray(arr);
console.log(result);  // Output: [6, 7]

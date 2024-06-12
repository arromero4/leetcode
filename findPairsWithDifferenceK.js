// given an array of distinct integer values, count the number of pairs of integer that have difference k. For example, given the array [1,7,5,9,2,12,,3] and k = 2, there are four pairs with difference 2: 
// (1,3),  (3,5), (5,7), (7,9)
// do it with javascript and using hash table, and show the pairs


function findPairsWithDifferenceK(arr, k) {
  let sortedArr = arr.sort()
  // Step 1: Create a hash table
  const hashTable = {};
  const pairs = [];
  
  // Fill the hash table with array elements for quick access
  sortedArr.forEach(element => {
      hashTable[element] = true;
  });
console.log(hashTable)
  // Step 2: Iterate through the array
  sortedArr.forEach(element => {
      // Check for both possible numbers that can form a pair with the current element
      if (hashTable[element + k]) {
          pairs.push([element, element + k]);
      }
      if (hashTable[element - k]) {
          pairs.push([element, element - k]);
      }
  });

  // Return the pairs
  return pairs;
}

// Example usage
const arr = [1, 7, 5, 9, 2, 12, 3];
const k = 2;
const pairs = findPairsWithDifferenceK(arr, k);

console.log(`There are ${pairs.length / 2} pairs with difference ${k}:`, pairs);
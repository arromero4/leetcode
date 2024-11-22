/**
 * Items in Containers
 * ----------------
 * Amazon would like to know how much inventory exists in their closed inventory
 * comparments. Given a string s consisting of items as "*" and closed comparments as
 * an open and close "|", an array of starting indices startIndices, and an array of ending
 * indices endIndices, determine the number of items in closed comparments within the
 * substring between the two indices, inclusive.
 * 
 * *An item is represented as an asterisk ('*' = ascii decimal 42)
 * *A comparment is represented as a pair of pipes that may or may not have
 * items between them ('|' = ascii decimal 124)
 * 
 * s = '|**|*|*'
 * startIndices = [1,1]
 * endIndices = [5,6]
 * output = [2,3]
 * 
 * s = '*|*|'
 * startIndices = [1]
 * endIndices = [3]
 * output = [0]
 * 
 * 
 * The string has a total of 2 closed comparments, one with 2 items and one with 1 item.
 * For the first pair of indices, (1,5), the substring is '|**|*'. there are 2 items in a comparment. For the second pair of indices (1,6), the substring is '|**|*|' and there are 2+1 = 3 items in comparments.
 * Both of the answers are returned in an array [2,3] 
 * 
 */
function countItemsInCompartments(s, startIndices, endIndices) {
  const results = [];

  for (let i = 0; i < startIndices.length; i++) {
    let l = startIndices[i] - 1;
    let r = endIndices[i] - 1;
    console.log(s.slice(l, r))
    // Mover el puntero izquierdo hasta encontrar el primer '|'
    while (l <= r && s[l] !== '|') {
      l++;
    }

    // Mover el puntero derecho hasta encontrar el primer '|'
    while (r >= l && s[r] !== '|') {
      r--;
    }

    // Contar los asteriscos entre los punteros `l` y `r`
    let count = 0;
    if (l < r) {
      for (let j = l + 1; j < r; j++) {
        if (s[j] === '*') {
          count++;
        }
      }
    }

    // Agregar el resultado a la lista
    results.push(count);
  }

  return results;
}


// Test cases
console.log(countItemsInCompartments('|**|*|*', [1, 1], [5, 6])); // Output: [2, 3]
console.log('--------------------------------')
console.log(countItemsInCompartments('*|*|', [1], [3])); // Output: [0]
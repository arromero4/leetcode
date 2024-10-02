// 1. Question 1

// There is an array of integers, arr, and an integer value X. For each element in another array of integers, query_values, return the 1-based index in arr of the query_values[i] occurrence of X. If X does not occur query_values[i] times, return -1 for that query.

// Example
// txt
// Copy code
// arr = [1, 2, 20, 8, 8, 1, 2, 5, 8, 0]
// X = 8
// query_values = [100, 4, 2]
// There is no 100th or 4th instance of X = 8 in arr. The 2nd occurrence is at index 5. Return [-1, -1, 5].

// Function Description
// Complete the function kthOccurrence in the editor.

// kthOccurrence has the following parameter(s):

// int X: the integer to search for
// int arr[n]: the elements to search
// int query_values[q]: the occurrence of X to find the index of
// Returns
// int[q]: the index in arr or -1 for each query

function kthOccurrence(X, arr, query_values) {
  let occurrences = [] //para almacenar ocurrencias
  for (let i  = 0; i < arr.length; i++) {
    if(arr[i] === X) {
      occurrences.push(i + 1) //si es igual a X, añadimos el index + 1 porque es base-1
    }
    
  }
  console.log(occurrences)
  let result = []
  for(let query of query_values){ //recorremos el query_values 
    if(query <= occurrences.length){ //SI QUERY es menor o igual que las ocurrencias 
      result.push(occurrences[query - 1]) //añadimos al resultado el bnumero de la ocurrencia, es decir, si es 2, se añade la segunda, si es 3, se añade la tercera ocurrencia, y asi sucesivamente
    }else{
      result.push(-1) //sino se encuentra es -1 
    }
  }
  return result
}
// Ejemplo de uso
let arr = [1, 2, 20, 8, 8, 1, 2, 5, 8, 0];
let X = 8;
let query_values = [100, 4, 3];

console.log(kthOccurrence(X, arr, query_values)); // Salida: [-1, -1, 5]
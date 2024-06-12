/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr1
 *  2. INTEGER_ARRAY arr2
 */

function minimumMoves(arr1, arr2) {
  // Brute force
  let totalMoves = 0
  for(let i=0; i< arr1.length; i++){
      
      let num1 = arr1[i].toString()
      let num2 = arr2[i].toString()
      console.log(num1)
      
      for(let j=0;j < num1.length;j++){
          let digit1 = parseInt(num1[j], 10)
          let digit2 = parseInt(num2[j], 10)
          
          totalMoves = totalMoves + Math.abs(digit1 - digit2)
      }
  }
  return totalMoves
}

let arr1 = [123, 543]
let arr2 = [321, 279]

minimumMoves(arr1, arr2)
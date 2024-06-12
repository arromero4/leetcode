/*
 * Complete the 'ConsecutiveSumExists' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numsArr
 *  2. INTEGER sumValue
 */

function ConsecutiveSumExists(numsArr, sumValue) {
  // Write your code here
  let start = 0
  let sum = 0
  for(let end = 0; end < numsArr.length; end++){
      sum += numsArr[end]//0 1 5 5 1 1 = 7
      console.log(sum)
      
      while(sum > sumValue && start <= end){//6 > 7 && 3 <= 3
          sum -= numsArr[start] // 10 - 5 = 5
          console.log('if sum > sumValue',sum)
          start++ // 3  
      }
      
      if(sum == sumValue){
          return start
      }
  }
  return -1
}
let numsArr = [0,1,5,5,1,1,2,1,8,6], sumValue = 7
//let numsArr = [0,1,5,5,45,1,2,1,2,6], sumValue = 7
ConsecutiveSumExists(numsArr, sumValue)
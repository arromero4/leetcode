/**
 * 412. Fizz Buzz
 * 
 *
 *  Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:

1 <= n <= 104
 * 
 */
 //time complexity O(n)
 //space complexity O(1)
 var fizzBuzz = function(n) {
    let answer = []
    for(let i=1;i <= n;i++){
        let divisibleBy3 =  i % 3 == 0
        let divisibleBy5 =  i % 5 == 0
        
        if(divisibleBy3 && divisibleBy5){
            answer.push('FizzBuzz')
        }
        else if(divisibleBy3){
            answer.push('Fizz')
        }
        else if(divisibleBy5){
            answer.push('Buzz')
        }
        else{
            answer.push(i.toString())
        }
    }
    console.log(answer.join('\n'))
    return answer
};
let n = 5
console.log(fizzBuzz(n))
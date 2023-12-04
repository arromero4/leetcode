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
void main() {
  int n = 5;
  print(fizzBuzz(n));
}

List<String> fizzBuzz(n) {
  List<String> answer = [];

  for (var i = 1; i <= n; i++) {
    bool divisibleBy3 = i % 3 == 0;
    bool divisibleBy5 = i % 5 == 0;

    if (divisibleBy3 && divisibleBy5) {
      answer.add('FizzBuzz');
    } else if (divisibleBy3) {
      answer.add('Fizz');
    } else if (divisibleBy5) {
      answer.add('Buzz');
    } else {
      answer.add(i.toString());
    }
  }
  return answer;
}
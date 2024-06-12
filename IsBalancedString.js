function IsBalancedString(s) {
  //brute force

  let countA = 0, countB = 0, countC = 0, countD = 0;
  for(let i=0;i<s.length;i++){
      switch(s[i]){
          case 'a':
              countA++
              break
          case 'b':
              countB++
              break
          case 'c':
              countC++
              break
          case 'd':
              countD++
              break
      }
  }
  return countA == countC && countB == countD
}

let s = 'acbd'
IsBalancedString(s)
function countAndEncode(letters) {
  const countLetters = {}

  for(let letter of letters){
    countLetters[letter] = (countLetters[letter] || 0) + 1
  }
  console.log(countLetters)
  let result = ""

  for(let letter in countLetters){
    result += `${countLetters[letter]}${letter}`
  }
  return result
}

// Ejemplo de uso
const letters = "aaaabbccc";
const result = countAndEncode(letters);
console.log(result); // "4a2b3c"
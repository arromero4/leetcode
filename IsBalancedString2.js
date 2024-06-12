function IsBalancedString(s) {
    // Usar un objeto para contar las ocurrencias de cada carácter
    let charCounts = {};
    
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      console.log(char)
      if (charCounts[char] === undefined) {
        // Si el carácter no está en el objeto, inicializar su cuenta en 1
        charCounts[char] = 1;
      } else {
        // Si el carácter ya está en el objeto, incrementar su cuenta
        charCounts[char]++;
      }
      
    }
    console.log(charCounts);

    // Verificar el balance de 'a' con 'c' y 'b' con 'd'
    return (charCounts['a'] === charCounts['c']) && (charCounts['b'] === charCounts['d']);
  }
  let s = 'acbd'
  //let s = 'aaacccbbddd';
  console.log(IsBalancedString(s)); // true
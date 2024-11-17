function createMagicPotion(potions, target) {
  const potionsMap = new Map();

  for(let i = 0; i < potions.lenght; i++){
    const curr = potions[i]
    const diff = target - curr
    if(potionsMap.has(diff)){
      return [potionsMap.get(diff),i]
    }
    potionsMap.set(curr, i);
  }

}
const potions = [4, 5, 6, 2]
const target = 8
console.log(createMagicPotion(potions, target))
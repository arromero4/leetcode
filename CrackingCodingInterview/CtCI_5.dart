void printPairs(List<int> arrA, List<int> arrB) {
  for (int i = 0; i < arrA.length; i++) {
    for (int j = 0; j < arrB.length; j++) {
      for (var k = 0; k < 100; k++) {
        print('${arrA[i]} - ${arrB[j]}');
      }
    }
  }
}

void main() {
  List<int> arrA = [0, 1, 2, 3];
  List<int> arrB = [0, 1, 2, 3];

  printPairs(arrA, arrB);
}

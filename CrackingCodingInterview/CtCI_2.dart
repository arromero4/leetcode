void printPairs(List<int> arr) {
  for (int i = 0; i < arr.length; i++) {
    for (int j = 0; j < arr.length; j++) {
      print('${arr[i]} , ${arr[j]}');
    }
  }
}
//improve everyday 
void main() {
  List<int> arr = [1, 2, 3, 4];
  printPairs(arr);
}

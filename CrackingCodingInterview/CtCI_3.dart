void printPairs(n) {
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      print('${i} , ${j}');
    }
  }
}

void main() {
  int n = 4;
  printPairs(n);
}

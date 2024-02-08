void reverse(List<int> arrA) {
  for (int i = 0; i < arrA.length / 2; i++) {
    int other = arrA.length - i - 1;
    int temp = arrA[i];
    arrA[i] = arrA[other];
    arrA[other] = temp;
  }
  print(arrA);
}

void main() {
  List<int> arrA = [0, 1, 2, 3];

  reverse(arrA);
}

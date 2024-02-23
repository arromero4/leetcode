void main() {
  double n = 4;
  powersOf2(n);
}

double powersOf2(double n) {
  if (n < 1) {
    return 0;
  } else if (n == 1) {
    print(1);
    return 1;
  } else {
    double prev = powersOf2(n / 2);
    double curr = prev * 2;
    print(curr);
    return curr;
  }
}

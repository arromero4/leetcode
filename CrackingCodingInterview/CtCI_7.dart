import 'dart:math';

bool isPrime(int n) {
  for (int x = 2; x * x <= n; x++) {
    if (n % x == 0) {
      return false;
    }
  }
  return true;
}

bool isPrime2(int n) {
  for (int x = 2; x <= sqrt(n); x++) {
    if (n % x == 0) {
      return false;
    }
  }
  return true;
}

void main() {
  int n = 33;

  print(isPrime(n));
  print(isPrime2(n));
}

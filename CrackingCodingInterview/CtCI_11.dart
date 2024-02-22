void main() {
  int n = 5;
  allFibs(n);
}

void allFibs(int n) {
  for (var i = 0; i <= n; i++) {
    print("${i} : ${fib(i)}");
  }
}

int fib(int n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

void main() {
  int n = 5;
  allFibs(n);
}

void allFibs(int n) {
  List<int> memo = List.filled(n + 1, 0); // Inicializar la lista con 0s;
  print(memo);
  for (var i = 0; i < n; i++) {
    print("${i} : ${fib(i, memo)} - ${memo}");
  }
}

int fib(int n, List<int> memo) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else if (memo[n] > 0) {
    return memo[n];
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

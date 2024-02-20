void foo(List<int> arr) {
  int sum = 0;
  int product = 1;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  for (var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  print('$sum, $product');
}

void main() {
  List<int> arr = [1, 2, 3, 4, 5, 6, 7];
  foo(arr);
}
//these examples will help me to crack
//an interview 

//
void main() {
  List<int> nums = [1, 2, 3, 1];
  print(containsDuplicate(nums));
}

bool containsDuplicate(List<int> nums) {
  var hashset = <int>{};
  for (var n in nums) {
    if (hashset.contains(n)) {
      return true;
    }
    hashset.add(n);
  }
  return false;
}

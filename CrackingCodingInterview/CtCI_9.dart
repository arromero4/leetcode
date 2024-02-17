void main() {
  String str = "abcd";
  permutation(str);
}
//add comment

//need to read the book
void permutation(String str, [String prefix = ""]) {
  if (str.length == 0) {
    print(prefix);
  } else {
    for (var i = 0; i < str.length; i++) {
      String rem = str.substring(0, i) + str.substring(i + 1);
      permutation(rem, prefix + str[i]);
    }
  }
}

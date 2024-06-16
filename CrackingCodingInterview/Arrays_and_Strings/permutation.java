package CrackingCodingInterview.Arrays_and_Strings;

// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
public class permutation {
  public static void main(String[] args) {
    String isStringS = "strS";
    String iStringT = "strT";
    System.out.println(isPermutation(isStringS, iStringT));

  }

  static String sort(String s) {
    char[] content = s.toCharArray();
    java.util.Arrays.sort(content);
    return new String(content);
  }

  static boolean isPermutation(String s, String t){
    if(s.length() != t.length()){
      return false;
    }
    return sort(s).equals(sort(t));
  }

}
